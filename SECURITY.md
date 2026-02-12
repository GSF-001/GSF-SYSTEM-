# Security Policy🚨

> “Security is not a feature. It is a property of the system.”

GSF (Global Systems Framework) is an experimental coordination architecture.
It does not custody funds, does not operate financial rails, and does not act as a trusted intermediary.

However, **security is still existential**.

This document defines how we think about security, disclosure, and adversarial behavior.

---

## Threat Model

Assume:

- Adversaries are rational, persistent, and well-funded.
- Any public interface will be attacked.
- Any incentive can be gamed.
- Any human process can be corrupted.
- Any centralized control will eventually fail.

GSF is designed under the assumption that:
> The system must survive even if operators, contributors, or institutions fail.

We focus on:

- Protocol-level invariants  
- Incentive alignment  
- Governance capture resistance  
- Coordination failure modes  
- Adversarial stress conditions  

---

## What We Consider “Security Issues”

Please report anything related to:

- Protocol exploits or invariant breaks
- Governance capture vectors
- Incentive manipulation or griefing attacks
- Sybil, collusion, or coordination attacks
- Privilege escalation or role abuse
- Data integrity or consensus-breaking bugs
- Any design flaw that enables systemic abuse

This includes **design-level vulnerabilities**, not only code bugs.

---

## What We Do NOT Consider Security Issues

- Purely theoretical attacks with no plausible execution path
- UX complaints
- Feature requests
- Performance issues without security impact
- Disagreements about governance philosophy (open an Issue instead)

---

## Responsible Disclosure

If you discover a vulnerability:

1. **Do not** open a public issue.
2. **Do not** exploit it on live systems.
3. **Do not** coordinate disclosure publicly first.

Instead:

- Contact the maintainers privately (via GitHub Security Advisories or a private channel if provided).
- Provide:
  - Clear description
  - Attack scenario
  - Impact analysis
  - Proof of concept (if safe)
  - Suggested mitigation (if you have one)

We aim to:

- Acknowledge within a reasonable time
- Assess impact and scope
- Coordinate a fix or mitigation
- Credit the reporter (if they want) after disclosure

---

## No Bounties. No Promises.

GSF does not currently run a bug bounty program.

Security research is welcome.
Good faith reports will be respected.
But **no financial reward is implied or guaranteed**.

This is a protocol experiment, not a product.

---

## Philosophy

GSF does not aim for:
> “Trust us.”

GSF aims for:
> “Verify the system. Break it if you can.”

Security is not enforced by authority.  
It is enforced by **architecture, incentives, and adversarial pressure**.

If you can break it — tell us.  
If you can’t — assume someone else will try.

---

## Final Note

There is no such thing as a perfectly secure system.

There are only:
- Systems that fail silently
- And systems that are designed to survive failure

GSF chooses the second.

— GSF Core
