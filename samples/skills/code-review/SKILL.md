---
name: code-review
description: Team code review checklist - use for reviewing code, checking for bugs, security issues, code quality, and best practices
---

# Code Review Skill

Apply this checklist when reviewing code.

## Security Checklist

- [ ] No hardcoded secrets (API keys, passwords, tokens)
- [ ] SQL queries use parameterized statements
- [ ] User input is validated and sanitized
- [ ] No sensitive data in logs or error messages
- [ ] Authentication checks on protected routes

## Code Quality Checklist

- [ ] Functions are under 50 lines
- [ ] No console.log/print statements in production code
- [ ] All async operations have error handling (try/catch)
- [ ] No TODO comments without issue references
- [ ] Variable and function names are clear and descriptive

## Testing Checklist

- [ ] New code has corresponding tests
- [ ] Edge cases are covered (null, empty, boundary values)
- [ ] No skipped tests without explanation

## Output Format

Present findings as:

```
## Code Review: [filename]

### Security
- [PASS/FAIL] Description of finding

### Code Quality
- [PASS/FAIL] Description of finding

### Testing
- [PASS/FAIL] Description of finding

### Summary
[X] items need attention before merge
```
