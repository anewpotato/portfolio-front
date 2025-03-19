'use client';

import { usePathname } from 'next/navigation';

export default function SnapWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');

  return (
    <html
      lang="kr"
      className={`scroll-smooth h-screen overflow-y-scroll ${
        !isProjectPage ? 'snap-y snap-mandatory' : ''
      }`}
    >
      {children}
    </html>
  );
}
