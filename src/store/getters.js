export default{
	  // 得到是否登录
  getLogin: (state) => state.isLogin,
  // 得到用户名
  getuname: (state) => state.username,
  // 得到密码
  getpwd: (state) => state.password,
  // 得到是否加载中
  getloading: (state) => state.isLoading,
  // 得到当前所在页标签
  getwhichpage: (state) => state.whichPage,
  // 得到已完成订单
  getOrder: (state) => state.order,
  // 得到商家简略信息
  getBussinessbrief: (state) => state.bussinessbrief,
  // 得到商家详细数据
  getBussinessInfo: (state) => state.bussinessInfo

}