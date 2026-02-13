# Threat Model

This system is designed with the assumption that
failure, abuse, and adversarial behavior are inevitable.

Security is not based on trust.

---

## Assumptions

- The environment is partially hostile.
- Public code is observable and forkable.
- Operators are fallible.
- Private infrastructure exists and is undisclosed.

---

## Threat Surfaces

### Operator Risk
Allows misuse, coercion, or silent failure.

Mitigation:
- Limited authority
- Role separation
- System continuity without operators

---

### Centralization Risk
Control concentration creates single points of failure.

Mitigation:
- No custodial control
- Rule-based execution
- Minimal state retention

---

### External Abuse
Includes API misuse, replay attacks, and coordination manipulation.

Mitigation:
- Deterministic validation
- Rate limits
- No reliance on endpoint secrecy

---

### Economic Attacks
Incentives can be exploited faster than code.

Mitigation:
- Explicit incentive modeling
- Misalignment treated as a bug

---

## Limitations

Not all attacks are preventable.
Public design reveals intent.

Failures are expected to be visible, bounded, and survivable.

---

If the system requires trust, authority, or silence to survive,
it is already broken.
