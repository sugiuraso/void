import { config } from '@vue/test-utils';
import i18n from '@/i18n';

if (!globalThis.pluginsDefined) {
  config.global.plugins = [i18n];
  globalThis.pluginsDefined = true;
}
