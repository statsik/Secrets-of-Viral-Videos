'use client';

import { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import css from './SelectLang.module.css';
import { useLangStore } from '../../../lib/stores/langStore';
import { LangOption } from '../../../types/lang';

const options = [
  { value: 'ua', label: 'UA' },
  { value: 'en', label: 'EN' },
];

export default function SelectLang() {
  const [isClient, setIsClient] = useState(false);
  const { lang, setLang } = useLangStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (selectedOption: SingleValue<LangOption>) => {
    if (selectedOption) {
      setLang(selectedOption);
    }
  };

  return (
    <>
      {isClient && (
        <Select
          className={css.selector}
          classNames={{
            control: () => css.control,
            valueContainer: () => css.valueContainer,
            singleValue: () => css.singleValue,
            indicatorSeparator: () => css.indicatorSeparator,
            dropdownIndicator: () => css.dropdownIndicator,
            menu: () => css.menu,
            menuList: () => css.menuList,
            option: () => css.option,
          }}
          onChange={handleChange}
          isSearchable={false}
          options={options}
          value={lang}
        />
      )}
    </>
  );
}
