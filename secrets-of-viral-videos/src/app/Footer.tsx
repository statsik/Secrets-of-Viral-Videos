import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative mb-[19px] w-full h-[500px] mt-[200px] flex flex-col justify-center items-center text-center overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[513px]">
                <Image
                    src="/images/unsplash.png"
                    alt="Left image"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute left-[513px] top-0 right-0 bottom-0 bg-gradient-to-r from-[rgba(20,10,33,10)] via-[rgba(91,219,253,1)] via-[rgba(115,117,255,1)] to-[rgba(223,147,255,1)]"></div>

            <div className="relative z-10 max-w-[447px] flex flex-col justify-center items-center text-center">
                <h3 className="font-raleway font-bold text-[36px] leading-[100%] tracking-[0%] uppercase">
                    Дізнайся як створити контент, який підкорює аудиторію
                </h3>
                <p className="mt-[20px] font-raleway font-medium text-[24px] leading-[100%] tracking-[0%] text-center">
                    Матеріали, які мають змогу охопити тисячі людей
                </p>
            </div>

            <button className="relative z-10 font-raleway font-semibold max-w-[547px] text-[22.11px] leading-[36.84px] tracking-normal bg-gradient-to-r from-[rgba(91,219,253,1)] via-[rgba(115,117,255,1)] to-[rgba(223,147,255,1)] text-white rounded-full py-[18.5px] px-[150.5px] mt-[42px] flex items-center justify-center">
                <span>Придбати зі знижкою</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-raleway font-semibold text-[24px] leading-[36.84px] tracking-normal bg-[rgba(255,74,119,1)] text-white py-[18px] px-[11px] rounded-full flex items-center justify-center">
                    -50%
                </span>
            </button>

            <Image
                src="/images/Group.png"
                alt="Ribbon"
                width={100}
                height={100}
                className="absolute top-[190px] left-[620px] rotate-[0] opacity-100 w-[500px] z-10"
            />
        </footer>
    );
}
