import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={`max-w-[1280px] w-full py-10 px-20 mx-auto`}>
      {children}
    </div>
  );
}