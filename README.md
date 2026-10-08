# ITCourse Landing Page

A modern EdTech course-selling landing page built with Next.js, TypeScript, Tailwind CSS, and Razorpay Checkout.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Razorpay Checkout
- Vercel-ready API routes

## Local development

1. Install dependencies:

```bash
npm install
```

2. Add your environment variables in `.env.local`:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

## Razorpay flow

- Frontend opens Razorpay Checkout
- `/api/create-order` creates the order securely on the server
- `/api/verify-payment` validates the signature server-side before confirming payment

## Deployment

1. Push the project to GitHub
2. Import it into Vercel
3. Add the same environment variables inside the Vercel project settings
4. Deploy

## Notes

- Never expose the Razorpay secret in frontend code
- The checkout amount is validated on the server
- The project is structured to support future upgrades like multiple courses, dashboards, and authentication
