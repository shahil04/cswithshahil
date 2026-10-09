# Course Addition Guide

This guide explains how to add a new course to the website without breaking the homepage, course listing, detail page, or Razorpay checkout.

## 1) Add the course in the main course data

Open:

- `data/courses.ts`

Add a new object to the `courses` array.

Use this template:

```ts
{
  slug: 'your-course-slug',
  title: 'Your Course Title',
  shortDescription: 'Short one-line summary shown on cards.',
  description:
    'Long description shown on the course detail page.',
  instructor: 'Shahil Sir',
  category: 'Programming or AI or Data & AI',
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  duration: '6 Weeks',
  rating: 4.8,
  students: 500,
  price: 999,
  originalPrice: 1999,
  badge: 'Popular',
  image:
    'https://images.unsplash.com/...',
  tags: ['Python', 'AI', 'Projects'],
  outcomes: [
    'Outcome 1',
    'Outcome 2',
    'Outcome 3',
  ],
  modules: [
    'Module 1',
    'Module 2',
    'Module 3',
  ],
  courseId: 'your-course-slug',
  courseName: 'Your Course Title',
},
```

Important rules:

- `slug` must be unique.
- `courseId` should match the `slug` in most cases.
- `price` is the public course price in rupees.
- `badge` is optional, but it helps marketing.
- `image` should be a valid Unsplash or other stable image URL.

## 2) Keep the course ID and amount synced with the payment API

Open these files and add the course in the server-side course catalog:

- `app/api/create-order/route.ts`
- `app/api/verify-payment/route.ts`

Add this kind of entry:

```ts
'your-course-slug': {
  name: 'Your Course Title',
  amount: 999 * 100,
  currency: 'INR',
},
```

This is required because the checkout API validates the course before creating a Razorpay order.

## 3) Make sure the frontend uses the correct course values

The reusable button component accepts these props:

- `courseId`
- `courseName`
- `amount`
- `buttonText`

If the course is displayed on a detail page, pass the matching values for that course.

Example:

```tsx
<PaymentButton
  courseId="your-course-slug"
  courseName="Your Course Title"
  amount={999 * 100}
  buttonText="Buy Now – ₹999"
/>
```

## 4) Validate the route naming

The detail route is generated from the course slug.

Example:

- slug: `python-course`
- URL: `/courses/python-course`

So every new course should have a unique slug and should be registered in `data/courses.ts`.

## 5) Local build check

Run:

```bash
npm run build
```

This confirms the app still compiles and all course routes render correctly.

## 6) Payment checklist before going live

Before launching a real paid course:

1. Add the course in `data/courses.ts`
2. Add the course to both payment API route catalogs
3. Confirm `courseId` matches the value submitted from the frontend
4. Confirm `amount` in paise matches the displayed price
5. Verify Vercel environment variables are set correctly:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
6. Ensure the website domain is added in the Razorpay dashboard
7. Test in live mode with a small payment amount first

## 7) Common mistakes to avoid

- Using a different `courseId` in the frontend than the API expects
- Forgetting to add the course to the server-side catalog
- Changing the price in the UI without updating the API amount
- Using a slug that duplicates another course
- Forgetting to redeploy after changing environment variables

## 8) Quick template for a new course

```ts
{
  slug: 'new-course-slug',
  title: 'New Course Title',
  shortDescription: 'Short summary',
  description: 'Detailed description',
  instructor: 'Shahil Sir',
  category: 'AI & Automation',
  level: 'Intermediate',
  duration: '4 Weeks',
  rating: 4.8,
  students: 300,
  price: 1999,
  originalPrice: 3999,
  badge: 'New',
  image: 'https://images.unsplash.com/your-image',
  tags: ['AI', 'Automation', 'Projects'],
  outcomes: ['Outcome 1', 'Outcome 2'],
  modules: ['Module 1', 'Module 2'],
  courseId: 'new-course-slug',
  courseName: 'New Course Title',
},
```

And in the payment API:

```ts
'new-course-slug': {
  name: 'New Course Title',
  amount: 1999 * 100,
  currency: 'INR',
},
```

This is your future reference document for adding new courses safely and consistently.
