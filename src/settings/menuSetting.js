import { YnaG3SystemAdapter } from 'viy-menu';

import i18n from '@/i18n';

const { login, logout, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter();

const staticMenus = [
  // Static Menus Data Example
  // {
  //   path: '/demo',
  //   meta: {
  //     title: 'blank.title.demo',
  //     rank: 10,
  //   },
  //   children: [
  //     {
  //       path: '/demo/Demo01',
  //       name: 'Demo01',
  //       meta: {
  //         title: 'blank.title.demo01',
  //       },
  //     },
  //   ],
  // },
];

/**
 * Options of VIY-Menu
 * @type {import("viy-menu").MenuOptions}
 */
const menuOptions = {
  i18n,
  getMenus: () => getMenusByEnv(staticMenus),
  login,
  logout,
  getUserInfo,
  views: import.meta.glob('/src/views/**/*.{vue,jsx}'),
};

export default menuOptions;
