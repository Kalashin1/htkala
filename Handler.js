export default function HandleReq (method, url, obj, headers = {}){
    return new Promise((resolve, reject)=>{
      const XHR = new XMLHttpRequest()
      XHR.open(method, url);
      if(typeof headers !== 'undefined'){
        for(var key in headers){
          XHR.setRequestHeader(key, headers[key])
        }
      }
      XHR.send(JSON.stringify(obj))
      XHR.onload = function(){
        if(this.status == 201 || 200){
          resolve(this.responseText || {message: 'post request successful'})
        }
        else{
          reject(new Error('Error Making request, this is what we found '+this.status))
        }
      }
    })
  }