import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eishan & Gayani Wedding Invitation',
  description: 'Wedding invitation for Eishan Dinuka and Gayani Chathurika',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
