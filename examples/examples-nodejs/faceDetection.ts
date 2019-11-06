import * as faceapi from 'face-api.js';
import * as express from "express"
import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';
// import * as faceLandmarkDetection from './faceLandmarkDetection'
import { Router } from 'express'

// import router from '/path/to/node_modules/ts-di/dist/index.js';

const app = express();
app.use(Router)

// app.get('/', (request, response) => {
// //   response.send(faceLandmarkDetection);
// });
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})



async function run() {

  await faceDetectionNet.loadFromDisk('../../weights')

  const img = await canvas.loadImage('../images/bbt1.jpg')
  const detections = await faceapi.detectAllFaces(img, faceDetectionOptions)

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.draw.drawDetections(out, detections)


  saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'))
  console.log('done, saved results to out/faceDetection.jpg')

//   console.log(img)
//   console.log(faceLandmarkDetection)

}

run()