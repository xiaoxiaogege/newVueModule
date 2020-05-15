// 一些全局的config配置
const modeUrlObj = {
    // 生产环境
    'production': {
        baseURL: {
            authAPI : '/authority',
            reqAPI : '/requirement',
            proAPI : '/product',
            ordAPI : '/order',
            hmallAPI : '/hmall'
        }
    },
    // 开发环境
    'development': {
        baseURL: {
            api1:"/bc",//开发环境设置代理的情况
            mock:"/mock",
            api3:"http://devbc.jms.com"
        }
    },
    // 测试环境
    'test': {
        baseURL: {
            authAPI : 'http://test.com/authority',
            reqAPI : 'http://test.com/requirement',
            proAPI : 'http://test.com/product',
            ordAPI : 'http://test.com/order',
            hmallAPI : 'http://test.com/hmall'
        }
    }
  }
  export default modeUrlObj[process.env.NODE_ENV]
  