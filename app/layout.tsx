import 'material-icons/iconfont/material-icons.css';
import '@styles/global.scss';

import Header from '@components/Header';
import { Metadata } from 'next';
import Footer from '@components/Footer';
import ReduxProvider from '@components/lib/ReduxProvider';

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
    <html
      lang="kr"
      className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll"
    >
      <body className="min-w-fit flex flex-col">
        <ReduxProvider>
          <Header />
          <main className="flex-1 container mx-auto py-10 flex flex-col gap-32">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
