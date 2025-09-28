import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={`md:max-w-[1280px] w-full px-[80px] mx-auto mm:px-[60px]`}>
      {children}
    </div>
  );
}