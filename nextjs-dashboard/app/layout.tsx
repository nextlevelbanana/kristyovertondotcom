import '@/app/ui/global.scss';
import { Header } from './ui/header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Fredoka:wght@300..700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
