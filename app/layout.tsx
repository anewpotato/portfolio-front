import 'material-icons/iconfont/material-icons.css';
import '@styles/global.scss';

import Header from '@components/Header';
import { Metadata } from 'next';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Yu SeungJong Portfolio',
  description: '유승종 포트폴리오 프론트엔드 프로젝트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className="min-h-screen min-w-fit flex flex-col">
        <Header />
        <section className="flex-1 container ">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
