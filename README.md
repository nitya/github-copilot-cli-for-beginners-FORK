# GitHub Copilot CLI for Beginners

Learn to supercharge your development workflow with AI-powered command-line assistance.

## What You'll Learn

This hands-on course takes you from zero to productive with GitHub Copilot CLI. By the end, you'll confidently use AI to review code, generate tests, debug issues, and automate workflows: all from your terminal.

**No AI experience required.** If you can use a terminal, you can learn this.

## Course Structure

| Chapter | Title | What You'll Build |
|---------|-------|-------------------|
| 00 | [Quick Start](./00-quick-start/README.md) | Installation and verification |
| 01 | [First Steps](./01-setup-and-first-steps/README.md) | Live demos + three interaction modes |
| 02 | [Context and Conversations](./02-context-conversations/README.md) | Multi-file project analysis |
| 03 | [Development Workflows](./03-development-workflows/README.md) | Code review, debug, test generation |
| 04 | [Agents and Custom Instructions](./04-agents-custom-instructions/README.md) | Specialized AI assistants |
| 05 | [Skills System](./05-skills/README.md) | Reusable CLI commands |
| 06 | [MCP Servers](./06-mcp-servers/README.md) | Connect to GitHub, databases, APIs |
| 07 | [Advanced Workflows](./07-advanced-workflows/README.md) | Production-ready integrations |

## Prerequisites

Before starting, ensure you have:

- [ ] **GitHub account**: [Create one free](https://github.com/signup)
- [ ] **GitHub Copilot access**: [Free for students/teachers](https://education.github.com/pack), or [$10/month subscription](https://github.com/features/copilot)
- [ ] **Node.js v18+**: [Download here](https://nodejs.org/) (for npm installation)
- [ ] **Terminal basics**: Comfortable with `cd`, `ls`, running commands

## Quick Start

Can't wait? Run this in your terminal right now:

```bash
# Install (choose one)
brew install copilot-cli          # macOS/Linux
winget install GitHub.Copilot     # Windows
npm install -g @github/copilot    # All platforms

# Start and authenticate
copilot
> /login

# See the magic
copilot -p "Explain what GitHub Copilot CLI can do for developers"
```

Then head to [Chapter 00](./00-quick-start/README.md) for the full quick start experience.

## How This Course Works

Each chapter follows the same pattern:

1. **Real-World Analogy**: Understand the concept through familiar comparisons
2. **Core Concepts**: Learn the essential knowledge
3. **Hands-On Examples**: Run actual commands and see results
4. **Assignment**: Practice what you learned
5. **What's Next**: Preview of the following chapter

**Code examples are runnable.** Every bash block in this course can be copied and executed in your terminal.

## Three Ways to Extend Copilot CLI

As you progress through the course, you'll learn three powerful extension mechanisms:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   AGENTS (Chapter 04)                                       │
│   Change HOW the AI thinks                                  │
│   Example: Frontend expert, Security auditor                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   SKILLS (Chapter 05)                                       │
│   Add new COMMANDS the AI can use                           │
│   Example: /my-code-review, /generate-tests                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   MCP SERVERS (Chapter 06)                                  │
│   Connect to EXTERNAL services                              │
│   Example: GitHub issues, databases, documentation          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   YOUR WORKFLOW         │
              │   (Chapter 07)          │
              │   Combine all three     │
              └─────────────────────────┘
```

## Sample Files

This repository includes sample code files for hands-on practice:

- `samples/buggy-code/js/`: JavaScript code with intentional bugs for debugging practice
- `samples/buggy-code/python/`: Python code with intentional bugs for debugging practice
- `samples/agents/`: Example agent file configurations
- `samples/mcp-configs/`: MCP server configuration examples

## Quick Reference Card

Need a cheat sheet? The **[Quick Reference Card](./QUICK-REFERENCE.md)** has all commands, syntax, and workflows on one page.

A PDF version is also available: [QUICK-REFERENCE.pdf](./QUICK-REFERENCE.pdf)

### Keeping It Updated

The Quick Reference can be automatically updated using Copilot CLI itself:

```bash
npm install

# Update content by scanning docs with Copilot, then generate PDF
npm run refresh

# Or run steps separately:
npm run update:reference  # Uses Copilot CLI to scan docs and update content
npm run generate:pdf      # Generates PDF from markdown
```

## Getting Help

- **Stuck on a concept?** Each chapter has a troubleshooting section
- **Found a bug?** [Open an issue](https://github.com/microsoft/github-copilot-cli-for-beginners/issues)
- **Want to contribute?** PRs welcome!

## Start Learning

Ready? Let's see what GitHub Copilot CLI can do.

**[Begin with Chapter 00: Quick Start →](./00-quick-start/README.md)**

---

*Course created by Dan Wahlin. Contributions welcome.*
