🗂️ Repository Topology (Protocol-First Layout)

GSF-SYSTEM-/
├── README.md                   # Entry point: philosophy, scope, invariants
├── LICENSE                     # MIT License (code is free, protocol is sacred)
│
├── GSF_BLUEPRINT.md            # Protocol Spec (JSON A–H) — the product
├── GSF — Architecture.md       # Layered system design & trust boundaries
├── GSF — Modules.md            # Replaceable modules & policy engines
├── GSF_STATUS.md               # Research status, non-goals, failure notes
│
├── CONTRIBUTING.md             # How to extend without breaking invariants
├── DISCLAIMER.md               # Research-only, no promises, no liability
│
└── .github/                    # (optional) governance, issues, discussions

> Protocol-first repository.
Code is transport.
Protocol is the artifact.
Everything else is replaceable.




---

🧬 Canonical Documents (Read Order)

1. GSF_BLUEPRINT.md
→ Protocol contracts (JSON A–H), invariants, failure models.


2. GSF — Architecture.md
→ Layered coordination, trust boundaries, non-custodial design.


3. GSF — Modules.md
→ Replaceable engines: policy, automation, external execution.


4. GSF_STATUS.md
→ Research disclaimer. No roadmap. Only iteration.




---

🧨 Design Invariants (Non-Negotiable)

No custody of user funds

No trusted single operator

No hidden state transitions

All critical actions are observable

All modules are replaceable

System must degrade gracefully under failure


> Implementations may change.
Invariants must not.




---

🧠 Contribution Rules (Protocol > Code)

You may:

build implementations

add adapters

write simulators

fork policy engines


You may not:

violate protocol invariants

introduce custodial flows

add privileged backdoors

hide state transitions


If you do, you are no longer implementing GSF.
You are building something else.


---

⚠️ Research Disclaimer

This repository is experimental research.

Not production-ready

Not financial advice

Not legally compliant in all jurisdictions

No guarantees of safety, profit, or correctness


This system is designed to be observed, stressed, and broken.
If it survives hostility, it deserves to exist.


---

🧠 System Topology (ASCII Diagram)

[ User / Client ]
        |
        v
+----------------------+
|  Coordination Layer  |   <- Governance API / Rules / Roles
+----------------------+
        |
        v
+----------------------+
| Reputation Engine   |   <- Non-financial signals only
+----------------------+
        |
        v
+----------------------+
| Automation Layer    |   <- Cron / Workers / Deterministic jobs
+----------------------+
        |
        v
+----------------------+
| External Interfaces |   <- Brokers / Payments / Donors
+----------------------+
        |
        v
   (No custody. No escrow.)

> GSF emits intents.
External systems execute value transfer.
GSF only coordinates signals, rules, and state transitions.
