# face-api.js

[![Build Status](https://travis-ci.org/justadudewhohacks/face-api.js.svg?branch=master)](https://travis-ci.org/justadudewhohacks/face-api.js)
[![Slack](https://slack.bri.im/badge.svg)](https://slack.bri.im)

**JavaScript face recognition API for the browser and nodejs implemented on top of tensorflow.js core ([tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core))**

![faceapi](https://user-images.githubusercontent.com/31125521/57224752-ad3dc080-700a-11e9-85b9-1357b9f9bca4.gif)

## **[Click me for Live Demos!](https://justadudewhohacks.github.io/face-api.js/)**

## Tutorials

* **[face-api.js — JavaScript API for Face Recognition in the Browser with tensorflow.js](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)**
* **[Realtime JavaScript Face Tracking and Face Recognition using face-api.js’ MTCNN Face Detector](https://itnext.io/realtime-javascript-face-tracking-and-face-recognition-using-face-api-js-mtcnn-face-detector-d924dd8b5740)**
* **[Realtime Webcam Face Detection And Emotion Recognition - Video](https://youtu.be/CVClHLwv-4I)**
* **[Easy Face Recognition Tutorial With JavaScript - Video](https://youtu.be/AZ4PdALMqx0)**
* **[Using face-api.js with Vue.js and Electron](https://medium.com/@andreas.schallwig/do-not-laugh-a-simple-ai-powered-game-3e22ad0f8166)**



# Features
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
Browse to http://localhost:8081/echo?imageUrl='image-url'

``` bash
http://localhost:8081/echo?imageUrl=https://homepages.cae.wisc.edu/~ece533/images/girl.png
```

# use docker
build
``` bash
docker build -t appname .
```

run
``` bash
docker run -it -p 8081:8081  appname
```
