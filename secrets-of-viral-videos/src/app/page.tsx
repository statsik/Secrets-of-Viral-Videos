import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <section className="flex mt-[67px]">
        <div>
          <div className="w-[644px] rounded-[18px]">
            <Image src="/images/head-img.png"
                   width={644}  
                   height={400}
                   alt="main-image"
                   className="rounded-[18px]" />
          </div>
          <div>
            <button className="relative font-raleway font-semibold text-[22.11px] leading-[36.84px] tracking-normal bg-white text-black rounded-full py-[18.5px] px-[150.5px] mt-[42px] flex items-center justify-center">
              <span>Придбати зі знижкою</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 font-raleway font-semibold text-[24px] leading-[36.84px] tracking-normal bg-[rgba(255,74,119,1)] text-white py-[18px] px-[11px] rounded-full flex items-center justify-center">-50%</span>
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="py-[11px] font-raleway font-semibold text-[24px] leading-[36.84px] tracking-normal align-middle text-[#FF4A77]">
              1000$
            </p>
            <p className="font-raleway font-semibold text-sm leading-[36.84px] tracking-normal align-middle text-gray-400 line-through">2000грн</p>
          </div>
        </div>
        <div className="px-[40px] mt-[84px]">
          <p className="font-raleway font-normal text-[18px] leading-[100%] tracking-normal">Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до створення вірусного контенту та перетворите свої ідеї на мільйонні перегляди.</p>
        </div>
        <div className="absolute mt-[210px] ml-[570px]">
          <p className="font-raleway font-bold text-[32px] leading-[100%] tracking-normal bg-[linear-gradient(90deg,rgba(144,232,255,1),rgba(156,158,255,1),rgba(227,161,255,1),rgba(229,111,140,1))] bg-clip-text text-transparent">Від 0 до 100,000 за 90 днів</p>
          <h2 className="font-raleway font-extrabold text-[96px] leading-[100%] tracking-normal uppercase text-white mt-[15px]">Секрети <br /> вірусних <br /> відео</h2>
        </div>
      </section>
      <section className="mt-[210px]">
        <h2 className="flex justify-center margin-0 font-raleway font-bold text-[48px] leading-none tracking-normal text-center uppercase">Тарифи</h2>
        <div className="flex gap-[20px] mt-[79px]">
          <div className="pr-[37px] pl-[37px] pt-[36px] pb-[26px] bg-gradient-to-b  rounded-[18px]   from-[rgba(167,93,243,0.2)] via-[rgba(12,1,23,1)] to-[rgba(167,93,243,0.2)]">
            <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-white">Базовий</p>
            <div className="flex gap-[22px] mt-[18px] items-end">
              <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase">99 $</p>
              <p className="font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">139$</p>
            </div>
            <ul className="flex flex-col gap-[15.5px] mt-[29px]">
              <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                Базовий курс
              </li>
              <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                38 уроків
              </li>
            </ul>
            <button className="font-manrope font-semibold mt-[160.5px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-white text-[rgba(12,1,23,1)] rounded-[50px]">
              Купити
            </button>
          </div>
          <div className="bg-white px-[37px] py-[20px] rounded-[18px]">
            <div className="flex gap-[11px] justify-center items-center">
              <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-[#0C0117]">Продвинутий</p>
              <p className="bg-[rgba(12,1,23,1)] rounded-[20px] py-[11.5px] px-[43px]">
                <span className="bg-[rgb(12,1,23)] rounded-[50px] py-[11.5px] px-[43px]font-raleway font-bold text-[16px] leading-[100%] tracking-[0%] uppercase bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] via-[#DF93FF] to-[#E56F8C] bg-clip-text text-transparent">
                  PRO
                </span>
              </p>
            </div>
            
            <div className="mt-[18px] flex items-end gap-[22px]">
              <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase text-[#0C0117] mt-[18px]">149 $</p>
              <p className="text-[#0C0117] font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">199$</p>
            </div>
            <ul className="flex flex-col gap-[14px] mt-[28px]">
              <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                БАЗА
              </li>
              <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                ДОДАТКОВІ УРОКИ
              </li>
              <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                48 УРОКІВ
              </li>
              <li className="relative pl-[28px] text-[#0C0117] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-black">
                ЧАТ КОМ’ЮНІТІ ДЛЯ ТВОРЦІВ КОНТЕНТУ
              </li>
            </ul>
            <button className="font-manrope font-semibold mt-[35px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-[rgba(12,1,23,1)] text-white rounded-[50px]">
              Купити
            </button>
          </div>
          <div className="rounded-[18px] px-[37px] py-[25px] bg-[linear-gradient(180deg,rgba(91,219,253,1),rgba(115,117,255,1),rgba(167,93,243,0.2))]">
            <div className="flex items-center justify-between">
              <p className="font-raleway font-semibold text-[20px] leading-none tracking-normal uppercase text-white">Експерт</p>
              <button className="font-raleway font-bold text-[16px] leading-[100%] tracking-[0%] uppercase py-[11.5px] px-[29.5px] rounded-[50px] bg-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] via-[#DF93FF] to-[#E56F8C]">
                  Expert
                </span>
              </button>
            </div>
            <div className="flex items-end gap-[22px]">
              <p className="font-manrope font-bold text-[74px] leading-[100%] tracking-[0%] uppercase mt-[18px]">299 $</p>
              <p className="font-manrope font-bold text-[20px] leading-[100%] tracking-[0%] uppercase line-through">500$</p>
            </div>
            <ul className="flex flex-col gap-[15px] mt-[28px]">
                <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                  додаткові уроки
                </li>
                <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                  48 уроків
                </li>
                <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                  чат-ком’юніті для творців контента
                </li>
                <li className="relative pl-[28px] font-raleway font-semibold text-[16px] tracking-[0%] uppercase text-white before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[15px] before:h-[15px] before:rounded-full before:bg-white">
                  Розбір вашої сторінки в форматі відеозвінка
                </li>
            </ul>
            <button className="font-manrope font-semibold mt-[27px] text-[16px] tracking-[0%] py-[17.5px] px-[115.5px] bg-white text-[rgba(12,1,23,1)] rounded-[50px]">
              Купити
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
 