// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    baseURL: {
      api1: "/bc", //开发环境设置代理的情况
      mock: "/mock",
      api3: "http://devbc.jms.com",
    },
  },
  // 开发环境
  development: {
    baseURL: {
      api1: "/bc", //开发环境设置代理的情况
      mock: "/mock",
      api3: "http://devbc.jms.com",
    },
  },
  // 测试环境
  test: {
    baseURL: {
      api1: "/bc", //开发环境设置代理的情况
      mock: "/mock",
      api3: "http://devbc.jms.com",
    },
  },
};
export default modeUrlObj[process.env.NODE_ENV];
