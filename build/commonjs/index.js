"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
exports.tf = tf;
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var drawExtended = require("./draw");
tslib_1.__exportStar(require("tfjs-image-recognition-base"), exports);
tslib_1.__exportStar(require("./ageGenderNet/index"), exports);
var draw = tslib_1.__assign(tslib_1.__assign({}, tfjs_image_recognition_base_1.draw), drawExtended);
exports.draw = draw;


tslib_1.__exportStar(require("./classes/index"), exports);
tslib_1.__exportStar(require("./dom/index"), exports);
tslib_1.__exportStar(require("./faceExpressionNet/index"), exports);
tslib_1.__exportStar(require("./faceLandmarkNet/index"), exports);
tslib_1.__exportStar(require("./faceRecognitionNet/index"), exports);
tslib_1.__exportStar(require("./factories/index"), exports);
tslib_1.__exportStar(require("./globalApi/index"), exports);
tslib_1.__exportStar(require("./mtcnn/index"), exports);
tslib_1.__exportStar(require("./ssdMobilenetv1/index"), exports);
tslib_1.__exportStar(require("./tinyFaceDetector/index"), exports);
tslib_1.__exportStar(require("./tinyYolov2/index"), exports);
tslib_1.__exportStar(require("./euclideanDistance"), exports);
tslib_1.__exportStar(require("./resizeResults"), exports);
//# sourceMappingURL=index.js.map