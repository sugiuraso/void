import { getToken } from 'viy-menu';

/**
 * overwrite components prop default value globally
 */
export default {
  VueUpload: {
    headers: () => ({ 'X-Auth-Token': getToken()?.accessToken }),
    baseUrl: import.meta.env.VITE_REQUEST_BASE_URL,
  },
};
