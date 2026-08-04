---
name: "feat: add account/card/routing/receipt utilities + tests"
about: "Adds TypeScript utilities for account number generation, ABA routing validation, Luhn card generator/validator, and receipt reference generator with unit tests."
labels: enhancement
---

This PR adds the following utility modules to the repository:

- src/utils/accountNumber.ts — 10-digit account generator with heuristics and a `uniquenessCheck` callback to ensure DB uniqueness.
- src/utils/routing.ts — ABA routing checksum validator and masking helper.
- src/utils/luhn.ts — Luhn 16-digit card generator and validator, CVV and expiry helpers.
- src/utils/receipt.ts — Receipt reference generator in the format NB-YYYYMMDD-XXXXXX.

Also includes Jest-based unit tests under tests/ and configuration (package.json, tsconfig.json, jest.config.js) plus README instructions for running tests.

Notes
- The account number generator expects a DB-backed uniqueness check function to be passed in; it does local heuristics to avoid trivial patterns and loops until a unique value is found (or throws after max attempts).
- Card CVVs should not be stored plaintext in production — prefer tokenization or vaulting.
