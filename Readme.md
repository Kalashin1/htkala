# HtKala
A simple module for making http requests,

install it via `npm i htkala`

for get requests

```javascript
import htkala from 'htkala'

htkala.get(url).then(data => {
//do something with data
}).catch(err => //handle error)
```

the get method also accepts an optional object to send along the request
```javascript

import htkala from 'htkala'

htkala.get(url, {data: 'to send along'}).then(data => {
//do something with data
}).catch(err => //handle error)
```

for post requests

```javascript
import htkala from 'htkala'

htkala.post(url, {object: 'to send along'}).then(data => {
//do something with data
}).catch(err => //handle error)
```

You can set the headers by passing in an object that represents the
header you want to set

```javascript
import htkala from 'htkala'

htkala.post(url, {object: 'to send along'}, {'Content-Type': 'application/json'}).then(data => {
//do something with data
}).catch(err => //handle error)
```