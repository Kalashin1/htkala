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

the get method also accepts an optional object to send along the request
```javascript

import htkala from 'htkala'
//destructure to get what you want
const { get} = htkala()

get(url, {data: 'to send along'}).then(data => {
//do something with data
}).catch(err => handle error)

//OR
let fetchJson = async () => {
    const data = await get(url, {data: 'to_send_along'})
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