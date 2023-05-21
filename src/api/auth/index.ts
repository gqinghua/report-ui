import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { CaptchaResult, LoginData, LoginResult } from './types';

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/auth/login',
    method: 'post',
    params: data
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: '/auth/logout',
    method: 'delete'
  });
}



/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: '/auth/captcha',
    method: 'get'
  });
}
