import fly from '../utils/request'
// 登录接口
export function Longins (options) {
  return fly.request('user/code2session', {
    code: options.code
  }, {
    method: 'POST'
  })
}

export function addinter (options) {
  console.log(options)
  return fly.request('/sign', options, {
    method: 'POST'
  })
}
// 获取面试列表
export function interList (options) {
  return fly.request('/sign', options, {
    method: 'GET'
  })
}
// 获取面试详情
export function interdetail (options) {
  return fly.request(`/sign/${options}`, options, {
    method: 'GET'
  })
}

// 更新面试
export function interupdate (options) {
  return fly.request(`/sign/${options.title}`, {remind: options.remind, status: options.status}, {
    method: 'PUT'
  })
}

// 解密手机号
export function ecryptpPhone (options) {
  return fly.request(`/user/decrypt`, options, {
    method: 'POST'
  })
}
