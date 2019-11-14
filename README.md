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

## Table of Contents

* **[Features](#features)**
* **[Running the Examples](#running-the-examples)**
* **[face-api.js for the Browser](#face-api.js-for-the-browser)**
* **[face-api.js for Nodejs](#face-api.js-for-nodejs)**
* **[Usage](#getting-started)**
  * **[Loading the Models](#getting-started-loading-models)**
  * **[High Level API](#getting-started-high-level-api)**
  * **[Displaying Detection Results](#getting-started-displaying-detection-results)**
  * **[Face Detection Options](#getting-started-face-detection-options)**
  * **[Utility Classes](#getting-started-utility-classes)**
  * **[Other Useful Utility](#other-useful-utility)**
* **[Available Models](#models)**
  * **[Face Detection](#models-face-detection)**
  * **[Face Landmark Detection](#models-face-landmark-detection)**
  * **[Face Recognition](#models-face-recognition)**
  * **[Face Expression Recognition](#models-face-expression-recognition)**
  * **[Age Estimation and Gender Recognition](#models-age-and-gender-recognition)**
* **[API Documentation](https://justadudewhohacks.github.io/face-api.js/docs/globals.html)**

# Features

## Face Recognition

![face-recognition](https://user-images.githubusercontent.com/31125521/57297377-bfcdfd80-70cf-11e9-8afa-2044cb167bff.gif)

## Face Landmark Detection

![face_landmark_detection](https://user-images.githubusercontent.com/31125521/57297731-b1ccac80-70d0-11e9-9bd7-59d77f180322.jpg)

## Face Expression Recognition

![preview_face-expression-recognition](https://user-images.githubusercontent.com/31125521/50575270-f501d080-0dfb-11e9-9676-8f419efdade4.png)

## Age Estimation & Gender Recognition

![age_gender_recognition](https://user-images.githubusercontent.com/31125521/57297736-b5603380-70d0-11e9-873d-8b6c7243eb64.jpg)

<a name="running-the-examples"></a>

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
