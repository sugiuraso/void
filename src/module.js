import '@/styles/main.css';

import en from '@/i18n/locales/locale_i18n_en.json';
import ja from '@/i18n/locales/locale_i18n_ja.json';
import zh from '@/i18n/locales/locale_i18n_zh.json';

const views = import.meta.glob('/src/views/**/*.{vue,jsx}');
const locales = { en, ja, zh };

export default function () {
  return {
    init() {
      return {
        views,
        locales,
      };
    },
  };
}
