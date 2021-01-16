import HandleReq from './Handler.js'

const HttpModule = function() {

  function get (url, headers = {}) {
    return HandleReq('GET', url, {}, headers)    
  }
  
  function post (url, obj, headers = {}){
    return HandleReq('POST', url, obj, headers)
  }

  function del (url, obj, headers = {}){
    return HandleReq('DELETE', url, obj, headers)
  }

  function patch (url, obj, headers = {}){
    return HandleReq('PATCH', url, obj, headers)
  }

  function put (url, obj, headers = {}){
    return HandleReq('PUT', url, obj, headers)
  }

  return {get, post, del, patch, put}
}




export default HttpModule

