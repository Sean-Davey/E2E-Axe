export function logAxeViolations(violations) {
    let violationsLogOutput = '\n';
    if (violations.length > 0) {
      violationsLogOutput = violationsLogOutput + '\n';
      violationsLogOutput = violationsLogOutput + '\n';
      violationsLogOutput = violationsLogOutput + '-------------- AXE Violations Start ------------------------' + '\n';
      violations.forEach((violation) => {
        violationsLogOutput = violationsLogOutput + '\n' + 'AXE Violation' + '\n';
        violationsLogOutput = violationsLogOutput + 'Type: ' + violation.id + '\n';
        violationsLogOutput = violationsLogOutput + 'Impact: ' + violation.impact + '\n';
        violationsLogOutput = violationsLogOutput + 'Description: ' + violation.description + '\n';
        violationsLogOutput = violationsLogOutput + 'Help URL: ' + violation.helpUrl + '\n';
        violationsLogOutput = violationsLogOutput + 'WCAG Overview: ' + 'https://www.w3.org/WAI/WCAG21/Understanding/' + '\n';
        violationsLogOutput = violationsLogOutput + 'WCAG Tutorials: ' + 'https://www.w3.org/WAI/tutorials/' + '\n';
      });
      violationsLogOutput = violationsLogOutput + '\n' + '-------------- AXE Violations End --------------------------' + '\n';
    }
    console.log('\x1b[31m', violationsLogOutput);
    console.log('\x1b[37m', '\n');
  }