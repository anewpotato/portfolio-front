import '@styles/global.scss';

import Header from '@components/Header';
import { Metadata } from 'next';
import Footer from '@components/Footer';
import ReduxProvider from '@components/lib/ReduxProvider';
import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types';
import SnapWrapper from '@src/components/lib/SnapWrapper';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}

const icon: CustomIconDescriptorType = {
  rel: 'stylesheet',
  url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
  precedence: 'default',
};

export const metadata: Metadata = {
  title: 'Yu SeungJong Portfolio',
  description: '유승종 포트폴리오 프론트엔드 프로젝트',
  icons: {
    other: icon,
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <SnapWrapper>
      <body className="min-w-fit flex flex-col">
        <ReduxProvider>
          <Header />
          <main className="flex-1 sm:container mx-auto py-10 flex flex-col gap-32">
            {children}
            {modal}
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </SnapWrapper>
  );
}
