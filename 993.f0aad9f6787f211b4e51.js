(()=>{var e={5993:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return a(e,arguments,f(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)})(e)}function a(e,t,r){return(a=u()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){if(!(e=Object.assign({wavBitDepth:16,numberOfChannels:1},e)).wavSampleRate)throw new Error("wavSampleRate value is required to record. NOTE: Audio is not resampled!");if(-1===[8,16,24,32].indexOf(e.wavBitDepth))throw new Error("Only 8, 16, 24 and 32 bits per sample are supported");this.numberOfChannels=e.numberOfChannels,this.bitDepth=e.wavBitDepth,this.sampleRate=e.wavSampleRate,this.recordedBuffers=[],this.bytesPerSample=this.bitDepth/8};if(l.prototype.record=function(e){for(var t=e[0].length,r=new Uint8Array(t*this.numberOfChannels*this.bytesPerSample),n=0;n<t;n++)for(var o=0;o<this.numberOfChannels;o++){var s=(n*this.numberOfChannels+o)*this.bytesPerSample,i=Math.max(-1,Math.min(1,e[o][n]));switch(this.bytesPerSample){case 4:i=2147483647.5*i-.5,r[s]=i,r[s+1]=i>>8,r[s+2]=i>>16,r[s+3]=i>>24;break;case 3:i=8388607.5*i-.5,r[s]=i,r[s+1]=i>>8,r[s+2]=i>>16;break;case 2:i=32767.5*i-.5,r[s]=i,r[s+1]=i>>8;break;case 1:r[s]=127.5*(i+1);break;default:throw new Error("Only 8, 16, 24 and 32 bits per sample are supported")}}this.recordedBuffers.push(r)},l.prototype.requestData=function(){var e=this.recordedBuffers[0].length,t=this.recordedBuffers.length*e,r=new Uint8Array(44+t),n=new DataView(r.buffer);n.setUint32(0,1380533830,!1),n.setUint32(4,36+t,!0),n.setUint32(8,1463899717,!1),n.setUint32(12,1718449184,!1),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,this.numberOfChannels,!0),n.setUint32(24,this.sampleRate,!0),n.setUint32(28,this.sampleRate*this.bytesPerSample*this.numberOfChannels,!0),n.setUint16(32,this.bytesPerSample*this.numberOfChannels,!0),n.setUint16(34,this.bitDepth,!0),n.setUint32(36,1684108385,!1),n.setUint32(40,t,!0);for(var o=0;o<this.recordedBuffers.length;o++)r.set(this.recordedBuffers[o],o*e+44);return{message:"page",page:r}},"function"==typeof registerProcessor){var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var t,r,n,i,a=(t=p,r=u(),function(){var e,n=f(t);if(r){var o=f(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return s(this,e)});function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=a.call(this)).continueProcess=!0,e.port.onmessage=function(t){var r=t.data;switch(r.command){case"done":e.recorder&&(e.postPage(e.recorder.requestData()),e.port.postMessage({message:"done"}),delete e.recorder);break;case"close":e.continueProcess=!1;break;case"init":e.recorder=new l(r),e.port.postMessage({message:"ready"})}},e}return n=p,(i=[{key:"process",value:function(e){return this.recorder&&e[0]&&e[0].length&&e[0][0]&&e[0][0].length&&this.recorder.record(e[0]),this.continueProcess}},{key:"postPage",value:function(e){e&&this.port.postMessage(e,[e.page.buffer])}}])&&o(n.prototype,i),p}(i(AudioWorkletProcessor));registerProcessor("encoder-worklet",p)}else{var h;onmessage=function(e){var t,r=e.data;switch(r.command){case"encode":h&&h.record(r.buffers);break;case"done":h&&((t=h.requestData())&&postMessage(t,[t.page.buffer]),postMessage({message:"done"}),h=null);break;case"close":close();break;case"init":h=new l(r),postMessage({message:"ready"})}}}(e=e||{}).exports=l}])}},t={};!function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(5993)})();
//# sourceMappingURL=993.f0aad9f6787f211b4e51.js.map