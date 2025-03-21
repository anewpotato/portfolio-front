'use client';

import useRedux from '@src/hooks/useRedux';
import { usePathname } from 'next/navigation';

export default function SnapWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');

  const [isDarkMode] = useRedux<boolean>('darkmode');

  return (
    <html
      lang="kr"
      className={`${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-800 dark:text-white scroll-smooth h-screen overflow-y-scroll ${
        !isProjectPage ? 'snap-y snap-mandatory' : ''
      }`}
    >
      {children}
    </html>
  );
}
