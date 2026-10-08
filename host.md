# Deploy this project to Vercel for free

This project is ready to deploy on Vercel using the Next.js app setup.

## 1) Push the project to GitHub

1. Create a new GitHub repository.
2. Initialize git in this folder if needed:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

## 2) Sign in to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account.
3. Click "Add New Project".
4. Import your GitHub repository.

## 3) Configure project settings

When Vercel asks for project settings:

- Framework: Next.js
- Root Directory: .
- Build Command: leave default (it will use your project config)
- Output Directory: leave default

## 4) Add environment variables

In the Vercel project dashboard, go to:

Settings -> Environment Variables

Add these variables:

```env
RAZORPAY_KEY_ID=rzp_test_TlQXu2q7bEx1RG
RAZORPAY_KEY_SECRET=TmGQ51vKa88d651scLnbeHBM
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_TlQXu2q7bEx1RG
```

Important:
- Keep the secret key only on the server side.
- Do not expose `RAZORPAY_KEY_SECRET` in frontend code.
- These values are required for the checkout and payment verification flow.

## 5) Deploy

1. Click "Deploy".
2. Vercel will automatically build and deploy your app.
3. Once deployment succeeds, copy the production URL.

## 6) Verify the live site

Open the deployed Vercel URL and test:

- Home page loads correctly
- Pricing section works
- Buy Course buttons start checkout
- Payment flow completes using Razorpay sandbox credentials
- Success page loads after payment

## 7) Optional: custom domain

If you want a custom domain:

1. Go to Project -> Settings -> Domains
2. Add your domain
3. Update DNS records as instructed by Vercel

## 8) Important notes

- This setup is for a free Vercel plan.
- Razorpay test keys are for sandbox testing only.
- For production payments, replace the sandbox keys with live keys from Razorpay.
- Vercel environment variables are encrypted and only available to the deployed project.

## Example commands to check locally before deploy

```bash
npm install
npm run build
npm run start
```

If the app works locally, it will usually work on Vercel with the same environment variables.
