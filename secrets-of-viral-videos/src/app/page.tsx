'use client';

import Image from 'next/image';
import { useLangStore } from '../../lib/stores/langStore';
import Container from '@/components/UI/Container';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';

export default function Home() {
  const { lang } = useLangStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <Container>
      <section className="mt-[67px]">
      <div className="flex flex-col gap-[42px]">
        <div className="flex relative">
          <div className="min-w-[644px] min-h-[466px] rounded-[18px] overflow-hidden relative">
            <Image
              src="/images/head-img.png"
              alt="Секрети вірусних відео"
              width={644}
              height={466}
              priority
              className="object-cover w-full h-full"
                />
              </div>
              
              

          <div className="absolute top-[84px] right-[-10px] text-[18px] flex flex-col gap-[15px]">
            <p className="ml-[110px] mb-[42px] w-[396px] font-light leading-[1.6] text-[#d1d1d1] text-left">
              {lang.value === 'ua'
                ? 'Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.'
                : 'Become famous in just 3 months without advertising costs! Learn the key to creating viral content and turn your ideas into millions of views.'}
            </p>

            <p className="text-[32px] font-semibold bg-gradient-to-r from-[#90e8ff] via-[#9c9eff] via-70% via-[#e3a1ff] to-[#e56f8c] text-transparent bg-clip-text mb-[15px]">
              {lang.value === 'ua'
                ? 'Від 0 до 100,000 за 90 днів'
                : 'From 0 to 100,000 in 90 days'}
            </p>

            <h1 className="text-[96px] w-[570px] font-bold leading-[1.2]">
              {lang.value === 'ua'
                ? 'СЕКРЕТИ ВІРУСНИХ ВІДЕО'
                : "VIRAL VIDEOS' SECRETS"}
            </h1>
          </div>
        </div>

        <div className="w-[534px]">
          <div className="relative flex flex-col gap-[11px]">
            <button className="py-[18px] px-[150px] bg-white text-black text-[22px] leading-[1.7] font-medium rounded-full">
              {lang.value === 'ua'
                ? 'Придбати зі знижкою'
                : 'Buy with discount'}
            </button>
            <div className="flex justify-center items-center absolute right-0 top-0 w-[74px] h-[74px] rounded-full text-white text-center text-[24px] font-medium bg-[#ff4a77]">
              -50%
            </div>
          </div>

          <div className="flex justify-center items-center gap-[16px] mt-[20px]">
            <p className="text-[24px] text-[#ff4a77] leading-[1.8]">
              1000 {lang.value === 'ua' ? 'грн' : 'uah'}
            </p>
            <p className="line-through text-[#c5c5c5] text-[14px] leading-[1.8]">
              2000 {lang.value === 'ua' ? 'грн' : 'uah'}
            </p>
          </div>
        </div>
      </div>
    </section>
       <section className="mt-[200px]">
          <h2 className="flex  justify-center margin-0 font-raleway font-bold text-[48px] leading-none tracking-normal text-center uppercase">
            {lang.value === 'ua' ? 'Тарифи' : 'Rates'}
          </h2>
          <ul className="flex flex-wrap gap-[20px] mt-[79px] justify-center">
            <li className="max-w-[360px]">
              <div className="pr-[37px] pl-[37px] pt-[36px] pb-[26px] bg-gradient-to-b  rounded-[18px]   from-[rgba(167,93,243,0.2)] via-[rgba(12,1,23,1)] to-[rgba(167,93,243,0.2)]">
                <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-white">
                  {lang.value === 'ua' ? 'Базовий' : 'Basic'}
                </p>
                <div className="flex gap-[22px] mt-[18px] items-end">
                  <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase">
                    99 $
                  </p>
                  <p className="font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">
                    139$
                  </p>
                </div>
                <ul className="flex flex-col gap-[15.5px] mt-[29px]">
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua' ? 'Базовий курс' : 'Basic course'}
                  </li>
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua' ? '38 уроків' : '38 lessons'}
                  </li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="font-manrope font-semibold mt-[160.5px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-white text-[rgba(12,1,23,1)] rounded-[50px]">
                  {lang.value === 'ua' ? 'Купити' : 'Buy'}
                </button>
              </div>
            </li>
            <li className="max-w-[360px] ">
              <div className="min-h-[466px] bg-white px-[37px] py-[20px] rounded-[18px]">
                <div className="flex gap-[11px] justify-center items-center">
                  <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-[#0C0117]">
                    {lang.value === 'ua' ? 'Продвинутий' : 'Advanced'}
                  </p>
                  <p className="bg-[rgba(12,1,23,1)] rounded-[20px] py-[11.5px] px-[43px]">
                    <span className="bg-[rgb(12,1,23)] rounded-[50px] py-[11.5px] px-[43px]font-raleway font-bold text-[16px] leading-[100%] tracking-[0%] uppercase bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] via-[#DF93FF] to-[#E56F8C] bg-clip-text text-transparent">
                      PRO
                    </span>
                  </p>
                </div>

                <div className="mt-[18px] flex items-end gap-[22px]">
                  <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase text-[#0C0117] mt-[18px]">
                    149 $
                  </p>
                  <p className="text-[#0C0117] font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">
                    199$
                  </p>
                </div>
                <ul className="flex flex-col gap-[14px] mt-[28px] ">
                  <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                    {lang.value === 'ua' ? 'База' : 'Base'}
                  </li>
                  <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                    {lang.value === 'ua' ? 'ДОДАТКОВІ УРОКИ' : 'Extra lessons'}
                  </li>
                  <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                    {lang.value === 'ua' ? '48 УРОКІВ' : '48 lessons'}
                  </li>
                  <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                    {lang.value === 'ua'
                      ? 'ЧАТ КОМ’ЮНІТІ ДЛЯ ТВОРЦІВ КОНТЕНТУ'
                      : 'COMMUNITY CHAT FOR CONTENT CREATORS'}
                  </li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="font-manrope font-semibold mt-[35px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-[rgba(12,1,23,1)] text-white rounded-[50px]">
                  {lang.value === 'ua' ? 'КУПИТИ' : 'BUY'}
                </button>
              </div>
            </li>
            <li className="max-w-[360px] min-h-[466px]">
              <div className=" min-h-[466px] rounded-[18px] px-[37px] py-[25px] bg-[linear-gradient(180deg,rgba(91,219,253,1),rgba(115,117,255,1),rgba(167,93,243,0.2))]">
                <div className="flex items-center justify-between">
                  <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-white">
                    {lang.value === 'ua' ? 'Експерт' : 'Expert'}
                  </p>
                  <button className="font-raleway font-bold text-[16px] leading-[100%] tracking-[0%] uppercase py-[11.5px] px-[29.5px] rounded-[50px] bg-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] via-[#DF93FF] to-[#E56F8C]">
                      Expert
                    </span>
                  </button>
                </div>
                <div className="flex items-end gap-[22px]">
                  <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase mt-[18px]">
                    299 $
                  </p>
                  <p className="font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">
                    500$
                  </p>
                </div>
                <ul className="flex flex-col gap-[15px] mt-[28px]">
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua' ? 'Додаткові уроки' : 'Extra lessons'}
                  </li>
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua' ? '48 УРОКІВ' : '48 lessons'}
                  </li>
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua'
                      ? 'ЧАТ КОМ’ЮНІТІ ДЛЯ ТВОРЦІВ КОНТЕНТУ'
                      : 'COMMUNITY CHAT FOR CONTENT CREATORS'}
                  </li>
                  <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                    {lang.value === 'ua'
                      ? 'Розбір вашої сторінки в форматі відеозвінка'
                      : 'Analysis of your page in video call format'}
                  </li>
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="font-manrope font-semibold mt-[27px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-white text-[rgba(12,1,23,1)] rounded-[50px]">
                  {lang.value === 'ua' ? 'КУПИТИ' : 'BUY'}
                </button>
              </div>
            </li>
          </ul>
        </section>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
 