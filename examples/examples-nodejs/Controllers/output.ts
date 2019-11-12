import { Request, Response } from 'express'
import * as faceLandmarkDetection from '../faceLandmarkDetection'
import { canvas, faceDetectionNet, faceDetectionOptions, saveFile } from '../commons';
import * as faceapi from 'face-api.js';
import * as app from '../faceDetection'

export function echo (req: Request, res: Response) {
    var imageUrl = (req.query.imageUrl)
    console.log(imageUrl)
    img_downloader(imageUrl,req,res)

    return
}

// https://homepages.cae.wisc.edu/~ece533/images/airplane.png
async function img_downloader(imageUrl: String,req: Request, res: Response) {

    const download = require('image-downloader')
    const options = {
        url: imageUrl,
        dest: './'
    }


    try {
        console.log("download image")
        const { filename, image } = await download.image(options)
        console.log(filename) // => /path/to/dest/image.jpg
        await run(filename,req,res)
        console.log("222222222222")
    } catch (e) {
        console.error(e)
    }
}


async function run(filename : String,req: Request, res: Response) {

  await faceDetectionNet.loadFromDisk('../../weights')

  const img = await canvas.loadImage('./'+filename)
  console.log(img)
  const detections = await faceapi.detectAllFaces(img, faceDetectionOptions)

  const out = faceapi.createCanvasFromMedia(img) as any
  faceapi.draw.drawDetections(out, detections)


  saveFile('faceDetection.jpg', out.toBuffer('image/jpeg'))
  console.log('done, saved results to out/faceDetection.jpg')
  res.send(faceLandmarkDetection)
}