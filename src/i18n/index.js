import { createI18n } from 'vue-i18n';

import { ViyLangs } from 'viy-ui';
import { locales as ViyMenuLangs } from 'viy-menu';
import { merge } from 'lodash-es';

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  missingWarn: false,
  fallbackWarn: false,
});

for (const language of ['en', 'ja', 'zh']) {
  await mergeLanguage(language);
}

async function mergeLanguage(language) {
  i18n.global.mergeLocaleMessage(language, merge(ViyLangs[language], ViyMenuLangs[language]));
  try {
    const message = await import(`@/i18n/locales/locale_i18n_${language}.json`);
    i18n.global.mergeLocaleMessage(language, message.default);
  } catch (error) {
    console.warn('Missing language file:', language);
  }
}

export default i18n;
