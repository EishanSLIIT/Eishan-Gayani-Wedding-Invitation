import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eishan & Gayani | Wedding Invitation — 15th November 2026',
  description: 'You are warmly invited to celebrate the wedding of Eishan and Gayani on 15th November 2026 at Centauria Wild, Udawalawe, Sri Lanka. RSVP by 15th October 2026.',
  keywords: ['Eishan Gayani wedding', 'wedding invitation', 'Centauria Wild', 'Udawalawe', 'Sri Lanka wedding'],
  openGraph: {
    title: 'Eishan & Gayani | Wedding Invitation',
    description: 'Join us to celebrate our wedding on 15th November 2026 at Centauria Wild, Udawalawe.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#faf6f0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
