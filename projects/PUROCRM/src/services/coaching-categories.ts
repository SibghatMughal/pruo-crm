import { GET_COACHING_CATEGORIES_ENDPOINT } from '@/constants/endpoints';
import { request } from './api';

export const getCoachingCategories = () =>
  request({
    method: 'get',
    url: GET_COACHING_CATEGORIES_ENDPOINT,
  });
