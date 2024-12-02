import useRequest from 'vue-hooks-plus/es/useRequest';
import { createRequestMethod } from 'viy-ui';
import { request } from '@/utils/request';

/**
 * hooks for request api service
 * @param {import('axios').AxiosRequestConfig} option api call options
 * @param {import('vue-hooks-plus/es/useRequest/types').UseRequestOptions<any, unknown[], any>} useRequestOption useRequest related options
 * @returns useRequest
 */
export function useApi(option, useRequestOption) {
  return useRequest(...createRequestMethod(option, useRequestOption, request));
}
