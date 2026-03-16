# Technical Interview App

Welcome, and thanks for taking the time to meet with us! This portion of the interview is designed to give us a chance to work through some hands-on technical problems together.

## The App

This repo contains **MyBenefits**, a small member-facing web application for a fictional health benefits company. It lets members:

- View their health plan details (deductible, copay, out-of-pocket max, etc.)
- Search for in-network providers by specialty
- Submit and track help requests

The stack is:

| Layer    | Technology          |
|----------|---------------------|
| Frontend | Angular             |
| Backend  | Spring Boot (Java)  |
| Database | MySQL               |
| Cache    | Redis               |

The entire codebase is intentionally small (under 1,000 lines) so you can get oriented quickly.

## Getting Started

You'll need Docker installed. To start the app:

```sh
docker compose up --build
```

This spins up four containers (frontend, backend, MySQL, Redis). Once everything is healthy:

- **Frontend**: http://localhost:9000
- **Backend API**: http://localhost:9001

You can switch between three test members (Alice, Bob, and Carol) using the dropdown in the navigation bar.

## What We'll Do

We'll walk through a few scenarios together where we ask you to explore the application, identify issues, and discuss how you'd approach them. Some of these will involve making code changes; others will be more conversational.

We're not looking for perfection or speed — we want to understand how you think about problems. We're interested in:

- How you orient yourself in an unfamiliar codebase
- How you diagnose issues
- How you balance short-term fixes with longer-term solutions
- How you think about trade-offs and communicate technical decisions

Feel free to use whatever tools you'd normally use — IDE, terminal, search, documentation, AI assistants, all fair game. This is meant to resemble real work, not a whiteboard exercise.

We're not testing deep expertise in any specific technology here. You don't need to be an Angular or Spring Boot expert. What we're really looking at is how you navigate an unfamiliar system, your intuition for how things fit together, and how you reason about problems when you don't have all the answers memorized.

If you have any trouble getting the app running, let us know — setup issues aren't part of the evaluation.

Good luck, and have fun with it!
