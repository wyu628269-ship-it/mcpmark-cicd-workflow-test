# Issue Management Automation Workflow

## Overview

This workflow automatically manages issue triage, labeling, sub-task creation, and responses for the `wyu628269-ship-it/mcpmark-cicd-workflow-test` repository. It triggers on issue events (opened, labeled) and provides a comprehensive issue management system.

## Features

### 1. Auto-Labeling
- **Category labels** (`bug`, `epic`, `maintenance`, `enhancement`) based on keywords in issue title
- **Priority labels** (`priority-critical`, `priority-high`, `priority-medium`, `priority-low`) based on keywords in title and body
- **Status labels** (`needs-triage`, `needs-review`, `first-time-contributor`) for workflow state tracking

### 2. Task Breakdown
- Automatically creates 4 sub-issues for epic-level tasks
- Links sub-issues to parent using "Related to #" references
- Updates parent issue body with checklist of sub-tasks

### 3. Auto-Response
- Welcomes first-time contributors to the repo
- Posts contextual responses based on issue type
- Assigns milestone "v1.0.0" to high/critical priority issues
- Transitions issues from `needs-triage` → `needs-review` after response

## Labels

| Label | Description |
|-------|-------------|
| `bug` | Something isn't working |
| `enhancement` | New feature or request |
| `epic` | Large feature requiring multiple sub-tasks |
| `maintenance` | Maintenance and housekeeping tasks |
| `priority-critical` | Critical priority issue |
| `priority-high` | High priority issue |
| `priority-medium` | Medium priority issue |
| `priority-low` | Low priority issue |
| `needs-triage` | Needs to be reviewed by maintainers |
| `needs-review` | Awaiting review from maintainers |
| `first-time-contributor` | Issue by first-time contributor in this repo |

## Usage

Simply create an issue with relevant keywords in the title:
- Use "bug", "epic", "maintenance" for category labels
- Use priority keywords: "critical", "urgent", "important", "high", "medium", "normal", "low", "minor"
- Leave `needs-triage` label on for automatic processing

## Testing

Test issues created to verify workflow:
1. **Bug Issue**: "Bug: Login form validation not working" → `bug`, `priority-high`, milestone v1.0.0
2. **Epic Issue**: "Epic: Redesign user dashboard interface" → `epic`, creates 4 sub-issues, milestone v1.0.0
3. **Maintenance Issue**: "Weekly maintenance cleanup and refactor" → `maintenance`, `priority-medium`

## Note

This is an **asynchronous workflow** - it triggers on issue events but may take a few moments to complete all actions.