import { Request, Response } from 'express'
import * as tf from '@tensorflow/tfjs-node';

import * as faceapi from 'face-api.js';

import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from './commons';

import * as output from './Controllers/output'


exports.run =async function(filename : String) {

  await faceDetectionNet.loadFromDisk('../../weights')
  await faceapi.nets.faceLandmark68Net.loadFromDisk('../../weights')

  const img = await canvas.loadImage(filename)
  const results = await faceapi.detectAllFaces(img, faceDetectionOptions)
    .withFaceLandmarks()


//   console.log(results[0].detection)
//   exports.results = results


  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.draw.drawDetections(out, results.map(res => res.detection))
  faceapi.draw.drawFaceLandmarks(out, results.map(res => res.landmarks))




  saveFile('faceLandmarkDetection.jpg', out.toBuffer('imWage/jpeg'))
  console.log('done, saved results to out/faceLandmarkDetection.jpg')
//   res.send(results)
}

// run()