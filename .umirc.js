import { resolve } from 'path'

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'hello-umi',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // 别名
  alias: {
    public: resolve(__dirname, './public'),
    components: resolve(__dirname, './src/components'),
    pages: resolve(__dirname, './src/pages'),
    models: resolve(__dirname, './src/models'),
    services: resolve(__dirname, './src/services'),
  },
  // 代理
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {
        '/api': ''
      }
    }
  },
}
