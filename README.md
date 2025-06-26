# 🚀 CareerCraft AI

## **CareerCraft AI** is an all-in-one, AI-powered career assistant that helps users craft professional resumes, generate tailored cover letters, prepare for job interviews, and explore the latest tech and job trends. Powered by Google Gemini and built using a modern full-stack architecture, CareerCraft AI makes your career journey smarter and easier.

## ✨ Features

- 🧠 Generate intelligent, role-specific resumes
- ✉️ Create customized cover letters
- 🎤 Practice with job-specific interview questions
- 📈 Get insights into trending skills and technologies
- 🔐 Secure authentication with Clerk
- 🖨️ Export resumes and letters as professional PDFs
- 🌙 Fully responsive UI with dark/light theme toggle

---

## 🧰 Tech Stack

| Layer         | Technology                                    |
| ------------- | --------------------------------------------- |
| **Frontend**  | Next.js 15, React 19, Tailwind CSS, Shadcn UI |
| **Backend**   | Node.js, Prisma ORM, Inngest                  |
| **Database**  | Neon DB                                       |
| **AI Engine** | Google Generative AI (Gemini API)             |
| **Auth**      | Clerk                                         |

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the root with the following keys:

```env
DATABASE_URL=your_neon_database_url

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=your_google_generative_ai_key
```
