
# BAH Bible (Internal Web App)

BAH Parrilla internal “restaurant bible” web app: documents, SOPs, recipes, onboarding, training academy, and comms.
Built with **Next.js (static export)** + **Firebase (Auth + Firestore + Storage + Hosting)**.
No Cloud Functions required.

---

## What this gives you
- Secure login: **Google + Email/Password**
- Internal-only access: users must be **approved** in Firestore (`/users/{uid}`)
- Role-based access (pay-grade aligned `roleLevel`)
- Section-based permissions (FOH / BOH / BAR / Managers / Admin etc.)
- Wiki pages + document library (PDF/DOCX/XLSX stored in Firebase Storage)
- Training Academy scaffolding (modules/lessons/quizzes/progress)
- Announcements (“Today’s Brief”)
- Audit log (append-only)

---

## Requirements
- macOS + Terminal
- **Node.js 20+**
- Firebase CLI:
  ```bash
  npm i -g firebase-tools
  ```
