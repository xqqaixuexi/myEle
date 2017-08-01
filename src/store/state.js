import {order,bussinessbrief,bussinessInfo} from "../data/data.js";

export default {
  // 是否在加载中
  isLoading: false,
  // 用户名
  username: 'admin',
  // 密码
  password: '12345',
  // 是否登录
  isLogin: false,
  // 当前所在页面 homepage | order | myMsg 
  whichPage: '',
  // 已完成订单
  order,
  // 商家简略信息
  bussinessbrief,
  // 商家详细数据
  bussinessInfo
};