import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

if (typeof process !== 'undefined' && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile('.env.local');
  process.loadEnvFile('.env');
}

const COURSE_CATALOG = {
  'data-ai-career-program': {
    name: 'Full Stack Data & AI Career Program',
    amount: 4999 * 100,
    currency: 'INR',
  },
  'python-course': {
    name: 'Python Course',
    amount: 999 * 100,
    currency: 'INR',
  },
  'generative-ai-course': {
    name: 'Generative AI Course',
    amount: 3999 * 100,
    currency: 'INR',
  },
  'agentic-ai-course': {
    name: 'Agentic AI Course',
    amount: 999 * 100,
    currency: 'INR',
  },
} as const;

const razorpay =
  process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
    ? new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      })
    : null;

export async function POST(request: Request) {
  try {
    const { courseId, amount } = await request.json();

    if (!courseId || typeof courseId !== 'string') {
      return NextResponse.json({ message: 'Invalid course selection.' }, { status: 400 });
    }

    const course = COURSE_CATALOG[courseId as keyof typeof COURSE_CATALOG];

    if (!course) {
      return NextResponse.json({ message: 'Course not found.' }, { status: 404 });
    }

    const normalizedAmount = Number(amount ?? course.amount);

    if (!Number.isFinite(normalizedAmount) || normalizedAmount < 100) {
      return NextResponse.json({ message: 'Amount must be at least 100 paise.' }, { status: 400 });
    }

    if (normalizedAmount !== course.amount) {
      return NextResponse.json({ message: 'Selected course amount mismatch.' }, { status: 400 });
    }

    if (!razorpay) {
      return NextResponse.json({ message: 'Razorpay is not configured on this server.' }, { status: 500 });
    }

    const order = await razorpay.orders.create({
      amount: normalizedAmount,
      currency: course.currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        courseId,
        courseName: course.name,
      },
    });

    return NextResponse.json({
      order_id: order.id,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error('Create order error:', error);

    const status = error?.statusCode === 401 ? 401 : 500;
    const message =
      error?.statusCode === 401
        ? 'Razorpay authentication failed. Please check the API keys.'
        : 'Could not create Razorpay order. Please try again.';

    return NextResponse.json({ message }, { status });
  }
}
