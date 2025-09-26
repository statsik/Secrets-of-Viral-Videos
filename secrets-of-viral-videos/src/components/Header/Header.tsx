import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-inherit shadow-sm">
      <div className="flex gap-[57px] items-center max-w-7xl mx-auto">
        <p className="flex content-center gap-[3px] mr-[102px] font-sansation font-bold text-[18px] leading-[100%] tracking-[0%] uppercase">Aleko<span className="bg-gradient-to-r from-[#5BDBFD] via-[#7375FF] via-[#DF93FF] to-[#E56F8C] bg-clip-text text-transparent"> Sokurashvili</span></p>
        
        <nav className="flex gap-[28px] text-[16px]">
          <Link href="/structure" className="text-white font-raleway font-medium text-base leading-none tracking-normal">Структура</Link>
          <Link href="/about" className="text-white font-raleway font-medium text-base leading-none tracking-normal">Про мене</Link>
          <Link href="/pluses" className="text-white font-raleway font-medium text-base leading-none tracking-normal">Плюси</Link>
          <Link href="/reviews" className="text-white font-raleway font-medium text-base leading-none tracking-normal">Відгуки</Link>
          <Link href="/faq" className="text-white font-raleway font-medium text-base leading-none tracking-normal">FAQ</Link>
        </nav>
    
        <div className="flex gap-[9px] justify-center content-center rounded-full">
          <p className="text-white font-raleway font-medium text-base leading-none tracking-normal">UA</p>
          <svg className='w-[16px] h-[16px]'>
            <use xlinkHref={`/icons.svg#icon-down-arrow`} />
          </svg>
        </div>
        
        <button className="font-raleway font-semibold text-[12px] tracking-normal align-middle py-[10px] px-[31.5px] rounded-full bg-[linear-gradient(180deg,rgba(91,219,253,1),rgba(115,117,255,1),rgba(223,147,255,1),rgba(229,111,140,1))]">
          Придбати зі знижкою
        </button>
      </div>
    </header>
  );
}