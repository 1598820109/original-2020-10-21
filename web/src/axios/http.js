
const  axios = require('axios');

const $http = axios.create({
    baseURL: 'http://localhost:8181/web/api',
    headers: {'X-Custom-Header': 'foobar'}
  });

// 请求主题数据
function getItemDate(opticons){

  // 默认查询的参数
  var newOpticons = Object.assign({
        limit:40,
  },opticons);
  return $http({
    url: '/article/init',
    method: 'get', 
    params: newOpticons,
  });

}

// 请求主题内容详情数据
function getArticleDate(id){
   return $http.get('/article/init'+id);
}

// 暴露
export {getItemDate,getArticleDate}