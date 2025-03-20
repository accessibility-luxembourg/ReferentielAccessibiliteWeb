/**
 * Link Checker for RAWeb
 * 
 * This script checks for broken links in Markdown files and fixes them
 * All links are considered relative to the main README.md file
 */

const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const md = new markdownIt();

// Root directory of the project
const ROOT_DIR = path.resolve(__dirname, '..');

// Function to parse .gitignore file and get patterns to ignore
function getIgnorePatterns() {
  const gitignorePath = path.join(ROOT_DIR, '.gitignore');
  let patterns = [];
  
  try {
    if (fs.existsSync(gitignorePath)) {
      const content = fs.readFileSync(gitignorePath, 'utf8');
      patterns = content.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('//') && !line.startsWith('#'));
      console.log(`Loaded ${patterns.length} ignore patterns from .gitignore`);
    } else {
      console.log('No .gitignore file found');
    }
  } catch (error) {
    console.error(`Error reading .gitignore: ${error.message}`);
  }
  
  return patterns;
}

// Function to check if a path matches any ignore pattern
function shouldIgnore(filePath, ignorePatterns) {
  // Get relative path from root
  const relativePath = path.relative(ROOT_DIR, filePath);
  
  // Check if the path matches any ignore pattern
  for (const pattern of ignorePatterns) {
    // Handle exact matches
    if (relativePath === pattern) {
      return true;
    }
    
    // Handle directory matches (patterns ending with /)
    if (pattern.endsWith('/') && relativePath.startsWith(pattern)) {
      return true;
    }
    
    // Handle file matches
    if (!pattern.endsWith('/') && 
        (relativePath === pattern || 
         relativePath.startsWith(pattern + '/') || 
         path.basename(relativePath) === pattern)) {
      return true;
    }
    
    // Handle wildcard matches (very basic implementation)
    if (pattern.includes('*')) {
      const regexPattern = pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*');
      const regex = new RegExp(`^${regexPattern}$`);
      if (regex.test(relativePath) || regex.test(path.basename(relativePath))) {
        return true;
      }
    }
  }
  
  return false;
}

// Function to extract all links from a markdown file
function extractLinks(markdownContent) {
  const tokens = md.parse(markdownContent, {});
  const links = [];
  
  tokens.forEach(token => {
    if (token.type === 'inline' && token.children) {
      token.children.forEach(child => {
        if (child.type === 'link_open') {
          const href = child.attrs.find(attr => attr[0] === 'href');
          // Only include links that end with .md and are relative (not http/https or anchors)
          if (href && href[1] && 
              !href[1].startsWith('http') && 
              !href[1].startsWith('#') &&
              href[1].endsWith('.md')) {
            links.push(href[1]);
          }
        }
      });
    }
  });
  
  return links;
}

// Function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Function to resolve a relative link from a source file
function resolveLink(sourceFile, link) {
  const sourceDir = path.dirname(sourceFile);
  return path.resolve(sourceDir, link);
}

// Function to find files with a specific name in a directory (recursively)
function findFileByName(dir, filename, ignorePatterns = []) {
  const results = [];
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip ignored files and directories
      if (shouldIgnore(fullPath, ignorePatterns)) {
        continue;
      }
      
      if (entry.isDirectory()) {
        results.push(...findFileByName(fullPath, filename, ignorePatterns));
      } else if (entry.name === filename) {
        results.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}: ${error.message}`);
  }
  
  return results;
}

// Function to calculate relative path from source to target
function getRelativePath(sourceFile, targetFile) {
  const sourceDir = path.dirname(sourceFile);
  return path.relative(sourceDir, targetFile).replace(/\\/g, '/');
}

// Function to fix a broken link in a Markdown file
function fixLink(content, originalLink, newLink) {
  // Escape special characters for regex
  const escapedLink = originalLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}\\)`, 'g');
  return content.replace(regex, (match, text) => `[${text}](${newLink})`);
}

