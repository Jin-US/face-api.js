# face-api.js

[![Build Status](https://travis-ci.org/justadudewhohacks/face-api.js.svg?branch=master)](https://travis-ci.org/justadudewhohacks/face-api.js)
[![Slack](https://slack.bri.im/badge.svg)](https://slack.bri.im)

**JavaScript face recognition API for the browser and nodejs implemented on top of tensorflow.js core ([tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core))**

![faceapi](https://user-images.githubusercontent.com/31125521/57224752-ad3dc080-700a-11e9-85b9-1357b9f9bca4.gif)

## **[Click me for Live Demos!](https://justadudewhohacks.github.io/face-api.js/)**



## Face Landmark Detection

![face_landmark_detection](https://user-images.githubusercontent.com/31125521/57297731-b1ccac80-70d0-11e9-9bd7-59d77f180322.jpg)

# Running the Examples

Clone the repository:

``` bash
git clone https://github.com/justadudewhohacks/face-api.js.git
```
## Running the Nodejs Examples
``` bash
cd face-api.js/examples/examples-nodejs
npm i
```
cd face-api.js
``` bash
cd ../..
npm i
```
Now run one of the examples using ts-node:
``` bash
npm start
```

#get rest-api
Browse to http://localhost:8080/echo?imageUrl='image-url'

``` bash
http://localhost:8080/echo?imageUrl=https://homepages.cae.wisc.edu/~ece533/images/girl.png
```

# use docker
build
``` bash
docker build -t appname .
```

run
``` bash
docker run -it -p 8080:8080  appname
```
