import crypto from 'crypto';
import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

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
  'generative-ai-project-source-code': {
    name: 'Generative AI Project Source Code',
    amount: 9 * 100,
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
    const body = await request.json();
    const { courseId, razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    if (!courseId || typeof courseId !== 'string') {
      return NextResponse.json({ message: 'Invalid course data.' }, { status: 400 });
    }

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json({ message: 'Missing payment details.' }, { status: 400 });
    }

    const course = COURSE_CATALOG[courseId as keyof typeof COURSE_CATALOG];

    if (!course) {
      return NextResponse.json({ message: 'Course not found.' }, { status: 404 });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json({ message: 'Razorpay secret is not configured.' }, { status: 500 });
    }

    const generatedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({ message: 'Payment signature verification failed.' }, { status: 400 });
    }

    if (!razorpay) {
      return NextResponse.json({ message: 'Razorpay client not available.' }, { status: 500 });
    }

    const order = await razorpay.orders.fetch(razorpay_order_id);

    if (Number(order.amount) !== course.amount) {
      return NextResponse.json({ message: 'Payment amount mismatch. Please contact support.' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      courseName: course.name,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json(
      { message: 'Payment verification failed. Please contact support.' },
      { status: 500 },
    );
  }
}
