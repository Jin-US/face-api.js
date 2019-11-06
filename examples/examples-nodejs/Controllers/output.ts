import { Request, Response } from 'express'
import * as faceLandmarkDetection from '../faceLandmarkDetection'
import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from '../commons';
import * as faceapi from 'face-api.js';
import * as err from '../faceDetection'


//export function echo(req: Request, res: Response) {
//  res.json(req.query)
//  console.log("aaa")
//}

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


export function echo (req: Request, res: Response) {
        run()
        res.send(faceLandmarkDetection)

    return
}