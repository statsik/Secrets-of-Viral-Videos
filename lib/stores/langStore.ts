import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LangOption } from '../../types/lang';

type LangStore = {
  lang: LangOption;
  setLang: (newLang: LangOption) => void;
};

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: { label: 'UA', value: 'ua' },
      setLang: (newLang) => set({ lang: newLang }),
    }),
    {
      name: 'lang-storage',
    },
  ),
);
