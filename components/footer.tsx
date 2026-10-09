import Link from 'next/link';
import { Camera, Code2, Globe, Play } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: Globe, href: '#' },
  { label: 'Instagram', icon: Camera, href: '#' },
  { label: 'YouTube', icon: Play, href: '#' },
  { label: 'GitHub', icon: Code2, href: '#' },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-black text-white">
                CS
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">CSwithShahil</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">by Shahil Sir</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Learn. Build. Deploy. Grow.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-slate-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Follow</h3>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 CSwithShahil by Shahil Sir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
