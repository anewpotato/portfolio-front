import { ReactNode } from 'react';

export default function ProjectSection({
  category,
  children,
}: {
  category: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="italic font-semibold">{category}</div>
      <div className="whitespace-pre-line indent-4 text-sm">{children}</div>
    </div>
  );
}
