# Claw — Engineering Agent Workflow

> **Developer tooling / agent instructions** · architecture · QA · security · release discipline

`claw` is a reusable working repository for agent-assisted software development. It contains repository rules, domain/FSM guidance and workflow documents used to keep coding agents aligned with an existing architecture instead of treating every task as greenfield generation.

## Purpose

The repository is used as a shared source for engineering behavior such as:

- read the existing architecture before editing code;
- preserve domain terminology and product boundaries;
- keep FSM/user-flow documentation synchronized;
- run appropriate tests before considering a task complete;
- review security and deployment risks;
- document rollout/rollback expectations;
- avoid hardcoding product/business configuration when it belongs in runtime/admin data.

## Public-repository cleanup

Project/customer-specific PDF working documents were removed from the public branch. Reusable engineering instructions remain here; customer/project artifacts should live in the corresponding private/project repository instead.

## Portfolio note

This is supporting developer tooling, not a primary application portfolio project. The production application repositories on this profile are the main examples of backend and product engineering.
