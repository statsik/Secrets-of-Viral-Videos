'use client';

import Image from 'next/image';
import { useLangStore } from '../../../lib/stores/langStore';
import { useModalStore } from '../../../lib/stores/modalStore';

export default function Footer() {
  const { lang } = useLangStore();
  const { openModal } = useModalStore();
  return (
    <footer className="relative flex justify-between mt-[200px] text-center mb-[67px]">
      <div className="relative w-[513px] h-[488px]">
        <Image
          src={'/images/unsplash.png'}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/images/rightBanner.png"
          width={810}
          height={100}
          alt="rightBanner"
        />
      </div>

      <div className="block w-[608px] bg-[linear-gradient(90deg,rgba(12,1,23,1)_15%,rgba(121,26,217,1)_72%,rgba(224,140,255,1)_100%)]"></div>

      <div className="absolute right-[32%] top-[10%] w-[534px] text-center flex flex-col justify-center items-center">
        <div className="max-w-[447px]">
          <h2 className="text-[36px] font-semibold mb-[20px] w-[447px] uppercase">
            {lang.value === 'ua'
              ? 'Дізнайся як створити контент, який'
              : 'Learn how to create content that'}{' '}
            <span className="text-[32px] font-semibold bg-[linear-gradient(90.63deg,#90E8FF_0.44%,#9C9EFF_69.99%,#E3A1FF_138.27%,#E56F8C_173.01%)] bg-clip-text text-transparent">
              {lang.value === 'ua'
                ? 'підкорює аудиторію'
                : 'captivates the audience'}
            </span>
          </h2>
          <p className="font-raleway font-medium text-[24px] leading-[100%] tracking-[0] text-center mb-[44px]">
            {lang.value === 'ua'
              ? 'Матеріали, які мають змогу охопити тисячі людей'
              : 'Materials that can reach thousands of people'}
          </p>
        </div>

        <div className="relative flex flex-col gap-[11px]">
          <button
            onClick={openModal}
            className="py-[18px] px-[150px] bg-[linear-gradient(126.34deg,#5BDBFD_16.95%,#7375FF_79.54%,#DF93FF_140.99%,#E56F8C_172.25%)] text-white text-[22px] leading-[1.7] font-medium rounded-full"
          >
            {lang.value === 'ua' ? 'Придбати зі знижкою' : 'Buy with discount'}
          </button>
          <div className="flex justify-center items-center absolute right-0 top-0 w-[74px] h-[74px] rounded-full text-white text-center text-[24px] font-medium bg-[#ff4a77]">
            -50%
          </div>
        </div>
      </div>
    </footer>
  );
}
