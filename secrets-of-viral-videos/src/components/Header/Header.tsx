'use client';

import Link from 'next/link';
import SelectLang from '../SelectLang/SelectLang';
import { useLangStore } from '../../../lib/stores/langStore';
import Container from '../UI/Container';

export default function Header() {
  const { lang } = useLangStore();
  return (
    <header className="mt-[40px]">
      <Container>

      
        <div className="flex flex-wrap items-center justify-between">
          <Link
            className="uppercase font-[Sansation] font-semibold text-[18px]"
            href={'/'}
          >
            Aleko{' '}
            <span className="bg-gradient-to-r from-[#5557E6] to-[#F59DBD] text-transparent bg-clip-text font-[Sansation] font-bold text-[18px] leading-[100%] tracking-[0] uppercase">
              Sokurashvili
            </span>
          </Link>

          <div className="flex flex-wrap gap-[57px] items-center">
            <ul className="flex gap-[28px] items-center">
              <li>
                <Link href={'/structure'}>
                  {lang.value === 'ua' ? 'Структура' : 'Structure'}
                </Link>
              </li>
              <li>
                <Link href={'/about'}>
                  {lang.value === 'ua' ? 'Про мене' : 'About me'}
                </Link>
              </li>
              <li>
                <Link href={'/pluses'}>
                  {lang.value === 'ua' ? 'Плюси' : 'Advantages'}
                </Link>
              </li>
              <li>
                <Link href={'/reviews'}>
                  {lang.value === 'ua' ? 'Відгуки' : 'Reviews'}
                </Link>
              </li>
              <li>
                <Link href={'/faq'}>FAQ</Link>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <SelectLang />
            </div>

            <button className="text-white text-[12px] rounded-full py-[10px] px-[31px] bg-gradient-to-tr from-[#90E8FF] via-[#9C9EFF] via-[#E3A1FF] to-[#E56F8C]">
              {lang.value === 'ua'
                ? 'Придбати зі знижкою'
                : 'Buy with discount'}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
