import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const qwer = asdf
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  // title: "Jens's Acme Dashboard",
  title: {
    template: "%s | Jens's Acme Dashboard",
    default: 'Acme Dashboard',
  },
  description:
    "Jens's implementation for the official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