// Scan a markdown file for broken links
function checkFile(filePath, fix = false, ignorePatterns = []) {
  console.log(`Checking ${filePath}...`);
  const content = fs.readFileSync(filePath, 'utf8');
  const links = extractLinks(content);
  
  let newContent = content;
  let brokenLinks = [];
  let fixedLinks = [];
  
  links.forEach(link => {
    const resolvedPath = resolveLink(filePath, link);
    const exists = fileExists(resolvedPath);
    
    if (!exists) {
      console.log(`  - Broken link found: ${link}`);
      
      // Try to find the correct path by looking for the filename in the project
      const filename = path.basename(link);
      const possibleFiles = findFileByName(ROOT_DIR, filename, ignorePatterns);
      
      if (fix && possibleFiles.length === 1) {
        // If we have exactly one matching file, use it as the fix
        const newRelativePath = getRelativePath(filePath, possibleFiles[0]);
        newContent = fixLink(newContent, link, newRelativePath);
        
        console.log(`    Fixed: ${link} -> ${newRelativePath}`);
        fixedLinks.push({
          original: link,
          fixed: newRelativePath
        });
      } else if (possibleFiles.length > 1) {
        console.log(`    Multiple possible fixes found for ${filename}:`);
        possibleFiles.forEach((file, i) => {
          console.log(`      ${i+1}. ${getRelativePath(filePath, file)}`);
        });
        // For multiple possible fixes, we don't auto-fix
        brokenLinks.push({ 
          original: link, 
          resolvedPath,
          suggestions: possibleFiles.map(file => getRelativePath(filePath, file))
        });
      } else {
        // No fixes found
        brokenLinks.push({ 
          original: link, 
          resolvedPath,
          suggestions: []
        });
      }
    }
  });
  
  // Write the fixed content back to the file if we made any changes
  if (fix && fixedLinks.length > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  Saved ${fixedLinks.length} fixes to ${filePath}`);
  }
  
  return { 
    filePath, 
    brokenLinks,
    fixedLinks,
    hasIssues: brokenLinks.length > 0,
    hasFixed: fixedLinks.length > 0,
    content: newContent
  };
}

// Walk through all markdown files in a directory
function scanDirectory(dir, fix = false, ignorePatterns = [], excludeFiles = []) {
  const results = [];
  
  try {
    // Skip this directory if it's in the ignore list
    if (shouldIgnore(dir, ignorePatterns)) {
      return results;
    }
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip ignored files and directories
      if (shouldIgnore(fullPath, ignorePatterns)) {
        continue;
      }
      
      // Skip explicitly excluded files
      if (excludeFiles.some(excludePath => path.resolve(excludePath) === path.resolve(fullPath))) {
        console.log(`Skipping already processed file: ${fullPath}`);
        continue;
      }
      
      if (entry.isDirectory()) {
        results.push(...scanDirectory(fullPath, fix, ignorePatterns, excludeFiles));
      } else if (entry.name.endsWith('.md')) {
        results.push(checkFile(fullPath, fix, ignorePatterns));
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}: ${error.message}`);
  }
  
  return results;
}

// Main function
function main() {
  const args = process.argv.slice(2);
  const fixMode = args.includes('--fix');
  
  console.log(`Starting markdown link checker${fixMode ? ' in fix mode' : ''}...`);
  
  // Load ignore patterns from .gitignore
  const ignorePatterns = getIgnorePatterns();
  
  // First check the README.md as it's our reference point
  const readmePath = path.join(ROOT_DIR, 'README.md');
  const readmeCheck = checkFile(readmePath, fixMode, ignorePatterns);
  
  // Then scan the rest of the project, excluding README.md which was already processed
  const results = [readmeCheck, ...scanDirectory(ROOT_DIR, fixMode, ignorePatterns, [readmePath])];
  
  // Report summary
  const brokenCount = results.filter(r => r.hasIssues).length;
  const fixedCount = results.filter(r => r.hasFixed).length;
  const totalBrokenLinks = results.reduce((sum, r) => sum + r.brokenLinks.length, 0);
  const totalFixedLinks = results.reduce((sum, r) => sum + r.fixedLinks.length, 0);
  
  console.log(`\nScan complete.`);
  console.log(`- ${brokenCount} files with broken links found`);
  console.log(`- ${totalBrokenLinks} total broken links`);
  
  if (fixMode) {
    console.log(`- ${fixedCount} files fixed`);
    console.log(`- ${totalFixedLinks} links fixed automatically`);
  }
  
  if (brokenCount > 0) {
    console.log('\nFiles with broken links:');
    results.filter(r => r.hasIssues).forEach(result => {
      console.log(`\n${result.filePath}:`);
      result.brokenLinks.forEach(link => {
        console.log(`  - ${link.original}`);
        if (link.suggestions && link.suggestions.length > 0) {
          console.log(`    Suggestions:`);
          link.suggestions.forEach((sugg, i) => {
            console.log(`      ${i+1}. ${sugg}`);
          });
        }
      });
    });
  }
  
  console.log('\nTo fix broken links automatically, run:');
  console.log('node scripts/link-checker.js --fix');
}

// Run the script if called directly
if (require.main === module) {
  main();
}

// Export functions for use in other scripts
module.exports = {
  checkFile,
  scanDirectory,
  extractLinks,
  resolveLink,
  fixLink,
  findFileByName,
  getIgnorePatterns,
  shouldIgnore
};