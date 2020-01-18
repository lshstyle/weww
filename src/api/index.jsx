import ajax from './ajax'

export const reqLogin = (userName, passwd) => ajax("/login/getUserInfo", {userName, passwd}, "GET")
