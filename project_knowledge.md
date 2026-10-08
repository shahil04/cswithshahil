# Project Knowledge

## 1. Project Summary
- Project name: CSwithShahil landing page
- Owner/brand: CSwithShahil by Shahil Sir
- Goal: Sell IT and AI learning programs through a clean marketing landing page with secure Razorpay payments.
- Stack:
  - Next.js 16
  - TypeScript
  - Tailwind CSS
  - Razorpay Checkout
  - Vercel deployment

## 2. Business Knowledge
### Business model
- This is an education business focused on digital learning and career-oriented IT training.
- The website acts as a lead-generation and direct sales channel for paid courses.
- Conversion focus: trust, course clarity, pricing clarity, social proof, and frictionless payment.

### Brand positioning
- Brand: CSwithShahil
- Positioning: practical, career-focused, beginner-friendly, result-driven IT and AI training
- Tone: professional, confident, educational, supportive
- Target audience: students, job seekers, career switchers, and learners who want practical skills in AI, Python, and software development

### Business intent of the website
- Explain available courses clearly
- Establish authority and trust
- Drive enrollments through purchase flow
- Collect payments securely and reduce drop-off
- Provide support, policy, and success confirmation pages

### Core services represented by the site
- Full Stack Data & AI Career Program
- Python learning program
- Generative AI training
- Agentic AI learning paths

### Current business contact details
- Support email: cswithshahil@gmail.com
- Customer communication should remain professional and conversion-friendly
- Support responses should be clear, helpful, and quick

### Pricing and sales approach
- INR pricing is used for payment flow and customer experience
- Main product pricing should stay consistent between UI and payment logic
- Higher-value courses should be presented with clear outcomes and trust-building information

## 3. Current Business Information
- Support email: cswithshahil@gmail.com
- Currency: INR
- Main checkout flow: Razorpay payment gateway
- Default course price in the app: ₹4,999 (main program)
- Brand identity: modern education platform focused on career outcomes and practical IT/AI learning

## 4. Repository Structure and Purpose

### App routes
- app/page.tsx
  - landing page
  - pricing section
  - CTA buttons
- app/about/page.tsx
  - about section and brand story
- app/contact/page.tsx
  - contact details and support email
- app/payment-error/page.tsx
  - payment failed/cancelled screen with support CTA
- app/success/page.tsx
  - successful payment confirmation page
- app/privacy-policy/page.tsx
  - privacy policy
- app/refund-policy/page.tsx
  - refund policy
- app/terms-conditions/page.tsx
  - terms and conditions

### API routes
- app/api/create-order/route.ts
  - creates Razorpay order server-side
  - validates course id and amount
  - uses RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET
- app/api/verify-payment/route.ts
  - verifies Razorpay payment signature
  - checks order amount against the course catalog
  - confirms payment before success page

### Components
- components/navbar.tsx
  - main navigation
- components/hero.tsx
  - hero section and CTA
- components/pricing.tsx
  - pricing cards
- components/payment-button.tsx
  - triggers Razorpay checkout and handles success/failure flow
- components/course-card.tsx
  - course card blocks
- components/faq.tsx
  - FAQ content
- components/testimonials.tsx
  - testimonials section
- components/footer.tsx
  - footer links and branding
- components/curriculum.tsx
  - curriculum breakdown
- components/projects.tsx
  - project showcase
- components/feature-card.tsx
  - feature highlights

## 5. Core Product Logic

### Course catalog and pricing
The app uses a server-side course catalog to validate course amount and name. Keep these in sync with the frontend pricing and button text.

Current recognized course IDs:
- data-ai-career-program
- python-course
- generative-ai-course
- agentic-ai-course

Important:
- If you change a course price in the UI, update the server-side course amount too.
- If you add a new course, update both frontend and backend route logic.

### Payment flow
1. User clicks Buy Now.
2. Frontend loads Razorpay checkout script.
3. Frontend calls /api/create-order.
4. Backend creates a Razorpay order with secret credentials.
5. Frontend opens Razorpay checkout modal using the public key.
6. User completes payment.
7. Frontend sends payment details to /api/verify-payment.
8. Server verifies signature using the secret key.
9. Success page loads only after verification passes.

## 6. Environment Variables and Deployment Rules

### Required local environment variables
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET
- NEXT_PUBLIC_RAZORPAY_KEY_ID

### Deployment rule for Vercel
- Use Vercel Environment Variables in Project Settings.
- Do not rely on .env.local in production.
- Do not manually call process.loadEnvFile() inside route handlers for Vercel deployment.
- Secret keys must exist only on server-side code and Vercel secret envs.

### Public vs private keys
- NEXT_PUBLIC_RAZORPAY_KEY_ID is safe to expose in frontend code.
- RAZORPAY_KEY_SECRET must never be exposed in the browser.

## 7. Deployment Checklist
When deploying or updating the site:
1. Update the code in the app or component files.
2. Run the build locally: npm run build
3. Check Vercel project settings for env vars.
4. Confirm Production environment is enabled for payment keys.
5. Push changes to GitHub.
6. Redeploy in Vercel.
7. Test the checkout flow using Razorpay sandbox credentials.

## 8. Known Good Commands
```bash
npm install
npm run dev
npm run build
```

## 9. Critical Rules for Future Updates
1. Never expose secret API keys in frontend code.
2. Always keep server-side payment keys in Vercel env variables.
3. Keep course names and course amounts consistent across the UI and API routes.
4. If you edit support email, update both contact page and payment error page mailto links.
5. If you change pricing, update both the visible plan and the backend course catalog.
6. Always verify the app with npm run build before deployment.
7. Do not add local env loading code in production server routes.

## 10. Troubleshooting Guide

### Razorpay checkout does not open
Check:
- NEXT_PUBLIC_RAZORPAY_KEY_ID exists
- Razorpay checkout script loads successfully
- /api/create-order returns a valid order

### Payment verification fails
Check:
- RAZORPAY_KEY_SECRET is configured correctly in Vercel
- Payment request includes razorpay_payment_id, razorpay_order_id, razorpay_signature
- Signature hash matches the order ID + payment ID

### Payment amount mismatch
Check:
- Course amount in frontend matches the server catalog
- Payment amount is not modified client-side before checkout

### Vercel build fails
Check:
- No broken imports
- No invalid route logic
- Environment variables are correctly added to Vercel

## 11. Content Update Guidance
When the website is updated in the future, use this file as the source of truth. If you change any of the following, update this document too:
- pricing and amounts
- support email
- course names
- API/payment setup
- deployment env variables
- major UI changes
- contact links or legal pages

## 12. Recommended Update Workflow
When making changes:
1. Update the relevant UI files.
2. Update the server-side course/payment logic if needed.
3. Update this file if the business logic, pricing, brand, or deployment setup changes.
4. Run npm run build.
5. Deploy to Vercel.
6. Test the live checkout flow.

## 13. Final Reminder
This file should be treated as the project memory for future edits. When the website changes, update this file before or alongside the code changes so the project remains easy to maintain and deploy safely.
