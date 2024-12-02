import axios from 'axios';
import { YnaG3RequestInterceptor } from 'viy-menu';

export const baseURL = import.meta.env.VITE_REQUEST_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

YnaG3RequestInterceptor.setupRequest(axiosInstance);

/**
 * common send request util
 * @param {string} url
 * @param {import('axios').AxiosRequestConfig} options
 * @returns response
 */
const request = (
  url,
  options,
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};
export { axiosInstance, request };
