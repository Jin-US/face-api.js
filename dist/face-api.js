import * as tf from '@tensorflow/tfjs-node';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.faceapi = global.faceapi || {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var t=function(e,n){return (t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);})(e,n)};function e(e,n){function r(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r);}function n(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{u(r.next(t));}catch(t){a(t);}}function s(t){try{u(r.throw(t));}catch(t){a(t);}}function u(t){t.done?o(t.value):new n(function(e){e(t.value);}).then(i,s);}u((r=r.apply(t,e||[])).next());})}function r(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i);}catch(t){a=[6,t],r=0;}finally{n=o=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var o=function(){function t(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags();}return t.prototype.setPlatform=function(t,e){null!=this.platform&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e;},t.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){var r=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+r+"."),this.set(t,r);}},t.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},t.prototype.getNumber=function(t){return this.get(t)},t.prototype.getBool=function(t){return this.get(t)},t.prototype.getFlags=function(){return this.flags},Object.defineProperty(t.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),t.prototype.set=function(t,e){if(null==this.flagRegistry[t])throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e);},t.prototype.evaluateFlag=function(t){if(null==this.flagRegistry[t])throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},t.prototype.setFlags=function(t){this.flags=Object.assign({},t);},t.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags();},t.prototype.populateURLFlags=function(){var t=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var e=a(this.global.location.search);if("tfjsflags"in e)e.tfjsflags.split(",").forEach(function(e){var n=e.split(":"),r=n[0],o=n[1];t.urlFlags[r]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return "true"===e;if(""+ +e===e)return +e;throw new Error("Could not parse value flag value "+e+" for flag "+t+".")}(r,o);});}},t}();function a(t){var e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"");}(e,n[0],n[1]),n.join("=")}),e}var i=null;function s(t){i=t;}var u=Object.freeze({Environment:o,getQueryParams:a,get ENV(){return i},setEnvironmentGlobal:s});function l(t){for(var e=t.length,n=0,r=0;e>0;)r=Math.random()*e|0,n=t[--e],t[e]=t[r],t[r]=n;}function c(t,e,n){return Math.max(t,Math.min(e,n))}function h(t){return t%2==0?t:t+1}function p(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function f(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function d(t,e,n){void 0===n&&(n=""),f(y(t,e),function(){return n+" Shapes "+t+" and "+e+" must match"});}function v(t){f(null!=t,function(){return "The input to the tensor constructor must be a non-null value."});}function m(t,e,n){if(void 0===e&&(e=[]),void 0===n&&(n=!1),null==e&&(e=[]),Array.isArray(t)||_(t)&&!n)for(var r=0;r<t.length;++r)m(t[r],e,n);else e.push(t);return e}function g(t){if(0===t.length)return 1;for(var e=t[0],n=1;n<t.length;n++)e*=t[n];return e}function y(t,e){if(t===e)return !0;if(null==t||null==e)return !1;if(t.length!==e.length)return !1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return !1;return !0}function x(t){return t%1==0}function b(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return -1;var e=Math.exp(2*t);return (e-1)/(e+1)}function w(t){var e=Math.ceil(Math.sqrt(t));return [e,Math.ceil(t/e)]}function C(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function E(t,e,n){return void 0===e&&(e=function(t){return 0}),new Promise(function(r,o){var a=0,i=function(){if(t())r();else{var s=e(++a);null!=n&&a>=n?o():setTimeout(i,s);}};i();})}function R(t,e){for(var n=1,r=-1,o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(-1===t[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o;}else if(t[o]<0)throw Error("Shapes can not be < 0. Found "+t[o]+" at dim "+o);if(-1===r){if(e>0&&e!==n)throw Error("Size("+e+") must match the product of shape "+t);return t}if(0===n)throw Error("Cannot infer the missing size in ["+t+"] when there are 0 elements");if(e%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+n);var a=t.slice();return a[r]=e/n,a}function I(t,e){var n=e.length;return f((t=null==t?e.map(function(t,e){return e}):[].concat(t)).every(function(t){return t>=-n&&t<n}),function(){return "All values in axis param must be in range [-"+n+", "+n+") but got axis "+t}),f(t.every(function(t){return x(t)}),function(){return "All values in axis param must be integers but got axis "+t}),t.map(function(t){return t<0?n+t:t})}function k(t,e){for(var n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,a=null==e||o?null:I(e,t).sort(),i=0,s=0;s<t.length;++s){if(null!=a){if(a[i]===s&&1!==t[s])throw new Error("Can't squeeze axis "+s+" since its dim '"+t[s]+"' is not 1");(null==a[i]||a[i]>s)&&1===t[s]&&(n.push(t[s]),r.push(s)),a[i]<=s&&i++;}1!==t[s]&&(n.push(t[s]),r.push(s));}return {newShape:n,keptDims:r}}function N(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e);}return n}function S(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e);}return n}function A(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+e+" being uploaded contains "+r+".")}}function T(t){return "bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function D(t,e){return "complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function _(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function O(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function F(t){if(null==t)return 0;var e=0;return t.forEach(function(t){return e+=t.length}),e}function M(t){return "string"==typeof t||t instanceof String}function B(t){return "boolean"==typeof t}function P(t){return "number"==typeof t}function L(t){return Array.isArray(t)?L(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":P(t)?"float32":M(t)?"string":B(t)?"bool":"float32"}function W(t){return !!(t&&t.constructor&&t.call&&t.apply)}function U(t,e){for(var n=e;n<t;++n)if(t%n==0)return n;return t}function V(t){var e=t.length;if(e<2)return [];var n=new Array(e-1);n[e-2]=t[e-1];for(var r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function z(t,e,n){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=m(t)),n&&A(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){for(var r=new Uint8Array(t.length),o=0;o<r.length;++o)0!==Math.round(t[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+e)}function G(t,e){if(0===t.length)return e[0];var n=t.reduce(function(t,e){return t*e});if(0===n)return [];if(n!==e.length)throw new Error("["+t+"] does not match the input size.");return function t(e,n,r){var o=new Array;if(1===n.length)for(var a=n[0],i=0;i<a;i++)o[i]=r[e+i];else{a=n[0];var s=n.slice(1),u=s.reduce(function(t,e){return t*e});for(i=0;i<a;i++)o[i]=t(e+i*u,s,r);}return o}(0,t,e)}function H(t,e){for(var n=q(t,e),r=0;r<n.length;r++)n[r]=1;return n}function q(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function $(){return i.platform.now()}function K(t){t.forEach(function(e){f(Number.isInteger(e)&&e>=0,function(){return "Tensor must have a shape comprised of positive integers but got shape ["+t+"]."});});}function j(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i.platform.encode(t,e)}function X(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i.platform.decode(t,e)}var Y=Object.freeze({shuffle:l,clamp:c,nearestLargerEven:h,sum:p,randUniform:function(t,e){var n=Math.random();return e*n+(1-n)*t},distSquared:function(t,e){for(var n=0,r=0;r<t.length;r++){var o=Number(t[r])-Number(e[r]);n+=o*o;}return n},assert:f,assertShapesMatch:d,assertNonNull:v,flatten:m,sizeFromShape:g,isScalarShape:function(t){return 0===t.length},arraysEqual:y,isInt:x,tanh:b,sizeToSquarishShape:w,createShuffledIndices:function(t){for(var e=new Uint32Array(t),n=0;n<t;++n)e[n]=n;return l(e),e},rightPad:C,repeatedTry:E,inferFromImplicitShape:R,parseAxisParam:I,squeezeShape:k,getTypedArrayFromDType:N,getArrayFromDType:S,checkConversionForErrors:A,isValidDtype:T,hasEncodingLoss:D,isTypedArray:_,bytesPerElement:O,bytesFromStringArray:F,isString:M,isBoolean:B,isNumber:P,inferDtype:L,isFunction:W,nearestDivisor:U,computeStrides:V,toTypedArray:z,toNestedArray:G,makeOnesTypedArray:H,makeZerosTypedArray:q,now:$,assertNonNegativeIntegerDimensions:K,fetch:function(t,e){return i.platform.fetch(t,e)},encodeString:j,decodeString:X}),Q=function(){function t(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new J);}return t.prototype.profileKernel=function(t,e,n){var r,o=this,a=this.backendTimer.time(function(){r=n();});return (Array.isArray(r)?r:[r]).forEach(function(n){n.data().then(function(r){!function(t,e,n){if("float32"!==e)return !1;for(var r=0;r<t.length;r++){var o=t[r];if(isNaN(o)||!isFinite(o))return console.warn("Found "+o+" in the result of '"+n+"'"),!0}}(r,n.dtype,t),a.then(function(a){var i="";null!=a.getExtraProfileInfo&&(i=a.getExtraProfileInfo()),o.logger.logKernelProfile(t,n,r,a.kernelMs,e,i);});});}),r},t}();var J=function(){function t(){}return t.prototype.logKernelProfile=function(t,e,n,r,o,a){var i=C(r+"ms",9),s=C(t,25),u=e.rank,l=e.size,c=C(e.shape.toString(),14),h="";for(var p in o){var f=o[p].shape,d=f.length;h+=p+": "+d+"D "+(d>0?f:"")+" ";}console.log("%c"+s+"\t%c"+i+"\t%c"+u+"D "+c+"\t%c"+l+"\t%c"+h+"\t%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue");},t}(),Z=20,tt=3,et=7;function nt(t,e,n,r){var o=V(e),a=function(t,e,n,r){var o=g(e),a=r[r.length-1],i=new Array(a).fill(0),s=e.length,u="complex64"===n?at(t):t;if(s>1)for(var l=0;l<o/a;l++)for(var c=l*a,h=0;h<a;h++)i[h]=Math.max(i[h],rt(u[c+h],0,n).length);return i}(t,e,n,o),i=e.length,s=function t(e,n,r,o,a,i){void 0===i&&(i=!0);var s="complex64"===r?2:1;var u=n[0];var l=n.length;if(0===l){if("complex64"===r){var c=at(e);return [rt(c[0],0,r)]}return "bool"===r?[ot(e[0])]:[e[0].toString()]}if(1===l){if(u>Z){var h=tt*s,p=Array.from(e.slice(0,h)),f=Array.from(e.slice(u-tt*s,u));return "complex64"===r&&(p=at(p),f=at(f)),["["+p.map(function(t,e){return rt(t,a[e],r)}).join(", ")+", ..., "+f.map(function(t,e){return rt(t,a[u-tt+e],r)}).join(", ")+"]"]}var d="complex64"===r?at(e):Array.from(e);return ["["+d.map(function(t,e){return rt(t,a[e],r)}).join(", ")+"]"]}var v=n.slice(1);var m=o.slice(1);var g=o[0]*s;var y=[];if(u>Z){for(var x=0;x<tt;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,!1));}y.push("...");for(var x=u-tt;x<u;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,x===u-1));}}else for(var x=0;x<u;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,x===u-1));}var C=2===l?",":"";y[0]="["+y[0]+C;for(var x=1;x<y.length-1;x++)y[x]=" "+y[x]+C;var E=",\n";for(var x=2;x<l;x++)E+="\n";y[y.length-1]=" "+y[y.length-1]+"]"+(i?"":E);return y}(t,e,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map(function(t){return "    "+t}).join("\n")),u.join("\n")}function rt(t,e,n){return C(Array.isArray(t)?parseFloat(t[0].toFixed(et))+" + "+parseFloat(t[1].toFixed(et))+"j":M(t)?"'"+t+"'":"bool"===n?ot(t):parseFloat(t.toFixed(et)).toString(),e)}function ot(t){return 0===t?"false":"true"}function at(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var it=function(){function t(t,e,n){var r=this;if(this.dtype=e,this.shape=t.slice(),this.size=g(t),null!=n){var o=n.length;f(o===this.size,function(){return "Length of values '"+o+"' does not match the size inferred by the shape '"+r.size+"'."});}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||S(e,this.size),this.strides=V(t);}return t.prototype.set=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];0===n.length&&(n=[0]),f(n.length===this.rank,function(){return "The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var o=this.locToIndex(n);this.values[o]=t;},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=[0]);for(var n=0,r=0,o=t;r<o.length;r++){var a=o[r];if(a<0||a>=this.shape[n]){var i="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(i)}n++;}for(var s=t[t.length-1],u=0;u<t.length-1;++u)s+=this.strides[u]*t[u];return this.values[s]},t.prototype.locToIndex=function(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},t.prototype.indexToLoc=function(t){if(0===this.rank)return [];if(1===this.rank)return [t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.toTensor=function(){return ct.make(this.shape,{values:this.values},this.dtype)},t}(),st=null,ut=null,lt=null;var ct=function(){function t(t,e,n,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=g(t),this.strides=V(t),this.dataId=null!=r?r:{},this.id=st().nextTensorId(),this.rankType=this.rank<5?this.rank.toString():"higher",st().registerTensor(this,o),null!=n&&st().write(o,this.dataId,n);}return t.make=function(e,n,r,o){var a=n.values;return null!=n.values&&"string"===r&&M(n.values[0])&&(a=n.values.map(function(t){return j(t)})),new t(e,r,a,n.dataId,o)},t.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},t.prototype.asScalar=function(){return this.throwIfDisposed(),f(1===this.size,function(){return "The array must have only 1 element."}),this.reshape([])},t.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},t.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},t.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},t.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),this.reshape([t,e,n,r])},t.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),this.reshape([t,e,n,r,o])},t.prototype.asType=function(t){return this.throwIfDisposed(),ut.cast(this,t)},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.buffer=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,ut.buffer(this.shape,this.dtype,t)]}})})},t.prototype.bufferSync=function(){return ut.buffer(this.shape,this.dtype,this.dataSync())},t.prototype.array=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,G(this.shape,t)]}})})},t.prototype.arraySync=function(){return G(this.shape,this.dataSync())},t.prototype.data=function(){return n(this,void 0,void 0,function(){var t,e;return r(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=st().read(this.dataId),"string"!==this.dtype?[3,2]:[4,t];case 1:e=n.sent();try{return [2,e.map(function(t){return X(t)})]}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return [2,t]}})})},t.prototype.dataSync=function(){this.throwIfDisposed();var t=st().readSync(this.dataId);if("string"===this.dtype)try{return t.map(function(t){return X(t)})}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},t.prototype.bytes=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,st().read(this.dataId)];case 1:return t=e.sent(),"string"===this.dtype?[2,t]:[2,new Uint8Array(t.buffer)]}})})},t.prototype.dispose=function(){this.isDisposed||(st().disposeTensor(this),this.isDisposedInternal=!0);},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),t.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},t.prototype.toFloat=function(){return this.asType("float32")},t.prototype.toInt=function(){return this.asType("int32")},t.prototype.toBool=function(){return this.asType("bool")},t.prototype.print=function(t){return void 0===t&&(t=!1),ut.print(this,t)},t.prototype.reshape=function(t){return this.throwIfDisposed(),ut.reshape(this,t)},t.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},t.prototype.expandDims=function(t){return void 0===t&&(t=0),ut.expandDims(this,t)},t.prototype.cumsum=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=!1),ut.cumsum(this,t,e,n)},t.prototype.squeeze=function(t){return this.throwIfDisposed(),ut.squeeze(this,t)},t.prototype.clone=function(){return this.throwIfDisposed(),ut.clone(this)},t.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),ut.oneHot(this,t,e,n)},t.prototype.toString=function(t){return void 0===t&&(t=!1),nt(this.dataSync(),this.shape,this.dtype,t)},t.prototype.tile=function(t){return this.throwIfDisposed(),ut.tile(this,t)},t.prototype.gather=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),ut.gather(this,t,e)},t.prototype.matMul=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),this.throwIfDisposed(),ut.matMul(this,t,e,n)},t.prototype.dot=function(t){return this.throwIfDisposed(),ut.dot(this,t)},t.prototype.norm=function(t,e,n){return void 0===t&&(t="euclidean"),void 0===e&&(e=null),void 0===n&&(n=!1),this.throwIfDisposed(),ut.norm(this,t,e,n)},t.prototype.slice=function(t,e){return this.throwIfDisposed(),ut.slice(this,t,e)},t.prototype.reverse=function(t){return this.throwIfDisposed(),ut.reverse(this,t)},t.prototype.concat=function(e,n){return void 0===n&&(n=0),this.throwIfDisposed(),e instanceof t&&(e=[e]),ut.concat([this].concat(e),n)},t.prototype.split=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),ut.split(this,t,e)},t.prototype.stack=function(t,e){return void 0===e&&(e=0),ut.stack([this,t],e)},t.prototype.unstack=function(t){return void 0===t&&(t=0),ut.unstack(this,t)},t.prototype.pad=function(t,e){return void 0===e&&(e=0),ut.pad(this,t,e)},t.prototype.batchNormalization=function(t,e,n,r,o){return void 0===n&&(n=.001),lt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,r,n)},t.prototype.batchNorm=function(t,e,n,r,o){return void 0===o&&(o=.001),this.throwIfDisposed(),ut.batchNorm(this,t,e,n,r,o)},t.prototype.all=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.all(this,t,e)},t.prototype.any=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.any(this,t,e)},t.prototype.logSumExp=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.logSumExp(this,t,e)},t.prototype.sum=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.sum(this,t,e)},t.prototype.prod=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.prod(this,t,e)},t.prototype.mean=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.mean(this,t,e)},t.prototype.min=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.min(this,t,e)},t.prototype.max=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ut.max(this,t,e)},t.prototype.argMin=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),ut.argMin(this,t)},t.prototype.argMax=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),ut.argMax(this,t)},t.prototype.cast=function(t){return this.throwIfDisposed(),ut.cast(this,t)},t.prototype.add=function(t){return this.throwIfDisposed(),ut.add(this,t)},t.prototype.addStrict=function(t){return this.throwIfDisposed(),ut.addStrict(this,t)},t.prototype.atan2=function(t){return this.throwIfDisposed(),ut.atan2(this,t)},t.prototype.sub=function(t){return this.throwIfDisposed(),ut.sub(this,t)},t.prototype.subStrict=function(t){return this.throwIfDisposed(),ut.subStrict(this,t)},t.prototype.pow=function(t){return this.throwIfDisposed(),ut.pow(this,t)},t.prototype.powStrict=function(t){return this.throwIfDisposed(),ut.powStrict(this,t)},t.prototype.mul=function(t){return this.throwIfDisposed(),ut.mul(this,t)},t.prototype.mulStrict=function(t){return this.throwIfDisposed(),ut.mulStrict(this,t)},t.prototype.div=function(t){return this.throwIfDisposed(),ut.div(this,t)},t.prototype.floorDiv=function(t){return this.throwIfDisposed(),ut.floorDiv(this,t)},t.prototype.divStrict=function(t){return this.throwIfDisposed(),ut.divStrict(this,t)},t.prototype.minimum=function(t){return this.throwIfDisposed(),ut.minimum(this,t)},t.prototype.minimumStrict=function(t){return this.throwIfDisposed(),ut.minimumStrict(this,t)},t.prototype.maximum=function(t){return this.throwIfDisposed(),ut.maximum(this,t)},t.prototype.maximumStrict=function(t){return this.throwIfDisposed(),ut.maximumStrict(this,t)},t.prototype.mod=function(t){return this.throwIfDisposed(),ut.mod(this,t)},t.prototype.modStrict=function(t){return this.throwIfDisposed(),ut.modStrict(this,t)},t.prototype.squaredDifference=function(t){return this.throwIfDisposed(),ut.squaredDifference(this,t)},t.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),ut.squaredDifferenceStrict(this,t)},t.prototype.transpose=function(t){return this.throwIfDisposed(),ut.transpose(this,t)},t.prototype.notEqual=function(t){return this.throwIfDisposed(),ut.notEqual(this,t)},t.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),ut.notEqualStrict(this,t)},t.prototype.less=function(t){return this.throwIfDisposed(),ut.less(this,t)},t.prototype.lessStrict=function(t){return this.throwIfDisposed(),ut.lessStrict(this,t)},t.prototype.equal=function(t){return this.throwIfDisposed(),ut.equal(this,t)},t.prototype.equalStrict=function(t){return this.throwIfDisposed(),ut.equalStrict(this,t)},t.prototype.lessEqual=function(t){return this.throwIfDisposed(),ut.lessEqual(this,t)},t.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),ut.lessEqualStrict(this,t)},t.prototype.greater=function(t){return this.throwIfDisposed(),ut.greater(this,t)},t.prototype.greaterStrict=function(t){return this.throwIfDisposed(),ut.greaterStrict(this,t)},t.prototype.greaterEqual=function(t){return this.throwIfDisposed(),ut.greaterEqual(this,t)},t.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),ut.greaterEqualStrict(this,t)},t.prototype.logicalAnd=function(t){return this.throwIfDisposed(),ut.logicalAnd(this,t)},t.prototype.logicalOr=function(t){return this.throwIfDisposed(),ut.logicalOr(this,t)},t.prototype.logicalNot=function(){return this.throwIfDisposed(),ut.logicalNot(this)},t.prototype.logicalXor=function(t){return this.throwIfDisposed(),ut.logicalXor(this,t)},t.prototype.where=function(t,e){return this.throwIfDisposed(),ut.where(t,this,e)},t.prototype.neg=function(){return this.throwIfDisposed(),ut.neg(this)},t.prototype.ceil=function(){return this.throwIfDisposed(),ut.ceil(this)},t.prototype.floor=function(){return this.throwIfDisposed(),ut.floor(this)},t.prototype.sign=function(){return this.throwIfDisposed(),ut.sign(this)},t.prototype.isNaN=function(){return this.throwIfDisposed(),ut.isNaN(this)},t.prototype.isInf=function(){return this.throwIfDisposed(),ut.isInf(this)},t.prototype.isFinite=function(){return this.throwIfDisposed(),ut.isFinite(this)},t.prototype.exp=function(){return this.throwIfDisposed(),ut.exp(this)},t.prototype.expm1=function(){return this.throwIfDisposed(),ut.expm1(this)},t.prototype.log=function(){return this.throwIfDisposed(),ut.log(this)},t.prototype.log1p=function(){return this.throwIfDisposed(),ut.log1p(this)},t.prototype.sqrt=function(){return this.throwIfDisposed(),ut.sqrt(this)},t.prototype.rsqrt=function(){return this.throwIfDisposed(),ut.rsqrt(this)},t.prototype.square=function(){return this.throwIfDisposed(),ut.square(this)},t.prototype.reciprocal=function(){return this.throwIfDisposed(),ut.reciprocal(this)},t.prototype.abs=function(){return this.throwIfDisposed(),ut.abs(this)},t.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),ut.clipByValue(this,t,e)},t.prototype.relu=function(){return this.throwIfDisposed(),ut.relu(this)},t.prototype.elu=function(){return this.throwIfDisposed(),ut.elu(this)},t.prototype.selu=function(){return this.throwIfDisposed(),ut.selu(this)},t.prototype.leakyRelu=function(t){return void 0===t&&(t=.2),this.throwIfDisposed(),ut.leakyRelu(this,t)},t.prototype.prelu=function(t){return this.throwIfDisposed(),ut.prelu(this,t)},t.prototype.sigmoid=function(){return this.throwIfDisposed(),ut.sigmoid(this)},t.prototype.logSigmoid=function(){return this.throwIfDisposed(),ut.logSigmoid(this)},t.prototype.softplus=function(){return this.throwIfDisposed(),ut.softplus(this)},t.prototype.zerosLike=function(){return this.throwIfDisposed(),ut.zerosLike(this)},t.prototype.onesLike=function(){return this.throwIfDisposed(),ut.onesLike(this)},t.prototype.sin=function(){return this.throwIfDisposed(),ut.sin(this)},t.prototype.cos=function(){return this.throwIfDisposed(),ut.cos(this)},t.prototype.tan=function(){return this.throwIfDisposed(),ut.tan(this)},t.prototype.asin=function(){return this.throwIfDisposed(),ut.asin(this)},t.prototype.acos=function(){return this.throwIfDisposed(),ut.acos(this)},t.prototype.atan=function(){return this.throwIfDisposed(),ut.atan(this)},t.prototype.sinh=function(){return this.throwIfDisposed(),ut.sinh(this)},t.prototype.cosh=function(){return this.throwIfDisposed(),ut.cosh(this)},t.prototype.tanh=function(){return this.throwIfDisposed(),ut.tanh(this)},t.prototype.asinh=function(){return this.throwIfDisposed(),ut.asinh(this)},t.prototype.acosh=function(){return this.throwIfDisposed(),ut.acosh(this)},t.prototype.atanh=function(){return this.throwIfDisposed(),ut.atanh(this)},t.prototype.erf=function(){return this.throwIfDisposed(),ut.erf(this)},t.prototype.round=function(){return this.throwIfDisposed(),ut.round(this)},t.prototype.step=function(t){return void 0===t&&(t=0),this.throwIfDisposed(),ut.step(this,t)},t.prototype.softmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),ut.softmax(this,t)},t.prototype.logSoftmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),ut.logSoftmax(this,t)},t.prototype.resizeBilinear=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),ut.image.resizeBilinear(this,t,e)},t.prototype.resizeNearestNeighbor=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),ut.image.resizeNearestNeighbor(this,t,e)},t.prototype.conv1d=function(t,e,n,r,o,a){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),ut.conv1d(this,t,e,n,r,o,a)},t.prototype.conv2d=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),ut.conv2d(this,t,e,n,r,o,a)},t.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),ut.conv2dTranspose(this,t,e,n,r,o)},t.prototype.depthwiseConv2D=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),ut.depthwiseConv2d(this,t,e,n,r,o,a)},t.prototype.separableConv2d=function(t,e,n,r,o,a){return void 0===o&&(o=[1,1]),void 0===a&&(a="NHWC"),this.throwIfDisposed(),ut.separableConv2d(this,t,e,n,r,o,a)},t.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),ut.avgPool(this,t,e,n,r)},t.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),ut.maxPool(this,t,e,n,r)},t.prototype.localResponseNormalization=function(t,e,n,r){return void 0===t&&(t=5),void 0===e&&(e=1),void 0===n&&(n=1),void 0===r&&(r=.5),ut.localResponseNormalization(this,t,e,n,r)},t.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),ut.pool(this,t,e,n,r,o)},t.prototype.variable=function(t,e,n){return void 0===t&&(t=!0),this.throwIfDisposed(),ht.variable(this,t,e,n)},t.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),ut.unsortedSegmentSum(this,t,e)},t.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),ut.batchToSpaceND(this,t,e)},t.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),ut.spaceToBatchND(this,t,e)},t.prototype.topk=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=!0),this.throwIfDisposed(),ut.topk(this,t,e)},t.prototype.stridedSlice=function(t,e,n,r,o,a,i,s){return void 0===r&&(r=0),void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),this.throwIfDisposed(),ut.stridedSlice(this,t,e,n,r,o,a,i,s)},t.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),ut.depthToSpace(this,t,e)},t.prototype.fft=function(){return this.throwIfDisposed(),ut.spectral.fft(this)},t.prototype.ifft=function(){return this.throwIfDisposed(),ut.spectral.ifft(this)},t.prototype.rfft=function(){return this.throwIfDisposed(),ut.spectral.rfft(this)},t.prototype.irfft=function(){return this.throwIfDisposed(),ut.spectral.irfft(this)},t}();Object.defineProperty(ct,Symbol.hasInstance,{value:function(t){return !!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype}});var ht=function(t){function n(e,n,r){void 0===n&&(n=!0);var o=t.call(this,e.shape,e.dtype,null,e.dataId)||this;o.trainable=n,o.name=r,null==o.name&&(o.name=st().nextVariableId().toString());try{st().registerVariable(o);}catch(t){throw st().disposeTensor(o),t}return o}return e(n,t),n.variable=function(t,e,r,o){return void 0===e&&(e=!0),null!=o&&o!==t.dtype&&(t=t.asType(o)),new n(t,e,r)},n.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!y(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");st().disposeTensor(this),this.dataId=t.dataId,st().registerTensor(this);},n.prototype.dispose=function(){st().disposeVariable(this),this.isDisposedInternal=!0;},n}(ct);Object.defineProperty(ht,Symbol.hasInstance,{value:function(t){return t instanceof ct&&null!=t.assign&&t.assign instanceof Function}});var pt,ft,dt,vt,mt,gt=ht.variable;!function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6";}(pt||(pt={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64";}(ft||(ft={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64";}(dt||(dt={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64";}(vt||(vt={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64";}(mt||(mt={}));var yt={float32:vt,int32:ft,bool:dt,complex64:mt};function xt(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return "string";throw new Error("Can not upcast "+t+" with "+e)}return yt[t][e]}function bt(t){return xt(t,"int32")}function wt(t,e){if(t.dtype===e.dtype)return [t,e];var n=xt(t.dtype,e.dtype);return [t.cast(n),e.cast(n)]}function Ct(t,e){f(t.dtype===e.dtype,function(){return "The dtypes of the first("+t.dtype+") and second("+e.dtype+") input must match"});}function Et(t){var e=[];return function t(e,n,r){if(null==e)return;if(e instanceof ct)return void n.push(e);if(o=e,!Array.isArray(o)&&"object"!=typeof o)return;var o;var a=e;for(var i in a){var s=a[i];r.has(s)||(r.add(s),t(s,n,r));}}(t,e,new Set),e}var Rt,It=Object.freeze({makeTypesMatch:wt,assertTypesMatch:Ct,isTensorInList:function(t,e){for(var n=0;n<e.length;n++)if(e[n].id===t.id)return !0;return !1},getTensorsInContainer:Et}),kt=function(){function t(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null};}return t.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose();},t}(),Nt=function(){function t(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new kt;}return t.prototype.ready=function(){return n(this,void 0,void 0,function(){var t,e,n;return r(this,function(r){switch(r.label){case 0:if(null!=this.pendingBackendInit)return [2,this.pendingBackendInit.then(function(){})];if(null!=this.backendInstance)return [2];t=this.getSortedBackends(),e=0,r.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(t.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");if(null==this.backendInstance){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");this.setBackend(e);}return this.backendInstance},enumerable:!0,configurable:!0}),t.prototype.backendNames=function(){return Object.keys(this.registryFactory)},t.prototype.findBackend=function(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;if(this.initializeBackend(t).asyncInit)return null}return this.registry[t]},t.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},t.prototype.registerBackend=function(t,e,n){return void 0===n&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},t.prototype.setBackend=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:if(null==this.registryFactory[t])throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,null!=this.registry[t]?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=r.sent(),[3,3];case 2:o=n,r.label=3;case 3:if(!o)return [2,!1];r.label=4;case 4:return this.backendInstance=this.registry[t],this.profiler=new Q(this.backendInstance),[2,!0]}})})},t.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(null==n)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var r=n.factory();if(Promise.resolve(r)===r){var o=++this.pendingBackendInitId,a=r.then(function(n){return !(o<e.pendingBackendInitId)&&(e.registry[t]=n,e.pendingBackendInit=null,!0)}).catch(function(n){return !(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(n.stack||n.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(e){return console.warn("Initialization of backend "+t+" failed"),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}},t.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null);},t.prototype.getSortedBackends=function(){var t=this;if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},t.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],r=this.initializeBackend(n),o=r.success,a=r.asyncInit;if(a||o)return {name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},t.prototype.moveData=function(t,e){this.write(t,e,this.readSync(e));},t.prototype.tidy=function(t,e){var n,r=this,o=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t;}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t;}return this.scopedRun(function(){return r.startScope(o)},function(){return r.endScope(n)},function(){return (n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},t.prototype.scopedRun=function(t,e,n){t();try{var r=n();return e(),r}catch(t){throw e(),t}},t.prototype.nextTensorId=function(){return t.nextTensorId++},t.prototype.nextVariableId=function(){return t.nextVariableId++},t.prototype.clone=function(t){var e=ct.make(t.shape,{dataId:t.dataId},t.dtype);return this.addTapeNode([t],e,function(t){return [t.toFloat()]}),e},t.prototype.runKernel=function(t,e,n){var r,o=this,a=[],i=this.isTapeOn(),s=null!=this.state.activeScope?this.state.activeScope.name:"",u=function(t){i&&(a=t.map(function(t){return o.keep(o.clone(t))}));},l=this.state.numBytes,c=this.state.numTensors;if(this.scopedRun(function(){return o.state.kernelDepth++},function(){return o.state.kernelDepth--},function(){r=o.ENV.getBool("DEBUG")?o.profiler.profileKernel(s,e,function(){return t(o.backend,u)}):t(o.backend,u);}),i){var h={id:this.state.nextTapeNodeId++,name:s,inputs:e,outputs:Array.isArray(r)?r:[r],saved:a};null!=n&&(h.gradient=function(t){return n(t,a)}),this.state.activeTape.push(h);}return this.state.profiling&&this.state.activeProfile.kernels.push({name:s,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-c,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(t){return e[t].shape}),outputShape:Array.isArray(r)?r.map(function(t){return t.shape}):r.shape}),r},t.prototype.registerTensor=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;var r=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(r=t.size*O(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:null!=e?e:this.backend,dtype:t.dtype,shape:t.shape,bytes:r,refCount:0}),this.state.numBytes+=r,null!=e?e.register(t.dataId,t.shape,t.dtype):this.backend.register(t.dataId,t.shape,t.dtype);}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof ht||this.track(t);},t.prototype.registerVariable=function(t){if(null!=this.state.registeredVariables[t.name])throw new Error("Variable with name "+t.name+" was already registered");this.state.registeredVariables[t.name]=t;},t.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--;}},t.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e);}},t.prototype.disposeVariable=function(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name];},t.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},t.prototype.profile=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(t){return t.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},t.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},t.prototype.addTapeNode=function(t,e,n){var r={};t.forEach(function(t,e){r[e]=t;});var o={id:this.state.nextTapeNodeId++,name:this.state.activeScope.name,inputs:r,outputs:[e],gradient:function(t){var e=n(t),r={};return e.forEach(function(t,e){r[e]=function(){return t};}),r}};this.state.activeTape.push(o);},t.prototype.keep=function(t){return t.kept=!0,t},t.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++;},t.prototype.endTape=function(){this.state.gradientDepth--;},t.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e;},t.prototype.endScope=function(t){for(var e=this,n=Et(t),r=new Set(n.map(function(t){return t.id})),o=0;o<this.state.activeScope.track.length;o++){var a=this.state.activeScope.track[o];a.kept||r.has(a.id)||a.dispose();}var i=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(t){t.kept||t.scopeId!==i.id||e.track(t);});},t.prototype.gradients=function(t,e,n,r){var o=this;if(void 0===r&&(r=!1),f(e.length>0,function(){return "gradients() received an empty list of xs."}),null!=n&&"float32"!==n.dtype)throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun(function(){return o.startTape()},function(){return o.endTape()},function(){return o.tidy("forward",t)});f(a instanceof ct,function(){return "The result y returned by f() must be a tensor."});var i=function(t,e,n){for(var r={},o={},a=0;a<e.length;a++)r[e[a].id]=!0;for(a=0;a<t.length;a++){var i=(d=t[a]).inputs;for(var s in i){for(var u=i[s],l=!1,c=0;c<e.length;c++)if(r[u.id]){d.outputs.forEach(function(t){return r[t.id]=!0}),l=!0,o[d.id]=!0;break}if(l)break}}var h={};h[n.id]=!0;var p={};for(a=t.length-1;a>=0;a--)for(i=(d=t[a]).inputs,c=0;c<d.outputs.length;c++)if(h[d.outputs[c].id]){for(var s in i)h[i[s].id]=!0,p[d.id]=!0;break}var f=[];for(a=0;a<t.length;a++){var d;if(o[(d=t[a]).id]&&p[d.id]){var v={};for(var s in d.inputs){var m=d.inputs[s];r[m.id]&&(v[s]=m);}var g=Object.assign({},d);g.inputs=v,g.outputs=d.outputs,f.push(g);}}return f}(this.state.activeTape,e,a);if(!r&&0===i.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var t,r,s={};s[a.id]=null==n?(t=a.shape,r=H(g(t),"float32"),ct.make(t,{values:r})):n,function(t,e,n){for(var r=function(r){var o=e[r],a=[];if(o.outputs.forEach(function(e){var n=t[e.id];if(null!=n)a.push(n);else{var r=ct.make(e.shape,{values:q(e.size,e.dtype)},e.dtype);a.push(r);}}),null==o.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+o.name+".");var i=o.gradient(1===o.outputs.length?a[0]:a),s=function(e){if(!(e in i))throw new Error("Cannot backprop through input "+e+". Available gradients found: "+Object.keys(i)+".");var r=n(function(){return i[e]()});if("float32"!==r.dtype)throw new Error("Error in gradient for op "+o.name+". The gradient of input "+e+" must have 'float32' dtype, but has '"+r.dtype+"'");var a=o.inputs[e];if(!y(r.shape,a.shape))throw new Error("Error in gradient for op "+o.name+". The gradient of input '"+e+"' has shape '"+r.shape+"', which does not match the shape of the input '"+a.shape+"'");if(null==t[a.id])t[a.id]=r;else{var s=t[a.id];t[a.id]=s.add(r),s.dispose();}};for(var u in o.inputs)s(u);},o=e.length-1;o>=0;o--)r(o);}(s,i,function(t){return o.tidy(t)});var u=e.map(function(t){return s[t.id]});return 0===o.state.gradientDepth&&(o.state.activeTape.forEach(function(t){for(var e in t.saved)t.saved[e].dispose();}),o.state.activeTape=null),{value:a,grads:u}})},t.prototype.customGrad=function(t){var e=this;return f(W(t),function(){return "The f passed in customGrad(f) must be a function."}),function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];f(r.every(function(t){return t instanceof ct}),function(){return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return r.forEach(function(t,e){a[e]=t;}),e.runKernel(function(e,o){return f((n=t.apply(void 0,r.concat([o]))).value instanceof ct,function(){return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),f(W(n.gradFunc),function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},a,function(t,e){var o=n.gradFunc(t,e),a=Array.isArray(o)?o:[o];f(a.length===r.length,function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),f(a.every(function(t){return t instanceof ct}),function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var i={};return a.forEach(function(t,e){i[e]=function(){return t};}),i})}},t.prototype.write=function(t,e,n){var r=this.state.tensorInfo.get(e),o=r.backend;if(t=t||this.backend,"string"===r.dtype){var a=F(n);this.state.numBytes+=a-r.bytes,r.bytes=a;}t!==o&&(o.disposeData(e),r.backend=t,t.register(e,r.shape,r.dtype)),t.write(e,n);},t.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},t.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},t.prototype.fromPixels=function(t,e){return this.backend.fromPixels(t,e)},t.prototype.time=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){switch(r.label){case 0:return e=$(),[4,this.backend.time(t)];case 1:return (n=r.sent()).wallMs=$()-e,[2,n]}})})},t.prototype.track=function(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(t.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),t.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new kt,this.registry)this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null;},t.nextTensorId=0,t.nextVariableId=0,t}();var St=function(){var t=function(){if(null==Rt){var t=void 0;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else if("undefined"!=typeof process)t=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");t=self;}Rt=t;}return Rt}();if(null==t._tfengine){var e=new o(t);t._tfengine=new Nt(e);}return s(t._tfengine.ENV),st=function(){return t._tfengine},t._tfengine}();function At(){return "undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}i.registerFlag("DEBUG",function(){return !1},function(t){t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");}),i.registerFlag("IS_BROWSER",function(){return At()}),i.registerFlag("IS_NODE",function(){return "undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node}),i.registerFlag("IS_CHROME",function(){return "undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),i.registerFlag("PROD",function(){return !1}),i.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return i.getBool("DEBUG")}),i.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return !0}),i.registerFlag("IS_TEST",function(){return !1});var Tt,Dt,_t={},Ot={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ft(t,e){_t[t]=e;}function Mt(t){t in _t||(_t[t]=function(t){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var e=Bt(t);if(e.addEventListener("webglcontextlost",function(e){e.preventDefault(),delete _t[t];},!1),1===t)return e.getContext("webgl",Ot)||e.getContext("experimental-webgl",Ot);return e.getContext("webgl2",Ot)}(t));var e=_t[t];return e.isContextLost()?(delete _t[t],Mt(t)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),_t[t])}function Bt(t){if("undefined"!=typeof OffscreenCanvas&&2===t)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Pt(t,e){return [e,t]}function Lt(t){var e=g(t);return w(Math.ceil(e/4))}function Wt(t,e){return [Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Ut(t,e){var n,r,o,a,s,u,l,c,h,p=t;return 2===i.getNumber("WEBGL_VERSION")?(n=p.R32F,r=p.R16F,o=p.RGBA16F,a=p.RGBA32F,s=p.RED,u=4,l=1,c=p.HALF_FLOAT,h=p.FLOAT):(n=t.RGBA,r=t.RGBA,o=t.RGBA,a=p.RGBA,s=t.RGBA,u=4,l=4,c=null!=e?e.HALF_FLOAT_OES:null,h=t.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:s,downloadTextureFormat:t.RGBA,downloadUnpackNumChannels:u,defaultNumChannels:l,textureTypeHalfFloat:c,textureTypeFloat:h}}function Vt(t,e,n){var r=n();return e&&function(t){var e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+qt(t,e))}(t),r}!function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD";}(Tt||(Tt={})),function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16";}(Dt||(Dt={}));var zt=5.96e-8,Gt=65504;function Ht(t){return !!(i.getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===t||zt<Math.abs(t)&&Math.abs(t)<Gt)}function qt(t,e){switch(e){case t.NO_ERROR:return "NO_ERROR";case t.INVALID_ENUM:return "INVALID_ENUM";case t.INVALID_VALUE:return "INVALID_VALUE";case t.INVALID_OPERATION:return "INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return "INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return "OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return "CONTEXT_LOST_WEBGL";default:return "Unknown error code "+e}}function $t(t,e,n){return ve(t,e,function(){return t.getExtension(n)},'Extension "'+n+'" not supported on this browser.')}function Kt(t,e,n){var r=ve(t,e,function(){return t.createShader(t.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Vt(t,e,function(){return t.shaderSource(r,n)}),Vt(t,e,function(){return t.compileShader(r)}),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw console.log(t.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function jt(t,e,n){var r=ve(t,e,function(){return t.createShader(t.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Vt(t,e,function(){return t.shaderSource(r,n)}),Vt(t,e,function(){return t.compileShader(r)}),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw function(t,e){var n=Qt.exec(e);if(null==n)return console.log("Couldn't parse line number in error: "+e),void console.log(t);for(var r=+n[1],o=t.split("\n"),a=o.length.toString().length+2,i=o.map(function(t,e){return C((e+1).toString(),a)+t}),s=0,u=0;u<i.length;u++)s=Math.max(i[u].length,s);var l=i.slice(0,r-1),c=i.slice(r-1,r),h=i.slice(r);console.log(l.join("\n")),console.log(e.split("\n")[0]),console.log("%c "+C(c[0],s),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(h.join("\n"));}(n,t.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Xt,Yt,Qt=/ERROR: [0-9]+:([0-9]+):/g;function Jt(t,e){return ve(t,e,function(){return t.createProgram()},"Unable to create WebGLProgram.")}function Zt(t,e,n){if(Vt(t,e,function(){return t.linkProgram(n)}),!1===t.getProgramParameter(n,t.LINK_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function te(t,e,n){if(Vt(t,e,function(){return t.validateProgram(n)}),!1===t.getProgramParameter(n,t.VALIDATE_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function ee(t,e,n){var r=ve(t,e,function(){return t.createBuffer()},"Unable to create WebGLBuffer");return Vt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,r)}),Vt(t,e,function(){return t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}),r}function ne(t,e,n){var r=ve(t,e,function(){return t.createBuffer()},"Unable to create WebGLBuffer");return Vt(t,e,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r)}),Vt(t,e,function(){return t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW)}),r}function re(t,e){return ve(t,e,function(){return t.createTexture()},"Unable to create WebGLTexture.")}function oe(t,e){var n=i.getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){var r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(t>n||e>n){r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}}function ae(t,e){return ve(t,e,function(){return t.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function ie(t,e,n,r,o,a,i,s){var u=t.getAttribLocation(n,r);return -1!==u&&(Vt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,o)}),Vt(t,e,function(){return t.vertexAttribPointer(u,a,t.FLOAT,!1,i,s)}),Vt(t,e,function(){return t.enableVertexAttribArray(u)}),!0)}function se(t,e,n,r){me(t,r),Vt(t,e,function(){return t.activeTexture(t.TEXTURE0+r)}),Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)});}function ue(t,e,n,r){return ve(t,e,function(){return t.getUniformLocation(n,r)},'uniform "'+r+'" not present in program.')}function le(t,e,n){return t.getUniformLocation(e,n)}function ce(t,e,n,r,o,a){Vt(t,e,function(){return se(t,e,r,a)}),Vt(t,e,function(){return t.uniform1i(o,a)});}function he(t,e,n,r){Vt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,r)}),Vt(t,e,function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)});}function pe(t,e,n){Vt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,n)}),Vt(t,e,function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0)});}function fe(t){var e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+de(t,e))}function de(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return "FRAMEBUFFER_UNSUPPORTED";default:return "unknown error "+e}}function ve(t,e,n,r){var o=Vt(t,e,function(){return n()});if(null==o)throw new Error(r);return o}function me(t,e){var n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=e+t.TEXTURE0;if(r<t.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function ge(t,e){return void 0===e&&(e=2),g(t.slice(0,t.length-e))}function ye(t){if(0===t.length)throw Error("Cannot get rows and columns of an empty shape array.");return [t.length>1?t[t.length-2]:1,t[t.length-1]]}function xe(t){var e=[1,1,1];return 0===t.length||1===t.length&&1===t[0]||(e=[ge(t)].concat(ye(t))),e}function be(t,e){var n;void 0===e&&(e=!1);var r=i.getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(r*=2,1===(t=t.map(function(e,n){return n>=t.length-2?h(t[n]):t[n]})).length&&(t=[2,t[0]])),2!==t.length){var o=k(t);t=o.newShape;}var a=g(t);if(t.length<=1&&a<=r)return [1,a];if(2===t.length&&t[0]<=r&&t[1]<=r)return t;if(3===t.length&&t[0]*t[1]<=r&&t[2]<=r)return [t[0]*t[1],t[2]];if(3===t.length&&t[0]<=r&&t[1]*t[2]<=r)return [t[0],t[1]*t[2]];if(4===t.length&&t[0]*t[1]*t[2]<=r&&t[3]<=r)return [t[0]*t[1]*t[2],t[3]];if(4===t.length&&t[0]<=r&&t[1]*t[2]*t[3]<=r)return [t[0],t[1]*t[2]*t[3]];if(e){var s=ge(t),u=2,l=2;return t.length&&(u=(n=ye(t))[0],l=n[1]),w(a=s*(u/2)*(l/2)).map(function(t){return 2*t})}return w(a)}function we(t){return t%2==0}function Ce(t,e){if(y(t=t.slice(-2),e=e.slice(-2)))return !0;if(!t.length||!e.length)return !0;if(0===t[0]||0===t[1]||0===e[0]||0===e[1])return !0;if(t.length!==e.length){var n=t.slice(-1)[0],r=e.slice(-1)[0];if(n===r)return !0;if(we(n)&&we(r)&&(1===t[0]||1===e[0]))return !0}return t[1]===e[1]&&we(t[0])&&we(e[0])}function Ee(t){if(null==Xt){var e=Mt(t);Xt=e.getParameter(e.MAX_TEXTURE_SIZE);}return Xt}function Re(t){if(null==Yt){var e=Mt(t);Yt=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);}return Math.min(16,Yt)}function Ie(t){if(0===t)return 0;var e=Mt(t);return ke(e,"EXT_disjoint_timer_query_webgl2")&&2===t?2:ke(e,"EXT_disjoint_timer_query")?1:0}function ke(t,e){return null!=t.getExtension(e)}function Ne(t){try{if(null!=Mt(t))return !0}catch(t){return !1}return !1}function Se(t){if(0===t)return !1;var e=Mt(t);if(1===t){if(!ke(e,"OES_texture_float"))return !1}else if(!ke(e,"EXT_color_buffer_float"))return !1;return Te(e)}function Ae(t){if(0===t)return !1;var e=Mt(t);if(1!==t){if(ke(e,"EXT_color_buffer_float"))return Te(e);if(ke(e,"EXT_color_buffer_half_float")){var n=e.getExtension("EXT_color_buffer_half_float");return function(t,e){var n=Ut(t,e),r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);var o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0);var a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(r),t.deleteFramebuffer(o),a}(e,n)}return !1}return !!ke(e,"OES_texture_float")&&(!!ke(e,"WEBGL_color_buffer_float")&&Te(e))}function Te(t){var e=Ut(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);var o=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),o}function De(t){return 2===t&&null!=Mt(t).fenceSync}var _e=Object.freeze({callAndCheck:Vt,canBeRepresented:Ht,getWebGLErrorMessage:qt,getExtensionOrThrow:$t,createVertexShader:Kt,createFragmentShader:jt,createProgram:Jt,linkProgram:Zt,validateProgram:te,createStaticVertexBuffer:ee,createStaticIndexBuffer:ne,getNumChannels:function(){return 2===i.getNumber("WEBGL_VERSION")?1:4},createTexture:re,validateTextureSize:oe,createFramebuffer:ae,bindVertexBufferToProgramAttribute:ie,bindTextureUnit:se,unbindTextureUnit:function(t,e,n){me(t,n),Vt(t,e,function(){return t.activeTexture(t.TEXTURE0+n)}),Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});},getProgramUniformLocationOrThrow:ue,getProgramUniformLocation:le,bindTextureToProgramUniformSampler:ce,bindCanvasToFramebuffer:function(t,e){Vt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),Vt(t,e,function(){return t.viewport(0,0,t.canvas.width,t.canvas.height)}),Vt(t,e,function(){return t.scissor(0,0,t.canvas.width,t.canvas.height)});},bindColorTextureToFramebuffer:he,unbindColorTextureFromFramebuffer:pe,validateFramebuffer:fe,getFramebufferErrorMessage:de,getBatchDim:ge,getRowsCols:ye,getShapeAs3D:xe,getTextureShapeFromLogicalShape:be,isReshapeFree:Ce,getWebGLMaxTextureSize:Ee,resetMaxTextureSize:function(){Xt=null;},resetMaxTexturesInShader:function(){Yt=null;},getMaxTexturesInShader:Re,getWebGLDisjointQueryTimerVersion:Ie,hasExtension:ke,isWebGLVersionEnabled:Ne,isCapableOfRenderingToFloatTexture:Se,isDownloadFloatTextureEnabled:Ae,isWebGLFenceEnabled:De});function Oe(){i.set("PROD",!0);}function Fe(){i.set("DEBUG",!0);}function Me(){i.set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.");}function Be(t){i.getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().");}function Pe(){St.disposeVariables();}function Le(){return St.memory()}function We(t){return St.profile(t)}function Ue(t,e){return St.tidy(t,e)}function Ve(t){Et(t).forEach(function(t){return t.dispose()});}function ze(t){return St.keep(t)}function Ge(t){return St.time(t)}function He(t){return St.setBackend(t)}function qe(){return St.ready()}function $e(){return St.backendName}function Ke(t){St.removeBackend(t);}function je(t){return St.findBackend(t)}function Xe(t){return St.findBackendFactory(t)}function Ye(t,e,n){return void 0===n&&(n=1),St.registerBackend(t,e,n)}function Qe(){return St.backend}function Je(t,e){i.setPlatform(t,e);}function Ze(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.getBool("IS_TEST")||console.warn.apply(console,t);}function tn(t,e){var n=t;if(_(t))return "string"===e?[]:[t.length];if(!Array.isArray(t))return [];for(var r=[];Array.isArray(n)||_(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&i.getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){r=r||[];if(!Array.isArray(e)&&!_(e))return void f(0===n.length,function(){return "Element arr["+r.join("][")+"] is a primitive, but should be an array/TypedArray of "+n[0]+" elements"});f(n.length>0,function(){return "Element arr["+r.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"});f(e.length===n[0],function(){return "Element arr["+r.join("][")+"] should have "+n[0]+" elements, but has "+e.length+" elements"});var o=n.slice(1);for(var a=0;a<e.length;++a)t(e[a],o,r.concat(a));}(t,r,[]),r}function en(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+t+" tensor, but got "+e+" tensor")}function nn(t,e,n,r){if(void 0===r&&(r="numeric"),t instanceof ct)return en(r,t.dtype,e,n),t;var o=L(t);if("string"!==o&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),en(r,o,e,n),null==t||!_(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){var a=null==t?"null":t.constructor.name;throw new Error("Argument '"+e+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+a+"'")}var s=tn(t,o);_(t)||Array.isArray(t)||(t=[t]);var u="string"!==o?z(t,o,i.getBool("DEBUG")):m(t,[],!0);return ct.make(s,{values:u},o)}function rn(t,e,n,r){if(void 0===r&&(r="numeric"),!Array.isArray(t))throw new Error("Argument "+e+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return t.map(function(t,r){return nn(t,e+"["+r+"]",n)},r)}function on(t,e){for(var n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return !1;return !0}function an(t,e,n){for(var r=t.length+e.length,o=[],a=0,i=0,s=0;s<r;s++)-1===n.indexOf(s)?o.push(t[a++]):o.push(e[i++]);return o}function sn(t,e){for(var n=[],r=t.length,o=0;o<r;o++)-1===e.indexOf(o)&&n.push(t[o]);return [n,e.map(function(e){return t[e]})]}function un(t,e){return an(t,e.map(function(t){return 1}),e)}function ln(t,e,n){f(on(e,n),function(){return t+" supports only inner-most axes for now. Got axes "+e+" and rank-"+n+" input."});}function cn(t,e){if(on(t,e))return null;for(var n=[],r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach(function(t){return n.push(t)}),n}function hn(t){return t.map(function(t,e){return [e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function pn(t,e){for(var n=[],r=e-t;r<e;++r)n.push(r);return n}function fn(t,e){var n=t[0].length;t.forEach(function(t,e){f(t.length===n,function(){return "Error in concat"+n+"D: rank of tensors["+e+"] must be the same as the rank of the rest ("+n+")"});}),f(e>=0&&e<n,function(){return "Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."});var r=t[0];t.forEach(function(t,o){for(var a=0;a<n;a++)f(a===e||t[a]===r[a],function(){return "Error in concat"+n+"D: Shape of tensors["+o+"] ("+t+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+"."});});}function dn(t,e){for(var n=t[0].slice(),r=1;r<t.length;r++)n[e]+=t[r][e];return n}function vn(t){var e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var n=e[0],r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];St.startScope(n);try{var o=r.apply(void 0,t);return o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),St.endScope(o),o}catch(t){throw St.endScope(null),t}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}i.registerFlag("HAS_WEBGL",function(){return i.getNumber("WEBGL_VERSION")>0}),i.registerFlag("WEBGL_VERSION",function(){return Ne(2)?2:Ne(1)?1:0}),i.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return 2===i.get("WEBGL_VERSION")}),i.registerFlag("WEBGL_CPU_FORWARD",function(){return !0}),i.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return !1}),i.registerFlag("WEBGL_PACK",function(){return i.getBool("HAS_WEBGL")}),i.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_CLIP",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return !1}),i.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_PACK_REDUCE",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_LAZILY_UNPACK",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_CONV_IM2COL",function(){return i.getBool("WEBGL_PACK")}),i.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Ee(i.getNumber("WEBGL_VERSION"))}),i.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Re(i.getNumber("WEBGL_VERSION"))}),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var t=i.getNumber("WEBGL_VERSION");return 0===t?0:Ie(t)}),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(t=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))));var t;}),i.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Se(i.getNumber("WEBGL_VERSION"))}),i.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return !i.getBool("WEBGL_FORCE_F16_TEXTURES")&&i.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),i.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Ae(i.getNumber("WEBGL_VERSION"))}),i.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return De(i.getNumber("WEBGL_VERSION"))}),i.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return i.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),lt=Be;var mn=vn({complex_:function(t,e){var n=nn(t,"real","complex"),r=nn(e,"imag","complex");return d(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),St.runKernel(function(t){return t.complex(n,r)},{$real:n,$imag:r})}}),gn=vn({real_:function(t){var e=nn(t,"input","real");return St.runKernel(function(t){return t.real(e)},{$input:e})}}),yn=vn({imag_:function(t){var e=nn(t,"input","imag");return St.runKernel(function(t){return t.imag(e)},{$input:e})}});function xn(t,e,n){return bn(t,e,tn(t,n),n)}function bn(t,e,n,r){if(null==r&&(r=L(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!_(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){K(e);var o=g(e),a=g(n);f(o===a,function(){return "Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a});for(var s=0;s<n.length;++s){var u=n[s],l=s!==n.length-1||u!==g(e.slice(s));f(n[s]===e[s]||!l,function(){return "Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+e+"). "});}}return _(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?z(t,r,i.getBool("DEBUG")):m(t,[],!0),ct.make(e,{values:t},r)}function wn(t,e){if((_(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&_(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return bn(t,[],[],e)}function Cn(t,e){v(t);var n=tn(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return bn(t,null,n,e)}function En(t,e,n){if(v(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");var r=tn(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return bn(t,e,r,n)}function Rn(t,e,n){if(v(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");var r=tn(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return bn(t,e,r,n)}function In(t,e,n){if(v(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");var r=tn(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return bn(t,e,r,n)}function kn(t,e,n){if(v(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");var r=tn(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return bn(t,e,r,n)}function Nn(t,e,n){if(v(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");var r=tn(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return bn(t,e=e||r,r,n)}function Sn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=Sn(t,"float32"),r=An(t,"float32");return mn(n,r)}var o=H(g(t),e);return ct.make(t,{values:o},e)}function An(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=An(t,"float32"),r=An(t,"float32");return mn(n,r)}var o=q(g(t),e);return ct.make(t,{values:o},e)}function Tn(t,e,n){return St.runKernel(function(r){return r.fill(t,e,n)},{})}function Dn(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");return St.runKernel(function(r){return r.linspace(t,e,n)},{})}function _n(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(t===e||t<e&&n<0||e<t&&n>1)return An([0],r);var o=q(Math.abs(Math.ceil((e-t)/n)),r);e<t&&1===n&&(n=-1),o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Cn(o,r)}var On=vn({onesLike_:function(t){var e=nn(t,"x","onesLike");if("complex64"===e.dtype){var n=On(gn(e)),r=Fn(yn(e));return mn(n,r)}return St.runKernel(function(t){return t.onesLike(e)},{$x:e},function(t,e){return {$x:function(){return Fn(t)}}})}}),Fn=vn({zerosLike_:function(t){var e=nn(t,"x","zerosLike");return St.runKernel(function(t){return t.zerosLike(e)},{$x:e},function(t,e){return {$x:function(){return Fn(t)}}})}});var Mn=vn({concat_:function(t,e){void 0===e&&(e=0),f(t.length>=1,function(){return "Pass at least one tensor to concat"});var n=rn(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach(function(t){if("complex64"!==t.dtype)throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype "+t.dtype+". ")}),e=I(e,n[0].shape)[0];var r=dn(n.map(function(t){return t.shape}),e);if(0===g(r))return xn([],r);if(1===(n=n.filter(function(t){return t.size>0})).length)return n[0];var o=n.map(function(t){return t.shape});fn(o,e);var a=n;return St.runKernel(function(t){return t.concat(n,e)},a,function(t){var n=o.map(function(t){return t[e]});return Un(t,n,e).map(function(t){return function(){return t}})})}}),Bn=vn({concat1d_:function(t){return Mn(t,0)}}),Pn=vn({concat2d_:function(t,e){return Mn(t,e)}}),Ln=vn({concat3d_:function(t,e){return Mn(t,e)}}),Wn=vn({concat4d_:function(t,e){return Mn(t,e)}}),Un=vn({split_:function(t,e,n){void 0===n&&(n=0);var r,o=nn(t,"x","split");return n=I(n,o.shape)[0],"number"==typeof e?(f(o.shape[n]%e==0,function(){return "Number of splits must evenly divide the axis."}),r=new Array(e).fill(o.shape[n]/e)):(f(o.shape[n]===e.reduce(function(t,e){return t+e}),function(){return "The sum of sizes must match the size of the axis dimension."}),r=e),St.runKernel(function(t){return t.split(o,r,n)},{$x:o},function(t){return {$x:function(){return Mn(t,n)}}})}});function Vn(t,e){return t(e={exports:{}},e.exports),e.exports}var zn=Vn(function(t){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e);}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null;}function o(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var n=new r(t),a=e&&e.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+1.1102230246251565e-16*(2097152*i()|0)},i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.alea=a;}(0,t,!1);}),Gn=Vn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a;}(0,t,!1);}),Hn=Vn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a;}(0,t,!1);}),qn=Vn(function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next();}(e,t);}function o(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.x&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a;}(0,t,!1);}),$n=Vn(function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,a=e.i;return e.w=r=r+1640531527|0,n=o[a+34&127],t=o[a=a+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[a]=n^t,e.i=a,n+(r^r>>>16)|0},function(t,e){var n,r,o,a,i,s=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),o=0,a=-32;a<u;++a)e&&(r^=e.charCodeAt((a+32)%e.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(n=s[127&a]^=r+i)?o+1:0);for(o>=128&&(s[127&(e&&e.length||0)]=-1),o=127,a=512;a>0;--a)r=s[o+34&127],n=s[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[o]=r^n;t.w=i,t.X=s,t.i=o;}(e,t);}function o(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.X&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a;}(0,t,!1);}),Kn=Vn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a;}(0,t,!1);}),jn=Vn(function(t){!function(e,n){var r,o=this,a=256,i=6,s="random",u=n.pow(a,i),l=n.pow(2,52),c=2*l,h=a-1;function p(t,h,p){var g=[],y=v(function t(e,n){var r,o=[],a=typeof e;if(n&&"object"==a)for(r in e)try{o.push(t(e[r],n-1));}catch(t){}return o.length?o:"string"==a?e:e+"\0"}((h=1==h?{entropy:!0}:h||{}).entropy?[t,m(e)]:null==t?function(){try{var t;return r&&(t=r.randomBytes)?t=t(a):(t=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(t)),m(t)}catch(t){var n=o.navigator,i=n&&n.plugins;return [+new Date,o,i,o.screen,m(e)]}}():t,3),g),x=new f(g),b=function(){for(var t=x.g(i),e=u,n=0;t<l;)t=(t+n)*a,e*=a,n=x.g(1);for(;t>=c;)t/=2,e/=2,n>>>=1;return (t+n)/e};return b.int32=function(){return 0|x.g(4)},b.quick=function(){return x.g(4)/4294967296},b.double=b,v(m(x.S),e),(h.pass||p||function(t,e,r,o){return o&&(o.S&&d(o,x),t.state=function(){return d(x,{})}),r?(n[s]=t,e):t})(b,y,"global"in h?h.global:this==n,h.state)}function f(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);o<a;)s[o]=o++;for(o=0;o<a;o++)s[o]=s[i=h&i+t[o%n]+(e=s[o])],s[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,s=r.S;t--;)e=s[o=h&o+1],n=n*a+s[h&(s[o]=s[i=h&i+e])+(s[i]=e)];return r.i=o,r.j=i,n})(a);}function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function v(t,e){for(var n,r=t+"",o=0;o<r.length;)e[h&o]=h&(n^=19*e[h&o])+r.charCodeAt(o++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(n["seed"+s]=p,v(n.random(),e),t.exports){t.exports=p;try{r=require("crypto");}catch(t){}}}([],Math);});jn.alea=zn,jn.xor128=Gn,jn.xorwow=Hn,jn.xorshift7=qn,jn.xor4096=$n,jn.tychei=Kn;var Xn=jn.alea,Yn=function(){function t(t,e,n,r,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=o||Math.random();this.random=Xn(a.toString());}return t.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,r=!1;!r;){var o=void 0,a=void 0,i=void 0;do{i=(o=2*this.random()-1)*o+(a=2*this.random()-1)*a;}while(i>=1||0===i);var s=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(e)||(r=!0);}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},t.prototype.convertValue=function(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)},t.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},t}(),Qn=function(){function t(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;var o=r||Math.random();this.randu=Xn(o.toString()),this.randn=new Yn(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d);}return t.prototype.nextValue=function(){for(var t,e,n,r,o,a;;){do{r=this.randn.nextValue(),a=1+this.c*r;}while(a<=0);if(a*=a*a,e=1-.331*(t=r*r)*t,n=.5*t+this.d*(1-a+Math.log(a)),(o=this.randu())<e||Math.log(o)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},t.prototype.convertValue=function(t){return "float32"===this.dtype?t:Math.round(t)},t}(),Jn=function(){function t(t,e,n,r){var o=this;if(void 0===t&&(t=0),void 0===e&&(e=1),this.canReturnFloat=function(){return null==o.dtype||"float32"===o.dtype},this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Xn(r);}return t.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},t.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},t}();function Zn(t,e,n){return void 0===e&&(e="float32"),e=e||"float32",K(t),new it(t,e,n)}function tr(t,e){void 0===e&&(e=!1),console.log(t.toString(e));}var er=vn({batchToSpaceND_:function(t,e,n){var r=nn(t,"x","batchToSpaceND"),o=e.reduce(function(t,e){return t*e});return f(r.rank>=1+e.length,function(){return "input rank is "+r.rank+" but should be > than blockShape.length "+e.length}),f(n.length===e.length,function(){return "crops.length is "+n.length+" but should be equal to blockShape.length  "+e.length}),f(r.shape[0]%o==0,function(){return "input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o}),St.runKernel(function(t){return t.batchToSpaceND(r,e,n)},{$x:r},function(t){return {$x:function(){return t.spaceToBatchND(e,n)}}})}}),nr=vn({cast_:function(t,e){var n=nn(t,"x","cast");if(!T(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");return St.runKernel(function(t){return t.cast(n,e)},{$x:n},function(t){return {$x:function(){return t.clone()}}})}}),rr=vn({clone_:function(t){var e=nn(t,"x","clone",null);return St.runKernel(function(t){return ct.make(e.shape,{dataId:e.dataId},e.dtype)},{$x:e},function(t){return {$x:function(){return t.toFloat()}}})}}),or=vn({cumsum_:function(t,e,n,r){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===r&&(r=!1);var o=nn(t,"x","cumsum"),a=cn([e|=0],o.rank),i=o;null!=a&&(i=o.transpose(a));var s=pn(1,o.rank)[0],u=St.runKernel(function(t){return t.cumsum(i,s,n,r)},{permutedX:i},function(t){return {permutedX:function(){return t.cumsum(e,n,!r)}}});return null!=a&&(u=u.transpose(a)),u}}),ar=vn({depthToSpace_:function(t,e,n){void 0===n&&(n="NHWC");var r=nn(t,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return f(o*e>=0,function(){return "Negative dimension size caused by overflow when multiplying\n      "+o+" and "+e+"  for depthToSpace with input shape\n      "+r.shape}),f(a*e>=0,function(){return "Negative dimension size caused by overflow when multiplying\n      "+a+" and "+e+" for depthToSpace with input shape\n          "+r.shape}),f(i%(e*e)==0,function(){return "Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+r.shape}),St.runKernel(function(t){return t.depthToSpace(r,e,n)},{$x:r})}}),ir=vn({expandDims_:function(t,e){void 0===e&&(e=0);var n=nn(t,"x","expandDims",null);f(e<=n.rank,function(){return "Axis must be <= rank of the tensor"});var r=n.shape.slice();return e<0&&(f(-(n.rank+1)<=e,function(){return "Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"}),e=n.rank+e+1),r.splice(e,0,1),xr(n,r)}}),sr=vn({eye_:function(t,e,n,r){void 0===r&&(r="float32"),null==e&&(e=t);for(var o=Zn([t,e],r),a=t<=e?t:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(t,e);if(null==n)return s;if(1===n.length)return Er(ir(s,0),[n[0],1,1]);if(2===n.length)return Er(ir(ir(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return Er(ir(ir(ir(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),ur=vn({multinomial_:function(t,e,n,r){void 0===r&&(r=!1);var o=nn(t,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=1===i?o.as2D(1,-1):o,u=St.runKernel(function(t){return t.multinomial(s,r,e,n)},{logits2D:s});return 1===i?u.as1D():u}}),lr=vn({oneHot_:function(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=nn(t,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),St.runKernel(function(t){return t.oneHot(o,e,n,r)},{$indices:o},function(t){return {$indices:function(){return An(o.shape,"float32")}}}).reshape(a)}}),cr=vn({pad_:function(t,e,n){void 0===n&&(n=0);var r=nn(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o=e.map(function(t){return t[0]});return St.runKernel(function(t){return t.pad(r,e,n)},{$x:r},function(t){return {$x:function(){return t.slice(o,r.shape)}}})}}),hr=vn({pad1d_:function(t,e,n){return void 0===n&&(n=0),f(2===e.length,function(){return "Invalid number of paddings. Must be length of 2."}),cr(t,[e],n)}}),pr=vn({pad2d_:function(t,e,n){return void 0===n&&(n=0),f(2===e.length&&2===e[0].length&&2===e[1].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),cr(t,e,n)}}),fr=vn({pad3d_:function(t,e,n){return void 0===n&&(n=0),f(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),cr(t,e,n)}}),dr=vn({pad4d_:function(t,e,n){return void 0===n&&(n=0),f(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),cr(t,e,n)}}),vr=vn({rand_:function(t,e,n){var r=g(t),o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r);}for(var a=0;a<r;a++)o[a]=e();return ct.make(t,{values:o},n)}}),mr=vn({randomNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new Yn(e,n,r,!1,o),i=Zn(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),gr=vn({randomGamma_:function(t,e,n,r,o){if(void 0===n&&(n=1),void 0===r&&(r="float32"),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);for(var a=new Qn(e,n,r,o),i=Zn(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),yr=vn({randomUniform_:function(t,e,n,r,o){void 0===e&&(e=0),void 0===n&&(n=1),void 0===r&&(r="float32");for(var a=Zn(t,r),i=new Jn(e,n,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),xr=vn({reshape_:function(t,e){var n=nn(t,"x","reshape",null);return e=R(e,n.size),f(n.size===g(e),function(){return "new shape and old shape must have the same number of elements."}),St.runKernel(function(t){return t.reshape(n,e)},{$x:n},function(t){return {$x:function(){return t.reshape(n.shape)}}})}}),br=vn({spaceToBatchND_:function(t,e,n){var r=nn(t,"x","spaceToBatchND");return f(r.rank>=1+e.length,function(){return "input rank "+r.rank+" should be > than [blockShape] "+e.length}),f(n.length===e.length,function(){return "paddings.shape[0] "+n.length+" must be equal to [blockShape] "+e.length}),f(r.shape.reduce(function(t,r,o){return o>0&&o<=e.length?t&&(r+n[o-1][0]+n[o-1][1])%e[o-1]==0:t},!0),function(){return "input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+e.toString()}),St.runKernel(function(t){return t.spaceToBatchND(r,e,n)},{$x:r},function(t){return {$x:function(){return t.batchToSpaceND(e,n)}}})}}),wr=vn({squeeze_:function(t,e){var n=nn(t,"x","squeeze");return xr(n,k(n.shape,e).newShape)}}),Cr=vn({stack_:function(t,e){void 0===e&&(e=0);var n=rn(t,"tensors","stack");if(f(n.length>=1,function(){return "Pass at least one tensor to tf.stack"}),1===n.length)return n[0].expandDims(e);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;f(e<=r,function(){return "Axis must be <= rank of the tensor"}),n.forEach(function(t){d(o,t.shape,"All tensors passed to stack must have matching shapes");}),n.forEach(function(t){f(a===t.dtype,function(){return "All tensors passed to stack must have matching dtypes"});});var i=n.map(function(t){return t.expandDims(e)});return Mn(i,e)}}),Er=vn({tile_:function(t,e){var n=nn(t,"x","tile",null);return f(n.rank===e.length,function(){return "Error in transpose: rank of input "+n.rank+" must match length of reps "+e+"."}),St.runKernel(function(t,r){var o=t.tile(n,e);return r([n]),o},{$x:n},function(t,n){var r=n[0];return {$x:function(){var n=Fn(r);if(1===r.rank)for(var o=0;o<e[0];++o)n=n.add(t.slice([o*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(o=0;o<e[0];++o)for(var a=0;a<e[1];++a)n=n.add(t.slice([o*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(var i=0;i<e[2];++i)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(i=0;i<e[2];++i)for(var s=0;s<e[3];++s)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));}return n}}})}}),Rr=vn({truncatedNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new Yn(e,n,r,!0,o),i=Zn(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ir=vn({unstack_:function(t,e){void 0===e&&(e=0),e=e||0;var n=nn(t,"x","unstack");return f(e>=-n.shape.length&&e<n.shape.length,function(){return "Axis = "+e+" is not in [-"+n.shape.length+", "+n.shape.length+")"}),e<0&&(e+=n.shape.length),St.runKernel(function(t){return t.unstack(n,e)},{$x:n},function(t){return {$x:function(){return Cr(t,e)}}})}}),kr=function(t,e){return n(this,void 0,void 0,function(){var n,o,a,i,s,u,l,c,h,p;return r(this,function(r){switch(r.label){case 0:return n=nn(t,"x","setdiff1d"),o=nn(e,"y","setdiff1d"),f(n.dtype===o.dtype,function(){return "x and y should have the same dtype, but got x ("+n.dtype+") and y ("+o.dtype+")."}),f(1===n.rank,function(){return "x should be 1D tensor, but got x ("+n.shape+")."}),f(1===o.rank,function(){return "y should be 1D tensor, but got y ("+o.shape+")."}),[4,n.data()];case 1:return a=r.sent(),[4,o.data()];case 2:for(i=r.sent(),s=new Set(i),u=0,h=0;h<a.length;h++)s.has(a[h])||u++;for(l=new it([u],n.dtype),c=new it([u],"int32"),h=0,p=0;h<a.length;h++)s.has(a[h])||(l.values[p]=a[h],c.values[p]=h,p++);return [2,[l.toTensor(),c.toTensor()]]}})})};function Nr(t,e,n,r){void 0===r&&(r=!0);var o=[];if(r)(o=o.concat(e.slice(0))).push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(a+1));}return o}function Sr(t,e,n){void 0===n&&(n=!0);var r=[];if(n){r.push(e);for(var o=e+1;o<t;++o)o<=2*e?(r.push(o),r.push(o-(e+1))):r.push(o);}else{var a=[],i=[];for(o=1;o<t;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i);}return r}function Ar(t,e,n,r){void 0===r&&(r=!0);var o=[];r?o.push(t[0]/n):o.push(t[0]*n);for(var a=1;a<t.length;++a)a<=e.length?r?o.push(e[a-1]*t[a]):o.push(t[a]/e[a-1]):o.push(t[a]);return o}function Tr(t,e){for(var n=[0],r=0;r<e;++r)n.push(t[r][0]);return n}function Dr(t,e,n){for(var r=t.slice(0,1),o=0;o<n;++o)r.push(t[o+1]-e[o][0]-e[o][1]);return r}function _r(t,e){if(t.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if("int32"!==e.dtype)throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>t.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+t.rank);if(0===t.size)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+t.shape+".");for(var n=e.shape,r=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=t.shape,s=n.slice();s.pop();var u=1;for(a=r;a<t.rank;++a)u*=i[a],s.push(i[a]);var l=V(t.shape).map(function(t){return t/u}).concat([1]).slice(0,r);return [s,o,u,l]}var Or=30;function Fr(t){return t<=Or?t:U(t,Math.floor(Math.sqrt(t)))}function Mr(t,e,n){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+t.rank+".");if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}!function(t,e,n){var r=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+e.shape+", shape: "+t+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(t.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+t.length-r)throw new Error(a+" update.rank != "+(o+t.length-r));for(var i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+r])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+t[i+o]+")")}(n,e,t);}function Br(t,e,n){for(var r=e.rank>1?e.shape[e.rank-1]:1,o=n.length,a=1,i=r;i<o;++i)a*=n[i];var s=r<1?1:r;return {sliceRank:r,numUpdates:e.size/s,sliceSize:a,strides:V(n.slice(0,r)).concat([1]),outputSize:g(n)}}function Pr(t){for(var e=[],n=0;t>0;)1&t&&e.push(n),t/=2,n++;return e}function Lr(t,e,n){for(var r=[],o=0;o<t.length;o++)r[o]=Math.ceil((e[o]-t[o])/n[o]);return r}function Wr(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=c(0,a,s-1)}function Ur(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=i>0?c(0,a,s):c(-1,a,s-1)}function Vr(t,e,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return !1;return !0}function zr(t,e){for(var n=t.length>0?t[t.length-1]:1,r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}function Gr(t){return f(W(t),function(){return "The f passed in grad(f) must be a function"}),function(e,n){var r=nn(e,"x","tf.grad",null),o=null!=n?nn(n,"dy","tf.grad"):null;return St.tidy(function(){var e=St.gradients(function(){return t(r)},[r],o),n=e.value,a=e.grads;return null!=o&&d(n.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Xr(a),a[0]})}}function Hr(t){return f(W(t),function(){return "The f passed in grads(f) must be a function"}),function(e,n){f(Array.isArray(e),function(){return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"});var r=rn(e,"args","tf.grads",null),o=null!=n?nn(n,"dy","tf.grads"):null;return St.tidy(function(){var e=St.gradients(function(){return t.apply(void 0,r)},r,o),n=e.value,a=e.grads;return null!=o&&d(n.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Xr(a),a})}}function qr(t){return f(W(t),function(){return "The f passed in valueAndGrad(f) must be a function"}),function(e,n){f(e instanceof ct,function(){return "The x passed in valueAndGrad(f)(x) must be a tensor"}),f(null==n||n instanceof ct,function(){return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"});var r=St.gradients(function(){return t(e)},[e],n),o=r.grads,a=r.value;return Xr(o),{grad:o[0],value:a}}}function $r(t){return f(W(t),function(){return "The f passed in valueAndGrads(f) must be a function"}),function(e,n){f(Array.isArray(e)&&e.every(function(t){return t instanceof ct}),function(){return "The args passed in valueAndGrads(f)(args) must be array of tensors"}),f(null==n||n instanceof ct,function(){return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"});var r=St.gradients(function(){return t.apply(void 0,e)},e,n);return null!=n&&d(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Xr(r.grads),r}}function Kr(t,e){f(W(t),function(){return "The f passed in variableGrads(f) must be a function"}),f(null==e||Array.isArray(e)&&e.every(function(t){return t instanceof ht}),function(){return "The varList passed in variableGrads(f, varList) must be an array of variables"});var n=null!=e;if(!n)for(var r in e=[],St.registeredVariables)e.push(St.registeredVariables[r]);var o=n?e.filter(function(t){return !t.trainable}):null,a=e.length;f((e=e.filter(function(t){return t.trainable})).length>0,function(){return "variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=St.gradients(t,e,null,!0),s=i.value,u=i.grads;f(u.some(function(t){return null!=t}),function(){return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),f(0===s.rank,function(){return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var l={};return e.forEach(function(t,e){null!=u[e]&&(l[t.name]=u[e]);}),null!=o&&o.forEach(function(t){return l[t.name]=null}),{value:s,grads:l}}function jr(t){return St.customGrad(t)}function Xr(t){if(t.filter(function(t){return null==t}).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var Yr=vn({softmax_:function(t,e){void 0===e&&(e=-1);var n=nn(t,"logits","softmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+e);return jr(function(t,n){var r=t.logSumExp([e],!0),o=t.toFloat().sub(r).exp();return n([o]),{value:o,gradFunc:function(t,n){var r=n[0],o=t.mul(r);return o.sub(o.sum([e],!0).mul(r))}}})(n)}}),Qr=vn({logSoftmax_:function(t,e){void 0===e&&(e=-1);var n=nn(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+e);return jr(function(t,n){var r=t.max(e,!0),o=t.sub(r),a=o.toFloat().sub(o.exp().sum(e,!0).log());return n([a]),{value:a,gradFunc:function(t,n){var r=n[0].exp();return t.sub(t.sum(e,!0).mul(r))}}})(n)}}),Jr=function(){function t(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap;}return t.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},t.prototype.set=function(t,e){this.data.set(t,e);},t.prototype.has=function(t){return this.data.has(t)},t.prototype.delete=function(t){return this.data.delete(t)},t}(),Zr=function(){function t(){}return t.prototype.time=function(t){throw new Error("Not yet implemented.")},t.prototype.read=function(t){throw new Error("Not yet implemented.")},t.prototype.readSync=function(t){throw new Error("Not yet implemented.")},t.prototype.disposeData=function(t){throw new Error("Not yet implemented.")},t.prototype.write=function(t,e){throw new Error("Not yet implemented.")},t.prototype.fromPixels=function(t,e){throw new Error("Not yet implemented.")},t.prototype.register=function(t,e,n){throw new Error("Not yet implemented.")},t.prototype.memory=function(){throw new Error("Not yet implemented.")},t.prototype.floatPrecision=function(){throw new Error("Not yet implemented")},t.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},t.prototype.batchMatMul=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.fusedBatchMatMul=function(t){t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights;throw new Error("Not yet implemented")},t.prototype.slice=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.stridedSlice=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.unstack=function(t,e){throw new Error("Not yet implemented")},t.prototype.reverse=function(t,e){throw new Error("Not yet implemented")},t.prototype.concat=function(t,e){throw new Error("Not yet implemented")},t.prototype.neg=function(t){throw new Error("Not yet implemented")},t.prototype.add=function(t,e){throw new Error("Not yet implemented")},t.prototype.addN=function(t){throw new Error("Not yet implemented")},t.prototype.subtract=function(t,e){throw new Error("Not yet implemented")},t.prototype.multiply=function(t,e){throw new Error("Not yet implemented")},t.prototype.realDivide=function(t,e){throw new Error("Not yet implemented")},t.prototype.floorDiv=function(t,e){throw new Error("Not yet implemented")},t.prototype.sum=function(t,e){throw new Error("Not yet implemented")},t.prototype.prod=function(t,e){throw new Error("Not yet implemented")},t.prototype.unsortedSegmentSum=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.argMin=function(t,e){throw new Error("Not yet implemented")},t.prototype.argMax=function(t,e){throw new Error("Not yet implemented")},t.prototype.equal=function(t,e){throw new Error("Not yet implemented")},t.prototype.notEqual=function(t,e){throw new Error("Not yet implemented")},t.prototype.less=function(t,e){throw new Error("Not yet implemented")},t.prototype.lessEqual=function(t,e){throw new Error("Not yet implemented")},t.prototype.greater=function(t,e){throw new Error("Not yet implemented")},t.prototype.greaterEqual=function(t,e){throw new Error("Not yet implemented")},t.prototype.logicalNot=function(t){throw new Error("Not yet implemented")},t.prototype.logicalAnd=function(t,e){throw new Error("Not yet implemented")},t.prototype.logicalOr=function(t,e){throw new Error("Not yet implemented")},t.prototype.where=function(t){throw new Error("Not yet implemented")},t.prototype.select=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.topk=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.min=function(t,e){throw new Error("Not yet implemented")},t.prototype.minimum=function(t,e){throw new Error("Not yet implemented")},t.prototype.mod=function(t,e){throw new Error("Not yet implemented")},t.prototype.max=function(t,e){throw new Error("Not yet implemented")},t.prototype.maximum=function(t,e){throw new Error("Not yet implemented")},t.prototype.all=function(t,e){throw new Error("Not yet implemented")},t.prototype.any=function(t,e){throw new Error("Not yet implemented")},t.prototype.squaredDifference=function(t,e){throw new Error("Not yet implemented")},t.prototype.ceil=function(t){throw new Error("Not yet implemented")},t.prototype.floor=function(t){throw new Error("Not yet implemented")},t.prototype.round=function(t){throw new Error("Not yet implemented")},t.prototype.sign=function(t){throw new Error("Not yet implemented")},t.prototype.isNaN=function(t){throw new Error("Not yet implemented")},t.prototype.isInf=function(t){throw new Error("Not yet implemented")},t.prototype.isFinite=function(t){throw new Error("Not yet implemented")},t.prototype.pow=function(t,e){throw new Error("Not yet implemented")},t.prototype.exp=function(t){throw new Error("Not yet implemented")},t.prototype.expm1=function(t){throw new Error("Not yet implemented")},t.prototype.log=function(t){throw new Error("Not yet implemented")},t.prototype.log1p=function(t){throw new Error("Not yet implemented")},t.prototype.sqrt=function(t){throw new Error("Not yet implemented")},t.prototype.rsqrt=function(t){throw new Error("Not yet implemented")},t.prototype.square=function(t){throw new Error("Not yet implemented")},t.prototype.reciprocal=function(t){throw new Error("Not yet implemented")},t.prototype.relu=function(t){throw new Error("Not yet implemented")},t.prototype.prelu=function(t,e){throw new Error("Not yet implemented")},t.prototype.elu=function(t){throw new Error("Not yet implemented")},t.prototype.eluDer=function(t,e){throw new Error("Not yet implemented")},t.prototype.selu=function(t){throw new Error("Not yet implemented")},t.prototype.int=function(t){throw new Error("Not yet implemented")},t.prototype.clip=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.abs=function(t){throw new Error("Not yet implemented")},t.prototype.complexAbs=function(t){throw new Error("Not yet implemented")},t.prototype.sigmoid=function(t){throw new Error("Not yet implemented")},t.prototype.softplus=function(t){throw new Error("Not yet implemented")},t.prototype.sin=function(t){throw new Error("Not yet implemented")},t.prototype.cos=function(t){throw new Error("Not yet implemented")},t.prototype.tan=function(t){throw new Error("Not yet implemented")},t.prototype.asin=function(t){throw new Error("Not yet implemented")},t.prototype.acos=function(t){throw new Error("Not yet implemented")},t.prototype.atan=function(t){throw new Error("Not yet implemented")},t.prototype.atan2=function(t,e){throw new Error("Not yet implemented")},t.prototype.sinh=function(t){throw new Error("Not yet implemented")},t.prototype.cosh=function(t){throw new Error("Not yet implemented")},t.prototype.tanh=function(t){throw new Error("Not yet implemented")},t.prototype.asinh=function(t){throw new Error("Not yet implemented")},t.prototype.acosh=function(t){throw new Error("Not yet implemented")},t.prototype.atanh=function(t){throw new Error("Not yet implemented")},t.prototype.erf=function(t){throw new Error("Not yet implemented")},t.prototype.step=function(t,e){throw new Error("Not yet implemented")},t.prototype.fusedConv2d=function(t,e,n,r,o,a){throw new Error("Not yet implemented")},t.prototype.conv2d=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.conv2dDerInput=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.conv2dDerFilter=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.depthwiseConv2D=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.depthwiseConv2DDerInput=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.conv3d=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.conv3dDerInput=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.conv3dDerFilter=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.maxPool=function(t,e){throw new Error("Not yet implemented")},t.prototype.maxPoolBackprop=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.avgPool=function(t,e){throw new Error("Not yet implemented")},t.prototype.avgPoolBackprop=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.avgPool3d=function(t,e){throw new Error("Not yet implemented")},t.prototype.avgPool3dBackprop=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.maxPool3d=function(t,e){throw new Error("Not yet implemented")},t.prototype.maxPool3dBackprop=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.reshape=function(t,e){throw new Error("Not yet implemented")},t.prototype.cast=function(t,e){throw new Error("Not yet implemented")},t.prototype.tile=function(t,e){throw new Error("Not yet implemented")},t.prototype.pad=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.transpose=function(t,e){throw new Error("Not yet implemented")},t.prototype.gather=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.gatherND=function(t,e){throw new Error("Not yet implemented")},t.prototype.scatterND=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.batchToSpaceND=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.spaceToBatchND=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.resizeBilinear=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.resizeBilinearBackprop=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.resizeNearestNeighbor=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.batchNormalization=function(t,e,n,r,o,a){throw new Error("Not yet implemented")},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){throw new Error("Not yet implemented")},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){throw new Error("Not yet implemented")},t.prototype.multinomial=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.oneHot=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.cumsum=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.nonMaxSuppression=function(t,e,n,r,o){throw new Error("Not yet implemented")},t.prototype.fft=function(t){throw new Error("Not yet implemented")},t.prototype.ifft=function(t){throw new Error("Not yet implemented")},t.prototype.complex=function(t,e){throw new Error("Not yet implemented")},t.prototype.real=function(t){throw new Error("Not yet implemented")},t.prototype.imag=function(t){throw new Error("Not yet implemented")},t.prototype.cropAndResize=function(t,e,n,r,o,a){throw new Error("Not yet implemented")},t.prototype.depthToSpace=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.split=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.sparseToDense=function(t,e,n,r){throw new Error("Not yet implemented")},t.prototype.diag=function(t){throw new Error("Not yet implemented")},t.prototype.fill=function(t,e,n){throw new Error("Not yet implemented.")},t.prototype.onesLike=function(t){throw new Error("Not yet implemented")},t.prototype.zerosLike=function(t){throw new Error("Not yet implemented")},t.prototype.linspace=function(t,e,n){throw new Error("Not yet implemented")},t.prototype.dispose=function(){throw new Error("Not yet implemented")},t}();function to(t,e){for(var n=t.length,r=[],o=0;o<n;o++){var a=n-1-o,i=t[a]||1;(e[e.length-1-o]||1)>1&&1===i&&r.unshift(a);}return r}function eo(t,e){for(var n=[],r=0;r<e.length;r++){var o=t[t.length-r-1],a=e.length-r-1,i=e[a];(null==o||1===o&&i>1)&&n.unshift(a);}return n}function no(t,e){for(var n=[],r=Math.max(t.length,e.length),o=0;o<r;o++){var a=t[t.length-o-1];null==a&&(a=1);var i=e[e.length-o-1];if(null==i&&(i=1),1===a)n.unshift(i);else if(1===i)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+t+" and "+e+".");n.unshift(a);}}return n}function ro(t,e,n,r,o,a,i){void 0===i&&(i="channelsLast");var s,u=uo(e),l=u[0],c=u[1];if("channelsLast"===i)s=[l,c,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);s=[l,c,t[1],t[1]];}return ao(t,s,n,r,o,a,!1,i)}function oo(t,e,n,r,o,a,i){void 0===i&&(i="NDHWC");var s,u,l=lo(e),c=l[0],h=l[1],p=l[2];if("NDHWC"===i)u="channelsLast",s=[c,h,p,t[4],t[4]];else{if("NCDHW"!==i)throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[c,h,p,t[1],t[1]];}return io(t,s,n,r,o,!1,u,a)}function ao(t,e,n,r,o,a,i,s){void 0===i&&(i=!1),void 0===s&&(s="channelsLast");var u=[-1,-1,-1,-1],l=u[0],c=u[1],h=u[2],p=u[3];if("channelsLast"===s)l=t[0],c=t[1],h=t[2],p=t[3];else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);l=t[0],p=t[1],c=t[2],h=t[3];}var d,v=e[0],m=e[1],g=e[3],y=uo(n),b=y[0],w=y[1],C=uo(r),E=C[0],R=C[1],I=co(v,E),k=co(m,R),N=function(t,e,n,r,o,a,i,s){var u,l,c;if("number"==typeof t){var h=0===t?"VALID":"NUMBER";u={top:t,bottom:t,left:t,right:t,type:h};var p=function(t,e,n,r,o){null==r&&(r=so(t,e,n));var a=t[0],i=t[1],s=ho((a-e+2*r)/n+1,o);f(x(s),function(){return "The output # of rows ("+s+") must be an integer. Change the stride and/or zero pad parameters"});var u=ho((i-e+2*r)/n+1,o);return f(x(u),function(){return "The output # of columns ("+u+") must be an integer. Change the stride and/or zero pad parameters"}),[s,u]}([e,n],a,r,t,s);l=p[0],c=p[1];}else if("same"===t){l=Math.ceil(e/r),c=Math.ceil(n/o);var d=Math.max(0,(l-1)*r+a-e),v=Math.max(0,(c-1)*o+i-n),m=Math.floor(d/2),g=d-m,y=Math.floor(v/2),b=v-y;u={top:m,bottom:g,left:y,right:b,type:"SAME"};}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);u={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((e-a+1)/r),c=Math.ceil((n-i+1)/o);}return {padInfo:u,outHeight:l,outWidth:c}}(o,c,h,b,w,I,k,a),S=N.padInfo,A=N.outHeight,T=N.outWidth,D=i?g*p:g;return "channelsFirst"===s?d=[l,D,A,T]:"channelsLast"===s&&(d=[l,A,T,D]),{batchSize:l,dataFormat:s,inHeight:c,inWidth:h,inChannels:p,outHeight:A,outWidth:T,outChannels:D,padInfo:S,strideHeight:b,strideWidth:w,filterHeight:v,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:k,dilationHeight:E,dilationWidth:R,inShape:t,outShape:d,filterShape:e}}function io(t,e,n,r,o,a,i,s){void 0===a&&(a=!1),void 0===i&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],l=u[0],c=u[1],h=u[2],p=u[3],d=u[4];if("channelsLast"===i)l=t[0],c=t[1],h=t[2],p=t[3],d=t[4];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);l=t[0],d=t[1],c=t[2],h=t[3],p=t[4];}var v,m=e[0],g=e[1],y=e[2],b=e[4],w=lo(n),C=w[0],E=w[1],R=w[2],I=lo(r),k=I[0],N=I[1],S=I[2],A=co(m,k),T=co(g,N),D=co(y,S),_=function(t,e,n,r,o,a,i,s,u,l,c){var h,p,d,v;if("number"==typeof t){var m=0===t?"VALID":"NUMBER";h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:m};var g=function(t,e,n,r,o,a){null==o&&(o=so(t,e,r));var i=t[0],s=t[1],u=t[2],l=ho((i-e+2*o)/r+1,a);f(x(l),function(){return "The output # of depths ("+l+") must be an integer. Change the stride and/or zero pad parameters"});var c=ho((s-e+2*o)/r+1,a);f(x(c),function(){return "The output # of rows ("+c+") must be an integer. Change the stride and/or zero pad parameters"});var h=ho((u-e+2*o)/r+1,a);return f(x(h),function(){return "The output # of columns ("+h+") must be an integer. Change the stride and/or zero pad parameters"}),[l,c,h,n]}([e,n,r,1],s,1,o,t,c);p=g[0],d=g[1],v=g[2];}else if("same"===t){p=Math.ceil(e/o),d=Math.ceil(n/a),v=Math.ceil(r/i);var y=(p-1)*o+s-e,b=(d-1)*a+u-n,w=(v-1)*i+l-r,C=Math.floor(y/2),E=y-C,R=Math.floor(b/2),I=b-R,k=Math.floor(w/2),N=w-k;h={top:R,bottom:I,left:k,right:N,front:C,back:E,type:"SAME"};}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},p=Math.ceil((e-s+1)/o),d=Math.ceil((n-u+1)/a),v=Math.ceil((r-l+1)/i);}return {padInfo:h,outDepth:p,outHeight:d,outWidth:v}}(o,c,h,p,C,E,R,A,T,D,s),O=_.padInfo,F=_.outDepth,M=_.outHeight,B=_.outWidth,P=a?b*d:b;return "channelsFirst"===i?v=[l,P,F,M,B]:"channelsLast"===i&&(v=[l,F,M,B,P]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:h,inWidth:p,inChannels:d,outDepth:F,outHeight:M,outWidth:B,outChannels:P,padInfo:O,strideDepth:C,strideHeight:E,strideWidth:R,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:A,effectiveFilterHeight:T,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:N,dilationWidth:S,inShape:t,outShape:v,filterShape:e}}function so(t,e,n,r){void 0===r&&(r=1);var o=co(e,r);return Math.floor((t[0]*(n-1)-n+o)/2)}function uo(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function lo(t){return "number"==typeof t?[t,t,t]:t}function co(t,e){return e<=1?t:t+(t-1)*(e-1)}function ho(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function po(t){var e=uo(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function fo(t,e){return po(t)||po(e)}function vo(t){if("NHWC"===t)return "channelsLast";if("NCHW"===t)return "channelsFirst";throw new Error("Unknown dataFormat "+t)}function mo(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();var r=An(t.shape),o=t.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!D(t.dtype,e))return ct.make(t.shape,{dataId:t.dataId},e);if("complex64"===t.dtype){var i=n.real(t);a=i.cast(e);return i.dispose(),a}if("int32"===e)return n.int(t);if("bool"===e){var s=wn(0,t.dtype);a=n.notEqual(t,s);return s.dispose(),a}throw new Error("Error in Cast: failed to cast "+t.dtype+" to "+e)}function go(t,e){return ct.make(e,{dataId:t.dataId},t.dtype)}function yo(t,e,n){var r=(e-t)/(n-1),o=q(n,"float32");o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return Cn(o,"float32")}var xo=Object.freeze({castTensor:mo,reshapeTensor:go,linspaceImpl:yo,upcastType:xt,axesAreInnerMostDims:on,combineLocations:an,computeOutAndReduceShapes:sn,expandShapeToKeepDim:un,assertAxesAreInnerMostDims:ln,getAxesPermutation:cn,getUndoAxesPermutation:hn,getInnerMostAxes:pn,getBroadcastDims:to,getReductionAxes:eo,assertAndGetBroadcastShape:no,assertParamsConsistent:fn,computeOutShape:dn,computePool2DInfo:ro,computePool3DInfo:oo,computeConv2DInfo:ao,computeConv3DInfo:io,computeDefaultPad:so,tupleValuesAreOne:po,eitherStridesOrDilationsAreOne:fo,convertConv2DDataFormat:vo});function bo(t,e){if(t.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+t.length+", imag: "+e.length+".");for(var n=new Float32Array(2*t.length),r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function wo(t,e){return {real:t[2*e],imag:t[2*e+1]}}function Co(t,e,n,r){t[2*r]=e,t[2*r+1]=n;}function Eo(t,e,n){var r=(n?2:-2)*Math.PI*(t/e);return {real:Math.cos(r),imag:Math.sin(r)}}function Ro(t,e,n,r,o){for(var a=Array.from(e).map(function(t,e){return {score:t,boxIndex:e}}).filter(function(t){return t.score>o}).sort(function(t,e){return e.score-t.score}),i=[],s=0;s<a.length;s++){var u=a[s],l=u.score,c=u.boxIndex;if(l<o)break;for(var h=!1,p=i.length-1;p>=0;--p){if(Io(t,c,i[p])>=r){h=!0;break}}if(!h&&(i.push(c),i.length>=n))break}return Cn(i,"int32")}function Io(t,e,n){var r=t.subarray(4*e,4*e+4),o=t.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),p=Math.max(o[1],o[3]),f=(s-a)*(u-i),d=(h-l)*(p-c);if(f<=0||d<=0)return 0;var v=Math.max(a,l),m=Math.max(i,c),g=Math.min(s,h),y=Math.min(u,p),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(f+d-x)}function ko(t,e,n){var r=new Array(t.rank).fill(0),o=t.shape.slice();return e.map(function(e){o[n]=e;var a=t.slice(r,o);return r[n]+=e,a})}function No(t,e){for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];var o=Zn(n,t.dtype);for(r=0;r<o.values.length;++r){for(var a=o.indexToLoc(r),i=new Array(t.rank),s=0;s<i.length;s++)i[s]=a[s]%t.shape[s];var u=t.locToIndex(i);o.values[r]=t.values[u];}return o.toTensor()}function So(t,e,n,r,o){for(var a=e[e.length-1],i=[t.length/a,a],s=i[0],u=i[1],l=N(n,s*r),c=N("int32",s*r),h=0;h<s;h++){for(var p=h*u,f=t.subarray(p,p+u),d=[],v=0;v<f.length;v++)d.push({value:f[v],index:v});d.sort(function(t,e){return e.value-t.value});var m=h*r,g=l.subarray(m,m+r),y=c.subarray(m,m+r);for(v=0;v<r;v++)g[v]=d[v].value,y[v]=d[v].index;}var x=e.slice();return x[x.length-1]=r,[xn(l,x,n),xn(c,x,"int32")]}function Ao(t,e){for(var n=[],r=0;r<e.length;r++)e[r]&&n.push(r);var o=Zn(t,"int32"),a=Zn([n.length,t.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),s=r*t.length;a.values.set(i,s);}return a.toTensor()}var To=function(){return function(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map(function(t,e){return "T"+e});var n=[];this.variableNames.forEach(function(t){n.push("float v"+t+" = get"+t+"AtOutCoords();");});var r=this.variableNames.map(function(t){return "v"+t}).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        float result = "+r+";\n        setOutput(result);\n      }\n    ";}}(),Do=function(){return function(t,e){this.outputShape=[],this.usesPackedTextures=!0,this.outputShape=t,this.variableNames=e.map(function(t,e){return "T"+e});var n=[];this.variableNames.forEach(function(t){n.push("vec4 v"+t+" = get"+t+"AtOutCoords();");});var r=this.variableNames.map(function(t){return "v"+t}).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        vec4 result = "+r+";\n        setOutput(result);\n      }\n    ";}}(),_o=function(){return function(t,e,n){this.variableNames=["A"];var r=t.windowSize,o=t.batchSize,a=t.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s="max"===e?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+u+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+s+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";}}();function Oo(t,e){return ["x","y","z","w","u","v"].slice(0,e).map(function(e){return t+"."+e})}function Fo(t,e){return 1===e?[t]:Oo(t,e)}function Mo(){var t,e,n,r,o,a,s,u,l,c;return 2===i.getNumber("WEBGL_VERSION")?(t="#version 300 es",e="in",n="out",r="in",o="texture",a="outputColor",s="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 0. || val == 0.) ? false : true;\n      }\n    ",l="",c="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(t="",e="attribute",n="varying",r="varying",o="texture2D",a="gl_FragColor",s="",u="\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n    ",l="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",c="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:t,attribute:e,varyingVs:n,varyingFs:r,texture2D:o,output:a,defineOutput:s,defineSpecialNaN:u,defineSpecialInf:l,defineRound:c}}function Bo(t,e,n){void 0===n&&(n="index");var r=V(e);return r.map(function(e,o){return "int "+t[o]+" = "+n+" / "+e+"; "+(o===r.length-1?"int "+t[o+1]+" = "+n+" - "+t[o]+" * "+e:"index -= "+t[o]+" * "+e)+";"}).join("")}function Po(t){var e=V(t).map(function(t){return t.toString()});return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * "+e[0]+" + coords.y * "+e[1]+" + coords.z;\n  }\n"}var Lo="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";function Wo(t,e,n,r){var o=[];t.forEach(function(t){var e=g(t.shapeInfo.logicalShape);t.shapeInfo.isUniform?o.push("uniform float "+t.name+(e>1?"["+e+"]":"")+";"):(o.push("uniform sampler2D "+t.name+";"),o.push("uniform int offset"+t.name+";"));});var a,i,s=o.join("\n"),u=t.map(function(t){return function(t,e,n){void 0===n&&(n=!1);var r="";r+=n?Vo(t):Uo(t);var o=t.shapeInfo.logicalShape,a=e.logicalShape;o.length<=a.length&&(r+=n?function(t,e){var n,r=t.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"AtOutCoords",i=t.shapeInfo.logicalShape.length,s=e.logicalShape.length,u=to(t.shapeInfo.logicalShape,e.logicalShape),l=jo(s),c=s-i,h=["x","y","z","w","u","v"];n=0===i?"":s<2&&u.length>=1?"coords = 0;":u.map(function(t){return "coords."+h[t+c]+" = 0;"}).join("\n");var p="";p=s<2&&i>0?"coords":t.shapeInfo.logicalShape.map(function(t,e){return "coords."+h[e+c]}).join(", ");var f="return outputValue;",d=1===g(t.shapeInfo.logicalShape),v=1===g(e.logicalShape);if(1!==i||d||v){if(d&&!v)f=1===s?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){var m=i-2,y=i-1;u.indexOf(m)>-1&&u.indexOf(y)>-1?f="return vec4(outputValue.x);":u.indexOf(m)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(y)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);");}}else f="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return "\n    vec4 "+a+"() {\n      "+l+" coords = getOutputCoords();\n      "+n+"\n      vec4 outputValue = get"+o+"("+p+");\n      "+f+"\n    }\n  "}(t,e):function(t,e){var n=t.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",a=e.texShape,i=t.shapeInfo.texShape,s=t.shapeInfo.logicalShape.length,u=e.logicalShape.length;if(!t.shapeInfo.isUniform&&s===u&&null==t.shapeInfo.flatOffset&&y(i,a))return "\n      float "+o+"() {\n        return sampleTexture("+n+", resultUV);\n      }\n    ";var l,c=jo(u),h=to(t.shapeInfo.logicalShape,e.logicalShape),p=u-s,f=["x","y","z","w","u","v"];l=0===s?"":u<2&&h.length>=1?"coords = 0;":h.map(function(t){return "coords."+f[t+p]+" = 0;"}).join("\n");var d="";d=u<2&&s>0?"coords":t.shapeInfo.logicalShape.map(function(t,e){return "coords."+f[e+p]}).join(", ");return "\n    float "+o+"() {\n      "+c+" coords = getOutputCoords();\n      "+l+"\n      return get"+r+"("+d+");\n    }\n  "}(t,e));return r}(t,e,r)}).join("\n"),l=e.texShape,c=Mo(),h=function(t){return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return "+t.texture2D+"(textureSampler, uv).r;\n    }\n  "}(c),p=function(t){return t.version+"\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    "+t.varyingFs+" vec2 resultUV;\n    "+t.defineOutput+"\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    #define isnan(value) isnan_custom(value)\n    "+t.defineSpecialNaN+"\n    bvec4 isnan_custom(vec4 val) {\n      return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n    }\n\n    "+t.defineSpecialInf+"\n    "+t.defineRound+"\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    "+zo+"\n    "+Go+"\n    "+Ho+"\n  "}(c);return e.isPacked?(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(1===n[0])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * "+n[1]+".0);\n      }\n    ";if(1===n[1])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * "+n[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      return 2 * (resTexRC.x * "+n[1]+" + resTexRC.y);\n    }\n  "}(0,e);case 2:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(y(t,e))return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2("+n[0]+", "+n[1]+"));\n      }\n    ";var r=Math.ceil(t[1]/2);return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=t,r=e,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Math.ceil(n[2]/2),i=a*Math.ceil(n[1]/2),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+o[0]+", "+o[1]+"));\n      int index = resTexRC.x * "+o[1]+" + resTexRC.y;\n\n      int b = index / "+i+";\n      index -= b * "+i+";\n\n      int r = 2 * (index / "+a+");\n      int c = imod(index, "+a+") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";default:return function(t,e){for(var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2),a=o,i="",s="b, r, c",u=2;u<t.length-1;u++)a*=t[t.length-u-1],i="\n      int b"+u+" = index / "+a+";\n      index -= b"+u+" * "+a+";\n    "+i,s="b"+u+", "+s;return "\n    ivec"+t.length+" getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n\n      "+i+"\n\n      int b = index / "+o+";\n      index -= b * "+o+";\n\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec"+t.length+"("+s+");\n    }\n  "}(t,e)}var n,r,o,a,i;}(e.logicalShape,l),i=function(t){return "\n    void setOutput(vec4 val) {\n      "+t.output+" = val;\n    }\n  "}(c)):(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){if(1===e[0])return "\n      int getOutputCoords() {\n        return int(resultUV.x * "+e[1]+".0);\n      }\n    ";if(1===e[1])return "\n      int getOutputCoords() {\n        return int(resultUV.y * "+e[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      return resTexRC.x * "+e[1]+" + resTexRC.y;\n    }\n  "}(0,e);case 2:return function(t,e){if(y(t,e))return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+e[0]+", "+e[1]+"));\n      }\n    ";if(1===t[1])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";if(1===t[0])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      int r = index / "+t[1]+";\n      int c = index - r * "+t[1]+";\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=e,r=Bo(["r","c","d"],t),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      "+r+"\n      return ivec3(r, c, d);\n    }\n  ";case 4:return function(t,e){var n=Bo(["r","c","d","d2"],t);return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      "+n+"\n      return ivec4(r, c, d, d2);\n    }\n  "}(t,e);case 5:return function(t,e){var n=Bo(["r","c","d","d2","d3"],t);return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+e[0]+",\n                             "+e[1]+"));\n\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}(t,e);case 6:return function(t,e){var n=Bo(["r","c","d","d2","d3","d4"],t);return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}(t,e);default:throw new Error(t.length+"-D output sampling is not yet supported")}var n,r;}(e.logicalShape,l),i=function(t){return "\n    void setOutput(float val) {\n      "+t.output+" = vec4(val, 0, 0, 0);\n    }\n  "}(c)),r&&(p+=qo),[p,h,i,s,a,u,n].join("\n")}function Uo(t){var e=t.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "float "+n+"() {return "+e+";}";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===o&&1===a)return "\n      float "+n+"() {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=t.shapeInfo.texShape,s=i[0],u=i[1],l=$o(e);return "\n    float "+n+"() {\n      vec2 uv = uvFromFlat("+s+", "+u+", "+l+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "\n      float "+n+"(int index) {\n        "+Ko(t)+"\n      }\n    ";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===a&&1===o)return "\n      float "+n+"(int index) {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=$o(e);if(1===a)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index + "+i+") + 0.5) / "+o+".0);\n        return sampleTexture("+e+", uv);\n      }\n    ";if(1===o)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index + "+i+") + 0.5) / "+a+".0, 0.5);\n        return sampleTexture("+e+", uv);\n      }\n    ";return "\n    float "+n+"(int index) {\n      vec2 uv = uvFromFlat("+o+", "+a+", index + "+i+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&y(e,o)){var a=o[0],i=o[1];return "\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var s=k(e),u=s.newShape,l=s.keptDims,c=u;if(c.length<e.length){var h=Xo(t,c);return "\n      "+Uo(h)+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+Yo(["row","col"],l)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2("+e[1]+", 1)));\n        "+Ko(t)+"\n      }\n    ";var p=o[0],f=o[1],d=$o(n);if(1===f)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+d+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / "+p+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";if(1===p)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+d+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2((index + 0.5) / "+f+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ";return "\n  float "+r+"(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * "+e[1]+" + col + "+d+";\n    vec2 uv = uvFromFlat("+p+", "+f+", index);\n    return sampleTexture("+n+", uv);\n  }\n"}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[1]*e[2],a=e[2],i=k(e),s=i.newShape,u=i.keptDims,l=s;if(l.length<e.length){var c=Xo(t,l);return "\n        "+Uo(c)+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+Yo(["row","col","depth"],u)+");\n        }\n      "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3("+o+", "+a+", 1)));\n        "+Ko(t)+"\n      }\n    ";var h=t.shapeInfo.texShape,p=h[0],f=h[1],d=t.shapeInfo.flatOffset;if(f===o&&null==d)return "\n        float "+r+"(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2("+a+", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+f+".0, "+p+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ";if(f===a&&null==d)return "\n    float "+r+"(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2("+e[1]+", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+f+".0, "+p+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";var v=$o(n);return "\n      float "+r+"(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * "+o+" + col * "+a+" + depth + "+v+";\n        vec2 uv = uvFromFlat("+p+", "+f+", index);\n        return sampleTexture("+n+", uv);\n      }\n  "}(t);case 4:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[3],a=e[2]*o,i=e[1]*a,s=k(e),u=s.newShape,l=s.keptDims;if(u.length<e.length){var c=Xo(t,u);return "\n      "+Uo(c)+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+Yo(["row","col","depth","depth2"],l)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4("+i+", "+a+", "+o+", 1)));\n        "+Ko(t)+"\n      }\n    ";var h=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,f=p[0],d=p[1];if(d===i&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3("+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+d+".0, "+f+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(d===o&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3("+e[1]*e[2]+", "+e[2]+", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+d+".0, "+f+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var v=$o(n);return "\n    float "+r+"(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+i+" + col * "+a+" +\n          depth * "+o+" + depth2;\n      vec2 uv = uvFromFlat("+f+", "+d+", index + "+v+");\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 5:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],a=e[3]*o,i=e[2]*a,s=e[1]*i,u=k(e),l=u.newShape,c=u.keptDims;if(l.length<e.length){var h=Xo(t,l);return "\n      "+Uo(h)+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+Yo(["row","col","depth","depth2","depth3"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+s+", "+i+", "+a+", "+o+")) +\n          depth3;\n        "+Ko(t)+"\n      }\n    ";var p=t.shapeInfo.flatOffset,f=t.shapeInfo.texShape,d=f[0],v=f[1];if(v===s&&null==p)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4("+i+", "+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+v+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(v===o&&null==p)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]+",\n               "+e[2]*e[3]+", "+e[3]+", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+v+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var m=$o(n);return "\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+s+" + col * "+i+" + depth * "+a+" +\n          depth2 * "+o+" + depth3 + "+m+";\n      vec2 uv = uvFromFlat("+d+", "+v+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 6:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=k(e),a=o.newShape,i=o.keptDims;if(a.length<e.length){var s=Xo(t,a);return "\n      "+Uo(s)+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+Yo(["row","col","depth","depth2","depth3","depth4"],i)+");\n      }\n    "}var u=e[5],l=e[4]*u,c=e[3]*l,h=e[2]*c,p=e[1]*h;if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4("+p+", "+h+", "+c+", "+l+")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2("+u+", 1)));\n        "+Ko(t)+"\n      }\n    ";var f=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,v=d[0],m=d[1];if(m===p&&null==f)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4("+h+", "+c+", "+l+", "+u+")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(m===u&&null==f)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]*e[4]+",\n               "+e[2]*e[3]*e[4]+",\n               "+e[3]*e[4]+",\n               "+e[4]+")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var g=$o(n);return "\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+p+" + col * "+h+" + depth * "+c+" +\n          depth2 * "+l+" + depth3 * "+u+" + depth4 + "+g+";\n      vec2 uv = uvFromFlat("+v+", "+m+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function Vo(t){var e,n,r;switch(t.shapeInfo.logicalShape.length){case 0:return e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=Mo(),"\n    vec4 "+n+"() {\n      return "+r.texture2D+"("+e+", halfCR);\n    }\n  ";case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t.shapeInfo.texShape,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Mo();return "\n    vec4 "+n+"(int index) {\n      vec2 uv = packedUVfrom1D(\n        "+o[0]+", "+o[1]+", index);\n      return "+a.texture2D+"("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=o[0],i=o[1],s=Mo();if(null!=o&&y(e,o))return "\n      vec4 "+r+"(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n\n        return "+s.texture2D+"("+n+", uv);\n      }\n    ";var u=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],l=Math.ceil(e[1]/2);return "\n    vec4 "+r+"(int row, int col) {\n      vec2 uv = packedUVfrom2D("+l+", "+u[0]+", "+u[1]+", row, col);\n      return "+s.texture2D+"("+n+", uv);\n    }\n  "}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===e[0]){var i=e.slice(1),s=Xo(t,i);return "\n        "+Vo(s)+"\n        vec4 "+r+"(int b, int row, int col) {\n          return "+r+"("+Yo(["b","row","col"],[1,2])+");\n        }\n      "}var u=a[0],l=a[1],c=Math.ceil(e[2]/2),h=c*Math.ceil(e[1]/2),p=Mo();return "\n    vec4 "+r+"(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        "+u+", "+l+", "+h+", "+c+", b, row, col);\n      return "+p.texture2D+"("+n+", uv);\n    }\n  "}(t);default:return function(t){for(var e=t.shapeInfo.logicalShape,n=e.length,r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape,i=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],s=i[0],u=i[1],l=Math.ceil(e[n-1]/2),c=l*Math.ceil(e[n-2]/2),h="int b, int row, int col",p="b * "+c+" + (row / 2) * "+l+" + (col / 2)",f=2;f<n-1;f++)h="int b"+f+", "+h,c*=e[n-f-1],p="b"+f+" * "+c+" + "+p;var d=Mo();return "\n    vec4 "+o+"("+h+") {\n      int index = "+p+";\n      int texR = index / "+u+";\n      int texC = index - texR * "+u+";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+u+", "+s+");\n      return "+d.texture2D+"("+r+", uv);\n    }\n  "}(t)}}var zo="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Go="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Ho="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",qo="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function $o(t){return "offset"+t}function Ko(t){var e=t.name,n=g(t.shapeInfo.logicalShape);return n<2?"return "+e+";":"\n    for (int i = 0; i < "+n+"; i++) {\n      if (i == index) {\n        return "+e+"[i];\n      }\n    }\n  "}function jo(t){if(t<=1)return "int";if(2===t)return "ivec2";if(3===t)return "ivec3";if(4===t)return "ivec4";if(5===t)return "ivec5";if(6===t)return "ivec6";throw Error("GPU for rank "+t+" is not yet supported")}function Xo(t,e){var n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function Yo(t,e){return e.map(function(e){return t[e]}).join(", ")}var Qo=function(){return function(t,e,n,r){this.variableNames=["A"],this.usesPackedTextures=!0,f(t.length>2,function(){return "Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."});var o=t[t.length-1],a=Math.ceil(o/e);this.outputShape=t.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,l=u.length,c=jo(l),h=Fo("coords",l);if(1===a){var p=jo(s=l+1);i="\n        "+p+" sourceLocR = "+p+"("+h.join()+", 0);\n        ++"+h[l-1]+";\n        "+p+" sourceLocG = "+p+"("+h.join()+", 0);\n        ++"+h[l-2]+";\n        "+p+" sourceLocA = "+p+"("+h.join()+", 0);\n        --"+h[l-1]+";\n        "+p+" sourceLocB = "+p+"("+h.join()+", 0);\n        --"+h[l-2]+";";}else s=l,i="\n        "+c+" sourceLocR = coords;\n        ++"+h[l-1]+";\n        "+c+" sourceLocG = coords;\n        ++"+h[l-2]+";\n        "+c+" sourceLocA = coords;\n        --"+h[l-1]+";\n        "+c+" sourceLocB = coords;\n        --"+h[l-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),v="."+d[s-1],m=d.map(function(t){return "int "+t}),g=Fo("sourceLocR",s-1).concat("inIdx.r"),y=Fo("sourceLocG",s-1).concat("inIdx.g"),x=Fo("sourceLocB",s-1).concat("inIdx.b"),b=Fo("sourceLocA",s-1).concat("inIdx.a"),w="max"===n?"greaterThan":"lessThan",C=r?"":"\n          inIdx = round(vec4(getBestIndicesAChannel("+g.join()+"),\n                             getBestIndicesAChannel("+y.join()+"),\n                             getBestIndicesAChannel("+x.join()+"),\n                             getBestIndicesAChannel("+b.join()+")));",E="vec4(\n            getAChannel("+g.join()+"),\n            hasNextCol ? getAChannel("+y.join()+") : 0.,\n            hasNextRow ? getAChannel("+x.join()+") : 0.,\n            hasNextRow && hasNextCol ? getAChannel("+b.join()+") : 0.)",R=r?"":"\n      float getBestIndicesAChannel("+m.join()+") {\n        return getChannel(getBestIndicesA("+d.join()+"),\n                                          vec2("+d.slice(-2).join()+"));\n      }";this.userCode="\n      float getAChannel("+m.join()+") {\n        return getChannel(getA("+d.join()+"),\n                               vec2("+d.slice(-2).join()+"));\n      }\n      "+R+"\n      void main() {\n        "+c+" coords = getOutputCoords();\n        bool hasNextCol = "+h[l-1]+" < "+(u[l-1]-1)+";\n        bool hasNextRow = "+h[l-2]+" < "+(u[l-2]-1)+";\n        "+i+"\n        ivec4 srcIdx = ivec4(sourceLocR"+v+", sourceLocG"+v+",\n          sourceLocB"+v+", sourceLocA"+v+") * "+e+";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = "+E+";\n\n        for (int i = 0; i < "+e+"; i++) {\n          inIdx = srcIdx;\n          "+C+"\n          vec4 candidate = "+E+";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4("+w+"(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";}}(),Jo=function(){return function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterHeight,u=t.effectiveFilterWidth,l=s-1-t.padInfo.top,c=u-1-t.padInfo.left,h=1/(e*n);this.userCode="\n      const ivec2 pads = ivec2("+l+", "+c+");\n      const float avgMultiplier = float("+h+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+s+";\n            wR += "+a+") {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+u+";\n            wC+= "+i+") {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Zo=function(){return function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,h=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=c-1-t.padInfo.front,d=h-1-t.padInfo.top,v=p-1-t.padInfo.left,m=1/(e*n*r);this.userCode="\n      const ivec3 pads = ivec3("+f+", "+d+", "+v+");\n      const float avgMultiplier = float("+m+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+c+";\n            wD += "+s+") {\n          float dyD = float(dyDCorner + wD) / "+o+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+h+";\n              wR += "+u+") {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+p+";\n                wC += "+l+") {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),ta=function(){return function(t,e,n,r,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],no(t,e),no(t,n);var i="0.0";null!=r&&(no(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";null!=o&&(no(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+s+";\n        float inv = scale * inversesqrt(variance + float("+a+"));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";}}(),ea=function(){return function(t,e,n,r,o,a){this.usesPackedTextures=!0,this.variableNames=["x","mean","variance"],no(t,e),no(t,n);var i="vec4(0.0)";null!=r&&(no(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";null!=o&&(no(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        vec4 offset = "+i+";\n        vec4 scale = "+s+";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4("+a+"));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";}}(),na="return areal * breal - aimag * bimag;",ra="return areal * bimag + aimag * breal;",oa=function(){return function(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=no(e,n),this.userCode="\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        "+t+"\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";}}(),aa="return a + b;",ia="return a - b;",sa="return a * b;",ua="return (a < 0.) ? b * a : a;",la=function(){return function(t,e,n){this.variableNames=["A","B"],this.outputShape=no(e,n),this.userCode="\n      float binaryOperation(float a, float b) {\n        "+t+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";}}(),ca="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n",ha=function(){return function(t,e,n,r){void 0===r&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.usesPackedTextures=!0,this.outputShape=no(e,n);var o=this.outputShape.length,a="";if(r)if(0===o||1===g(this.outputShape))a="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else if(a="\n          "+jo(o)+" coords = getOutputCoords();\n        ",1===o)a+="\n            result.y = (coords + 1) >= "+this.outputShape[0]+" ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";else{var i=Fo("coords",o);a+="\n            bool nextRowOutOfBounds =\n              ("+i[o-2]+" + 1) >= "+this.outputShape[o-2]+";\n            bool nextColOutOfBounds =\n              ("+i[o-1]+" + 1) >= "+this.outputShape[o-1]+";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";}this.userCode="\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        "+t+"\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        "+a+"\n\n        setOutput(result);\n      }\n    ";}}(),pa=function(){function t(t){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),fa=function(){function t(t){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),da=function(){return function(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";}}(),va=function(){return function(t){this.outputShape=[],this.outputShape=dn(t,1),this.variableNames=t.map(function(t,e){return "T"+e});var e=new Array(t.length-1);e[0]=t[0][1];for(var n=1;n<e.length;n++)e[n]=e[n-1]+t[n][1];var r=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<e.length;n++){var o=e[n-1];r.push("else if (yC < "+e[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));");}var a=e.length,i=e[e.length-1];r.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        "+r.join("\n        ")+"\n      }\n    ";}}(),ma=function(){return function(t,e){this.usesPackedTextures=!0,this.outputShape=[],this.outputShape=dn(t,e);var n=this.outputShape,r=n.length,o=jo(r),a=Fo("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map(function(t,e){return "T"+e});var s=new Array(t.length-1);s[0]=t[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+t[u][e];var l=i[e],c="vec2("+i.slice(-2).join()+")",h=i.join(),p="if ("+l+" < "+s[0]+")\n          return getChannel(getT0("+h+"), "+c+");";for(u=1;u<s.length;u++){var f=s[u-1];p+="\n        else if ("+l+" < "+s[u]+") {\n          "+l+" -= "+f+";\n          return getChannel(getT"+u+"("+h+"), "+c+");\n        }";}var d=s.length;p+="\n        else {\n          "+l+" -= "+s[s.length-1]+";\n          return getChannel(getT"+d+"("+h+"), "+c+");\n        }",this.userCode="\n      float getValue("+i.map(function(t){return "int "+t})+") {\n        "+p+"\n      }\n\n      void main() {\n        "+o+" coords = getOutputCoords();\n        vec4 result = vec4(getValue("+a+"), 0., 0., 0.);\n        if (++"+a[r-1]+" < "+n[r-1]+") {\n          result.g = getValue("+a+");\n        }\n        if (++"+a[r-2]+" < "+n[r-2]+") {\n          result.a = getValue("+a+");\n        }\n        if ("+a[r-2]+" < "+n[r-2]+" &&\n            --"+a[r-1]+" < "+n[r-1]+") {\n          result.b = getValue("+a+");\n        }\n        setOutput(result);\n      }\n    ";}}(),ga=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a="channelsLast"===t.dataFormat;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              if ("+a+") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),ya=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a="channelsLast"===t.dataFormat,i=e-1-t.padInfo.top,s=n-1-t.padInfo.left,u=a?1:2,l=a?2:3,c=a?3:1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords["+c+"];\n\n        ivec2 dyCorner = ivec2(coords["+u+"], coords["+l+"]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n\n              if ("+a+") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),xa=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,a=t.padInfo.top,i=t.padInfo.left;this.userCode="\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yF = 0; yF < "+t.outDepth+"; yF++) {\n            int xF = wF + yF * "+e+" - "+o+";\n\n            if (xF < 0 || xF >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n              int xR = wR + yR * "+n+" - "+a+";\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n                int xC = wC + yC * "+r+" - "+i+";\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),ba=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=e-1-t.padInfo.front,u=n-1-t.padInfo.top,l=r-1-t.padInfo.left;this.userCode="\n      const ivec3 pads = ivec3("+s+", "+u+", "+l+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+e+"; wF++) {\n          float dyF = float(dyFCorner + wF) / "+o+".0;\n\n          if (dyF < 0.0 || dyF >= "+t.outDepth+".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = "+e+" - 1 - wF;\n\n          for (int wR = 0; wR < "+n+"; wR++) {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = "+n+" - 1 - wR;\n\n            for (int wC = 0; wC < "+r+"; wC++) {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = "+r+" - 1 - wC;\n\n              for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),wa=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.outChannels/t.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+a+" + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ca=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=e-1-t.padInfo.top,i=n-1-t.padInfo.left,s=t.outChannels/t.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+s+"; dm++) {\n              int d2 = d1 * "+s+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ea=function(){return function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.padInfo.top,a=t.padInfo.left,i=t.strideHeight,s=t.strideWidth,u=t.dilationHeight,l=t.dilationWidth,c=t.filterHeight,h=t.filterWidth,p=4*Math.floor(t.inChannels/4),f=t.inChannels%4,d="channelsLast"===t.dataFormat,v=d?1:2,m=d?2:3,g=d?3:1,y="",x="";n&&(y=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",x="result = activation(result);");var b=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+y+"\n\n      const ivec2 strides = ivec2("+i+", "+s+");\n      const ivec2 pads = ivec2("+o+", "+a+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords["+g+"];\n\n        ivec2 xRCCorner =\n            ivec2(coords["+v+"], coords["+m+"]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+c+"; wR++) {\n          int xR = xRCorner + wR * "+u+";\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+h+"; wC++) {\n            int xC = xCCorner + wC * "+l+";\n\n            if (xC < 0 || xC >= "+t.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+p+"; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if ("+d+") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if ("+(1===f)+") {\n\n              if ("+d+") {\n                dotProd +=\n                    getX(batch, xR, xC, "+p+") *\n                    getW(wR, wC, "+p+", d2);\n              } else {\n                dotProd +=\n                    getX(batch, "+p+", xR, xC) *\n                    getW(wR, wC, "+p+", d2);\n              }\n\n            } else if ("+(2===f)+") {\n              vec2 wValues = vec2(\n                getW(wR, wC, "+p+", d2),\n                getW(wR, wC, "+p+" + 1, d2)\n              );\n\n              if ("+d+") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, "+p+"),\n                  getX(batch, xR, xC, "+p+" + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, "+p+", xR, xC),\n                  getX(batch, "+p+" + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if ("+(3===f)+") {\n              vec3 wValues = vec3(\n                getW(wR, wC, "+p+", d2),\n                getW(wR, wC, "+p+" + 1, d2),\n                getW(wR, wC, "+p+" + 2, d2)\n              );\n\n              if ("+d+") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, "+p+"),\n                  getX(batch, xR, xC, "+p+" + 1),\n                  getX(batch, xR, xC, "+p+" + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, "+p+", xR, xC),\n                  getX(batch, "+p+" + 1, xR, xC),\n                  getX(batch, "+p+" + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        "+b+"\n        "+x+"\n        setOutput(result);\n      }\n    ";}}(),Ra=function(){return function(t){this.variableNames=["x","W"],this.outputShape=t.outShape;var e=t.padInfo.front,n=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,c=t.filterDepth,h=t.filterHeight,p=t.filterWidth,f=4*Math.floor(t.inChannels/4),d=t.inChannels%4;this.userCode="\n      const ivec3 strides = ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+e+", "+n+", "+r+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+c+"; wF++) {\n          int xF = xFCorner + wF * "+s+";\n\n          if (xF < 0 || xF >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+"; wR++) {\n            int xR = xRCorner + wR * "+u+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+p+"; wC++) {\n              int xC = xCCorner + wC * "+l+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < "+f+"; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if ("+(1===d)+") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, "+f+") *\n                  getW(wF, wR, wC, "+f+", d2);\n              } else if ("+(2===d)+") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, "+f+"),\n                  getX(batch, xF, xR, xC, "+f+" + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, "+f+", d2),\n                  getW(wF, wR, wC, "+f+" + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if ("+(3===d)+") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, "+f+"),\n                  getX(batch, xF, xR, xC, "+f+" + 1),\n                  getX(batch, xF, xR, xC, "+f+" + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, "+f+", d2),\n                  getW(wF, wR, wC, "+f+" + 1, d2),\n                  getW(wF, wR, wC, "+f+" + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ia=function(){return function(t){this.variableNames=["x","W"],this.outputShape=t.outShape;var e=t.inHeight,n=t.inWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,l=t.filterHeight,c=t.filterWidth,h=t.outChannels/t.inChannels;this.userCode="\n      const ivec2 strides = ivec2("+a+", "+i+");\n      const ivec2 pads = ivec2("+r+", "+o+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+h+";\n        int q = d2 - d1 * "+h+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+s+";\n\n          if (xR < 0 || xR >= "+e+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+c+"; wC++) {\n            int xC = xCCorner + wC * "+u+";\n\n            if (xC < 0 || xC >= "+n+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),ka=function(){return function(t){this.variableNames=["x","W"],this.usesPackedTextures=!0,this.outputShape=t.outShape;for(var e=t.inHeight,n=t.inWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,l=t.filterHeight,c=t.filterWidth,p=c,f="int xR; int xC; int xCOffset;",d=0;d<l;d++)for(var v=0;v<c;v++)f+="\n          vec4 xTexelR"+d+"C"+2*v+" = vec4(0.);\n          vec4 wR"+d+"C"+v+" = vec4(0.);\n          vec4 xR"+d+"C"+v+" = vec4(0.);";for(d=0;d<l;d++)for(var m=0;m<p;m++){if(f+="\n          xR = xRCorner + "+d*s+";\n          xC = xCCorner + "+(v=2*m)*u+";\n        ",1===i){if(v<c&&(f+=o%2==1?"\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < "+e+" && xCOffset >= 0 && xCOffset < "+n+") {\n                  xTexelR"+d+"C"+v+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+d+"C"+v+" = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < "+e+" && xCOffset >= 0 && xCOffset < "+n+") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n                  xR"+d+"C"+v+" = vec4(previous.zw, xTexelR"+d+"C"+v+".xy);\n                } else {\n                  xR"+d+"C"+v+" = vec4(0, 0, xTexelR"+d+"C"+v+".xy);\n                }\n              ":"\n                if(xR >= 0 && xR < "+e+" && xC >= 0 && xC < "+n+") {\n                  xTexelR"+d+"C"+v+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+d+"C"+v+" = vec4(0.);\n                }\n\n                xR"+d+"C"+v+" = xTexelR"+d+"C"+v+";\n              ",v+1<c)){var g=o%2==0?h(u):u;u%2==0&&o%2==1||u%2!=0&&o%2!=1?(f+="\n                  xCOffset = xC + "+o%2+" + "+g+";\n\n                  if(xR >= 0 && xR < "+e+" &&\n                    xCOffset >= 0 && xCOffset < "+n+") {\n                    xTexelR"+d+"C"+(v+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n                ",u>1&&(f+="\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < "+e+" &&\n                      xCOffset >= 0 && xCOffset < "+n+") {\n                      xTexelR"+d+"C"+v+" = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR"+d+"C"+v+" = vec4(0.);\n                    }\n                  "),f+="\n                  xR"+d+"C"+(v+1)+" = vec4(\n                    xTexelR"+d+"C"+v+".zw, xTexelR"+d+"C"+(v+2)+".xy);\n                "):f+="\n                  xCOffset = xC + "+g+";\n\n                  if(xR >= 0 && xR < "+e+" &&\n                    xCOffset >= 0 && xCOffset < "+n+") {\n                    xTexelR"+d+"C"+(v+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR"+d+"C"+(v+1)+" = xTexelR"+d+"C"+(v+2)+";\n                ";}}else v<c&&(f+="\n              if(xR >= 0 && xR < "+e+") {\n            ",o%2==1?(f+="\n                xCOffset = xC + 1 - "+i+";\n                if(xCOffset >= 0 && xCOffset < "+n+") {\n                  xTexelR"+d+"C"+v+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+d+"C"+v+" = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < "+n+") {\n                  xTexelR"+d+"C"+(v+2)+" = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR"+d+"C"+(v+2)+" = vec4(0.);\n                }\n\n                xR"+d+"C"+v+" = vec4(\n                  xTexelR"+d+"C"+v+".zw, xTexelR"+d+"C"+(v+2)+".zw);\n              ",v+1<c&&(f+="\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + "+i+";\n                  if(xCOffset >= 0 && xCOffset < "+n+") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR"+d+"C"+(v+1)+" = vec4(xTexelR"+d+"C"+(v+2)+".xy, final.xy);\n                ")):(f+="\n                if(xC >= 0 && xC < "+n+") {\n                  xTexelR"+d+"C"+v+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+d+"C"+v+" = vec4(0.);\n                }\n\n                xCOffset = xC + "+i+";\n                if(xCOffset >= 0 && xCOffset < "+n+") {\n                  xTexelR"+d+"C"+(v+2)+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+d+"C"+(v+2)+" = vec4(0.);\n                }\n\n                xR"+d+"C"+v+" = vec4(\n                  xTexelR"+d+"C"+v+".xy, xTexelR"+d+"C"+(v+2)+".xy);\n              ",v+1<c&&(f+="\n                  xR"+d+"C"+(v+1)+" = vec4(\n                    xTexelR"+d+"C"+v+".zw, xTexelR"+d+"C"+(v+2)+".zw);\n                ")),f+="}");v<c&&(f+="\n            vec4 wTexelR"+d+"C"+v+" = getW("+d+", "+v+", d1, q);\n            wR"+d+"C"+v+" = vec4(wTexelR"+d+"C"+v+".xz, wTexelR"+d+"C"+v+".xz);\n          ",v+1<c&&(f+="\n              vec4 wTexelR"+d+"C"+(v+1)+" = getW("+d+", "+(v+1)+", d1, q);\n              wR"+d+"C"+(v+1)+" =\n                vec4(wTexelR"+d+"C"+(v+1)+".xz, wTexelR"+d+"C"+(v+1)+".xz);"));}for(d=0;d<l;d++)for(v=0;v<c;v++)f+="result += xR"+d+"C"+v+" * wR"+d+"C"+v+";";this.userCode="\n      const ivec2 strides = ivec2("+a+", "+i+");\n      const ivec2 pads = ivec2("+r+", "+o+");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 result = vec4(0.);\n\n        "+f+"\n\n        setOutput(result);\n      }\n    ";}}(),Na=function(){return function(t,e,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=t[0],i=t[1],s=t[2],u=t[3],l=e[0],c=n[0],h=n[1];this.outputShape=[l,c,h,u];var p="bilinear"===r?1:0,f=[i-1+".0",s-1+".0"],d=f[0],v=f[1],m=c>1?[""+(i-1)/(c-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=m[0],y=m[1],x=m[2],b=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],C=b[1],E=b[2];this.userCode="\n      const float height_ratio = float("+g+");\n      const float width_ratio = float("+w+");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= "+a+") {\n          return;\n        }\n\n        float height_scale = "+y+";\n        float width_scale = "+C+";\n\n        float in_y = "+x+";\n        if( in_y < 0.0 || in_y > "+d+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n        float in_x = "+E+";\n        if( in_x < 0.0 || in_x > "+v+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if("+p+" == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";}}(),Sa=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=t;var r=t.length,o=t[t.length-1],a=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+o+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+jo(r)+" coords = getOutputCoords();\n        int end = "+Aa(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+o+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+a+" end) {\n            continue;\n          }\n          if (idx == end && "+e+") {\n            continue;\n          }\n          "+Aa(r,"coords")+" = idx;\n          val += getX("+function(t,e){if(1===t)return ""+e;if(2===t)return e+".x, "+e+".y";if(3===t)return e+".x, "+e+".y, "+e+".z";if(4===t)return e+".x, "+e+".y, "+e+".z, "+e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    ";}}();function Aa(t,e){if(1===t)return ""+e;if(2===t)return e+".y";if(3===t)return e+".z";if(4===t)return e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}var Ta=function(){return function(t,e){this.variableNames=["A"];var n=Mo();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+Bo(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        "+n.output+" = result;\n      }\n    ";}}(),Da=function(){return function(t,e){this.variableNames=["A"],this.usesPackedTextures=!0;var n=Mo();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+Bo(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        "+n.output+" = result;\n      }\n    ";}}(),_a=function(){function t(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode="\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = "+this.getHeightCoordString()+";\n      int w = "+this.getWidthCoordString()+";\n      int d = "+this.getDepthCoordString()+";\n\n      int in_h = h / "+e+";\n      int offset_h = imod(h, "+e+");\n      int in_w = w / "+e+";\n      int offset_w = imod(w, "+e+");\n      int offset_d = (offset_h * "+e+" + offset_w) *\n        "+this.getOutputDepthSize()+";\n      int in_d = d + offset_d;\n\n      float result = "+this.getInputSamplingString()+";\n      setOutput(result);\n    }\n  ";}return t.prototype.getHeightCoordString=function(){return "NHWC"===this.dataFormat?"coords[1]":"coords[2]"},t.prototype.getWidthCoordString=function(){return "NHWC"===this.dataFormat?"coords[2]":"coords[3]"},t.prototype.getDepthCoordString=function(){return "NHWC"===this.dataFormat?"coords[3]":"coords[1]"},t.prototype.getOutputDepthSize=function(){return "NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]},t.prototype.getInputSamplingString=function(){return "NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},t}(),Oa=function(){return function(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";}}(),Fa=function(){return function(t){this.variableNames=["A"];var e=Mo();this.outputShape=t,this.userCode="\n      "+Lo+"\n\n      void main() {\n        float x = getAAtOutCoords();\n        "+e.output+" = encode_float(x);\n      }\n    ";}}(),Ma=function(){return function(t){this.variableNames=["A"],this.usesPackedTextures=!0;var e=Mo();this.outputShape=t,this.userCode="\n      "+Lo+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        "+e.output+" = encode_float(x);\n      }\n    ";}}(),Ba=function(){return function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"];var r=Mo(),o=e[0],a=e[1];this.outputShape=t;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode="\n      "+Po(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / "+a+";\n        int c = imod(flatIndex, "+a+");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n        vec4 values = "+r.texture2D+"(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        "+r.output+" = vec4("+i+", 0., 0., 0.);\n      }\n    ";}}(),Pa=function(){return function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"];var r=Mo(),o=e[0],a=e[1];this.outputShape=t;var i="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var l=0;l<=1;l++){var c=2*u+l;i+="\n          localCoords = coords;\n          if(localCoords[2] + "+l+" < "+t[2]+") {\n            localCoords[2] += "+l+";\n            if(localCoords[1] + "+u+" < "+t[1]+") {\n              localCoords[1] += "+u+";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n    \n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / "+a+";\n              c = imod(flatIndex, "+a+");\n              uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n              values = "+r.texture2D+"(A, uv);\n\n              if(offset == 0) {\n                result["+c+"] = values[0];\n              } else if(offset == 1) {\n                result["+c+"] = values[1];\n              } else if(offset == 2) {\n                result["+c+"] = values[2];\n              } else {\n                result["+c+"] = values[3];\n              }\n            }\n          }\n        ";}this.userCode="\n      "+Po(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n        \n        "+i+"\n\n        "+r.output+" = "+s+";\n      }\n    ";}}(),La="return real * expR - imag * expI;",Wa="return real * expI + imag * expR;",Ua=function(){return function(t,e,n){this.variableNames=["real","imag"];var r=e[1];this.outputShape=e;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?r+".0":"1.0";this.userCode="\n      const float exponentMultiplier = "+o+";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        "+t+"\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float("+r+");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < "+r+"; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / "+a+";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";}}(),Va=function(){function t(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode="\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.valueLoc&&(e.valueLoc=n.getUniformLocationNoThrow(r,"value")),n.gl.uniform1f(e.valueLoc,t);}},t}(),za=function(){return function(t){this.variableNames=["A"];var e=Mo(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+r+".0, "+n+".0);\n\n        vec4 values = "+e.texture2D+"(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";}}(),Ga=function(){return function(t){this.variableNames=["A"];var e=Mo(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+r+".0, "+n+".0);\n            vec4 values = "+e.texture2D+"(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        "+e.output+" = result;\n      }\n    ";}}(),Ha=function(){return function(t,e,n){this.variableNames=["A","indices"];var r=t.slice();r[n]=e,this.outputShape=r,this.rank=r.length;var o=jo(this.rank),a=function(t,e){var n=t.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return "int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=0;a<t.length;a++)a===e?o.push("int(getIndices("+r[a]+"))"):o.push(""+r[a]);return o.join()}(t,n);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();var qa=function(){return function(t,e,n){this.sliceDim=t,this.strides=e,this.variableNames=["x","indices"],this.outputShape=n;var r=jo(e.length),o=jo(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode="\n        "+r+" strides = "+r+"("+this.strides+");\n         void main() {\n          "+o+" coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < "+this.sliceDim+"; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * "+a+";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";}}();function $a(t,e){var n=Mo();return Kt(t,e,n.version+"\n    precision highp float;\n    "+n.attribute+" vec3 clipSpacePos;\n    "+n.attribute+" vec2 uv;\n    "+n.varyingVs+" vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function Ka(t,e){return ee(t,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function ja(t,e){return ne(t,e,new Uint16Array([0,1,2,2,1,3]))}function Xa(t,e,n,r,o,a,i){oe(n,r);var s=re(t,e),u=t.TEXTURE_2D;return Vt(t,e,function(){return t.bindTexture(u,s)}),Vt(t,e,function(){return t.texParameteri(u,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)}),Vt(t,e,function(){return t.texParameteri(u,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}),Vt(t,e,function(){return t.texParameteri(u,t.TEXTURE_MIN_FILTER,t.NEAREST)}),Vt(t,e,function(){return t.texParameteri(u,t.TEXTURE_MAG_FILTER,t.NEAREST)}),Vt(t,e,function(){return t.texImage2D(u,0,o,n,r,0,a,i,null)}),Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)}),s}function Ya(t,e,n,r,o){var a=Pt(n,r);return Xa(t,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,t.FLOAT)}function Qa(t,e,n,r,o){var a=Pt(n,r);return Xa(t,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Ja(t,e,n,r,o){var a=Pt(n,r);return Xa(t,e,a[0],a[1],t.RGBA,t.RGBA,t.UNSIGNED_BYTE)}function Za(t,e,n,r,o){var a=Wt(n,r);return Xa(t,e,a[0],a[1],o.internalFormatPackedFloat,t.RGBA,t.FLOAT)}function ti(t,e,n,r,o){var a=Wt(n,r);return Xa(t,e,a[0],a[1],o.internalFormatPackedHalfFloat,t.RGBA,o.textureTypeHalfFloat)}function ei(t,e,n,r){return Vt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,r)}),ie(t,e,n,"clipSpacePos",r,3,20,0)&&ie(t,e,n,"uv",r,2,20,12)}function ni(t,e,n,r,o,a,i){var s,u,l;Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)}),a instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=t.UNSIGNED_BYTE,l=t.RGBA):(s=new Float32Array(r*o*4),u=t.FLOAT,l=i.internalFormatPackedFloat),s.set(a),Vt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,l,r,o,0,t.RGBA,u,s)}),Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});}function ri(t,e,n,r){Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)}),r.data instanceof Uint8Array?Vt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r.width,r.height,0,t.RGBA,t.UNSIGNED_BYTE,r.data)}):Vt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}),Vt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});}function oi(t,e,n,r,o){var a=t.createBuffer();Vt(t,e,function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,a)});var i=16*n*r;return Vt(t,e,function(){return t.bufferData(t.PIXEL_PACK_BUFFER,i,t.STREAM_READ)}),Vt(t,e,function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,0)}),Vt(t,e,function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,null)}),a}function ai(t,e,n){var r=t,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function ii(t,e,n,r,o){var a=Pt(n,r),i=a[0],s=a[1],u=new Uint8Array(n*r*4);return Vt(t,e,function(){return t.readPixels(0,0,i,s,o.downloadTextureFormat,t.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function si(t,e,n,r,o,a,i,s){var u=t,l=new Float32Array(function(t,e){var n=Wt(t,e);return n[0]*n[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function ui(t,e,n,r){var o=new Float32Array(n*r*4);return Vt(t,e,function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,o)}),o}var li=Object.freeze({createVertexShader:$a,createVertexBuffer:Ka,createIndexBuffer:ja,createFloat32MatrixTexture:Ya,createFloat16MatrixTexture:Qa,createUnsignedBytesMatrixTexture:Ja,createPackedMatrixTexture:Za,createFloat16PackedMatrixTexture:ti,bindVertexProgramAttributeStreams:ei,uploadDenseMatrixToTexture:ni,uploadPixelDataToTexture:ri,createBufferFromOutputTexture:oi,downloadFloat32MatrixFromBuffer:ai,downloadByteEncodedFloatMatrixFromOutputTexture:ii,downloadPackedMatrixFromBuffer:si,downloadMatrixFromPackedOutputTexture:ui}),ci=function(){function t(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=i.getNumber("WEBGL_VERSION");if(null!=t?(this.gl=t,Ft(e,t)):this.gl=Mt(e),1===i.getNumber("WEBGL_VERSION"))this.textureFloatExtension=$t(this.gl,this.debug,"OES_texture_float"),this.colorBufferFloatExtension=this.gl.getExtension("WEBGL_color_buffer_float"),this.textureHalfFloatExtension=$t(this.gl,this.debug,"OES_texture_half_float"),this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float");else{if(ke(this.gl,"EXT_color_buffer_float"))this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float");else{if(!ke(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float");}}this.vertexBuffer=Ka(this.gl,this.debug),this.indexBuffer=ja(this.gl,this.debug),this.framebuffer=ae(this.gl,this.debug),this.textureConfig=Ut(this.gl,this.textureHalfFloatExtension);}return Object.defineProperty(t.prototype,"debug",{get:function(){return i.getBool("DEBUG")},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Vt(e,this.debug,function(){return e.finish()}),Vt(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),Vt(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),Vt(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),Vt(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),Vt(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0;}},t.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Ya(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Qa(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Ja(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),ri(this.gl,this.debug,t,e);},t.prototype.uploadDenseMatrixToTexture=function(t,e,n,r){this.throwIfDisposed(),ni(this.gl,this.debug,t,e,n,r,this.textureConfig);},t.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),ti(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Za(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(pe(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Vt(this.gl,this.debug,function(){return e.gl.deleteTexture(t)});},t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,function(){return ii(r.gl,r.debug,e,n,r.textureConfig)})},t.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,r,o,a){return si(this.gl,t,0,0,0,o,a,this.textureConfig)},t.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return ai(this.gl,t,e)},t.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var r=oi(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},t.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},t.prototype.createFence=function(t){var e,n,r=this;if(i.getBool("WEBGL_FENCE_API_ENABLED")){var o=t,a=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var t=o.clientWaitSync(a,0,0);return t===o.ALREADY_SIGNALED||t===o.CONDITION_SATISFIED},e=a;}else i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(e,i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return !0};return {query:e,isFencePassed:n}},t.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,function(){return ui(r.gl,r.debug,e,n)})},t.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=jt(e,this.debug,t),r=$a(e,this.debug),o=Jt(e,this.debug);return Vt(e,this.debug,function(){return e.attachShader(o,r)}),Vt(e,this.debug,function(){return e.attachShader(o,n)}),Zt(e,this.debug,o),this.debug&&te(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=ei(e,this.debug,this.program,this.vertexBuffer)),o},t.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),null!=t&&Vt(this.gl,this.debug,function(){return e.gl.deleteProgram(t)});},t.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,null!=this.program&&this.debug&&te(this.gl,this.debug,this.program),Vt(this.gl,this.debug,function(){return e.gl.useProgram(t)});},t.prototype.getUniformLocation=function(t,e,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?ue(this.gl,this.debug,t,e):le(this.gl,t,e)},t.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),Vt(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},t.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},t.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),ce(this.gl,this.debug,this.program,t,e,n);},t.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e);},t.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var r=Wt(e,n),o=r[0],a=r[1];this.setOutputMatrixTextureDriver(t,o,a);},t.prototype.setOutputMatrixWriteRegion=function(t,e,n,r){this.setOutputMatrixWriteRegionDriver(n,t,r,e);},t.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},t.prototype.debugValidate=function(){null!=this.program&&te(this.gl,this.debug,this.program),fe(this.gl);},t.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Vt(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});},t.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Vt(this.gl,this.debug,function(){return t.gl.finish()});},t.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=$t(this.gl,this.debug,2===i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},t.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},t.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},t.prototype.beginQuery=function(){if(2===i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),o=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,o),o},t.prototype.endQuery=function(){if(2!==i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT);}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT);}},t.prototype.waitForQueryAndGetTime=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(n){switch(n.label){case 0:return [4,E(function(){return e.disposed||e.isQueryAvailable(t,i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},t.prototype.getQueryTime=function(t,e){if(0===e)return null;if(2===e){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(t,r.QUERY_RESULT_EXT)/1e6},t.prototype.isQueryAvailable=function(t,e){if(0===e)return !0;if(2===e){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}o=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint},t.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()});})},t.prototype.pollItems=function(){for(var t=function(t){for(var e=0;e<t.length;++e){var n=t[e]();if(!n)break}return e-1}(this.itemsToPoll.map(function(t){return t.isDoneFn})),e=0;e<=t;++e){(0, this.itemsToPoll[e].resolveFn)();}this.itemsToPoll=this.itemsToPoll.slice(t+1);},t.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||E(function(){return n.pollItems(),0===n.itemsToPoll.length});},t.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),he(this.gl,this.debug,t,this.framebuffer),this.debug&&fe(this.gl);},t.prototype.unbindTextureToFrameBuffer=function(){null!=this.outputTexture?(he(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&fe(this.gl)):pe(this.gl,this.debug,this.framebuffer);},t.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},t.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var r=this.gl;he(r,this.debug,t,this.framebuffer),this.debug&&fe(r),this.outputTexture=t,Vt(r,this.debug,function(){return r.viewport(0,0,e,n)}),Vt(r,this.debug,function(){return r.scissor(0,0,e,n)});},t.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,r){var o=this;this.throwIfDisposed(),Vt(this.gl,this.debug,function(){return o.gl.scissor(t,e,n,r)});},t.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},t.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},t}();function hi(t,e){if(t.length!==e.length)throw Error("Binary was compiled with "+t.length+" inputs, but was executed with "+e.length+" inputs");t.forEach(function(t,n){var r=t.logicalShape,o=e[n],a=o.shape;if(!y(r,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+a+" must match");if(!t.isUniform||!o.isUniform){var i=t.texShape,s=o.isUniform?null:o.texData.texShape;if(!y(i,s))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+s+" must match")}});}var pi=function(){return function(t,e,n){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=t;for(var r=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,s=n.padInfo,u=n.outWidth,l=n.dilationWidth,c=n.dilationHeight,h=n.dataFormat,p=s.left,f=s.top,d=o*r,v=Mo(),m="channelsLast"===h,g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+="\n          blockIndex = rc.y + "+w+";\n          pos = rc.x + "+b+";\n\n          if(blockIndex < "+t[1]+" && pos < "+t[0]+") {\n            offsetY = int(blockIndex / ("+u+")) * "+i+" - "+f+";\n            d0 = offsetY + "+c+" * (pos / "+d+");\n\n            if(d0 < "+e[g]+" && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), "+u+".) * "+a+". - "+p+".);\n              d1 = offsetX + "+l+" * (int(mod(float(pos), "+d+".) / "+o+".));\n\n              if(d1 < "+e[y]+" && d1 >= 0) {\n\n                ch = int(mod(float(pos), "+o+".));\n\n                if ("+m+") {\n                  innerDims = vec2(d1, ch);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";this.userCode="\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        "+x+"\n\n        "+v.output+" = result;\n      }\n    ";}}(),fi=function(){return function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+s+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+a+";\n        setOutput(val);\n      }\n    ";}}(),di=function(){return function(t,e,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=n,this.alpha=r,this.beta=o,this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < "+this.depth+"; ++d) {\n          int depthBegin = int(max(0.0, float(d - "+e+")));\n          int depthEnd = int(min(float("+this.depth+"),\n              float(d + "+e+" + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = "+this.depth+";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float("+r+") * norm + float("+n+");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float("+r+")\n                * float("+o+")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * "+o+");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";}}(),vi=function(){return function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[],this.usesPackedTextures=!0;var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < "+this.outputShape[3]+";\n        bool hasNextRow = c < "+this.outputShape[2]+";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - "+i+";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - "+i+"; j <= "+i+"; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2("+s+"));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * "+a+";\n        setOutput(result);\n      }\n    ";}}(),mi=function(){return function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideHeight,n=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,a=t.effectiveFilterWidth,i=o-1-t.padInfo.top,s=a-1-t.padInfo.left,u=o*a-1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+o+";\n          wR += "+r+") {\n          float dyR = float(dyRCorner + wR) / "+e+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+a+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+n+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+u+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+a+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),gi=function(){return function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterDepth,u=t.effectiveFilterHeight,l=t.effectiveFilterWidth,c=s-1-t.padInfo.front,h=u-1-t.padInfo.top,p=l-1-t.padInfo.left,f=s*u*l-1;this.userCode="\n      const ivec3 pads = ivec3("+c+", "+h+", "+p+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+s+";\n           wD += "+o+") {\n          float dyD = float(dyDCorner + wD) / "+e+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+a+") {\n            float dyR = float(dyRCorner + wR) / "+n+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+l+";\n                wC += "+i+") {\n              float dyC = float(dyCCorner + wC) / "+r+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = "+f+" -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * "+u+" * "+l+" +\n                  wR * "+l+" + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),yi=function(){return function(t,e,n,r,o,a,i){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===a&&(a=null),void 0===i&&(i=!1),this.variableNames=["matrixA","matrixB"],this.usesPackedTextures=!0,this.outputShape=e;var s=n?t[1]:t[2],u=Math.ceil(s/2),l=n?"i * 2, rc.y":"rc.y, i * 2",c=r?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],p=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",d="";a&&(f=i?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+a+"\n        }":"vec4 activation(vec4 x) {\n          "+a+"\n        }",d="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+f+"\n\n      const float sharedDimension = "+u+".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < "+u+"; i++) {\n          vec4 a = getMatrixA(rc.x, "+l+");\n          vec4 b = getMatrixB(rc.x, "+c+");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += ("+h[0]+" * "+p[0]+");\n          result += ("+h[1]+" * "+p[1]+");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        "+v+"\n\n        "+d+"\n\n        setOutput(result);\n      }\n    ";}}(),xi=function(){function t(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(e-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(e-1)+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.seedLoc&&(e.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(e.seedLoc,t);}},t}(),bi=function(){return function(t,e,n,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    ";}}(),wi=function(){return function(t){this.variableNames=["A"],this.outputShape=t;var e=t.length;if(0===e)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{var n=Fo("rc",e),r=jo(e),o=function(t,e,n){if(1===t)return "rc > "+e[0];for(var r="",o=t-2;o<t;o++)r+=n[o]+" >= "+e[o],o<t-1&&(r+="||");return r}(e,t,n),a=function(t,e,n,r){if(1===t)return "";var o=r.slice(-2);return "\n    int r = "+o[0]+";\n    int c = "+o[1]+";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= "+e+";\n    bool rEdge = rp1 >= "+n+";\n  "}(e,t[t.length-1],t[t.length-2],n),i=function(t,e){var n=t.length,r=function(t,e){for(var n=[],r=0;r<=1;r++)for(var o=0;o<=1;o++){for(var a=(0===r?"r":"rp1")+", "+(0===o?"c":"cp1"),i=2;i<t;i++)a=e[e.length-1-i]+","+a;n.push(a);}return n}(n,e);return 1===n?"getA(rc),\n            rc + 1 >= "+t[0]+" ? 0. : getA(rc + 1),\n            0, 0":"getA("+r[0]+"),\n          cEdge ? 0. : getA("+r[1]+"),\n          rEdge ? 0. : getA("+r[2]+"),\n          rEdge || cEdge ? 0. : getA("+r[3]+")"}(t,n);this.userCode="\n        void main() {\n          "+r+" rc = getOutputCoords();\n\n          if("+o+") {\n            setOutput(vec4(0));\n          } else {\n            "+a+"\n\n            setOutput(vec4("+i+"));\n          }\n        }\n      ";}}}();var Ci=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=e.map(function(e,n){return e[0]+t[n]+e[1]});var r=t.length,o=jo(r),a=e.map(function(t){return t[0]}).join(","),i=e.map(function(e,n){return e[0]+t[n]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+o+" start = "+o+"("+a+");\n      "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+o+" coords = outC - start;\n          setOutput(getX("+s+"));\n        }\n      }\n    ":"\n        int start = "+a+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";}}(),Ei=function(){return function(t,e,n){this.variableNames=["x"],this.usesPackedTextures=!0,this.outputShape=e.map(function(e,n){return e[0]+t[n]+e[1]});for(var r=t.length,o=jo(r),a=e.map(function(t){return t[0]}).join(","),i=e.map(function(e,n){return e[0]+t[n]}).join(","),s=Fo("rc",r),u=Fo("source",r),l=s[r-1]+" < "+this.outputShape[r-1],c=1===r?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[r-1]+" += 1;\n       if("+l+") {\n      ",1===r?"":"}\n       rc = outputLoc;\n       "+s[r-2]+" += 1;\n       if("+s[r-2]+" < "+this.outputShape[r-2]+") {",1===r?"":"  "+s[r-1]+" += 1;\n         if("+l+") {"],p=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",f="",d=0,v=1===r?2:4;d<v;d++)f+="\n        "+h[d]+"\n        if ("+p+") {\n          result["+d+"] = float("+n+");\n        } else {\n          "+o+" source = rc - start;\n          result["+d+"] = getChannel(getX("+u.join()+"), "+c+");\n        }\n      ";f+=1===r?"} ":"}}",this.userCode="\n      const "+o+" start = "+o+"("+a+");\n      const "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        "+f+"\n        setOutput(result);\n      }\n    ";}}(),Ri=function(){return function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideHeight,a=t.strideWidth,i=t.dilationHeight,s=t.dilationWidth,u=t.effectiveFilterHeight,l=t.effectiveFilterWidth,c=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;var p="avg"===e,f="0.0";if(p||(f="-1.0 / 1e-20"),n)this.userCode="\n        const ivec2 strides = ivec2("+o+", "+a+");\n        const ivec2 pads = ivec2("+c+", "+h+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+i+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+l+";\n                wC += "+s+") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+l+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var d=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(d="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g="\n      if ("+p+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+o+", "+a+");\n      const ivec2 pads = ivec2("+c+", "+h+");\n      const float initializationValue = "+f+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+f+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+u+";\n            wR += "+i+") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+v+"; wC += 4) {\n            int xC = xCCorner + wC * "+s+";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              getValue(batch, xR, xC + 3 * "+s+", d)\n            );\n\n            "+g+"\n          }\n\n          int xC = xCCorner + "+v+";\n          if ("+(1===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(2===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(3===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              initializationValue\n            );\n\n            "+g+"\n          }\n        }\n        setOutput("+d+");\n      }\n    ";}}}(),Ii=function(){return function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,h=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=t.padInfo.front,d=t.padInfo.top,v=t.padInfo.left;this.outputShape=t.outShape;var m="avg"===e,g="0.0";if(m||(g="-1.0 / 1e-20"),n)this.userCode="\n        const ivec3 strides =\n            ivec3("+o+", "+a+", "+i+");\n        const ivec3 pads = ivec3("+f+", "+d+", "+v+");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < "+c+";\n              wD += "+s+") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int wR = 0; wR < "+h+";\n                wR += "+u+") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int wC = 0; wC < "+p+";\n                  wC += "+l+") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * "+h+" * "+p+" +\n                      wR * "+p+" + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var y=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w="\n      if ("+m+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec3 strides =\n        ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+f+", "+d+", "+v+");\n      const float initializationValue = "+g+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+g+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < "+c+";\n            wD += "+s+") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+";\n            wR += "+u+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+x+"; wC += 4) {\n              int xC = xCCorner + wC * "+l+";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+l+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+l+", ch),\n                getValue(batch, xD, xR, xC + 3 * "+l+", ch)\n              );\n\n              "+w+"\n            }\n\n            int xC = xCCorner + "+x+";\n            if ("+(1===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(2===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+l+", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(3===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+l+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+l+", ch),\n                initializationValue\n              );\n\n              "+w+"\n            }\n          }\n          setOutput("+y+");\n        }\n      }\n    ";}}}(),ki=function(){return function(t,e){this.variableNames=["x"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",s="";"prod"===e?i="1.0":"min"===e?(i="1.0 / 1e-20",s="min"):"max"===e&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===e?u="sumValue":"prod"===e?u="prodValue":"all"===e?u="allValue":"any"===e&&(u="anyValue");var l=4*Math.floor(n/4),c=n%4,h="\n      if ("+("sum"===e)+") {\n        sumValue += dot(values, ones);\n      } else if ("+("prod"===e)+") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = "+s+"(values, minMaxValue);\n      }\n    ",p="vec4";"all"===e?(i="1.0",h="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",p="bvec4"):"any"===e&&(i="0.0",h="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",p="bvec4");var f="";o%n>0&&(f="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+f+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < "+l+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+h+"\n        }\n\n        int inIdx = inOffset + "+l+";\n        if ("+(1===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(2===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(3===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+h+"\n        }\n        setOutput("+u+");\n      }\n    ";}}(),Ni=function(){return function(t,e){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=t;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+="\n        "+o+"\n        "+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+"\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result["+r+"] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        "+(r>0?"}":"")+"\n      ";}this.userCode="\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      "+Bo(["r","c","d"],e)+"\n      return ivec3(r, c, d);\n    }\n  \n      "+Po(t)+"\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = "+t[1]+";\n        int cols = "+t[2]+";\n\n        "+n+"\n\n        setOutput(result);\n      }\n    ";}}();var Si=function(){return function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=l[0]/c[0],p=l[1]/c[1],f=1/h,d=1/p,v=2*Math.ceil(f)+2,m=2*Math.ceil(d)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+p+");\n\n        const float invHeightScale = float("+f+");\n        const float invWidthScale = float("+d+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(o-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(a-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),Ai=function(){return function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],l=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";}}(),Ti=function(){return function(t,e,n,r){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],l=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+",\n          "+u[1]/l[1]+");\n      const vec3 inputShapeRC = vec3("+a+".0, "+i+".0,\n                                     "+i+".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n        \n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < "+(s-1)+"; \n        bool hasNextRow = coords.z < "+(n-1)+";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";}}(),Di=function(){return function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=l[0]/c[0],p=l[1]/c[1],f=1/h,d=1/p,v=2*Math.ceil(f)+2,m=2*Math.ceil(d)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+p+");\n\n        const float invHeightScale = float("+f+");\n        const float invWidthScale = float("+d+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float("+l[0]+") *\n                (float(dyR) / float("+c[0]+"));\n\n            float sourceFracCol =\n                float("+l[1]+") *\n                  (float(dyC) / float("+c[1]+"));\n\n            int sourceNearestRow = int(min(\n                float(int("+o+") - 1),\n                "+n+" ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int("+a+") - 1),\n                "+n+" ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),_i=function(){return function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],l=[r&&e>1?e-1:e,r&&n>1?n-1:n],c=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+c+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";}}(),Oi=function(){return function(t,e){this.variableNames=["x"];var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=t,1!==n){var r=t.map(function(n,r){return function(n){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)}).join(","),o=jo(n);this.userCode="\n      void main() {\n        "+o+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    ";}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+t[0]+" - coord - 1));\n        }\n      ";}}(),Fi=function(){return function(t,e){this.variableNames=["x"],this.usesPackedTextures=!0;var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=t;var r=Fo("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],a=r[n-2]+" + 1 < "+this.outputShape[n-2],i=jo(n);function s(n){var r=t.map(function(r,o){return function(n,r){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - "+r[n]+" - 1":""+r[n]}(o,n)});return "getChannel(getX("+r.join(",")+"), vec2("+r.slice(-2).join(",")+"))"}this.userCode=1===n?"\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX("+t[0]+" - rc - 1),\n            "+t[0]+" - rc - 1);\n          if("+o+"){\n              result.g = getChannel(getX("+t[0]+" - (rc  + 1) - 1),\n                "+t[0]+" - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ":"\n        void main() {\n          "+i+" rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = "+function(t){return s(t)}(r.slice())+";\n          if("+o+"){\n            result.g = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",s(t)}(r.slice())+";\n          }\n          if("+a+") {\n            result.b = "+function(t){return t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            if("+o+") {\n              result.a = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            }\n          }\n          setOutput(result);\n        }\n    ";}}(),Mi=function(){return function(t,e,n,r,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=jo(o.length),u=jo(a.length),l="";1===n?l="i":2===n&&(l="i, j");var c="getIndices("+l+")",h="";1===r?h="i":2===r&&(h="i, coords[1]");var p="getUpdates("+h+")",f=e>1?"strides[j]":"strides";this.userCode="\n        "+s+" strides = "+s+"("+o+");\n\n        void main() {\n          "+u+" coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < "+t+"; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < "+e+"; j++) {\n              int index = round("+c+");\n              flattenedIndex += index * "+f+";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += "+p+";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";}}(),Bi=function(){return function(t,e){this.variableNames=["x","segmentIds"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=t.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,l="\n        sumValue += dot(values, segFilter);\n    ",c="";o%n>0&&(c="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      ");var h="";o%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+c+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+h+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+a+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+a+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+s+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+l+"\n        }\n\n        int inIdx = inOffset + "+s+";\n        if ("+(1===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+l+"\n        } else if ("+(2===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+l+"\n        } else if ("+(3===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+l+"\n        }\n        setOutput(sumValue);\n      }\n    ";}}(),Pi=function(){return function(t,e,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=e,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)o="resRC",r="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<t&&i.push(""+a[u]);r=i.join(),o=s.join();}var l=jo(n);this.userCode="\n      void main() {\n        "+l+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+o+"));\n        } else {\n          setOutput(getB("+o+"));\n        }\n      }\n    ";}}(),Li=function(){function t(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=jo(this.rank),r="uniform int start["+this.rank+"];",o=function(t){if(1===t)return "sourceLoc";if(t<=6)return Wi.slice(0,t).map(function(t){return "sourceLoc."+t}).join(",");throw Error("Slicing for rank "+t+" is not yet supported")}(this.rank);e="\n        "+n+" sourceLoc;\n        "+n+" coords = getOutputCoords();\n        "+t.map(function(t,e){return "sourceLoc."+Wi[e]+" = start["+e+"] + coords."+Wi[e]+";"}).join("\n")+"\n      ",this.userCode="\n      "+r+"\n      void main() {\n        "+e+"\n        setOutput(getSource("+o+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),Wi=["x","y","z","w","u","v"];var Ui=function(){function t(t){this.variableNames=["source"],this.usesPackedTextures=!0,this.outputShape=t,this.rank=t.length;var e=jo(this.rank),n=Fo("coords",this.rank),r=Fo("sourceLoc",this.rank),o=1===this.rank?"sourceLoc":"vec2("+r.slice(-2).join()+")",a="getChannel(getSource("+r.join()+"), "+o+")",i="\n      result.x = "+a+";\n      if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n        ++"+r[this.rank-1]+";\n        result.y = "+a+";\n        --"+r[this.rank-1]+";\n      }\n    ",s=1===this.rank?"":"\n      --"+n[this.rank-1]+";\n      if (++"+n[this.rank-2]+" < "+t[this.rank-2]+") {\n        ++"+r[this.rank-2]+";\n        result.z = "+a+";\n        if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n          ++"+r[this.rank-1]+";\n          result.w = "+a+";\n        }\n      }\n    ",u=this.rank<=4?"sourceLoc = coords +\n            "+e+"("+t.map(function(t,e){return "start["+e+"]"}).join()+");":t.map(function(t,e){return r[e]+" = "+n[e]+" + start["+e+"];"}).join("\n");this.userCode="\n      uniform int start["+this.rank+"];\n      void main() {\n        "+e+" coords = getOutputCoords();\n        "+e+" sourceLoc;\n        "+u+" \n        vec4 result = vec4(0.);\n        "+i+"\n        "+s+"\n        setOutput(result);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),Vi=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=jo(n.length),a=jo(n.length),i="";if(1===r)i="coords * strides + begin";else{var s=0;i=n.map(function(t,e){return s++,1===n.length?"coords * strides["+e+"] + begin["+e+"]":"coords["+(s-1)+"] * strides["+e+"] + begin["+e+"]"}).join(",");}this.userCode="\n      "+o+" begin = "+o+"("+t+");\n      "+o+" strides = "+o+"("+e+");\n\n      void main() {\n        "+a+" coords = getOutputCoords();\n        setOutput(getX("+i+"));\n      }\n    ";}}(),zi=function(){function t(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={};}return t.prototype.acquireTexture=function(t,e,n){var r,o=Gi(e,n),a=Hi(t,o,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var i=this.freeTextures[a].shift();return this.usedTextures[a].push(i),i}return this.numUsedTextures++,this.log(),o===Dt.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Dt.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Dt.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Dt.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Dt.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(r),r},t.prototype.releaseTexture=function(t,e,n,r){if(null!=this.freeTextures){var o=Hi(e,Gi(n,r),r);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[o],i=a.indexOf(t);if(i<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(i,1),this.log();}},t.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")");}},t.prototype.getNumUsedTextures=function(){return this.numUsedTextures},t.prototype.getNumFreeTextures=function(){return this.numFreeTextures},t.prototype.dispose=function(){var t=this;if(null!=this.freeTextures){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(e){t.gpgpu.deleteMatrixTexture(e);});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(e){t.gpgpu.deleteMatrixTexture(e);});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0;}},t}();function Gi(t,e){if(t===Tt.UPLOAD)return Dt.PACKED_2X2_FLOAT32;if(t===Tt.RENDER||null==t)return function(t){return i.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Dt.PACKED_2X2_FLOAT32:Dt.UNPACKED_FLOAT32:t?Dt.PACKED_2X2_FLOAT16:Dt.UNPACKED_FLOAT16}(e);if(t===Tt.DOWNLOAD||t===Tt.PIXELS)return Dt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+t)}function Hi(t,e,n){return t[0]+"_"+t[1]+"_"+e+"_"+n}var qi=function(){return function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[r]*e[r];this.outputShape=n,this.rank=n.length;var o=jo(this.rank),a=function(t){var e=t.length;if(e>5)throw Error("Tile for rank "+e+" is not yet supported");if(1===e)return "imod(resRC, "+t[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],o=0;o<t.length;o++)r.push("imod("+n[o]+", "+t[o]+")");return r.join()}(t);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();var $i=function(){return function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.rank=n.length;var o=jo(this.rank),a=function(t){var e=t.length;if(e>6)throw Error("Transpose for rank "+e+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(e),o=0;o<t.length;o++)r[t[o]]=n[o];return r.join()}(e);this.userCode="\n    void main() {\n      "+o+" resRC = getOutputCoords();\n      setOutput(getA("+a+"));\n    }\n    ";}}();var Ki=function(){return function(t,e){this.variableNames=["A"],this.usesPackedTextures=!0;for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=jo(this.rank),a=Oo("rc",this.rank),i=new Array(this.rank);for(r=0;r<e.length;r++)i[e[r]]=a[r];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+n[this.rank-1],l="getChannel(getA("+i.join()+"), "+s+")";this.userCode="\n    void main() {\n      "+o+" rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = "+l+";\n      if("+u+") {\n        result[1] = "+l+";\n      }\n      --"+a[this.rank-1]+";\n      if(++"+a[this.rank-2]+" < "+n[this.rank-2]+") {\n        result[2] = "+l+";\n        if("+u+") {\n          result[3] = "+l+";\n        }\n      }  \n      setOutput(result);\n    }\n    ";}}(),ji=1.7580993408473768,Xi=1.0507009873554805,Yi=function(){return function(t,e){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      float unaryOperation(float x) {\n        "+e+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}}(),Qi="if (isnan(x)) return x;",Ji="return x;",Zi="return abs(x);",ts=Qi+"\n  return (x < 0.0) ? 0.0 : x;\n",es="return (x >= 0.0) ? x : (exp(x) - 1.0);",ns="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+ji+";\n  float scale = "+Xi+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";var rs="return -x;",os="return ceil(x);",as="return floor(x);",is="return exp(x);",ss="return exp(x) - 1.0;",us=Qi+"\n  return sin(x);\n",ls=Qi+"\n  return cos(x);\n",cs=Qi+"\n  return atan(x);\n",hs=Qi+"\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));",ps=Qi+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;",fs="return x;",ds="return x;",vs="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",ms="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",gs=function(){return function(t,e){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=t,this.userCode="\n      vec4 unaryOperation(vec4 x) {\n        "+e+"\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}}(),ys=function(){return function(t){this.variableNames=["A"],this.usesPackedTextures=!0,this.outputShape=t;var e=t.length,n=Fo("rc",e),r=jo(e),o=function(t,e){if(1===t)return "rc";for(var n="",r=0;r<t;r++)n+=e[r],r<t-1&&(n+=",");return n}(e,n),a=n.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode="\n      void main() {\n        "+r+" rc = getOutputCoords();\n        vec4 packedInput = getA("+o+");\n\n        setOutput(getChannel(packedInput, "+i+"));\n      }\n    ";}}(),xs={};function bs(t,e){if(void 0===e&&(e=!1),"linear"===t)return e?ds:Ji;if("relu"===t)return e?vs:ts;if("elu"===t)return e?ms:es;if("prelu"===t)return e?ca:ua;throw new Error("Activation "+t+" has not been implemented for the WebGL backend.")}var ws=600;var Cs=function(){function t(t){if(this.gpgpu=t,this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.warnedAboutMemory=!1,this.disposed=!1,!i.getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(null==t){var e=Mt(i.getNumber("WEBGL_VERSION"));this.binaryCache=(n=i.getNumber("WEBGL_VERSION"))in xs?xs[n]:(xs[n]={},xs[n]),this.gpgpu=new ci(e),this.canvas=e.canvas,this.gpgpuCreatedLocally=!0;}else this.binaryCache={},this.gpgpuCreatedLocally=!1,this.canvas=t.gl.canvas;var n;this.textureManager=new zi(this.gpgpu),this.numMBBeforeWarning=null==i.global.screen?1024:i.global.screen.height*i.global.screen.width*window.devicePixelRatio*ws/1024/1024,this.texData=new Jr(this,St);}return t.prototype.register=function(t,e,n){if(this.texData.has(t))throw new Error("Data buffer is already registered");this.texData.set(t,{shape:e,dtype:n});},t.prototype.fromPixels=function(t,e){if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n="undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement,r=t.data instanceof Uint8Array,o="undefined"!=typeof ImageData&&t instanceof ImageData,a="undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement,s="undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement,u=a?[t.videoWidth,t.videoHeight]:[t.width,t.height],l=u[0],c=u[1],h=[c,l],p=[c,l,e];if(!(n||r||o||a||s))throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);(s||a)&&(null==this.fromPixels2DContext&&(this.fromPixels2DContext=Bt(i.getNumber("WEBGL_VERSION")).getContext("2d")),this.fromPixels2DContext.canvas.width=l,this.fromPixels2DContext.canvas.height=c,this.fromPixels2DContext.drawImage(t,0,0,l,c),t=this.fromPixels2DContext.canvas);var f,d,v=this.makeTensorHandle(h,"int32");if(this.texData.get(v.dataId).usage=Tt.PIXELS,this.gpgpu.uploadPixelDataToTexture(this.getTexture(v.dataId),t),i.getBool("WEBGL_PACK")){f=new Ga(p);var m=this.makePackedTensor(f.outputShape,v.dtype);d=this.compileAndRun(f,[v],m);}else f=new za(p),d=this.compileAndRun(f,[v]);return this.disposeData(v.dataId),d},t.prototype.makeTensorHandle=function(t,e){var n={};return this.register(n,t,e),{dataId:n,shape:t,dtype:e}},t.prototype.write=function(t,e){if(null==e)throw new Error("MathBackendWebGL.write(): values can not be null");if(i.getBool("DEBUG"))for(var n=0;n<e.length;n++){var r=e[n];if(!Ht(r)){if(i.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error("The value "+r+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.ENV.set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");throw Error("The value "+r+" cannot be represented on this device.")}}var o=this.texData.get(t);if("complex64"===o.dtype)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.releaseGPUData(t),o.usage=Tt.UPLOAD,o.values=e;},t.prototype.readSync=function(t){var e=this.texData.get(t),n=e.values,r=e.dtype,o=e.complexTensors,a=e.slice,i=e.shape,s=e.isPacked;if(null!=a){var u=void 0;u=s?new gs(i,fs):new Yi(i,fs);var l=this.compileAndRun(u,[{dataId:t,shape:i,dtype:r}]),c=this.readSync(l.dataId);return l.dispose(),c}if(null!=n)return this.convertAndCacheOnCPU(t);if("string"===r)return n;var h,p,f=null!=this.activeTimers;(f&&(h=$()),"complex64"===r)?p=bo(o.real.dataSync(),o.imag.dataSync()):p=this.getValuesFromTexture(t);return f&&(this.downloadWaitMs+=$()-h),this.convertAndCacheOnCPU(t,p)},t.prototype.read=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,s,u,l,c,h,p,f,d,v,m,y,x,b,w,C,E,R,I;return r(this,function(r){switch(r.label){case 0:if(this.pendingRead.has(t))return e=this.pendingRead.get(t),[2,new Promise(function(t){return e.push(t)})];if(n=this.texData.get(t),o=n.values,a=n.shape,s=n.slice,u=n.dtype,l=n.complexTensors,c=n.isPacked,null!=s)return h=void 0,h=c?new gs(a,fs):new Yi(a,fs),p=this.compileAndRun(h,[{dataId:t,shape:a,dtype:u}]),f=this.read(p.dataId),p.dispose(),[2,f];if(null!=o)return [2,this.convertAndCacheOnCPU(t)];if(!i.getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===i.getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,"complex64"!==u&&i.get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),d=(I=this.gpgpu).createBufferFromTexture.apply(I,[m.texture].concat(Lt(a)))),this.pendingRead.set(t,[]),"complex64"===u?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:r.sent(),r.label=2;case 2:return "complex64"!==u?[3,4]:[4,Promise.all([l.real.data(),l.imag.data()])];case 3:return x=r.sent(),b=x[0],w=x[1],y=bo(b,w),[3,5];case 4:null==d?y=this.getValuesFromTexture(t):(C=g(a),y=this.gpgpu.downloadFloat32MatrixFromBuffer(d,C)),r.label=5;case 5:return null!=v&&this.disposeData(v.dataId),E=this.convertAndCacheOnCPU(t,y),R=this.pendingRead.get(t),this.pendingRead.delete(t),R.forEach(function(t){return t(E)}),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)),[2,E]}})})},t.prototype.getValuesFromTexture=function(t){var e,n=this,r=this.texData.get(t),o=r.shape,a=r.dtype,s=r.isPacked,u=g(o);if(i.getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var l=this.decode(t),c=this.texData.get(l.dataId),h=(e=this.gpgpu).downloadMatrixFromPackedTexture.apply(e,[c.texture].concat(Lt(o))).subarray(0,u);return this.disposeData(l.dataId),h}var p=i.getBool("WEBGL_PACK")&&!0===s,f=p?xe(o):o,d=this.makeTensorHandle(f,"float32");d.size=g(o),this.texData.get(d.dataId).usage=Tt.DOWNLOAD;var v=Ue(function(){var e=p?new Ma(f):new Fa(f);return n.compileAndRun(e,[{shape:f,dtype:a,dataId:t}],d,null)}),m=this.texData.get(v.dataId),y=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(d.dataId),y},t.prototype.time=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return r(this,function(r){switch(r.label){case 0:return e=this.activeTimers,n=[],o=!1,null==this.programTimersStack?(this.programTimersStack=n,o=!0):this.activeTimers.push(n),this.activeTimers=n,t(),a=m(this.activeTimers.map(function(t){return t.query})).filter(function(t){return null!=t}),i=m(this.activeTimers.map(function(t){return t.name})).filter(function(t){return null!=t}),this.activeTimers=e,o&&(this.programTimersStack=null),[4,Promise.all(a)];case 1:return s=r.sent(),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:p(s),getExtraProfileInfo:function(){return s.map(function(t,e){return {name:i[e],ms:t}}).map(function(t){return t.name+": "+t.ms}).join(", ")},wallMs:null},this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return {unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?this.gpgpu.beginQuery():{startMs:$(),endMs:null}},t.prototype.endTimer=function(t){return i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(this.gpgpu.endQuery(),t):(t.endMs=$(),t)},t.prototype.getQueryTime=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(e=t).endMs-e.startMs]})})},t.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t))if(this.pendingRead.has(t))this.pendingDisposal.add(t);else if(this.texData.has(t)){this.releaseGPUData(t);var e=this.texData.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.texData.delete(t);}},t.prototype.releaseGPUData=function(t){var e=this.texData.get(t),n=e.texture,r=e.dtype,o=e.texShape,a=e.usage,i=e.isPacked,s=e.slice,u=s&&s.origDataId||t,l=this.dataRefCount.get(u);l>1?this.dataRefCount.set(u,l-1):(this.dataRefCount.delete(u),null!=n&&(this.numBytesInGPU-=this.computeBytes(o,r),this.textureManager.releaseTexture(n,o,a,i)));var c=this.texData.get(t);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null;},t.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},t.prototype.getDataInfo=function(t){return this.texData.get(t)},t.prototype.getCPUBackend=function(){return i.getBool("WEBGL_CPU_FORWARD")?(null==this.cpuBackend&&(this.cpuBackend=St.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(t,e){var n=this;return void 0===e&&(e=128),null!=this.getCPUBackend()&&t.every(function(t){return null==n.texData.get(t.dataId).texture&&t.size<e})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(t,e){var n=this.makeOutputArray(t.shape,"complex64");return this.texData.get(n.dataId).complexTensors={real:St.keep(t.clone()),imag:St.keep(e.clone())},n},t.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},t.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},t.prototype.slice=function(t,e,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,e,n);if(0===g(n))return xn([],n,t.dtype);var r=this.texData.get(t.dataId).isPacked,o=Vr(t.shape,e,n);if(r||!o){var a=i.getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ui(n):new Li(n),s=a.getCustomSetupFunc(e);return this.compileAndRun(a,[t],null,s)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,e,n)},t.prototype.shallowSlice=function(t,e,n){var r=this.texData.get(t.dataId),o=ct.make(n,{},t.dtype,this),a=this.texData.get(o.dataId);Object.assign(a,r),a.shape=n,a.dtype=t.dtype;var i=zr(e,t.strides);r.slice&&(i+=r.slice.flatOffset),a.slice={flatOffset:i,origDataId:r.slice&&r.slice.origDataId||t.dataId};var s=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,s+1),o},t.prototype.stridedSlice=function(t,e,n,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,e,n,r);var o=Lr(e,n,r);if(o.some(function(t){return 0===t}))return xn([],o);var a=new Vi(e,r,o);return this.compileAndRun(a,[t])},t.prototype.reverse=function(t,e){var n=i.getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Fi(t.shape,e):new Oi(t.shape,e);return this.compileAndRun(n,[t])},t.prototype.concat=function(t,e){if("complex64"===t[0].dtype){var n=t.map(function(t){return gn(t)}),r=t.map(function(t){return yn(t)});return mn(this.concat(n,e),this.concat(r,e))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,e);if(1===t.length)return t[0];if(t.length>i.getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var o=Math.floor(t.length/2),a=this.concat(t.slice(0,o),e),s=this.concat(t.slice(o),e);return this.concat([a,s],e)}if(i.getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var u=new ma(t.map(function(t){return t.shape}),e);return this.compileAndRun(u,t)}var l=dn(t.map(function(t){return t.shape}),e),c=t.map(function(t){return t.as2D(-1,g(t.shape.slice(e)))}),h=new va(c.map(function(t){return t.shape}));return this.compileAndRun(h,c).reshape(l)},t.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,rs,t.dtype);var e=new Yi(t.shape,rs);return this.compileAndRun(e,[t])},t.prototype.batchMatMul=function(t,e,n,r){var o=n?t.shape[2]:t.shape[1],a=r?e.shape[1]:e.shape[2],i=n?t.shape[1]:t.shape[2],s=t.shape[0];if((1===o||1===a)&&i>1e3){n&&(t=t.transpose([0,2,1])),r&&(e=e.transpose([0,2,1]));var u=1===a?t:t.as3D(s,i,1),l=1===a?2:1,c=1===a?e.as3D(s,1,i):e;return this.multiply(u,c).sum(l,!0)}var h=xt(t.dtype,e.dtype),p=new yi(t.shape,[s,o,a],n,r),f=this.makePackedTensor(p.outputShape,h);return this.compileAndRun(p,[t,e],f)},t.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=r?e.shape[2]:e.shape[1],l=o?n.shape[1]:n.shape[2],c=e.shape[0],h=xt(e.dtype,n.dtype),p=null!=a,f=null!=s,d=i?bs(i,!0):null,v=new yi(e.shape,[c,u,l],r,o,p,d,f),m=this.makePackedTensor(v.outputShape,h),g=[e,n];return a&&g.push(a),s&&g.push(s),this.compileAndRun(v,g,m)},t.prototype.multiply=function(t,e){if("complex64"===t.dtype){var n=this.texData.get(t.dataId),r=this.texData.get(e.dataId),o=new oa(na,t.shape,e.shape),a=new oa(ra,t.shape,e.shape),s=[this.makeComplexComponentTensorHandle(t,n.complexTensors.real),this.makeComplexComponentTensorHandle(t,n.complexTensors.imag),this.makeComplexComponentTensorHandle(e,r.complexTensors.real),this.makeComplexComponentTensorHandle(e,r.complexTensors.imag)],u=this.compileAndRun(o,s),l=this.compileAndRun(a,s),c=this.complex(u,l);return u.dispose(),l.dispose(),c}if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.multiply(t,e);if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,sa,t.dtype);var h=new la(sa,t.shape,e.shape),p=this.makeOutputArray(h.outputShape,t.dtype);return this.compileAndRun(h,[t,e],p)},t.prototype.batchNormalization=function(t,e,n,r,o,a){var s=[t,e,n],u=null;null!=a&&(u=a.shape,s.push(a));var l=null;if(null!=o&&(l=o.shape,s.push(o)),i.getBool("WEBGL_PACK_NORMALIZATION")){var c=new ea(t.shape,e.shape,n.shape,u,l,r);return this.compileAndRun(c,s)}var h=new ta(t.shape,e.shape,n.shape,u,l,r);return this.compileAndRun(h,s)},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){var a=i.getBool("WEBGL_PACK_NORMALIZATION")?new vi(t.shape,e,n,r,o):new fi(t.shape,e,n,r,o);return this.compileAndRun(a,[t])},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){var s=new di(e.shape,r,o,a,i);return this.compileAndRun(s,[e,n,t])},t.prototype.tile=function(t,e){if("string"===t.dtype){var n=this.readSync(t.dataId).map(function(t){return X(t)});return No(Zn(t.shape,t.dtype,n),e)}var r=new qi(t.shape,e);return this.compileAndRun(r,[t])},t.prototype.pad=function(t,e,n){var r=i.getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ei(t.shape,e,n):new Ci(t.shape,e,n);return this.compileAndRun(r,[t])},t.prototype.transpose=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,e);var n=i.getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ki(t.shape,e):new $i(t.shape,e);return this.compileAndRun(n,[t])},t.prototype.gather=function(t,e,n){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.gather(t,e,n);var r=new Ha(t.shape,e.size,n);return this.compileAndRun(r,[t,e])},t.prototype.batchToSpaceND=function(t,e,n){f(t.rank<=4,function(){return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var r=e.reduce(function(t,e){return t*e}),o=Nr(t.shape,e,r),a=Sr(o.length,e.length),i=Ar(t.shape,e,r),s=Tr(n,e.length),u=Dr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},t.prototype.spaceToBatchND=function(t,e,n){f(t.rank<=4,function(){return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var r=e.reduce(function(t,e){return t*e}),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=Nr(i.shape,e,r,!1),u=Sr(s.length,e.length,!1),l=Ar(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(l)},t.prototype.reduce=function(t,e,n){var r=t.shape[0],o=t.shape[1],a=Fr(o),i=new ki({windowSize:a,inSize:o,batchSize:r},e),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],n);return this.compileAndRun(i,[t],c),1===c.shape[1]?c:this.reduce(c,e,n)},t.prototype.argReduce=function(t,e,n){void 0===n&&(n=null);var r=t.shape[0],o=t.shape[1];null!=n&&(r=n.shape[0],o=n.shape[1]);var a=Fr(o),i=new _o({windowSize:a,inSize:o,batchSize:r},e,null==n),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],"int32"),h=[t];return null!=n&&h.push(n),this.compileAndRun(i,h,c),1===c.shape[1]?c:this.argReduce(t,e,c)},t.prototype.argReducePacked=function(t,e,n){void 0===n&&(n=null);var r=null!=n?n.shape:t.shape,o=Fr(r[r.length-1]),a=new Qo(r,o,e,null==n),i=this.makePackedTensor(a.outputShape,"int32"),s=null==n?[t]:[t,n];return this.compileAndRun(a,s,i),i.rank===t.rank?this.argReducePacked(t,e,i):i},t.prototype.sum=function(t,e){ln("sum",e,t.rank);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o),i=bt(t.dtype);return this.reduce(a,"sum",i).reshape(r)},t.prototype.prod=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,e);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o),i=bt(t.dtype);return this.reduce(a,"prod",i).reshape(r)},t.prototype.unsortedSegmentSum=function(t,e,n){var r=0,o=cn([r],t.rank),a=t;null!=o&&(a=t.transpose(o),r=pn(1,t.rank)[0]);var i=function(t,e,n){for(var r=[],o=t.length,a=0;a<o;a++)a!==e?r.push(t[a]):r.push(n);return r}(a.shape,r,n),s=g([a.shape[r]]),u=a.as2D(-1,s),l=bt(t.dtype),c=this.segOpCompute(u,"unsortedSegmentSum",e,l,n).reshape(i);return null!=o&&(c=c.transpose(hn(o))),c},t.prototype.segOpCompute=function(t,e,n,r,o){var a=t.shape[0],i=t.shape[1],s=function(t,e){var n,r=!1;for(t<=Or?(n=t,r=!0):n=U(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=U(t,n+1);return n}(i,o),u=new Bi({windowSize:s,inSize:i,batchSize:a,numSegments:o},e),l=u.outputShape,c=l[0],h=l[1],p=this.makeOutputArray([c,h],r);return this.compileAndRun(u,[t,n],p),p.shape[1]===o?p:(n=_n(0,o).tile([i/s]),this.segOpCompute(p,e,n,r,o))},t.prototype.argMinMaxReduce=function(t,e,n){var r=[e];if(ln("arg"+n.charAt(0).toUpperCase()+n.slice(1),r,t.rank),!i.getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var o=sn(t.shape,r),a=o[0],s=g(o[1]),u=t.as2D(-1,s);return this.argReduce(u,n).reshape(a)}return this.argReducePacked(t,n)},t.prototype.argMin=function(t,e){return this.argMinMaxReduce(t,e,"min")},t.prototype.argMax=function(t,e){return this.argMinMaxReduce(t,e,"max")},t.prototype.cumsum=function(t,e,n,r){if(e!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+e);var o=new Sa(t.shape,n,r);return this.compileAndRun(o,[t])},t.prototype.equal=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(equal(a, b));\n","bool");var n=new la("return float(a == b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.notEqual=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(notEqual(a, b));\n","bool");var n=new la("return float(a != b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.less=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.less(t,e);if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThan(a, b));\n","bool");var n=new la("return float(a < b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.lessEqual=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThanEqual(a, b));\n","bool");var n=new la("return float(a <= b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.greater=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.greater(t,e);if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThan(a, b));\n","bool");var n=new la("return float(a > b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.greaterEqual=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThanEqual(a, b));\n","bool");var n=new la("return float(a >= b);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.logicalNot=function(t){var e=new Yi(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(e,[t])},t.prototype.logicalAnd=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n","bool");var n=new la("return float(a >= 1.0 && b >= 1.0);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.logicalOr=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n","bool");var n=new la("return float(a >= 1.0 || b >= 1.0);",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[t,e],r)},t.prototype.select=function(t,e,n){var r=new Pi(t.rank,e.shape,e.rank),o=this.makeOutputArray(r.outputShape,xt(e.dtype,n.dtype));return this.compileAndRun(r,[t,e,n],o)},t.prototype.where=function(t){Ze("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var e=t.dataSync();return Ao(t.shape,e)},t.prototype.topk=function(t,e,n){return So(t.dataSync(),t.shape,t.dtype,e)},t.prototype.min=function(t,e){ln("min",e,t.rank);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o);return this.reduce(a,"min",a.dtype).reshape(r)},t.prototype.minimum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.minimum(t,e);var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new la("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.mod=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new la("if (b == 0.0) return NAN;\n  return mod(a, b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.max=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,e);ln("max",e,t.rank);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o);return this.reduce(a,"max",a.dtype).reshape(r)},t.prototype.maximum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.maximum(t,e);var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new la("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.all=function(t,e){ln("all",e,t.rank);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o);return this.reduce(a,"all",a.dtype).reshape(r)},t.prototype.any=function(t,e){ln("any",e,t.rank);var n=sn(t.shape,e),r=n[0],o=g(n[1]),a=t.as2D(-1,o);return this.reduce(a,"any",a.dtype).reshape(r)},t.prototype.squaredDifference=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("return (a - b) * (a - b);",t.shape,e.shape):new la("return (a - b) * (a - b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.realDivide=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS")){return this.packedBinaryOp(t,e,"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(b.x == 0.0) {\n    result.x = NAN;\n  } else if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(b.y == 0.0) {\n    result.y = NAN;\n  } else if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(b.z == 0.0) {\n    result.z = NAN;\n  } else if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(b.w == 0.0) {\n    result.w = NAN;\n  } else if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n","float32",!0)}var n=new la("\nif (b == 0.0) {\n  return NAN;\n}\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[t,e],r)},t.prototype.floorDiv=function(t,e){if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n","int32");var n=new la("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",t.shape,e.shape),r=this.makeOutputArray(n.outputShape,"int32");return this.compileAndRun(n,[t,e],r)},t.prototype.add=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,aa);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.add(t,e);var n=xt(t.dtype,e.dtype);if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,aa,n);var r=new la(aa,t.shape,e.shape),o=this.makeOutputArray(r.outputShape,n);return this.compileAndRun(r,[t,e],o)},t.prototype.packedUnaryOp=function(t,e,n){var r=new gs(t.shape,e),o=this.makePackedTensor(r.outputShape,n);return this.compileAndRun(r,[t],o)},t.prototype.packedBinaryOp=function(t,e,n,r,o){void 0===o&&(o=!1);var a=new ha(n,t.shape,e.shape,o),i=this.makePackedTensor(a.outputShape,r);return this.compileAndRun(a,[t,e],i)},t.prototype.complexSeparableBinaryOp=function(t,e,n){var r=this,o=this.texData.get(t.dataId),a=this.texData.get(e.dataId),i=[[o.complexTensors.real,a.complexTensors.real],[o.complexTensors.imag,a.complexTensors.imag]].map(function(o){var a=o[0],i=o[1],s=r.makeComplexComponentTensorHandle(t,a),u=r.makeComplexComponentTensorHandle(e,i),l=new la(n,t.shape,e.shape),c=r.makeOutputArray(l.outputShape,xt(a.dtype,i.dtype));return r.compileAndRun(l,[s,u],c)}),s=i[0],u=i[1],l=this.complex(s,u);return s.dispose(),u.dispose(),l},t.prototype.makeComplexComponentTensorHandle=function(t,e){return {dataId:e.dataId,dtype:e.dtype,shape:t.shape}},t.prototype.addN=function(t){if(1===t.length)return t[0];if(t.length>i.get("WEBGL_MAX_TEXTURES_IN_SHADER")){var e=Math.floor(t.length/2),n=this.addN(t.slice(0,e)),r=this.addN(t.slice(e));return this.addN([n,r])}var o=t.map(function(t){return t.dtype}).reduce(function(t,e){return xt(t,e)}),a=t.map(function(t){return t.shape}),s=i.getBool("WEBGL_PACK"),u=s?new Do(t[0].shape,a):new To(t[0].shape,a),l=s?this.makePackedTensor(u.outputShape,o):this.makeOutputArray(u.outputShape,o);return this.compileAndRun(u,t,l)},t.prototype.subtract=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,ia);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.subtract(t,e);var n=xt(t.dtype,e.dtype);if(i.getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,ia,t.dtype);var r=new la(ia,t.shape,e.shape),o=this.makeOutputArray(r.outputShape,n);return this.compileAndRun(r,[t,e],o)},t.prototype.pow=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS"),r=n?new ha("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new la("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",t.shape,e.shape),o=xt(t.dtype,e.dtype),a=n?this.makePackedTensor(r.outputShape,o):this.makeOutputArray(r.outputShape,o);return this.compileAndRun(r,[t,e],a)},t.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,os,t.dtype);var e=new Yi(t.shape,os);return this.compileAndRun(e,[t])},t.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,as,t.dtype);var e=new Yi(t.shape,as);return this.compileAndRun(e,[t])},t.prototype.sign=function(t){var e=new Yi(t.shape,"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");return this.compileAndRun(e,[t])},t.prototype.isNaN=function(t){var e=new Yi(t.shape,"return float(isnan(x));"),n=this.makeOutputArray(e.outputShape,"bool");return this.compileAndRun(e,[t],n)},t.prototype.isInf=function(t){var e=new Yi(t.shape,"return float(isinf(x));"),n=this.makeOutputArray(e.outputShape,"bool");return this.compileAndRun(e,[t],n)},t.prototype.isFinite=function(t){var e=new Yi(t.shape,"return float(!isnan(x) && !isinf(x));"),n=this.makeOutputArray(e.outputShape,"bool");return this.compileAndRun(e,[t],n)},t.prototype.round=function(t){var e=new Yi(t.shape,"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");return this.compileAndRun(e,[t])},t.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,is,t.dtype);var e=new Yi(t.shape,is);return this.compileAndRun(e,[t])},t.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ss,t.dtype);var e=new Yi(t.shape,ss);return this.compileAndRun(e,[t])},t.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,"\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n",t.dtype);var e=new Yi(t.shape,"if (x < 0.0) return NAN;\n  return log(x);");return this.compileAndRun(e,[t])},t.prototype.log1p=function(t){var e=new Yi(t.shape,"return log(1.0 + x);");return this.compileAndRun(e,[t])},t.prototype.sqrt=function(t){var e=new Yi(t.shape,"return sqrt(x);");return this.compileAndRun(e,[t])},t.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var e=new Yi(t.shape,"return inversesqrt(x);");return this.compileAndRun(e,[t])},t.prototype.square=function(t){var e=new Yi(t.shape,"return x * x;");return this.compileAndRun(e,[t])},t.prototype.reciprocal=function(t){var e=new Yi(t.shape,"return 1.0 / x;");return this.compileAndRun(e,[t])},t.prototype.relu=function(t){var e;return e=i.getBool("WEBGL_PACK")?new gs(t.shape,vs):new Yi(t.shape,ts),this.compileAndRun(e,[t])},t.prototype.prelu=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha(ca,t.shape,e.shape):new la(ua,t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.elu=function(t){if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ms,t.dtype);var e=new Yi(t.shape,es);return this.compileAndRun(e,[t])},t.prototype.eluDer=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",t.shape,e.shape):new la("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.selu=function(t){var e=new Yi(t.shape,ns);return this.compileAndRun(e,[t])},t.prototype.int=function(t){var e=new Yi(t.shape,"return float(int(x));"),n=this.makeOutputArray(e.outputShape,"int32");return this.compileAndRun(e,[t],n)},t.prototype.clip=function(t,e,n){var r,o=(r=i.getBool("WEBGL_PACK_CLIP")?new fa(t.shape):new pa(t.shape)).getCustomSetupFunc(e,n);return this.compileAndRun(r,[t],null,o)},t.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(i.getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Zi,t.dtype);var e=new Yi(t.shape,Zi);return this.compileAndRun(e,[t])},t.prototype.complexAbs=function(t){var e=this.texData.get(t.dataId),n=new da(t.shape),r=[this.makeComplexComponentTensorHandle(t,e.complexTensors.real),this.makeComplexComponentTensorHandle(t,e.complexTensors.imag)];return this.compileAndRun(n,r)},t.prototype.sigmoid=function(t){var e=new Yi(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(e,[t])},t.prototype.softplus=function(t){var e=new Yi(t.shape,"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");return this.compileAndRun(e,[t])},t.prototype.sin=function(t){var e=new Yi(t.shape,us);return this.compileAndRun(e,[t])},t.prototype.cos=function(t){var e=new Yi(t.shape,ls);return this.compileAndRun(e,[t])},t.prototype.tan=function(t){var e=new Yi(t.shape,"return tan(x);");return this.compileAndRun(e,[t])},t.prototype.asin=function(t){var e=new Yi(t.shape,"return asin(x);");return this.compileAndRun(e,[t])},t.prototype.acos=function(t){var e=new Yi(t.shape,"return acos(x);");return this.compileAndRun(e,[t])},t.prototype.atan=function(t){var e=new Yi(t.shape,cs);return this.compileAndRun(e,[t])},t.prototype.atan2=function(t,e){var n=i.getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ha("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new la("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},t.prototype.sinh=function(t){var e=new Yi(t.shape,"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},t.prototype.cosh=function(t){var e=new Yi(t.shape,"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},t.prototype.tanh=function(t){var e=new Yi(t.shape,"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");return this.compileAndRun(e,[t])},t.prototype.asinh=function(t){var e=new Yi(t.shape,"return log(x + sqrt(x * x + 1.0));");return this.compileAndRun(e,[t])},t.prototype.acosh=function(t){var e=new Yi(t.shape,hs);return this.compileAndRun(e,[t])},t.prototype.atanh=function(t){var e=new Yi(t.shape,ps);return this.compileAndRun(e,[t])},t.prototype.erf=function(t){var e=new Yi(t.shape,'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n');return this.compileAndRun(e,[t])},t.prototype.step=function(t,e){var n=new Yi(t.shape,function(t){return void 0===t&&(t=0),Qi+"\n    return x > 0.0 ? 1.0 : float("+t+");\n  "}(e));return this.compileAndRun(n,[t])},t.prototype.conv2dByMatMul=function(t,e,n,r,o,a){var s=t.shape,u=this.texData.get(t.dataId),l=n.inChannels,c=s[0]*s[1]*s[2],h=n.outChannels,p="channelsLast"===n.dataFormat,d=(1===c||1===h)&&l>1e3,v=s[2]%2!=0&&!!u.isPacked;if(d||!i.getBool("WEBGL_LAZILY_UNPACK")||!i.getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=p?s[0]*s[1]*s[2]:s[0]*s[2]*s[3],g=this.reshape(t,[1,m,n.inChannels]),y=this.reshape(e,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),n.outShape)}var x=p?s[0]*s[1]*(s[2]+1):s[0]*s[2]*(s[3]+1),b=ct.make([1,x,n.inChannels],{dataId:t.dataId},t.dtype,this),w=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,f(Ce(u.shape,b.shape),function(){return "packed reshape "+u.shape+" to "+b.shape+" isn't free"});var C=this.reshape(e,[1,n.inChannels,n.outChannels]),E=this.fusedBatchMatMul({a:b,b:C,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),R=this.texData.get(E.dataId);return f(R.isPacked,function(){return "batchMatMul result is expected to be packed"}),u.shape=w,R.shape=n.outShape,ct.make(n.outShape,{dataId:E.dataId},E.dtype,this)},t.prototype.conv2dWithIm2Row=function(t,e,n,r,o,a){var i=n.filterWidth,s=n.filterHeight,u=n.inChannels,l=n.outWidth,c=n.outHeight,h="channelsLast"===n.dataFormat,p=i*s*u,f=c*l,d=[p,f],v=t.squeeze([0]),m=e.reshape([1,p,-1]),g=new pi(d,v.shape,n),y=this.compileAndRun(g,[v]).reshape([1,d[0],d[1]]),x=null!=r,b=null!=a,w=o?bs(o,!0):null,C=new yi(y.shape,[1,f,n.outChannels],!0,!1,x,w,b),E=[y,m];r&&E.push(r),b&&E.push(a);var R=this.compileAndRun(C,E);return h?R.reshape([1,c,l,n.outChannels]):R.reshape([1,n.outChannels,c,l])},t.prototype.fusedConv2d=function(t,e,n,r,o,a){if(1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type))return this.conv2dByMatMul(t,e,n,r,o,a);if(i.getBool("WEBGL_CONV_IM2COL")&&1===t.shape[0])return this.conv2dWithIm2Row(t,e,n,r,o,a);var s=null!=r,u=null!=a,l=o?bs(o,!1):null,c=new Ea(n,s,l,u),h=[t,e];return r&&h.push(r),a&&h.push(a),this.compileAndRun(c,h)},t.prototype.conv2d=function(t,e,n){if(1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type))return this.conv2dByMatMul(t,e,n);if(i.getBool("WEBGL_CONV_IM2COL")&&1===t.shape[0])return this.conv2dWithIm2Row(t,e,n);var r=new Ea(n);return this.compileAndRun(r,[t,e])},t.prototype.conv2dDerInput=function(t,e,n){var r=new ya(n);return this.compileAndRun(r,[t,e])},t.prototype.conv2dDerFilter=function(t,e,n){var r=new ga(n);return this.compileAndRun(r,[t,e])},t.prototype.depthwiseConv2D=function(t,e,n){var r;return i.getBool("WEBGL_PACK_DEPTHWISECONV")&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?(r=new ka(n),this.compileAndRun(r,[t,e],this.makePackedTensor(n.outShape,t.dtype))):(r=new Ia(n),this.compileAndRun(r,[t,e]))},t.prototype.depthwiseConv2DDerInput=function(t,e,n){var r=new Ca(n);return this.compileAndRun(r,[t,e])},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){var r=new wa(n);return this.compileAndRun(r,[t,e])},t.prototype.conv3d=function(t,e,n){var r=new Ra(n);return this.compileAndRun(r,[t,e])},t.prototype.conv3dDerInput=function(t,e,n){var r=new ba(n);return this.compileAndRun(r,[t,e])},t.prototype.conv3dDerFilter=function(t,e,n){var r=new xa(n);return this.compileAndRun(r,[t,e])},t.prototype.maxPool=function(t,e){var n=new Ri(e,"max",!1),r=this.makeOutputArray(n.outputShape,t.dtype);return this.compileAndRun(n,[t],r)},t.prototype.avgPool=function(t,e){var n=new Ri(e,"avg",!1),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[t],r)},t.prototype.maxPoolBackprop=function(t,e,n,r){var o=new Ri(r,"max",!0),a=this.compileAndRun(o,[e]),i=new mi(r),s=this.makeOutputArray(i.outputShape,e.dtype),u=this.compileAndRun(i,[t,a],s);return a.dispose(),u},t.prototype.avgPoolBackprop=function(t,e,n){var r=new Jo(n),o=this.makeOutputArray(r.outputShape,e.dtype);return this.compileAndRun(r,[t],o)},t.prototype.cast=function(t,e){return mo(t,e,this)},t.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},t.prototype.avgPool3d=function(t,e){var n=new Ii(e,"avg",!1),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[t],r)},t.prototype.avgPool3dBackprop=function(t,e,n){var r=new Zo(n),o=this.makeOutputArray(r.outputShape,e.dtype);return this.compileAndRun(r,[t],o)},t.prototype.maxPool3d=function(t,e){var n=new Ii(e,"max",!1),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[t],r)},t.prototype.maxPool3dBackprop=function(t,e,n,r){var o=new Ii(r,"max",!0),a=this.compileAndRun(o,[e]),i=new gi(r),s=this.makeOutputArray(i.outputShape,e.dtype),u=this.compileAndRun(i,[t,a],s);return a.dispose(),u},t.prototype.reshape=function(t,e){var n=this.texData.get(t.dataId);return !n.isPacked||Ce(t.shape,e)||null!==n.texture&&Ce(n.shape,e)?go(t,e):this.packedReshape(t,e)},t.prototype.resizeBilinear=function(t,e,n,r){var o=i.getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Ti(t.shape,e,n,r):new Ai(t.shape,e,n,r);return this.compileAndRun(o,[t])},t.prototype.resizeBilinearBackprop=function(t,e,n){var r=new Si(t,e,n);return this.compileAndRun(r,[t])},t.prototype.resizeNearestNeighbor=function(t,e,n,r){var o=new _i(t.shape,e,n,r);return this.compileAndRun(o,[t])},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){var r=new Di(t,e,n);return this.compileAndRun(r,[t])},t.prototype.multinomial=function(t,e,n,r){var o=e?t:Yr(t),a=o.shape[0],i=o.shape[1],s=new xi(a,i,n),u=this.makeOutputArray(s.outputShape,"int32"),l=s.getCustomSetupFunc(r);return this.compileAndRun(s,[o],u,l)},t.prototype.oneHot=function(t,e,n,r){var o=new bi(t.size,e,n,r);return this.compileAndRun(o,[t])},t.prototype.diag=function(t){var e=new Oa(t.size);return this.compileAndRun(e,[t])},t.prototype.nonMaxSuppression=function(t,e,n,r,o){return Ze("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ro(t.dataSync(),e.dataSync(),n,r,o)},t.prototype.cropAndResize=function(t,e,n,r,o,a){var i=new Na(t.shape,e.shape,r,o,a);return this.compileAndRun(i,[t,e,n])},t.prototype.depthToSpace=function(t,e,n){f(e>1,function(){return "blockSize should be > 1 for depthToSpace, but was: "+e});var r=t.shape[0],o="NHWC"===n?t.shape[1]:t.shape[2],a="NHWC"===n?t.shape[2]:t.shape[3],i="NHWC"===n?t.shape[3]:t.shape[1],s=o*e,u=a*e,l=i/(e*e),c=new _a("NHWC"===n?[r,s,u,l]:[r,l,s,u],e,n);return this.compileAndRun(c,[t])},t.prototype.split=function(t,e,n){return ko(t,e,n)},t.prototype.scatterND=function(t,e,n){var r=Br(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,l=[u/i,i],c=t.reshape([a,o]),h=e.reshape([a,i]);if(0===u)return go(xn([]),n);var p=wn(0),f=new Mi(a,o,c.rank,h.rank,s,l);return this.compileAndRun(f,[h,c,p]).reshape(n)},t.prototype.sparseToDense=function(t,e,n,r){var o=Br(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.strides,u=o.outputSize,l=new Mi(i,a,t.rank,e.rank,s,[u,1],!1);return this.compileAndRun(l,[e,t,r]).reshape(n)},t.prototype.fft=function(t){return this.fftImpl(t,!1)},t.prototype.ifft=function(t){return this.fftImpl(t,!0)},t.prototype.fftImpl=function(t,e){var n=this.texData.get(t.dataId),r=new Ua(La,t.shape,e),o=new Ua(Wa,t.shape,e),a=[this.makeComplexComponentTensorHandle(t,n.complexTensors.real),this.makeComplexComponentTensorHandle(t,n.complexTensors.imag)],i=this.compileAndRun(r,a),s=this.compileAndRun(o,a),u=this.complex(i,s).as2D(t.shape[0],t.shape[1]);return i.dispose(),s.dispose(),u},t.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=_r(t,e),a=o[0],i=o[1],s=o[2],u=o[3],l=e.reshape([i,r]),c=t.reshape([t.size/s,s]),h=new qa(r,u,[i,s]);return this.compileAndRun(h,[c,l]).reshape(a)},t.prototype.fill=function(t,e,n){if("string"===(n=n||L(e))){var r=S(n,g(t));return r.fill(e),ct.make(t,{values:r},n)}var o=new Va(t,e),a=o.getCustomSetupFunc(e),i=this.makeOutputArray(t,n);return this.compileAndRun(o,[],i,a)},t.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},t.prototype.zerosLike=function(t){return this.fill(t.shape,"string"===t.dtype?"":0,t.dtype)},t.prototype.linspace=function(t,e,n){return yo(t,e,n)},t.prototype.makeOutputArray=function(t,e){return ct.make(t,{},e,this)},t.prototype.makePackedTensor=function(t,e){var n=ct.make(t,{},e,this);return this.texData.get(n.dataId).isPacked=!0,n},t.prototype.unpackTensor=function(t){var e=new ys(t.shape);return this.compileAndRun(e,[t],ct.make(e.outputShape,{},t.dtype,this))},t.prototype.packTensor=function(t){var e=new wi(t.shape);return this.compileAndRun(e,[t],this.makePackedTensor(t.shape,t.dtype),null,!0)},t.prototype.packedReshape=function(t,e){var n=t.reshape([ge(t.shape)].concat(ye(t.shape))),r=[ge(e)].concat(ye(e)),o=new Ni(r,n.shape);return this.compileAndRun(o,[n]).reshape(e)},t.prototype.decode=function(t){var e,n=this.texData.get(t),r=n.isPacked,o=n.shape,a=n.dtype,i=xe(o),s=Lt(o),u=this.makeTensorHandle(o,"float32");return this.texData.get(u.dataId).isPacked=!0,this.texData.get(u.dataId).dtype=a,this.texData.get(u.dataId).texShape=s.map(function(t){return 2*t}),e=r?new Da(i,s):new Ta(i,s),this.compileAndRun(e,[{shape:i,dtype:a,dataId:t}],u,null,!0),u},t.prototype.compileAndRun=function(t,e,n,r,o){var a=this;if(void 0===o&&(o=!1),null==n&&(n=t.usesPackedTextures?this.makePackedTensor(t.outputShape,e[0].dtype):this.makeOutputArray(t.outputShape,e[0].dtype)),0===n.size)return this.texData.get(n.dataId).values=N(n.dtype,0),n;var s=e.map(function(e){if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var n=a.texData.get(e.dataId);if(null==n.texture){if(!t.usesPackedTextures&&g(e.shape)<=i.getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return {shape:e.shape,texData:null,isUniform:!0,uniformValues:n.values};t.usesPackedTextures&&(n.isPacked=!0,n.shape=e.shape);}else if(!!n.isPacked!=!!t.usesPackedTextures)e=n.isPacked?a.unpackTensor(e):a.packTensor(e),n=a.texData.get(e.dataId);else if(n.isPacked&&!Ce(n.shape,e.shape)){var r=e,o=e.shape;e.shape=n.shape,e=a.packedReshape(e,o),n=a.texData.get(e.dataId),r.shape=o;}return a.uploadToGPU(e.dataId),{shape:e.shape,texData:n,isUniform:!1}});this.uploadToGPU(n.dataId);var u,l={shape:n.shape,texData:this.texData.get(n.dataId),isUniform:!1},c=function(t,e,n){var r="";e.concat(n).forEach(function(t){var e=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0,n=t.isUniform?"uniform":t.texData.texShape;r+=t.shape+"_"+n+"_"+e;});var o=t.userCode,a=t.constructor.name;return a+="_"+r+"_"+o}(t,s,l),h=this.getAndSaveBinary(c,function(){return function(t,e,n,r){var o=e.userCode,a=n.map(function(t,n){var r={logicalShape:t.shape,texShape:t.isUniform?null:t.texData.texShape,isUniform:t.isUniform,isPacked:!t.isUniform&&t.texData.isPacked,flatOffset:null};return null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0&&(r.flatOffset=t.texData.slice.flatOffset),{name:e.variableNames[n],shapeInfo:r}}),s=a.map(function(t){return t.shapeInfo}),u={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},l=Wo(a,u,o,e.usesPackedTextures),c=t.createProgram(l),h=null,p=t.getUniformLocation(c,"NAN",!1);1===i.getNumber("WEBGL_VERSION")&&(h=t.getUniformLocation(c,"INFINITY",!1));for(var f={},d=0;d<e.variableNames.length;d++){var v=e.variableNames[d];f[v]=t.getUniformLocation(c,v,!1),f["offset"+v]=t.getUniformLocation(c,"offset"+v,!1);}return {program:e,source:l,webGLProgram:c,uniformLocations:f,inShapeInfos:s,outShapeInfo:u,infLoc:h,nanLoc:p}}(a.gpgpu,t,s,l)}),p=null!=this.activeTimers;return p&&(u=this.startTimer()),function(t,e,n,r,o){hi(e.inShapeInfos,n),hi([e.outShapeInfo],[r]);var a=r.texData.texture,s=r.texData.texShape;r.texData.isPacked?t.setOutputPackedMatrixTexture(a,s[0],s[1]):t.setOutputMatrixTexture(a,s[0],s[1]),t.setProgram(e.webGLProgram),1===i.getNumber("WEBGL_VERSION")&&null!==e.infLoc&&t.gl.uniform1f(e.infLoc,1/0),null!==e.nanLoc&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach(function(n,r){var o=e.program.variableNames[r],a=e.uniformLocations[o],i=e.uniformLocations["offset"+o];if(null!=a)if(n.isUniform)if(g(n.shape)<2)t.gl.uniform1f(a,n.uniformValues[0]);else{var s=n.uniformValues;s instanceof Float32Array||(s=new Float32Array(s)),t.gl.uniform1fv(a,s);}else null!=n.texData.slice&&null!=i&&t.gl.uniform1i(i,n.texData.slice.flatOffset),t.setInputMatrixTexture(n.texData.texture,a,r);}),null!=o&&o(t,e.webGLProgram),t.executeProgram();}(this.gpgpu,h,s,l,r),p&&(u=this.endTimer(u),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(u)})),!i.getBool("WEBGL_LAZILY_UNPACK")&&this.texData.get(n.dataId).isPacked&&!1===o?this.unpackTensor(n):n},t.prototype.getAndSaveBinary=function(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){this.disposed||(this.textureManager.dispose(),null!=this.canvas&&null!=this.canvas.remove?this.canvas.remove():this.canvas=null,null!=this.fromPixels2DContext&&this.fromPixels2DContext.canvas.remove&&this.fromPixels2DContext.canvas.remove(),this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0);},t.prototype.floatPrecision=function(){var t=this;return null==this.floatPrecisionValue&&(this.floatPrecisionValue=Ue(function(){if(!i.get("WEBGL_RENDER_FLOAT32_ENABLED")){var e=i.getBool("DEBUG");i.set("DEBUG",!1);var n=t.abs(wn(1e-8)).dataSync()[0];if(i.set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},t.prototype.uploadToGPU=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.values,i=n.texture,s=n.usage,u=n.isPacked;if(null==i){var l,c=null!=this.activeTimers;c&&(l=$());var h=n.texShape;if(null==h&&(h=be(r,u),n.texShape=h),null!=a){var p=xe(r),f=void 0,d=h[1],v=h[0],m=a instanceof Uint8Array;u?(d=(e=Wt(h[0],h[1]))[0],v=e[1],f=new Pa(p,[v,d],m)):f=new Ba(p,[v,d],m);var y=this.makeTensorHandle([v,d],o);this.texData.get(y.dataId).usage=m?Tt.PIXELS:Tt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(y.dataId),d,v,a);var x=this.makeTensorHandle(f.outputShape,y.dtype);x.size=g(f.outputShape),this.texData.get(x.dataId).isPacked=u,this.compileAndRun(f,[y],x);var b=this.texData.get(x.dataId);n.texture=b.texture,n.texShape=b.texShape,n.isPacked=b.isPacked,n.usage=b.usage,this.disposeData(y.dataId),this.texData.delete(x.dataId),n.values=null,c&&(this.uploadWaitMs+=$()-l);}else{var w=this.acquireTexture(h,s,o,u);n.texture=w;}}},t.prototype.convertAndCacheOnCPU=function(t,e){var n=this.texData.get(t),r=n.dtype;return this.releaseGPUData(t),null!=e&&(n.values=function(t,e){if("float32"===e||"complex64"===e)return t;if("int32"===e||"bool"===e){for(var n="int32"===e?new Int32Array(t.length):new Uint8Array(t.length),r=0;r<n.length;++r)n[r]=Math.round(t[r]);return n}throw new Error("Unknown dtype "+e)}(e,r)),n.values},t.prototype.acquireTexture=function(t,e,n,r){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+o+" MB, most likely due to a memory leak");}return this.textureManager.acquireTexture(t,e,r)},t.prototype.computeBytes=function(t,e){return t[0]*t[1]*O(e)},t}();At()&&St.registerBackend("webgl",function(){return new Cs},2);var Es=vn({abs_:function(t){var e=nn(t,"x","abs");return "complex64"===e.dtype?St.runKernel(function(t){return t.complexAbs(e)},{$x:e}):St.runKernel(function(t,n){var r=t.abs(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.toFloat().step(-1))}}})}}),Rs=vn({acos_:function(t){var e=nn(t,"x","acos");return St.runKernel(function(t,n){var r=t.acos(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(wn(1).sub(n.toFloat().square()).sqrt()).neg()}}})}}),Is=vn({acosh_:function(t){var e=nn(t,"x","acosh");return St.runKernel(function(t,n){var r=t.acosh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(n.toFloat().square().sub(1).sqrt())}}})}}),ks=vn({asin_:function(t){var e=nn(t,"x","asin");return St.runKernel(function(t,n){var r=t.asin(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(wn(1).sub(n.toFloat().square()).sqrt())}}})}}),Ns=vn({asinh_:function(t){var e=nn(t,"x","asinh");return St.runKernel(function(t,n){var r=t.asinh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(wn(1).add(n.toFloat().square()).sqrt())}}})}}),Ss=vn({atan_:function(t){var e=nn(t,"x","atan");return St.runKernel(function(t,n){var r=t.atan(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().square().add(1))}}})}}),As=vn({atanh_:function(t){var e=nn(t,"x","atanh");return St.runKernel(function(t,n){var r=t.atanh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(wn(1).sub(n.toFloat().square()))}}})}}),Ts=vn({ceil_:function(t){var e=nn(t,"x","ceil");return St.runKernel(function(t){return t.ceil(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Ds=vn({clipByValue_:function(t,e,n){var r=nn(t,"x","clipByValue");return f(e<=n,function(){return "Error in clip: min ("+e+") must be less than or equal to max ("+n+")."}),St.runKernel(function(t,o){var a=t.clip(r,e,n);return o([r]),a},{$x:r},function(t,r){var o=r[0];return {$x:function(){return t.where(o.greaterEqual(e).logicalAnd(o.lessEqual(n)),Fn(t))}}})}}),_s=vn({cos_:function(t){var e=nn(t,"x","cos");return St.runKernel(function(t,n){var r=t.cos(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().sin().neg().mul(t)}}})}}),Os=vn({cosh_:function(t){var e=nn(t,"x","cosh");return St.runKernel(function(t,n){var r=t.cosh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().sinh().mulStrict(t)}}})}}),Fs=vn({erf_:function(t){var e=nn(t,"x","erf");return f("int32"===e.dtype||"float32"===e.dtype,function(){return "Input dtype must be `int32` or `float32`."}),"int32"===e.dtype&&(e=e.toFloat()),St.runKernel(function(t,n){var r=t.erf(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ms=vn({exp_:function(t){var e=nn(t,"x","exp");return St.runKernel(function(t,n){var r=t.exp(e);return n([r]),r},{$x:e},function(t,e){return {$x:function(){return t.mulStrict(e[0])}}})}}),Bs=vn({expm1_:function(t){var e=nn(t,"x","expm1");return St.runKernel(function(t,n){var r=t.expm1(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.exp())}}})}}),Ps=vn({floor_:function(t){var e=nn(t,"x","floor");return St.runKernel(function(t){return t.floor(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Ls=vn({log_:function(t){var e=nn(t,"x","log");return St.runKernel(function(t,n){var r=t.log(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat())}}})}}),Ws=vn({log1p_:function(t){var e=nn(t,"x","log1p");return St.runKernel(function(t,n){var r=t.log1p(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.add(1))}}})}}),Us=vn({logSigmoid_:function(t){var e=nn(t,"x","logSigmoid");return St.runKernel(function(t,n){var r=t.softplus(e.neg()).neg();return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.neg().sigmoid())}}})}}),Vs=vn({neg_:function(t){var e=nn(t,"x","neg");return St.runKernel(function(t){return t.neg(e)},{$x:e},function(t){return {$x:function(){return t.neg()}}})}}),zs=vn({reciprocal_:function(t){var e=nn(t,"x","reciprocal");return St.runKernel(function(t,n){var r=t.reciprocal(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.square().neg())}}})}}),Gs=vn({round_:function(t){var e=nn(t,"x","round");return St.runKernel(function(t){return t.round(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Hs=vn({rsqrt_:function(t){var e=nn(t,"x","rsqrt");return St.runKernel(function(t,n){var r=t.rsqrt(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.pow(1.5).mul(2)).neg()}}})}}),qs=vn({sigmoid_:function(t){var e=nn(t,"x","sigmoid");return St.runKernel(function(t,n){var r=t.sigmoid(e);return n([r]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.mul(wn(1).sub(n)))}}})}}),$s=vn({sign_:function(t){var e=nn(t,"x","sign");return St.runKernel(function(t){return t.sign(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Ks=vn({isNaN_:function(t){var e=nn(t,"x","isNaN");return St.runKernel(function(t){return t.isNaN(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),js=vn({isInf_:function(t){var e=nn(t,"x","isInf");return St.runKernel(function(t){return t.isInf(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Xs=vn({isFinite_:function(t){var e=nn(t,"x","isFinite");return St.runKernel(function(t){return t.isFinite(e)},{$x:e},function(t){return {$x:function(){return Fn(t)}}})}}),Ys=vn({sin_:function(t){var e=nn(t,"x","sin");return St.runKernel(function(t,n){var r=t.sin(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().cos().mul(t)}}})}}),Qs=vn({sinh_:function(t){var e=nn(t,"x","sinh");return St.runKernel(function(t,n){var r=t.sinh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().cosh().mulStrict(t)}}})}}),Js=vn({softplus_:function(t){var e=nn(t,"x","softplus");return St.runKernel(function(t,n){var r=t.softplus(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.sigmoid())}}})}}),Zs=vn({sqrt_:function(t){var e=nn(t,"x","sqrt");return St.runKernel(function(t,n){var r=t.sqrt(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().sqrt().mul(2))}}})}}),tu=vn({square_:function(t){var e=nn(t,"x","square");return St.runKernel(function(t,n){return n([e]),t.square(e)},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.toFloat().mul(2))}}})}}),eu=vn({step_:function(t,e){void 0===e&&(e=0);var n=nn(t,"x","step");return St.runKernel(function(t){return t.step(n,e)},{$x:n},function(t){return {$x:function(){return Fn(t)}}})}}),nu=vn({tan_:function(t){var e=nn(t,"x","tan");return St.runKernel(function(t,n){var r=t.tan(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.cos().square())}}})}}),ru=vn({tanh_:function(t){var e=nn(t,"x","tanh");return St.runKernel(function(t,n){var r=t.tanh(e);return n([r]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return wn(1).sub(n.square()).mulStrict(t)}}})}});function ou(t,e,n,r,o,a){var i,s,u=nn(t,"x","batchNorm"),l=nn(e,"mean","batchNorm"),c=nn(n,"variance","batchNorm");return null!=o&&(i=nn(o,"scale","batchNorm")),null!=r&&(s=nn(r,"offset","batchNorm")),f(2===u.rank,function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),f(2===l.rank||1===l.rank,function(){return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+l.rank+"."}),f(2===c.rank||1===c.rank,function(){return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+c.rank+"."}),null!=i&&f(2===i.rank||1===i.rank,function(){return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),null!=s&&f(2===s.rank||1===s.rank,function(){return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),su(u,l,c,s,i,a)}function au(t,e,n,r,o,a){var i,s,u=nn(t,"x","batchNorm"),l=nn(e,"mean","batchNorm"),c=nn(n,"variance","batchNorm");return null!=o&&(i=nn(o,"scale","batchNorm")),null!=r&&(s=nn(r,"offset","batchNorm")),f(3===u.rank,function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),f(3===l.rank||1===l.rank,function(){return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+l.rank+"."}),f(3===c.rank||1===c.rank,function(){return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+c.rank+"."}),null!=i&&f(3===i.rank||1===i.rank,function(){return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),null!=s&&f(3===s.rank||1===s.rank,function(){return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),su(u,l,c,s,i,a)}function iu(t,e,n,r,o,a){var i,s,u=nn(t,"x","batchNorm"),l=nn(e,"mean","batchNorm"),c=nn(n,"variance","batchNorm");return null!=o&&(i=nn(o,"scale","batchNorm")),null!=r&&(s=nn(r,"offset","batchNorm")),f(4===u.rank,function(){return "Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),f(4===l.rank||1===l.rank,function(){return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+l.rank+"."}),f(4===c.rank||1===c.rank,function(){return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+c.rank+"."}),null!=i&&f(4===i.rank||1===i.rank,function(){return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),null!=s&&f(4===s.rank||1===s.rank,function(){return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),su(u,l,c,s,i,a)}function su(t,e,n,r,o,a){null==a&&(a=.001);var i,s,u,l=nn(t,"x","batchNorm"),c=nn(e,"mean","batchNorm"),h=nn(n,"variance","batchNorm");null!=o&&(i=nn(o,"scale","batchNorm")),null!=r&&(s=nn(r,"offset","batchNorm")),f(c.rank===h.rank,function(){return "Batch normalization gradient requires mean and variance to have equal ranks."}),f(null==s||c.rank===s.rank,function(){return "Batch normalization gradient requires mean and offset to have equal ranks."}),f(null==i||c.rank===i.rank,function(){return "Batch normalization gradient requires mean and scale to have equal ranks."}),u=0===l.rank||1===l.rank?l.as4D(1,1,1,l.size):2===l.rank?l.as4D(1,1,l.shape[0],l.shape[1]):3===l.rank?l.as4D(1,l.shape[0],l.shape[1],l.shape[2]):l;return St.runKernel(function(t,e){var n=t.batchNormalization(u,uu(c),uu(h),a,uu(i),uu(s));return e([l,c,h,i]),n},{$x:l,$mean:c,$variance:h,$scale:i,$offset:s},function(t,e){var n=e,r=n[0],o=n[1],i=n[2],s=n[3],l=null==s?wn(1):s,c=eo(o.shape,u.shape),h=[];if(1===o.rank){for(var p=0;p<u.shape.length-1;++p)h.push(u.shape[p]);h.push(1);}var f=r.sub(o),d=t.mul(l),v=Hs(i.add(wn(a))),m=v.mul(v).mul(v).mul(wn(-.5));return {$x:function(){return 1===o.rank?t.mul(Er(v.as4D(1,1,1,o.shape[0]),h)).mul(l).reshape(r.shape):t.mul(v).mul(l).reshape(r.shape)},$mean:function(){var t=v.mul(wn(-1)).mul(d);return 1===o.rank&&(t=t.sum(c)),t.reshape(o.shape)},$variance:function(){var t=m.mul(f).mul(d);return 1===o.rank&&(t=t.sum(c)),t.reshape(o.shape)},$scale:function(){var e=f.mul(v),n=t.mul(e);return 1===o.rank&&(n=n.sum(c)),n.reshape(o.shape)},$offset:function(){var e=t;return 1===o.rank&&(e=e.sum(c)),e.reshape(o.shape)}}}).reshape(l.shape)}function uu(t){return null==t?null:0===t.rank?t.as1D():1===t.rank?t:2===t.rank?t.as4D(1,1,t.shape[0],t.shape[1]):3===t.rank?t.as4D(1,t.shape[0],t.shape[1],t.shape[2]):t}function lu(){Be("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");}var cu=vn({batchNormalization2d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),lu(),ou(t,e,n,a,o,r)}}),hu=vn({batchNormalization3d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),lu(),au(t,e,n,a,o,r)}}),pu=vn({batchNormalization4d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),lu(),iu(t,e,n,a,o,r)}}),fu=vn({batchNormalization_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),lu(),su(t,e,n,a,o,r)}}),du=vn({batchNorm_:su}),vu=vn({batchNorm2d_:ou}),mu=vn({batchNorm3d_:au}),gu=vn({batchNorm4d_:iu});var yu=vn({logicalAnd_:function(t,e){var n=nn(t,"a","logicalAnd","bool"),r=nn(e,"b","logicalAnd","bool");return no(n.shape,r.shape),St.runKernel(function(t){return t.logicalAnd(n,r)},{$a:n,$b:r})}}),xu=vn({logicalNot_:function(t){var e=nn(t,"x","logicalNot","bool");return St.runKernel(function(t){return t.logicalNot(e)},{$x:e})}}),bu=vn({logicalOr_:function(t,e){var n=nn(t,"a","logicalOr","bool"),r=nn(e,"b","logicalOr","bool");return no(n.shape,r.shape),St.runKernel(function(t){return t.logicalOr(n,r)},{$a:n,$b:r})}}),wu=vn({logicalXor_:function(t,e){var n=nn(t,"a","logicalXor","bool"),r=nn(e,"b","logicalXor","bool");return no(n.shape,r.shape),bu(t,e).logicalAnd(yu(t,e).logicalNot())}}),Cu=vn({where_:function(t,e,n){var r=nn(e,"a","where"),o=nn(n,"b","where"),a=nn(t,"condition","where","bool");return d(r.shape,o.shape,"Error in where: "),1===a.rank?f(a.shape[0]===r.shape[0],function(){return "The first dimension of `a` must match the size of `condition`."}):d(a.shape,o.shape,"Error in where: "),St.runKernel(function(t,e){var n=t.select(a,r,o);return e([a]),n},{$condition:a,$a:r,$b:o},function(t,e){var n=e[0];return {$condition:function(){return Fn(n).toFloat()},$a:function(){return t.mul(n.cast(t.dtype))},$b:function(){return t.mul(n.logicalNot().cast(t.dtype))}}})}}),Eu=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:return [4,(e=nn(t,"condition","whereAsync","bool")).data()];case 1:return n=r.sent(),o=Ao(e.shape,n),t!==e&&e.dispose(),[2,o]}})})};var Ru=vn({add_:function(t,e){var n,r=nn(t,"a","add"),o=nn(e,"b","add");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t){return t.add(r,o)},{$a:r,$b:o},function(t){return {$a:function(){var e=t,n=eo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},$b:function(){var e=t,n=eo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(o.shape)}}})}}),Iu=vn({addN_:function(t){f(Array.isArray(t),function(){return "The argument passed to tf.addN() must be a list of tensors"}),f(t.length>=1,function(){return "Must pass at least one tensor to tf.addN(), but got "+t.length});var e=t.map(function(t,e){return nn(t,"tensors"+e,"addN")}),n=e[0];e.forEach(function(t){if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(function(t){if(!y(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=e;return St.runKernel(function(t){return t.addN(e)},r,function(t){var n={};return e.forEach(function(e,r){n[r]=function(){return t.clone()};}),n})}}),ku=vn({addStrict_:function(t,e){var n=nn(t,"a","addStrict"),r=nn(e,"b","addStrict");return d(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),Nu=vn({atan2_:function(t,e){var n,r=nn(t,"a","atan2"),o=nn(e,"b","atan2");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t,e){var n=t.atan2(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=Ru(n.square(),r.square()),o=t.mul(r.div(e)),i=eo(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},$b:function(){var e=Ru(n.square(),r.square()),o=Vs(t.mul(n.div(e))),i=eo(r.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(r.shape)}}})}}),Su=vn({div_:function(t,e){var n,r=nn(t,"a","div"),o=nn(e,"b","div");if(n=wt(r,o),r=n[0],o=n[1],"int32"===r.dtype&&"int32"===o.dtype)return Tu(r,o);var a=no(r.shape,o.shape);return St.runKernel(function(t,e){var n=t.realDivide(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=t.div(r.toFloat()),o=eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},$b:function(){var e=t.mul(n.toFloat()),o=eo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}})}}),Au=vn({divStrict_:function(t,e){var n=nn(t,"a","div"),r=nn(e,"b","div");return d(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),Tu=vn({floorDiv_:function(t,e){var n,r=nn(t,"a","floorDiv"),o=nn(e,"b","floorDiv");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t,e){var n=t.floorDiv(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=t.div(r.toFloat()),o=eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},$b:function(){var e=t.mul(n.toFloat()),o=eo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}})}}),Du=vn({maximum_:function(t,e){var n,r=nn(t,"a","maximum"),o=nn(e,"b","maximum");return n=wt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),no(r.shape,o.shape),St.runKernel(function(t,e){var n=t.maximum(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return t.mul(n.greaterEqual(r).toFloat())},$b:function(){return t.mul(n.less(r).toFloat())}}})}}),_u=vn({maximumStrict_:function(t,e){var n=nn(t,"a","maximumStrict"),r=nn(e,"b","maximumStrict");return d(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),Ou=vn({minimum_:function(t,e){var n,r=nn(t,"a","minimum"),o=nn(e,"b","minimum");return n=wt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),no(r.shape,o.shape),St.runKernel(function(t,e){var n=t.minimum(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return t.mul(n.lessEqual(r).toFloat())},$b:function(){return t.mul(n.greater(r).toFloat())}}})}}),Fu=vn({minimumStrict_:function(t,e){var n=nn(t,"a","minimumStrict"),r=nn(e,"b","minimumStrict");return d(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),Mu=vn({mod_:function(t,e){var n,r=nn(t,"a","mod"),o=nn(e,"b","mod");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t,e){var n=t.mod(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=eo(n.shape,a);return e.length>0?t.sum(e).reshape(n.shape):t},$b:function(){var e=t.mul(n.div(r).floor().neg()),o=eo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}})}}),Bu=vn({modStrict_:function(t,e){var n=nn(t,"a","modStrict"),r=nn(e,"b","modStrict");return d(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),Pu=vn({mul_:function(t,e){var n,r=nn(t,"a","mul"),o=nn(e,"b","mul");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t,e){var n=t.multiply(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=t.mul(r.toFloat()),o=eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},$b:function(){var e=t.mul(n.toFloat()),o=eo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}})}}),Lu=vn({mulStrict_:function(t,e){var n=nn(t,"a","mul"),r=nn(e,"b","mul");return d(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),Wu=vn({pow_:function(t,e){var n=nn(t,"base","pow"),r=nn(e,"exp","pow"),o=no(n.shape,r.shape);return t=n.cast(xt(n.dtype,r.dtype)),e=r.cast(xt(n.dtype,r.dtype)),St.runKernel(function(t,e){var o=t.pow(n,r);return e([n,r,o]),o},{$base:n,$exp:r},function(t,e){var n=e[0],r=e[1],a=e[2];return {$base:function(){var e=r.toFloat(),a=t.mul(e.mul(n.pow(e.sub(wn(1))))),i=eo(n.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(n.shape)},$exp:function(){var e=n.greater(0),i=n.log().where(e,Fn(n)),s=t.mul(a.mul(i)),u=eo(r.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)}}})}}),Uu=vn({powStrict_:function(t,e){return d(t.shape,e.shape,"Error in powStrict: "),t.pow(e)}}),Vu=vn({squaredDifference_:function(t,e){var n,r=nn(t,"a","squaredDifference"),o=nn(e,"b","squaredDifference");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t,e){var n=t.squaredDifference(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1],o=wn(2);return {$a:function(){return t.mul(n.sub(r).mul(o))},$b:function(){return t.mul(r.sub(n).mul(o))}}})}}),zu=vn({squaredDifferenceStrict_:function(t,e){var n=nn(t,"a","squaredDifferenceStrict"),r=nn(e,"b","squaredDifferenceStrict");return d(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),Gu=vn({sub_:function(t,e){var n,r=nn(t,"a","sub"),o=nn(e,"b","sub");n=wt(r,o),r=n[0],o=n[1];var a=no(r.shape,o.shape);return St.runKernel(function(t){return t.subtract(r,o)},{$a:r,$b:o},function(t){return {$a:function(){var e=t,n=eo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},$b:function(){var e=t,n=eo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.neg().reshape(o.shape)}}})}}),Hu=vn({subStrict_:function(t,e){var n=nn(t,"a","subStrict"),r=nn(e,"b","subStrict");return d(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}});var qu=vn({equal_:function(t,e){var n,r=nn(t,"a","equal"),o=nn(e,"b","equal");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t){return t.equal(r,o)},{$a:r,$b:o})}}),$u=vn({equalStrict_:function(t,e){var n=nn(t,"a","equalStrict"),r=nn(e,"b","equalStrict");return d(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),Ku=vn({greater_:function(t,e){var n,r=nn(t,"a","greater"),o=nn(e,"b","greater");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t){return t.greater(r,o)},{$a:r,$b:o})}}),ju=vn({greaterEqual_:function(t,e){var n,r=nn(t,"a","greaterEqual"),o=nn(e,"b","greaterEqual");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t,e){var n=t.greaterEqual(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return Fn(n)},$b:function(){return Fn(r)}}})}}),Xu=vn({greaterEqualStrict_:function(t,e){var n=nn(t,"a","greaterEqualStrict"),r=nn(e,"b","greaterEqualStrict");return d(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),Yu=vn({greaterStrict_:function(t,e){var n=nn(t,"a","greaterStrict"),r=nn(e,"b","greaterStrict");return d(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),Qu=vn({less_:function(t,e){var n,r=nn(t,"a","less"),o=nn(e,"b","less");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t){return t.less(r,o)},{$a:r,$b:o})}}),Ju=vn({lessEqual_:function(t,e){var n,r=nn(t,"a","lessEqual"),o=nn(e,"b","lessEqual");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t){return t.lessEqual(r,o)},{$a:r,$b:o})}}),Zu=vn({lessEqualStrict_:function(t,e){var n=nn(t,"a","lessEqualStrict"),r=nn(e,"b","lessEqualStrict");return d(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),tl=vn({lessStrict_:function(t,e){var n=nn(t,"a","lessStrict"),r=nn(e,"b","lessStrict");return d(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),el=vn({notEqual_:function(t,e){var n,r=nn(t,"a","notEqual"),o=nn(e,"b","notEqual");return n=wt(r,o),r=n[0],o=n[1],no(r.shape,o.shape),St.runKernel(function(t){return t.notEqual(r,o)},{$a:r,$b:o})}}),nl=vn({notEqualStrict_:function(t,e){var n=nn(t,"a","notEqualStrict"),r=nn(e,"b","notEqualStrict");return d(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function rl(t,e){for(var n=[],r=t;r<e;++r)n.push(r);return n}function ol(t){for(var e=[],n=0;n<t.length;++n)for(var r=0;r<t[n].length;++r)e.push(t[n][r]);return e}var al=vn({gather_:function(t,e,n){void 0===n&&(n=0);var r=nn(t,"x","gather"),o=nn(e,"indices","gather","int32");n=I(n,r.shape)[0];var a=function(t,e,n){for(var r=t.shape[n],o=[],a=1,i=1,s=0;s<n;s++)o.push(t.shape[s]),a*=t.shape[s];for(s=0;s<e.rank;s++)o.push(e.shape[s]);for(s=n+1;s<t.rank;s++)o.push(t.shape[s]),i*=t.shape[s];return {batchSize:a,sliceSize:i,dimSize:r,outputShape:o}}(r,o,n);return St.runKernel(function(t,e){var a=t.gather(r,o.flatten(),n);return e([o]),a},{$x:r},function(t,e){var o=e[0];return {$x:function(){var e=r.shape,a=o.size,i=e.slice(0,n),s=i.length,u=e.slice(n,e.length).slice(1),l=u.length,c=rl(0,s),h=rl(s+1,s+1+l),p=ol([i,[a],u]),f=t.reshape(p),d=o.reshape([a]),v=ol([[s],c,h]),m=f.transpose(v),g=il(m,d,r.shape[n]),y=hn(v);return g=g.transpose(y)}}}).reshape(a.outputShape)}}),il=vn({unsortedSegmentSum_:function(t,e,n){var r=nn(t,"x","unsortedSegmentSum"),o=nn(e,"segmentIds","unsortedSegmentSum","int32");return f(x(n),function(){return "numSegments must be of dtype int"}),St.runKernel(function(t,e){var a=t.unsortedSegmentSum(r,o,n);return e([o]),a},{$x:r},function(t,e){var n=e[0];return {$x:function(){return function(t,e){for(var n=Du(e,Fn(e)),r=al(t,n),o=ju(e,wn(0,"int32")),a=r.rank-o.rank,i=0;i<a;++i)o=ir(o,i+1);o=yu(o,Sn(r.shape,"bool"));var s=Fn(r);return Cu(o,r,s)}(t,n)}}})}});var sl=function(t,e,o){return n(this,void 0,void 0,function(){var n,a,i,s,u,l,c,h,p,v,m,g,y;return r(this,function(r){switch(r.label){case 0:for(n=nn(t,"tensor","boolMask"),a=nn(e,"mask","boolMask","bool"),i=null==o?0:o,s=a.rank,u=n.shape,f(s>0,function(){return "mask cannot be scalar"}),d(u.slice(i,i+s),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),l=1,c=i;c<i+s;c++)l*=u[c];return h=u.slice(0,i).concat([l],u.slice(i+s)),p=n.reshape(h),v=a.reshape([-1]),[4,Eu(v)];case 1:return m=r.sent(),g=m.squeeze([1]),y=al(p,g,i),t!==n&&n.dispose(),e!==a&&a.dispose(),g.dispose(),p.dispose(),v.dispose(),m.dispose(),[2,y]}})})};function ul(t,e,n,r,o,a,i){void 0===a&&(a="NHWC"),f(t.length===e.rank,function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"});var s=t,u=e,l=!1;3===e.rank&&(l=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,t[0],t[1],t[2]]),f(4===s.length,function(){return "Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),f(4===u.rank,function(){return "Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),f(4===n.rank,function(){return "Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank});var c="NHWC"===a?s[3]:s[1],h="NHWC"===a?u.shape[3]:u.shape[1];f(c===n.shape[2],function(){return "Error in conv2dDerInput: depth of input ("+c+") must match input depth for filter "+n.shape[2]+"."}),f(h===n.shape[3],function(){return "Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+n.shape[3]+"."}),null!=i&&f(x(o),function(){return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var p=vo(a),d=ao(s,n.shape,r,1,o,i,!1,p),v=St.runKernel(function(t,e){var r=t.conv2dDerInput(u,n,d);return e([n,u]),r},{dy4D:u,filter:n},function(t,e){var n=e[0],s=e[1];return {dy4D:function(){return fl(t,n,r,o,a,1,i)},filter:function(){return vl(t,s,n.shape,r,o,a,i)}}});return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}function ll(t,e,n,r,o,a,i){void 0===a&&(a="NHWC");var s=t;3===t.rank&&(s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var u=e;3===u.rank&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),f(4===s.rank,function(){return "Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),f(4===u.rank,function(){return "Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),f(4===n.length,function(){return "Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."});var l="NHWC"===a?s.shape[3]:s.shape[1],c="NHWC"===a?u.shape[3]:u.shape[1];f(l===n[2],function(){return "Error in conv2dDerFilter: depth of input "+l+") must match input depth in filter ("+n[2]+"."}),f(c===n[3],function(){return "Error in conv2dDerFilter: depth of dy ("+c+") must match output depth for filter ("+n[3]+")."}),null!=i&&f(x(o),function(){return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=vo(a),p=ao(s.shape,n,r,1,o,i,!1,h);return St.runKernel(function(t){return t.conv2dDerFilter(s,u,p)},{x4D:s,dy4D:u})}function cl(t){var e=function(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function hl(t,e,n,r,o){f(t.length===e.rank,function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"});var a=t,i=e,s=!1;4===e.rank&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,t[0],t[1],t[2],t[3]]);var u=a[4],l=i.shape[4];f(5===a.length,function(){return "Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),f(5===i.rank,function(){return "Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),f(5===n.rank,function(){return "Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank}),f(u===n.shape[3],function(){return "Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."}),f(l===n.shape[4],function(){return "Error in conv3dDerInput: depth of output ("+l+") must match output depth for filter "+n.shape[4]+"."});var c=io(a,n.shape,r,1,o),h=St.runKernel(function(t){return t.conv3dDerInput(i,n,c)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var pl=vn({conv1d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NWC"),void 0===a&&(a=1);var s=nn(t,"x","conv1d"),u=nn(e,"filter","conv1d"),l=s,c=!1;2===s.rank&&(c=!0,l=s.as3D(1,s.shape[0],s.shape[1])),f(3===l.rank,function(){return "Error in conv1d: input must be rank 3, but got rank "+l.rank+"."}),f(3===u.rank,function(){return "Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),null!=i&&f(x(r),function(){return "Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}),f(l.shape[2]===u.shape[1],function(){return "Error in conv1d: depth of input ("+l.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),f(fo(n,a),function(){return "Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"}),f("NWC"===o,function(){return "Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),p=l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),d=fl(p,h,[1,n],r,"NHWC",[1,a],i);return c?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),fl=vn({conv2d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=nn(t,"x","conv2d"),u=nn(e,"filter","conv2d"),l=s,c=!1;3===s.rank&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),f(4===l.rank,function(){return "Error in conv2d: input must be rank 4, but got rank "+l.rank+"."}),f(4===u.rank,function(){return "Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),null!=i&&f(x(r),function(){return "Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var h="NHWC"===o?l.shape[3]:l.shape[1];f(h===u.shape[2],function(){return "Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),f(fo(n,a),function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"});var p=vo(o),d=ao(l.shape,u.shape,n,a,r,i,!1,p),v=St.runKernel(function(t,e){var n=t.conv2d(l,u,d);return e([u,l]),n},{x:l,$filter:u},function(t,e){var i=e,s=i[0],u=i[1];return f(po(a),function(){return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return ul(u.shape,t,s,n,r,o)},$filter:function(){return ll(u,t,s.shape,n,r,o)}}});return c?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),dl=vn({conv3d_:function(t,e,n,r,o,a){void 0===o&&(o="NDHWC"),void 0===a&&(a=[1,1,1]);var i=nn(t,"x","conv3d"),s=nn(e,"filter","conv3d"),u=i,l=!1;4===i.rank&&(l=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),f(5===u.rank,function(){return "Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),f(5===s.rank,function(){return "Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),f(u.shape[4]===s.shape[3],function(){return "Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),f(function(t,e){return cl(t)||cl(e)}(n,a),function(){return "Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),f("NDHWC"===o,function(){return "Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var c=io(u.shape,s.shape,n,a,r),h=St.runKernel(function(t,e){var n=t.conv3d(u,s,c);return e([u,s]),n},{x:u,$filter:s},function(t,e){f(cl(a),function(){return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var o=e[0],i=e[1];return {x:function(){return hl(o.shape,t,i,n,r)},$filter:function(){return function(t,e,n,r,o){var a=t;4===t.rank&&(a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]));var i=e;4===i.rank&&(i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3])),f(5===a.rank,function(){return "Error in conv3dDerFilter: input must be rank 5, but got shape "+a.shape+"."}),f(5===i.rank,function(){return "Error in conv3dDerFilter: dy must be rank 5, but got shape "+i.shape+"."}),f(5===n.length,function(){return "Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."}),f(a.shape[4]===n[3],function(){return "Error in conv3dDerFilter: depth of input "+a.shape[4]+") must match input depth in filter ("+n[3]+"."}),f(i.shape[4]===n[4],function(){return "Error in conv3dDerFilter: depth of dy ("+i.shape[4]+") must match output depth for filter ("+n[4]+")."});var s=io(a.shape,n,r,1,o);return St.runKernel(function(t){return t.conv3dDerFilter(a,i,s)},{x5D:a,dy5D:i})}(o,t,i.shape,n,r)}}});return l?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),vl=vn({conv2dDerFilter_:ll}),ml=vn({conv2dDerInput_:ul}),gl=vn({depthwiseConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]);var s=nn(t,"x","depthwiseConv2d"),u=nn(e,"filter","depthwiseConv2d"),l=s,c=!1;3===s.rank&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),f(4===l.rank,function(){return "Error in depthwiseConv2d: input must be rank 4, but got rank "+l.rank+"."}),f(4===u.rank,function(){return "Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),f(l.shape[3]===u.shape[2],function(){return "Error in depthwiseConv2d: number of input channels ("+l.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),null==a&&(a=[1,1]),f(fo(n,a),function(){return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),null!=i&&f(x(r),function(){return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var h=ao(l.shape,u.shape,n,a,r,i,!0),p=St.runKernel(function(t,e){var n=t.depthwiseConv2D(l,u,h);return e([l,u]),n},{x:l,$filter:u},function(t,e){f(po(a),function(){return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var n=e[0],r=e[1];return {x:function(){return function(t,e,n,r){var o=e,a=!1;3===e.rank&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=St.runKernel(function(t){return t.depthwiseConv2DDerInput(o,n,r)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}(n.shape,t,r,h)},$filter:function(){return function(t,e,n,r){var o=t;3===t.rank&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=e;return 3===a.rank&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),St.runKernel(function(t){return t.depthwiseConv2DDerFilter(o,a,r)},{x4D:o,dy4D:a})}(n,t,r.shape,h)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),yl=vn({separableConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]),void 0===i&&(i="NHWC");var s=nn(t,"x","separableConv2d"),u=nn(e,"depthwiseFilter","separableConv2d"),l=nn(n,"pointwiseFilter","separableConv2d"),c=s,h=!1;if(3===s.rank&&(h=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),"NCHW"===i)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");f(4===c.rank,function(){return "Error in separableConv2d: input must be rank 4, but got rank "+c.rank+"."}),f(4===u.rank,function(){return "Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),f(4===l.rank,function(){return "Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),f(1===l.shape[0],function(){return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+l.shape[0]+"."}),f(1===l.shape[1],function(){return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+l.shape[1]+"."});var p=u.shape[2],d=u.shape[3];f(l.shape[2]===p*d,function(){return "Error in separableConv2d: the third dimension of pointwise filter must be "+p*d+", but got "+l.shape[2]+"."});var v=gl(c,u,r,o,i,a),m=fl(v,l,1,"valid",i);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),xl=vn({conv2dTranspose_:function(t,e,n,r,o,a){return ul(n,nn(t,"x","conv2dTranspose"),nn(e,"filter","conv2dTranspose"),r,o,"NHWC",a)}}),bl=vn({conv3dTranspose_:function(t,e,n,r,o){return hl(n,nn(t,"x","conv3dTranspose"),nn(e,"filter","conv3dTranspose"),r,o)}});var wl=vn({matMul_:function(t,e,n,r){var o;void 0===n&&(n=!1),void 0===r&&(r=!1);var a=nn(t,"a","matMul"),i=nn(e,"b","matMul");o=wt(a,i),a=o[0],i=o[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=r?i.shape[i.rank-1]:i.shape[i.rank-2],l=n?a.shape[a.rank-1]:a.shape[a.rank-2],c=r?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),p=i.shape.slice(0,-2),d=g(h),v=g(p);f(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return "Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),f(y(h,p),function(){return "Error in matMul: outer dimensions ("+h+") and ("+p+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),f(s===u,function(){return "Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+r+" must match."});var m=a.shape.slice(0,-2).concat([l,c]),x=n?a.as3D(d,s,l):a.as3D(d,l,s),b=r?i.as3D(v,c,u):i.as3D(v,u,c);return St.runKernel(function(t,e){var o=t.batchMatMul(x,b,n,r);return e([x,b]),o},{$a:x,$b:b},function(t,e){var o=e,a=o[0],i=o[1];return n||r?!n&&r?{$a:function(){return t.matMul(i,!1,!1)},$b:function(){return t.matMul(a,!0,!1)}}:n&&!r?{$a:function(){return i.matMul(t,!1,!0)},$b:function(){return a.matMul(t,!1,!1)}}:{$a:function(){return i.matMul(t,!0,!0)},$b:function(){return t.matMul(a,!0,!0)}}:{$a:function(){return t.matMul(i,!1,!0)},$b:function(){return a.matMul(t,!0,!1)}}}).reshape(m)}}),Cl=vn({dot_:function(t,e){var n=nn(t,"t1","dot"),r=nn(e,"t2","dot");f(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),function(){return "Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."});var o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];return f(o===a,function(){return "Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),1===n.rank&&1===r.rank?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():1===n.rank&&2===r.rank?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():2===n.rank&&1===r.rank?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),El=vn({outerProduct_:function(t,e){var n=nn(t,"v1","outerProduct"),r=nn(e,"v2","outerProduct");return f(1===n.rank&&1===r.rank,function(){return "Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."}),n.as2D(-1,1).matMul(r.as2D(1,-1))}});var Rl=vn({reverse_:function(t,e){var n=nn(t,"x","reverse");if(0===n.rank)return n.clone();var r=I(e,n.shape);return St.runKernel(function(t){return t.reverse(n,r)},{$x:n},function(t){return {$x:function(){return t.reverse(r)}}}).reshapeAs(n)}}),Il=vn({reverse1d_:function(t){var e=nn(t,"x","reverse");return f(1===e.rank,function(){return "Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."}),Rl(e,0)}}),kl=vn({reverse2d_:function(t,e){var n=nn(t,"x","reverse");return f(2===n.rank,function(){return "Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."}),Rl(n,e)}}),Nl=vn({reverse3d_:function(t,e){var n=nn(t,"x","reverse");return f(3===n.rank,function(){return "Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."}),Rl(n,e)}}),Sl=vn({reverse4d_:function(t,e){var n=nn(t,"x","reverse");return f(4===n.rank,function(){return "Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."}),Rl(n,e)}});function Al(t,e,n,r,o,a){var i=nn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),null==r&&(r=[1,1]),f(4===s.rank,function(){return "Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),f(fo(n,r),function(){return "Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}),null!=a&&f(x(o),function(){return "Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var l=ro(s.shape,e,n,r,o,a),c=St.runKernel(function(t,e){var n=t.maxPool(s,l);return e([s,n]),n},{x:s},function(t,a){var i=a[0],s=a[1];return {x:function(){return function(t,e,n,r,o,a,i,s){var u=nn(t,"dy","maxPoolBackprop"),l=nn(e,"input","maxPoolBackprop"),c=nn(n,"output","maxPoolBackprop");f(l.rank===u.rank,function(){return "Rank of input ("+l.rank+") does not match rank of dy ("+u.rank+")"}),null==a&&(a=[1,1]),f(fo(o,a),function(){return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"}),f(4===u.rank,function(){return "Error in maxPoolBackprop: dy must be rank 4 but got rank "+u.rank+"."}),f(4===l.rank,function(){return "Error in maxPoolBackprop: input must be rank 4 but got rank "+l.rank+"."}),null!=s&&f(x(i),function(){return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."});var h=ro(l.shape,r,o,a,i,s);return St.runKernel(function(t){return t.maxPoolBackprop(u,l,c,h)},{$dy:u,$input:l})}(t,i,s,e,n,r,o)}}});return u?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}function Tl(t,e,n,r,o,a){var i=nn(t,"x","avgPool","float32");null==r&&(r=[1,1]),f(fo(n,r),function(){return "Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"});var s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),f(4===s.rank,function(){return "Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),null!=a&&f(x(o),function(){return "Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var l=ro(s.shape,e,n,r,o,a),c=St.runKernel(function(t){return t.avgPool(s,l)},{x:s},function(t){return {x:function(){return function(t,e,n,r,o,a){var i=nn(t,"dy","avgPoolBackprop"),s=nn(e,"input","avgPoolBackprop");f(s.rank===i.rank,function(){return "Rank of input ("+s.rank+") does not match rank of dy ("+i.rank+")"}),null==o&&(o=[1,1]),f(fo(r,o),function(){return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"});var u=s,l=i,c=!1;3===s.rank&&(c=!0,u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2]),l=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),f(4===l.rank,function(){return "Error in avgPoolBackprop: dy must be rank 4 but got rank "+l.rank+"."}),f(4===u.rank,function(){return "Error in avgPoolBackprop: input must be rank 4 but got rank "+u.rank+"."});var h=ro(u.shape,n,r,o,a),p=St.runKernel(function(t){return t.avgPoolBackprop(l,u,h)},{dy4D:l,input4D:u});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}(t,s,e,n,r,o)}}});return c=c.cast(i.dtype),u?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}var Dl=vn({maxPool_:function(t,e,n,r,o){return Al(t,e,n,1,r,o)}}),_l=vn({avgPool_:function(t,e,n,r,o){return Tl(t,e,n,1,r,o)}}),Ol=vn({pool_:function(t,e,n,r,o,a){null==o&&(o=[1,1]),null==a&&(a=1),0===r&&(r="valid");var i=nn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),f(fo(a,o),function(){return "Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var l,c=ro(s.shape,e,a,o,r),h=[c.dilationHeight,c.dilationWidth];l="same"===r?function(t,e){var n=t.map(function(t,n){return t+(t-1)*(e[n]-1)}).map(function(t){return t-1}),r=n.map(function(t){return Math.floor(t/2)}),o=n.map(function(t,e){return t-r[e]});return n.map(function(t,e){return [r[e],o[e]]})}([c.filterHeight,c.filterWidth],h):[[0,0],[0,0]];var p=1===h[0]&&1===h[1],d=function(t,e,n){var r=n.map(function(t){return t[0]}),o=n.map(function(t){return t[1]}),a=t.concat(r,o),i=e.map(function(t,e){return (t-a[e]%t)%t}),s=o.map(function(t,e){return t+i[e]}),u=e.map(function(t,e){return [r[e],s[e]]}),l=e.map(function(t,e){return [0,i[e]]});return [u,l]}([c.inHeight,c.inWidth],h,l),v=d[0],m=d[1],g=p?r:"valid",y=p?s:br(s,h,v),x=("avg"===n?function(){return Tl(y,e,a,1,g)}:function(){return Al(y,e,a,1,g)})(),b=p?x:er(x,h,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Fl=vn({maxPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=nn(t,"x","maxPool3d"),u=s,l=!1;4===s.rank&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),f(5===u.rank,function(){return "Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),f("NDHWC"===a,function(){return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),f(fo(n,i),function(){return "Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),null!=o&&f(x(r),function(){return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=oo(u.shape,e,n,i,r,o,a),h=St.runKernel(function(t,e){var n=t.maxPool3d(u,c);return e([u,n]),n},{x:u},function(t,a){var s=a[0],u=a[1];return {x:function(){return function(t,e,n,r,o,a,i,s){var u=nn(t,"dy","maxPool3dBackprop"),l=nn(e,"input","maxPool3dBackprop"),c=nn(n,"output","maxPool3dBackprop"),h=u,p=l,d=c,v=!1;4===l.rank&&(v=!0,h=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]),p=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]),d=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3])),f(5===h.rank,function(){return "Error in maxPool3dBackprop: dy must be rank 5 but got rank "+h.rank+"."}),f(5===p.rank,function(){return "Error in maxPool3dBackprop: input must be rank 5 but got rank "+p.rank+"."}),f(5===d.rank,function(){return "Error in maxPool3dBackprop: output must be rank 5 but got rank "+d.rank+"."}),null==a&&(a=[1,1,1]),f(fo(o,a),function(){return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"}),null!=s&&f(x(i),function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."});var m=oo(p.shape,r,o,a,i,s),g=St.runKernel(function(t){return t.maxPool3dBackprop(h,p,d,m)},{dy5D:h,input5D:p});return v?g.as4D(g.shape[1],g.shape[2],g.shape[3],g.shape[4]):g}(t,s,u,e,n,i,r,o)}}});return l?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ml=vn({avgPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=nn(t,"x","avgPool3d","float32"),u=s,l=!1;4===s.rank&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),f(5===u.rank,function(){return "Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),f("NDHWC"===a,function(){return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),f(fo(n,i),function(){return "Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),null!=o&&f(x(r),function(){return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=oo(u.shape,e,n,i,r,o,a),h=St.runKernel(function(t){return t.avgPool3d(u,c)},{x:u},function(t){return {x:function(){return function(t,e,n,r,o,a,i){var s=nn(t,"dy","avgPool3dBackprop"),u=nn(e,"input","avgPool3dBackprop"),l=s,c=u,h=!1;4===u.rank&&(h=!0,l=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]),c=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3])),f(5===l.rank,function(){return "Error in avgPool3dBackprop: dy must be rank 5 but got rank "+l.rank+"."}),f(5===c.rank,function(){return "Error in avgPool3dBackprop: input must be rank 5 but got rank "+c.rank+"."}),null==o&&(o=[1,1,1]),f(fo(r,o),function(){return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"}),null!=i&&f(x(a),function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var p=oo(c.shape,n,r,o,a,i),d=St.runKernel(function(t){return t.avgPool3dBackprop(l,c,p)},{dy5D:l,input5D:c});return h?d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]):d}(t,u,e,n,i,r,o)}}});return h=h.cast(u.dtype),l?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}});var Bl=vn({slice_:function(t,e,n){var r,o,a=nn(t,"x","slice");if(0===a.rank)throw new Error("Slicing scalar is not possible");(r="number"==typeof e?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach(function(t){f(-1!==t,function(){return "slice() does not support negative begin indexing."});}),o=(o=null==n?new Array(a.rank).fill(-1):"number"==typeof n?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map(function(t,e){return t>=0?t:(f(-1===t,function(){return "Negative size values should be exactly -1 but got "+t+" for the slice() size at index "+e+"."}),a.shape[e]-r[e])}),function(t,e,n){f(t.rank===e.length,function(){return "Error in slice"+t.rank+"D: Length of begin "+e+" must match the rank of the array ("+t.rank+")."}),f(t.rank===n.length,function(){return "Error in slice"+t.rank+"D: Length of size "+n+" must match the rank of the array ("+t.rank+")."});for(var r=function(r){f(e[r]+n[r]<=t.shape[r],function(){return "Error in slice"+t.rank+"D: begin["+r+"] + size["+r+"] ("+(e[r]+n[r])+") would overflow input.shape["+r+"] ("+t.shape[r]+")"});},o=0;o<t.rank;++o)r(o);}(a,r,o);var i=a.shape;return St.runKernel(function(t){return t.slice(a,r,o)},{$x:a},function(t){for(var e=[],n=0;n<t.rank;n++)e.push([r[n],i[n]-r[n]-o[n]]);return {$x:function(){return t.pad(e)}}})}}),Pl=vn({slice1d_:function(t,e,n){var r=nn(t,"x","slice1d");return f(1===r.rank,function(){return "slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),Bl(r,[e],[n])}}),Ll=vn({slice2d_:function(t,e,n){var r=nn(t,"x","slice2d");return f(2===r.rank,function(){return "slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),Bl(r,e,n)}}),Wl=vn({slice3d_:function(t,e,n){var r=nn(t,"x","slice3d");return f(3===r.rank,function(){return "slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),Bl(r,e,n)}}),Ul=vn({slice4d_:function(t,e,n){var r=nn(t,"x","slice4d");return f(4===r.rank,function(){return "slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),Bl(r,e,n)}});function Vl(t,e,n,r,o){return e.rank<n.rank&&(e=e.reshape(un(e.shape,r))),t.rank<n.rank&&(t=t.reshape(un(t.shape,r))),{$x:function(){var r=t.mul(n.equal(e).cast(t.dtype));return null==o?r:r.transpose(o)}}}var zl=vn({all_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","all","bool"),o=I(e,r.shape),a=o,i=cn(a,r.rank);null!=i&&(r=r.transpose(i),a=pn(a.length,r.rank));var s=St.runKernel(function(t){return t.all(r,a)},{$x:r});if(n){var u=un(s.shape,o);return s.reshape(u)}return s}}),Gl=vn({any_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","any","bool"),o=I(e,r.shape),a=o,i=cn(a,r.rank);null!=i&&(r=r.transpose(i),a=pn(a.length,r.rank));var s=St.runKernel(function(t){return t.any(r,a)},{$x:r});if(n){var u=un(s.shape,o);return s.reshape(u)}return s}}),Hl=vn({argMax_:function(t,e){void 0===e&&(e=0);var n=nn(t,"x","argMax");null==e&&(e=0);var r=I(e,n.shape),o=cn(r,n.rank);return null!=o&&(n=n.transpose(o),r=pn(r.length,n.rank)),St.runKernel(function(t,e){var o=t.argMax(n,r[0]);return e([n]),o},{$x:n},function(t,e){var n=e[0];return {$x:function(){return Fn(n)}}})}}),ql=vn({argMin_:function(t,e){void 0===e&&(e=0);var n=nn(t,"x","argMin");null==e&&(e=0);var r=I(e,n.shape),o=cn(r,n.rank);return null!=o&&(n=n.transpose(o),r=pn(r.length,n.rank)),St.runKernel(function(t,e){var o=t.argMin(n,r[0]);return e([n]),o},{$x:n},function(t,e){var n=e[0];return {$x:function(){return Fn(n)}}})}}),$l=vn({logSumExp_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","logSumExp"),o=I(e,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=un(s.shape,o);return s.reshape(u)}return s}}),Kl=vn({max_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","max"),o=r,a=I(e,r.shape),i=a,s=cn(i,r.rank);null!=s&&(r=r.transpose(s),i=pn(i.length,r.rank));var u=St.runKernel(function(t,e){var n=t.max(r,i);return e([o,n]),n},{$x:r},function(t,e){return Vl(t,e[1],e[0],a,s)});if(n){var l=un(u.shape,a);u=u.reshape(l);}return u}}),jl=vn({mean_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","mean"),o=I(e,r.shape),a=g(sn(r.shape,o)[1]);return jr(function(t){var r=wn(a);return {value:(r.dtype===t.dtype?t:t.cast(r.dtype)).div(r).sum(e,n),gradFunc:function(e){var n=t.shape.slice();return o.forEach(function(t){n[t]=1;}),e.reshape(n).mul(Sn(t.shape,"float32")).div(a)}}})(r)}}),Xl=vn({min_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","min"),o=r,a=I(e,r.shape),i=a,s=cn(i,r.rank);null!=s&&(r=r.transpose(s),i=pn(i.length,r.rank));var u=St.runKernel(function(t,e){var n=t.min(r,i);return e([o,n]),n},{$x:r},function(t,e){return Vl(t,e[1],e[0],a,s)});if(n){var l=un(u.shape,a);u=u.reshape(l);}return u}}),Yl=vn({moments_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=I(e,(t=nn(t,"x","moments")).shape),o=t.mean(r,n),a=o.shape;n||(a=un(o.shape,r));var i=t.toFloat().sub(o.reshape(a)).square();return {mean:o,variance:i.mean(r,n)}}}),Ql=vn({sum_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","sum");"bool"===r.dtype&&(r=r.toInt());var o=I(e,r.shape);return jr(function(t){var e=cn(o,t.rank),r=o,a=t;null!=e&&(a=t.transpose(e),r=pn(r.length,t.rank));var i=St.runKernel(function(t){return t.sum(a,r)},{permutedX:a});if(n){var s=un(i.shape,o);i=i.reshape(s);}return {value:i,gradFunc:function(e){var n=t.shape.slice();return o.forEach(function(t){n[t]=1;}),e.reshape(n).mul(Sn(t.shape,"float32"))}}})(r)}}),Jl=vn({prod_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=nn(t,"x","prod");"bool"===r.dtype&&(r=r.toInt());var o=I(e,r.shape),a=cn(o,r.rank),i=o,s=r;null!=a&&(s=r.transpose(a),i=pn(i.length,r.rank));var u=St.runKernel(function(t){return t.prod(s,i)},{permutedX:s});if(n){var l=un(u.shape,o);u=u.reshape(l);}return u}});var Zl=vn({elu_:function(t){var e=nn(t,"x","elu");return St.runKernel(function(t,n){var r=t.elu(e);return n([r]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return St.runKernel(function(e){return e.eluDer(t,n)},{dy:t,y:n})}}})}}),tc=vn({leakyRelu_:function(t,e){void 0===e&&(e=.2);var n=nn(t,"x","leakyRelu");return Du(wn(e).mul(n),n)}}),ec=vn({prelu_:function(t,e){var n=nn(t,"x","prelu"),r=nn(e,"alpha","prelu");return St.runKernel(function(t,e){var o=t.prelu(n,r);return e([n,r]),o},{$x:n,$alpha:r},function(t,e){var n=e[0],r=e[1],o=n.greater(0);return {$x:function(){return Cu(o,t,t.mul(r))},$alpha:function(){var e=Cu(o,Fn(t),t.mul(n)),a=eo(r.shape,t.shape);return a.length>0&&(e=e.sum(a)),e.reshape(r.shape)}}})}}),nc=vn({relu_:function(t){var e=nn(t,"x","relu");return "bool"===e.dtype?e.toInt():St.runKernel(function(t,n){var r=t.relu(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mulStrict(n.step().toFloat())}}})}}),rc=vn({selu_:function(t){var e=nn(t,"x","selu");return St.runKernel(function(t,n){var r=t.selu(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){var e=n.greater(wn(0)),r=wn(ji),o=wn(Xi),a=t.mul(o),i=t.mul(r).mul(n.toFloat().exp());return Cu(e,a,i)}}})}});var oc=vn({transpose_:function(t,e){var n=nn(t,"x","transpose");return null==e&&(e=n.shape.map(function(t,e){return e}).reverse()),f(n.rank===e.length,function(){return "Error in transpose: rank of input "+n.rank+" must match length of perm "+e+"."}),e.forEach(function(t){f(t>=0&&t<n.rank,function(){return "All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e});}),n.rank<=1?n.clone():St.runKernel(function(t){return t.transpose(n,e)},{$x:n},function(t){var n=hn(e);return {$x:function(){return t.transpose(n)}}})}});var ac=vn({localResponseNormalization_:function(t,e,n,r,o){void 0===e&&(e=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=.5);var a=nn(t,"x","localResponseNormalization");f(4===a.rank||3===a.rank,function(){return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+a.rank+"."}),f(x(e),function(){return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."});var i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=St.runKernel(function(t,a){var s=t.localResponseNormalization4D(i,e,n,r,o);return a([i,s]),s},{x4D:i},function(t,a){var i=a[0],s=a[1];return {x4D:function(){return St.runKernel(function(a){return a.LRNGrad(t,i,s,e,n,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}});var ic=vn({norm_:function(t,e,n,r){void 0===e&&(e="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1);var o=function t(e,n,r){if(void 0===r&&(r=null),0===e.rank)return e.abs();if(1!==e.rank&&null===r)return t(e.reshape([-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return e.abs().sum(r);if(n===1/0)return e.abs().max(r);if(n===-1/0)return e.abs().min(r);if("euclidean"===n||2===n)return e.abs().pow(wn(2,"int32")).sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return e.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return e.abs().sum(r[1]).max(r[0]);if(n===-1/0)return e.abs().sum(r[1]).min(r[0]);if("fro"===n||"euclidean"===n)return e.square().sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=nn(t,"x","norm"),e,n),a=o.shape;if(r){var i=I(n,t.shape);a=un(o.shape,i);}return o.reshape(a)}});var sc=vn({basicLSTMCell_:function(t,e,n,r,o,a){var i=nn(t,"forgetBias","basicLSTMCell"),s=nn(e,"lstmKernel","basicLSTMCell"),u=nn(n,"lstmBias","basicLSTMCell"),l=nn(r,"data","basicLSTMCell"),c=nn(o,"c","basicLSTMCell"),h=nn(a,"h","basicLSTMCell"),p=l.concat(h,1).matMul(s).add(u),f=p.shape[0],d=p.shape[1]/4,v=[f,d],m=p.slice([0,0],v),g=p.slice([0,d],v),y=p.slice([0,2*d],v),x=p.slice([0,3*d],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(c.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return [b,w]}}),uc=vn({multiRNNCell_:function(t,e,n,r){for(var o=nn(e,"data","multiRNNCell"),a=rn(n,"c","multiRNNCell"),i=rn(r,"h","multiRNNCell"),s=o,u=[],l=0;l<t.length;l++){var c=t[l](s,a[l],i[l]);u.push(c[0]),u.push(c[1]),s=c[1];}var h=[],p=[];for(l=0;l<u.length;l+=2)h.push(u[l]),p.push(u[l+1]);return [h,p]}});var lc=vn({movingAverage_:function(t,e,n,r,o){void 0===o&&(o=!0);var a=nn(t,"v","movingAverage"),i=nn(e,"x","movingAverage"),s=nn(n,"decay","movingAverage");Ct(a,i),f(y(a.shape,i.shape),function(){return "Shape mismatch in v and x"});var u=wn(1),l=u.sub(s),c=i.sub(a).mul(l);if(o){f(null!=r,function(){return "When using zeroDebias: true, step is required."});var h=nn(r,"step","movingAverage");c=c.div(u.sub(Wu(s,h)));}return a.add(c)}});var cc=vn({stridedSlice_:function(t,e,n,r,o,a,i,s,u){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===u&&(u=0),null==r&&(r=new Array(e.length)),0!==i)throw new Error("ellipsis mask is not yet supported");var l=nn(t,"x","stridedSlice"),c=Pr(s),h=l.shape.slice();c.forEach(function(t){e[t]=0,n[t]=1,h.splice(t,0,1);}),l=l.reshape(h);for(var p=0;p<l.rank;p++)e[p]=Wr(o,e,r,l.shape,p),n[p]=Ur(a,n,r,l.shape,p),r[p]=r[p]||1;var f=Pr(u);f.forEach(function(t){n[t]=e[t]+1,r[t]=1;});var d=Lr(e,n,r),v=d.filter(function(t,e){return -1===f.indexOf(e)});return r.every(function(t){return 1===t})?Bl(l,e,d).reshape(v):St.runKernel(function(t){return t.stridedSlice(l,e,n,r)},{$x:l}).reshape(v)}});var hc=vn({topk_:function(t,e,n){void 0===e&&(e=1),void 0===n&&(n=!0);var r=nn(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=St.runKernel(function(t){return t.topk(r,e,n)},{$x:r});return {values:a[0],indices:a[1]}}});var pc=vn({scatterND_:function(t,e,n){var r=nn(t,"indices","scatterND","int32"),o=nn(e,"updates","scatterND");return Mr(o,r,n),St.runKernel(function(t){return t.scatterND(r,o,n)},{$indices:r,$updates:o})}});var fc=vn({fft_:function(t){f("complex64"===t.dtype,function(){return "The dtype for tf.spectral.fft() must be complex64 but got "+t.dtype+"."});var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return St.runKernel(function(t){return t.fft(r)},{input:t}).reshape(t.shape)}}),dc=vn({ifft_:function(t){f("complex64"===t.dtype,function(){return "The dtype for tf.spectral.ifft() must be complex64 but got "+t.dtype+"."});var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return St.runKernel(function(t){return t.ifft(r)},{input:t}).reshape(t.shape)}}),vc=vn({rfft_:function(t,e){f("float32"===t.dtype,function(){return "The dtype for rfft() must be real value but got "+t.dtype});var n,r=t.shape[t.shape.length-1],o=t.size/r;if(null!=e&&e<r){var a=t.shape.map(function(t){return 0}),i=t.shape.map(function(t){return t});i[t.shape.length-1]=e,n=t.slice(a,i),r=e;}else if(null!=e&&e>r){var s=t.shape.map(function(t){return t});s[t.shape.length-1]=e-r,n=t.concat(An(s),t.shape.length-1),r=e;}else n=t;var u=n.zerosLike(),l=mn(n,u).as2D(o,r),c=fc(l),h=Math.floor(r/2)+1,p=gn(c),d=yn(c),v=p.split([h,r-h],p.shape.length-1),m=d.split([h,r-h],d.shape.length-1),g=n.shape.slice();return g[n.shape.length-1]=h,mn(v[0],m[0]).reshape(g)}}),mc=vn({irfft_:function(t){var e=t.shape[t.shape.length-1],n=t.size/e;if(e<=2){var r=t.as2D(n,e),o=dc(r);return gn(o)}var a=[n,2*(e-1)],i=gn(t).as2D(n,e),s=yn(t).as2D(n,e),u=i.slice([0,1],[n,e-2]).reverse(1),l=s.slice([0,1],[n,e-2]).reverse(1).mul(wn(-1)),c=i.concat(u,1),h=s.concat(l,1);return r=mn(c,h).as2D(a[0],a[1]),o=dc(r),gn(o)}}),gc=Object.freeze({fft:fc,ifft:dc,rfft:vc,irfft:mc});var yc=vn({sparseToDense_:function(t,e,n,r){void 0===r&&(r=0);var o=nn(t,"sparseIndices","sparseToDense","int32"),a=nn(e,"sparseValues","sparseToDense"),i=nn(r,"defaultValue","sparseToDense",a.dtype);return function(t,e,n,r){if("int32"!==t.dtype)throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+t.shape+".");var o=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error("outputShape has incorrect number of elements:, "+n.length+", should be: "+a+".");var i=e.size;if(0!==e.rank&&(1!==e.rank||i!==o))throw new Error("sparseValues has incorrect shape "+e.shape+", should be [] or ["+o+"]");if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),St.runKernel(function(t){return t.sparseToDense(o,a,n,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}});var xc=vn({gatherND_:function(t,e){var n=nn(e,"indices","gatherND","int32"),r=nn(t,"x","gatherND");return St.runKernel(function(t){return t.gatherND(r,n)},{$x:r,$indices:n})}});var bc=vn({diag_:function(t){var e=nn(t,"x","diag").flatten(),n=t.shape.concat(t.shape);return St.runKernel(function(t){return t.diag(e)},{$x:e}).reshape(n)}});var wc=vn({dropout_:function(t,e,n,r){var o=nn(t,"x","dropout");if(f("float32"===o.dtype,function(){return "x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),f(e>=0&&e<1,function(){return "rate must be a float in the range [0, 1), but got "+e+"."}),0===e)return t instanceof ct?o.clone():o;var a=function(t,e){if(null==e)return t.shape.slice();if(y(t.shape,e))return e;if(t.shape.length===e.length){for(var n=[],r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(o,n),i=1-e,s=yr(a,0,1,"float32",r).add(i).floor().div(i);return o.mul(s)}});function Cc(t,e,n){for(var r=1-t%2,o=new Float32Array(t),a=0;a<t;++a){var i=2*Math.PI*a/(t+r-1);o[a]=e-n*Math.cos(i);}return Cn(o,"float32")}var Ec=vn({hannWindow_:function(t){return Cc(t,.5,.5)}}),Rc=vn({hammingWindow_:function(t){return Cc(t,.54,.46)}}),Ic=vn({frame_:function(t,e,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=0);for(var a=0,i=[];a+e<=t.size;)i.push(Bl(t,a,e)),a+=n;if(r)for(;a<t.size;){var s=a+e-t.size,u=Mn([Bl(t,a,e-s),Tn([s],o)]);i.push(u),a+=n;}return 0===i.length?En([],[0,e]):Mn(i).as2D(i.length,e)}}),kc=vn({stft_:function(t,e,n,r,o){var a;void 0===o&&(o=Ec),null==r&&(a=e,r=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Ic(t,e,n),s=Pu(i,o(e)),u=[],l=0;l<i.shape[0];l++)u.push(vc(s.slice([l,0],[1,e]),r));return Mn(u)}}),Nc=Object.freeze({hannWindow:Ec,hammingWindow:Rc,frame:Ic,stft:kc});var Sc,Ac=function(t,e,o){return void 0===o&&(o=1),n(this,void 0,void 0,function(){var n,a,i,s,u,l,c,h,p,v,m,g,y,x;return r(this,function(r){switch(r.label){case 0:return n=nn(t,"predictions","inTopK"),a=nn(e,"targets","inTopK"),f(n.rank>1,function(){return "inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),f(n.rank-1===a.rank,function(){return "predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+a.rank}),d(n.shape.slice(0,n.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],f(o>0&&o<=i,function(){return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+o}),[4,n.data()];case 1:return s=r.sent(),[4,a.data()];case 2:for(u=r.sent(),l=[s.length/i,i],h=l[1],p=N("bool",c=l[0]),v=0;v<c;v++){for(m=v*h,g=s.subarray(m,m+h),y=[],x=0;x<g.length;x++)y.push({value:g[x],index:x});for(y.sort(function(t,e){return e.value-t.value}),p[v]=0,x=0;x<o;x++)if(y[x].index===u[v]){p[v]=1;break}}return t!==n&&n.dispose(),e!==a&&a.dispose(),[2,xn(p,a.shape,"bool")]}})})};!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";}(Sc||(Sc={}));var Tc=vn({absoluteDifference_:function(t,e,n,r){void 0===r&&(r=Sc.SUM_BY_NONZERO_WEIGHTS);var o=nn(t,"labels","absoluteDifference"),a=nn(e,"predictions","absoluteDifference"),i=null;null!=n&&(i=nn(n,"weights","absoluteDifference")),d(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Dc(s,i,r)}}),Dc=vn({computeWeightedLoss_:function(t,e,n){void 0===n&&(n=Sc.SUM_BY_NONZERO_WEIGHTS);var r=nn(t,"losses","computeWeightedLoss"),o=null;null!=e&&(o=nn(e,"weights","computeWeightedLoss"));var a=null==o?r:r.mul(o);if(n===Sc.NONE)return a;if(n===Sc.SUM)return a.sum();if(n===Sc.MEAN){if(null==o)return a.mean();var i=r.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(wn(i)):s}if(n===Sc.SUM_BY_NONZERO_WEIGHTS){if(null==o)return a.sum().div(wn(r.size));var u=o.mul(Sn(r.shape)).notEqual(wn(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}}),_c=vn({cosineDistance_:function(t,e,n,r,o){void 0===o&&(o=Sc.SUM_BY_NONZERO_WEIGHTS);var a=nn(t,"labels","cosineDistance"),i=nn(e,"predictions","cosineDistance"),s=null;null!=r&&(s=nn(r,"weights","cosineDistance")),d(a.shape,i.shape,"Error in cosineDistance: ");var u=wn(1).sub(a.mul(i).sum(n,!0));return Dc(u,s,o)}}),Oc=vn({hingeLoss_:function(t,e,n,r){void 0===r&&(r=Sc.SUM_BY_NONZERO_WEIGHTS);var o=nn(t,"labels","hingeLoss"),a=nn(e,"predictions","hingeLoss"),i=null;null!=n&&(i=nn(n,"weights","hingeLoss")),d(o.shape,a.shape,"Error in hingeLoss: ");var s=wn(1);o=wn(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Dc(u,i,r)}}),Fc=vn({huberLoss_:function(t,e,n,r,o){void 0===r&&(r=1),void 0===o&&(o=Sc.SUM_BY_NONZERO_WEIGHTS);var a=nn(t,"labels","huberLoss"),i=nn(e,"predictions","huberLoss"),s=null;null!=n&&(s=nn(n,"weights","huberLoss")),d(a.shape,i.shape,"Error in huberLoss: ");var u=wn(r),l=i.sub(a).abs(),c=Ou(l,u),h=l.sub(c),p=wn(.5).mul(c.square()).add(u.mul(h));return Dc(p,s,o)}}),Mc=vn({logLoss_:function(t,e,n,r,o){void 0===r&&(r=1e-7),void 0===o&&(o=Sc.SUM_BY_NONZERO_WEIGHTS);var a=nn(t,"labels","logLoss"),i=nn(e,"predictions","logLoss"),s=null;null!=n&&(s=nn(n,"weights","logLoss")),d(a.shape,i.shape,"Error in logLoss: ");var u=wn(1),l=wn(r),c=a.mul(i.add(l).log()).neg().sub(u.sub(a).mul(u.sub(i).add(l).log()));return Dc(c,s,o)}}),Bc=vn({meanSquaredError_:function(t,e,n,r){void 0===r&&(r=Sc.SUM_BY_NONZERO_WEIGHTS);var o=nn(t,"labels","meanSquaredError"),a=nn(e,"predictions","meanSquaredError"),i=null;null!=n&&(i=nn(n,"weights","meanSquaredError")),d(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Dc(s,i,r)}}),Pc=vn({sigmoidCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Sc.SUM_BY_NONZERO_WEIGHTS);var a=nn(t,"multiClassLabels","sigmoidCrossEntropy"),i=nn(e,"logits","sigmoidCrossEntropy"),s=null;if(null!=n&&(s=nn(n,"weights","sigmoidCrossEntropy")),d(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=wn(r),l=wn(1),c=wn(.5);a=a.mul(l.sub(u)).add(c.mul(u));}var h=function(t,e){var n=nn(t,"labels","sigmoidCrossEntropyWithLogits"),r=nn(e,"logits","sigmoidCrossEntropyWithLogits");d(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");var o=r.relu(),a=r.mul(n),i=r.abs().neg().exp().log1p();return o.sub(a).add(i)}(a,i);return Dc(h,s,o)}}),Lc=vn({softmaxCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Sc.SUM_BY_NONZERO_WEIGHTS);var a=nn(t,"onehotLabels","softmaxCrossEntropy"),i=nn(e,"logits","softmaxCrossEntropy"),s=null;if(null!=n&&(s=nn(n,"weights","softmaxCrossEntropy")),d(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=wn(r),l=wn(1),c=wn(a.shape[1]);a=a.mul(l.sub(u)).add(u.div(c));}var h=function(t,e,n){if(void 0===n&&(n=-1),-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+e.rank+" and dim was "+n);return jr(function(t,e,r){var o=e.logSumExp([n],!0),a=e.toFloat().sub(o);return r([t,a]),{value:a.mul(t).neg().sum([n]),gradFunc:function(t,e){var r=e[0],o=e[1],a=un(t.shape,[n]);return [t.reshape(a).mul(r.toFloat().sub(o.exp())),t.reshape(a).mul(o.exp().sub(r.toFloat()))]}}})(t,e)}(a,i);return Dc(h,s,o)}}),Wc=Object.freeze({get Reduction(){return Sc},absoluteDifference:Tc,computeWeightedLoss:Dc,cosineDistance:_c,hingeLoss:Oc,huberLoss:Fc,logLoss:Mc,meanSquaredError:Bc,sigmoidCrossEntropy:Pc,softmaxCrossEntropy:Lc});function Uc(t,e){return void 0===e&&(e=!1),St.tidy(function(){if(2!==t.shape.length)throw new Error("qr2d() requires a 2D Tensor, but got a "+t.shape.length+"D Tensor.");for(var n=t.shape[0],r=t.shape[1],o=sr(n),a=t.clone(),i=En([[1]],[1,1]),s=i.clone(),u=n>=r?r:n,l=function(t){var e,u=a,l=s,c=o;e=St.tidy(function(){var e=a.slice([t,t],[n-t,1]),u=e.norm(),l=a.slice([t,t],[1,1]),c=En([[-1]]).where(l.greater(0),En([[1]])),h=l.sub(c.mul(u)),p=e.div(h);s=1===p.shape[0]?i.clone():i.concat(p.slice([1,0],[p.shape[0]-1,p.shape[1]]),0);var f=c.matMul(h).div(u).neg(),d=a.slice([t,0],[n-t,r]),v=f.mul(s);if(0===t)a=d.sub(v.matMul(s.transpose().matMul(d)));else{var m=d.sub(v.matMul(s.transpose().matMul(d)));a=a.slice([0,0],[t,r]).concat(m,0);}var g=o.slice([0,t],[n,o.shape[1]-t]);if(0===t)o=g.sub(g.matMul(s).matMul(v.transpose()));else{var y=g.sub(g.matMul(s).matMul(v.transpose()));o=o.slice([0,0],[n,t]).concat(y,1);}return [s,a,o]}),s=e[0],a=e[1],o=e[2],Ve([u,l,c]);},c=0;c<u;++c)l(c);return !e&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]})}var Vc=vn({gramSchmidt_:function(t){var e;if(Array.isArray(t)){e=!1,f(null!=t&&t.length>0,function(){return "Gram-Schmidt process: input must not be null, undefined, or empty"});for(var n=t[0].shape[0],r=function(e){f(t[e].shape[0]===n,function(){return "Gram-Schmidt: Non-unique lengths found in the input vectors: ("+t[e].shape[0]+" vs. "+n+")"});},o=1;o<t.length;++o)r(o);}else e=!0,t=Un(t,t.shape[0],0).map(function(t){return wr(t,[0])});f(t.length<=t[0].shape[0],function(){return "Gram-Schmidt: Number of vectors ("+t.length+") exceeds number of dimensions ("+t[0].shape[0]+")."});var a=[],i=t,s=function(t){a.push(St.tidy(function(){var e=i[t];if(t>0)for(var n=0;n<t;++n){var r=Ql(a[n].mulStrict(e)).mul(a[n]);e=e.sub(r);}return e.div(ic(e,"euclidean"))}));};for(o=0;o<t.length;++o)s(o);return e?Cr(a,0):a}}),zc=vn({qr_:function(t,e){if(void 0===e&&(e=!1),t.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+t.rank);if(2===t.rank)return Uc(t,e);var n=t.shape.slice(0,t.shape.length-2).reduce(function(t,e){return t*e}),r=Ir(t.reshape([n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],a=[];return r.forEach(function(t){var n=Uc(t,e),r=n[0],i=n[1];o.push(r),a.push(i);}),[Cr(o,0).reshape(t.shape),Cr(a,0).reshape(t.shape)]}}),Gc=Object.freeze({gramSchmidt:Vc,qr:zc});function Hc(t,e,n,r,o){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY);var a=t.shape[0];return n=Math.min(n,a),f(0<=r&&r<=1,function(){return "iouThreshold must be in [0, 1], but was '"+r+"'"}),f(2===t.rank,function(){return "boxes must be a 2D tensor, but was of rank '"+t.rank+"'"}),f(4===t.shape[1],function(){return "boxes must have 4 columns, but 2nd dimension was "+t.shape[1]}),f(1===e.rank,function(){return "scores must be a 1D tensor"}),f(e.shape[0]===a,function(){return "scores has incompatible shape with boxes. Expected "+a+", but was "+e.shape[0]}),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o}}var qc=vn({resizeBilinear_:function(t,e,n){void 0===n&&(n=!1);var r=nn(t,"images","resizeBilinear");f(3===r.rank||4===r.rank,function(){return "Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),f(2===e.length,function(){return "Error in resizeBilinear: new shape must 2D, but got shape "+e+"."});var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=St.runKernel(function(t,e){return e([o]),t.resizeBilinear(o,i,s,n)},{batchImages:o},function(t,e){return {batchImages:function(){return St.runKernel(function(r){return r.resizeBilinearBackprop(t,e[0],n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),$c=vn({resizeNearestNeighbor_:function(t,e,n){void 0===n&&(n=!1);var r=nn(t,"images","resizeNearestNeighbor");f(3===r.rank||4===r.rank,function(){return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),f(2===e.length,function(){return "Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."}),f("float32"===r.dtype||"int32"===r.dtype,function(){return "`images` must have `int32` or `float32` as dtype"});var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=St.runKernel(function(t,e){return e([o]),t.resizeNearestNeighbor(o,i,s,n)},{batchImages:o},function(t,e){return {batchImages:function(){return St.runKernel(function(r){return r.resizeNearestNeighborBackprop(t,e[0],n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Kc=vn({nonMaxSuppression_:function(t,e,n,r,o){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY);var a=nn(t,"boxes","nonMaxSuppression"),i=nn(e,"scores","nonMaxSuppression"),s=Hc(a,i,n,r,o);return n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,St.runKernel(function(t){return t.nonMaxSuppression(a,i,n,r,o)},{$boxes:a})}}),jc=function(t,e,o,a,i){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),n(this,void 0,void 0,function(){var n,s,u,l,c,h,p;return r(this,function(r){switch(r.label){case 0:return n=nn(t,"boxes","nonMaxSuppressionAsync"),s=nn(e,"scores","nonMaxSuppressionAsync"),u=Hc(n,s,o,a,i),o=u.maxOutputSize,a=u.iouThreshold,i=u.scoreThreshold,[4,Promise.all([n.data(),s.data()])];case 1:return l=r.sent(),c=l[0],h=l[1],p=Ro(c,h,o,a,i),n!==t&&n.dispose(),s!==e&&s.dispose(),[2,p]}})})},Xc=vn({cropAndResize_:function(t,e,n,r,o,a){var i=nn(t,"image","cropAndResize","float32"),s=nn(e,"boxes","cropAndResize","float32"),u=nn(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var l=s.shape[0];return f(4===i.rank,function(){return "Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),f(2===s.rank&&4===s.shape[1],function(){return "Error in cropAndResize: boxes must be have size ["+l+",4] but had shape "+s.shape+"."}),f(1===u.rank&&u.shape[0]===l,function(){return "Error in cropAndResize: boxInd must be have size ["+l+"] but had shape "+s.shape+"."}),f(2===r.length,function(){return "Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),f(r[0]>=1&&r[1]>=1,function(){return "cropSize must be atleast [1,1], but was "+r}),f("bilinear"===o||"nearest"===o,function(){return "method must be bilinear or nearest, but was "+o}),St.runKernel(function(t,e){return t.cropAndResize(i,s,u,r,o,a)},{$image:i,$boxes:s})}}),Yc=Object.freeze({resizeBilinear:qc,resizeNearestNeighbor:$c,nonMaxSuppression:Kc,nonMaxSuppressionAsync:jc,cropAndResize:Xc});var Qc=vn({matMul_:function(t){var e,n=t.a,r=t.b,o=t.transposeA,a=void 0!==o&&o,i=t.transposeB,s=void 0!==i&&i,u=t.bias,l=t.activation,c=void 0===l?"linear":l,h=t.preluActivationWeights,p=nn(n,"a","fused matMul"),d=nn(r,"b","fused matMul");e=wt(p,d),p=e[0],d=e[1];var v=a?p.shape[p.rank-2]:p.shape[p.rank-1],m=s?d.shape[d.rank-1]:d.shape[d.rank-2],x=a?p.shape[p.rank-1]:p.shape[p.rank-2],b=s?d.shape[d.rank-2]:d.shape[d.rank-1],w=p.shape.slice(0,-2),C=d.shape.slice(0,-2),E=g(w),R=g(C);f(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),f(y(w,C),function(){return "Error in fused matMul: outer dimensions ("+w+") and ("+C+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),f(v===m,function(){return "Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var I,k,N=p.shape.slice(0,-2).concat([x,b]),S=a?p.as3D(E,v,x):p.as3D(E,x,v),A=s?d.as3D(R,b,m):d.as3D(R,m,b);null!=u&&no(N,(I=wt(I=nn(u,"bias","fused matMul"),p)[0]).shape),null!=h&&(k=nn(h,"prelu weights","fused matMul"));var T={$a:S,$b:A};return null!=u&&(T.$bias=I),null!=h&&(T.$preluActivationWeights=k),St.runKernel(function(t,e){var n=t.fusedBatchMatMul({a:S,b:A,transposeA:a,transposeB:s,bias:I,activation:c,preluActivationWeights:k});return e([S,A,n]),n},T,function(t,e){var n,r=e[0],o=e[1],i=e[2];if(null==c||"linear"===c)n=t;else{if("relu"!==c)throw new Error("Gradient for activation "+c+" has not been implemented yet.");n=t.mul(i.step());}var l={};return null!=u&&(l={$bias:function(){var t=n,e=eo(I.shape,n.shape);return e.length>0&&(t=t.sum(e)),t.reshape(I.shape)}}),a||s?!a&&s?Object.assign({$a:function(){return n.matMul(o,!1,!1)},$b:function(){return n.matMul(r,!0,!1)}},l):a&&!s?Object.assign({$a:function(){return o.matMul(n,!1,!0)},$b:function(){return r.matMul(n,!1,!1)}},l):Object.assign({$a:function(){return o.matMul(n,!0,!0)},$b:function(){return n.matMul(r,!0,!0)}},l):Object.assign({$a:function(){return n.matMul(o,!1,!0)},$b:function(){return r.matMul(n,!0,!1)}},l)}).reshape(N)}}),Jc=vn({conv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,s=t.dilations,u=void 0===s?[1,1]:s,l=t.dimRoundingMode,c=t.bias,h=t.activation,p=void 0===h?"linear":h,d=t.preluActivationWeights,v=nn(e,"x","conv2d"),m=nn(n,"filter","conv2d"),g=v,y=!1;3===v.rank&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),f(4===g.rank,function(){return "Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),f(4===m.rank,function(){return "Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),null!=l&&f(x(o),function(){return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+l+" but got pad "+o+"."}),f(g.shape[3]===m.shape[2],function(){return "Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),f(fo(r,u),function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),f("NHWC"===i,function(){return "Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,w,C=ao(g.shape,m.shape,r,u,o,l);null!=c&&(b=wt(b=nn(c,"bias","fused conv2d"),v)[0],no(C.outShape,b.shape)),null!=d&&(w=nn(d,"prelu weights","fused conv2d"));var E={x:g,$filter:m};null!=c&&(E.$bias=b),null!=d&&(E.$preluActivationWeights=w);var R=St.runKernel(function(t,e){var n=t.fusedConv2d(g,m,C,b,p,w);return e([m,g,n]),n},E,function(t,e){var n,a=e,i=a[0],s=a[1],l=a[2];if(null==p||"linear"===p)n=t;else{if("relu"!==p)throw new Error("Gradient for activation "+p+" has not been implemented yet.");n=t.mul(l.step());}f(po(u),function(){return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var h={};return null!=c&&(h={$bias:function(){var t=n,e=eo(b.shape,n.shape);return e.length>0&&(t=t.sum(e)),t.reshape(b.shape)}}),Object.assign({x:function(){return ml(s.shape,n,i,r,o)},$filter:function(){return vl(s,n,i.shape,r,o)}},h)});return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Zc=Object.freeze({matMul:Qc,conv2d:Jc}),th=Object.freeze({image:Yc,linalg:Gc,losses:Wc,spectral:gc,fused:Zc,signal:Nc,op:vn,batchNormalization2d:cu,batchNormalization3d:hu,batchNormalization4d:pu,batchNormalization:fu,batchNorm:du,batchNorm2d:vu,batchNorm3d:mu,batchNorm4d:gu,booleanMaskAsync:sl,complex:mn,real:gn,imag:yn,concat:Mn,concat1d:Bn,concat2d:Pn,concat3d:Ln,concat4d:Wn,split:Un,conv1d:pl,conv2d:fl,conv3d:dl,conv2dDerFilter:vl,conv2dDerInput:ml,depthwiseConv2d:gl,separableConv2d:yl,conv2dTranspose:xl,conv3dTranspose:bl,matMul:wl,dot:Cl,outerProduct:El,reverse:Rl,reverse1d:Il,reverse2d:kl,reverse3d:Nl,reverse4d:Sl,maxPool:Dl,avgPool:_l,pool:Ol,maxPool3d:Fl,avgPool3d:Ml,slice:Bl,slice1d:Pl,slice2d:Ll,slice3d:Wl,slice4d:Ul,abs:Es,acos:Rs,acosh:Is,asin:ks,asinh:Ns,atan:Ss,atanh:As,ceil:Ts,clipByValue:Ds,cos:_s,cosh:Os,erf:Fs,exp:Ms,expm1:Bs,floor:Ps,log:Ls,log1p:Ws,logSigmoid:Us,neg:Vs,reciprocal:zs,round:Gs,rsqrt:Hs,sigmoid:qs,sign:$s,isNaN:Ks,isInf:js,isFinite:Xs,sin:Ys,sinh:Qs,softplus:Js,sqrt:Zs,square:tu,step:eu,tan:nu,tanh:ru,all:zl,any:Gl,argMax:Hl,argMin:ql,logSumExp:$l,max:Kl,mean:jl,min:Xl,moments:Yl,sum:Ql,prod:Jl,equal:qu,equalStrict:$u,greater:Ku,greaterEqual:ju,greaterEqualStrict:Xu,greaterStrict:Yu,less:Qu,lessEqual:Ju,lessEqualStrict:Zu,lessStrict:tl,notEqual:el,notEqualStrict:nl,add:Ru,addN:Iu,addStrict:ku,atan2:Nu,div:Su,divStrict:Au,floorDiv:Tu,maximum:Du,maximumStrict:_u,minimum:Ou,minimumStrict:Fu,mod:Mu,modStrict:Bu,mul:Pu,mulStrict:Lu,pow:Wu,powStrict:Uu,squaredDifference:Vu,squaredDifferenceStrict:zu,sub:Gu,subStrict:Hu,elu:Zl,leakyRelu:tc,prelu:ec,relu:nc,selu:rc,logicalAnd:yu,logicalNot:xu,logicalOr:bu,logicalXor:wu,where:Cu,whereAsync:Eu,buffer:Zn,print:tr,batchToSpaceND:er,cast:nr,clone:rr,cumsum:or,depthToSpace:ar,expandDims:ir,eye:sr,multinomial:ur,oneHot:lr,pad:cr,pad1d:hr,pad2d:pr,pad3d:fr,pad4d:dr,rand:vr,randomNormal:mr,randomGamma:gr,randomUniform:yr,reshape:xr,spaceToBatchND:br,squeeze:wr,stack:Cr,tile:Er,truncatedNormal:Rr,unstack:Ir,setdiff1dAsync:kr,fill:Tn,linspace:Dn,ones:Sn,range:_n,scalar:wn,tensor:xn,tensor1d:Cn,tensor2d:En,tensor3d:Rn,tensor4d:In,tensor5d:kn,tensor6d:Nn,zeros:An,onesLike:On,zerosLike:Fn,transpose:oc,softmax:Yr,logSoftmax:Qr,localResponseNormalization:ac,norm:ic,gather:al,unsortedSegmentSum:il,basicLSTMCell:sc,multiRNNCell:uc,movingAverage:lc,stridedSlice:cc,topk:hc,scatterND:pc,fft:fc,ifft:dc,rfft:vc,irfft:mc,sparseToDense:yc,gatherND:xc,diag:bc,dropout:wc,hannWindow:Ec,hammingWindow:Rc,frame:Ic,stft:kc,inTopKAsync:Ac});function eh(t,e,n,r){if("linear"===n)return t.linear(e);if("relu"===n)return t.relu(e);if("elu"===n)return t.elu(e);if("prelu"===n)return t.prelu(e,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var nh=function(){function t(){if(this.blockSize=48,this.firstUse=!0,i.get("IS_BROWSER")){var t="undefined"!=typeof OffscreenCanvas?new OffscreenCanvas(300,150):"undefined"!=typeof document?document.createElement("canvas"):null;null!==t&&(this.fromPixels2DContext=t.getContext("2d"));}this.data=new Jr(this,St);}return t.prototype.register=function(t,e,n){if(this.firstUse&&(this.firstUse=!1,i.get("IS_NODE")&&Ze("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n")),this.data.has(t))throw new Error("Data buffer is already registered");this.data.set(t,{dtype:n});},t.prototype.write=function(t,e){if(null==e)throw new Error("MathBackendCPU.write(): values can not be null");this.data.get(t).values=e;},t.prototype.fromPixels=function(t,e){if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n,r,o=t.data instanceof Uint8Array,a="undefined"!=typeof ImageData&&t instanceof ImageData,s="undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement,l=s?[t.videoWidth,t.videoHeight]:[t.width,t.height],c=l[0],h=l[1];if(i.get("IS_NODE")&&null==t.getContext)throw new Error("When running in node, pixels must be an HTMLCanvasElement like the one returned by the `canvas` npm package");if(null!=t.getContext)n=t.getContext("2d").getImageData(0,0,c,h).data;else if(a||o)n=t.data;else{if(!u&&!s)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);if(null==this.fromPixels2DContext)throw new Error("Can't read pixels from HTMLImageElement outside the browser.");this.fromPixels2DContext.canvas.width=c,this.fromPixels2DContext.canvas.height=h,this.fromPixels2DContext.drawImage(t,0,0,c,h),n=this.fromPixels2DContext.getImageData(0,0,c,h).data;}if(4===e)r=new Int32Array(n);else{var p=c*h;r=new Int32Array(p*e);for(var f=0;f<p;f++)for(var d=0;d<e;++d)r[f*e+d]=n[4*f+d];}return Rn(r,[h,c,e],"int32")},t.prototype.read=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return [2,this.readSync(t)]})})},t.prototype.readSync=function(t){var e=this.data.get(t),n=e.dtype,r=e.complexTensors;return "complex64"===n?bo(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(t).values},t.prototype.bufferSync=function(t){var e=this.readSync(t.dataId),n=e;if("string"===t.dtype)try{n=e.map(function(t){return X(t)});}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8")}return Zn(t.shape,t.dtype,n)},t.prototype.disposeData=function(t){if(this.data.has(t)){var e=this.data.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.data.delete(t);}},t.prototype.time=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=$(),t(),[2,{kernelMs:$()-e}]})})},t.prototype.memory=function(){return {unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(t,e){var n=ct.make(t.shape,{},"complex64");return this.data.get(n.dataId).complexTensors={real:St.keep(t.clone()),imag:St.keep(e.clone())},n},t.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},t.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},t.prototype.assertNotComplex=function(t,e){Array.isArray(t)||(t=[t]),t.forEach(function(t){null!=t&&f("complex64"!==t.dtype,function(){return e+" does not support complex64 tensors."});});},t.prototype.slice=function(t,e,n){if(this.assertNotComplex(t,"slice"),Vr(t.shape,e,n)){var r=zr(e,t.strides),o=g(n);return xn(this.readSync(t.dataId).subarray(r,r+o),n,t.dtype)}for(var a=Zn(n,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s).map(function(t,n){return t+e[n]});a.values[s]=i.get.apply(i,u);}return a.toTensor()},t.prototype.stridedSlice=function(t,e,n,r){this.assertNotComplex(t,"stridedSlice");var o=Lr(e,n,r);if(o.some(function(t){return 0===t}))return xn([],o);for(var a=Zn(o,t.dtype),i=this.bufferSync(t),s=0;s<a.size;s++){for(var u=a.indexToLoc(s),l=new Array(u.length),c=0;c<l.length;c++)l[c]=u[c]*r[c]+e[c];a.set.apply(a,[i.get.apply(i,l)].concat(u));}return a.toTensor()},t.prototype.diag=function(t){for(var e=this.readSync(t.dataId),n=Zn([t.size,t.size],t.dtype),r=n.values,o=0;o<e.length;o++)r[o*t.size+o]=e[o];return n.toTensor()},t.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},t.prototype.reverse=function(t,e){this.assertNotComplex(t,"reverse");for(var n=Zn(t.shape,t.dtype),r=this.bufferSync(t),o=function(o){var a=n.indexToLoc(o),i=a.slice();e.forEach(function(e){return i[e]=t.shape[e]-1-i[e]}),n.set.apply(n,[r.get.apply(r,i)].concat(a));},a=0;a<n.size;a++)o(a);return n.toTensor()},t.prototype.concat=function(t,e){var n=this;if("complex64"===t[0].dtype){var r=t.map(function(t){return gn(t)}),o=t.map(function(t){return yn(t)});return mn(this.concat(r,e),this.concat(o,e))}var a=t.map(function(t){var n=g(t.shape.slice(e));return t.as2D(-1,n)}),i=dn(a.map(function(t){return t.shape}),1),s=Zn(i,t[0].dtype).values;if(1===a[0].shape[0]){var u=0;a.forEach(function(t){s.set(n.readSync(t.dataId),u),u+=t.size;});}else{var l=0;a.forEach(function(t){for(var e=n.readSync(t.dataId),r=0,o=0;o<t.shape[0];++o)for(var a=o*i[1]+l,u=0;u<t.shape[1];++u)s[a+u]=e[r++];l+=t.shape[1];});}var c=dn(t.map(function(t){return t.shape}),e);return xn(s,c,t[0].dtype)},t.prototype.neg=function(t){return this.assertNotComplex(t,"neg"),this.multiply(wn(-1),t)},t.prototype.add=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t+n,imag:e+r}}):this.broadcastedBinaryOp(t,e,xt(t.dtype,e.dtype),function(t,e){return t+e})},t.prototype.addN=function(t){var e=this;this.assertNotComplex(t,"addN");for(var n=t.map(function(t){return e.readSync(t.dataId)}),r=Zn(t[0].shape,t[0].dtype),o=r.values,a=0;a<t.length;a++)for(var i=n[a],s=0;s<o.length;s++)o[s]+=i[s];return r.toTensor()},t.prototype.subtract=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t-n,imag:e-r}}):this.broadcastedBinaryOp(t,e,xt(t.dtype,e.dtype),function(t,e){return t-e})},t.prototype.pow=function(t,e){return this.assertNotComplex([t,e],"pow"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.pow(t,e)})},t.prototype.batchMatMul=function(t,e,n,r){this.assertNotComplex([t,e],"matMul");for(var o=n?t.shape[1]:t.shape[2],a=n?t.shape[2]:t.shape[1],i=r?e.shape[1]:e.shape[2],s=t.shape[0],u=this.readSync(t.dataId),l=this.readSync(e.dataId),c=n?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],h=c[0],p=c[1],f=c[2],d=r?[1,e.strides[1],e.strides[0]]:[e.strides[1],1,e.strides[0]],v=d[0],m=d[1],g=d[2],y=a*i,x=Zn([s,a,i],t.dtype),b=x.values,w=this.blockSize,C=0;C<s;C++)for(var E=0;E<a;E+=w)for(var R=0;R<i;R+=w)for(var I=0;I<o;I+=w)for(var k=Math.min(E+w,a),N=Math.min(R+w,i),S=Math.min(I+w,o),A=E;A<k;A++)for(var T=R;T<N;T++){for(var D=0,_=I;_<S;_++)D+=u[C*h+A*p+_*f]*l[_*v+T*m+C*g];b[C*y+(A*i+T)]+=D;}return x.toTensor()},t.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=this.batchMatMul(e,n,r,o);return a&&(u=this.add(u,a)),i&&(u=eh(this,u,i,s)),u},t.prototype.multiply=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t*n-e*r,imag:t*r+e*n}}):this.broadcastedBinaryOp(t,e,xt(t.dtype,e.dtype),function(t,e){return t*e})},t.prototype.realDivide=function(t,e){this.assertNotComplex([t,e],"realDivide");return this.broadcastedBinaryOp(t,e,"float32",function(t,e){return t/e})},t.prototype.floorDiv=function(t,e){this.assertNotComplex([t,e],"floorDiv");return this.broadcastedBinaryOp(t,e,"int32",function(t,e){return Math.floor(t/e)})},t.prototype.sum=function(t,e){this.assertNotComplex(t,"sum"),ln("sum",e,t.rank);for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,xt(t.dtype,"int32")),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=0,p=0;p<i;++p)h+=u[c+p];s[l]=h;}return a},t.prototype.prod=function(t,e){this.assertNotComplex(t,"sum");for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,xt(t.dtype,"int32")),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=1,p=0;p<i;++p)h*=u[c+p];s[l]=h;}return a},t.prototype.unsortedSegmentSum=function(t,e,n){this.assertNotComplex(t,"unsortedSegmentSum");for(var r=[],o=t.rank-e.rank,a=0;a<o;++a)e=e.expandDims(a+1);for(a=0;a<n;++a){var i=wn(a,"int32"),s=qu(i,e).asType("float32").mul(t).sum(0);r.push(s);}return Cr(r)},t.prototype.argMin=function(t,e){this.assertNotComplex(t,"argMin");var n=[e];ln("argMin",n,t.rank);for(var r=sn(t.shape,n),o=r[0],a=r[1],i=An(o,"int32"),s=g(a),u=this.readSync(i.dataId),l=this.readSync(t.dataId),c=0;c<u.length;++c){for(var h=c*s,p=l[h],f=0,d=0;d<s;++d){var v=l[h+d];v<p&&(p=v,f=d);}u[c]=f;}return i},t.prototype.argMax=function(t,e){this.assertNotComplex(t,"argMax");var n=[e];ln("argMax",n,t.rank);for(var r=sn(t.shape,n),o=r[0],a=r[1],i=An(o,"int32"),s=g(a),u=this.readSync(i.dataId),l=this.readSync(t.dataId),c=0;c<u.length;++c){for(var h=c*s,p=l[h],f=0,d=0;d<s;++d){var v=l[h+d];v>p&&(p=v,f=d);}u[c]=f;}return i},t.prototype.cumsum=function(t,e,n,r){if(this.assertNotComplex(t,"cumsum"),e!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+e);for(var o=xt(t.dtype,"int32"),a=An(t.shape,o),i=this.readSync(a.dataId),s=this.readSync(t.dataId),u=t.shape[t.rank-1],l=r?function(t,e){return t+u-e-1}:function(t,e){return t+e},c=0;c<s.length;c+=u)for(var h=0;h<u;h++){var p=l(c,h);if(0===h)i[p]=n?0:s[p];else{var f=l(c,h-1);i[p]=n?s[f]+i[f]:s[p]+i[f];}}return a},t.prototype.equal=function(t,e){return this.assertNotComplex([t,e],"equal"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t===e?1:0})},t.prototype.notEqual=function(t,e){return this.assertNotComplex([t,e],"notEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t!==e?1:0})},t.prototype.less=function(t,e){return this.assertNotComplex([t,e],"less"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t<e?1:0})},t.prototype.lessEqual=function(t,e){return this.assertNotComplex([t,e],"lessEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t<=e?1:0})},t.prototype.greater=function(t,e){return this.assertNotComplex([t,e],"greater"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t>e?1:0})},t.prototype.greaterEqual=function(t,e){return this.assertNotComplex([t,e],"greaterEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t>=e?1:0})},t.prototype.logicalNot=function(t){this.assertNotComplex(t,"logicalNot");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)n[r]=e[r]?0:1;return ct.make(t.shape,{values:n},"bool")},t.prototype.logicalAnd=function(t,e){return this.assertNotComplex([t,e],"logicalAnd"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t&&e})},t.prototype.logicalOr=function(t,e){return this.assertNotComplex([t,e],"logicalOr"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t||e})},t.prototype.select=function(t,e,n){this.assertNotComplex([t,e,n],"select");for(var r=this.readSync(t.dataId),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=An(e.shape,xt(e.dtype,n.dtype)),s=this.readSync(i.dataId),u=0,l=0===t.rank||t.rank>1||1===e.rank?1:e.shape[1],c=0;c<r.length;c++)for(var h=0;h<l;h++)1===r[c]?s[u++]=o[c]:s[u++]=a[c];return i},t.prototype.where=function(t){this.assertNotComplex([t],"where");var e=this.readSync(t.dataId);return Ao(t.shape,e)},t.prototype.topk=function(t,e,n){return this.assertNotComplex(t,"topk"),So(this.readSync(t.dataId),t.shape,t.dtype,e)},t.prototype.min=function(t,e){this.assertNotComplex(t,"min"),ln("min",e,t.rank);for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,t.dtype),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=u[c],p=0;p<i;++p){var f=u[c+p];f<h&&(h=f);}s[l]=h;}return a},t.prototype.minimum=function(t,e){return this.assertNotComplex([t,e],"minimum"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.min(t,e)})},t.prototype.mod=function(t,e){return this.assertNotComplex([t,e],"mod"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){var n=t%e;return t<0&&e<0||t>=0&&e>=0?n:(n+e)%e})},t.prototype.max=function(t,e){this.assertNotComplex(t,"max"),ln("max",e,t.rank);for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,t.dtype),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=u[c],p=0;p<i;++p){var f=u[c+p];f>h&&(h=f);}s[l]=h;}return a},t.prototype.maximum=function(t,e){return this.assertNotComplex([t,e],"maximum"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.max(t,e)})},t.prototype.all=function(t,e){this.assertNotComplex(t,"all"),ln("all",e,t.rank);for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,t.dtype),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=u[c],p=0;p<i;++p){var f=u[c+p];h=h&&f;}s[l]=h;}return a},t.prototype.any=function(t,e){this.assertNotComplex(t,"any"),ln("any",e,t.rank);for(var n=sn(t.shape,e),r=n[0],o=n[1],a=An(r,t.dtype),i=g(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),l=0;l<s.length;++l){for(var c=l*i,h=u[c],p=0;p<i;++p){var f=u[c+p];h=h||f;}s[l]=h;}return a},t.prototype.squaredDifference=function(t,e){return this.assertNotComplex([t,e],"squaredDifference"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){var n=t-e;return n*n})},t.prototype.ceil=function(t){this.assertNotComplex(t,"ceil");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.ceil(e[r]);return ct.make(t.shape,{values:n})},t.prototype.floor=function(t){this.assertNotComplex(t,"floor");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.floor(e[r]);return ct.make(t.shape,{values:n})},t.prototype.sign=function(t){this.assertNotComplex(t,"x");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)e[r]<0?n[r]=-1:e[r]>0?n[r]=1:n[r]=0;return ct.make(t.shape,{values:n})},t.prototype.isNaN=function(t){this.assertNotComplex(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isNaN(e[r])&&(n[r]=1);return ct.make(t.shape,{values:n},"bool")},t.prototype.isInf=function(t){this.assertNotComplex(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Math.abs(e[r])===1/0&&(n[r]=1);return ct.make(t.shape,{values:n},"bool")},t.prototype.isFinite=function(t){this.assertNotComplex(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isFinite(e[r])&&(n[r]=1);return ct.make(t.shape,{values:n},"bool")},t.prototype.round=function(t){this.assertNotComplex(t,"round");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=Math.floor(e[r]);e[r]-o<.5?n[r]=Math.floor(e[r]):e[r]-o>.5?n[r]=Math.ceil(e[r]):n[r]=o%2==0?o:o+1;}return ct.make(t.shape,{values:n})},t.prototype.exp=function(t){this.assertNotComplex(t,"exp");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.exp(e[r]);return ct.make(t.shape,{values:n})},t.prototype.expm1=function(t){this.assertNotComplex(t,"expm1");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.expm1(e[r]);return ct.make(t.shape,{values:n})},t.prototype.log=function(t){this.assertNotComplex(t,"log");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log(o);}return ct.make(t.shape,{values:n})},t.prototype.log1p=function(t){this.assertNotComplex(t,"log1p");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log1p(o);}return ct.make(t.shape,{values:n})},t.prototype.sqrt=function(t){this.assertNotComplex(t,"sqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.sqrt(o);}return ct.make(t.shape,{values:n})},t.prototype.rsqrt=function(t){this.assertNotComplex(t,"rsqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=1/Math.sqrt(o);}return ct.make(t.shape,{values:n})},t.prototype.square=function(t){this.assertNotComplex(t,"square");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=o*o;}return ct.make(t.shape,{values:n})},t.prototype.reciprocal=function(t){this.assertNotComplex(t,"reciprocal");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=1/e[r];return ct.make(t.shape,{values:n})},t.prototype.linear=function(t){return t},t.prototype.relu=function(t){this.assertNotComplex(t,"relu");for(var e=An(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.max(0,r[o]);return e},t.prototype.prelu=function(t,e){return this.assertNotComplex([t,e],"prelu"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return t<0?e*t:t})},t.prototype.elu=function(t){this.assertNotComplex(t,"elu");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=n[r];e[r]=o>=0?o:Math.exp(o)-1;}return ct.make(t.shape,{values:e})},t.prototype.eluDer=function(t,e){this.assertNotComplex([t,e],"eluDer");for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),o=this.readSync(t.dataId),a=0;a<r.length;++a){var i=r[a];n[a]=i>=1?o[a]:o[a]*(i+1);}return ct.make(e.shape,{values:n})},t.prototype.selu=function(t){this.assertNotComplex(t,"selu");for(var e=ji,n=Xi,r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?n*i:e*(Math.exp(i)-1);}return ct.make(t.shape,{values:r})},t.prototype.clip=function(t,e,n){this.assertNotComplex(t,"clip");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>n?n:i<e?e:i;}return ct.make(t.shape,{values:r})},t.prototype.abs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.abs(n[r]);return ct.make(t.shape,{values:e})},t.prototype.complexAbs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<t.size;++r){var o=n[2*r],a=n[2*r+1];e[r]=Math.hypot(o,a);}return ct.make(t.shape,{values:e})},t.prototype.int=function(t){this.assertNotComplex(t,"int");for(var e=new Int32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=n[r];return ct.make(t.shape,{values:e},"int32")},t.prototype.sigmoid=function(t){this.assertNotComplex(t,"sigmoid");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=1/(1+Math.exp(-n[r]));return ct.make(t.shape,{values:e})},t.prototype.softplus=function(t){this.assertNotComplex(t,"softplus");for(var e=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o]>-e,i=r[o]<e,s=Math.exp(r[o]),u=void 0;u=i?s:a?r[o]:Math.log(1+s),n[o]=u;}return ct.make(t.shape,{values:n})},t.prototype.sin=function(t){this.assertNotComplex(t,"sin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sin(n[r]);return ct.make(t.shape,{values:e})},t.prototype.cos=function(t){this.assertNotComplex(t,"cos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cos(n[r]);return ct.make(t.shape,{values:e})},t.prototype.tan=function(t){this.assertNotComplex(t,"tan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.tan(n[r]);return ct.make(t.shape,{values:e})},t.prototype.asin=function(t){this.assertNotComplex(t,"asin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asin(n[r]);return ct.make(t.shape,{values:e})},t.prototype.acos=function(t){this.assertNotComplex(t,"acos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acos(n[r]);return ct.make(t.shape,{values:e})},t.prototype.atan=function(t){this.assertNotComplex(t,"atan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atan(n[r]);return ct.make(t.shape,{values:e})},t.prototype.atan2=function(t,e){return this.assertNotComplex([t,e],"atan2"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.atan2(t,e)})},t.prototype.sinh=function(t){this.assertNotComplex(t,"sinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sinh(n[r]);return ct.make(t.shape,{values:e})},t.prototype.cosh=function(t){this.assertNotComplex(t,"cosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cosh(n[r]);return ct.make(t.shape,{values:e})},t.prototype.tanh=function(t){this.assertNotComplex(t,"tanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=b(n[r]);return ct.make(t.shape,{values:e})},t.prototype.asinh=function(t){this.assertNotComplex(t,"asinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asinh(n[r]);return ct.make(t.shape,{values:e})},t.prototype.acosh=function(t){this.assertNotComplex(t,"acosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acosh(n[r]);return ct.make(t.shape,{values:e})},t.prototype.atanh=function(t){this.assertNotComplex(t,"atanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atanh(n[r]);return ct.make(t.shape,{values:e})},t.prototype.erf=function(t){this.assertNotComplex(t,"erf");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=n[r],a=1/(1+.3275911*o);e[r]=1-((((1.061405429*a-1.453152027)*a+1.421413741)*a-.284496736)*a+.254829592)*a*Math.exp(-o*o);}return ct.make(t.shape,{values:e})},t.prototype.step=function(t,e){void 0===e&&(e=0),this.assertNotComplex(t,"step");for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o];isNaN(a)?n[o]=NaN:n[o]=a>0?1:e;}return ct.make(t.shape,{values:n})},t.prototype.fusedConv2d=function(t,e,n,r,o,a){var i=this.conv2d(t,e,n);return r&&(i=this.add(i,r)),o&&(i=eh(this,i,o,a)),i},t.prototype.conv2d=function(t,e,n){this.assertNotComplex([t,e],"conv2d");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l="channelsLast"===n.dataFormat,c=Zn(n.outShape,t.dtype),h=t.strides[0],p=l?t.strides[1]:t.strides[2],f=l?t.strides[2]:1,d=l?1:t.strides[1],v=c.strides[0],m=l?c.strides[1]:c.strides[2],g=l?c.strides[2]:1,y=l?1:c.strides[1],x=this.readSync(t.dataId),b=this.readSync(e.dataId),w=c.values,C=0;C<n.batchSize;++C)for(var E=C*h,R=C*v,I=0;I<n.outHeight;++I)for(var k=R+I*m,N=I*n.strideHeight-u,S=0;S<r;S++){var A=N+S*a;if(!(A<0||A>=n.inHeight))for(var T=S*e.strides[0],D=E+A*p,_=0;_<n.outWidth;++_)for(var O=k+_*g,F=_*n.strideWidth-s,M=0;M<o;M++){var B=F+M*i;if(!(B<0||B>=n.inWidth))for(var P=D+B*f,L=T+M*e.strides[1],W=0;W<n.inChannels;++W){for(var U=x[P+W*d],V=0;V<n.outChannels;++V)w[O+V*y]+=U*b[L+V];L+=n.outChannels;}}}return c.toTensor()},t.prototype.conv3d=function(t,e,n){for(var r=n.filterDepth,o=n.filterHeight,a=n.filterWidth,i=n.dilationDepth,s=n.dilationHeight,u=n.dilationWidth,l=n.padInfo.front,c=n.padInfo.left,h=n.padInfo.top,p=Zn(n.outShape,t.dtype),f=this.readSync(t.dataId),d=this.readSync(e.dataId),v=p.values,m=0;m<n.batchSize;++m)for(var g=m*t.strides[0],y=m*p.strides[0],x=0;x<n.outDepth;++x)for(var b=y+x*p.strides[1],w=x*n.strideDepth-l,C=0;C<r;C++){var E=w+C*i;if(!(E<0||E>=n.inDepth))for(var R=C*e.strides[0],I=g+E*t.strides[1],k=0;k<n.outHeight;++k)for(var N=b+k*p.strides[2],S=k*n.strideHeight-h,A=0;A<o;A++){var T=S+A*s;if(!(T<0||T>=n.inHeight))for(var D=R+A*e.strides[1],_=I+T*t.strides[2],O=0;O<n.outWidth;++O)for(var F=N+O*n.outChannels,M=O*n.strideWidth-c,B=0;B<a;B++){var P=M+B*u;if(!(P<0||P>=n.inWidth))for(var L=D+B*e.strides[2],W=_+P*n.inChannels,U=L,V=0;V<n.inChannels;++V){for(var z=f[W+V],G=0;G<n.outChannels;++G)v[F+G]+=z*d[U+G];U+=n.outChannels;}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(t,e,n){this.assertNotComplex([t,e],"conv2dDerInput");for(var r=Zn(n.inShape,"float32"),o=r.values,a=this.readSync(t.dataId),i=this.readSync(e.dataId),s=e.strides,u=s[0],l=s[1],c=s[2],h=n.batchSize,p=n.filterHeight,f=n.filterWidth,d=n.inChannels,v=n.inHeight,m=n.inWidth,g=n.outChannels,y=n.outHeight,x=n.outWidth,b=n.strideHeight,w=n.strideWidth,C=n.dataFormat,E=p-1-n.padInfo.top,R=f-1-n.padInfo.left,I="channelsLast"===C,k=r.strides[0],N=I?r.strides[1]:r.strides[2],S=I?r.strides[2]:1,A=I?1:r.strides[1],T=t.strides[0],D=I?t.strides[1]:t.strides[2],_=I?t.strides[2]:1,O=I?1:t.strides[1],F=0;F<h;++F)for(var M=0;M<d;++M)for(var B=0;B<v;++B)for(var P=B-E,L=Math.max(0,Math.ceil(P/b)),W=Math.min(y,(p+P)/b),U=0;U<m;++U){for(var V=U-R,z=Math.max(0,Math.ceil(V/w)),G=Math.min(x,(f+V)/w),H=0,q=L;q<W;++q)for(var $=q*b-P,K=z;K<G;++K)for(var j=T*F+D*q+_*K,X=u*(p-1-$)+l*(f-1-(K*w-V))+c*M,Y=0;Y<g;++Y){H+=a[j+O*Y]*i[X+Y];}o[k*F+N*B+S*U+A*M]=H;}return r.toTensor()},t.prototype.conv3dDerInput=function(t,e,n){for(var r=Zn(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],l=a[3],c=this.readSync(t.dataId),h=t.strides,p=h[0],f=h[1],d=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=n.batchSize,E=n.filterDepth,R=n.filterHeight,I=n.filterWidth,k=n.inChannels,N=n.inDepth,S=n.inHeight,A=n.inWidth,T=n.outChannels,D=n.outDepth,_=n.outHeight,O=n.outWidth,F=n.strideDepth,M=n.strideHeight,B=n.strideWidth,P=E-1-n.padInfo.front,L=R-1-n.padInfo.top,W=I-1-n.padInfo.left,U=0;U<C;++U)for(var V=0;V<k;++V)for(var z=0;z<N;++z)for(var G=z-P,H=Math.max(0,Math.ceil(G/F)),q=Math.min(D,(E+G)/F),$=0;$<S;++$)for(var K=$-L,j=Math.max(0,Math.ceil(K/M)),X=Math.min(_,(R+K)/M),Y=0;Y<A;++Y){for(var Q=Y-W,J=Math.max(0,Math.ceil(Q/B)),Z=Math.min(O,(I+Q)/B),tt=0,et=H;et<q;++et)for(var nt=et*F-G,rt=j;rt<X;++rt)for(var ot=rt*M-K,at=J;at<Z;++at)for(var it=p*U+f*et+d*rt+v*at,st=y*(E-1-nt)+x*(R-1-ot)+b*(I-1-(at*B-Q))+w*V,ut=0;ut<T;++ut){tt+=c[it+ut]*m[st+ut];}o[i*U+s*z+u*$+l*Y+V]=tt;}return r.toTensor()},t.prototype.conv2dDerFilter=function(t,e,n){this.assertNotComplex([t,e],"conv2dDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s="channelsLast"===n.dataFormat,u=Zn(n.filterShape,"float32"),l=n.padInfo.left,c=n.padInfo.top,h=this.bufferSync(t),p=this.bufferSync(e),f=0;f<a;++f)for(var d=Math.max(0,Math.ceil((c-f)/r)),v=Math.min(n.outHeight,(n.inHeight+c-f)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((l-m)/o)),y=Math.min(n.outWidth,(n.inWidth+l-m)/o),x=0;x<n.inChannels;++x)for(var b=0;b<n.outChannels;++b){for(var w=0,C=0;C<n.batchSize;++C)for(var E=d;E<v;++E)for(var R=f+E*r-c,I=g;I<y;++I){var k=m+I*o-l;w+=s?h.get(C,R,k,x)*p.get(C,E,I,b):h.get(C,x,R,k)*p.get(C,b,E,I);}u.set(w,f,m,x,b);}return u.toTensor()},t.prototype.conv3dDerFilter=function(t,e,n){for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,l=Zn(n.filterShape,"float32"),c=l.values,h=l.strides,p=h[0],f=h[1],d=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=this.readSync(t.dataId),E=t.strides,R=E[0],I=E[1],k=E[2],N=E[3],S=n.padInfo.front,A=n.padInfo.left,T=n.padInfo.top,D=0;D<i;++D)for(var _=Math.max(0,Math.ceil((S-D)/r)),O=Math.min(n.outDepth,(n.inDepth+S-D)/r),F=D*p,M=0;M<s;++M)for(var B=Math.max(0,Math.ceil((T-M)/o)),P=Math.min(n.outHeight,(n.inHeight+T-M)/o),L=M*f+F,W=0;W<u;++W)for(var U=Math.max(0,Math.ceil((A-W)/a)),V=Math.min(n.outWidth,(n.inWidth+A-W)/a),z=W*d+L,G=0;G<n.inChannels;++G)for(var H=G*v+z,q=0;q<n.outChannels;++q){for(var $=0,K=0;K<n.batchSize;++K)for(var j=K*R,X=K*y,Y=_;Y<O;++Y)for(var Q=(D+Y*r-S)*I+j,J=Y*x+X,Z=B;Z<P;++Z)for(var tt=(M+Z*o-T)*k+Q,et=Z*b+J,nt=U;nt<V;++nt){var rt=nt*w+et;$+=C[(W+nt*a-A)*N+tt+G]*m[rt+q];}c[H+q]=$;}return l.toTensor()},t.prototype.depthwiseConv2D=function(t,e,n){this.assertNotComplex([t,e],"depthwiseConv2D");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l=n.outChannels/n.inChannels,c=Zn(n.outShape,t.dtype),h=this.readSync(t.dataId),p=this.readSync(e.dataId),f=c.values,d=0;d<n.batchSize;++d)for(var v=d*t.strides[0],m=d*c.strides[0],g=0;g<n.outHeight;++g)for(var y=m+g*c.strides[1],x=g*n.strideHeight-s,b=0;b<r;++b){var w=x+b*a;if(!(w<0||w>=n.inHeight))for(var C=b*e.strides[0],E=v+w*t.strides[1],R=0;R<n.outWidth;++R)for(var I=y+R*c.strides[2],k=R*n.strideWidth-u,N=0;N<o;++N){var S=k+N*i;if(!(S<0||S>=n.inWidth))for(var A=C+N*e.strides[1],T=E+S*n.inChannels,D=I,_=A,O=0;O<n.inChannels;++O){for(var F=h[T+O],M=0;M<l;++M)f[D+M]+=F*p[_+M];D+=l,_+=l;}}}return c.toTensor()},t.prototype.depthwiseConv2DDerInput=function(t,e,n){this.assertNotComplex([t,e],"depthwiseConv2DDerInput");for(var r=Zn(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],l=this.readSync(t.dataId),c=t.strides,h=c[0],p=c[1],f=c[2],d=this.readSync(e.dataId),v=e.strides,m=v[0],g=v[1],y=v[2],x=n.batchSize,b=n.filterHeight,w=n.filterWidth,C=n.inChannels,E=n.inHeight,R=n.inWidth,I=n.outChannels,k=n.outHeight,N=n.outWidth,S=n.strideHeight,A=n.strideWidth,T=b-1-n.padInfo.top,D=w-1-n.padInfo.left,_=I/C,O=0;O<x;++O)for(var F=0;F<C;++F)for(var M=0;M<E;++M)for(var B=M-T,P=Math.max(0,Math.ceil(B/S)),L=Math.min(k,(b+B)/S),W=0;W<R;++W){for(var U=W-D,V=Math.max(0,Math.ceil(U/A)),z=Math.min(N,(w+U)/A),G=0,H=P;H<L;++H)for(var q=H*S-B,$=V;$<z;++$)for(var K=h*O+p*H+f*$,j=m*(b-1-q)+g*(w-1-($*A-U))+y*F,X=0;X<_;++X){G+=l[K+(F*_+X)]*d[j+X];}o[i*O+s*M+u*W+F]=G;}return r.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){this.assertNotComplex([t,e],"depthwiseConv2DDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=Zn(n.filterShape,"float32"),u=n.padInfo.left,l=n.padInfo.top,c=n.outChannels/n.inChannels,h=this.bufferSync(t),p=this.bufferSync(e),f=0;f<a;++f)for(var d=Math.max(0,Math.ceil((l-f)/r)),v=Math.min(n.outHeight,(n.inHeight+l-f)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((u-m)/o)),y=Math.min(n.outWidth,(n.inWidth+u-m)/o),x=0;x<n.outChannels;++x){for(var b=Math.trunc(x/c),w=x%c,C=0,E=0;E<n.batchSize;++E)for(var R=d;R<v;++R)for(var I=f+R*r-l,k=g;k<y;++k){var N=m+k*o-u;C+=h.get(E,I,N,b)*p.get(E,R,k,x);}s.set(C,f,m,b,w);}return s.toTensor()},t.prototype.tile=function(t,e){return this.assertNotComplex(t,"tile"),No(this.bufferSync(t),e)},t.prototype.pad=function(t,e,n){this.assertNotComplex(t,"pad");var r=e.map(function(e,n){return e[0]+t.shape[n]+e[1]}),o=e.map(function(t){return t[0]}),a=this.bufferSync(t),i=Zn(r,t.dtype);0!==n&&i.values.fill(n);for(var s=0;s<t.size;s++){var u=a.indexToLoc(s),l=u.map(function(t,e){return t+o[e]});i.set.apply(i,[a.get.apply(a,u)].concat(l));}return i.toTensor()},t.prototype.transpose=function(t,e){this.assertNotComplex(t,"transpose");for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[e[r]];var o=this.readSync(t.dataId),a=Zn(n,t.dtype),i=this.bufferSync(t);for(r=0;r<t.size;++r){for(var s=i.indexToLoc(r),u=new Array(s.length),l=0;l<u.length;l++)u[l]=s[e[l]];var c=a.locToIndex(u);a.values[c]=o[r];}return a.toTensor()},t.prototype.gather=function(t,e,n){this.assertNotComplex([t,e],"gather");var r=t.shape.slice(),o=this.readSync(e.dataId);r[n]=o.length;for(var a=Zn(r,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s),l=u.slice();l[n]=o[u[n]];var c=i.locToIndex(l);a.values[s]=i.values[c];}return a.toTensor()},t.prototype.batchToSpaceND=function(t,e,n){this.assertNotComplex([t],"batchToSpaceND");var r=e.reduce(function(t,e){return t*e}),o=Nr(t.shape,e,r),a=Sr(o.length,e.length),i=Ar(t.shape,e,r),s=Tr(n,e.length),u=Dr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},t.prototype.spaceToBatchND=function(t,e,n){this.assertNotComplex([t],"spaceToBatchND");var r=e.reduce(function(t,e){return t*e}),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=Nr(i.shape,e,r,!1),u=Sr(s.length,e.length,!1),l=Ar(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(l)},t.prototype.pool=function(t,e,n){this.assertNotComplex(t,"pool");for(var r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=e.padInfo.top,c=e.padInfo.left,h="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(t.dataId),f=Zn(e.outShape,t.dtype),d=f.values,v=e.outShape[1]*e.outShape[2]*e.outShape[3],m=e.outShape[2]*e.outShape[3],g=e.outShape[3],y=0;y<e.batchSize;++y)for(var x=y*v,b=y*t.strides[0],w=0;w<e.inChannels;++w)for(var C=0;C<e.outHeight;++C)for(var E=C*r-l,R=Math.max(0,E),I=Math.min(e.inHeight,s+E),k=x+C*m,N=0;N<e.outWidth;++N){for(var S=N*o-c,A=Math.max(0,S),T=Math.min(e.inWidth,u+S),D=h,_=0,O=0,F=R;F<I;F+=a){for(var M=b+F*t.strides[1],B=A;B<T;B+=i){var P=p[M+B*t.strides[2]+w];"max"===n&&P>D?D=P:"avg"===n&&(_+=P,O++);}if(isNaN(D))break}d[k+N*g+w]="avg"===n?_/O:D;}return f.toTensor()},t.prototype.maxPool=function(t,e){return this.pool(t,e,"max")},t.prototype.maxPoolPositions=function(t,e){for(var n=Zn(e.outShape,"int32"),r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=e.padInfo.top,c=e.padInfo.left,h=this.bufferSync(t),p=0;p<e.batchSize;++p)for(var f=0;f<e.inChannels;++f)for(var d=0;d<e.outHeight;++d){for(var v=d*r-l,m=v;m<0;)m+=a;for(var g=Math.min(e.inHeight,s+v),y=0;y<e.outWidth;++y){for(var x=y*o-c,b=x;b<0;)b+=i;for(var w=Math.min(e.inWidth,u+x),C=Number.NEGATIVE_INFINITY,E=-1,R=m;R<g;R+=a)for(var I=R-v,k=b;k<w;k+=i){var N=k-x,S=h.get(p,R,k,f);S>C&&(C=S,E=I*u+N);}n.set(E,p,d,y,f);}}return n.toTensor()},t.prototype.maxPoolBackprop=function(t,e,n,r){this.assertNotComplex([e,n],"maxPoolBackprop");for(var o=this.maxPoolPositions(e,r),a=r.strideHeight,i=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,l=r.effectiveFilterHeight,c=r.effectiveFilterWidth,h=c-1-r.padInfo.left,p=l-1-r.padInfo.top,f=Zn(e.shape,"float32"),d=this.bufferSync(o),v=this.bufferSync(t),m=0;m<r.batchSize;++m)for(var g=0;g<r.inChannels;++g)for(var y=0;y<r.inHeight;++y)for(var x=0;x<r.inWidth;++x){for(var b=y-p,w=x-h,C=0,E=0;E<l;E+=s){var R=(b+E)/a;if(!(R<0||R>=r.outHeight||Math.floor(R)!==R))for(var I=0;I<c;I+=u){var k=(w+I)/i;if(!(k<0||k>=r.outWidth||Math.floor(k)!==k)){var N=l*c-1-d.get(m,R,k,g)===E*c+I?1:0;if(0!==N)C+=v.get(m,R,k,g)*N;}}}f.set(C,m,y,x,g);}return f.toTensor()},t.prototype.avgPoolBackprop=function(t,e,n){this.assertNotComplex([t,e],"avgPoolBackprop");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=n.dilationHeight,u=n.dilationWidth,l=n.effectiveFilterHeight,c=n.effectiveFilterWidth,h=c-1-n.padInfo.left,p=l-1-n.padInfo.top,f=Zn(e.shape,"float32"),d=1/(a*i),v=this.bufferSync(t),m=0;m<n.batchSize;++m)for(var g=0;g<n.inChannels;++g)for(var y=0;y<n.inHeight;++y)for(var x=0;x<n.inWidth;++x){for(var b=y-p,w=x-h,C=0,E=0;E<l;E+=s){var R=(b+E)/r;if(!(R<0||R>=n.outHeight||Math.floor(R)!==R))for(var I=0;I<c;I+=u){var k=(w+I)/o;if(!(k<0||k>=n.outWidth||Math.floor(k)!==k))C+=v.get(m,R,k,g);}}f.set(C*d,m,y,x,g);}return f.toTensor()},t.prototype.pool3d=function(t,e,n){this.assertNotComplex(t,"pool3d");for(var r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,l=e.effectiveFilterDepth,c=e.effectiveFilterHeight,h=e.effectiveFilterWidth,p=e.padInfo.front,f=e.padInfo.top,d=e.padInfo.left,v="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=this.readSync(t.dataId),g=Zn(e.outShape,t.dtype),y=g.values,x=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],b=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],C=e.outShape[4],E=0;E<e.batchSize;++E)for(var R=E*x,I=E*t.strides[0],k=0;k<e.inChannels;++k)for(var N=0;N<e.outDepth;++N){for(var S=N*r-p,A=S;A<0;)A+=i;for(var T=Math.min(e.inDepth,l+S),D=R+N*b,_=0;_<e.outHeight;++_){for(var O=_*o-f,F=O;F<0;)F+=s;for(var M=Math.min(e.inHeight,c+O),B=D+_*w,P=0;P<e.outWidth;++P){for(var L=P*a-d,W=L;W<0;)W+=u;for(var U=Math.min(e.inWidth,h+L),V=B+P*C,z=v,G=0,H=0,q=A;q<T;q+=i){for(var $=I+q*t.strides[1],K=F;K<M;K+=s){for(var j=$+K*t.strides[2],X=W;X<U;X+=u){var Y=m[j+X*t.strides[3]+k];if("max"===n&&Y>z?z=Y:"avg"===n&&(G+=Y,H++),isNaN(z))break}if(isNaN(z))break}if(isNaN(z))break}y[V+k]="avg"===n?G/H:z;}}}return g.toTensor()},t.prototype.avgPool3d=function(t,e){return this.assertNotComplex(t,"avgPool3d"),this.pool3d(t,e,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(t,e,n){this.assertNotComplex([t,e],"avgPool3dBackprop");for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,l=n.dilationDepth,c=n.dilationHeight,h=n.dilationWidth,p=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,v=p-1-n.padInfo.front,m=d-1-n.padInfo.left,g=f-1-n.padInfo.top,y=Zn(e.shape,"float32"),x=1/(i*s*u),b=this.bufferSync(t),w=0;w<n.batchSize;++w)for(var C=0;C<n.inChannels;++C)for(var E=0;E<n.inDepth;++E)for(var R=0;R<n.inHeight;++R)for(var I=0;I<n.inWidth;++I){for(var k=E-v,N=R-g,S=I-m,A=0,T=0;T<p;T+=l){var D=(k+T)/r;if(!(D<0||D>=n.outDepth||Math.floor(D)!==D))for(var _=0;_<f;_+=c){var O=(N+_)/o;if(!(O<0||O>=n.outHeight||Math.floor(O)!==O))for(var F=0;F<d;F+=h){var M=(S+F)/a;if(!(M<0||M>=n.outWidth||Math.floor(M)!==M))A+=b.get(w,D,O,M,C);}}}y.set(A*x,w,E,R,I,C);}return y.toTensor()},t.prototype.maxPool3d=function(t,e){return this.assertNotComplex(t,"maxPool3d"),this.pool3d(t,e,"max").toFloat()},t.prototype.maxPool3dPositions=function(t,e){for(var n=Zn(e.outShape,"int32"),r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,l=e.effectiveFilterDepth,c=e.effectiveFilterHeight,h=e.effectiveFilterWidth,p=e.padInfo.front,f=e.padInfo.top,d=e.padInfo.left,v=this.bufferSync(t),m=0;m<e.batchSize;++m)for(var g=0;g<e.inChannels;++g)for(var y=0;y<e.outDepth;++y){for(var x=y*r-p,b=x;b<0;)b+=i;for(var w=Math.min(e.inDepth,l+x),C=0;C<e.outHeight;++C){for(var E=C*o-f,R=E;R<0;)R+=s;for(var I=Math.min(e.inHeight,c+E),k=0;k<e.outWidth;++k){for(var N=k*a-d,S=N;S<0;)S+=u;for(var A=Math.min(e.inWidth,h+N),T=Number.NEGATIVE_INFINITY,D=-1,_=b;_<w;_+=i)for(var O=_-x,F=R;F<I;F+=s)for(var M=F-E,B=S;B<A;B+=u){var P=B-N,L=v.get(m,_,F,B,g);L>=T&&(T=L,D=O*c*h+M*c+P);}n.set(D,m,y,C,k,g);}}}return n.toTensor()},t.prototype.maxPool3dBackprop=function(t,e,n,r){this.assertNotComplex([e,n],"maxPool3dBackprop");for(var o=this.maxPool3dPositions(e,r),a=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,l=r.dilationHeight,c=r.dilationWidth,h=r.effectiveFilterDepth,p=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=h-1-r.padInfo.front,v=f-1-r.padInfo.left,m=p-1-r.padInfo.top,g=Zn(e.shape,"float32"),y=this.bufferSync(o),x=this.bufferSync(t),b=0;b<r.batchSize;++b)for(var w=0;w<r.inChannels;++w)for(var C=0;C<r.inDepth;++C)for(var E=0;E<r.inHeight;++E)for(var R=0;R<r.inWidth;++R){for(var I=C-d,k=E-m,N=R-v,S=0,A=0;A<h;A+=u){var T=(I+A)/a;if(!(T<0||T>=r.outDepth||Math.floor(T)!==T))for(var D=0;D<p;D+=l){var _=(k+D)/i;if(!(_<0||_>=r.outHeight||Math.floor(_)!==_))for(var O=0;O<f;O+=c){var F=(N+O)/s;if(!(F<0||F>=r.outWidth||Math.floor(F)!==F)){var M=h*p*f-1-y.get(b,T,_,F,w)===A*p*f+D*f+O?1:0;if(0!==M)S+=x.get(b,T,_,F,w)*M;}}}}g.set(S,b,C,E,R,w);}return g.toTensor()},t.prototype.cast=function(t,e){return mo(t,e,this)},t.prototype.reshape=function(t,e){return go(t,e)},t.prototype.avgPool=function(t,e){return this.assertNotComplex(t,"avgPool"),this.pool(t,e,"avg").toFloat()},t.prototype.resizeBilinear=function(t,e,n,r){this.assertNotComplex(t,"resizeBilinear");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],l=this.readSync(t.dataId),c=new Float32Array(g([a,e,n,u])),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],p=[r&&e>1?e-1:e,r&&n>1?n-1:n],f=0,d=h[0]/p[0],v=h[1]/p[1],m=0;m<a;m++)for(var y=0;y<e;y++)for(var x=d*y,b=Math.floor(x),w=x-b,C=Math.min(i-1,Math.ceil(x)),E=m*t.strides[0]+b*t.strides[1],R=m*t.strides[0]+C*t.strides[1],I=0;I<n;I++)for(var k=v*I,N=Math.floor(k),S=k-N,A=Math.min(s-1,Math.ceil(k)),T=E+N*t.strides[2],D=R+N*t.strides[2],_=E+ +A*t.strides[2],O=R+A*t.strides[2],F=0;F<u;F++){var M=l[T+F],B=l[D+F],P=M+(l[_+F]-M)*S,L=P+(B+(l[O+F]-B)*S-P)*w;c[f++]=L;}return xn(c,[a,e,n,u])},t.prototype.resizeBilinearBackprop=function(t,e,n){this.assertNotComplex([t,e],"resizeBilinearBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,l=u[1],c=u[2],h=new Float32Array(o*a*i*s),p=[n&&l>1?a-1:a,n&&c>1?i-1:i],f=[n&&l>1?l-1:l,n&&c>1?c-1:c],d=p[0]/f[0],v=p[1]/f[1],m=this.readSync(t.dataId),g=0,y=0;y<o;y++)for(var x=y*e.strides[0],b=0;b<l;b++)for(var w=b*d,C=Math.floor(w),E=Math.min(Math.ceil(w),a-1),R=x+C*e.strides[1],I=x+E*e.strides[1],k=w-C,N=1-k,S=0;S<c;S++)for(var A=S*v,T=Math.floor(A),D=Math.min(Math.ceil(A),i-1),_=A-T,O=1-_,F=R+T*e.strides[2],M=R+D*e.strides[2],B=I+T*e.strides[2],P=I+D*e.strides[2],L=N*O,W=N*_,U=k*O,V=k*_,z=0;z<s;z++){var G=m[g++];h[F+z]+=G*L,h[M+z]+=G*W,h[B+z]+=G*U,h[P+z]+=G*V;}return In(h,[o,i,a,s],e.dtype)},t.prototype.resizeNearestNeighbor=function(t,e,n,r){this.assertNotComplex(t,"resizeNearestNeighbor");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],l=this.readSync(t.dataId),c=new Float32Array(a*e*n*u),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],p=[r&&e>1?e-1:e,r&&n>1?n-1:n],f=h[0]/p[0],d=h[1]/p[1],v=0,m=0;m<a;m++)for(var g=m*t.strides[0],y=0;y<e;y++)for(var x=f*y,b=g+Math.min(i-1,r?Math.round(x):Math.floor(x))*t.strides[1],w=0;w<n;w++)for(var C=d*w,E=b+Math.min(s-1,r?Math.round(C):Math.floor(C))*t.strides[2],R=0;R<u;R++){var I=l[E+R];c[v++]=I;}return xn(c,[a,e,n,u],t.dtype)},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){this.assertNotComplex([t,e],"resizeNearestNeighborBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,l=u[1],c=u[2],h=new Float32Array(o*a*i*s),p=this.readSync(t.dataId),f=[n&&l>1?a-1:a,n&&c>1?i-1:i],d=[n&&l>1?l-1:l,n&&c>1?c-1:c],v=f[0]/d[0],m=f[1]/d[1],g=1/v,y=1/m,x=2*Math.ceil(g)+2,b=2*Math.ceil(y)+2,w=0;w<o;w++)for(var C=w*e.strides[0],E=0;E<a;E++)for(var R=C+E*e.strides[1],I=Math.floor(E*g),k=Math.floor(I-x/2),N=0;N<i;N++)for(var S=R+N*e.strides[2],A=Math.floor(N*y),T=Math.floor(A-b/2),D=0;D<s;D++){for(var _=0,O=0;O<x;O++){var F=O+k;if(!(F<0||F>=l)){var M=C+F*t.strides[1],B=F*v;if(E===Math.min(a-1,n?Math.round(B):Math.floor(B)))for(var P=0;P<b;P++){var L=P+T;if(!(L<0||L>=c)){var W=M+L*t.strides[2],U=L*m;N===Math.min(i-1,n?Math.round(U):Math.floor(U))&&(_+=p[W+D]);}}}}h[S+D]=_;}return In(h,e.shape,e.dtype)},t.prototype.batchNormalization=function(t,e,n,r,o,a){this.assertNotComplex([t,e,n,o,a],"batchNorm");for(var i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=this.readSync(n.dataId),l=o?this.readSync(o.dataId):new Float32Array([1]),c=a?this.readSync(a.dataId):new Float32Array([0]),h=new Float32Array(i.length),p=c.length,f=l.length,d=u.length,v=s.length,m=0,g=0,y=0,x=0,b=0;b<i.length;++b)h[b]=c[m++]+(i[b]-s[g++])*l[y++]/Math.sqrt(u[x++]+r),m>=p&&(m=0),g>=v&&(g=0),y>=f&&(y=0),x>=d&&(x=0);return In(h,t.shape)},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){this.assertNotComplex(t,"localResponseNormalization4D");var a=t.shape[3],i=a-1,s=this.readSync(t.dataId),u=t.size,l=new Float32Array(u);function c(t){for(var n=t%a,r=t-n+Math.max(0,n-e),o=t-n+Math.min(n+e,i),u=0;r<=o;r++){var l=s[r];u+=l*l;}return u}for(var h=0;h<u;h++){var p=c(h),f=s[h]*Math.pow(n+r*p,-o);l[h]=f;}return In(l,t.shape)},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){this.assertNotComplex(t,"LRNGrad");for(var s=t.shape[3],u=this.readSync(t.dataId),l=this.readSync(e.dataId),c=this.readSync(n.dataId),h=new Float32Array(t.size),p=t.size,f=0;f<p;f++){for(var d=f%s,v=f-d+Math.max(0,d-r),m=f-d+Math.min(s,d+r+1),g=0,y=v;y<m;y++)g+=Math.pow(l[y],2);g=a*g+o;for(y=v;y<m;y++){var x=-2*a*i*l[y]*c[f]/g;f===y&&(x+=Math.pow(g,-i)),x*=u[f],h[y]+=x;}}return In(h,t.shape)},t.prototype.multinomial=function(t,e,n,r){this.assertNotComplex(t,"multinomial");for(var o=e?t:Yr(t),a=o.shape[0],i=o.shape[1],s=An([a,n],"int32"),u=this.readSync(s.dataId),l=this.readSync(o.dataId),c=0;c<a;++c){var h=c*i,p=new Float32Array(i-1);p[0]=l[h];for(var f=1;f<p.length;++f)p[f]=p[f-1]+l[h+f];for(var d=Xn(r.toString()),v=c*n,m=0;m<n;++m){var g=d();u[v+m]=p.length;for(var y=0;y<p.length;y++)if(g<p[y]){u[v+m]=y;break}}}return s},t.prototype.oneHot=function(t,e,n,r){this.assertNotComplex(t,"oneHot");var o=new Float32Array(t.size*e);o.fill(r);for(var a=this.readSync(t.dataId),i=0;i<t.size;++i)a[i]>=0&&a[i]<e&&(o[i*e+a[i]]=n);return En(o,[t.size,e],"int32")},t.prototype.nonMaxSuppression=function(t,e,n,r,o){return this.assertNotComplex(t,"nonMaxSuppression"),Ro(this.readSync(t.dataId),this.readSync(e.dataId),n,r,o)},t.prototype.fft=function(t){return this.fftBatch(t,!1)},t.prototype.ifft=function(t){return this.fftBatch(t,!0)},t.prototype.fftBatch=function(t,e){for(var n=t.shape[0],r=t.shape[1],o=Zn(t.shape,"float32"),a=Zn(t.shape,"float32"),i=gn(t).as2D(n,r),s=yn(t).as2D(n,r),u=0;u<n;u++)for(var l=i.slice([u,0],[1,r]),c=s.slice([u,0],[1,r]),h=mn(l,c),p=this.readSync(this.fftImpl(h,e).dataId),f=0;f<r;f++){var d=wo(p,f);o.values[u*r+f]=d.real,a.values[u*r+f]=d.imag;}return mn(o.toTensor(),a.toTensor()).as2D(n,r)},t.prototype.fftImpl=function(t,e){var n=t.as1D(),r=n.size;if(this.isExponentOf2(r)){var o=this.fftRadix2(n,r,e).as2D(t.shape[0],t.shape[1]);return e&&(o=mn(gn(o).div(wn(r)),yn(o).div(wn(r)))),o}var a=this.readSync(t.dataId),i=function(t){for(var e=new Float32Array(t.length/2),n=new Float32Array(t.length/2),r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return {real:e,imag:n}}(this.fourierTransformByMatmul(a,r,e));return mn(i.real,i.imag).as2D(t.shape[0],t.shape[1])},t.prototype.isExponentOf2=function(t){return 0==(t&t-1)},t.prototype.fftRadix2=function(t,e,n){if(1===e)return t;var r=this.readSync(t.dataId),o=e/2,a=function(t){for(var e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),i=mn(a.real,a.imag).as1D(),s=function(t){for(var e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),u=mn(s.real,s.imag).as1D();i=this.fftRadix2(i,o,n),u=this.fftRadix2(u,o,n);var l=function(t,e){for(var n=new Float32Array(t/2),r=new Float32Array(t/2),o=0;o<Math.ceil(t/2);o++){var a=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(a),r[o]=Math.sin(a);}return {real:n,imag:r}}(e,n),c=mn(l.real,l.imag).mul(u),h=i.add(c),p=i.sub(c),f=gn(h).concat(gn(p)),d=yn(h).concat(yn(p));return mn(f,d).as1D()},t.prototype.fourierTransformByMatmul=function(t,e,n){for(var r=new Float32Array(2*e),o=0;o<e;o++){for(var a=0,i=0,s=0;s<e;s++){var u=Eo(o*s,e,n),l=wo(t,s);a+=l.real*u.real-l.imag*u.imag,i+=l.real*u.imag+l.imag*u.real;}n&&(a/=e,i/=e),Co(r,a,i,o);}return r},t.prototype.depthToSpace=function(t,e,n){f("NHWC"===n,function(){return "Only NHWC dataFormat supported on CPU for depthToSpace. Got "+n}),f(e>1,function(){return "blockSize should be > 1 for depthToSpace, but was: "+e});for(var r=t.shape[0],o=t.shape[1],a=t.shape[2],i=t.shape[3],s=o*e,u=a*e,l=i/(e*e),c=this.readSync(t.dataId),h=new Float32Array(r*s*u*l),p=0,d=0;d<r;++d)for(var v=0;v<s;++v)for(var m=Math.floor(v/e),g=v%e,y=0;y<u;++y)for(var x=Math.floor(y/e),b=(g*e+y%e)*l,w=0;w<l;++w){var C=w+b+i*(x+a*(m+o*d));h[p++]=c[C];}return In(h,[r,s,u,l])},t.prototype.broadcastedBinaryOp=function(t,e,n,r){var o=no(t.shape,e.shape),a=Zn(o,n),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=to(t.shape,o),l=to(e.shape,o),c=a.values;if(u.length+l.length===0)for(var h=0;h<c.length;++h)c[h]=r(i[h%i.length],s[h%s.length]);else{var p=this.bufferSync(t),f=this.bufferSync(e),d=function(n){var o=a.indexToLoc(n),h=o.slice(-t.rank);u.forEach(function(t){return h[t]=0});var d=p.locToIndex(h),v=o.slice(-e.rank);l.forEach(function(t){return v[t]=0});var m=f.locToIndex(v);c[n]=r(i[d],s[m]);};for(h=0;h<c.length;++h)d(h);}return a.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(t,e,n){var r=no(t.shape,e.shape),o=Zn(r,"float32"),a=Zn(r,"float32"),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=to(t.shape,r),l=to(e.shape,r),c=o.values,h=a.values;if(u.length+l.length===0)for(var p=0;p<c.length;p++){var f=p%i.length,d=p%s.length,v=n(i[2*f],i[2*f+1],s[2*d],s[2*d+1]);c[p]=v.real,h[p]=v.imag;}else{var m=this.bufferSync(this.data.get(t.dataId).complexTensors.real),g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),y=function(r){var a=o.indexToLoc(r),p=a.slice(-t.rank);u.forEach(function(t){return p[t]=0});var f=m.locToIndex(p),d=a.slice(-e.rank);l.forEach(function(t){return d[t]=0});var v=g.locToIndex(d),y=n(i[2*f],i[2*f+1],s[2*v],s[2*v+1]);c[r]=y.real,h[r]=y.imag;};for(p=0;p<c.length;p++)y(p);}return this.complex(o.toTensor(),a.toTensor())},t.prototype.split=function(t,e,n){return ko(t,e,n)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(t,e,n,r,o,a){for(var i=t.shape,s=i[0],u=i[1],l=i[2],c=i[3],h=e.shape[0],p=r[0],f=r[1],d=Zn([h,p,f,c],t.dtype),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=this.readSync(t.dataId),y=t.strides,x=d.strides,b=0;b<h;b++){var w=4*b,C=v[w],E=v[w+1],R=v[w+2],I=v[w+3],k=m[b];if(!(k>=s))for(var N=p>1?(R-C)*(u-1)/(p-1):0,S=f>1?(I-E)*(l-1)/(f-1):0,A=0;A<p;A++){var T=p>1?C*(u-1)+A*N:.5*(C+R)*(u-1);if(T<0||T>u-1)for(var D=0;D<f;D++)for(var _=0;_<c;_++){var O=_+D*x[2]+A*x[1]+b*x[0];d.values[O]=a;}else if("bilinear"===o){var F=Math.floor(T),M=Math.ceil(T),B=T-F;for(D=0;D<f;D++){if((q=f>1?E*(l-1)+D*S:.5*(E+I)*(l-1))<0||q>l-1)for(_=0;_<c;_++){O=_+D*x[2]+A*x[1]+b*x[0];d.values[O]=a;}else{var P=Math.floor(q),L=Math.ceil(q),W=q-P;for(_=0;_<c;_++){var U=g[O=_+P*y[2]+F*y[1]+k*y[0]],V=g[O=_+L*y[2]+F*y[1]+k*y[0]],z=g[O=_+P*y[2]+M*y[1]+k*y[0]],G=U+(V-U)*W,H=z+(g[O=_+L*y[2]+M*y[1]+k*y[0]]-z)*W;O=_+D*x[2]+A*x[1]+b*x[0],d.values[O]=G+(H-G)*B;}}}}else for(D=0;D<f;++D){var q;if((q=f>1?E*(l-1)+D*S:.5*(E+I)*(l-1))<0||q>l-1)for(_=0;_<c;_++){O=_+D*x[2]+A*x[1]+b*x[0];d.values[O]=a;}else{var $=Math.round(q),K=Math.round(T);for(_=0;_<c;_++){var j=_+$*y[2]+K*y[1]+k*y[0],X=_+D*x[2]+A*x[1]+b*x[0];d.values[X]=g[j];}}}}}return d.toTensor()},t.prototype.sparseToDense=function(t,e,n,r){var o=Br(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.sliceSize,u=o.strides,l=o.outputSize;return this.scatter(t,e,n,l,s,i,a,u,r,!1)},t.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=_r(t,e),a=o[0],i=o[1],s=o[2],u=o[3];if(0===i)return xn([],a,t.dtype);for(var l=new it([i,s],t.dtype),c=this.readSync(e.dataId),h=this.readSync(t.dataId),p=0;p<i;p++){for(var f=[],d=0,v=0;v<r;v++){var m=c[p*r+v];d+=m*u[v],f.push(m);}if(d<0||d>=t.size/s)throw new Error("Invalid indices: "+f+" does not index into "+t.shape);for(var g=0;g<s;g++)l.values[p*s+g]=h[d*s+g];}return l.toTensor().reshape(a)},t.prototype.scatterND=function(t,e,n){var r=Br(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,l=wn(0);return this.scatter(t,e,n,u,i,a,o,s,l,!0)},t.prototype.fill=function(t,e,n){var r=S(n=n||L(e),g(t));return r.fill(e),ct.make(t,{values:r},n)},t.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},t.prototype.zerosLike=function(t){var e=S(t.dtype,g(t.shape));return ct.make(t.shape,{values:e},t.dtype)},t.prototype.linspace=function(t,e,n){return yo(t,e,n)},t.prototype.scatter=function(t,e,n,r,o,a,i,s,u,l){var c=[r/o,o],h=this.readSync(t.dataId),p=this.readSync(e.dataId);if(0===r)return xn([],n,e.dtype);var f=new it(c,e.dtype);f.values.fill(this.readSync(u.dataId)[0]);for(var d=0;d<a;d++){for(var v=[],m=0,g=0;g<i;g++){var y=h[d*i+g];v.push(y),m+=y*s[g];}if(m<0||m>=r/o)throw new Error("Invalid indices: "+v+" does not index into "+n);for(var x=0;x<o;x++)l?f.values[m*o+x]+=p[d*o+x]:f.values[m*o+x]=0===e.rank?p[0]:p[d*o+x];}return f.toTensor().reshape(n)},t}();St.registerBackend("cpu",function(){return new nh},1);var rh=function(){function t(){this.textEncoder=new TextEncoder;}return t.prototype.fetch=function(t,e){return fetch(t,e)},t.prototype.now=function(){return performance.now()},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},t}();i.get("IS_BROWSER")&&i.setPlatform("browser",new rh);var oh,ah=function(){return require("node-fetch")},ih=function(){function t(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder;}return t.prototype.fetch=function(t,e){return null!=i.global.fetch?i.global.fetch(t,e):(null==oh&&(oh=ah()),oh(t,e))},t.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)},t}();i.get("IS_NODE")&&i.setPlatform("node",new ih);var sh={float32:4,int32:4,uint16:2,uint8:1,bool:1},uh=4;function lh(t,e){for(var n={},r=0,o=function(e){var o=e.name,a=e.dtype,i=e.shape,s=g(i),u=void 0;if("quantization"in e){var l=e.quantization;if("uint8"!==l.dtype&&"uint16"!==l.dtype)throw new Error("Weight "+e.name+" has unknown quantization dtype "+l.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var c=sh[l.dtype],h=t.slice(r,r+s*c),p="uint8"===l.dtype?new Uint8Array(h):new Uint16Array(h);if("float32"===a)u=Float32Array.from(p,function(t){return t*l.scale+l.min});else{if("int32"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=Int32Array.from(p,function(t){return Math.round(t*l.scale+l.min)});}r+=s*c;}else if("string"===a){var f=g(e.shape);u=[];for(var d=0;d<f;d++){var v=new Uint32Array(t.slice(r,r+uh))[0];r+=uh;var m=new Uint8Array(t.slice(r,r+v));u.push(m),r+=v;}}else{var y=sh[a];h=t.slice(r,r+s*y);if("float32"===a)u=new Float32Array(h);else if("int32"===a)u=new Int32Array(h);else{if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=new Uint8Array(h);}r+=s*y;}n[o]=xn(u,i,a);},a=0,i=e;a<i.length;a++){o(i[a]);}return n}function ch(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));var e=0,n=[];t.forEach(function(t){if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)});var r=new Uint8Array(e),o=0;return n.forEach(function(t){r.set(new Uint8Array(t.buffer),o),o+=t.byteLength;}),r.buffer}var hh="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function ph(t){return hh?Buffer.byteLength(t):new Blob([t]).size}function fh(t){var e=0;t.forEach(function(t){e+=t.byteLength;});var n=new Uint8Array(e),r=0;return t.forEach(function(t){n.set(new Uint8Array(t),r),r+=t.byteLength;}),n.buffer}function dh(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);var e=t.split("/");return e[e.length-1]}function vh(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return {dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:ph(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:ph(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}var mh=function(){function t(){this.saveRouters=[],this.loadRouters=[];}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerSaveRouter=function(e){t.getInstance().saveRouters.push(e);},t.registerLoadRouter=function(e){t.getInstance().loadRouters.push(e);},t.getSaveHandlers=function(e){return t.getHandlers(e,"save")},t.getLoadHandlers=function(e,n){return t.getHandlers(e,"load",n)},t.getHandlers=function(e,n,r){var o=[];return ("load"===n?t.getInstance().loadRouters:t.getInstance().saveRouters).forEach(function(t){var n=t(e,r);null!==n&&o.push(n);}),o},t}(),gh="://",yh=function(){function t(){this.managers={};}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerManager=function(e,n){f(null!=e,function(){return "scheme must not be undefined or null."}),e.endsWith(gh)&&(e=e.slice(0,e.indexOf(gh))),f(e.length>0,function(){return "scheme must not be an empty string."});var r=t.getInstance();f(null==r.managers[e],function(){return "A model store manager is already registered for scheme '"+e+"'."}),r.managers[e]=n;},t.getManager=function(t){var e=this.getInstance().managers[t];if(null==e)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},t.getSchemes=function(){return Object.keys(this.getInstance().managers)},t}();function xh(t){if(-1===t.indexOf(gh))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+yh.getSchemes().join(","));return {scheme:t.split(gh)[0],path:t.split(gh)[1]}}function bh(t,e,o){return void 0===o&&(o=!1),n(this,void 0,void 0,function(){var n,a,i,s,u,l,c,h,p;return r(this,function(r){switch(r.label){case 0:return f(t!==e,function(){return "Old path and new path are the same: '"+t+"'"}),f((n=mh.getLoadHandlers(t)).length>0,function(){return "Copying failed because no load handler is found for source URL "+t+"."}),f(n.length<2,function(){return "Copying failed because more than one ("+n.length+") load handlers for source URL "+t+"."}),a=n[0],f((i=mh.getSaveHandlers(e)).length>0,function(){return "Copying failed because no save handler is found for destination URL "+e+"."}),f(i.length<2,function(){return "Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."}),s=i[0],u=xh(t).scheme,l=xh(t).path,c=u===xh(t).scheme,[4,a.load()];case 1:return h=r.sent(),o&&c?[4,yh.getManager(u).removeModel(l)]:[3,3];case 2:r.sent(),r.label=3;case 3:return [4,s.save(h)];case 4:return p=r.sent(),!o||c?[3,6]:[4,yh.getManager(u).removeModel(l)];case 5:r.sent(),r.label=6;case 6:return [2,p.modelArtifactsInfo]}})})}var wh="models_store",Ch="model_info_store";function Eh(){if(!i.getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var t=window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Rh(t){var e=t.result;e.createObjectStore(wh,{keyPath:"modelPath"}),e.createObjectStore(Ch,{keyPath:"modelPath"});}var Ih=function(){function t(t){if(this.indexedDB=Eh(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return [2,this.databaseAction(this.modelPath,t)]})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return [2,this.databaseAction(this.modelPath)]})})},t.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(t,r){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Rh(o)},o.onsuccess=function(){var a=o.result;if(null==e){var i=a.transaction(wh,"readonly"),s=i.objectStore(wh).get(n.modelPath);s.onsuccess=function(){if(null==s.result)return a.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));t(s.result.modelArtifacts);},s.onerror=function(t){return a.close(),r(s.error)},i.oncomplete=function(){return a.close()};}else{var u,l=vh(e),c=a.transaction(Ch,"readwrite"),h=c.objectStore(Ch),p=h.put({modelPath:n.modelPath,modelArtifactsInfo:l});p.onsuccess=function(){var o=(u=a.transaction(wh,"readwrite")).objectStore(wh).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:l});o.onsuccess=function(){return t({modelArtifactsInfo:l})},o.onerror=function(t){var e=(h=c.objectStore(Ch)).delete(n.modelPath);e.onsuccess=function(){return a.close(),r(o.error)},e.onerror=function(t){return a.close(),r(o.error)};};},p.onerror=function(t){return a.close(),r(p.error)},c.oncomplete=function(){null==u?a.close():u.oncomplete=function(){return a.close()};};}},o.onerror=function(t){return r(o.error)};})},t.URL_SCHEME="indexeddb://",t}(),kh=function(t){return i.getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ih.URL_SCHEME)?(e=t.slice(Ih.URL_SCHEME.length),new Ih(e)):null;var e;};mh.registerSaveRouter(kh),mh.registerLoadRouter(kh);var Nh=function(){function t(){this.indexedDB=Eh();}return t.prototype.listModels=function(){return n(this,void 0,void 0,function(){var t=this;return r(this,function(e){return [2,new Promise(function(e,n){var r=t.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=function(){return Rh(r)},r.onsuccess=function(){var t=r.result,o=t.transaction(Ch,"readonly"),a=o.objectStore(Ch).getAll();a.onsuccess=function(){for(var t={},n=0,r=a.result;n<r.length;n++){var o=r[n];t[o.modelPath]=o.modelArtifactsInfo;}e(t);},a.onerror=function(e){return t.close(),n(a.error)},o.oncomplete=function(){return t.close()};},r.onerror=function(t){return n(r.error)};})]})})},t.prototype.removeModel=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(n){var r;return t=(r=t).startsWith(Ih.URL_SCHEME)?r.slice(Ih.URL_SCHEME.length):r,[2,new Promise(function(n,r){var o=e.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Rh(o)},o.onsuccess=function(){var e,a=o.result,i=a.transaction(Ch,"readwrite"),s=i.objectStore(Ch),u=s.get(t);u.onsuccess=function(){if(null==u.result)return a.close(),r(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var o=s.delete(t),i=function(){var o=(e=a.transaction(wh,"readwrite")).objectStore(wh).delete(t);o.onsuccess=function(){return n(u.result.modelArtifactsInfo)},o.onerror=function(t){return r(u.error)};};o.onsuccess=i,o.onerror=function(t){return i(),a.close(),r(u.error)};},u.onerror=function(t){return a.close(),r(u.error)},i.oncomplete=function(){null==e?a.close():e.oncomplete=function(){return a.close()};};},o.onerror=function(t){return r(o.error)};})]})})},t}();if(i.getBool("IS_BROWSER"))try{yh.registerManager(Ih.URL_SCHEME,new Nh);}catch(t){}var Sh="/",Ah="tensorflowjs_models",Th="info",Dh="model_topology",_h="weight_specs",Oh="weight_data",Fh="model_metadata";function Mh(t){return {info:[Ah,t,Th].join(Sh),topology:[Ah,t,Dh].join(Sh),weightSpecs:[Ah,t,_h].join(Sh),weightData:[Ah,t,Oh].join(Sh),modelMetadata:[Ah,t,Fh].join(Sh)}}function Bh(t){var e=t.split(Sh);if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join(Sh)}var Ph=function(){function t(t){if(!i.getBool("IS_BROWSER")||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Mh(this.modelPath);}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=vh(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,(a=t.weightData,hh?Buffer.from(a).toString("base64"):btoa(String.fromCharCode.apply(null,new Uint8Array(a))))),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy})),[2,{modelArtifactsInfo:o}]}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}var a;return [2]})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return r(this,function(r){if(null==(t=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,null==(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,null!=(a=this.LS.getItem(this.keys.modelMetadata))&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy),null==(s=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(t){if(hh){var e=Buffer.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}for(var n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r.set([n.charCodeAt(o)],o);return r.buffer}(s),[2,e]})})},t.URL_SCHEME="localstorage://",t}(),Lh=function(t){return i.getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Ph.URL_SCHEME)?(e=t.slice(Ph.URL_SCHEME.length),new Ph(e)):null;var e;};mh.registerSaveRouter(Lh),mh.registerLoadRouter(Lh);var Wh=function(){function t(){f(i.getBool("IS_BROWSER"),function(){return "Current environment is not a web browser"}),f(void 0!==window.localStorage,function(){return "Current browser does not appear to support localStorage"}),this.LS=window.localStorage;}return t.prototype.listModels=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i;return r(this,function(r){for(t={},e=Ah+Sh,n=Sh+Th,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Bh(a),t[i]=JSON.parse(this.LS.getItem(a)));return [2,t]})})},t.prototype.removeModel=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){var o;if(t=(o=t).startsWith(Ph.URL_SCHEME)?o.slice(Ph.URL_SCHEME.length):o,e=Mh(t),null==this.LS.getItem(e.info))throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},t}();if(i.getBool("IS_BROWSER"))try{yh.registerManager(Ph.URL_SCHEME,new Wh);}catch(t){}var Uh="model",Vh=".json",zh=".weights.bin";function Gh(t){return new Promise(function(t){return setTimeout(t)}).then(t)}var Hh=function(){function t(e){if(!i.getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(t.URL_SCHEME)&&(e=e.slice(t.URL_SCHEME.length)),null!=e&&0!==e.length||(e=Uh),this.modelTopologyFileName=e+Vh,this.weightDataFileName=e+zh;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,s;return r(this,function(r){switch(r.label){case 0:if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return [3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Gh(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return r.sent(),null==t.weightData?[3,4]:((s=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Gh(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:r.sent(),r.label=4;case 4:return [2,{modelArtifactsInfo:vh(t)}]}})})},t.URL_SCHEME="downloads://",t}(),qh=function(){function t(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t;}return t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n=this;return r(this,function(r){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(r,o){var a=new FileReader;a.onload=function(a){var i=JSON.parse(a.target.result),s=i.modelTopology;if(null!=s){0===e.length&&r({modelTopology:s});var u=i.weightsManifest;if(null!=u){var l;try{l=n.checkManifestAndWeightFiles(u,e);}catch(t){return void o(t)}var c=[],h=[],p=[];u.forEach(function(t){t.paths.forEach(function(t){h.push(t),p.push(null);}),c.push.apply(c,t.weights);}),u.forEach(function(t){t.paths.forEach(function(t){var e=new FileReader;e.onload=function(e){var n=e.target.result,o=h.indexOf(t);p[o]=n,-1===p.indexOf(null)&&r({modelTopology:s,weightSpecs:c,weightData:fh(p)});},e.onerror=function(e){return o("Failed to weights data from file of path '"+t+"'.")},e.readAsArrayBuffer(l[t]);});});}else o(new Error("weightManifest field is missing from file "+t.name));}else o(new Error("modelTopology field is missing from file "+t.name));},a.onerror=function(e){return o("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},a.readAsText(t);})]})})},t.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],r=e.map(function(t){return dh(t.name)}),o={},a=0,i=t;a<i.length;a++){i[a].paths.forEach(function(t){var a=dh(t);if(-1!==n.indexOf(a))throw new Error("Duplicate file basename found in weights manifest: '"+a+"'");if(n.push(a),-1===r.indexOf(a))throw new Error("Weight file with basename '"+a+"' is not provided.");o[t]=e[r.indexOf(a)];});}if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},t}();function $h(t,e,n,r){!function(t){f(null!=t&&Array.isArray(t)&&t.length>0,function(){return "promises must be a none empty array"});}(t),function(t,e){f(t>=0&&t<=1,function(){return "Progress fraction must be in range [0, 1], but got startFraction "+t}),f(e>=0&&e<=1,function(){return "Progress fraction must be in range [0, 1], but got endFraction "+e}),f(e>=t,function(){return "startFraction must be no more than endFraction, but got startFraction "+t+" and endFraction "+e});}(n=null==n?0:n,r=null==r?1:r);var o=0;return Promise.all(t.map(function(a){return a.then(function(a){var i=n+ ++o/t.length*(r-n);return e(i),a}),a}))}function Kh(t,e){return n(this,void 0,void 0,function(){var n,o,a,s,u,l,c,h,p;return r(this,function(r){switch(r.label){case 0:return null==e&&(e={}),n=null==e.fetchFunc?i.platform.fetch:e.fetchFunc,o=t.map(function(t){return n(t,e.requestInit,{isBinary:!0})}),a=0,s=.5,null!=e.onProgress?[3,2]:[4,Promise.all(o)];case 1:return u=r.sent(),[3,4];case 2:return [4,$h(o,e.onProgress,a,s)];case 3:u=r.sent(),r.label=4;case 4:return l=u.map(function(t){return t.arrayBuffer()}),c=.5,h=1,null!=e.onProgress?[3,6]:[4,Promise.all(l)];case 5:return p=r.sent(),[3,8];case 6:return [4,$h(l,e.onProgress,c,h)];case 7:p=r.sent(),r.label=8;case 8:return [2,p]}})})}function jh(t){var e=this;return function(o,a,i){return void 0===a&&(a=""),n(e,void 0,void 0,function(){var e,n,s,u,l,c,h,p,f,d;return r(this,function(r){switch(r.label){case 0:if(e=o.map(function(){return !1}),n={},s=null!=i?i.map(function(){return !1}):[],u=[],o.forEach(function(t,r){var o=0;t.weights.forEach(function(t){var a="quantization"in t?t.quantization.dtype:t.dtype,l=sh[a]*g(t.shape),c=function(){e[r]=!0,null==n[r]&&(n[r]=[]),n[r].push({manifestEntry:t,groupOffset:o,sizeBytes:l});};null!=i?i.forEach(function(e,n){e===t.name&&(c(),s[n]=!0);}):c(),u.push(t.name),o+=l;});}),!s.every(function(t){return t}))throw l=i.filter(function(t,e){return !s[e]}),new Error("Could not find weights in manifest with names: "+l.join(", ")+". \nManifest JSON has weights with names: "+u.join(", ")+".");return c=e.reduce(function(t,e,n){return e&&t.push(n),t},[]),h=[],c.forEach(function(t){o[t].paths.forEach(function(t){var e=a+(a.endsWith("/")?"":"/")+t;h.push(e);});}),[4,t(h)];case 1:return p=r.sent(),f={},d=0,c.forEach(function(t){for(var e=o[t].paths.length,r=0,a=0;a<e;a++)r+=p[d+a].byteLength;for(var i=new ArrayBuffer(r),s=new Uint8Array(i),u=0,l=0;l<e;l++){var c=new Uint8Array(p[d+l]);s.set(c,u),u+=c.byteLength;}n[t].forEach(function(t){var e=lh(i.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(var n in e)f[n]=e[n];}),d+=e;}),[2,f]}})})}}mh.registerSaveRouter(function(t){return i.getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Hh.URL_SCHEME)?(e=t.slice(Hh.URL_SCHEME.length),void 0===e&&(e="model"),new Hh(e)):null;var e;});var Xh=function(){function t(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(f("function"==typeof e.fetchFunc,function(){return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=i.platform.fetch,f(null!=t&&t.length>0,function(){return "URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&f(2===t.length,function(){return "URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{};}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o,a;return r(this,function(r){switch(r.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return (e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=r.sent()).ok)return [2,{modelArtifactsInfo:vh(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u;return r(this,function(r){switch(r.label){case 0:return [4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=r.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");r.label=2;case 2:return r.trys.push([2,4,,5]),[4,t.json()];case 3:return e=r.sent(),[3,5];case 4:throw r.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,null==o&&null==a)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==a?[3,7]:[4,this.loadWeights(a)];case 6:u=r.sent(),i=u[0],s=u[1],r.label=7;case 7:return [2,{modelTopology:o,weightSpecs:i,weightData:s}]}})})},t.prototype.loadWeights=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,s,u,l,c,h,p;return r(this,function(r){switch(r.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),o=n>e?t.substring(n):"";return [r+"/",o]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,l=t;u<l.length;u++)c=l[u],s.push.apply(s,c.weights);return h=[],t.forEach(function(t){t.paths.forEach(function(t){h.push(i+t+a);});}),[4,Kh(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return p=r.sent(),[2,[s,fh(p)]]}})})},t.URL_SCHEME_REGEX=/^https?:\/\//,t}();function Yh(t){return null!=t.match(Xh.URL_SCHEME_REGEX)}var Qh=function(t,e){if("undefined"==typeof fetch)return null;return (Array.isArray(t)?t.every(function(t){return Yh(t)}):Yh(t))?Jh(t,{onProgress:e}):null};function Jh(t,e){return new Xh(t,e)}mh.registerSaveRouter(Qh),mh.registerLoadRouter(Qh);var Zh=function(){function t(t){this.modelArtifacts=t;}return t.prototype.load=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return [2,this.modelArtifacts]})})},t}(),tp=function(){function t(t){this.saveHandler=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return [2,this.saveHandler(t)]})})},t}();var ep=Object.freeze({browserFiles:function(t){return new qh(t)},browserHTTPRequest:function(t,e){return Jh(t,e)},concatenateArrayBuffers:fh,decodeWeights:lh,encodeWeights:function(t,e){return n(this,void 0,void 0,function(){var o,a,i,s,u,l=this;return r(this,function(c){switch(c.label){case 0:for(o=[],a=[],i=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t),s=function(s){var u=i[s],c=Array.isArray(t)?t[s].tensor:t[u];if("float32"!==c.dtype&&"int32"!==c.dtype&&"bool"!==c.dtype&&"string"!==c.dtype)throw new Error("Unsupported dtype in weight '"+u+"': "+c.dtype);var h={name:u,shape:c.shape,dtype:c.dtype};if("string"===c.dtype){var p=new Promise(function(t){return n(l,void 0,void 0,function(){var e,n,o,a,i,s,u;return r(this,function(r){switch(r.label){case 0:return [4,c.bytes()];case 1:for(e=r.sent(),n=e.reduce(function(t,e){return t+e.length},0)+uh*e.length,o=new Uint8Array(n),a=0,i=0;i<e.length;i++)s=e[i],u=new Uint8Array(new Uint32Array([s.length]).buffer),o.set(u,a),a+=uh,o.set(s,a),a+=s.length;return t(o),[2]}})})});a.push(p);}else a.push(c.data());null!=e&&(h.group=e),o.push(h);},u=0;u<i.length;++u)s(u);return [4,Promise.all(a)];case 1:return [2,{data:ch(c.sent()),specs:o}]}})})},fromMemory:function(t,e,n,r){return 1===arguments.length?null!=t.modelTopology||null!=t.weightSpecs?new Zh(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Zh({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Zh({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))},getLoadHandlers:function(t,e){return mh.getLoadHandlers(t,e)},getModelArtifactsInfoForJSON:vh,getSaveHandlers:function(t){return mh.getSaveHandlers(t)},http:Jh,isHTTPScheme:Yh,loadWeights:function(t,e,o,a){return void 0===e&&(e=""),n(this,void 0,void 0,function(){return r(this,function(n){return [2,jh(function(t){return Kh(t,{requestInit:a})})(t,e,o)]})})},registerLoadRouter:function(t){return mh.registerLoadRouter(t)},registerSaveRouter:function(t){return mh.registerSaveRouter(t)},weightsLoaderFactory:jh,withSaveHandler:function(t){return new tp(t)},copyModel:function(t,e){return n(this,void 0,void 0,function(){return r(this,function(n){return [2,bh(t,e,!1)]})})},listModels:function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return r(this,function(r){switch(r.label){case 0:t=yh.getSchemes(),e={},n=0,o=t,r.label=1;case 1:return n<o.length?(a=o[n],[4,yh.getManager(a).listModels()]):[3,4];case 2:for(s in i=r.sent())e[a+gh+s]=i[s];r.label=3;case 3:return n++,[3,1];case 4:return [2,e]}})})},moveModel:function(t,e){return n(this,void 0,void 0,function(){return r(this,function(n){return [2,bh(t,e,!0)]})})},removeModel:function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=xh(t),[2,yh.getManager(e.scheme).removeModel(e.path)]})})}});var np=vn({confusionMatrix_:function(t,e,n){var r=nn(t,"labels","confusionMatrix"),o=nn(e,"predictions","confusionMatrix");f(null==n||n>0&&Number.isInteger(n),function(){return "If provided, numClasses must be a positive integer, but got "+n}),f(1===r.rank,function(){return "Expected the rank of labels to be 1, but got "+r.rank}),f(1===o.rank,function(){return "Expected the rank of predictions to be 1, but got "+o.rank}),f(r.shape[0]===o.shape[0],function(){return "Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),f(n>0&&Number.isInteger(n),function(){return "numClasses is required to be a positive integer, but got "+n});var a=lr(r.asType("int32"),n),i=lr(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}}),rp=Object.freeze({confusionMatrix:np});var op=vn({fromPixels_:function(t,e){if(void 0===e&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");var n="undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement;if(n&&n&&t.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");return St.fromPixels(t,e)}}),ap=Object.freeze({toPixels:function(t,e){return n(this,void 0,void 0,function(){var n,o,a,i,s,u,l,c,h,p,f,d,v,m,g,y,x,b,w,C,E,R,I;return r(this,function(r){switch(r.label){case 0:if(n=nn(t,"img","toPixels"),t instanceof ct||(n=n.toInt()),2!==n.rank&&3!==n.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(o=n.shape.slice(0,2),a=o[0],i=o[1],(s=2===n.rank?1:n.shape[2])>4||2===s)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+s);return [4,n.data()];case 1:return u=r.sent(),l=n.min(),c=n.max(),[4,Promise.all([l.data(),c.data()])];case 2:if(h=r.sent(),p=h[0],f=h[1],d=p[0],v=f[0],l.dispose(),c.dispose(),"float32"===n.dtype){if(d<0||v>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+v+"].")}else{if("int32"!==n.dtype)throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(d<0||v>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+v+"].")}for(m="float32"===n.dtype?255:1,g=new Uint8ClampedArray(i*a*4),y=0;y<a*i;++y)x=void 0,b=void 0,w=void 0,C=void 0,1===s?(x=u[y]*m,b=u[y]*m,w=u[y]*m,C=255):3===s?(x=u[3*y]*m,b=u[3*y+1]*m,w=u[3*y+2]*m,C=255):4===s&&(x=u[4*y]*m,b=u[4*y+1]*m,w=u[4*y+2]*m,C=u[4*y+3]*m),g[0+(E=4*y)]=Math.round(x),g[E+1]=Math.round(b),g[E+2]=Math.round(w),g[E+3]=Math.round(C);return null!=e&&(e.width=i,e.height=a,R=e.getContext("2d"),I=new ImageData(g,i,a),R.putImageData(I,0,0)),n!==t&&n.dispose(),[2,g]}})})},fromPixels:op}),ip=function(){function t(){}return t.prototype.getClassName=function(){return this.constructor.className},t.fromConfig=function(t,e){return new t(e)},t}(),sp=function(){function t(){this.classNameMap={};}return t.getMap=function(){return null==t.instance&&(t.instance=new t),t.instance},t.register=function(e){t.getMap().classNameMap[e.className]=[e,e.fromConfig];},t}();function up(t){f(null!=t.className,function(){return "Class being registered does not have the static className property defined."}),f("string"==typeof t.className,function(){return "className is required to be a string, but got type "+typeof t.className}),f(t.className.length>0,function(){return "Class being registered has an empty-string as its className, which is disallowed."}),sp.register(t);}var lp=Object.freeze({Serializable:ip,SerializationMap:sp,registerClass:up}),cp=.001,hp=.1;function pp(){return 32===St.backend.floatPrecision()?cp:hp}function fp(t,e,n){var r=!0;if((_(t)||_(e))&&(r=!1),_(t)&&_(e)&&(r=!0),r){var o=t.constructor.name,a=e.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(t)&&Array.isArray(e)){var i=tn(t),s=tn(e);if(!y(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=_(t)?t:m(t),l=_(e)?e:m(e);if(u.length!==l.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+l.length+".\nActual:   "+u+".\nExpected: "+l+".");for(var c=0;c<l.length;++c){var h=u[c],p=l[c];if(!n(h,p))throw new Error("Arrays differ: actual["+c+"] = "+h+", expected["+c+"] = "+p+".\nActual:   "+u+".\nExpected: "+l+".")}}function dp(t,e,n){return !isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}var vp=Object.freeze({TEST_EPSILON_FLOAT16:hp,expectArraysClose:function(t,e,n){return null==n&&(n=pp()),fp(t,e,function(t,e){return dp(t,e,n)})},testEpsilon:pp,expectPromiseToFail:function(t,e){t().then(function(){return e.fail()},function(){return e()});},expectArraysEqual:function(t,e){var n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return M(t)||M(t[0])||M(e)||M(e[0])?fp(t,n,function(t,e){return t==e}):fp(t,e,function(t,e){return dp(t,e,0)})},expectNumbersClose:function(t,e,n){if(null==n&&(n=pp()),!dp(t,e,n))throw new Error("Numbers differ: actual === "+t+", expected === "+e)},expectValuesInRange:function(t,e,n){for(var r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error("Value out of range:"+t[r]+" low: "+e+", high: "+n)},expectArrayBuffersEqual:function(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e));}}),mp="1.2.9";var gp=Object.freeze({gpgpu_util:li,webgl_util:_e,forceHalfFloat:function(){i.set("WEBGL_FORCE_F16_TEXTURES",!0);},MathBackendWebGL:Cs,setWebGLContext:Ft,GPGPUContext:ci}),yp=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.minimize=function(t,e,n){void 0===e&&(e=!1);var r=this.computeGradients(t,n),o=r.value,a=r.grads;if(null!=n){var i=n.map(function(t){return {name:t.name,tensor:a[t.name]}});this.applyGradients(i);}else this.applyGradients(a);return Ve(a),e?o:(o.dispose(),null)},Object.defineProperty(o.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),o.prototype.incrementIterations=function(){this.iterations_=this.iterations+1;},o.prototype.computeGradients=function(t,e){return Kr(t,e)},o.prototype.dispose=function(){null!=this.iterations_&&Ve(this.iterations_);},o.prototype.saveIterations=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:wn(this.iterations_,"int32")}]})})},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},o.prototype.extractIterations=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=this,[4,t[0].tensor.data()];case 1:return e.iterations_=n.sent()[0],[2,t.slice(1)]}})})},o}(ip);Object.defineProperty(yp,Symbol.hasInstance,{value:function(t){return null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients}});var xp=function(t){function o(e,n,r){void 0===r&&(r=null);var o=t.call(this)||this;return o.learningRate=e,o.rho=n,o.epsilon=r,o.accumulatedGrads=[],o.accumulatedUpdates=[],null==r&&(o.epsilon=St.backend.epsilon()),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=St.registeredVariables[n];null==e.accumulatedGrads[r]&&(e.accumulatedGrads[r]={originalName:n+"/accum_grad",variable:Ue(function(){return Fn(o).variable(!1)})}),null==e.accumulatedUpdates[r]&&(e.accumulatedUpdates[r]={originalName:n+"/accum_var",variable:Ue(function(){return Fn(o).variable(!1)})});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable,s=e.accumulatedUpdates[r].variable;Ue(function(){var t=i.mul(e.rho).add(a.square().mul(1-e.rho)),n=s.add(e.epsilon).sqrt().div(i.add(e.epsilon).sqrt()).mul(a),r=s.mul(e.rho).add(n.square().mul(1-e.rho));i.assign(t),s.assign(r);var u=n.mul(-e.learningRate).add(o);o.assign(u);});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedUpdates&&(Ve(this.accumulatedGrads.map(function(t){return t.variable})),Ve(this.accumulatedUpdates.map(function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=t.length/2,this.accumulatedGrads=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedUpdates=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.rho,e.epsilon)},o.className="Adadelta",o}(yp);up(xp);var bp=function(t){function o(e,n){void 0===n&&(n=.1);var r=t.call(this)||this;return r.learningRate=e,r.initialAccumulatorValue=n,r.accumulatedGrads=[],r}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=St.registeredVariables[n];if(null==e.accumulatedGrads[r]){e.accumulatedGrads[r]={originalName:n+"/accumulator",variable:Ue(function(){return Tn(o.shape,e.initialAccumulatorValue).variable(!1)})};}var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable;Ue(function(){var t=i.add(a.square());i.assign(t);var n=a.div(t.add(St.backend.epsilon()).sqrt()).mul(-e.learningRate).add(o);o.assign(n);});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedGrads&&Ve(this.accumulatedGrads.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulatedGrads.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulatedGrads=t.map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},o.fromConfig=function(t,e){return new t(e.learningRate,e.initialAccumulatorValue)},o.className="Adagrad",o}(yp);up(bp);var wp=function(t){function o(e,n,r,o){void 0===o&&(o=null);var a=t.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=r,a.epsilon=o,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],Ue(function(){a.accBeta1=wn(n).variable(),a.accBeta2=wn(r).variable();}),null==o&&(a.epsilon=St.backend.epsilon()),a}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t);Ue(function(){var r=Gu(1,e.accBeta1),o=Gu(1,e.accBeta2);n.forEach(function(n,a){var i=St.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Ue(function(){return Fn(i).variable(!1)})}),null==e.accumulatedSecondMoment[a]&&(e.accumulatedSecondMoment[a]={originalName:n+"/v",variable:Ue(function(){return Fn(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,l=e.accumulatedSecondMoment[a].variable,c=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=l.mul(e.beta2).add(s.square().mul(1-e.beta2)),p=c.div(r),f=h.div(o);u.assign(c),l.assign(h);var d=p.div(f.sqrt().add(e.epsilon)).mul(-e.learningRate).add(i);i.assign(d);}}),e.accBeta1.assign(e.accBeta1.mul(e.beta1)),e.accBeta2.assign(e.accBeta2.mul(e.beta2));}),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&Ve(this.accumulatedFirstMoment.map(function(t){return t.variable})),null!=this.accumulatedSecondMoment&&Ve(this.accumulatedSecondMoment.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e,n=this;return r(this,function(r){switch(r.label){case 0:return [4,this.extractIterations(t)];case 1:return t=r.sent(),Ue(function(){n.accBeta1.assign(Wu(n.beta1,n.iterations_+1)),n.accBeta2.assign(Wu(n.beta2,n.iterations_+1));}),e=t.length/2,this.accumulatedFirstMoment=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedSecondMoment=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)},o.className="Adam",o}(yp);up(wp);var Cp=function(t){function o(e,n,r,o,a){void 0===o&&(o=null),void 0===a&&(a=0);var i=t.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=r,i.epsilon=o,i.decay=a,i.accumulatedFirstMoment=[],i.accumulatedWeightedInfNorm=[],Ue(function(){i.iteration=wn(0).variable(),i.accBeta1=wn(n).variable();}),null==o&&(i.epsilon=St.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t);Ue(function(){var r=Gu(1,e.accBeta1),o=Su(-e.learningRate,e.iteration.mul(e.decay).add(1));n.forEach(function(n,a){var i=St.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Fn(i).variable(!1)}),null==e.accumulatedWeightedInfNorm[a]&&(e.accumulatedWeightedInfNorm[a]={originalName:n+"/v",variable:Fn(i).variable(!1)});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,l=e.accumulatedWeightedInfNorm[a].variable,c=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=l.mul(e.beta2),p=s.abs(),f=h.maximum(p);u.assign(c),l.assign(f);var d=o.div(r).mul(c.div(f.add(e.epsilon))).add(i);i.assign(d);}}),e.iteration.assign(e.iteration.add(1)),e.accBeta1.assign(e.accBeta1.mul(e.beta1));}),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&Ve(this.accumulatedFirstMoment.map(function(t){return t.variable})),null!=this.accumulatedWeightedInfNorm&&Ve(this.accumulatedWeightedInfNorm.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("getWeights() is not implemented for Adamax yet.")})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("setWeights() is not implemented for Adamax yet.")})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)},o.className="Adamax",o}(yp);up(Cp);var Ep=function(t){function o(e){var n=t.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Array.isArray(t)?t[r].tensor:t[n];if(null!=o){var a=St.registeredVariables[n];Ue(function(){var t=e.c.mul(o).add(a);a.assign(t);});}}),this.incrementIterations();},o.prototype.setLearningRate=function(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=ze(wn(-t));},o.prototype.dispose=function(){this.c.dispose();},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()]]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:if(0!==(t=e.sent()).length)throw new Error("SGD optimizer does not have settable weights.");return [2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate}},o.fromConfig=function(t,e){return new t(e.learningRate)},o.className="SGD",o}(yp);up(Ep);var Rp=function(t){function o(e,n,r){void 0===r&&(r=!1);var o=t.call(this,e)||this;return o.learningRate=e,o.momentum=n,o.useNesterov=r,o.accumulations=[],o.m=wn(o.momentum),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=St.registeredVariables[n];if(null==e.accumulations[r]){e.accumulations[r]={originalName:n+"/momentum",variable:Ue(function(){return Fn(o).variable(!1)})};}var a=e.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[n];null!=i&&Ue(function(){var t,n=e.m.mul(a).add(i);t=e.useNesterov?e.c.mul(i.add(n.mul(e.m))).add(o):e.c.mul(n).add(o),a.assign(n),o.assign(t);});}),this.incrementIterations();},o.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&Ve(this.accumulations.map(function(t){return t.variable}));},o.prototype.setMomentum=function(t){this.momentum=t;},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulations.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulations=t.map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},o.fromConfig=function(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)},o.className="Momentum",o}(Ep);up(Rp);var Ip=function(t){function o(e,n,r,o,a){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===o&&(o=null),void 0===a&&(a=!1);var i=t.call(this)||this;return i.learningRate=e,i.decay=n,i.momentum=r,i.epsilon=o,i.accumulatedMeanSquares=[],i.accumulatedMoments=[],i.accumulatedMeanGrads=[],i.centered=a,null==o&&(i.epsilon=St.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=St.registeredVariables[n];null==e.accumulatedMeanSquares[r]&&(e.accumulatedMeanSquares[r]={originalName:n+"/rms",variable:Ue(function(){return Fn(o).variable(!1)})}),null==e.accumulatedMoments[r]&&(e.accumulatedMoments[r]={originalName:n+"/momentum",variable:Ue(function(){return Fn(o).variable(!1)})}),null==e.accumulatedMeanGrads[r]&&e.centered&&(e.accumulatedMeanGrads[r]={originalName:n+"/mg",variable:Ue(function(){return Fn(o).variable(!1)})});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedMeanSquares[r].variable,s=e.accumulatedMoments[r].variable;Ue(function(){var t=i.mul(e.decay).add(a.square().mul(1-e.decay));if(e.centered){var n=e.accumulatedMeanGrads[r].variable,u=n.mul(e.decay).add(a.mul(1-e.decay)),l=s.mul(e.momentum).add(a.mul(e.learningRate).div(t.sub(u.square().add(e.epsilon)).sqrt()));i.assign(t),n.assign(u),s.assign(l);var c=o.sub(l);o.assign(c);}else{var h=i.mul(e.decay).add(a.square().mul(1-e.decay));l=s.mul(e.momentum).add(a.mul(e.learningRate).div(h.add(e.epsilon).sqrt()));i.assign(h),s.assign(l);c=o.sub(l);o.assign(c);}});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&Ve(this.accumulatedMeanSquares.map(function(t){return t.variable})),null!=this.accumulatedMeanGrads&&this.centered&&Ve(this.accumulatedMeanGrads.map(function(t){return t.variable})),null!=this.accumulatedMoments&&Ve(this.accumulatedMoments.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedMoments=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},o.fromConfig=function(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)},o.className="RMSProp",o}(yp);up(Ip);var kp=function(){function t(){}return t.sgd=function(t){return new Ep(t)},t.momentum=function(t,e,n){return void 0===n&&(n=!1),new Rp(t,e,n)},t.rmsprop=function(t,e,n,r,o){return void 0===e&&(e=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===o&&(o=!1),new Ip(t,e,n,r,o)},t.adam=function(t,e,n,r){return void 0===t&&(t=.001),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new wp(t,e,n,r)},t.adadelta=function(t,e,n){return void 0===t&&(t=.001),void 0===e&&(e=.95),void 0===n&&(n=null),new xp(t,e,n)},t.adamax=function(t,e,n,r,o){return void 0===t&&(t=.002),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===o&&(o=0),new Cp(t,e,n,r,o)},t.adagrad=function(t,e){return void 0===e&&(e=.1),new bp(t,e)},t}(),Np={sgd:kp.sgd,momentum:kp.momentum,adadelta:kp.adadelta,adagrad:kp.adagrad,rmsprop:kp.rmsprop,adamax:kp.adamax,adam:kp.adam},Sp="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:function(t){return t()};function Ap(){return new Promise(function(t){return Sp(function(){return t()})})}ut=th;

    var tfCore_esm = /*#__PURE__*/Object.freeze({
        AdadeltaOptimizer: xp,
        AdagradOptimizer: bp,
        AdamOptimizer: wp,
        AdamaxOptimizer: Cp,
        DataStorage: Jr,
        get ENV () { return i; },
        Environment: o,
        KernelBackend: Zr,
        MomentumOptimizer: Rp,
        Optimizer: yp,
        RMSPropOptimizer: Ip,
        get Rank () { return pt; },
        get Reduction () { return Sc; },
        SGDOptimizer: Ep,
        Tensor: ct,
        TensorBuffer: it,
        Variable: ht,
        abs: Es,
        acos: Rs,
        acosh: Is,
        add: Ru,
        addN: Iu,
        addStrict: ku,
        all: zl,
        any: Gl,
        argMax: Hl,
        argMin: ql,
        asin: ks,
        asinh: Ns,
        atan: Ss,
        atan2: Nu,
        atanh: As,
        avgPool: _l,
        avgPool3d: Ml,
        backend: Qe,
        backend_util: xo,
        basicLSTMCell: sc,
        batchNorm: du,
        batchNorm2d: vu,
        batchNorm3d: mu,
        batchNorm4d: gu,
        batchNormalization: fu,
        batchNormalization2d: cu,
        batchNormalization3d: hu,
        batchNormalization4d: pu,
        batchToSpaceND: er,
        booleanMaskAsync: sl,
        browser: ap,
        buffer: Zn,
        cast: nr,
        ceil: Ts,
        clipByValue: Ds,
        clone: rr,
        complex: mn,
        concat: Mn,
        concat1d: Bn,
        concat2d: Pn,
        concat3d: Ln,
        concat4d: Wn,
        conv1d: pl,
        conv2d: fl,
        conv2dDerFilter: vl,
        conv2dDerInput: ml,
        conv2dTranspose: xl,
        conv3d: dl,
        conv3dTranspose: bl,
        cos: _s,
        cosh: Os,
        cumsum: or,
        customGrad: jr,
        deprecationWarn: Be,
        depthToSpace: ar,
        depthwiseConv2d: gl,
        diag: bc,
        disableDeprecationWarnings: Me,
        dispose: Ve,
        disposeVariables: Pe,
        div: Su,
        divStrict: Au,
        dot: Cl,
        dropout: wc,
        elu: Zl,
        enableDebugMode: Fe,
        enableProdMode: Oe,
        environment: u,
        equal: qu,
        equalStrict: $u,
        erf: Fs,
        exp: Ms,
        expandDims: ir,
        expm1: Bs,
        eye: sr,
        fft: fc,
        fill: Tn,
        findBackend: je,
        findBackendFactory: Xe,
        floor: Ps,
        floorDiv: Tu,
        frame: Ic,
        fused: Zc,
        gather: al,
        gatherND: xc,
        getBackend: $e,
        grad: Gr,
        grads: Hr,
        greater: Ku,
        greaterEqual: ju,
        greaterEqualStrict: Xu,
        greaterStrict: Yu,
        hammingWindow: Rc,
        hannWindow: Ec,
        ifft: dc,
        imag: yn,
        image: Yc,
        inTopKAsync: Ac,
        io: ep,
        irfft: mc,
        isFinite: Xs,
        isInf: js,
        isNaN: Ks,
        keep: ze,
        leakyRelu: tc,
        less: Qu,
        lessEqual: Ju,
        lessEqualStrict: Zu,
        lessStrict: tl,
        linalg: Gc,
        linspace: Dn,
        localResponseNormalization: ac,
        log: Ls,
        log1p: Ws,
        logSigmoid: Us,
        logSoftmax: Qr,
        logSumExp: $l,
        logicalAnd: yu,
        logicalNot: xu,
        logicalOr: bu,
        logicalXor: wu,
        losses: Wc,
        matMul: wl,
        math: rp,
        max: Kl,
        maxPool: Dl,
        maxPool3d: Fl,
        maximum: Du,
        maximumStrict: _u,
        mean: jl,
        memory: Le,
        min: Xl,
        minimum: Ou,
        minimumStrict: Fu,
        mod: Mu,
        modStrict: Bu,
        moments: Yl,
        movingAverage: lc,
        mul: Pu,
        mulStrict: Lu,
        multiRNNCell: uc,
        multinomial: ur,
        neg: Vs,
        nextFrame: Ap,
        norm: ic,
        notEqual: el,
        notEqualStrict: nl,
        oneHot: lr,
        ones: Sn,
        onesLike: On,
        op: vn,
        outerProduct: El,
        pad: cr,
        pad1d: hr,
        pad2d: pr,
        pad3d: fr,
        pad4d: dr,
        pool: Ol,
        pow: Wu,
        powStrict: Uu,
        prelu: ec,
        print: tr,
        prod: Jl,
        profile: We,
        rand: vr,
        randomGamma: gr,
        randomNormal: mr,
        randomUniform: yr,
        range: _n,
        ready: qe,
        real: gn,
        reciprocal: zs,
        registerBackend: Ye,
        relu: nc,
        removeBackend: Ke,
        reshape: xr,
        reverse: Rl,
        reverse1d: Il,
        reverse2d: kl,
        reverse3d: Nl,
        reverse4d: Sl,
        rfft: vc,
        round: Gs,
        rsqrt: Hs,
        scalar: wn,
        scatterND: pc,
        selu: rc,
        separableConv2d: yl,
        serialization: lp,
        setBackend: He,
        setPlatform: Je,
        setdiff1dAsync: kr,
        sigmoid: qs,
        sign: $s,
        signal: Nc,
        sin: Ys,
        sinh: Qs,
        slice: Bl,
        slice1d: Pl,
        slice2d: Ll,
        slice3d: Wl,
        slice4d: Ul,
        softmax: Yr,
        softplus: Js,
        spaceToBatchND: br,
        sparseToDense: yc,
        spectral: gc,
        split: Un,
        sqrt: Zs,
        square: tu,
        squaredDifference: Vu,
        squaredDifferenceStrict: zu,
        squeeze: wr,
        stack: Cr,
        step: eu,
        stft: kc,
        stridedSlice: cc,
        sub: Gu,
        subStrict: Hu,
        sum: Ql,
        tan: nu,
        tanh: ru,
        tensor: xn,
        tensor1d: Cn,
        tensor2d: En,
        tensor3d: Rn,
        tensor4d: In,
        tensor5d: kn,
        tensor6d: Nn,
        tensor_util: It,
        test_util: vp,
        tidy: Ue,
        tile: Er,
        time: Ge,
        topk: hc,
        train: Np,
        transpose: oc,
        truncatedNormal: Rr,
        unsortedSegmentSum: il,
        unstack: Ir,
        util: Y,
        valueAndGrad: qr,
        valueAndGrads: $r,
        variable: gt,
        variableGrads: Kr,
        version_core: mp,
        webgl: gp,
        where: Cu,
        whereAsync: Eu,
        zeros: An,
        zerosLike: Fn
    });

    var Dimensions = /** @class */ (function () {
        function Dimensions(width, height) {
            if (!isValidNumber(width) || !isValidNumber(height)) {
                throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({ width: width, height: height }));
            }
            this._width = width;
            this._height = height;
        }
        Object.defineProperty(Dimensions.prototype, "width", {
            get: function () { return this._width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dimensions.prototype, "height", {
            get: function () { return this._height; },
            enumerable: true,
            configurable: true
        });
        Dimensions.prototype.reverse = function () {
            return new Dimensions(1 / this.width, 1 / this.height);
        };
        return Dimensions;
    }());

    var Point = /** @class */ (function () {
        function Point(x, y) {
            this._x = x;
            this._y = y;
        }
        Object.defineProperty(Point.prototype, "x", {
            get: function () { return this._x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "y", {
            get: function () { return this._y; },
            enumerable: true,
            configurable: true
        });
        Point.prototype.add = function (pt) {
            return new Point(this.x + pt.x, this.y + pt.y);
        };
        Point.prototype.sub = function (pt) {
            return new Point(this.x - pt.x, this.y - pt.y);
        };
        Point.prototype.mul = function (pt) {
            return new Point(this.x * pt.x, this.y * pt.y);
        };
        Point.prototype.div = function (pt) {
            return new Point(this.x / pt.x, this.y / pt.y);
        };
        Point.prototype.abs = function () {
            return new Point(Math.abs(this.x), Math.abs(this.y));
        };
        Point.prototype.magnitude = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        Point.prototype.floor = function () {
            return new Point(Math.floor(this.x), Math.floor(this.y));
        };
        return Point;
    }());

    function isTensor(tensor, dim) {
        return tensor instanceof ct && tensor.shape.length === dim;
    }
    function isTensor1D(tensor) {
        return isTensor(tensor, 1);
    }
    function isTensor2D(tensor) {
        return isTensor(tensor, 2);
    }
    function isTensor3D(tensor) {
        return isTensor(tensor, 3);
    }
    function isTensor4D(tensor) {
        return isTensor(tensor, 4);
    }
    function isFloat(num) {
        return num % 1 !== 0;
    }
    function isEven(num) {
        return num % 2 === 0;
    }
    function round(num, prec) {
        if (prec === void 0) { prec = 2; }
        var f = Math.pow(10, prec);
        return Math.floor(num * f) / f;
    }
    function isDimensions(obj) {
        return obj && obj.width && obj.height;
    }
    function computeReshapedDimensions(_a, inputSize) {
        var width = _a.width, height = _a.height;
        var scale = inputSize / Math.max(height, width);
        return new Dimensions(Math.round(width * scale), Math.round(height * scale));
    }
    function getCenterPoint(pts) {
        return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point(0, 0))
            .div(new Point(pts.length, pts.length));
    }
    function range(num, start, step) {
        return Array(num).fill(0).map(function (_, i) { return start + (i * step); });
    }
    function isValidNumber(num) {
        return !!num && num !== Infinity && num !== -Infinity && !isNaN(num) || num === 0;
    }
    function isValidProbablitiy(num) {
        return isValidNumber(num) && 0 <= num && num <= 1.0;
    }

    var Box = /** @class */ (function () {
        function Box(_box, allowNegativeDimensions) {
            if (allowNegativeDimensions === void 0) { allowNegativeDimensions = true; }
            var box = (_box || {});
            var isBbox = [box.left, box.top, box.right, box.bottom].every(isValidNumber);
            var isRect = [box.x, box.y, box.width, box.height].every(isValidNumber);
            if (!isRect && !isBbox) {
                throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(box));
            }
            var _a = isRect
                ? [box.x, box.y, box.width, box.height]
                : [box.left, box.top, box.right - box.left, box.bottom - box.top], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            Box.assertIsValidBox({ x: x, y: y, width: width, height: height }, 'Box.constructor', allowNegativeDimensions);
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
        }
        Box.isRect = function (rect) {
            return !!rect && [rect.x, rect.y, rect.width, rect.height].every(isValidNumber);
        };
        Box.assertIsValidBox = function (box, callee, allowNegativeDimensions) {
            if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
            if (!Box.isRect(box)) {
                throw new Error(callee + " - invalid box: " + JSON.stringify(box) + ", expected object with properties x, y, width, height");
            }
            if (!allowNegativeDimensions && (box.width < 0 || box.height < 0)) {
                throw new Error(callee + " - width (" + box.width + ") and height (" + box.height + ") must be positive numbers");
            }
        };
        Object.defineProperty(Box.prototype, "x", {
            get: function () { return this._x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "y", {
            get: function () { return this._y; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "width", {
            get: function () { return this._width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "height", {
            get: function () { return this._height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "left", {
            get: function () { return this.x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "top", {
            get: function () { return this.y; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "right", {
            get: function () { return this.x + this.width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "bottom", {
            get: function () { return this.y + this.height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "area", {
            get: function () { return this.width * this.height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "topLeft", {
            get: function () { return new Point(this.left, this.top); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "topRight", {
            get: function () { return new Point(this.right, this.top); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "bottomLeft", {
            get: function () { return new Point(this.left, this.bottom); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Box.prototype, "bottomRight", {
            get: function () { return new Point(this.right, this.bottom); },
            enumerable: true,
            configurable: true
        });
        Box.prototype.round = function () {
            var _a = [this.x, this.y, this.width, this.height]
                .map(function (val) { return Math.round(val); }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            return new Box({ x: x, y: y, width: width, height: height });
        };
        Box.prototype.floor = function () {
            var _a = [this.x, this.y, this.width, this.height]
                .map(function (val) { return Math.floor(val); }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            return new Box({ x: x, y: y, width: width, height: height });
        };
        Box.prototype.toSquare = function () {
            var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var diff = Math.abs(width - height);
            if (width < height) {
                x -= (diff / 2);
                width += diff;
            }
            if (height < width) {
                y -= (diff / 2);
                height += diff;
            }
            return new Box({ x: x, y: y, width: width, height: height });
        };
        Box.prototype.rescale = function (s) {
            var scaleX = isDimensions(s) ? s.width : s;
            var scaleY = isDimensions(s) ? s.height : s;
            return new Box({
                x: this.x * scaleX,
                y: this.y * scaleY,
                width: this.width * scaleX,
                height: this.height * scaleY
            });
        };
        Box.prototype.pad = function (padX, padY) {
            var _a = [
                this.x - (padX / 2),
                this.y - (padY / 2),
                this.width + padX,
                this.height + padY
            ], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            return new Box({ x: x, y: y, width: width, height: height });
        };
        Box.prototype.clipAtImageBorders = function (imgWidth, imgHeight) {
            var _a = this, x = _a.x, y = _a.y, right = _a.right, bottom = _a.bottom;
            var clippedX = Math.max(x, 0);
            var clippedY = Math.max(y, 0);
            var newWidth = right - clippedX;
            var newHeight = bottom - clippedY;
            var clippedWidth = Math.min(newWidth, imgWidth - clippedX);
            var clippedHeight = Math.min(newHeight, imgHeight - clippedY);
            return (new Box({ x: clippedX, y: clippedY, width: clippedWidth, height: clippedHeight })).floor();
        };
        Box.prototype.shift = function (sx, sy) {
            var _a = this, width = _a.width, height = _a.height;
            var x = this.x + sx;
            var y = this.y + sy;
            return new Box({ x: x, y: y, width: width, height: height });
        };
        Box.prototype.padAtBorders = function (imageHeight, imageWidth) {
            var w = this.width + 1;
            var h = this.height + 1;
            var dx = 1;
            var dy = 1;
            var edx = w;
            var edy = h;
            var x = this.left;
            var y = this.top;
            var ex = this.right;
            var ey = this.bottom;
            if (ex > imageWidth) {
                edx = -ex + imageWidth + w;
                ex = imageWidth;
            }
            if (ey > imageHeight) {
                edy = -ey + imageHeight + h;
                ey = imageHeight;
            }
            if (x < 1) {
                edy = 2 - x;
                x = 1;
            }
            if (y < 1) {
                edy = 2 - y;
                y = 1;
            }
            return { dy: dy, edy: edy, dx: dx, edx: edx, y: y, ey: ey, x: x, ex: ex, w: w, h: h };
        };
        Box.prototype.calibrate = function (region) {
            return new Box({
                left: this.left + (region.left * this.width),
                top: this.top + (region.top * this.height),
                right: this.right + (region.right * this.width),
                bottom: this.bottom + (region.bottom * this.height)
            }).toSquare().round();
        };
        return Box;
    }());

    var BoundingBox = /** @class */ (function (_super) {
        __extends(BoundingBox, _super);
        function BoundingBox(left, top, right, bottom, allowNegativeDimensions) {
            if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
            return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, allowNegativeDimensions) || this;
        }
        return BoundingBox;
    }(Box));

    var LabeledBox = /** @class */ (function (_super) {
        __extends(LabeledBox, _super);
        function LabeledBox(box, label) {
            var _this = _super.call(this, box) || this;
            _this._label = label;
            return _this;
        }
        LabeledBox.assertIsValidLabeledBox = function (box, callee) {
            Box.assertIsValidBox(box, callee);
            if (!isValidNumber(box.label)) {
                throw new Error(callee + " - expected property label (" + box.label + ") to be a number");
            }
        };
        Object.defineProperty(LabeledBox.prototype, "label", {
            get: function () { return this._label; },
            enumerable: true,
            configurable: true
        });
        return LabeledBox;
    }(Box));

    var ObjectDetection = /** @class */ (function () {
        function ObjectDetection(score, classScore, className, relativeBox, imageDims) {
            this._imageDims = new Dimensions(imageDims.width, imageDims.height);
            this._score = score;
            this._classScore = classScore;
            this._className = className;
            this._box = new Box(relativeBox).rescale(this._imageDims);
        }
        Object.defineProperty(ObjectDetection.prototype, "score", {
            get: function () { return this._score; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "classScore", {
            get: function () { return this._classScore; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "className", {
            get: function () { return this._className; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "box", {
            get: function () { return this._box; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "imageDims", {
            get: function () { return this._imageDims; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "imageWidth", {
            get: function () { return this.imageDims.width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "imageHeight", {
            get: function () { return this.imageDims.height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectDetection.prototype, "relativeBox", {
            get: function () { return new Box(this._box).rescale(this.imageDims.reverse()); },
            enumerable: true,
            configurable: true
        });
        ObjectDetection.prototype.forSize = function (width, height) {
            return new ObjectDetection(this.score, this.classScore, this.className, this.relativeBox, { width: width, height: height });
        };
        return ObjectDetection;
    }());

    var PredictedBox = /** @class */ (function (_super) {
        __extends(PredictedBox, _super);
        function PredictedBox(box, label, score, classScore) {
            var _this = _super.call(this, box, label) || this;
            _this._score = score;
            _this._classScore = classScore;
            return _this;
        }
        PredictedBox.assertIsValidPredictedBox = function (box, callee) {
            LabeledBox.assertIsValidLabeledBox(box, callee);
            if (!isValidProbablitiy(box.score)
                || !isValidProbablitiy(box.classScore)) {
                throw new Error(callee + " - expected properties score (" + box.score + ") and (" + box.classScore + ") to be a number between [0, 1]");
            }
        };
        Object.defineProperty(PredictedBox.prototype, "score", {
            get: function () { return this._score; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PredictedBox.prototype, "classScore", {
            get: function () { return this._classScore; },
            enumerable: true,
            configurable: true
        });
        return PredictedBox;
    }(LabeledBox));

    var Rect = /** @class */ (function (_super) {
        __extends(Rect, _super);
        function Rect(x, y, width, height, allowNegativeDimensions) {
            if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
            return _super.call(this, { x: x, y: y, width: width, height: height }, allowNegativeDimensions) || this;
        }
        return Rect;
    }(Box));

    function createBrowserEnv() {
        var fetch = window['fetch'] || function () {
            throw new Error('fetch - missing fetch implementation for browser environment');
        };
        var readFile = function () {
            throw new Error('readFile - filesystem not available for browser environment');
        };
        return {
            Canvas: HTMLCanvasElement,
            CanvasRenderingContext2D: CanvasRenderingContext2D,
            Image: HTMLImageElement,
            ImageData: ImageData,
            Video: HTMLVideoElement,
            createCanvasElement: function () { return document.createElement('canvas'); },
            createImageElement: function () { return document.createElement('img'); },
            fetch: fetch,
            readFile: readFile
        };
    }

    function createFileSystem(fs) {
        var requireFsError = '';
        if (!fs) {
            try {
                fs = require('fs');
            }
            catch (err) {
                requireFsError = err.toString();
            }
        }
        var readFile = fs
            ? function (filePath) {
                return new Promise(function (res, rej) {
                    fs.readFile(filePath, function (err, buffer) {
                        return err ? rej(err) : res(buffer);
                    });
                });
            }
            : function () {
                throw new Error("readFile - failed to require fs in nodejs environment with error: " + requireFsError);
            };
        return {
            readFile: readFile
        };
    }

    function createNodejsEnv() {
        var Canvas = global['Canvas'] || global['HTMLCanvasElement'];
        var Image = global['Image'] || global['HTMLImageElement'];
        var createCanvasElement = function () {
            if (Canvas) {
                return new Canvas();
            }
            throw new Error('createCanvasElement - missing Canvas implementation for nodejs environment');
        };
        var createImageElement = function () {
            if (Image) {
                return new Image();
            }
            throw new Error('createImageElement - missing Image implementation for nodejs environment');
        };
        var fetch = global['fetch'] || function () {
            throw new Error('fetch - missing fetch implementation for nodejs environment');
        };
        var fileSystem = createFileSystem();
        return __assign({ Canvas: Canvas || /** @class */ (function () {
                function Canvas() {
                }
                return Canvas;
            }()), CanvasRenderingContext2D: global['CanvasRenderingContext2D'] || /** @class */ (function () {
                function class_1() {
                }
                return class_1;
            }()), Image: Image || /** @class */ (function () {
                function Image() {
                }
                return Image;
            }()), ImageData: global['ImageData'] || /** @class */ (function () {
                function class_2() {
                }
                return class_2;
            }()), Video: global['HTMLVideoElement'] || /** @class */ (function () {
                function class_3() {
                }
                return class_3;
            }()), createCanvasElement: createCanvasElement,
            createImageElement: createImageElement,
            fetch: fetch }, fileSystem);
    }

    function isBrowser() {
        return typeof window === 'object'
            && typeof document !== 'undefined'
            && typeof HTMLImageElement !== 'undefined'
            && typeof HTMLCanvasElement !== 'undefined'
            && typeof HTMLVideoElement !== 'undefined'
            && typeof ImageData !== 'undefined'
            && typeof CanvasRenderingContext2D !== 'undefined';
    }

    function isNodejs() {
        return typeof global === 'object'
            && typeof require === 'function'
            && typeof module !== 'undefined'
            // issues with gatsby.js: module.exports is undefined
            // && !!module.exports
            && typeof process !== 'undefined' && !!process.version;
    }

    var environment;
    function getEnv() {
        if (!environment) {
            throw new Error('getEnv - environment is not defined, check isNodejs() and isBrowser()');
        }
        return environment;
    }
    function setEnv(env) {
        environment = env;
    }
    function initialize() {
        // check for isBrowser() first to prevent electron renderer process
        // to be initialized with wrong environment due to isNodejs() returning true
        if (isBrowser()) {
            setEnv(createBrowserEnv());
        }
        if (isNodejs()) {
            setEnv(createNodejsEnv());
        }
    }
    function monkeyPatch(env) {
        if (!environment) {
            initialize();
        }
        if (!environment) {
            throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()');
        }
        var _a = env.Canvas, Canvas = _a === void 0 ? environment.Canvas : _a, _b = env.Image, Image = _b === void 0 ? environment.Image : _b;
        environment.Canvas = Canvas;
        environment.Image = Image;
        environment.createCanvasElement = env.createCanvasElement || (function () { return new Canvas(); });
        environment.createImageElement = env.createImageElement || (function () { return new Image(); });
        environment.ImageData = env.ImageData || environment.ImageData;
        environment.Video = env.Video || environment.Video;
        environment.fetch = env.fetch || environment.fetch;
        environment.readFile = env.readFile || environment.readFile;
    }
    var env = {
        getEnv: getEnv,
        setEnv: setEnv,
        initialize: initialize,
        createBrowserEnv: createBrowserEnv,
        createFileSystem: createFileSystem,
        createNodejsEnv: createNodejsEnv,
        monkeyPatch: monkeyPatch,
        isBrowser: isBrowser,
        isNodejs: isNodejs
    };
    initialize();

    function resolveInput(arg) {
        if (!env.isNodejs() && typeof arg === 'string') {
            return document.getElementById(arg);
        }
        return arg;
    }

    function getContext2dOrThrow(canvasArg) {
        var _a = env.getEnv(), Canvas = _a.Canvas, CanvasRenderingContext2D = _a.CanvasRenderingContext2D;
        if (canvasArg instanceof CanvasRenderingContext2D) {
            return canvasArg;
        }
        var canvas = resolveInput(canvasArg);
        if (!(canvas instanceof Canvas)) {
            throw new Error('resolveContext2d - expected canvas to be of instance of Canvas');
        }
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('resolveContext2d - canvas 2d context is null');
        }
        return ctx;
    }

    var AnchorPosition;
    (function (AnchorPosition) {
        AnchorPosition["TOP_LEFT"] = "TOP_LEFT";
        AnchorPosition["TOP_RIGHT"] = "TOP_RIGHT";
        AnchorPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
        AnchorPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
    })(AnchorPosition || (AnchorPosition = {}));
    var DrawTextFieldOptions = /** @class */ (function () {
        function DrawTextFieldOptions(options) {
            if (options === void 0) { options = {}; }
            var anchorPosition = options.anchorPosition, backgroundColor = options.backgroundColor, fontColor = options.fontColor, fontSize = options.fontSize, fontStyle = options.fontStyle, padding = options.padding;
            this.anchorPosition = anchorPosition || AnchorPosition.TOP_LEFT;
            this.backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.5)';
            this.fontColor = fontColor || 'rgba(255, 255, 255, 1)';
            this.fontSize = fontSize || 14;
            this.fontStyle = fontStyle || 'Georgia';
            this.padding = padding || 4;
        }
        return DrawTextFieldOptions;
    }());
    var DrawTextField = /** @class */ (function () {
        function DrawTextField(text, anchor, options) {
            if (options === void 0) { options = {}; }
            this.text = typeof text === 'string'
                ? [text]
                : (text instanceof DrawTextField ? text.text : text);
            this.anchor = anchor;
            this.options = new DrawTextFieldOptions(options);
        }
        DrawTextField.prototype.measureWidth = function (ctx) {
            var padding = this.options.padding;
            return this.text.map(function (l) { return ctx.measureText(l).width; }).reduce(function (w0, w1) { return w0 < w1 ? w1 : w0; }, 0) + (2 * padding);
        };
        DrawTextField.prototype.measureHeight = function () {
            var _a = this.options, fontSize = _a.fontSize, padding = _a.padding;
            return this.text.length * fontSize + (2 * padding);
        };
        DrawTextField.prototype.getUpperLeft = function (ctx, canvasDims) {
            var anchorPosition = this.options.anchorPosition;
            var isShiftLeft = anchorPosition === AnchorPosition.BOTTOM_RIGHT || anchorPosition === AnchorPosition.TOP_RIGHT;
            var isShiftTop = anchorPosition === AnchorPosition.BOTTOM_LEFT || anchorPosition === AnchorPosition.BOTTOM_RIGHT;
            var textFieldWidth = this.measureWidth(ctx);
            var textFieldHeight = this.measureHeight();
            var x = (isShiftLeft ? this.anchor.x - textFieldWidth : this.anchor.x);
            var y = isShiftTop ? this.anchor.y - textFieldHeight : this.anchor.y;
            // adjust anchor if text box exceeds canvas borders
            if (canvasDims) {
                var width = canvasDims.width, height = canvasDims.height;
                var newX = Math.max(Math.min(x, width - textFieldWidth), 0);
                var newY = Math.max(Math.min(y, height - textFieldHeight), 0);
                return { x: newX, y: newY };
            }
            return { x: x, y: y };
        };
        DrawTextField.prototype.draw = function (canvasArg) {
            var canvas = resolveInput(canvasArg);
            var ctx = getContext2dOrThrow(canvas);
            var _a = this.options, backgroundColor = _a.backgroundColor, fontColor = _a.fontColor, fontSize = _a.fontSize, fontStyle = _a.fontStyle, padding = _a.padding;
            ctx.font = fontSize + "px " + fontStyle;
            var maxTextWidth = this.measureWidth(ctx);
            var textHeight = this.measureHeight();
            ctx.fillStyle = backgroundColor;
            var upperLeft = this.getUpperLeft(ctx, canvas);
            ctx.fillRect(upperLeft.x, upperLeft.y, maxTextWidth, textHeight);
            ctx.fillStyle = fontColor;
            this.text.forEach(function (textLine, i) {
                var x = padding + upperLeft.x;
                var y = padding + upperLeft.y + ((i + 1) * fontSize);
                ctx.fillText(textLine, x, y);
            });
        };
        return DrawTextField;
    }());

    var DrawBoxOptions = /** @class */ (function () {
        function DrawBoxOptions(options) {
            if (options === void 0) { options = {}; }
            var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
            this.boxColor = boxColor || 'rgba(0, 0, 255, 1)';
            this.lineWidth = lineWidth || 2;
            this.label = label;
            var defaultDrawLabelOptions = {
                anchorPosition: AnchorPosition.BOTTOM_LEFT,
                backgroundColor: this.boxColor
            };
            this.drawLabelOptions = new DrawTextFieldOptions(Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
        }
        return DrawBoxOptions;
    }());
    var DrawBox = /** @class */ (function () {
        function DrawBox(box, options) {
            if (options === void 0) { options = {}; }
            this.box = new Box(box);
            this.options = new DrawBoxOptions(options);
        }
        DrawBox.prototype.draw = function (canvasArg) {
            var ctx = getContext2dOrThrow(canvasArg);
            var _a = this.options, boxColor = _a.boxColor, lineWidth = _a.lineWidth;
            var _b = this.box, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
            ctx.strokeStyle = boxColor;
            ctx.lineWidth = lineWidth;
            ctx.strokeRect(x, y, width, height);
            var label = this.options.label;
            if (label) {
                new DrawTextField([label], { x: x - (lineWidth / 2), y: y }, this.options.drawLabelOptions).draw(canvasArg);
            }
        };
        return DrawBox;
    }());



    var drawBase = /*#__PURE__*/Object.freeze({
        DrawBoxOptions: DrawBoxOptions,
        DrawBox: DrawBox,
        get AnchorPosition () { return AnchorPosition; },
        DrawTextFieldOptions: DrawTextFieldOptions,
        DrawTextField: DrawTextField
    });

    function convLayer(x, params, padding, withRelu) {
        if (padding === void 0) { padding = 'same'; }
        if (withRelu === void 0) { withRelu = false; }
        return Ue(function () {
            var out = Ru(fl(x, params.filters, [1, 1], padding), params.bias);
            return withRelu ? nc(out) : out;
        });
    }

    function disposeUnusedWeightTensors(weightMap, paramMappings) {
        Object.keys(weightMap).forEach(function (path) {
            if (!paramMappings.some(function (pm) { return pm.originalPath === path; })) {
                weightMap[path].dispose();
            }
        });
    }

    function extractConvParamsFactory(extractWeights, paramMappings) {
        return function (channelsIn, channelsOut, filterSize, mappedPrefix) {
            var filters = In(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
            var bias = Cn(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
            return { filters: filters, bias: bias };
        };
    }

    function extractFCParamsFactory(extractWeights, paramMappings) {
        return function (channelsIn, channelsOut, mappedPrefix) {
            var fc_weights = En(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
            var fc_bias = Cn(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
            return {
                weights: fc_weights,
                bias: fc_bias
            };
        };
    }

    var SeparableConvParams = /** @class */ (function () {
        function SeparableConvParams(depthwise_filter, pointwise_filter, bias) {
            this.depthwise_filter = depthwise_filter;
            this.pointwise_filter = pointwise_filter;
            this.bias = bias;
        }
        return SeparableConvParams;
    }());

    function extractSeparableConvParamsFactory(extractWeights, paramMappings) {
        return function (channelsIn, channelsOut, mappedPrefix) {
            var depthwise_filter = In(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
            var pointwise_filter = In(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
            var bias = Cn(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/depthwise_filter" }, { paramPath: mappedPrefix + "/pointwise_filter" }, { paramPath: mappedPrefix + "/bias" });
            return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
        };
    }
    function loadSeparableConvParamsFactory(extractWeightEntry) {
        return function (prefix) {
            var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
            var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
        };
    }

    function extractWeightEntryFactory(weightMap, paramMappings) {
        return function (originalPath, paramRank, mappedPath) {
            var tensor = weightMap[originalPath];
            if (!isTensor(tensor, paramRank)) {
                throw new Error("expected weightMap[" + originalPath + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
            }
            paramMappings.push({ originalPath: originalPath, paramPath: mappedPath || originalPath });
            return tensor;
        };
    }

    function extractWeightsFactory(weights) {
        var remainingWeights = weights;
        function extractWeights(numWeights) {
            var ret = remainingWeights.slice(0, numWeights);
            remainingWeights = remainingWeights.slice(numWeights);
            return ret;
        }
        function getRemainingWeights() {
            return remainingWeights;
        }
        return {
            extractWeights: extractWeights,
            getRemainingWeights: getRemainingWeights
        };
    }

    function getModelUris(uri, defaultModelName) {
        var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
        if (!uri) {
            return {
                modelBaseUri: '',
                manifestUri: defaultManifestFilename
            };
        }
        if (uri === '/') {
            return {
                modelBaseUri: '/',
                manifestUri: "/" + defaultManifestFilename
            };
        }
        var protocol = uri.startsWith('http://') ? 'http://' : uri.startsWith('https://') ? 'https://' : '';
        uri = uri.replace(protocol, '');
        var parts = uri.split('/').filter(function (s) { return s; });
        var manifestFile = uri.endsWith('.json')
            ? parts[parts.length - 1]
            : defaultManifestFilename;
        var modelBaseUri = protocol + (uri.endsWith('.json') ? parts.slice(0, parts.length - 1) : parts).join('/');
        modelBaseUri = uri.startsWith('/') ? "/" + modelBaseUri : modelBaseUri;
        return {
            modelBaseUri: modelBaseUri,
            manifestUri: modelBaseUri === '/' ? "/" + manifestFile : modelBaseUri + "/" + manifestFile
        };
    }

    function isMediaLoaded(media) {
        var _a = env.getEnv(), Image = _a.Image, Video = _a.Video;
        return (media instanceof Image && media.complete)
            || (media instanceof Video && media.readyState >= 3);
    }

    function awaitMediaLoaded(media) {
        return new Promise(function (resolve, reject) {
            if (media instanceof env.getEnv().Canvas || isMediaLoaded(media)) {
                return resolve();
            }
            function onLoad(e) {
                if (!e.currentTarget)
                    return;
                e.currentTarget.removeEventListener('load', onLoad);
                e.currentTarget.removeEventListener('error', onError);
                resolve(e);
            }
            function onError(e) {
                if (!e.currentTarget)
                    return;
                e.currentTarget.removeEventListener('load', onLoad);
                e.currentTarget.removeEventListener('error', onError);
                reject(e);
            }
            media.addEventListener('load', onLoad);
            media.addEventListener('error', onError);
        });
    }

    function bufferToImage(buf) {
        return new Promise(function (resolve, reject) {
            if (!(buf instanceof Blob)) {
                return reject('bufferToImage - expected buf to be of type: Blob');
            }
            var reader = new FileReader();
            reader.onload = function () {
                if (typeof reader.result !== 'string') {
                    return reject('bufferToImage - expected reader.result to be a string, in onload');
                }
                var img = env.getEnv().createImageElement();
                img.onload = function () { return resolve(img); };
                img.onerror = reject;
                img.src = reader.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(buf);
        });
    }

    function getMediaDimensions(input) {
        var _a = env.getEnv(), Image = _a.Image, Video = _a.Video;
        if (input instanceof Image) {
            return new Dimensions(input.naturalWidth, input.naturalHeight);
        }
        if (input instanceof Video) {
            return new Dimensions(input.videoWidth, input.videoHeight);
        }
        return new Dimensions(input.width, input.height);
    }

    function createCanvas(_a) {
        var width = _a.width, height = _a.height;
        var createCanvasElement = env.getEnv().createCanvasElement;
        var canvas = createCanvasElement();
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    function createCanvasFromMedia(media, dims) {
        var ImageData = env.getEnv().ImageData;
        if (!(media instanceof ImageData) && !isMediaLoaded(media)) {
            throw new Error('createCanvasFromMedia - media has not finished loading yet');
        }
        var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
        var canvas = createCanvas({ width: width, height: height });
        if (media instanceof ImageData) {
            getContext2dOrThrow(canvas).putImageData(media, 0, 0);
        }
        else {
            getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
        }
        return canvas;
    }

    function fetchOrThrow(url, init) {
        return __awaiter(this, void 0, void 0, function () {
            var fetch, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fetch = env.getEnv().fetch;
                        return [4 /*yield*/, fetch(url, init)];
                    case 1:
                        res = _a.sent();
                        if (!(res.status < 400)) {
                            throw new Error("failed to fetch: (" + res.status + ") " + res.statusText + ", from url: " + res.url);
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    }

    function fetchImage(uri) {
        return __awaiter(this, void 0, void 0, function () {
            var res, blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchOrThrow(uri)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, (res).blob()];
                    case 2:
                        blob = _a.sent();
                        if (!blob.type.startsWith('image/')) {
                            throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + blob.type + ", for url: " + res.url);
                        }
                        return [2 /*return*/, bufferToImage(blob)];
                }
            });
        });
    }

    function fetchJson(uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchOrThrow(uri)];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    }

    function fetchNetWeights(uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Float32Array.bind;
                        return [4 /*yield*/, fetchOrThrow(uri)];
                    case 1: return [4 /*yield*/, (_b.sent()).arrayBuffer()];
                    case 2: return [2 /*return*/, new (_a.apply(Float32Array, [void 0, _b.sent()]))()];
                }
            });
        });
    }

    function imageTensorToCanvas(imgTensor, canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var targetCanvas, _a, height, width, numChannels, imgTensor3D;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        targetCanvas = canvas || env.getEnv().createCanvasElement();
                        _a = imgTensor.shape.slice(isTensor4D(imgTensor) ? 1 : 0), height = _a[0], width = _a[1], numChannels = _a[2];
                        imgTensor3D = Ue(function () { return imgTensor.as3D(height, width, numChannels).toInt(); });
                        return [4 /*yield*/, ap.toPixels(imgTensor3D, targetCanvas)];
                    case 1:
                        _b.sent();
                        imgTensor3D.dispose();
                        return [2 /*return*/, targetCanvas];
                }
            });
        });
    }

    function imageToSquare(input, inputSize, centerImage) {
        if (centerImage === void 0) { centerImage = false; }
        var _a = env.getEnv(), Image = _a.Image, Canvas = _a.Canvas;
        if (!(input instanceof Image || input instanceof Canvas)) {
            throw new Error('imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement');
        }
        var dims = getMediaDimensions(input);
        var scale = inputSize / Math.max(dims.height, dims.width);
        var width = scale * dims.width;
        var height = scale * dims.height;
        var targetCanvas = createCanvas({ width: inputSize, height: inputSize });
        var inputCanvas = input instanceof Canvas ? input : createCanvasFromMedia(input);
        var offset = Math.abs(width - height) / 2;
        var dx = centerImage && width < height ? offset : 0;
        var dy = centerImage && height < width ? offset : 0;
        getContext2dOrThrow(targetCanvas).drawImage(inputCanvas, dx, dy, width, height);
        return targetCanvas;
    }

    function isMediaElement(input) {
        var _a = env.getEnv(), Image = _a.Image, Canvas = _a.Canvas, Video = _a.Video;
        return input instanceof Image
            || input instanceof Canvas
            || input instanceof Video;
    }

    function loadWeightMap(uri, defaultModelName) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, manifestUri, modelBaseUri, manifest;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = getModelUris(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                        return [4 /*yield*/, fetchJson(manifestUri)];
                    case 1:
                        manifest = _b.sent();
                        return [2 /*return*/, ep.loadWeights(manifest, modelBaseUri)];
                }
            });
        });
    }

    function matchDimensions(input, reference, useMediaDimensions) {
        if (useMediaDimensions === void 0) { useMediaDimensions = false; }
        var _a = useMediaDimensions
            ? getMediaDimensions(reference)
            : reference, width = _a.width, height = _a.height;
        input.width = width;
        input.height = height;
        return { width: width, height: height };
    }

    /**
     * Pads the smaller dimension of an image tensor with zeros, such that width === height.
     *
     * @param imgTensor The image tensor.
     * @param isCenterImage (optional, default: false) If true, add an equal amount of padding on
     * both sides of the minor dimension oof the image.
     * @returns The padded tensor with width === height.
     */
    function padToSquare(imgTensor, isCenterImage) {
        if (isCenterImage === void 0) { isCenterImage = false; }
        return Ue(function () {
            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
            if (height === width) {
                return imgTensor;
            }
            var dimDiff = Math.abs(height - width);
            var paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1));
            var paddingAxis = height > width ? 2 : 1;
            var createPaddingTensor = function (paddingAmount) {
                var paddingTensorShape = imgTensor.shape.slice();
                paddingTensorShape[paddingAxis] = paddingAmount;
                return Tn(paddingTensorShape, 0);
            };
            var paddingTensorAppend = createPaddingTensor(paddingAmount);
            var remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis];
            var paddingTensorPrepend = isCenterImage && remainingPaddingAmount
                ? createPaddingTensor(remainingPaddingAmount)
                : null;
            var tensorsToStack = [
                paddingTensorPrepend,
                imgTensor,
                paddingTensorAppend
            ]
                .filter(function (t) { return !!t; })
                .map(function (t) { return t.toFloat(); });
            return Mn(tensorsToStack, paddingAxis);
        });
    }

    var NetInput = /** @class */ (function () {
        function NetInput(inputs, treatAsBatchInput) {
            var _this = this;
            if (treatAsBatchInput === void 0) { treatAsBatchInput = false; }
            this._imageTensors = [];
            this._canvases = [];
            this._treatAsBatchInput = false;
            this._inputDimensions = [];
            if (!Array.isArray(inputs)) {
                throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + inputs);
            }
            this._treatAsBatchInput = treatAsBatchInput;
            this._batchSize = inputs.length;
            inputs.forEach(function (input, idx) {
                if (isTensor3D(input)) {
                    _this._imageTensors[idx] = input;
                    _this._inputDimensions[idx] = input.shape;
                    return;
                }
                if (isTensor4D(input)) {
                    var batchSize = input.shape[0];
                    if (batchSize !== 1) {
                        throw new Error("NetInput - tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                    }
                    _this._imageTensors[idx] = input;
                    _this._inputDimensions[idx] = input.shape.slice(1);
                    return;
                }
                var canvas = input instanceof env.getEnv().Canvas ? input : createCanvasFromMedia(input);
                _this._canvases[idx] = canvas;
                _this._inputDimensions[idx] = [canvas.height, canvas.width, 3];
            });
        }
        Object.defineProperty(NetInput.prototype, "imageTensors", {
            get: function () {
                return this._imageTensors;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "canvases", {
            get: function () {
                return this._canvases;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "isBatchInput", {
            get: function () {
                return this.batchSize > 1 || this._treatAsBatchInput;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "batchSize", {
            get: function () {
                return this._batchSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "inputDimensions", {
            get: function () {
                return this._inputDimensions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "inputSize", {
            get: function () {
                return this._inputSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "reshapedInputDimensions", {
            get: function () {
                var _this = this;
                return range(this.batchSize, 0, 1).map(function (_, batchIdx) { return _this.getReshapedInputDimensions(batchIdx); });
            },
            enumerable: true,
            configurable: true
        });
        NetInput.prototype.getInput = function (batchIdx) {
            return this.canvases[batchIdx] || this.imageTensors[batchIdx];
        };
        NetInput.prototype.getInputDimensions = function (batchIdx) {
            return this._inputDimensions[batchIdx];
        };
        NetInput.prototype.getInputHeight = function (batchIdx) {
            return this._inputDimensions[batchIdx][0];
        };
        NetInput.prototype.getInputWidth = function (batchIdx) {
            return this._inputDimensions[batchIdx][1];
        };
        NetInput.prototype.getReshapedInputDimensions = function (batchIdx) {
            if (typeof this.inputSize !== 'number') {
                throw new Error('getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet');
            }
            var width = this.getInputWidth(batchIdx);
            var height = this.getInputHeight(batchIdx);
            return computeReshapedDimensions({ width: width, height: height }, this.inputSize);
        };
        /**
         * Create a batch tensor from all input canvases and tensors
         * with size [batchSize, inputSize, inputSize, 3].
         *
         * @param inputSize Height and width of the tensor.
         * @param isCenterImage (optional, default: false) If true, add an equal amount of padding on
         * both sides of the minor dimension oof the image.
         * @returns The batch tensor.
         */
        NetInput.prototype.toBatchTensor = function (inputSize, isCenterInputs) {
            var _this = this;
            if (isCenterInputs === void 0) { isCenterInputs = true; }
            this._inputSize = inputSize;
            return Ue(function () {
                var inputTensors = range(_this.batchSize, 0, 1).map(function (batchIdx) {
                    var input = _this.getInput(batchIdx);
                    if (input instanceof ct) {
                        var imgTensor = isTensor4D(input) ? input : input.expandDims();
                        imgTensor = padToSquare(imgTensor, isCenterInputs);
                        if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
                            imgTensor = Yc.resizeBilinear(imgTensor, [inputSize, inputSize]);
                        }
                        return imgTensor.as3D(inputSize, inputSize, 3);
                    }
                    if (input instanceof env.getEnv().Canvas) {
                        return ap.fromPixels(imageToSquare(input, inputSize, isCenterInputs));
                    }
                    throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
                });
                var batchTensor = Cr(inputTensors.map(function (t) { return t.toFloat(); })).as4D(_this.batchSize, inputSize, inputSize, 3);
                return batchTensor;
            });
        };
        return NetInput;
    }());

    /**
     * Validates the input to make sure, they are valid net inputs and awaits all media elements
     * to be finished loading.
     *
     * @param input The input, which can be a media element or an array of different media elements.
     * @returns A NetInput instance, which can be passed into one of the neural networks.
     */
    function toNetInput(inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var inputArgArray, getIdxHint, inputArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (inputs instanceof NetInput) {
                            return [2 /*return*/, inputs];
                        }
                        inputArgArray = Array.isArray(inputs)
                            ? inputs
                            : [inputs];
                        if (!inputArgArray.length) {
                            throw new Error('toNetInput - empty array passed as input');
                        }
                        getIdxHint = function (idx) { return Array.isArray(inputs) ? " at input index " + idx + ":" : ''; };
                        inputArray = inputArgArray.map(resolveInput);
                        inputArray.forEach(function (input, i) {
                            if (!isMediaElement(input) && !isTensor3D(input) && !isTensor4D(input)) {
                                if (typeof inputArgArray[i] === 'string') {
                                    throw new Error("toNetInput -" + getIdxHint(i) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i]);
                                }
                                throw new Error("toNetInput -" + getIdxHint(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
                            }
                            if (isTensor4D(input)) {
                                // if tf.Tensor4D is passed in the input array, the batch size has to be 1
                                var batchSize = input.shape[0];
                                if (batchSize !== 1) {
                                    throw new Error("toNetInput -" + getIdxHint(i) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                                }
                            }
                        });
                        // wait for all media elements being loaded
                        return [4 /*yield*/, Promise.all(inputArray.map(function (input) { return isMediaElement(input) && awaitMediaLoaded(input); }))];
                    case 1:
                        // wait for all media elements being loaded
                        _a.sent();
                        return [2 /*return*/, new NetInput(inputArray, Array.isArray(inputs))];
                }
            });
        });
    }

    var NeuralNetwork = /** @class */ (function () {
        function NeuralNetwork(_name) {
            this._name = _name;
            this._params = undefined;
            this._paramMappings = [];
        }
        Object.defineProperty(NeuralNetwork.prototype, "params", {
            get: function () { return this._params; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
            get: function () { return this._paramMappings; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NeuralNetwork.prototype, "isLoaded", {
            get: function () { return !!this.params; },
            enumerable: true,
            configurable: true
        });
        NeuralNetwork.prototype.getParamFromPath = function (paramPath) {
            var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
            return obj[objProp];
        };
        NeuralNetwork.prototype.reassignParamFromPath = function (paramPath, tensor) {
            var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
            obj[objProp].dispose();
            obj[objProp] = tensor;
        };
        NeuralNetwork.prototype.getParamList = function () {
            var _this = this;
            return this._paramMappings.map(function (_a) {
                var paramPath = _a.paramPath;
                return ({
                    path: paramPath,
                    tensor: _this.getParamFromPath(paramPath)
                });
            });
        };
        NeuralNetwork.prototype.getTrainableParams = function () {
            return this.getParamList().filter(function (param) { return param.tensor instanceof ht; });
        };
        NeuralNetwork.prototype.getFrozenParams = function () {
            return this.getParamList().filter(function (param) { return !(param.tensor instanceof ht); });
        };
        NeuralNetwork.prototype.variable = function () {
            var _this = this;
            this.getFrozenParams().forEach(function (_a) {
                var path = _a.path, tensor = _a.tensor;
                _this.reassignParamFromPath(path, tensor.variable());
            });
        };
        NeuralNetwork.prototype.freeze = function () {
            var _this = this;
            this.getTrainableParams().forEach(function (_a) {
                var path = _a.path, variable = _a.tensor;
                var tensor = xn(variable.dataSync());
                variable.dispose();
                _this.reassignParamFromPath(path, tensor);
            });
        };
        NeuralNetwork.prototype.dispose = function (throwOnRedispose) {
            if (throwOnRedispose === void 0) { throwOnRedispose = true; }
            this.getParamList().forEach(function (param) {
                if (throwOnRedispose && param.tensor.isDisposed) {
                    throw new Error("param tensor has already been disposed for path " + param.path);
                }
                param.tensor.dispose();
            });
            this._params = undefined;
        };
        NeuralNetwork.prototype.serializeParams = function () {
            return new Float32Array(this.getParamList()
                .map(function (_a) {
                var tensor = _a.tensor;
                return Array.from(tensor.dataSync());
            })
                .reduce(function (flat, arr) { return flat.concat(arr); }));
        };
        NeuralNetwork.prototype.load = function (weightsOrUrl) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (weightsOrUrl instanceof Float32Array) {
                                this.extractWeights(weightsOrUrl);
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.loadFromUri(weightsOrUrl)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NeuralNetwork.prototype.loadFromUri = function (uri) {
            return __awaiter(this, void 0, void 0, function () {
                var weightMap;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (uri && typeof uri !== 'string') {
                                throw new Error(this._name + ".loadFromUri - expected model uri");
                            }
                            return [4 /*yield*/, loadWeightMap(uri, this.getDefaultModelName())];
                        case 1:
                            weightMap = _a.sent();
                            this.loadFromWeightMap(weightMap);
                            return [2 /*return*/];
                    }
                });
            });
        };
        NeuralNetwork.prototype.loadFromDisk = function (filePath) {
            return __awaiter(this, void 0, void 0, function () {
                var readFile, _a, manifestUri, modelBaseUri, fetchWeightsFromDisk, loadWeights, manifest, _b, _c, weightMap;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (filePath && typeof filePath !== 'string') {
                                throw new Error(this._name + ".loadFromDisk - expected model file path");
                            }
                            readFile = env.getEnv().readFile;
                            _a = getModelUris(filePath, this.getDefaultModelName()), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                            fetchWeightsFromDisk = function (filePaths) { return Promise.all(filePaths.map(function (filePath) { return readFile(filePath).then(function (buf) { return buf.buffer; }); })); };
                            loadWeights = ep.weightsLoaderFactory(fetchWeightsFromDisk);
                            _c = (_b = JSON).parse;
                            return [4 /*yield*/, readFile(manifestUri)];
                        case 1:
                            manifest = _c.apply(_b, [(_d.sent()).toString()]);
                            return [4 /*yield*/, loadWeights(manifest, modelBaseUri)];
                        case 2:
                            weightMap = _d.sent();
                            this.loadFromWeightMap(weightMap);
                            return [2 /*return*/];
                    }
                });
            });
        };
        NeuralNetwork.prototype.loadFromWeightMap = function (weightMap) {
            var _a = this.extractParamsFromWeigthMap(weightMap), paramMappings = _a.paramMappings, params = _a.params;
            this._paramMappings = paramMappings;
            this._params = params;
        };
        NeuralNetwork.prototype.extractWeights = function (weights) {
            var _a = this.extractParams(weights), paramMappings = _a.paramMappings, params = _a.params;
            this._paramMappings = paramMappings;
            this._params = params;
        };
        NeuralNetwork.prototype.traversePropertyPath = function (paramPath) {
            if (!this.params) {
                throw new Error("traversePropertyPath - model has no loaded params");
            }
            var result = paramPath.split('/').reduce(function (res, objProp) {
                if (!res.nextObj.hasOwnProperty(objProp)) {
                    throw new Error("traversePropertyPath - object does not have property " + objProp + ", for path " + paramPath);
                }
                return { obj: res.nextObj, objProp: objProp, nextObj: res.nextObj[objProp] };
            }, { nextObj: this.params });
            var obj = result.obj, objProp = result.objProp;
            if (!obj || !objProp || !(obj[objProp] instanceof ct)) {
                throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
            }
            return { obj: obj, objProp: objProp };
        };
        return NeuralNetwork;
    }());

    function iou(box1, box2, isIOU) {
        if (isIOU === void 0) { isIOU = true; }
        var width = Math.max(0.0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
        var height = Math.max(0.0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
        var interSection = width * height;
        return isIOU
            ? interSection / (box1.area + box2.area - interSection)
            : interSection / Math.min(box1.area, box2.area);
    }

    function minBbox(pts) {
        var xs = pts.map(function (pt) { return pt.x; });
        var ys = pts.map(function (pt) { return pt.y; });
        var minX = xs.reduce(function (min, x) { return x < min ? x : min; }, Infinity);
        var minY = ys.reduce(function (min, y) { return y < min ? y : min; }, Infinity);
        var maxX = xs.reduce(function (max, x) { return max < x ? x : max; }, 0);
        var maxY = ys.reduce(function (max, y) { return max < y ? y : max; }, 0);
        return new BoundingBox(minX, minY, maxX, maxY);
    }

    function nonMaxSuppression(boxes, scores, iouThreshold, isIOU) {
        if (isIOU === void 0) { isIOU = true; }
        var indicesSortedByScore = scores
            .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
            .sort(function (c1, c2) { return c1.score - c2.score; })
            .map(function (c) { return c.boxIndex; });
        var pick = [];
        var _loop_1 = function () {
            var curr = indicesSortedByScore.pop();
            pick.push(curr);
            var indices = indicesSortedByScore;
            var outputs = [];
            for (var i = 0; i < indices.length; i++) {
                var idx = indices[i];
                var currBox = boxes[curr];
                var idxBox = boxes[idx];
                outputs.push(iou(currBox, idxBox, isIOU));
            }
            indicesSortedByScore = indicesSortedByScore.filter(function (_, j) { return outputs[j] <= iouThreshold; });
        };
        while (indicesSortedByScore.length > 0) {
            _loop_1();
        }
        return pick;
    }

    function normalize(x, meanRgb) {
        return Ue(function () {
            var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
            var avg_r = Tn(__spreadArrays(x.shape.slice(0, 3), [1]), r);
            var avg_g = Tn(__spreadArrays(x.shape.slice(0, 3), [1]), g);
            var avg_b = Tn(__spreadArrays(x.shape.slice(0, 3), [1]), b);
            var avg_rgb = Mn([avg_r, avg_g, avg_b], 3);
            return Gu(x, avg_rgb);
        });
    }

    function shuffleArray(inputArray) {
        var array = inputArray.slice();
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    function sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }
    function inverseSigmoid(x) {
        return Math.log(x / (1 - x));
    }

    var isNumber = function (arg) { return typeof arg === 'number'; };
    function validateConfig(config) {
        if (!config) {
            throw new Error("invalid config: " + config);
        }
        if (typeof config.withSeparableConvs !== 'boolean') {
            throw new Error("config.withSeparableConvs has to be a boolean, have: " + config.withSeparableConvs);
        }
        if (!isNumber(config.iouThreshold) || config.iouThreshold < 0 || config.iouThreshold > 1.0) {
            throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + config.iouThreshold);
        }
        if (!Array.isArray(config.classes)
            || !config.classes.length
            || !config.classes.every(function (c) { return typeof c === 'string'; })) {
            throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(config.classes));
        }
        if (!Array.isArray(config.anchors)
            || !config.anchors.length
            || !config.anchors.map(function (a) { return a || {}; }).every(function (a) { return isNumber(a.x) && isNumber(a.y); })) {
            throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(config.anchors));
        }
        if (config.meanRgb && (!Array.isArray(config.meanRgb)
            || config.meanRgb.length !== 3
            || !config.meanRgb.every(isNumber))) {
            throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(config.meanRgb));
        }
    }

    function leaky(x) {
        return Ue(function () {
            var min = Pu(x, wn(0.10000000149011612));
            return Ru(nc(Gu(x, min)), min);
            //return tf.maximum(x, min)
        });
    }

    function convWithBatchNorm(x, params) {
        return Ue(function () {
            var out = cr(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            out = fl(out, params.conv.filters, [1, 1], 'valid');
            out = Gu(out, params.bn.sub);
            out = Pu(out, params.bn.truediv);
            out = Ru(out, params.conv.bias);
            return leaky(out);
        });
    }

    function depthwiseSeparableConv(x, params) {
        return Ue(function () {
            var out = cr(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            out = yl(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid');
            out = Ru(out, params.bias);
            return leaky(out);
        });
    }

    function extractorsFactory(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        function extractBatchNormParams(size, mappedPrefix) {
            var sub = Cn(extractWeights(size));
            var truediv = Cn(extractWeights(size));
            paramMappings.push({ paramPath: mappedPrefix + "/sub" }, { paramPath: mappedPrefix + "/truediv" });
            return { sub: sub, truediv: truediv };
        }
        function extractConvWithBatchNormParams(channelsIn, channelsOut, mappedPrefix) {
            var conv = extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv");
            var bn = extractBatchNormParams(channelsOut, mappedPrefix + "/bn");
            return { conv: conv, bn: bn };
        }
        var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
        return {
            extractConvParams: extractConvParams,
            extractConvWithBatchNormParams: extractConvWithBatchNormParams,
            extractSeparableConvParams: extractSeparableConvParams
        };
    }
    function extractParams(weights, config, boxEncodingSize, filterSizes) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams, extractSeparableConvParams = _b.extractSeparableConvParams;
        var params;
        if (config.withSeparableConvs) {
            var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
            var conv0 = config.isFirstLayerConv2d
                ? extractConvParams(s0, s1, 3, 'conv0')
                : extractSeparableConvParams(s0, s1, 'conv0');
            var conv1 = extractSeparableConvParams(s1, s2, 'conv1');
            var conv2 = extractSeparableConvParams(s2, s3, 'conv2');
            var conv3 = extractSeparableConvParams(s3, s4, 'conv3');
            var conv4 = extractSeparableConvParams(s4, s5, 'conv4');
            var conv5 = extractSeparableConvParams(s5, s6, 'conv5');
            var conv6 = s7 ? extractSeparableConvParams(s6, s7, 'conv6') : undefined;
            var conv7 = s8 ? extractSeparableConvParams(s7, s8, 'conv7') : undefined;
            var conv8 = extractConvParams(s8 || s7 || s6, 5 * boxEncodingSize, 1, 'conv8');
            params = { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3, conv4: conv4, conv5: conv5, conv6: conv6, conv7: conv7, conv8: conv8 };
        }
        else {
            var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
            var conv0 = extractConvWithBatchNormParams(s0, s1, 'conv0');
            var conv1 = extractConvWithBatchNormParams(s1, s2, 'conv1');
            var conv2 = extractConvWithBatchNormParams(s2, s3, 'conv2');
            var conv3 = extractConvWithBatchNormParams(s3, s4, 'conv3');
            var conv4 = extractConvWithBatchNormParams(s4, s5, 'conv4');
            var conv5 = extractConvWithBatchNormParams(s5, s6, 'conv5');
            var conv6 = extractConvWithBatchNormParams(s6, s7, 'conv6');
            var conv7 = extractConvWithBatchNormParams(s7, s8, 'conv7');
            var conv8 = extractConvParams(s8, 5 * boxEncodingSize, 1, 'conv8');
            params = { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3, conv4: conv4, conv5: conv5, conv6: conv6, conv7: conv7, conv8: conv8 };
        }
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return { params: params, paramMappings: paramMappings };
    }

    function extractorsFactory$1(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractBatchNormParams(prefix) {
            var sub = extractWeightEntry(prefix + "/sub", 1);
            var truediv = extractWeightEntry(prefix + "/truediv", 1);
            return { sub: sub, truediv: truediv };
        }
        function extractConvParams(prefix) {
            var filters = extractWeightEntry(prefix + "/filters", 4);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { filters: filters, bias: bias };
        }
        function extractConvWithBatchNormParams(prefix) {
            var conv = extractConvParams(prefix + "/conv");
            var bn = extractBatchNormParams(prefix + "/bn");
            return { conv: conv, bn: bn };
        }
        var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
        return {
            extractConvParams: extractConvParams,
            extractConvWithBatchNormParams: extractConvWithBatchNormParams,
            extractSeparableConvParams: extractSeparableConvParams
        };
    }
    function extractParamsFromWeigthMap(weightMap, config) {
        var paramMappings = [];
        var _a = extractorsFactory$1(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractConvWithBatchNormParams = _a.extractConvWithBatchNormParams, extractSeparableConvParams = _a.extractSeparableConvParams;
        var params;
        if (config.withSeparableConvs) {
            var numFilters = (config.filterSizes && config.filterSizes.length || 9);
            params = {
                conv0: config.isFirstLayerConv2d ? extractConvParams('conv0') : extractSeparableConvParams('conv0'),
                conv1: extractSeparableConvParams('conv1'),
                conv2: extractSeparableConvParams('conv2'),
                conv3: extractSeparableConvParams('conv3'),
                conv4: extractSeparableConvParams('conv4'),
                conv5: extractSeparableConvParams('conv5'),
                conv6: numFilters > 7 ? extractSeparableConvParams('conv6') : undefined,
                conv7: numFilters > 8 ? extractSeparableConvParams('conv7') : undefined,
                conv8: extractConvParams('conv8')
            };
        }
        else {
            params = {
                conv0: extractConvWithBatchNormParams('conv0'),
                conv1: extractConvWithBatchNormParams('conv1'),
                conv2: extractConvWithBatchNormParams('conv2'),
                conv3: extractConvWithBatchNormParams('conv3'),
                conv4: extractConvWithBatchNormParams('conv4'),
                conv5: extractConvWithBatchNormParams('conv5'),
                conv6: extractConvWithBatchNormParams('conv6'),
                conv7: extractConvWithBatchNormParams('conv7'),
                conv8: extractConvParams('conv8')
            };
        }
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    var TinyYolov2SizeType;
    (function (TinyYolov2SizeType) {
        TinyYolov2SizeType[TinyYolov2SizeType["XS"] = 224] = "XS";
        TinyYolov2SizeType[TinyYolov2SizeType["SM"] = 320] = "SM";
        TinyYolov2SizeType[TinyYolov2SizeType["MD"] = 416] = "MD";
        TinyYolov2SizeType[TinyYolov2SizeType["LG"] = 608] = "LG";
    })(TinyYolov2SizeType || (TinyYolov2SizeType = {}));
    var TinyYolov2Options = /** @class */ (function () {
        function TinyYolov2Options(_a) {
            var _b = _a === void 0 ? {} : _a, inputSize = _b.inputSize, scoreThreshold = _b.scoreThreshold;
            this._name = 'TinyYolov2Options';
            this._inputSize = inputSize || 416;
            this._scoreThreshold = scoreThreshold || 0.5;
            if (typeof this._inputSize !== 'number' || this._inputSize % 32 !== 0) {
                throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
            }
            if (typeof this._scoreThreshold !== 'number' || this._scoreThreshold <= 0 || this._scoreThreshold >= 1) {
                throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1");
            }
        }
        Object.defineProperty(TinyYolov2Options.prototype, "inputSize", {
            get: function () { return this._inputSize; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2Options.prototype, "scoreThreshold", {
            get: function () { return this._scoreThreshold; },
            enumerable: true,
            configurable: true
        });
        return TinyYolov2Options;
    }());

    var TinyYolov2 = /** @class */ (function (_super) {
        __extends(TinyYolov2, _super);
        function TinyYolov2(config) {
            var _this = _super.call(this, 'TinyYolov2') || this;
            validateConfig(config);
            _this._config = config;
            return _this;
        }
        Object.defineProperty(TinyYolov2.prototype, "config", {
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2.prototype, "withClassScores", {
            get: function () {
                return this.config.withClassScores || this.config.classes.length > 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2.prototype, "boxEncodingSize", {
            get: function () {
                return 5 + (this.withClassScores ? this.config.classes.length : 0);
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2.prototype.runTinyYolov2 = function (x, params) {
            var out = convWithBatchNorm(x, params.conv0);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv1);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv2);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv3);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv4);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv5);
            out = Dl(out, [2, 2], [1, 1], 'same');
            out = convWithBatchNorm(out, params.conv6);
            out = convWithBatchNorm(out, params.conv7);
            return convLayer(out, params.conv8, 'valid', false);
        };
        TinyYolov2.prototype.runMobilenet = function (x, params) {
            var out = this.config.isFirstLayerConv2d
                ? leaky(convLayer(x, params.conv0, 'valid', false))
                : depthwiseSeparableConv(x, params.conv0);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv(out, params.conv1);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv(out, params.conv2);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv(out, params.conv3);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv(out, params.conv4);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv(out, params.conv5);
            out = Dl(out, [2, 2], [1, 1], 'same');
            out = params.conv6 ? depthwiseSeparableConv(out, params.conv6) : out;
            out = params.conv7 ? depthwiseSeparableConv(out, params.conv7) : out;
            return convLayer(out, params.conv8, 'valid', false);
        };
        TinyYolov2.prototype.forwardInput = function (input, inputSize) {
            var _this = this;
            var params = this.params;
            if (!params) {
                throw new Error('TinyYolov2 - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
                batchTensor = _this.config.meanRgb
                    ? normalize(batchTensor, _this.config.meanRgb)
                    : batchTensor;
                batchTensor = batchTensor.div(wn(256));
                return _this.config.withSeparableConvs
                    ? _this.runMobilenet(batchTensor, params)
                    : _this.runTinyYolov2(batchTensor, params);
            });
        };
        TinyYolov2.prototype.forward = function (input, inputSize) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), inputSize])];
                        case 2: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        TinyYolov2.prototype.detect = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, inputSize, scoreThreshold, netInput, out, out0, inputDimensions, results, boxes, scores, classScores, classNames, indices, detections;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = new TinyYolov2Options(forwardParams), inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _b.sent();
                            return [4 /*yield*/, this.forwardInput(netInput, inputSize)];
                        case 2:
                            out = _b.sent();
                            out0 = Ue(function () { return Ir(out)[0].expandDims(); });
                            inputDimensions = {
                                width: netInput.getInputWidth(0),
                                height: netInput.getInputHeight(0)
                            };
                            return [4 /*yield*/, this.extractBoxes(out0, netInput.getReshapedInputDimensions(0), scoreThreshold)];
                        case 3:
                            results = _b.sent();
                            out.dispose();
                            out0.dispose();
                            boxes = results.map(function (res) { return res.box; });
                            scores = results.map(function (res) { return res.score; });
                            classScores = results.map(function (res) { return res.classScore; });
                            classNames = results.map(function (res) { return _this.config.classes[res.label]; });
                            indices = nonMaxSuppression(boxes.map(function (box) { return box.rescale(inputSize); }), scores, this.config.iouThreshold, true);
                            detections = indices.map(function (idx) {
                                return new ObjectDetection(scores[idx], classScores[idx], classNames[idx], boxes[idx], inputDimensions);
                            });
                            return [2 /*return*/, detections];
                    }
                });
            });
        };
        TinyYolov2.prototype.getDefaultModelName = function () {
            return '';
        };
        TinyYolov2.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap(weightMap, this.config);
        };
        TinyYolov2.prototype.extractParams = function (weights) {
            var filterSizes = this.config.filterSizes || TinyYolov2.DEFAULT_FILTER_SIZES;
            var numFilters = filterSizes ? filterSizes.length : undefined;
            if (numFilters !== 7 && numFilters !== 8 && numFilters !== 9) {
                throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + numFilters + " filterSizes in config");
            }
            return extractParams(weights, this.config, this.boxEncodingSize, filterSizes);
        };
        TinyYolov2.prototype.extractBoxes = function (outputTensor, inputBlobDimensions, scoreThreshold) {
            return __awaiter(this, void 0, void 0, function () {
                var width, height, inputSize, correctionFactorX, correctionFactorY, numCells, numBoxes, _a, boxesTensor, scoresTensor, classScoresTensor, results, scoresData, boxesData, row, col, anchor, score, ctX, ctY, width_1, height_1, x, y, pos, _b, classScore, label, _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            width = inputBlobDimensions.width, height = inputBlobDimensions.height;
                            inputSize = Math.max(width, height);
                            correctionFactorX = inputSize / width;
                            correctionFactorY = inputSize / height;
                            numCells = outputTensor.shape[1];
                            numBoxes = this.config.anchors.length;
                            _a = Ue(function () {
                                var reshaped = outputTensor.reshape([numCells, numCells, numBoxes, _this.boxEncodingSize]);
                                var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, numBoxes, 4]);
                                var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, numBoxes, 1]);
                                var classScores = _this.withClassScores
                                    ? Yr(reshaped.slice([0, 0, 0, 5], [numCells, numCells, numBoxes, _this.config.classes.length]), 3)
                                    : wn(0);
                                return [boxes, scores, classScores];
                            }), boxesTensor = _a[0], scoresTensor = _a[1], classScoresTensor = _a[2];
                            results = [];
                            return [4 /*yield*/, scoresTensor.array()];
                        case 1:
                            scoresData = _d.sent();
                            return [4 /*yield*/, boxesTensor.array()];
                        case 2:
                            boxesData = _d.sent();
                            row = 0;
                            _d.label = 3;
                        case 3:
                            if (!(row < numCells)) return [3 /*break*/, 12];
                            col = 0;
                            _d.label = 4;
                        case 4:
                            if (!(col < numCells)) return [3 /*break*/, 11];
                            anchor = 0;
                            _d.label = 5;
                        case 5:
                            if (!(anchor < numBoxes)) return [3 /*break*/, 10];
                            score = sigmoid(scoresData[row][col][anchor][0]);
                            if (!(!scoreThreshold || score > scoreThreshold)) return [3 /*break*/, 9];
                            ctX = ((col + sigmoid(boxesData[row][col][anchor][0])) / numCells) * correctionFactorX;
                            ctY = ((row + sigmoid(boxesData[row][col][anchor][1])) / numCells) * correctionFactorY;
                            width_1 = ((Math.exp(boxesData[row][col][anchor][2]) * this.config.anchors[anchor].x) / numCells) * correctionFactorX;
                            height_1 = ((Math.exp(boxesData[row][col][anchor][3]) * this.config.anchors[anchor].y) / numCells) * correctionFactorY;
                            x = (ctX - (width_1 / 2));
                            y = (ctY - (height_1 / 2));
                            pos = { row: row, col: col, anchor: anchor };
                            if (!this.withClassScores) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.extractPredictedClass(classScoresTensor, pos)];
                        case 6:
                            _c = _d.sent();
                            return [3 /*break*/, 8];
                        case 7:
                            _c = { classScore: 1, label: 0 };
                            _d.label = 8;
                        case 8:
                            _b = _c, classScore = _b.classScore, label = _b.label;
                            results.push(__assign({ box: new BoundingBox(x, y, x + width_1, y + height_1), score: score, classScore: score * classScore, label: label }, pos));
                            _d.label = 9;
                        case 9:
                            anchor++;
                            return [3 /*break*/, 5];
                        case 10:
                            col++;
                            return [3 /*break*/, 4];
                        case 11:
                            row++;
                            return [3 /*break*/, 3];
                        case 12:
                            boxesTensor.dispose();
                            scoresTensor.dispose();
                            classScoresTensor.dispose();
                            return [2 /*return*/, results];
                    }
                });
            });
        };
        TinyYolov2.prototype.extractPredictedClass = function (classesTensor, pos) {
            return __awaiter(this, void 0, void 0, function () {
                var row, col, anchor, classesData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            row = pos.row, col = pos.col, anchor = pos.anchor;
                            return [4 /*yield*/, classesTensor.array()];
                        case 1:
                            classesData = _a.sent();
                            return [2 /*return*/, Array(this.config.classes.length).fill(0)
                                    .map(function (_, i) { return classesData[row][col][anchor][i]; })
                                    .map(function (classScore, label) { return ({
                                    classScore: classScore,
                                    label: label
                                }); })
                                    .reduce(function (max, curr) { return max.classScore > curr.classScore ? max : curr; })];
                    }
                });
            });
        };
        TinyYolov2.DEFAULT_FILTER_SIZES = [
            3, 16, 32, 64, 128, 256, 512, 1024, 1024
        ];
        return TinyYolov2;
    }(NeuralNetwork));



    var tfjsImageRecognitionBase = /*#__PURE__*/Object.freeze({
        convLayer: convLayer,
        disposeUnusedWeightTensors: disposeUnusedWeightTensors,
        extractConvParamsFactory: extractConvParamsFactory,
        extractFCParamsFactory: extractFCParamsFactory,
        extractSeparableConvParamsFactory: extractSeparableConvParamsFactory,
        loadSeparableConvParamsFactory: loadSeparableConvParamsFactory,
        extractWeightEntryFactory: extractWeightEntryFactory,
        extractWeightsFactory: extractWeightsFactory,
        getModelUris: getModelUris,
        SeparableConvParams: SeparableConvParams,
        TinyYolov2: TinyYolov2,
        get TinyYolov2SizeType () { return TinyYolov2SizeType; },
        TinyYolov2Options: TinyYolov2Options,
        validateConfig: validateConfig
    });

    function drawContour(ctx, points, isClosed) {
        if (isClosed === void 0) { isClosed = false; }
        ctx.beginPath();
        points.slice(1).forEach(function (_a, prevIdx) {
            var x = _a.x, y = _a.y;
            var from = points[prevIdx];
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(x, y);
        });
        if (isClosed) {
            var from = points[points.length - 1];
            var to = points[0];
            if (!from || !to) {
                return;
            }
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
        }
        ctx.stroke();
    }

    var FaceDetection = /** @class */ (function (_super) {
        __extends(FaceDetection, _super);
        function FaceDetection(score, relativeBox, imageDims) {
            return _super.call(this, score, score, '', relativeBox, imageDims) || this;
        }
        FaceDetection.prototype.forSize = function (width, height) {
            var _a = _super.prototype.forSize.call(this, width, height), score = _a.score, relativeBox = _a.relativeBox, imageDims = _a.imageDims;
            return new FaceDetection(score, relativeBox, imageDims);
        };
        return FaceDetection;
    }(ObjectDetection));

    function isWithFaceDetection(obj) {
        return obj['detection'] instanceof FaceDetection;
    }
    function extendWithFaceDetection(sourceObj, detection) {
        var extension = { detection: detection };
        return Object.assign({}, sourceObj, extension);
    }

    function drawDetections(canvasArg, detections) {
        var detectionsArray = Array.isArray(detections) ? detections : [detections];
        detectionsArray.forEach(function (det) {
            var score = det instanceof FaceDetection
                ? det.score
                : (isWithFaceDetection(det) ? det.detection.score : undefined);
            var box = det instanceof FaceDetection
                ? det.box
                : (isWithFaceDetection(det) ? det.detection.box : new Box(det));
            var label = score ? "" + round(score) : undefined;
            new DrawBox(box, { label: label }).draw(canvasArg);
        });
    }

    function depthwiseSeparableConv$1(x, params, stride) {
        return Ue(function () {
            var out = yl(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
            out = Ru(out, params.bias);
            return out;
        });
    }

    function denseBlock3(x, denseBlockParams, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        return Ue(function () {
            var out1 = nc(isFirstLayer
                ? Ru(fl(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
                : depthwiseSeparableConv$1(x, denseBlockParams.conv0, [2, 2]));
            var out2 = depthwiseSeparableConv$1(out1, denseBlockParams.conv1, [1, 1]);
            var in3 = nc(Ru(out1, out2));
            var out3 = depthwiseSeparableConv$1(in3, denseBlockParams.conv2, [1, 1]);
            return nc(Ru(out1, Ru(out2, out3)));
        });
    }
    function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        if (isScaleDown === void 0) { isScaleDown = true; }
        return Ue(function () {
            var out1 = nc(isFirstLayer
                ? Ru(fl(x, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], 'same'), denseBlockParams.conv0.bias)
                : depthwiseSeparableConv$1(x, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
            var out2 = depthwiseSeparableConv$1(out1, denseBlockParams.conv1, [1, 1]);
            var in3 = nc(Ru(out1, out2));
            var out3 = depthwiseSeparableConv$1(in3, denseBlockParams.conv2, [1, 1]);
            var in4 = nc(Ru(out1, Ru(out2, out3)));
            var out4 = depthwiseSeparableConv$1(in4, denseBlockParams.conv3, [1, 1]);
            return nc(Ru(out1, Ru(out2, Ru(out3, out4))));
        });
    }

    function extractorsFactory$2(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
        function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
            if (isFirstLayer === void 0) { isFirstLayer = false; }
            var conv0 = isFirstLayer
                ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0")
                : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
            var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
            var conv2 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
            return { conv0: conv0, conv1: conv1, conv2: conv2 };
        }
        function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
            if (isFirstLayer === void 0) { isFirstLayer = false; }
            var _a = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer), conv0 = _a.conv0, conv1 = _a.conv1, conv2 = _a.conv2;
            var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
            return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
        }
        return {
            extractDenseBlock3Params: extractDenseBlock3Params,
            extractDenseBlock4Params: extractDenseBlock4Params
        };
    }

    function extractParams$1(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var extractDenseBlock4Params = extractorsFactory$2(extractWeights, paramMappings).extractDenseBlock4Params;
        var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
        var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
        var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
        var dense3 = extractDenseBlock4Params(128, 256, 'dense3');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { dense0: dense0, dense1: dense1, dense2: dense2, dense3: dense3 }
        };
    }

    function loadConvParamsFactory(extractWeightEntry) {
        return function (prefix) {
            var filters = extractWeightEntry(prefix + "/filters", 4);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { filters: filters, bias: bias };
        };
    }

    function loadParamsFactory(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        var extractConvParams = loadConvParamsFactory(extractWeightEntry);
        var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
        function extractDenseBlock3Params(prefix, isFirstLayer) {
            if (isFirstLayer === void 0) { isFirstLayer = false; }
            var conv0 = isFirstLayer
                ? extractConvParams(prefix + "/conv0")
                : extractSeparableConvParams(prefix + "/conv0");
            var conv1 = extractSeparableConvParams(prefix + "/conv1");
            var conv2 = extractSeparableConvParams(prefix + "/conv2");
            return { conv0: conv0, conv1: conv1, conv2: conv2 };
        }
        function extractDenseBlock4Params(prefix, isFirstLayer) {
            if (isFirstLayer === void 0) { isFirstLayer = false; }
            var conv0 = isFirstLayer
                ? extractConvParams(prefix + "/conv0")
                : extractSeparableConvParams(prefix + "/conv0");
            var conv1 = extractSeparableConvParams(prefix + "/conv1");
            var conv2 = extractSeparableConvParams(prefix + "/conv2");
            var conv3 = extractSeparableConvParams(prefix + "/conv3");
            return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
        }
        return {
            extractDenseBlock3Params: extractDenseBlock3Params,
            extractDenseBlock4Params: extractDenseBlock4Params
        };
    }

    function extractParamsFromWeigthMap$1(weightMap) {
        var paramMappings = [];
        var extractDenseBlock4Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock4Params;
        var params = {
            dense0: extractDenseBlock4Params('dense0', true),
            dense1: extractDenseBlock4Params('dense1'),
            dense2: extractDenseBlock4Params('dense2'),
            dense3: extractDenseBlock4Params('dense3')
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    var FaceFeatureExtractor = /** @class */ (function (_super) {
        __extends(FaceFeatureExtractor, _super);
        function FaceFeatureExtractor() {
            return _super.call(this, 'FaceFeatureExtractor') || this;
        }
        FaceFeatureExtractor.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('FaceFeatureExtractor - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(112, true);
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(wn(255));
                var out = denseBlock4(normalized, params.dense0, true);
                out = denseBlock4(out, params.dense1);
                out = denseBlock4(out, params.dense2);
                out = denseBlock4(out, params.dense3);
                out = _l(out, [7, 7], [2, 2], 'valid');
                return out;
            });
        };
        FaceFeatureExtractor.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        FaceFeatureExtractor.prototype.getDefaultModelName = function () {
            return 'face_feature_extractor_model';
        };
        FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap$1(weightMap);
        };
        FaceFeatureExtractor.prototype.extractParams = function (weights) {
            return extractParams$1(weights);
        };
        return FaceFeatureExtractor;
    }(NeuralNetwork));

    function fullyConnectedLayer(x, params) {
        return Ue(function () {
            return Ru(wl(x, params.weights), params.bias);
        });
    }

    function extractParams$2(weights, channelsIn, channelsOut) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
        var fc = extractFCParams(channelsIn, channelsOut, 'fc');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { fc: fc }
        };
    }

    function extractParamsFromWeigthMap$2(weightMap) {
        var paramMappings = [];
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractFcParams(prefix) {
            var weights = extractWeightEntry(prefix + "/weights", 2);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { weights: weights, bias: bias };
        }
        var params = {
            fc: extractFcParams('fc')
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    function seperateWeightMaps(weightMap) {
        var featureExtractorMap = {};
        var classifierMap = {};
        Object.keys(weightMap).forEach(function (key) {
            var map = key.startsWith('fc') ? classifierMap : featureExtractorMap;
            map[key] = weightMap[key];
        });
        return { featureExtractorMap: featureExtractorMap, classifierMap: classifierMap };
    }

    var FaceProcessor = /** @class */ (function (_super) {
        __extends(FaceProcessor, _super);
        function FaceProcessor(_name, faceFeatureExtractor) {
            var _this = _super.call(this, _name) || this;
            _this._faceFeatureExtractor = faceFeatureExtractor;
            return _this;
        }
        Object.defineProperty(FaceProcessor.prototype, "faceFeatureExtractor", {
            get: function () {
                return this._faceFeatureExtractor;
            },
            enumerable: true,
            configurable: true
        });
        FaceProcessor.prototype.runNet = function (input) {
            var _this = this;
            var params = this.params;
            if (!params) {
                throw new Error(this._name + " - load model before inference");
            }
            return Ue(function () {
                var bottleneckFeatures = input instanceof NetInput
                    ? _this.faceFeatureExtractor.forwardInput(input)
                    : input;
                return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
            });
        };
        FaceProcessor.prototype.dispose = function (throwOnRedispose) {
            if (throwOnRedispose === void 0) { throwOnRedispose = true; }
            this.faceFeatureExtractor.dispose(throwOnRedispose);
            _super.prototype.dispose.call(this, throwOnRedispose);
        };
        FaceProcessor.prototype.loadClassifierParams = function (weights) {
            var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
            this._params = params;
            this._paramMappings = paramMappings;
        };
        FaceProcessor.prototype.extractClassifierParams = function (weights) {
            return extractParams$2(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
        };
        FaceProcessor.prototype.extractParamsFromWeigthMap = function (weightMap) {
            var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
            this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
            return extractParamsFromWeigthMap$2(classifierMap);
        };
        FaceProcessor.prototype.extractParams = function (weights) {
            var cIn = this.getClassifierChannelsIn();
            var cOut = this.getClassifierChannelsOut();
            var classifierWeightSize = (cOut * cIn) + cOut;
            var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
            var classifierWeights = weights.slice(weights.length - classifierWeightSize);
            this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
            return this.extractClassifierParams(classifierWeights);
        };
        return FaceProcessor;
    }(NeuralNetwork));

    var FACE_EXPRESSION_LABELS = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'];
    var FaceExpressions = /** @class */ (function () {
        function FaceExpressions(probabilities) {
            var _this = this;
            if (probabilities.length !== 7) {
                throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + probabilities.length);
            }
            FACE_EXPRESSION_LABELS.forEach(function (expression, idx) {
                _this[expression] = probabilities[idx];
            });
        }
        FaceExpressions.prototype.asSortedArray = function () {
            var _this = this;
            return FACE_EXPRESSION_LABELS
                .map(function (expression) { return ({ expression: expression, probability: _this[expression] }); })
                .sort(function (e0, e1) { return e1.probability - e0.probability; });
        };
        return FaceExpressions;
    }());

    var FaceExpressionNet = /** @class */ (function (_super) {
        __extends(FaceExpressionNet, _super);
        function FaceExpressionNet(faceFeatureExtractor) {
            if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
            return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
        }
        FaceExpressionNet.prototype.forwardInput = function (input) {
            var _this = this;
            return Ue(function () { return Yr(_this.runNet(input)); });
        };
        FaceExpressionNet.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        FaceExpressionNet.prototype.predictExpressions = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var netInput, out, probabilitesByBatch, predictionsByBatch;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            return [4 /*yield*/, this.forwardInput(netInput)];
                        case 2:
                            out = _a.sent();
                            return [4 /*yield*/, Promise.all(Ir(out).map(function (t) { return __awaiter(_this, void 0, void 0, function () {
                                    var data;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, t.data()];
                                            case 1:
                                                data = _a.sent();
                                                t.dispose();
                                                return [2 /*return*/, data];
                                        }
                                    });
                                }); }))];
                        case 3:
                            probabilitesByBatch = _a.sent();
                            out.dispose();
                            predictionsByBatch = probabilitesByBatch
                                .map(function (probabilites) { return new FaceExpressions(probabilites); });
                            return [2 /*return*/, netInput.isBatchInput
                                    ? predictionsByBatch
                                    : predictionsByBatch[0]];
                    }
                });
            });
        };
        FaceExpressionNet.prototype.getDefaultModelName = function () {
            return 'face_expression_model';
        };
        FaceExpressionNet.prototype.getClassifierChannelsIn = function () {
            return 256;
        };
        FaceExpressionNet.prototype.getClassifierChannelsOut = function () {
            return 7;
        };
        return FaceExpressionNet;
    }(FaceProcessor));

    function isWithFaceExpressions(obj) {
        return obj['expressions'] instanceof FaceExpressions;
    }
    function extendWithFaceExpressions(sourceObj, expressions) {
        var extension = { expressions: expressions };
        return Object.assign({}, sourceObj, extension);
    }

    function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
        if (minConfidence === void 0) { minConfidence = 0.1; }
        var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
        faceExpressionsArray.forEach(function (e) {
            var expr = e instanceof FaceExpressions
                ? e
                : (isWithFaceExpressions(e) ? e.expressions : undefined);
            if (!expr) {
                throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
            }
            var sorted = expr.asSortedArray();
            var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
            var anchor = isWithFaceDetection(e)
                ? e.detection.box.bottomLeft
                : (textFieldAnchor || new Point(0, 0));
            var drawTextField = new DrawTextField(resultsToDisplay.map(function (expr) { return expr.expression + " (" + round(expr.probability) + ")"; }), anchor);
            drawTextField.draw(canvasArg);
        });
    }

    function minBbox$1(pts) {
        var xs = pts.map(function (pt) { return pt.x; });
        var ys = pts.map(function (pt) { return pt.y; });
        var minX = xs.reduce(function (min, x) { return x < min ? x : min; }, Infinity);
        var minY = ys.reduce(function (min, y) { return y < min ? y : min; }, Infinity);
        var maxX = xs.reduce(function (max, x) { return max < x ? x : max; }, 0);
        var maxY = ys.reduce(function (max, y) { return max < y ? y : max; }, 0);
        return new BoundingBox(minX, minY, maxX, maxY);
    }

    // face alignment constants
    var relX = 0.5;
    var relY = 0.43;
    var relScale = 0.45;
    var FaceLandmarks = /** @class */ (function () {
        function FaceLandmarks(relativeFaceLandmarkPositions, imgDims, shift) {
            if (shift === void 0) { shift = new Point(0, 0); }
            var width = imgDims.width, height = imgDims.height;
            this._imgDims = new Dimensions(width, height);
            this._shift = shift;
            this._positions = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point(width, height)).add(shift); });
        }
        Object.defineProperty(FaceLandmarks.prototype, "shift", {
            get: function () { return new Point(this._shift.x, this._shift.y); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceLandmarks.prototype, "imageWidth", {
            get: function () { return this._imgDims.width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceLandmarks.prototype, "imageHeight", {
            get: function () { return this._imgDims.height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceLandmarks.prototype, "positions", {
            get: function () { return this._positions; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceLandmarks.prototype, "relativePositions", {
            get: function () {
                var _this = this;
                return this._positions.map(function (pt) { return pt.sub(_this._shift).div(new Point(_this.imageWidth, _this.imageHeight)); });
            },
            enumerable: true,
            configurable: true
        });
        FaceLandmarks.prototype.forSize = function (width, height) {
            return new this.constructor(this.relativePositions, { width: width, height: height });
        };
        FaceLandmarks.prototype.shiftBy = function (x, y) {
            return new this.constructor(this.relativePositions, this._imgDims, new Point(x, y));
        };
        FaceLandmarks.prototype.shiftByPoint = function (pt) {
            return this.shiftBy(pt.x, pt.y);
        };
        /**
         * Aligns the face landmarks after face detection from the relative positions of the faces
         * bounding box, or it's current shift. This function should be used to align the face images
         * after face detection has been performed, before they are passed to the face recognition net.
         * This will make the computed face descriptor more accurate.
         *
         * @param detection (optional) The bounding box of the face or the face detection result. If
         * no argument was passed the position of the face landmarks are assumed to be relative to
         * it's current shift.
         * @returns The bounding box of the aligned face.
         */
        FaceLandmarks.prototype.align = function (detection, options) {
            if (options === void 0) { options = {}; }
            if (detection) {
                var box = detection instanceof FaceDetection
                    ? detection.box.floor()
                    : new Box(detection);
                return this.shiftBy(box.x, box.y).align(null, options);
            }
            var _a = Object.assign({}, { useDlibAlignment: false, minBoxPadding: 0.2 }, options), useDlibAlignment = _a.useDlibAlignment, minBoxPadding = _a.minBoxPadding;
            if (useDlibAlignment) {
                return this.alignDlib();
            }
            return this.alignMinBbox(minBoxPadding);
        };
        FaceLandmarks.prototype.alignDlib = function () {
            var centers = this.getRefPointsForAlignment();
            var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
            var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
            var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
            var size = Math.floor(eyeToMouthDist / relScale);
            var refPoint = getCenterPoint(centers);
            // TODO: pad in case rectangle is out of image bounds
            var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
            var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
            return new Rect(x, y, Math.min(size, this.imageWidth + x), Math.min(size, this.imageHeight + y));
        };
        FaceLandmarks.prototype.alignMinBbox = function (padding) {
            var box = minBbox$1(this.positions);
            return box.pad(box.width * padding, box.height * padding);
        };
        FaceLandmarks.prototype.getRefPointsForAlignment = function () {
            throw new Error('getRefPointsForAlignment not implemented by base class');
        };
        return FaceLandmarks;
    }());

    var FaceLandmarks68 = /** @class */ (function (_super) {
        __extends(FaceLandmarks68, _super);
        function FaceLandmarks68() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FaceLandmarks68.prototype.getJawOutline = function () {
            return this.positions.slice(0, 17);
        };
        FaceLandmarks68.prototype.getLeftEyeBrow = function () {
            return this.positions.slice(17, 22);
        };
        FaceLandmarks68.prototype.getRightEyeBrow = function () {
            return this.positions.slice(22, 27);
        };
        FaceLandmarks68.prototype.getNose = function () {
            return this.positions.slice(27, 36);
        };
        FaceLandmarks68.prototype.getLeftEye = function () {
            return this.positions.slice(36, 42);
        };
        FaceLandmarks68.prototype.getRightEye = function () {
            return this.positions.slice(42, 48);
        };
        FaceLandmarks68.prototype.getMouth = function () {
            return this.positions.slice(48, 68);
        };
        FaceLandmarks68.prototype.getRefPointsForAlignment = function () {
            return [
                this.getLeftEye(),
                this.getRightEye(),
                this.getMouth()
            ].map(getCenterPoint);
        };
        return FaceLandmarks68;
    }(FaceLandmarks));

    function isWithFaceLandmarks(obj) {
        return isWithFaceDetection(obj)
            && obj['landmarks'] instanceof FaceLandmarks
            && obj['unshiftedLandmarks'] instanceof FaceLandmarks
            && obj['alignedRect'] instanceof FaceDetection;
    }
    function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
        var shift = sourceObj.detection.box;
        var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
        var rect = landmarks.align();
        var imageDims = sourceObj.detection.imageDims;
        var alignedRect = new FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
        var extension = {
            landmarks: landmarks,
            unshiftedLandmarks: unshiftedLandmarks,
            alignedRect: alignedRect
        };
        return Object.assign({}, sourceObj, extension);
    }

    var DrawFaceLandmarksOptions = /** @class */ (function () {
        function DrawFaceLandmarksOptions(options) {
            if (options === void 0) { options = {}; }
            var _a = options.drawLines, drawLines = _a === void 0 ? true : _a, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
            this.drawLines = drawLines;
            this.drawPoints = drawPoints;
            this.lineWidth = lineWidth || 1;
            this.pointSize = pointSize || 2;
            this.lineColor = lineColor || 'rgba(0, 255, 255, 1)';
            this.pointColor = pointColor || 'rgba(255, 0, 255, 1)';
        }
        return DrawFaceLandmarksOptions;
    }());
    var DrawFaceLandmarks = /** @class */ (function () {
        function DrawFaceLandmarks(faceLandmarks, options) {
            if (options === void 0) { options = {}; }
            this.faceLandmarks = faceLandmarks;
            this.options = new DrawFaceLandmarksOptions(options);
        }
        DrawFaceLandmarks.prototype.draw = function (canvasArg) {
            var ctx = getContext2dOrThrow(canvasArg);
            var _a = this.options, drawLines = _a.drawLines, drawPoints = _a.drawPoints, lineWidth = _a.lineWidth, lineColor = _a.lineColor, pointSize = _a.pointSize, pointColor = _a.pointColor;
            if (drawLines && this.faceLandmarks instanceof FaceLandmarks68) {
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = lineWidth;
                drawContour(ctx, this.faceLandmarks.getJawOutline());
                drawContour(ctx, this.faceLandmarks.getLeftEyeBrow());
                drawContour(ctx, this.faceLandmarks.getRightEyeBrow());
                drawContour(ctx, this.faceLandmarks.getNose());
                drawContour(ctx, this.faceLandmarks.getLeftEye(), true);
                drawContour(ctx, this.faceLandmarks.getRightEye(), true);
                drawContour(ctx, this.faceLandmarks.getMouth(), true);
            }
            if (drawPoints) {
                ctx.strokeStyle = pointColor;
                ctx.fillStyle = pointColor;
                var drawPoint = function (pt) {
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, pointSize, 0, 2 * Math.PI);
                    ctx.fill();
                };
                this.faceLandmarks.positions.forEach(drawPoint);
            }
        };
        return DrawFaceLandmarks;
    }());
    function drawFaceLandmarks(canvasArg, faceLandmarks) {
        var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
        faceLandmarksArray.forEach(function (f) {
            var landmarks = f instanceof FaceLandmarks
                ? f
                : (isWithFaceLandmarks(f) ? f.landmarks : undefined);
            if (!landmarks) {
                throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof');
            }
            new DrawFaceLandmarks(landmarks).draw(canvasArg);
        });
    }



    var drawExtended = /*#__PURE__*/Object.freeze({
        drawContour: drawContour,
        drawDetections: drawDetections,
        drawFaceExpressions: drawFaceExpressions,
        DrawFaceLandmarksOptions: DrawFaceLandmarksOptions,
        DrawFaceLandmarks: DrawFaceLandmarks,
        drawFaceLandmarks: drawFaceLandmarks
    });

    function extractorsFactory$3(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
        function extractReductionBlockParams(channelsIn, channelsOut, mappedPrefix) {
            var separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/separable_conv0");
            var separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/separable_conv1");
            var expansion_conv = extractConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/expansion_conv");
            return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
        }
        function extractMainBlockParams(channels, mappedPrefix) {
            var separable_conv0 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv0");
            var separable_conv1 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv1");
            var separable_conv2 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv2");
            return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
        }
        return {
            extractConvParams: extractConvParams,
            extractSeparableConvParams: extractSeparableConvParams,
            extractReductionBlockParams: extractReductionBlockParams,
            extractMainBlockParams: extractMainBlockParams
        };
    }
    function extractParams$3(weights, numMainBlocks) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var _b = extractorsFactory$3(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractSeparableConvParams = _b.extractSeparableConvParams, extractReductionBlockParams = _b.extractReductionBlockParams, extractMainBlockParams = _b.extractMainBlockParams;
        var entry_flow_conv_in = extractConvParams(3, 32, 3, 'entry_flow/conv_in');
        var entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, 'entry_flow/reduction_block_0');
        var entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, 'entry_flow/reduction_block_1');
        var entry_flow = {
            conv_in: entry_flow_conv_in,
            reduction_block_0: entry_flow_reduction_block_0,
            reduction_block_1: entry_flow_reduction_block_1
        };
        var middle_flow = {};
        range(numMainBlocks, 0, 1).forEach(function (idx) {
            middle_flow["main_block_" + idx] = extractMainBlockParams(128, "middle_flow/main_block_" + idx);
        });
        var exit_flow_reduction_block = extractReductionBlockParams(128, 256, 'exit_flow/reduction_block');
        var exit_flow_separable_conv = extractSeparableConvParams(256, 512, 'exit_flow/separable_conv');
        var exit_flow = {
            reduction_block: exit_flow_reduction_block,
            separable_conv: exit_flow_separable_conv
        };
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }
        };
    }

    function loadParamsFactory$1(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        var extractConvParams = loadConvParamsFactory(extractWeightEntry);
        var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
        function extractReductionBlockParams(mappedPrefix) {
            var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
            var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
            var expansion_conv = extractConvParams(mappedPrefix + "/expansion_conv");
            return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
        }
        function extractMainBlockParams(mappedPrefix) {
            var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
            var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
            var separable_conv2 = extractSeparableConvParams(mappedPrefix + "/separable_conv2");
            return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
        }
        return {
            extractConvParams: extractConvParams,
            extractSeparableConvParams: extractSeparableConvParams,
            extractReductionBlockParams: extractReductionBlockParams,
            extractMainBlockParams: extractMainBlockParams
        };
    }
    function extractParamsFromWeigthMap$3(weightMap, numMainBlocks) {
        var paramMappings = [];
        var _a = loadParamsFactory$1(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractSeparableConvParams = _a.extractSeparableConvParams, extractReductionBlockParams = _a.extractReductionBlockParams, extractMainBlockParams = _a.extractMainBlockParams;
        var entry_flow_conv_in = extractConvParams('entry_flow/conv_in');
        var entry_flow_reduction_block_0 = extractReductionBlockParams('entry_flow/reduction_block_0');
        var entry_flow_reduction_block_1 = extractReductionBlockParams('entry_flow/reduction_block_1');
        var entry_flow = {
            conv_in: entry_flow_conv_in,
            reduction_block_0: entry_flow_reduction_block_0,
            reduction_block_1: entry_flow_reduction_block_1
        };
        var middle_flow = {};
        range(numMainBlocks, 0, 1).forEach(function (idx) {
            middle_flow["main_block_" + idx] = extractMainBlockParams("middle_flow/main_block_" + idx);
        });
        var exit_flow_reduction_block = extractReductionBlockParams('exit_flow/reduction_block');
        var exit_flow_separable_conv = extractSeparableConvParams('exit_flow/separable_conv');
        var exit_flow = {
            reduction_block: exit_flow_reduction_block,
            separable_conv: exit_flow_separable_conv
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }, paramMappings: paramMappings };
    }

    function conv(x, params, stride) {
        return Ru(fl(x, params.filters, stride, 'same'), params.bias);
    }
    function reductionBlock(x, params, isActivateInput) {
        if (isActivateInput === void 0) { isActivateInput = true; }
        var out = isActivateInput ? nc(x) : x;
        out = depthwiseSeparableConv$1(out, params.separable_conv0, [1, 1]);
        out = depthwiseSeparableConv$1(nc(out), params.separable_conv1, [1, 1]);
        out = Dl(out, [3, 3], [2, 2], 'same');
        out = Ru(out, conv(x, params.expansion_conv, [2, 2]));
        return out;
    }
    function mainBlock(x, params) {
        var out = depthwiseSeparableConv$1(nc(x), params.separable_conv0, [1, 1]);
        out = depthwiseSeparableConv$1(nc(out), params.separable_conv1, [1, 1]);
        out = depthwiseSeparableConv$1(nc(out), params.separable_conv2, [1, 1]);
        out = Ru(out, x);
        return out;
    }
    var TinyXception = /** @class */ (function (_super) {
        __extends(TinyXception, _super);
        function TinyXception(numMainBlocks) {
            var _this = _super.call(this, 'TinyXception') || this;
            _this._numMainBlocks = numMainBlocks;
            return _this;
        }
        TinyXception.prototype.forwardInput = function (input) {
            var _this = this;
            var params = this.params;
            if (!params) {
                throw new Error('TinyXception - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(112, true);
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(wn(256));
                var out = nc(conv(normalized, params.entry_flow.conv_in, [2, 2]));
                out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
                out = reductionBlock(out, params.entry_flow.reduction_block_1);
                range(_this._numMainBlocks, 0, 1).forEach(function (idx) {
                    out = mainBlock(out, params.middle_flow["main_block_" + idx]);
                });
                out = reductionBlock(out, params.exit_flow.reduction_block);
                out = nc(depthwiseSeparableConv$1(out, params.exit_flow.separable_conv, [1, 1]));
                return out;
            });
        };
        TinyXception.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        TinyXception.prototype.getDefaultModelName = function () {
            return 'tiny_xception_model';
        };
        TinyXception.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap$3(weightMap, this._numMainBlocks);
        };
        TinyXception.prototype.extractParams = function (weights) {
            return extractParams$3(weights, this._numMainBlocks);
        };
        return TinyXception;
    }(NeuralNetwork));

    function extractParams$4(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
        var age = extractFCParams(512, 1, 'fc/age');
        var gender = extractFCParams(512, 2, 'fc/gender');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { fc: { age: age, gender: gender } }
        };
    }

    function extractParamsFromWeigthMap$4(weightMap) {
        var paramMappings = [];
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractFcParams(prefix) {
            var weights = extractWeightEntry(prefix + "/weights", 2);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { weights: weights, bias: bias };
        }
        var params = {
            fc: {
                age: extractFcParams('fc/age'),
                gender: extractFcParams('fc/gender')
            }
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    (function (Gender) {
        Gender["FEMALE"] = "female";
        Gender["MALE"] = "male";
    })(exports.Gender || (exports.Gender = {}));

    var AgeGenderNet = /** @class */ (function (_super) {
        __extends(AgeGenderNet, _super);
        function AgeGenderNet(faceFeatureExtractor) {
            if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyXception(2); }
            var _this = _super.call(this, 'AgeGenderNet') || this;
            _this._faceFeatureExtractor = faceFeatureExtractor;
            return _this;
        }
        Object.defineProperty(AgeGenderNet.prototype, "faceFeatureExtractor", {
            get: function () {
                return this._faceFeatureExtractor;
            },
            enumerable: true,
            configurable: true
        });
        AgeGenderNet.prototype.runNet = function (input) {
            var _this = this;
            var params = this.params;
            if (!params) {
                throw new Error(this._name + " - load model before inference");
            }
            return Ue(function () {
                var bottleneckFeatures = input instanceof NetInput
                    ? _this.faceFeatureExtractor.forwardInput(input)
                    : input;
                var pooled = _l(bottleneckFeatures, [7, 7], [2, 2], 'valid').as2D(bottleneckFeatures.shape[0], -1);
                var age = fullyConnectedLayer(pooled, params.fc.age).as1D();
                var gender = fullyConnectedLayer(pooled, params.fc.gender);
                return { age: age, gender: gender };
            });
        };
        AgeGenderNet.prototype.forwardInput = function (input) {
            var _this = this;
            return Ue(function () {
                var _a = _this.runNet(input), age = _a.age, gender = _a.gender;
                return { age: age, gender: Yr(gender) };
            });
        };
        AgeGenderNet.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        AgeGenderNet.prototype.predictAgeAndGender = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var netInput, out, ages, genders, ageAndGenderTensors, predictionsByBatch;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            return [4 /*yield*/, this.forwardInput(netInput)];
                        case 2:
                            out = _a.sent();
                            ages = Ir(out.age);
                            genders = Ir(out.gender);
                            ageAndGenderTensors = ages.map(function (ageTensor, i) { return ({
                                ageTensor: ageTensor,
                                genderTensor: genders[i]
                            }); });
                            return [4 /*yield*/, Promise.all(ageAndGenderTensors.map(function (_a) {
                                    var ageTensor = _a.ageTensor, genderTensor = _a.genderTensor;
                                    return __awaiter(_this, void 0, void 0, function () {
                                        var age, probMale, isMale, gender, genderProbability;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4 /*yield*/, ageTensor.data()];
                                                case 1:
                                                    age = (_b.sent())[0];
                                                    return [4 /*yield*/, genderTensor.data()];
                                                case 2:
                                                    probMale = (_b.sent())[0];
                                                    isMale = probMale > 0.5;
                                                    gender = isMale ? exports.Gender.MALE : exports.Gender.FEMALE;
                                                    genderProbability = isMale ? probMale : (1 - probMale);
                                                    ageTensor.dispose();
                                                    genderTensor.dispose();
                                                    return [2 /*return*/, { age: age, gender: gender, genderProbability: genderProbability }];
                                            }
                                        });
                                    });
                                }))];
                        case 3:
                            predictionsByBatch = _a.sent();
                            out.age.dispose();
                            out.gender.dispose();
                            return [2 /*return*/, netInput.isBatchInput
                                    ? predictionsByBatch
                                    : predictionsByBatch[0]];
                    }
                });
            });
        };
        AgeGenderNet.prototype.getDefaultModelName = function () {
            return 'age_gender_model';
        };
        AgeGenderNet.prototype.dispose = function (throwOnRedispose) {
            if (throwOnRedispose === void 0) { throwOnRedispose = true; }
            this.faceFeatureExtractor.dispose(throwOnRedispose);
            _super.prototype.dispose.call(this, throwOnRedispose);
        };
        AgeGenderNet.prototype.loadClassifierParams = function (weights) {
            var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
            this._params = params;
            this._paramMappings = paramMappings;
        };
        AgeGenderNet.prototype.extractClassifierParams = function (weights) {
            return extractParams$4(weights);
        };
        AgeGenderNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
            var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
            this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
            return extractParamsFromWeigthMap$4(classifierMap);
        };
        AgeGenderNet.prototype.extractParams = function (weights) {
            var classifierWeightSize = (512 * 1 + 1) + (512 * 2 + 2);
            var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
            var classifierWeights = weights.slice(weights.length - classifierWeightSize);
            this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
            return this.extractClassifierParams(classifierWeights);
        };
        return AgeGenderNet;
    }(NeuralNetwork));

    var FaceLandmarks5 = /** @class */ (function (_super) {
        __extends(FaceLandmarks5, _super);
        function FaceLandmarks5() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FaceLandmarks5.prototype.getRefPointsForAlignment = function () {
            var pts = this.positions;
            return [
                pts[0],
                pts[1],
                getCenterPoint([pts[3], pts[4]])
            ];
        };
        return FaceLandmarks5;
    }(FaceLandmarks));

    var FaceMatch = /** @class */ (function () {
        function FaceMatch(label, distance) {
            this._label = label;
            this._distance = distance;
        }
        Object.defineProperty(FaceMatch.prototype, "label", {
            get: function () { return this._label; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceMatch.prototype, "distance", {
            get: function () { return this._distance; },
            enumerable: true,
            configurable: true
        });
        FaceMatch.prototype.toString = function (withDistance) {
            if (withDistance === void 0) { withDistance = true; }
            return "" + this.label + (withDistance ? " (" + round(this.distance) + ")" : '');
        };
        return FaceMatch;
    }());

    var LabeledFaceDescriptors = /** @class */ (function () {
        function LabeledFaceDescriptors(label, descriptors) {
            if (!(typeof label === 'string')) {
                throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
            }
            if (!Array.isArray(descriptors) || descriptors.some(function (desc) { return !(desc instanceof Float32Array); })) {
                throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
            }
            this._label = label;
            this._descriptors = descriptors;
        }
        Object.defineProperty(LabeledFaceDescriptors.prototype, "label", {
            get: function () { return this._label; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LabeledFaceDescriptors.prototype, "descriptors", {
            get: function () { return this._descriptors; },
            enumerable: true,
            configurable: true
        });
        LabeledFaceDescriptors.prototype.toJSON = function () {
            return {
                label: this.label,
                descriptors: this.descriptors.map(function (d) { return Array.from(d); })
            };
        };
        LabeledFaceDescriptors.fromJSON = function (json) {
            var descriptors = json.descriptors.map(function (d) {
                return new Float32Array(d);
            });
            return new LabeledFaceDescriptors(json.label, descriptors);
        };
        return LabeledFaceDescriptors;
    }());

    /**
     * Extracts the image regions containing the detected faces.
     *
     * @param input The image that face detection has been performed on.
     * @param detections The face detection results or face bounding boxes for that image.
     * @returns The Canvases of the corresponding image region for each detected face.
     */
    function extractFaces(input, detections) {
        return __awaiter(this, void 0, void 0, function () {
            var Canvas, canvas, netInput, tensorOrCanvas, _a, ctx, boxes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Canvas = env.getEnv().Canvas;
                        canvas = input;
                        if (!!(input instanceof Canvas)) return [3 /*break*/, 5];
                        return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _b.sent();
                        if (netInput.batchSize > 1) {
                            throw new Error('extractFaces - batchSize > 1 not supported');
                        }
                        tensorOrCanvas = netInput.getInput(0);
                        if (!(tensorOrCanvas instanceof Canvas)) return [3 /*break*/, 2];
                        _a = tensorOrCanvas;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, imageTensorToCanvas(tensorOrCanvas)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        canvas = _a;
                        _b.label = 5;
                    case 5:
                        ctx = getContext2dOrThrow(canvas);
                        boxes = detections.map(function (det) { return det instanceof FaceDetection
                            ? det.forSize(canvas.width, canvas.height).box.floor()
                            : det; })
                            .map(function (box) { return box.clipAtImageBorders(canvas.width, canvas.height); });
                        return [2 /*return*/, boxes.map(function (_a) {
                                var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                                var faceImg = createCanvas({ width: width, height: height });
                                getContext2dOrThrow(faceImg)
                                    .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
                                return faceImg;
                            })];
                }
            });
        });
    }

    /**
     * Extracts the tensors of the image regions containing the detected faces.
     * Useful if you want to compute the face descriptors for the face images.
     * Using this method is faster then extracting a canvas for each face and
     * converting them to tensors individually.
     *
     * @param imageTensor The image tensor that face detection has been performed on.
     * @param detections The face detection results or face bounding boxes for that image.
     * @returns Tensors of the corresponding image region for each detected face.
     */
    function extractFaceTensors(imageTensor, detections) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!isTensor3D(imageTensor) && !isTensor4D(imageTensor)) {
                    throw new Error('extractFaceTensors - expected image tensor to be 3D or 4D');
                }
                if (isTensor4D(imageTensor) && imageTensor.shape[0] > 1) {
                    throw new Error('extractFaceTensors - batchSize > 1 not supported');
                }
                return [2 /*return*/, Ue(function () {
                        var _a = imageTensor.shape.slice(isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                        var boxes = detections.map(function (det) { return det instanceof FaceDetection
                            ? det.forSize(imgWidth, imgHeight).box
                            : det; })
                            .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                        var faceTensors = boxes.map(function (_a) {
                            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                            return Wl(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
                        });
                        return faceTensors;
                    })];
            });
        });
    }

    var FaceLandmark68NetBase = /** @class */ (function (_super) {
        __extends(FaceLandmark68NetBase, _super);
        function FaceLandmark68NetBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FaceLandmark68NetBase.prototype.postProcess = function (output, inputSize, originalDimensions) {
            var inputDimensions = originalDimensions.map(function (_a) {
                var width = _a.width, height = _a.height;
                var scale = inputSize / Math.max(height, width);
                return {
                    width: width * scale,
                    height: height * scale
                };
            });
            var batchSize = inputDimensions.length;
            return Ue(function () {
                var createInterleavedTensor = function (fillX, fillY) {
                    return Cr([
                        Tn([68], fillX),
                        Tn([68], fillY)
                    ], 1).as2D(1, 136).as1D();
                };
                var getPadding = function (batchIdx, cond) {
                    var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                    return cond(width, height) ? Math.abs(width - height) / 2 : 0;
                };
                var getPaddingX = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return w < h; }); };
                var getPaddingY = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return h < w; }); };
                var landmarkTensors = output
                    .mul(Tn([batchSize, 136], inputSize))
                    .sub(Cr(Array.from(Array(batchSize), function (_, batchIdx) {
                    return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
                })))
                    .div(Cr(Array.from(Array(batchSize), function (_, batchIdx) {
                    return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
                })));
                return landmarkTensors;
            });
        };
        FaceLandmark68NetBase.prototype.forwardInput = function (input) {
            var _this = this;
            return Ue(function () {
                var out = _this.runNet(input);
                return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function (_a) {
                    var height = _a[0], width = _a[1];
                    return ({ height: height, width: width });
                }));
            });
        };
        FaceLandmark68NetBase.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        FaceLandmark68NetBase.prototype.detectLandmarks = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var netInput, landmarkTensors, landmarksForBatch;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            landmarkTensors = Ue(function () { return Ir(_this.forwardInput(netInput)); });
                            return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return __awaiter(_this, void 0, void 0, function () {
                                    var landmarksArray, _a, _b, xCoords, yCoords;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                _b = (_a = Array).from;
                                                return [4 /*yield*/, landmarkTensor.data()];
                                            case 1:
                                                landmarksArray = _b.apply(_a, [_c.sent()]);
                                                xCoords = landmarksArray.filter(function (_, i) { return isEven(i); });
                                                yCoords = landmarksArray.filter(function (_, i) { return !isEven(i); });
                                                return [2 /*return*/, new FaceLandmarks68(Array(68).fill(0).map(function (_, i) { return new Point(xCoords[i], yCoords[i]); }), {
                                                        height: netInput.getInputHeight(batchIdx),
                                                        width: netInput.getInputWidth(batchIdx),
                                                    })];
                                        }
                                    });
                                }); }))];
                        case 2:
                            landmarksForBatch = _a.sent();
                            landmarkTensors.forEach(function (t) { return t.dispose(); });
                            return [2 /*return*/, netInput.isBatchInput
                                    ? landmarksForBatch
                                    : landmarksForBatch[0]];
                    }
                });
            });
        };
        FaceLandmark68NetBase.prototype.getClassifierChannelsOut = function () {
            return 136;
        };
        return FaceLandmark68NetBase;
    }(FaceProcessor));

    var FaceLandmark68Net = /** @class */ (function (_super) {
        __extends(FaceLandmark68Net, _super);
        function FaceLandmark68Net(faceFeatureExtractor) {
            if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
            return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
        }
        FaceLandmark68Net.prototype.getDefaultModelName = function () {
            return 'face_landmark_68_model';
        };
        FaceLandmark68Net.prototype.getClassifierChannelsIn = function () {
            return 256;
        };
        return FaceLandmark68Net;
    }(FaceLandmark68NetBase));

    function extractParamsFromWeigthMapTiny(weightMap) {
        var paramMappings = [];
        var extractDenseBlock3Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
        var params = {
            dense0: extractDenseBlock3Params('dense0', true),
            dense1: extractDenseBlock3Params('dense1'),
            dense2: extractDenseBlock3Params('dense2')
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    function extractParamsTiny(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var extractDenseBlock3Params = extractorsFactory$2(extractWeights, paramMappings).extractDenseBlock3Params;
        var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
        var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
        var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { dense0: dense0, dense1: dense1, dense2: dense2 }
        };
    }

    var TinyFaceFeatureExtractor = /** @class */ (function (_super) {
        __extends(TinyFaceFeatureExtractor, _super);
        function TinyFaceFeatureExtractor() {
            return _super.call(this, 'TinyFaceFeatureExtractor') || this;
        }
        TinyFaceFeatureExtractor.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('TinyFaceFeatureExtractor - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(112, true);
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(wn(255));
                var out = denseBlock3(normalized, params.dense0, true);
                out = denseBlock3(out, params.dense1);
                out = denseBlock3(out, params.dense2);
                out = _l(out, [14, 14], [2, 2], 'valid');
                return out;
            });
        };
        TinyFaceFeatureExtractor.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        TinyFaceFeatureExtractor.prototype.getDefaultModelName = function () {
            return 'face_feature_extractor_tiny_model';
        };
        TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMapTiny(weightMap);
        };
        TinyFaceFeatureExtractor.prototype.extractParams = function (weights) {
            return extractParamsTiny(weights);
        };
        return TinyFaceFeatureExtractor;
    }(NeuralNetwork));

    var FaceLandmark68TinyNet = /** @class */ (function (_super) {
        __extends(FaceLandmark68TinyNet, _super);
        function FaceLandmark68TinyNet(faceFeatureExtractor) {
            if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyFaceFeatureExtractor(); }
            return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
        }
        FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
            return 'face_landmark_68_tiny_model';
        };
        FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function () {
            return 128;
        };
        return FaceLandmark68TinyNet;
    }(FaceLandmark68NetBase));

    var FaceLandmarkNet = /** @class */ (function (_super) {
        __extends(FaceLandmarkNet, _super);
        function FaceLandmarkNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FaceLandmarkNet;
    }(FaceLandmark68Net));

    function scale(x, params) {
        return Ru(Pu(x, params.weights), params.biases);
    }

    function convLayer$1(x, params, strides, withRelu, padding) {
        if (padding === void 0) { padding = 'same'; }
        var _a = params.conv, filters = _a.filters, bias = _a.bias;
        var out = fl(x, filters, strides, padding);
        out = Ru(out, bias);
        out = scale(out, params.scale);
        return withRelu ? nc(out) : out;
    }
    function conv$1(x, params) {
        return convLayer$1(x, params, [1, 1], true);
    }
    function convNoRelu(x, params) {
        return convLayer$1(x, params, [1, 1], false);
    }
    function convDown(x, params) {
        return convLayer$1(x, params, [2, 2], true, 'valid');
    }

    function extractorsFactory$4(extractWeights, paramMappings) {
        function extractFilterValues(numFilterValues, numFilters, filterSize) {
            var weights = extractWeights(numFilterValues);
            var depth = weights.length / (numFilters * filterSize * filterSize);
            if (isFloat(depth)) {
                throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
            }
            return Ue(function () { return oc(In(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]); });
        }
        function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
            var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
            var bias = Cn(extractWeights(numFilters));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
            return { filters: filters, bias: bias };
        }
        function extractScaleLayerParams(numWeights, mappedPrefix) {
            var weights = Cn(extractWeights(numWeights));
            var biases = Cn(extractWeights(numWeights));
            paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/biases" });
            return {
                weights: weights,
                biases: biases
            };
        }
        function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
            var conv = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
            var scale = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
            return { conv: conv, scale: scale };
        }
        function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
            if (isDown === void 0) { isDown = false; }
            var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
            var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
            return { conv1: conv1, conv2: conv2 };
        }
        return {
            extractConvLayerParams: extractConvLayerParams,
            extractResidualLayerParams: extractResidualLayerParams
        };
    }
    function extractParams$5(weights) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory$4(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
        var conv32_down = extractConvLayerParams(4704, 32, 7, 'conv32_down');
        var conv32_1 = extractResidualLayerParams(9216, 32, 3, 'conv32_1');
        var conv32_2 = extractResidualLayerParams(9216, 32, 3, 'conv32_2');
        var conv32_3 = extractResidualLayerParams(9216, 32, 3, 'conv32_3');
        var conv64_down = extractResidualLayerParams(36864, 64, 3, 'conv64_down', true);
        var conv64_1 = extractResidualLayerParams(36864, 64, 3, 'conv64_1');
        var conv64_2 = extractResidualLayerParams(36864, 64, 3, 'conv64_2');
        var conv64_3 = extractResidualLayerParams(36864, 64, 3, 'conv64_3');
        var conv128_down = extractResidualLayerParams(147456, 128, 3, 'conv128_down', true);
        var conv128_1 = extractResidualLayerParams(147456, 128, 3, 'conv128_1');
        var conv128_2 = extractResidualLayerParams(147456, 128, 3, 'conv128_2');
        var conv256_down = extractResidualLayerParams(589824, 256, 3, 'conv256_down', true);
        var conv256_1 = extractResidualLayerParams(589824, 256, 3, 'conv256_1');
        var conv256_2 = extractResidualLayerParams(589824, 256, 3, 'conv256_2');
        var conv256_down_out = extractResidualLayerParams(589824, 256, 3, 'conv256_down_out');
        var fc = Ue(function () { return oc(En(extractWeights(256 * 128), [128, 256]), [1, 0]); });
        paramMappings.push({ paramPath: "fc" });
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        var params = {
            conv32_down: conv32_down,
            conv32_1: conv32_1,
            conv32_2: conv32_2,
            conv32_3: conv32_3,
            conv64_down: conv64_down,
            conv64_1: conv64_1,
            conv64_2: conv64_2,
            conv64_3: conv64_3,
            conv128_down: conv128_down,
            conv128_1: conv128_1,
            conv128_2: conv128_2,
            conv256_down: conv256_down,
            conv256_1: conv256_1,
            conv256_2: conv256_2,
            conv256_down_out: conv256_down_out,
            fc: fc
        };
        return { params: params, paramMappings: paramMappings };
    }

    function extractorsFactory$5(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractScaleLayerParams(prefix) {
            var weights = extractWeightEntry(prefix + "/scale/weights", 1);
            var biases = extractWeightEntry(prefix + "/scale/biases", 1);
            return { weights: weights, biases: biases };
        }
        function extractConvLayerParams(prefix) {
            var filters = extractWeightEntry(prefix + "/conv/filters", 4);
            var bias = extractWeightEntry(prefix + "/conv/bias", 1);
            var scale = extractScaleLayerParams(prefix);
            return { conv: { filters: filters, bias: bias }, scale: scale };
        }
        function extractResidualLayerParams(prefix) {
            return {
                conv1: extractConvLayerParams(prefix + "/conv1"),
                conv2: extractConvLayerParams(prefix + "/conv2")
            };
        }
        return {
            extractConvLayerParams: extractConvLayerParams,
            extractResidualLayerParams: extractResidualLayerParams
        };
    }
    function extractParamsFromWeigthMap$5(weightMap) {
        var paramMappings = [];
        var _a = extractorsFactory$5(weightMap, paramMappings), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
        var conv32_down = extractConvLayerParams('conv32_down');
        var conv32_1 = extractResidualLayerParams('conv32_1');
        var conv32_2 = extractResidualLayerParams('conv32_2');
        var conv32_3 = extractResidualLayerParams('conv32_3');
        var conv64_down = extractResidualLayerParams('conv64_down');
        var conv64_1 = extractResidualLayerParams('conv64_1');
        var conv64_2 = extractResidualLayerParams('conv64_2');
        var conv64_3 = extractResidualLayerParams('conv64_3');
        var conv128_down = extractResidualLayerParams('conv128_down');
        var conv128_1 = extractResidualLayerParams('conv128_1');
        var conv128_2 = extractResidualLayerParams('conv128_2');
        var conv256_down = extractResidualLayerParams('conv256_down');
        var conv256_1 = extractResidualLayerParams('conv256_1');
        var conv256_2 = extractResidualLayerParams('conv256_2');
        var conv256_down_out = extractResidualLayerParams('conv256_down_out');
        var fc = weightMap['fc'];
        paramMappings.push({ originalPath: 'fc', paramPath: 'fc' });
        if (!isTensor2D(fc)) {
            throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
        }
        var params = {
            conv32_down: conv32_down,
            conv32_1: conv32_1,
            conv32_2: conv32_2,
            conv32_3: conv32_3,
            conv64_down: conv64_down,
            conv64_1: conv64_1,
            conv64_2: conv64_2,
            conv64_3: conv64_3,
            conv128_down: conv128_down,
            conv128_1: conv128_1,
            conv128_2: conv128_2,
            conv256_down: conv256_down,
            conv256_1: conv256_1,
            conv256_2: conv256_2,
            conv256_down_out: conv256_down_out,
            fc: fc
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    function residual(x, params) {
        var out = conv$1(x, params.conv1);
        out = convNoRelu(out, params.conv2);
        out = Ru(out, x);
        out = nc(out);
        return out;
    }
    function residualDown(x, params) {
        var out = convDown(x, params.conv1);
        out = convNoRelu(out, params.conv2);
        var pooled = _l(x, 2, 2, 'valid');
        var zeros = An(pooled.shape);
        var isPad = pooled.shape[3] !== out.shape[3];
        var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
        if (isAdjustShape) {
            var padShapeX = __spreadArrays(out.shape);
            padShapeX[1] = 1;
            var zerosW = An(padShapeX);
            out = Mn([out, zerosW], 1);
            var padShapeY = __spreadArrays(out.shape);
            padShapeY[2] = 1;
            var zerosH = An(padShapeY);
            out = Mn([out, zerosH], 2);
        }
        pooled = isPad ? Mn([pooled, zeros], 3) : pooled;
        out = Ru(pooled, out);
        out = nc(out);
        return out;
    }

    var FaceRecognitionNet = /** @class */ (function (_super) {
        __extends(FaceRecognitionNet, _super);
        function FaceRecognitionNet() {
            return _super.call(this, 'FaceRecognitionNet') || this;
        }
        FaceRecognitionNet.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('FaceRecognitionNet - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(150, true).toFloat();
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(wn(256));
                var out = convDown(normalized, params.conv32_down);
                out = Dl(out, 3, 2, 'valid');
                out = residual(out, params.conv32_1);
                out = residual(out, params.conv32_2);
                out = residual(out, params.conv32_3);
                out = residualDown(out, params.conv64_down);
                out = residual(out, params.conv64_1);
                out = residual(out, params.conv64_2);
                out = residual(out, params.conv64_3);
                out = residualDown(out, params.conv128_down);
                out = residual(out, params.conv128_1);
                out = residual(out, params.conv128_2);
                out = residualDown(out, params.conv256_down);
                out = residual(out, params.conv256_1);
                out = residual(out, params.conv256_2);
                out = residualDown(out, params.conv256_down_out);
                var globalAvg = out.mean([1, 2]);
                var fullyConnected = wl(globalAvg, params.fc);
                return fullyConnected;
            });
        };
        FaceRecognitionNet.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            faceDescriptorTensors = Ue(function () { return Ir(_this.forwardInput(netInput)); });
                            return [4 /*yield*/, Promise.all(faceDescriptorTensors.map(function (t) { return t.data(); }))];
                        case 2:
                            faceDescriptorsForBatch = _a.sent();
                            faceDescriptorTensors.forEach(function (t) { return t.dispose(); });
                            return [2 /*return*/, netInput.isBatchInput
                                    ? faceDescriptorsForBatch
                                    : faceDescriptorsForBatch[0]];
                    }
                });
            });
        };
        FaceRecognitionNet.prototype.getDefaultModelName = function () {
            return 'face_recognition_model';
        };
        FaceRecognitionNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap$5(weightMap);
        };
        FaceRecognitionNet.prototype.extractParams = function (weights) {
            return extractParams$5(weights);
        };
        return FaceRecognitionNet;
    }(NeuralNetwork));

    function createFaceRecognitionNet(weights) {
        var net = new FaceRecognitionNet();
        net.extractWeights(weights);
        return net;
    }

    function extendWithFaceDescriptor(sourceObj, descriptor) {
        var extension = { descriptor: descriptor };
        return Object.assign({}, sourceObj, extension);
    }

    function isWithAge(obj) {
        return typeof obj['age'] === 'number';
    }
    function extendWithAge(sourceObj, age) {
        var extension = { age: age };
        return Object.assign({}, sourceObj, extension);
    }

    function isWithGender(obj) {
        return (obj['gender'] === exports.Gender.MALE || obj['gender'] === exports.Gender.FEMALE)
            && isValidProbablitiy(obj['genderProbability']);
    }
    function extendWithGender(sourceObj, gender, genderProbability) {
        var extension = { gender: gender, genderProbability: genderProbability };
        return Object.assign({}, sourceObj, extension);
    }

    var MtcnnOptions = /** @class */ (function () {
        function MtcnnOptions(_a) {
            var _b = _a === void 0 ? {} : _a, minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
            this._name = 'MtcnnOptions';
            this._minFaceSize = minFaceSize || 20;
            this._scaleFactor = scaleFactor || 0.709;
            this._maxNumScales = maxNumScales || 10;
            this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7];
            this._scaleSteps = scaleSteps;
            if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
                throw new Error(this._name + " - expected minFaceSize to be a number > 0");
            }
            if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
                throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
            }
            if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
                throw new Error(this._name + " - expected maxNumScales to be a number > 0");
            }
            if (!Array.isArray(this._scoreThresholds)
                || this._scoreThresholds.length !== 3
                || this._scoreThresholds.some(function (th) { return typeof th !== 'number'; })) {
                throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
            }
            if (this._scaleSteps
                && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (th) { return typeof th !== 'number'; }))) {
                throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
            }
        }
        Object.defineProperty(MtcnnOptions.prototype, "minFaceSize", {
            get: function () { return this._minFaceSize; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MtcnnOptions.prototype, "scaleFactor", {
            get: function () { return this._scaleFactor; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MtcnnOptions.prototype, "maxNumScales", {
            get: function () { return this._maxNumScales; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MtcnnOptions.prototype, "scoreThresholds", {
            get: function () { return this._scoreThresholds; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MtcnnOptions.prototype, "scaleSteps", {
            get: function () { return this._scaleSteps; },
            enumerable: true,
            configurable: true
        });
        return MtcnnOptions;
    }());

    function extractorsFactory$6(extractWeights, paramMappings) {
        function extractDepthwiseConvParams(numChannels, mappedPrefix) {
            var filters = In(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
            var batch_norm_scale = Cn(extractWeights(numChannels));
            var batch_norm_offset = Cn(extractWeights(numChannels));
            var batch_norm_mean = Cn(extractWeights(numChannels));
            var batch_norm_variance = Cn(extractWeights(numChannels));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/batch_norm_scale" }, { paramPath: mappedPrefix + "/batch_norm_offset" }, { paramPath: mappedPrefix + "/batch_norm_mean" }, { paramPath: mappedPrefix + "/batch_norm_variance" });
            return {
                filters: filters,
                batch_norm_scale: batch_norm_scale,
                batch_norm_offset: batch_norm_offset,
                batch_norm_mean: batch_norm_mean,
                batch_norm_variance: batch_norm_variance
            };
        }
        function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
            var filters = In(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
            var bias = Cn(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/" + (isPointwiseConv ? 'batch_norm_offset' : 'bias') });
            return { filters: filters, bias: bias };
        }
        function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
            var _a = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true), filters = _a.filters, bias = _a.bias;
            return {
                filters: filters,
                batch_norm_offset: bias
            };
        }
        function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
            var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
            var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
            return { depthwise_conv: depthwise_conv, pointwise_conv: pointwise_conv };
        }
        function extractMobilenetV1Params() {
            var conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0');
            var conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1');
            var conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2');
            var conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3');
            var conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4');
            var conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5');
            var conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6');
            var conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7');
            var conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8');
            var conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9');
            var conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10');
            var conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11');
            var conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12');
            var conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13');
            return {
                conv_0: conv_0,
                conv_1: conv_1,
                conv_2: conv_2,
                conv_3: conv_3,
                conv_4: conv_4,
                conv_5: conv_5,
                conv_6: conv_6,
                conv_7: conv_7,
                conv_8: conv_8,
                conv_9: conv_9,
                conv_10: conv_10,
                conv_11: conv_11,
                conv_12: conv_12,
                conv_13: conv_13
            };
        }
        function extractPredictionLayerParams() {
            var conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0');
            var conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1');
            var conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2');
            var conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3');
            var conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4');
            var conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5');
            var conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6');
            var conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7');
            var box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor');
            var class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor');
            var box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor');
            var class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor');
            var box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor');
            var class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor');
            var box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor');
            var class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor');
            var box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor');
            var class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor');
            var box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor');
            var class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor');
            var box_predictor_0 = {
                box_encoding_predictor: box_encoding_0_predictor,
                class_predictor: class_predictor_0
            };
            var box_predictor_1 = {
                box_encoding_predictor: box_encoding_1_predictor,
                class_predictor: class_predictor_1
            };
            var box_predictor_2 = {
                box_encoding_predictor: box_encoding_2_predictor,
                class_predictor: class_predictor_2
            };
            var box_predictor_3 = {
                box_encoding_predictor: box_encoding_3_predictor,
                class_predictor: class_predictor_3
            };
            var box_predictor_4 = {
                box_encoding_predictor: box_encoding_4_predictor,
                class_predictor: class_predictor_4
            };
            var box_predictor_5 = {
                box_encoding_predictor: box_encoding_5_predictor,
                class_predictor: class_predictor_5
            };
            return {
                conv_0: conv_0,
                conv_1: conv_1,
                conv_2: conv_2,
                conv_3: conv_3,
                conv_4: conv_4,
                conv_5: conv_5,
                conv_6: conv_6,
                conv_7: conv_7,
                box_predictor_0: box_predictor_0,
                box_predictor_1: box_predictor_1,
                box_predictor_2: box_predictor_2,
                box_predictor_3: box_predictor_3,
                box_predictor_4: box_predictor_4,
                box_predictor_5: box_predictor_5
            };
        }
        return {
            extractMobilenetV1Params: extractMobilenetV1Params,
            extractPredictionLayerParams: extractPredictionLayerParams
        };
    }
    function extractParams$6(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var _b = extractorsFactory$6(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
        var mobilenetv1 = extractMobilenetV1Params();
        var prediction_layer = extractPredictionLayerParams();
        var extra_dim = Rn(extractWeights(5118 * 4), [1, 5118, 4]);
        var output_layer = {
            extra_dim: extra_dim
        };
        paramMappings.push({ paramPath: 'output_layer/extra_dim' });
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            params: {
                mobilenetv1: mobilenetv1,
                prediction_layer: prediction_layer,
                output_layer: output_layer
            },
            paramMappings: paramMappings
        };
    }

    function extractorsFactory$7(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
            var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
            var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
            return { filters: filters, batch_norm_offset: batch_norm_offset };
        }
        function extractConvPairParams(idx) {
            var mappedPrefix = "mobilenetv1/conv_" + idx;
            var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
            var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
            var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
            var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
            var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
            var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
            var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
            var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
            return {
                depthwise_conv: {
                    filters: filters,
                    batch_norm_scale: batch_norm_scale,
                    batch_norm_offset: batch_norm_offset,
                    batch_norm_mean: batch_norm_mean,
                    batch_norm_variance: batch_norm_variance
                },
                pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
            };
        }
        function extractMobilenetV1Params() {
            return {
                conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
                conv_1: extractConvPairParams(1),
                conv_2: extractConvPairParams(2),
                conv_3: extractConvPairParams(3),
                conv_4: extractConvPairParams(4),
                conv_5: extractConvPairParams(5),
                conv_6: extractConvPairParams(6),
                conv_7: extractConvPairParams(7),
                conv_8: extractConvPairParams(8),
                conv_9: extractConvPairParams(9),
                conv_10: extractConvPairParams(10),
                conv_11: extractConvPairParams(11),
                conv_12: extractConvPairParams(12),
                conv_13: extractConvPairParams(13)
            };
        }
        function extractConvParams(prefix, mappedPrefix) {
            var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
            var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
            return { filters: filters, bias: bias };
        }
        function extractBoxPredictorParams(idx) {
            var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
            var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
            return { box_encoding_predictor: box_encoding_predictor, class_predictor: class_predictor };
        }
        function extractPredictionLayerParams() {
            return {
                conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
                conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
                conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
                conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
                conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
                conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
                conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
                conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
                box_predictor_0: extractBoxPredictorParams(0),
                box_predictor_1: extractBoxPredictorParams(1),
                box_predictor_2: extractBoxPredictorParams(2),
                box_predictor_3: extractBoxPredictorParams(3),
                box_predictor_4: extractBoxPredictorParams(4),
                box_predictor_5: extractBoxPredictorParams(5)
            };
        }
        return {
            extractMobilenetV1Params: extractMobilenetV1Params,
            extractPredictionLayerParams: extractPredictionLayerParams
        };
    }
    function extractParamsFromWeigthMap$6(weightMap) {
        var paramMappings = [];
        var _a = extractorsFactory$7(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
        var extra_dim = weightMap['Output/extra_dim'];
        paramMappings.push({ originalPath: 'Output/extra_dim', paramPath: 'output_layer/extra_dim' });
        if (!isTensor3D(extra_dim)) {
            throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
        }
        var params = {
            mobilenetv1: extractMobilenetV1Params(),
            prediction_layer: extractPredictionLayerParams(),
            output_layer: {
                extra_dim: extra_dim
            }
        };
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: params, paramMappings: paramMappings };
    }

    function pointwiseConvLayer(x, params, strides) {
        return Ue(function () {
            var out = fl(x, params.filters, strides, 'same');
            out = Ru(out, params.batch_norm_offset);
            return Ds(out, 0, 6);
        });
    }

    var epsilon = 0.0010000000474974513;
    function depthwiseConvLayer(x, params, strides) {
        return Ue(function () {
            var out = gl(x, params.filters, strides, 'same');
            out = du(out, params.batch_norm_mean, params.batch_norm_variance, params.batch_norm_offset, params.batch_norm_scale, epsilon);
            return Ds(out, 0, 6);
        });
    }
    function getStridesForLayerIdx(layerIdx) {
        return [2, 4, 6, 12].some(function (idx) { return idx === layerIdx; }) ? [2, 2] : [1, 1];
    }
    function mobileNetV1(x, params) {
        return Ue(function () {
            var conv11 = null;
            var out = pointwiseConvLayer(x, params.conv_0, [2, 2]);
            var convPairParams = [
                params.conv_1,
                params.conv_2,
                params.conv_3,
                params.conv_4,
                params.conv_5,
                params.conv_6,
                params.conv_7,
                params.conv_8,
                params.conv_9,
                params.conv_10,
                params.conv_11,
                params.conv_12,
                params.conv_13
            ];
            convPairParams.forEach(function (param, i) {
                var layerIdx = i + 1;
                var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
                out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
                out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1]);
                if (layerIdx === 11) {
                    conv11 = out;
                }
            });
            if (conv11 === null) {
                throw new Error('mobileNetV1 - output of conv layer 11 is null');
            }
            return {
                out: out,
                conv11: conv11
            };
        });
    }

    function nonMaxSuppression$1(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
        var numBoxes = boxes.shape[0];
        var outputSize = Math.min(maxOutputSize, numBoxes);
        var candidates = scores
            .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
            .filter(function (c) { return c.score > scoreThreshold; })
            .sort(function (c1, c2) { return c2.score - c1.score; });
        var suppressFunc = function (x) { return x <= iouThreshold ? 1 : 0; };
        var selected = [];
        candidates.forEach(function (c) {
            if (selected.length >= outputSize) {
                return;
            }
            var originalScore = c.score;
            for (var j = selected.length - 1; j >= 0; --j) {
                var iou = IOU(boxes, c.boxIndex, selected[j]);
                if (iou === 0.0) {
                    continue;
                }
                c.score *= suppressFunc(iou);
                if (c.score <= scoreThreshold) {
                    break;
                }
            }
            if (originalScore === c.score) {
                selected.push(c.boxIndex);
            }
        });
        return selected;
    }
    function IOU(boxes, i, j) {
        var boxesData = boxes.arraySync();
        var yminI = Math.min(boxesData[i][0], boxesData[i][2]);
        var xminI = Math.min(boxesData[i][1], boxesData[i][3]);
        var ymaxI = Math.max(boxesData[i][0], boxesData[i][2]);
        var xmaxI = Math.max(boxesData[i][1], boxesData[i][3]);
        var yminJ = Math.min(boxesData[j][0], boxesData[j][2]);
        var xminJ = Math.min(boxesData[j][1], boxesData[j][3]);
        var ymaxJ = Math.max(boxesData[j][0], boxesData[j][2]);
        var xmaxJ = Math.max(boxesData[j][1], boxesData[j][3]);
        var areaI = (ymaxI - yminI) * (xmaxI - xminI);
        var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
        if (areaI <= 0 || areaJ <= 0) {
            return 0.0;
        }
        var intersectionYmin = Math.max(yminI, yminJ);
        var intersectionXmin = Math.max(xminI, xminJ);
        var intersectionYmax = Math.min(ymaxI, ymaxJ);
        var intersectionXmax = Math.min(xmaxI, xmaxJ);
        var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) *
            Math.max(intersectionXmax - intersectionXmin, 0.0);
        return intersectionArea / (areaI + areaJ - intersectionArea);
    }

    function getCenterCoordinatesAndSizesLayer(x) {
        var vec = Ir(oc(x, [1, 0]));
        var sizes = [
            Gu(vec[2], vec[0]),
            Gu(vec[3], vec[1])
        ];
        var centers = [
            Ru(vec[0], Su(sizes[0], wn(2))),
            Ru(vec[1], Su(sizes[1], wn(2)))
        ];
        return {
            sizes: sizes,
            centers: centers
        };
    }
    function decodeBoxesLayer(x0, x1) {
        var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
        var vec = Ir(oc(x1, [1, 0]));
        var div0_out = Su(Pu(Ms(Su(vec[2], wn(5))), sizes[0]), wn(2));
        var add0_out = Ru(Pu(Su(vec[0], wn(10)), sizes[0]), centers[0]);
        var div1_out = Su(Pu(Ms(Su(vec[3], wn(5))), sizes[1]), wn(2));
        var add1_out = Ru(Pu(Su(vec[1], wn(10)), sizes[1]), centers[1]);
        return oc(Cr([
            Gu(add0_out, div0_out),
            Gu(add1_out, div1_out),
            Ru(add0_out, div0_out),
            Ru(add1_out, div1_out)
        ]), [1, 0]);
    }
    function outputLayer(boxPredictions, classPredictions, params) {
        return Ue(function () {
            var batchSize = boxPredictions.shape[0];
            var boxes = decodeBoxesLayer(xr(Er(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), xr(boxPredictions, [-1, 4]));
            boxes = xr(boxes, [batchSize, (boxes.shape[0] / batchSize), 4]);
            var scoresAndClasses = qs(Bl(classPredictions, [0, 0, 1], [-1, -1, -1]));
            var scores = Bl(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
            scores = xr(scores, [batchSize, scores.shape[1]]);
            var boxesByBatch = Ir(boxes);
            var scoresByBatch = Ir(scores);
            return {
                boxes: boxesByBatch,
                scores: scoresByBatch
            };
        });
    }

    function boxPredictionLayer(x, params) {
        return Ue(function () {
            var batchSize = x.shape[0];
            var boxPredictionEncoding = xr(convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
            var classPrediction = xr(convLayer(x, params.class_predictor), [batchSize, -1, 3]);
            return {
                boxPredictionEncoding: boxPredictionEncoding,
                classPrediction: classPrediction
            };
        });
    }

    function predictionLayer(x, conv11, params) {
        return Ue(function () {
            var conv0 = pointwiseConvLayer(x, params.conv_0, [1, 1]);
            var conv1 = pointwiseConvLayer(conv0, params.conv_1, [2, 2]);
            var conv2 = pointwiseConvLayer(conv1, params.conv_2, [1, 1]);
            var conv3 = pointwiseConvLayer(conv2, params.conv_3, [2, 2]);
            var conv4 = pointwiseConvLayer(conv3, params.conv_4, [1, 1]);
            var conv5 = pointwiseConvLayer(conv4, params.conv_5, [2, 2]);
            var conv6 = pointwiseConvLayer(conv5, params.conv_6, [1, 1]);
            var conv7 = pointwiseConvLayer(conv6, params.conv_7, [2, 2]);
            var boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0);
            var boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1);
            var boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2);
            var boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3);
            var boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4);
            var boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5);
            var boxPredictions = Mn([
                boxPrediction0.boxPredictionEncoding,
                boxPrediction1.boxPredictionEncoding,
                boxPrediction2.boxPredictionEncoding,
                boxPrediction3.boxPredictionEncoding,
                boxPrediction4.boxPredictionEncoding,
                boxPrediction5.boxPredictionEncoding
            ], 1);
            var classPredictions = Mn([
                boxPrediction0.classPrediction,
                boxPrediction1.classPrediction,
                boxPrediction2.classPrediction,
                boxPrediction3.classPrediction,
                boxPrediction4.classPrediction,
                boxPrediction5.classPrediction
            ], 1);
            return {
                boxPredictions: boxPredictions,
                classPredictions: classPredictions
            };
        });
    }

    var SsdMobilenetv1Options = /** @class */ (function () {
        function SsdMobilenetv1Options(_a) {
            var _b = _a === void 0 ? {} : _a, minConfidence = _b.minConfidence, maxResults = _b.maxResults;
            this._name = 'SsdMobilenetv1Options';
            this._minConfidence = minConfidence || 0.5;
            this._maxResults = maxResults || 100;
            if (typeof this._minConfidence !== 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) {
                throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
            }
            if (typeof this._maxResults !== 'number') {
                throw new Error(this._name + " - expected maxResults to be a number");
            }
        }
        Object.defineProperty(SsdMobilenetv1Options.prototype, "minConfidence", {
            get: function () { return this._minConfidence; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SsdMobilenetv1Options.prototype, "maxResults", {
            get: function () { return this._maxResults; },
            enumerable: true,
            configurable: true
        });
        return SsdMobilenetv1Options;
    }());

    var SsdMobilenetv1 = /** @class */ (function (_super) {
        __extends(SsdMobilenetv1, _super);
        function SsdMobilenetv1() {
            return _super.call(this, 'SsdMobilenetv1') || this;
        }
        SsdMobilenetv1.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('SsdMobilenetv1 - load model before inference');
            }
            return Ue(function () {
                var batchTensor = input.toBatchTensor(512, false).toFloat();
                var x = Gu(Pu(batchTensor, wn(0.007843137718737125)), wn(1));
                var features = mobileNetV1(x, params.mobilenetv1);
                var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
                return outputLayer(boxPredictions, classPredictions, params.output_layer);
            });
        };
        SsdMobilenetv1.prototype.forward = function (input) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        SsdMobilenetv1.prototype.locateFaces = function (input, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, boxesData, results;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _a = new SsdMobilenetv1Options(options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _e.sent();
                            _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
                            boxes = _boxes[0];
                            scores = _scores[0];
                            for (i = 1; i < _boxes.length; i++) {
                                _boxes[i].dispose();
                                _scores[i].dispose();
                            }
                            _d = (_c = Array).from;
                            return [4 /*yield*/, scores.data()];
                        case 2:
                            scoresData = _d.apply(_c, [_e.sent()]);
                            iouThreshold = 0.5;
                            indices = nonMaxSuppression$1(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                            reshapedDims = netInput.getReshapedInputDimensions(0);
                            inputSize = netInput.inputSize;
                            padX = inputSize / reshapedDims.width;
                            padY = inputSize / reshapedDims.height;
                            boxesData = boxes.arraySync();
                            results = indices
                                .map(function (idx) {
                                var _a = [
                                    Math.max(0, boxesData[idx][0]),
                                    Math.min(1.0, boxesData[idx][2])
                                ].map(function (val) { return val * padY; }), top = _a[0], bottom = _a[1];
                                var _b = [
                                    Math.max(0, boxesData[idx][1]),
                                    Math.min(1.0, boxesData[idx][3])
                                ].map(function (val) { return val * padX; }), left = _b[0], right = _b[1];
                                return new FaceDetection(scoresData[idx], new Rect(left, top, right - left, bottom - top), {
                                    height: netInput.getInputHeight(0),
                                    width: netInput.getInputWidth(0)
                                });
                            });
                            boxes.dispose();
                            scores.dispose();
                            return [2 /*return*/, results];
                    }
                });
            });
        };
        SsdMobilenetv1.prototype.getDefaultModelName = function () {
            return 'ssd_mobilenetv1_model';
        };
        SsdMobilenetv1.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap$6(weightMap);
        };
        SsdMobilenetv1.prototype.extractParams = function (weights) {
            return extractParams$6(weights);
        };
        return SsdMobilenetv1;
    }(NeuralNetwork));

    function createSsdMobilenetv1(weights) {
        var net = new SsdMobilenetv1();
        net.extractWeights(weights);
        return net;
    }
    function createFaceDetectionNet(weights) {
        return createSsdMobilenetv1(weights);
    }
    // alias for backward compatibily
    var FaceDetectionNet = /** @class */ (function (_super) {
        __extends(FaceDetectionNet, _super);
        function FaceDetectionNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FaceDetectionNet;
    }(SsdMobilenetv1));

    var TinyFaceDetectorOptions = /** @class */ (function (_super) {
        __extends(TinyFaceDetectorOptions, _super);
        function TinyFaceDetectorOptions() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._name = 'TinyFaceDetectorOptions';
            return _this;
        }
        return TinyFaceDetectorOptions;
    }(TinyYolov2Options));

    var ComposableTask = /** @class */ (function () {
        function ComposableTask() {
        }
        ComposableTask.prototype.then = function (onfulfilled) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = onfulfilled;
                            return [4 /*yield*/, this.run()];
                        case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    }
                });
            });
        };
        ComposableTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    throw new Error('ComposableTask - run is not implemented');
                });
            });
        };
        return ComposableTask;
    }());

    function extractAllFacesAndComputeResults(parentResults, input, computeResults, extractedFaces, getRectForAlignment) {
        if (getRectForAlignment === void 0) { getRectForAlignment = function (_a) {
            var alignedRect = _a.alignedRect;
            return alignedRect;
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var faceBoxes, faces, _a, _b, results;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        faceBoxes = parentResults.map(function (parentResult) {
                            return isWithFaceLandmarks(parentResult)
                                ? getRectForAlignment(parentResult)
                                : parentResult.detection;
                        });
                        _a = extractedFaces;
                        if (_a) return [3 /*break*/, 5];
                        if (!(input instanceof ct)) return [3 /*break*/, 2];
                        return [4 /*yield*/, extractFaceTensors(input, faceBoxes)];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, extractFaces(input, faceBoxes)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        _a = (_b);
                        _c.label = 5;
                    case 5:
                        faces = _a;
                        return [4 /*yield*/, computeResults(faces)];
                    case 6:
                        results = _c.sent();
                        faces.forEach(function (f) { return f instanceof ct && f.dispose(); });
                        return [2 /*return*/, results];
                }
            });
        });
    }
    function extractSingleFaceAndComputeResult(parentResult, input, computeResult, extractedFaces, getRectForAlignment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, extractAllFacesAndComputeResults([parentResult], input, function (faces) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, computeResult(faces[0])];
                    }); }); }, extractedFaces, getRectForAlignment)];
            });
        });
    }

    function bgrToRgbTensor(tensor) {
        return Ue(function () { return Cr(Ir(tensor, 3).reverse(), 3); });
    }

    var CELL_STRIDE = 2;
    var CELL_SIZE = 12;

    function extractorsFactory$8(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
        function extractPReluParams(size, paramPath) {
            var alpha = Cn(extractWeights(size));
            paramMappings.push({ paramPath: paramPath });
            return alpha;
        }
        function extractSharedParams(numFilters, mappedPrefix, isRnet) {
            if (isRnet === void 0) { isRnet = false; }
            var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
            var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
            var conv2 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
            var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
            var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
            var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
            return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
        }
        function extractPNetParams() {
            var sharedParams = extractSharedParams([3, 10, 16, 32], 'pnet');
            var conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1');
            var conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2');
            return __assign(__assign({}, sharedParams), { conv4_1: conv4_1, conv4_2: conv4_2 });
        }
        function extractRNetParams() {
            var sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true);
            var fc1 = extractFCParams(576, 128, 'rnet/fc1');
            var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
            var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
            var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
            return __assign(__assign({}, sharedParams), { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
        }
        function extractONetParams() {
            var sharedParams = extractSharedParams([3, 32, 64, 64], 'onet');
            var conv4 = extractConvParams(64, 128, 2, 'onet/conv4');
            var prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha');
            var fc1 = extractFCParams(1152, 256, 'onet/fc1');
            var prelu5_alpha = extractPReluParams(256, 'onet/prelu5_alpha');
            var fc2_1 = extractFCParams(256, 2, 'onet/fc2_1');
            var fc2_2 = extractFCParams(256, 4, 'onet/fc2_2');
            var fc2_3 = extractFCParams(256, 10, 'onet/fc2_3');
            return __assign(__assign({}, sharedParams), { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
        }
        return {
            extractPNetParams: extractPNetParams,
            extractRNetParams: extractRNetParams,
            extractONetParams: extractONetParams
        };
    }
    function extractParams$7(weights) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory$8(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
        var pnet = extractPNetParams();
        var rnet = extractRNetParams();
        var onet = extractONetParams();
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
    }

    function extractorsFactory$9(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractConvParams(prefix) {
            var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { filters: filters, bias: bias };
        }
        function extractFCParams(prefix) {
            var weights = extractWeightEntry(prefix + "/weights", 2);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { weights: weights, bias: bias };
        }
        function extractPReluParams(paramPath) {
            return extractWeightEntry(paramPath, 1);
        }
        function extractSharedParams(prefix) {
            var conv1 = extractConvParams(prefix + "/conv1");
            var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
            var conv2 = extractConvParams(prefix + "/conv2");
            var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
            var conv3 = extractConvParams(prefix + "/conv3");
            var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
            return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
        }
        function extractPNetParams() {
            var sharedParams = extractSharedParams('pnet');
            var conv4_1 = extractConvParams('pnet/conv4_1');
            var conv4_2 = extractConvParams('pnet/conv4_2');
            return __assign(__assign({}, sharedParams), { conv4_1: conv4_1, conv4_2: conv4_2 });
        }
        function extractRNetParams() {
            var sharedParams = extractSharedParams('rnet');
            var fc1 = extractFCParams('rnet/fc1');
            var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
            var fc2_1 = extractFCParams('rnet/fc2_1');
            var fc2_2 = extractFCParams('rnet/fc2_2');
            return __assign(__assign({}, sharedParams), { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
        }
        function extractONetParams() {
            var sharedParams = extractSharedParams('onet');
            var conv4 = extractConvParams('onet/conv4');
            var prelu4_alpha = extractPReluParams('onet/prelu4_alpha');
            var fc1 = extractFCParams('onet/fc1');
            var prelu5_alpha = extractPReluParams('onet/prelu5_alpha');
            var fc2_1 = extractFCParams('onet/fc2_1');
            var fc2_2 = extractFCParams('onet/fc2_2');
            var fc2_3 = extractFCParams('onet/fc2_3');
            return __assign(__assign({}, sharedParams), { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
        }
        return {
            extractPNetParams: extractPNetParams,
            extractRNetParams: extractRNetParams,
            extractONetParams: extractONetParams
        };
    }
    function extractParamsFromWeigthMap$7(weightMap) {
        var paramMappings = [];
        var _a = extractorsFactory$9(weightMap, paramMappings), extractPNetParams = _a.extractPNetParams, extractRNetParams = _a.extractRNetParams, extractONetParams = _a.extractONetParams;
        var pnet = extractPNetParams();
        var rnet = extractRNetParams();
        var onet = extractONetParams();
        disposeUnusedWeightTensors(weightMap, paramMappings);
        return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
    }

    function getSizesForScale(scale, _a) {
        var height = _a[0], width = _a[1];
        return {
            height: Math.floor(height * scale),
            width: Math.floor(width * scale)
        };
    }

    function pyramidDown(minFaceSize, scaleFactor, dims) {
        var height = dims[0], width = dims[1];
        var m = CELL_SIZE / minFaceSize;
        var scales = [];
        var minLayer = Math.min(height, width) * m;
        var exp = 0;
        while (minLayer >= 12) {
            scales.push(m * Math.pow(scaleFactor, exp));
            minLayer = minLayer * scaleFactor;
            exp += 1;
        }
        return scales;
    }

    var MtcnnBox = /** @class */ (function (_super) {
        __extends(MtcnnBox, _super);
        function MtcnnBox(left, top, right, bottom) {
            return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
        }
        return MtcnnBox;
    }(Box));

    function normalize$1(x) {
        return Ue(function () { return Pu(Gu(x, wn(127.5)), wn(0.0078125)); });
    }

    function prelu(x, alpha) {
        return Ue(function () {
            return Ru(nc(x), Pu(alpha, Vs(nc(Vs(x)))));
        });
    }

    function sharedLayer(x, params, isPnet) {
        if (isPnet === void 0) { isPnet = false; }
        return Ue(function () {
            var out = convLayer(x, params.conv1, 'valid');
            out = prelu(out, params.prelu1_alpha);
            out = Dl(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
            out = convLayer(out, params.conv2, 'valid');
            out = prelu(out, params.prelu2_alpha);
            out = isPnet ? out : Dl(out, [3, 3], [2, 2], 'valid');
            out = convLayer(out, params.conv3, 'valid');
            out = prelu(out, params.prelu3_alpha);
            return out;
        });
    }

    function PNet(x, params) {
        return Ue(function () {
            var out = sharedLayer(x, params, true);
            var conv = convLayer(out, params.conv4_1, 'valid');
            var max = ir(Kl(conv, 3), 3);
            var prob = Yr(Gu(conv, max), 3);
            var regions = convLayer(out, params.conv4_2, 'valid');
            return { prob: prob, regions: regions };
        });
    }

    function rescaleAndNormalize(x, scale) {
        return Ue(function () {
            var _a = getSizesForScale(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
            var resized = Yc.resizeBilinear(x, [height, width]);
            var normalized = normalize$1(resized);
            return oc(normalized, [0, 2, 1, 3]);
        });
    }
    function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
        // TODO: fix this!, maybe better to use tf.gather here
        var indices = [];
        var scoresData = scoresTensor.arraySync();
        for (var y = 0; y < scoresTensor.shape[0]; y++) {
            for (var x = 0; x < scoresTensor.shape[1]; x++) {
                if (scoresData[y][x] >= scoreThreshold) {
                    indices.push(new Point(x, y));
                }
            }
        }
        var boundingBoxes = indices.map(function (idx) {
            var cell = new BoundingBox(Math.round((idx.y * CELL_STRIDE + 1) / scale), Math.round((idx.x * CELL_STRIDE + 1) / scale), Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale), Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale));
            var score = scoresData[idx.y][idx.x];
            var regionsData = regionsTensor.arraySync();
            var region = new MtcnnBox(regionsData[idx.y][idx.x][0], regionsData[idx.y][idx.x][1], regionsData[idx.y][idx.x][2], regionsData[idx.y][idx.x][3]);
            return {
                cell: cell,
                score: score,
                region: region
            };
        });
        return boundingBoxes;
    }
    function stage1(imgTensor, scales, scoreThreshold, params, stats) {
        stats.stage1 = [];
        var pnetOutputs = scales.map(function (scale) { return Ue(function () {
            var statsForScale = { scale: scale };
            var resized = rescaleAndNormalize(imgTensor, scale);
            var ts = Date.now();
            var _a = PNet(resized, params), prob = _a.prob, regions = _a.regions;
            statsForScale.pnet = Date.now() - ts;
            var scoresTensor = Ir(Ir(prob, 3)[1])[0];
            var regionsTensor = Ir(regions)[0];
            return {
                scoresTensor: scoresTensor,
                regionsTensor: regionsTensor,
                scale: scale,
                statsForScale: statsForScale
            };
        }); });
        var boxesForScale = pnetOutputs.map(function (_a) {
            var scoresTensor = _a.scoresTensor, regionsTensor = _a.regionsTensor, scale = _a.scale, statsForScale = _a.statsForScale;
            var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold);
            scoresTensor.dispose();
            regionsTensor.dispose();
            if (!boundingBoxes.length) {
                stats.stage1.push(statsForScale);
                return [];
            }
            var ts = Date.now();
            var indices = nonMaxSuppression(boundingBoxes.map(function (bbox) { return bbox.cell; }), boundingBoxes.map(function (bbox) { return bbox.score; }), 0.5);
            statsForScale.nms = Date.now() - ts;
            statsForScale.numBoxes = indices.length;
            stats.stage1.push(statsForScale);
            return indices.map(function (boxIdx) { return boundingBoxes[boxIdx]; });
        });
        var allBoxes = boxesForScale.reduce(function (all, boxes) { return all.concat(boxes); }, []);
        var finalBoxes = [];
        var finalScores = [];
        if (allBoxes.length > 0) {
            var ts = Date.now();
            var indices = nonMaxSuppression(allBoxes.map(function (bbox) { return bbox.cell; }), allBoxes.map(function (bbox) { return bbox.score; }), 0.7);
            stats.stage1_nms = Date.now() - ts;
            finalScores = indices.map(function (idx) { return allBoxes[idx].score; });
            finalBoxes = indices
                .map(function (idx) { return allBoxes[idx]; })
                .map(function (_a) {
                var cell = _a.cell, region = _a.region;
                return new BoundingBox(cell.left + (region.left * cell.width), cell.top + (region.top * cell.height), cell.right + (region.right * cell.width), cell.bottom + (region.bottom * cell.height)).toSquare().round();
            });
        }
        return {
            boxes: finalBoxes,
            scores: finalScores
        };
    }

    function extractImagePatches(img, boxes, _a) {
        var width = _a.width, height = _a.height;
        return __awaiter(this, void 0, void 0, function () {
            var imgCtx, bitmaps, imagePatchesDatas;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        imgCtx = getContext2dOrThrow(img);
                        return [4 /*yield*/, Promise.all(boxes.map(function (box) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, y, ey, x, ex, fromX, fromY, imgData;
                                return __generator(this, function (_b) {
                                    _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                    fromX = x - 1;
                                    fromY = y - 1;
                                    imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY));
                                    return [2 /*return*/, env.isNodejs() ? createCanvasFromMedia(imgData) : createImageBitmap(imgData)];
                                });
                            }); }))];
                    case 1:
                        bitmaps = _b.sent();
                        imagePatchesDatas = [];
                        bitmaps.forEach(function (bmp) {
                            var patch = createCanvas({ width: width, height: height });
                            var patchCtx = getContext2dOrThrow(patch);
                            patchCtx.drawImage(bmp, 0, 0, width, height);
                            var data = patchCtx.getImageData(0, 0, width, height).data;
                            var currData = [];
                            // RGBA -> BGR
                            for (var i = 0; i < data.length; i += 4) {
                                currData.push(data[i + 2]);
                                currData.push(data[i + 1]);
                                currData.push(data[i]);
                            }
                            imagePatchesDatas.push(currData);
                        });
                        return [2 /*return*/, imagePatchesDatas.map(function (data) {
                                var t = Ue(function () {
                                    var imagePatchTensor = oc(In(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
                                    return normalize$1(imagePatchTensor);
                                });
                                return t;
                            })];
                }
            });
        });
    }

    function RNet(x, params) {
        return Ue(function () {
            var convOut = sharedLayer(x, params);
            var vectorized = xr(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
            var fc1 = fullyConnectedLayer(vectorized, params.fc1);
            var prelu4 = prelu(fc1, params.prelu4_alpha);
            var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
            var max = ir(Kl(fc2_1, 1), 1);
            var prob = Yr(Gu(fc2_1, max), 1);
            var regions = fullyConnectedLayer(prelu4, params.fc2_2);
            var scores = Ir(prob, 1)[1];
            return { scores: scores, regions: regions };
        });
    }

    function stage2(img, inputBoxes, scoreThreshold, params, stats) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ts = Date.now();
                        return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 24, height: 24 })];
                    case 1:
                        rnetInputs = _c.sent();
                        stats.stage2_extractImagePatches = Date.now() - ts;
                        ts = Date.now();
                        rnetOuts = rnetInputs.map(function (rnetInput) {
                            var out = RNet(rnetInput, params);
                            rnetInput.dispose();
                            return out;
                        });
                        stats.stage2_rnet = Date.now() - ts;
                        scoresTensor = rnetOuts.length > 1
                            ? Mn(rnetOuts.map(function (out) { return out.scores; }))
                            : rnetOuts[0].scores;
                        _b = (_a = Array).from;
                        return [4 /*yield*/, scoresTensor.data()];
                    case 2:
                        scores = _b.apply(_a, [_c.sent()]);
                        scoresTensor.dispose();
                        indices = scores
                            .map(function (score, idx) { return ({ score: score, idx: idx }); })
                            .filter(function (c) { return c.score > scoreThreshold; })
                            .map(function (_a) {
                            var idx = _a.idx;
                            return idx;
                        });
                        filteredBoxes = indices.map(function (idx) { return inputBoxes[idx]; });
                        filteredScores = indices.map(function (idx) { return scores[idx]; });
                        finalBoxes = [];
                        finalScores = [];
                        if (filteredBoxes.length > 0) {
                            ts = Date.now();
                            indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7);
                            stats.stage2_nms = Date.now() - ts;
                            regions_1 = indicesNms.map(function (idx) {
                                var regionsData = rnetOuts[indices[idx]].regions.arraySync();
                                return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                            });
                            finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                            finalBoxes = indicesNms.map(function (idx, i) { return filteredBoxes[idx].calibrate(regions_1[i]); });
                        }
                        rnetOuts.forEach(function (t) {
                            t.regions.dispose();
                            t.scores.dispose();
                        });
                        return [2 /*return*/, {
                                boxes: finalBoxes,
                                scores: finalScores
                            }];
                }
            });
        });
    }

    function ONet(x, params) {
        return Ue(function () {
            var out = sharedLayer(x, params);
            out = Dl(out, [2, 2], [2, 2], 'same');
            out = convLayer(out, params.conv4, 'valid');
            out = prelu(out, params.prelu4_alpha);
            var vectorized = xr(out, [out.shape[0], params.fc1.weights.shape[0]]);
            var fc1 = fullyConnectedLayer(vectorized, params.fc1);
            var prelu5 = prelu(fc1, params.prelu5_alpha);
            var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
            var max = ir(Kl(fc2_1, 1), 1);
            var prob = Yr(Gu(fc2_1, max), 1);
            var regions = fullyConnectedLayer(prelu5, params.fc2_2);
            var points = fullyConnectedLayer(prelu5, params.fc2_3);
            var scores = Ir(prob, 1)[1];
            return { scores: scores, regions: regions, points: points };
        });
    }

    function stage3(img, inputBoxes, scoreThreshold, params, stats) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ts = Date.now();
                        return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 48, height: 48 })];
                    case 1:
                        onetInputs = _c.sent();
                        stats.stage3_extractImagePatches = Date.now() - ts;
                        ts = Date.now();
                        onetOuts = onetInputs.map(function (onetInput) {
                            var out = ONet(onetInput, params);
                            onetInput.dispose();
                            return out;
                        });
                        stats.stage3_onet = Date.now() - ts;
                        scoresTensor = onetOuts.length > 1
                            ? Mn(onetOuts.map(function (out) { return out.scores; }))
                            : onetOuts[0].scores;
                        _b = (_a = Array).from;
                        return [4 /*yield*/, scoresTensor.data()];
                    case 2:
                        scores = _b.apply(_a, [_c.sent()]);
                        scoresTensor.dispose();
                        indices = scores
                            .map(function (score, idx) { return ({ score: score, idx: idx }); })
                            .filter(function (c) { return c.score > scoreThreshold; })
                            .map(function (_a) {
                            var idx = _a.idx;
                            return idx;
                        });
                        filteredRegions = indices.map(function (idx) {
                            var regionsData = onetOuts[idx].regions.arraySync();
                            return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                        });
                        filteredBoxes = indices
                            .map(function (idx, i) { return inputBoxes[idx].calibrate(filteredRegions[i]); });
                        filteredScores = indices.map(function (idx) { return scores[idx]; });
                        finalBoxes = [];
                        finalScores = [];
                        points = [];
                        if (filteredBoxes.length > 0) {
                            ts = Date.now();
                            indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7, false);
                            stats.stage3_nms = Date.now() - ts;
                            finalBoxes = indicesNms.map(function (idx) { return filteredBoxes[idx]; });
                            finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                            points = indicesNms.map(function (idx, i) {
                                return Array(5).fill(0).map(function (_, ptIdx) {
                                    var pointsData = onetOuts[idx].points.arraySync();
                                    return new Point(((pointsData[0][ptIdx] * (finalBoxes[i].width + 1)) + finalBoxes[i].left), ((pointsData[0][ptIdx + 5] * (finalBoxes[i].height + 1)) + finalBoxes[i].top));
                                });
                            });
                        }
                        onetOuts.forEach(function (t) {
                            t.regions.dispose();
                            t.scores.dispose();
                            t.points.dispose();
                        });
                        return [2 /*return*/, {
                                boxes: finalBoxes,
                                scores: finalScores,
                                points: points
                            }];
                }
            });
        });
    }

    var Mtcnn = /** @class */ (function (_super) {
        __extends(Mtcnn, _super);
        function Mtcnn() {
            return _super.call(this, 'Mtcnn') || this;
        }
        Mtcnn.prototype.forwardInput = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            params = this.params;
                            if (!params) {
                                throw new Error('Mtcnn - load model before inference');
                            }
                            inputCanvas = input.canvases[0];
                            if (!inputCanvas) {
                                throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
                            }
                            stats = {};
                            tsTotal = Date.now();
                            imgTensor = Ue(function () {
                                return bgrToRgbTensor(ir(ap.fromPixels(inputCanvas)).toFloat());
                            });
                            onReturn = function (results) {
                                // dispose tensors on return
                                imgTensor.dispose();
                                stats.total = Date.now() - tsTotal;
                                return results;
                            };
                            _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            _b = new MtcnnOptions(forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
                            scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width]))
                                .filter(function (scale) {
                                var sizes = getSizesForScale(scale, [height, width]);
                                return Math.min(sizes.width, sizes.height) > CELL_SIZE;
                            })
                                .slice(0, maxNumScales);
                            stats.scales = scales;
                            stats.pyramid = scales.map(function (scale) { return getSizesForScale(scale, [height, width]); });
                            ts = Date.now();
                            return [4 /*yield*/, stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];
                        case 1:
                            out1 = _c.sent();
                            stats.total_stage1 = Date.now() - ts;
                            if (!out1.boxes.length) {
                                return [2 /*return*/, onReturn({ results: [], stats: stats })];
                            }
                            stats.stage2_numInputBoxes = out1.boxes.length;
                            // using the inputCanvas to extract and resize the image patches, since it is faster
                            // than doing this on the gpu
                            ts = Date.now();
                            return [4 /*yield*/, stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];
                        case 2:
                            out2 = _c.sent();
                            stats.total_stage2 = Date.now() - ts;
                            if (!out2.boxes.length) {
                                return [2 /*return*/, onReturn({ results: [], stats: stats })];
                            }
                            stats.stage3_numInputBoxes = out2.boxes.length;
                            ts = Date.now();
                            return [4 /*yield*/, stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];
                        case 3:
                            out3 = _c.sent();
                            stats.total_stage3 = Date.now() - ts;
                            results = out3.boxes.map(function (box, idx) { return extendWithFaceLandmarks(extendWithFaceDetection({}, new FaceDetection(out3.scores[idx], new Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                                height: height,
                                width: width
                            })), new FaceLandmarks5(out3.points[idx].map(function (pt) { return pt.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height)); }), { width: box.width, height: box.height })); });
                            return [2 /*return*/, onReturn({ results: results, stats: stats })];
                    }
                });
            });
        };
        Mtcnn.prototype.forward = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(),
                                forwardParams])];
                        case 2: return [2 /*return*/, (_b.sent()).results];
                    }
                });
            });
        };
        Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.forwardInput;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent(),
                                forwardParams])];
                    }
                });
            });
        };
        Mtcnn.prototype.getDefaultModelName = function () {
            return 'mtcnn_model';
        };
        Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return extractParamsFromWeigthMap$7(weightMap);
        };
        Mtcnn.prototype.extractParams = function (weights) {
            return extractParams$7(weights);
        };
        return Mtcnn;
    }(NeuralNetwork));

    var IOU_THRESHOLD = 0.4;
    var BOX_ANCHORS = [
        new Point(1.603231, 2.094468),
        new Point(6.041143, 7.080126),
        new Point(2.882459, 3.518061),
        new Point(4.266906, 5.178857),
        new Point(9.041765, 10.66308)
    ];
    var MEAN_RGB = [117.001, 114.697, 97.404];

    var TinyFaceDetector = /** @class */ (function (_super) {
        __extends(TinyFaceDetector, _super);
        function TinyFaceDetector() {
            var _this = this;
            var config = {
                withSeparableConvs: true,
                iouThreshold: IOU_THRESHOLD,
                classes: ['face'],
                anchors: BOX_ANCHORS,
                meanRgb: MEAN_RGB,
                isFirstLayerConv2d: true,
                filterSizes: [3, 16, 32, 64, 128, 256, 512]
            };
            _this = _super.call(this, config) || this;
            return _this;
        }
        Object.defineProperty(TinyFaceDetector.prototype, "anchors", {
            get: function () {
                return this.config.anchors;
            },
            enumerable: true,
            configurable: true
        });
        TinyFaceDetector.prototype.locateFaces = function (input, forwardParams) {
            return __awaiter(this, void 0, void 0, function () {
                var objectDetections;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                        case 1:
                            objectDetections = _a.sent();
                            return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                    }
                });
            });
        };
        TinyFaceDetector.prototype.getDefaultModelName = function () {
            return 'tiny_face_detector_model';
        };
        TinyFaceDetector.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
        };
        return TinyFaceDetector;
    }(TinyYolov2));

    var IOU_THRESHOLD$1 = 0.4;
    var BOX_ANCHORS$1 = [
        new Point(0.738768, 0.874946),
        new Point(2.42204, 2.65704),
        new Point(4.30971, 7.04493),
        new Point(10.246, 4.59428),
        new Point(12.6868, 11.8741)
    ];
    var BOX_ANCHORS_SEPARABLE = [
        new Point(1.603231, 2.094468),
        new Point(6.041143, 7.080126),
        new Point(2.882459, 3.518061),
        new Point(4.266906, 5.178857),
        new Point(9.041765, 10.66308)
    ];
    var MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
    var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
    var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';

    var TinyYolov2$1 = /** @class */ (function (_super) {
        __extends(TinyYolov2, _super);
        function TinyYolov2(withSeparableConvs) {
            if (withSeparableConvs === void 0) { withSeparableConvs = true; }
            var _this = this;
            var config = Object.assign({}, {
                withSeparableConvs: withSeparableConvs,
                iouThreshold: IOU_THRESHOLD$1,
                classes: ['face']
            }, withSeparableConvs
                ? {
                    anchors: BOX_ANCHORS_SEPARABLE,
                    meanRgb: MEAN_RGB_SEPARABLE
                }
                : {
                    anchors: BOX_ANCHORS$1,
                    withClassScores: true
                });
            _this = _super.call(this, config) || this;
            return _this;
        }
        Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
            get: function () {
                return this.config.withSeparableConvs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2.prototype, "anchors", {
            get: function () {
                return this.config.anchors;
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2.prototype.locateFaces = function (input, forwardParams) {
            return __awaiter(this, void 0, void 0, function () {
                var objectDetections;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                        case 1:
                            objectDetections = _a.sent();
                            return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                    }
                });
            });
        };
        TinyYolov2.prototype.getDefaultModelName = function () {
            return this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME;
        };
        TinyYolov2.prototype.extractParamsFromWeigthMap = function (weightMap) {
            return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
        };
        return TinyYolov2;
    }(TinyYolov2));

    function createTinyYolov2(weights, withSeparableConvs) {
        if (withSeparableConvs === void 0) { withSeparableConvs = true; }
        var net = new TinyYolov2$1(withSeparableConvs);
        net.extractWeights(weights);
        return net;
    }

    var nets = {
        ssdMobilenetv1: new SsdMobilenetv1(),
        tinyFaceDetector: new TinyFaceDetector(),
        tinyYolov2: new TinyYolov2$1(),
        mtcnn: new Mtcnn(),
        faceLandmark68Net: new FaceLandmark68Net(),
        faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
        faceRecognitionNet: new FaceRecognitionNet(),
        faceExpressionNet: new FaceExpressionNet(),
        ageGenderNet: new AgeGenderNet()
    };
    /**
     * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
     *
     * @param input The input image.
     * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
     * @returns Bounding box of each face with score.
     */
    var ssdMobilenetv1 = function (input, options) {
        return nets.ssdMobilenetv1.locateFaces(input, options);
    };
    /**
     * Attempts to detect all faces in an image using the Tiny Face Detector.
     *
     * @param input The input image.
     * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
     * @returns Bounding box of each face with score.
     */
    var tinyFaceDetector = function (input, options) {
        return nets.tinyFaceDetector.locateFaces(input, options);
    };
    /**
     * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
     *
     * @param input The input image.
     * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
     * @returns Bounding box of each face with score.
     */
    var tinyYolov2 = function (input, options) {
        return nets.tinyYolov2.locateFaces(input, options);
    };
    /**
     * Attempts to detect all faces in an image and the 5 point face landmarks
     * of each detected face using the MTCNN Network.
     *
     * @param input The input image.
     * @param options (optional, default: see MtcnnOptions constructor for default parameters).
     * @returns Bounding box of each face with score and 5 point face landmarks.
     */
    var mtcnn = function (input, options) {
        return nets.mtcnn.forward(input, options);
    };
    /**
     * Detects the 68 point face landmark positions of the face shown in an image.
     *
     * @param inputs The face image extracted from the bounding box of a face. Can
     * also be an array of input images, which will be batch processed.
     * @returns 68 point face landmarks or array thereof in case of batch input.
     */
    var detectFaceLandmarks = function (input) {
        return nets.faceLandmark68Net.detectLandmarks(input);
    };
    /**
     * Detects the 68 point face landmark positions of the face shown in an image
     * using a tinier version of the 68 point face landmark model, which is slightly
     * faster at inference, but also slightly less accurate.
     *
     * @param inputs The face image extracted from the bounding box of a face. Can
     * also be an array of input images, which will be batch processed.
     * @returns 68 point face landmarks or array thereof in case of batch input.
     */
    var detectFaceLandmarksTiny = function (input) {
        return nets.faceLandmark68TinyNet.detectLandmarks(input);
    };
    /**
     * Computes a 128 entry vector (face descriptor / face embeddings) from the face shown in an image,
     * which uniquely represents the features of that persons face. The computed face descriptor can
     * be used to measure the similarity between faces, by computing the euclidean distance of two
     * face descriptors.
     *
     * @param inputs The face image extracted from the aligned bounding box of a face. Can
     * also be an array of input images, which will be batch processed.
     * @returns Face descriptor with 128 entries or array thereof in case of batch input.
     */
    var computeFaceDescriptor = function (input) {
        return nets.faceRecognitionNet.computeFaceDescriptor(input);
    };
    /**
     * Recognizes the facial expressions from a face image.
     *
     * @param inputs The face image extracted from the bounding box of a face. Can
     * also be an array of input images, which will be batch processed.
     * @returns Facial expressions with corresponding probabilities or array thereof in case of batch input.
     */
    var recognizeFaceExpressions = function (input) {
        return nets.faceExpressionNet.predictExpressions(input);
    };
    /**
     * Predicts age and gender from a face image.
     *
     * @param inputs The face image extracted from the bounding box of a face. Can
     * also be an array of input images, which will be batch processed.
     * @returns Predictions with age, gender and gender probability or array thereof in case of batch input.
     */
    var predictAgeAndGender = function (input) {
        return nets.ageGenderNet.predictAgeAndGender(input);
    };
    var loadSsdMobilenetv1Model = function (url) { return nets.ssdMobilenetv1.load(url); };
    var loadTinyFaceDetectorModel = function (url) { return nets.tinyFaceDetector.load(url); };
    var loadMtcnnModel = function (url) { return nets.mtcnn.load(url); };
    var loadTinyYolov2Model = function (url) { return nets.tinyYolov2.load(url); };
    var loadFaceLandmarkModel = function (url) { return nets.faceLandmark68Net.load(url); };
    var loadFaceLandmarkTinyModel = function (url) { return nets.faceLandmark68TinyNet.load(url); };
    var loadFaceRecognitionModel = function (url) { return nets.faceRecognitionNet.load(url); };
    var loadFaceExpressionModel = function (url) { return nets.faceExpressionNet.load(url); };
    var loadAgeGenderModel = function (url) { return nets.ageGenderNet.load(url); };
    // backward compatibility
    var loadFaceDetectionModel = loadSsdMobilenetv1Model;
    var locateFaces = ssdMobilenetv1;
    var detectLandmarks = detectFaceLandmarks;

    var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
        __extends(PredictFaceExpressionsTaskBase, _super);
        function PredictFaceExpressionsTaskBase(parentTask, input, extractedFaces) {
            var _this = _super.call(this) || this;
            _this.parentTask = parentTask;
            _this.input = input;
            _this.extractedFaces = extractedFaces;
            return _this;
        }
        return PredictFaceExpressionsTaskBase;
    }(ComposableTask));
    var PredictAllFaceExpressionsTask = /** @class */ (function (_super) {
        __extends(PredictAllFaceExpressionsTask, _super);
        function PredictAllFaceExpressionsTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictAllFaceExpressionsTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResults, faceExpressionsByFace;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResults = _a.sent();
                            return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.faceExpressionNet.predictExpressions(face); }))];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); }, this.extractedFaces)];
                        case 2:
                            faceExpressionsByFace = _a.sent();
                            return [2 /*return*/, parentResults.map(function (parentResult, i) { return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                    }
                });
            });
        };
        PredictAllFaceExpressionsTask.prototype.withAgeAndGender = function () {
            return new PredictAllAgeAndGenderTask(this, this.input);
        };
        return PredictAllFaceExpressionsTask;
    }(PredictFaceExpressionsTaskBase));
    var PredictSingleFaceExpressionsTask = /** @class */ (function (_super) {
        __extends(PredictSingleFaceExpressionsTask, _super);
        function PredictSingleFaceExpressionsTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictSingleFaceExpressionsTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResult, faceExpressions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResult = _a.sent();
                            if (!parentResult) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceExpressionNet.predictExpressions(face); }, this.extractedFaces)];
                        case 2:
                            faceExpressions = _a.sent();
                            return [2 /*return*/, extendWithFaceExpressions(parentResult, faceExpressions)];
                    }
                });
            });
        };
        PredictSingleFaceExpressionsTask.prototype.withAgeAndGender = function () {
            return new PredictSingleAgeAndGenderTask(this, this.input);
        };
        return PredictSingleFaceExpressionsTask;
    }(PredictFaceExpressionsTaskBase));
    var PredictAllFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
        __extends(PredictAllFaceExpressionsWithFaceAlignmentTask, _super);
        function PredictAllFaceExpressionsWithFaceAlignmentTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
            return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
            return new ComputeAllFaceDescriptorsTask(this, this.input);
        };
        return PredictAllFaceExpressionsWithFaceAlignmentTask;
    }(PredictAllFaceExpressionsTask));
    var PredictSingleFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
        __extends(PredictSingleFaceExpressionsWithFaceAlignmentTask, _super);
        function PredictSingleFaceExpressionsWithFaceAlignmentTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
            return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
            return new ComputeSingleFaceDescriptorTask(this, this.input);
        };
        return PredictSingleFaceExpressionsWithFaceAlignmentTask;
    }(PredictSingleFaceExpressionsTask));

    var PredictAgeAndGenderTaskBase = /** @class */ (function (_super) {
        __extends(PredictAgeAndGenderTaskBase, _super);
        function PredictAgeAndGenderTaskBase(parentTask, input, extractedFaces) {
            var _this = _super.call(this) || this;
            _this.parentTask = parentTask;
            _this.input = input;
            _this.extractedFaces = extractedFaces;
            return _this;
        }
        return PredictAgeAndGenderTaskBase;
    }(ComposableTask));
    var PredictAllAgeAndGenderTask = /** @class */ (function (_super) {
        __extends(PredictAllAgeAndGenderTask, _super);
        function PredictAllAgeAndGenderTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictAllAgeAndGenderTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResults, ageAndGenderByFace;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResults = _a.sent();
                            return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }))];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); }, this.extractedFaces)];
                        case 2:
                            ageAndGenderByFace = _a.sent();
                            return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                    var _a = ageAndGenderByFace[i], age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                                    return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age);
                                })];
                    }
                });
            });
        };
        PredictAllAgeAndGenderTask.prototype.withFaceExpressions = function () {
            return new PredictAllFaceExpressionsTask(this, this.input);
        };
        return PredictAllAgeAndGenderTask;
    }(PredictAgeAndGenderTaskBase));
    var PredictSingleAgeAndGenderTask = /** @class */ (function (_super) {
        __extends(PredictSingleAgeAndGenderTask, _super);
        function PredictSingleAgeAndGenderTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictSingleAgeAndGenderTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResult, _a, age, gender, genderProbability;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResult = _b.sent();
                            if (!parentResult) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }, this.extractedFaces)];
                        case 2:
                            _a = _b.sent(), age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                            return [2 /*return*/, extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)];
                    }
                });
            });
        };
        PredictSingleAgeAndGenderTask.prototype.withFaceExpressions = function () {
            return new PredictSingleFaceExpressionsTask(this, this.input);
        };
        return PredictSingleAgeAndGenderTask;
    }(PredictAgeAndGenderTaskBase));
    var PredictAllAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
        __extends(PredictAllAgeAndGenderWithFaceAlignmentTask, _super);
        function PredictAllAgeAndGenderWithFaceAlignmentTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
            return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
            return new ComputeAllFaceDescriptorsTask(this, this.input);
        };
        return PredictAllAgeAndGenderWithFaceAlignmentTask;
    }(PredictAllAgeAndGenderTask));
    var PredictSingleAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
        __extends(PredictSingleAgeAndGenderWithFaceAlignmentTask, _super);
        function PredictSingleAgeAndGenderWithFaceAlignmentTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
            return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
            return new ComputeSingleFaceDescriptorTask(this, this.input);
        };
        return PredictSingleAgeAndGenderWithFaceAlignmentTask;
    }(PredictSingleAgeAndGenderTask));

    var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
        __extends(ComputeFaceDescriptorsTaskBase, _super);
        function ComputeFaceDescriptorsTaskBase(parentTask, input) {
            var _this = _super.call(this) || this;
            _this.parentTask = parentTask;
            _this.input = input;
            return _this;
        }
        return ComputeFaceDescriptorsTaskBase;
    }(ComposableTask));
    var ComputeAllFaceDescriptorsTask = /** @class */ (function (_super) {
        __extends(ComputeAllFaceDescriptorsTask, _super);
        function ComputeAllFaceDescriptorsTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComputeAllFaceDescriptorsTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResults, descriptors;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResults = _a.sent();
                            return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return Promise.all(faces.map(function (face) {
                                    return nets.faceRecognitionNet.computeFaceDescriptor(face);
                                })); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                        case 2:
                            descriptors = _a.sent();
                            return [2 /*return*/, descriptors.map(function (descriptor, i) { return extendWithFaceDescriptor(parentResults[i], descriptor); })];
                    }
                });
            });
        };
        ComputeAllFaceDescriptorsTask.prototype.withFaceExpressions = function () {
            return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        ComputeAllFaceDescriptorsTask.prototype.withAgeAndGender = function () {
            return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        return ComputeAllFaceDescriptorsTask;
    }(ComputeFaceDescriptorsTaskBase));
    var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
        __extends(ComputeSingleFaceDescriptorTask, _super);
        function ComputeSingleFaceDescriptorTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComputeSingleFaceDescriptorTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResult, descriptor;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResult = _a.sent();
                            if (!parentResult) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceRecognitionNet.computeFaceDescriptor(face); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                        case 2:
                            descriptor = _a.sent();
                            return [2 /*return*/, extendWithFaceDescriptor(parentResult, descriptor)];
                    }
                });
            });
        };
        ComputeSingleFaceDescriptorTask.prototype.withFaceExpressions = function () {
            return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        ComputeSingleFaceDescriptorTask.prototype.withAgeAndGender = function () {
            return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        return ComputeSingleFaceDescriptorTask;
    }(ComputeFaceDescriptorsTaskBase));

    var DetectFaceLandmarksTaskBase = /** @class */ (function (_super) {
        __extends(DetectFaceLandmarksTaskBase, _super);
        function DetectFaceLandmarksTaskBase(parentTask, input, useTinyLandmarkNet) {
            var _this = _super.call(this) || this;
            _this.parentTask = parentTask;
            _this.input = input;
            _this.useTinyLandmarkNet = useTinyLandmarkNet;
            return _this;
        }
        Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
            get: function () {
                return this.useTinyLandmarkNet
                    ? nets.faceLandmark68TinyNet
                    : nets.faceLandmark68Net;
            },
            enumerable: true,
            configurable: true
        });
        return DetectFaceLandmarksTaskBase;
    }(ComposableTask));
    var DetectAllFaceLandmarksTask = /** @class */ (function (_super) {
        __extends(DetectAllFaceLandmarksTask, _super);
        function DetectAllFaceLandmarksTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectAllFaceLandmarksTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResults, detections, faces, _a, faceLandmarksByFace;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResults = _b.sent();
                            detections = parentResults.map(function (res) { return res.detection; });
                            if (!(this.input instanceof ct)) return [3 /*break*/, 3];
                            return [4 /*yield*/, extractFaceTensors(this.input, detections)];
                        case 2:
                            _a = _b.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, extractFaces(this.input, detections)];
                        case 4:
                            _a = _b.sent();
                            _b.label = 5;
                        case 5:
                            faces = _a;
                            return [4 /*yield*/, Promise.all(faces.map(function (face) { return _this.landmarkNet.detectLandmarks(face); }))];
                        case 6:
                            faceLandmarksByFace = _b.sent();
                            faces.forEach(function (f) { return f instanceof ct && f.dispose(); });
                            return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                    return extendWithFaceLandmarks(parentResult, faceLandmarksByFace[i]);
                                })];
                    }
                });
            });
        };
        DetectAllFaceLandmarksTask.prototype.withFaceExpressions = function () {
            return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        DetectAllFaceLandmarksTask.prototype.withAgeAndGender = function () {
            return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
            return new ComputeAllFaceDescriptorsTask(this, this.input);
        };
        return DetectAllFaceLandmarksTask;
    }(DetectFaceLandmarksTaskBase));
    var DetectSingleFaceLandmarksTask = /** @class */ (function (_super) {
        __extends(DetectSingleFaceLandmarksTask, _super);
        function DetectSingleFaceLandmarksTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectSingleFaceLandmarksTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var parentResult, detection, faces, _a, landmarks;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.parentTask];
                        case 1:
                            parentResult = _b.sent();
                            if (!parentResult) {
                                return [2 /*return*/];
                            }
                            detection = parentResult.detection;
                            if (!(this.input instanceof ct)) return [3 /*break*/, 3];
                            return [4 /*yield*/, extractFaceTensors(this.input, [detection])];
                        case 2:
                            _a = _b.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, extractFaces(this.input, [detection])];
                        case 4:
                            _a = _b.sent();
                            _b.label = 5;
                        case 5:
                            faces = _a;
                            return [4 /*yield*/, this.landmarkNet.detectLandmarks(faces[0])];
                        case 6:
                            landmarks = _b.sent();
                            faces.forEach(function (f) { return f instanceof ct && f.dispose(); });
                            return [2 /*return*/, extendWithFaceLandmarks(parentResult, landmarks)];
                    }
                });
            });
        };
        DetectSingleFaceLandmarksTask.prototype.withFaceExpressions = function () {
            return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
        };
        DetectSingleFaceLandmarksTask.prototype.withAgeAndGender = function () {
            return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
        };
        DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
            return new ComputeSingleFaceDescriptorTask(this, this.input);
        };
        return DetectSingleFaceLandmarksTask;
    }(DetectFaceLandmarksTaskBase));

    var DetectFacesTaskBase = /** @class */ (function (_super) {
        __extends(DetectFacesTaskBase, _super);
        function DetectFacesTaskBase(input, options) {
            if (options === void 0) { options = new SsdMobilenetv1Options(); }
            var _this = _super.call(this) || this;
            _this.input = input;
            _this.options = options;
            return _this;
        }
        return DetectFacesTaskBase;
    }(ComposableTask));
    var DetectAllFacesTask = /** @class */ (function (_super) {
        __extends(DetectAllFacesTask, _super);
        function DetectAllFacesTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectAllFacesTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, input, options, faceDetectionFunction;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, input = _a.input, options = _a.options;
                            if (!(options instanceof MtcnnOptions)) return [3 /*break*/, 2];
                            return [4 /*yield*/, nets.mtcnn.forward(input, options)];
                        case 1: return [2 /*return*/, (_b.sent())
                                .map(function (result) { return result.detection; })];
                        case 2:
                            faceDetectionFunction = options instanceof TinyFaceDetectorOptions
                                ? function (input) { return nets.tinyFaceDetector.locateFaces(input, options); }
                                : (options instanceof SsdMobilenetv1Options
                                    ? function (input) { return nets.ssdMobilenetv1.locateFaces(input, options); }
                                    : (options instanceof TinyYolov2Options
                                        ? function (input) { return nets.tinyYolov2.locateFaces(input, options); }
                                        : null));
                            if (!faceDetectionFunction) {
                                throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
                            }
                            return [2 /*return*/, faceDetectionFunction(input)];
                    }
                });
            });
        };
        DetectAllFacesTask.prototype.runAndExtendWithFaceDetections = function () {
            var _this = this;
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var detections;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.run()];
                        case 1:
                            detections = _a.sent();
                            return [2 /*return*/, res(detections.map(function (detection) { return extendWithFaceDetection({}, detection); }))];
                    }
                });
            }); });
        };
        DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
            if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
            return new DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
        };
        DetectAllFacesTask.prototype.withFaceExpressions = function () {
            return new PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
        };
        DetectAllFacesTask.prototype.withAgeAndGender = function () {
            return new PredictAllAgeAndGenderTask(this.runAndExtendWithFaceDetections(), this.input);
        };
        return DetectAllFacesTask;
    }(DetectFacesTaskBase));
    var DetectSingleFaceTask = /** @class */ (function (_super) {
        __extends(DetectSingleFaceTask, _super);
        function DetectSingleFaceTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectSingleFaceTask.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var faceDetections, faceDetectionWithHighestScore;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new DetectAllFacesTask(this.input, this.options)];
                        case 1:
                            faceDetections = _a.sent();
                            faceDetectionWithHighestScore = faceDetections[0];
                            faceDetections.forEach(function (faceDetection) {
                                if (faceDetection.score > faceDetectionWithHighestScore.score) {
                                    faceDetectionWithHighestScore = faceDetection;
                                }
                            });
                            return [2 /*return*/, faceDetectionWithHighestScore];
                    }
                });
            });
        };
        DetectSingleFaceTask.prototype.runAndExtendWithFaceDetection = function () {
            var _this = this;
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var detection;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.run()];
                        case 1:
                            detection = _a.sent();
                            return [2 /*return*/, res(detection ? extendWithFaceDetection({}, detection) : undefined)];
                    }
                });
            }); });
        };
        DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
            if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
            return new DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
        };
        DetectSingleFaceTask.prototype.withFaceExpressions = function () {
            return new PredictSingleFaceExpressionsTask(this.runAndExtendWithFaceDetection(), this.input);
        };
        DetectSingleFaceTask.prototype.withAgeAndGender = function () {
            return new PredictSingleAgeAndGenderTask(this.runAndExtendWithFaceDetection(), this.input);
        };
        return DetectSingleFaceTask;
    }(DetectFacesTaskBase));

    function detectSingleFace(input, options) {
        if (options === void 0) { options = new SsdMobilenetv1Options(); }
        return new DetectSingleFaceTask(input, options);
    }
    function detectAllFaces(input, options) {
        if (options === void 0) { options = new SsdMobilenetv1Options(); }
        return new DetectAllFacesTask(input, options);
    }

    // export allFaces API for backward compatibility
    function allFacesSsdMobilenetv1(input, minConfidence) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence: minConfidence } : {}))
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function allFacesTinyYolov2(input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new TinyYolov2Options(forwardParams))
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function allFacesMtcnn(input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new MtcnnOptions(forwardParams))
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    var allFaces = allFacesSsdMobilenetv1;

    function euclideanDistance(arr1, arr2) {
        if (arr1.length !== arr2.length)
            throw new Error('euclideanDistance: arr1.length !== arr2.length');
        var desc1 = Array.from(arr1);
        var desc2 = Array.from(arr2);
        return Math.sqrt(desc1
            .map(function (val, i) { return val - desc2[i]; })
            .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
    }

    var FaceMatcher = /** @class */ (function () {
        function FaceMatcher(inputs, distanceThreshold) {
            if (distanceThreshold === void 0) { distanceThreshold = 0.6; }
            this._distanceThreshold = distanceThreshold;
            var inputArray = Array.isArray(inputs) ? inputs : [inputs];
            if (!inputArray.length) {
                throw new Error("FaceRecognizer.constructor - expected atleast one input");
            }
            var count = 1;
            var createUniqueLabel = function () { return "person " + count++; };
            this._labeledDescriptors = inputArray.map(function (desc) {
                if (desc instanceof LabeledFaceDescriptors) {
                    return desc;
                }
                if (desc instanceof Float32Array) {
                    return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
                }
                if (desc.descriptor && desc.descriptor instanceof Float32Array) {
                    return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
                }
                throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
            });
        }
        Object.defineProperty(FaceMatcher.prototype, "labeledDescriptors", {
            get: function () { return this._labeledDescriptors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceMatcher.prototype, "distanceThreshold", {
            get: function () { return this._distanceThreshold; },
            enumerable: true,
            configurable: true
        });
        FaceMatcher.prototype.computeMeanDistance = function (queryDescriptor, descriptors) {
            return descriptors
                .map(function (d) { return euclideanDistance(d, queryDescriptor); })
                .reduce(function (d1, d2) { return d1 + d2; }, 0)
                / (descriptors.length || 1);
        };
        FaceMatcher.prototype.matchDescriptor = function (queryDescriptor) {
            var _this = this;
            return this.labeledDescriptors
                .map(function (_a) {
                var descriptors = _a.descriptors, label = _a.label;
                return new FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
            })
                .reduce(function (best, curr) { return best.distance < curr.distance ? best : curr; });
        };
        FaceMatcher.prototype.findBestMatch = function (queryDescriptor) {
            var bestMatch = this.matchDescriptor(queryDescriptor);
            return bestMatch.distance < this.distanceThreshold
                ? bestMatch
                : new FaceMatch('unknown', bestMatch.distance);
        };
        FaceMatcher.prototype.toJSON = function () {
            return {
                distanceThreshold: this.distanceThreshold,
                labeledDescriptors: this.labeledDescriptors.map(function (ld) { return ld.toJSON(); })
            };
        };
        FaceMatcher.fromJSON = function (json) {
            var labeledDescriptors = json.labeledDescriptors
                .map(function (ld) { return LabeledFaceDescriptors.fromJSON(ld); });
            return new FaceMatcher(labeledDescriptors, json.distanceThreshold);
        };
        return FaceMatcher;
    }());

    function createMtcnn(weights) {
        var net = new Mtcnn();
        net.extractWeights(weights);
        return net;
    }

    function createTinyFaceDetector(weights) {
        var net = new TinyFaceDetector();
        net.extractWeights(weights);
        return net;
    }

    function resizeResults(results, dimensions) {
        var _a = new Dimensions(dimensions.width, dimensions.height), width = _a.width, height = _a.height;
        if (width <= 0 || height <= 0) {
            throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({ width: width, height: height }));
        }
        if (Array.isArray(results)) {
            return results.map(function (obj) { return resizeResults(obj, { width: width, height: height }); });
        }
        if (isWithFaceLandmarks(results)) {
            var resizedDetection = results.detection.forSize(width, height);
            var resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
            return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
        }
        if (isWithFaceDetection(results)) {
            return extendWithFaceDetection(results, results.detection.forSize(width, height));
        }
        if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
            return results.forSize(width, height);
        }
        return results;
    }

    var draw = __assign(__assign({}, drawBase), drawExtended);

    exports.AgeGenderNet = AgeGenderNet;
    exports.BoundingBox = BoundingBox;
    exports.Box = Box;
    exports.ComposableTask = ComposableTask;
    exports.ComputeAllFaceDescriptorsTask = ComputeAllFaceDescriptorsTask;
    exports.ComputeFaceDescriptorsTaskBase = ComputeFaceDescriptorsTaskBase;
    exports.ComputeSingleFaceDescriptorTask = ComputeSingleFaceDescriptorTask;
    exports.DetectAllFaceLandmarksTask = DetectAllFaceLandmarksTask;
    exports.DetectAllFacesTask = DetectAllFacesTask;
    exports.DetectFaceLandmarksTaskBase = DetectFaceLandmarksTaskBase;
    exports.DetectFacesTaskBase = DetectFacesTaskBase;
    exports.DetectSingleFaceLandmarksTask = DetectSingleFaceLandmarksTask;
    exports.DetectSingleFaceTask = DetectSingleFaceTask;
    exports.Dimensions = Dimensions;
    exports.FACE_EXPRESSION_LABELS = FACE_EXPRESSION_LABELS;
    exports.FaceDetection = FaceDetection;
    exports.FaceDetectionNet = FaceDetectionNet;
    exports.FaceExpressionNet = FaceExpressionNet;
    exports.FaceExpressions = FaceExpressions;
    exports.FaceLandmark68Net = FaceLandmark68Net;
    exports.FaceLandmark68TinyNet = FaceLandmark68TinyNet;
    exports.FaceLandmarkNet = FaceLandmarkNet;
    exports.FaceLandmarks = FaceLandmarks;
    exports.FaceLandmarks5 = FaceLandmarks5;
    exports.FaceLandmarks68 = FaceLandmarks68;
    exports.FaceMatch = FaceMatch;
    exports.FaceMatcher = FaceMatcher;
    exports.FaceRecognitionNet = FaceRecognitionNet;
    exports.LabeledBox = LabeledBox;
    exports.LabeledFaceDescriptors = LabeledFaceDescriptors;
    exports.Mtcnn = Mtcnn;
    exports.MtcnnOptions = MtcnnOptions;
    exports.NetInput = NetInput;
    exports.NeuralNetwork = NeuralNetwork;
    exports.ObjectDetection = ObjectDetection;
    exports.Point = Point;
    exports.PredictedBox = PredictedBox;
    exports.Rect = Rect;
    exports.SsdMobilenetv1 = SsdMobilenetv1;
    exports.SsdMobilenetv1Options = SsdMobilenetv1Options;
    exports.TfjsImageRecognitionBase = tfjsImageRecognitionBase;
    exports.TinyFaceDetector = TinyFaceDetector;
    exports.TinyFaceDetectorOptions = TinyFaceDetectorOptions;
    exports.TinyYolov2 = TinyYolov2$1;
    exports.allFaces = allFaces;
    exports.allFacesMtcnn = allFacesMtcnn;
    exports.allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1;
    exports.allFacesTinyYolov2 = allFacesTinyYolov2;
    exports.awaitMediaLoaded = awaitMediaLoaded;
    exports.bufferToImage = bufferToImage;
    exports.computeFaceDescriptor = computeFaceDescriptor;
    exports.computeReshapedDimensions = computeReshapedDimensions;
    exports.createCanvas = createCanvas;
    exports.createCanvasFromMedia = createCanvasFromMedia;
    exports.createFaceDetectionNet = createFaceDetectionNet;
    exports.createFaceRecognitionNet = createFaceRecognitionNet;
    exports.createMtcnn = createMtcnn;
    exports.createSsdMobilenetv1 = createSsdMobilenetv1;
    exports.createTinyFaceDetector = createTinyFaceDetector;
    exports.createTinyYolov2 = createTinyYolov2;
    exports.detectAllFaces = detectAllFaces;
    exports.detectFaceLandmarks = detectFaceLandmarks;
    exports.detectFaceLandmarksTiny = detectFaceLandmarksTiny;
    exports.detectLandmarks = detectLandmarks;
    exports.detectSingleFace = detectSingleFace;
    exports.draw = draw;
    exports.env = env;
    exports.euclideanDistance = euclideanDistance;
    exports.extendWithAge = extendWithAge;
    exports.extendWithFaceDescriptor = extendWithFaceDescriptor;
    exports.extendWithFaceDetection = extendWithFaceDetection;
    exports.extendWithFaceExpressions = extendWithFaceExpressions;
    exports.extendWithFaceLandmarks = extendWithFaceLandmarks;
    exports.extendWithGender = extendWithGender;
    exports.extractFaceTensors = extractFaceTensors;
    exports.extractFaces = extractFaces;
    exports.fetchImage = fetchImage;
    exports.fetchJson = fetchJson;
    exports.fetchNetWeights = fetchNetWeights;
    exports.fetchOrThrow = fetchOrThrow;
    exports.getCenterPoint = getCenterPoint;
    exports.getContext2dOrThrow = getContext2dOrThrow;
    exports.getMediaDimensions = getMediaDimensions;
    exports.imageTensorToCanvas = imageTensorToCanvas;
    exports.imageToSquare = imageToSquare;
    exports.inverseSigmoid = inverseSigmoid;
    exports.iou = iou;
    exports.isDimensions = isDimensions;
    exports.isEven = isEven;
    exports.isFloat = isFloat;
    exports.isMediaElement = isMediaElement;
    exports.isMediaLoaded = isMediaLoaded;
    exports.isTensor = isTensor;
    exports.isTensor1D = isTensor1D;
    exports.isTensor2D = isTensor2D;
    exports.isTensor3D = isTensor3D;
    exports.isTensor4D = isTensor4D;
    exports.isValidNumber = isValidNumber;
    exports.isValidProbablitiy = isValidProbablitiy;
    exports.isWithAge = isWithAge;
    exports.isWithFaceDetection = isWithFaceDetection;
    exports.isWithFaceExpressions = isWithFaceExpressions;
    exports.isWithFaceLandmarks = isWithFaceLandmarks;
    exports.isWithGender = isWithGender;
    exports.loadAgeGenderModel = loadAgeGenderModel;
    exports.loadFaceDetectionModel = loadFaceDetectionModel;
    exports.loadFaceExpressionModel = loadFaceExpressionModel;
    exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
    exports.loadFaceLandmarkTinyModel = loadFaceLandmarkTinyModel;
    exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
    exports.loadMtcnnModel = loadMtcnnModel;
    exports.loadSsdMobilenetv1Model = loadSsdMobilenetv1Model;
    exports.loadTinyFaceDetectorModel = loadTinyFaceDetectorModel;
    exports.loadTinyYolov2Model = loadTinyYolov2Model;
    exports.loadWeightMap = loadWeightMap;
    exports.locateFaces = locateFaces;
    exports.matchDimensions = matchDimensions;
    exports.minBbox = minBbox;
    exports.mtcnn = mtcnn;
    exports.nets = nets;
    exports.nonMaxSuppression = nonMaxSuppression;
    exports.normalize = normalize;
    exports.padToSquare = padToSquare;
    exports.predictAgeAndGender = predictAgeAndGender;
    exports.range = range;
    exports.recognizeFaceExpressions = recognizeFaceExpressions;
    exports.resizeResults = resizeResults;
    exports.resolveInput = resolveInput;
    exports.round = round;
    exports.shuffleArray = shuffleArray;
    exports.sigmoid = sigmoid;
    exports.ssdMobilenetv1 = ssdMobilenetv1;
    exports.tf = tfCore_esm;
    exports.tinyFaceDetector = tinyFaceDetector;
    exports.tinyYolov2 = tinyYolov2;
    exports.toNetInput = toNetInput;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=face-api.js.map
