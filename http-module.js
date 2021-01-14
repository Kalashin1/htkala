
const HttpModule = {

  get (url, obj ={}, headers = {}) {
    return new Promise((resolve, reject)=>{
      const XHR = new XMLHttpRequest()
      XHR.open("GET", url);
      if(typeof headers !== 'undefined'){
        for(var key in headers){
          XHR.setRequestHeader(key, headers[key])
        }
      }
      if(typeof obj !== 'undefined'){
        XHR.send(obj)
      }
      else {
        XHR.send()
      }
      XHR.onload = function(){
        if(this.status == 200){
          var result = JSON.parse(this.responseText)
          // console.log(response)
          resolve(this.response)
        }
        else{
          reject(new Error('Error Making request, this is what we found '+this.status))
        }
      }
    })
  },
  
   post (url, obj, headers = {}){
    return new Promise((resolve, reject)=>{
      const XHR = new XMLHttpRequest()
      XHR.open("POST", url);
      if(typeof headers !== 'undefined'){
        for(var key in headers){
          XHR.setRequestHeader(key, headers[key])
        }
      }
      XHR.send(JSON.stringify(obj))
      XHR.onload = function(){
        if(this.status == 201){
          var result = JSON.parse(this.responseText)
          resolve(result)
        }
        else{
          reject(new Error('Error Making request, this is what we found '+this.status))
        }
      }
    })
  }
}

export default HttpModule