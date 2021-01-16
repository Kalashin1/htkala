# HtKala
A simple module for making http requests,

install it via `npm i htkala`

for get requests

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { get, post} = htkala()


get(url).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let fetchJson = async () => {
    const data = await get(url)
    console.log(data) //or do something with data
}

fetchJson()
```

for post requests

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { post} = htkala()

post(url, {object: 'to send along'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let sendData = async() => {
    const result = await post(url, {data : 'to send along'})
    console.log(result) //do something with data
}

sendData()
```


You can set the headers by passing in an object that represents the
header you want to set

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { post} = htkala()

htkala.post(url, {object: 'to send along'}, {'Content-Type': 'application/json'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let sendData = async() => {
    const result = await post(url, {data : 'to send along'}, {'Content-Type': "application/json"})
    console.log(result) //do something with data
}

sendData()

```

DELTE, PUT and PATCH requests are now supported, you can also set the headers for the request by passing in an object that contains the header and the value for the header just like in a post request. 

for delete requests

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { del } = htkala()

del(url, {object: 'to send along'}, {'Content-Type': 'application/json'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let sendData = async() => {
    const result = await del(url, {data : 'to send along'}, {'Content-Type': 'application/json'})
    console.log(result) //do something with data
}

sendData()
```

for PUT requests

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { put } = htkala()
put(url, {object: 'to send along'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let sendData = async() => {
    const result = await put(url, {data : 'to send along'})
    console.log(result) //do something with data
}

sendData()
```

or PATCH requests

```javascript
import htkala from 'htkala'
//destructure to get what you want
const { patch } = htkala()
patch(url, {object: 'to send along'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR

let sendData = async() => {
    const result = await patch(url, {data : 'to send along'})
    console.log(result) //do something with data
}

sendData()
```