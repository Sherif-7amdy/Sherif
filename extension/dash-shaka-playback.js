!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Clappr")):"function"==typeof define&&define.amd?define(["Clappr"],e):"object"==typeof exports?exports.DashShakaPlayback=e(require("Clappr")):t.DashShakaPlayback=e(t.Clappr)}(this,function(t){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t,e,i){for(var n=!0;n;){var r=t,s=e,a=i;n=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,s);if(void 0!==o){if("value"in o)return o.value;var u=o.get;if(void 0===u)return;return u.call(a)}var h=Object.getPrototypeOf(r);if(null===h)return;t=h,e=s,i=a,n=!0,o=h=void 0}},u=i(2),h=i(1),c=n(h),l=3e4,f=-1,d="shaka:ready",p=function(t){function e(t){r(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this._levels=[],t.autoPlay&&this.play()}return s(e,t),a(e,[{key:"name",get:function(){return"dash_shaka_playback"}},{key:"shakaVersion",get:function(){return c["default"].player.Player.version}},{key:"levels",get:function(){return this._levels}},{key:"currentLevel",set:function(t){var e=this;this._currentLevelId=t;var i=this._currentLevelId===f;this._player.configure({abr:{enable:!i}}),this.trigger(u.Events.PLAYBACK_LEVEL_SWITCH_START),i||this.selectTrack(this.videoTracks.filter(function(t){return t.id===e._currentLevelId})[0]),this.trigger(u.Events.PLAYBACK_LEVEL_SWITCH_END)},get:function(){return this._currentLevelId||f}}]),a(e,[{key:"play",value:function(){return!this._player&&this._setup(),this.isReady?(this._src=this.el.src,void o(Object.getPrototypeOf(e.prototype),"play",this).call(this)):void this.once(d,this.play)}},{key:"setupSrc",value:function(){}},{key:"_ready",value:function(){}},{key:"error",value:function(t){u.Log.error("an error was raised by the video tag",t,this.el.error)}},{key:"isHighDefinitionInUse",value:function(){return!!this.highDefinition}},{key:"stop",value:function(){var t=this;clearInterval(this.sendStatsId),this._sendStats(),this._player.unload().then(function(){o(Object.getPrototypeOf(e.prototype),"stop",t).call(t),t._player=null,t._isShakaReadyState=!1})["catch"](function(){u.Log.error("shaka could not be unloaded")})}},{key:"getPlaybackType",value:function(){return(this._player&&this._player.isLive()?"live":"vod")||""}},{key:"selectTrack",value:function(t){this._player.selectTrack(t),this._onAdaptation()}},{key:"destroy",value:function(){var t=this;clearInterval(this.sendStatsId),this._player?this._destroy():this._player.destroy().then(function(){return t._destroy()})["catch"](function(){t._destroy(),u.Log.error("shaka could not be destroyed")})}},{key:"_setup",value:function(){var t=this;this._isShakaReadyState=!1,this._player=this._createPlayer(),this._options.shakaConfiguration&&this._player.configure(this._options.shakaConfiguration),this._options.shakaOnBeforeLoad&&this._options.shakaOnBeforeLoad(this._player);var e=this._player.load(this._options.src);e.then(function(){return t._loaded()})["catch"](function(e){return t._setupError(e)})}},{key:"_createPlayer",value:function(){var t=this,e=new c["default"].Player(this.el);return e.addEventListener("error",function(e,i){return t._error(e,i)}),e.addEventListener("adaptation",function(){return t._onAdaptation()}),e.addEventListener("buffering",function(e){return t._onBuffering(e)}),e}},{key:"_onBuffering",value:function(t){var e=t.buffering?u.Events.PLAYBACK_BUFFERING:u.Events.PLAYBACK_BUFFERFULL;this.trigger(e)}},{key:"_loaded",value:function(){this._isShakaReadyState=!0,this.trigger(d),this._shakaReady(),this._startToSendStats(),this._fillLevels()}},{key:"_fillLevels",value:function(){0===this._levels.length&&(this._levels=this.videoTracks.map(function(t){return{id:t.id,label:t.height+"p"}}).reverse(),this.trigger(u.Events.PLAYBACK_LEVELS_AVAILABLE,this.levels))}},{key:"_startToSendStats",value:function(){var t=this;this.sendStatsId=setInterval(function(){return t._sendStats()},l)}},{key:"_sendStats",value:function(){this.trigger(u.Events.PLAYBACK_STATS_ADD,this._player.getStats())}},{key:"_setupError",value:function(t){this._error("error",{detail:t.detail})}},{key:"_error",value:function(t,i){u.Log.error("an error was raised support=",e.support),u.Log.error("an error was raised by shaka player",i.detail),this.trigger(u.Events.PLAYBACK_ERROR,i.detail,this.name)}},{key:"_onAdaptation",value:function(){var t=this.videoTracks.filter(function(t){return t.active===!0})[0];this._fillLevels(),u.Log.debug("an adaptation has happened:",t),this.highDefinition=t.height>=720,this.trigger(u.Events.PLAYBACK_HIGHDEFINITIONUPDATE,this.highDefinition),this.trigger(u.Events.PLAYBACK_BITRATE,{bandwidth:t.bandwidth,width:t.width,height:t.height,level:t.id})}},{key:"_destroy",value:function(){o(Object.getPrototypeOf(e.prototype),"destroy",this).call(this),this._isShakaReadyState=!1,u.Log.debug("shaka was destroyed")}},{key:"_shakaReady",value:function(){o(Object.getPrototypeOf(e.prototype),"_ready",this).call(this)}},{key:"isReady",get:function(){return this._isShakaReadyState}},{key:"textTracks",get:function(){return this._player&&this._player.getTracks().filter(function(t){return"text"===t.type})}},{key:"audioTracks",get:function(){return this._player&&this._player.getTracks().filter(function(t){return"audio"===t.type})}},{key:"videoTracks",get:function(){return this._player&&this._player.getTracks().filter(function(t){return"video"===t.type})}}]),e}(u.HTML5Video);e["default"]=p,p.canPlay=function(t){var e=arguments.length<=1||void 0===arguments[1]?"":arguments[1];c["default"].polyfill.installAll();var i=c["default"].Player.isBrowserSupported(),n=t.split("?")[0].match(/.*\.(.*)$/)||[];return i&&("mpd"===n[1]||e.indexOf("application/dash+xml")>-1)},t.exports=e["default"]},function(t,e,i){var n;!function(){var r={};(function(t){function e(t,e){var i=t.split("."),n=ts;i[0]in n||!n.execScript||n.execScript("var "+i[0]);for(var r;i.length&&(r=i.shift());)i.length||void 0===e?n=n[r]?n[r]:n[r]={}:n[r]=e}function i(t){function e(){}var i=_;e.prototype=i.prototype,t.qd=i.prototype,t.prototype=new e,t.prototype.constructor=t,t.nd=function(t,e,n){return i.prototype[e].apply(t,Array.prototype.slice.call(arguments,2))}}function n(t){this.c=Math.exp(Math.log(.5)/t),this.b=this.a=0}function r(t,e,i){var n=Math.pow(t.c,e);i=i*(1-n)+n*t.a,isNaN(i)||(t.a=i,t.b+=e)}function s(t){return t.a/(1-Math.pow(t.c,t.b))}function a(){this.c=new n(2),this.f=new n(5),this.a=0,this.b=5e5}function o(){}function u(){}function h(){this.h=null,this.f=!1,this.b=new a,this.g={},this.a={},this.i=!1,this.c=null}function c(t){return(t=t.g.audio)?(t=f(t),t[Math.floor(t.length/2)]):null}function l(t){var e=t.g.video;if(!e)return null;var e=f(e),i=t.a.audio,i=i&&i.bandwidth||0;t=t.b.getBandwidthEstimate();for(var n=e[0],r=0;r<e.length;++r){var s=e[r];if(s.bandwidth){var a=((r+1<e.length?e[r+1]:{bandwidth:1/0}).bandwidth+i)/.85;t>=(s.bandwidth+i)/.95&&t<=a&&(n=s)}}return n}function f(t){return t.streams.slice(0).filter(function(t){return t.allowedByApplication&&t.allowedByKeySystem}).sort(function(t,e){return t.bandwidth-e.bandwidth})}function d(e,i){var n,r=i||{};for(n in r)this[n]=r[n];this.defaultPrevented=this.cancelable=this.bubbles=!1,this.timeStamp=t.performance&&t.performance.now?t.performance.now():Date.now(),this.type=e,this.isTrusted=!1,this.target=this.currentTarget=null,this.a=!1}function p(t){return JSON.stringify(t,function(t,e){if("manager"!=t&&"function"!=typeof e){if(e instanceof Event||e instanceof d){var i,n={};for(i in e){var r=e[i];r&&"object"==typeof r||i in Event||(n[i]=r)}return n}if(e instanceof TimeRanges)for(n={__type__:"TimeRanges",length:e.length,start:[],end:[]},i=0;i<e.length;++i)n.start.push(e.start(i)),n.end.push(e.end(i));else n="number"==typeof e?isNaN(e)?"NaN":isFinite(e)?e:0>e?"-Infinity":"Infinity":e;return n}})}function m(t){return JSON.parse(t,function(t,e){return"NaN"==e?NaN:"-Infinity"==e?-(1/0):"Infinity"==e?1/0:e&&"object"==typeof e&&"TimeRanges"==e.__type__?b(e):e})}function b(t){return{length:t.length,start:function(e){return t.start[e]},end:function(e){return t.end[e]}}}function y(t,e,i){this.category=t,this.code=e,this.data=Array.prototype.slice.call(arguments,2)}function g(){var t,e,i=new Promise(function(i,n){t=i,e=n});return i.resolve=t,i.reject=e,i}function v(t,e,i,n,r){this.C=t,this.l=e,this.A=i,this.B=n,this.s=r,this.f=this.j=this.h=!1,this.v="",this.a=this.i=null,this.b={video:{},player:{}},this.m=0,this.c={},this.g=null}function w(t){for(var e in t.c){var i=t.c[e];delete t.c[e],i.reject(new y(7,7e3))}}function E(t,e){var i=p(e);t.a.sendMessage("urn:x-cast:com.google.shaka.v2",i,function(){},o)}function T(){this.a={}}function S(){this.a=new T}function k(t,e,i,n){e=new A(e,i,n),t.a.push(i,e)}function P(t){var e,i=t.a,n=[];for(e in i.a)n.push.apply(n,i.a[e]);for(i=0;i<n.length;++i)n[i].la();t.a.a={}}function A(t,e,i){this.target=t,this.type=e,this.a=i,this.target.addEventListener(e,i,!1)}function _(){this.Ba=new T,this.U=this}function I(t,e,i){_.call(this),this.c=t,this.b=e,this.h=this.f=this.g=this.i=this.j=null,this.a=new v(i,this.Vc.bind(this),this.Wc.bind(this),this.Xc.bind(this),this.qb.bind(this)),R(this)}function R(t){t.a.init(),t.h=new S,es.forEach(function(t){k(this.h,this.c,t,this.kd.bind(this))}.bind(t)),ss.forEach(function(t){k(this.h,this.b,t,this.Cc.bind(this))}.bind(t)),t.j={};for(var e in t.c)Object.defineProperty(t.j,e,{configurable:!1,enumerable:!0,get:t.jd.bind(t,e),set:t.ld.bind(t,e)});t.i={};for(e in t.b)Object.defineProperty(t.i,e,{configurable:!1,enumerable:!0,get:t.Bc.bind(t,e)});t.g=new _,t.g.U=t.j,t.f=new _,t.f.U=t.i}function N(t,e,i){_.call(this),this.b=t,this.a=e,this.i={video:t,player:e},this.j=i||function(){},this.h=!1,this.c=!0,this.f=this.g=null,x(this)}function x(e){var i=cast.receiver.CastReceiverManager.getInstance();i.onSenderConnected=e.Ab.bind(e),i.onSenderDisconnected=e.Ab.bind(e),i.onSystemVolumeChanged=e.Xb.bind(e),e.g=i.getCastMessageBus("urn:x-cast:com.google.shaka.v2"),e.g.onMessage=e.mc.bind(e),i.start(),es.forEach(function(t){this.b.addEventListener(t,this.Db.bind(this,"video"))}.bind(e)),ss.forEach(function(t){this.a.addEventListener(t,this.Db.bind(this,"player"))}.bind(e)),cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?e.a.gb(3840,2160):e.a.gb(1920,1080),e.a.addEventListener("loading",function(){this.c=!1,C(this)}.bind(e)),e.b.addEventListener("playing",function(){this.c=!1,C(this)}.bind(e)),e.a.addEventListener("unloading",function(){this.c=!0,C(this)}.bind(e)),e.b.addEventListener("ended",function(){t.setTimeout(function(){this.b&&this.b.ended&&(this.c=!0,C(this))}.bind(this),5e3)}.bind(e))}function C(t){Promise.resolve().then(function(){this.dispatchEvent(new d("caststatuschanged"))}.bind(t))}function M(t,e,i){for(var n in e.player)t.a[n](e.player[n]);t.j(i),i=Promise.resolve();var r=t.b.autoplay;e.manifest&&(t.b.autoplay=!1,i=t.a.load(e.manifest,e.startTime),i["catch"](function(t){this.a.dispatchEvent(new d("error",{detail:t}))}.bind(t))),i.then(function(){for(var t in e.video){var i=e.video[t];this.b[t]=i}for(t in e.playerAfterLoad)i=e.playerAfterLoad[t],this.a[t](i);this.b.autoplay=r,e.manifest&&this.b.play()}.bind(t))}function D(t,e,i){t.h&&(e=p(e),i?t.g.getCastChannel(i).send(e):t.g.broadcast(e))}function O(t,e){return t.reduce(function(t,e,i){return e["catch"](t.bind(null,i))}.bind(null,e),Promise.reject())}function L(t,e){return t.concat(e)}function j(){}function U(t){return null!=t}function B(t){return function(e){return e!=t}}function F(t,e,i){return i.indexOf(t)==e}function K(t){return!t||!Object.keys(t).length}function V(t){return Object.keys(t).map(function(e){return t[e]})}function q(t,e){return Object.keys(t).reduce(function(i,n){return i[n]=e(t[n],n),i},{})}function H(t,e){return Object.keys(t).every(function(i){return e(i,t[i])})}function G(e){return t.btoa(String.fromCharCode.apply(null,e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=*$/,"")}function z(e){e=t.atob(e.replace(/-/g,"+").replace(/_/g,"/"));for(var i=new Uint8Array(e.length),n=0;n<e.length;++n)i[n]=e.charCodeAt(n);return i}function $(e){for(var i=new Uint8Array(e.length/2),n=0;n<e.length;n+=2)i[n/2]=t.parseInt(e.substr(n,2),16);return i}function Y(t){for(var e="",i=0;i<t.length;++i){var n=t[i].toString(16);1==n.length&&(n="0"+n),e+=n}return e}function W(t,e){if(!t&&!e)return!0;if(!t||!e||t.length!=e.length)return!1;for(var i=0;i<t.length;++i)if(t[i]!=e[i])return!1;return!0}function J(t,e){var i=X(t,e);return 1!=i.length?null:i[0]}function X(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return t.tagName==e})}function Q(t){var e=t.firstChild;return e&&e.nodeType==Node.TEXT_NODE?t.textContent.trim():null}function Z(t,e,i,n){var r=null;return t=t.getAttribute(e),null!=t&&(r=i(t)),null==r?void 0!==n?n:null:r}function tt(t){return t?(t=Date.parse(t),isNaN(t)?null:Math.floor(t/1e3)):null}function et(t){return t&&(t=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(t))?(t=31536e3*Number(t[1]||null)+2592e3*Number(t[2]||null)+86400*Number(t[3]||null)+3600*Number(t[4]||null)+60*Number(t[5]||null)+Number(t[6]||null),isFinite(t)?t:null):null}function it(t){var e=/([0-9]+)-([0-9]+)/.exec(t);return e?(t=Number(e[1]),isFinite(t)?(e=Number(e[2]),isFinite(e)?{start:t,end:e}:null):null):null}function nt(t){return t=Number(t),t%1?null:t}function rt(t){return t=Number(t),!(t%1)&&0<t?t:null}function st(t){return t=Number(t),!(t%1)&&0<=t?t:null}function at(t){var e;return t=(e=t.match(/^(\d+)\/(\d+)$/))?Number(e[1]/e[2]):Number(t),isNaN(t)?null:t}function ot(t,e){var i=lt(t),n=null,r=i.filter(function(t){return"urn:mpeg:dash:mp4protection:2011"!=t.Ib||(n=t.init||n,!1)}),s=i.map(function(t){return t.keyId}).filter(U),a=null;if(0<s.length&&(a=s[0],s.some(B(a))))throw new y(4,4010);return s=[],0<r.length?(s=ct(n,e,r),s.length||(s=[ht("",n)])):0<i.length&&(s=V(ls).map(function(t){return ht(t,n)})),{nb:a,od:n,drmInfos:s,pb:!0}}function ut(t,e,i){var n=ot(t,e);if(i.pb)t=1==i.drmInfos.length&&!i.drmInfos[0].keySystem,e=!n.drmInfos.length,(!i.drmInfos.length||t&&!e)&&(i.drmInfos=n.drmInfos),i.pb=!1;else if(0<n.drmInfos.length&&(i.drmInfos=i.drmInfos.filter(function(t){return n.drmInfos.some(function(e){return e.keySystem==t.keySystem})}),!i.drmInfos.length))throw new y(4,4008);return n.nb||i.nb}function ht(t,e){return{keySystem:t,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:e||[],keyIds:[]}}function ct(t,e,i){return i.map(function(i){var n=ls[i.Ib];return n?[ht(n,i.init||t)]:e(i.node)||[]}).reduce(L,[])}function lt(t){return t.map(function(t){var e=t.getAttribute("schemeIdUri"),i=t.getAttribute("cenc:default_KID"),n=X(t,"cenc:pssh").map(Q);if(!e)return null;if(e=e.toLowerCase(),i&&(i=i.replace(/-/g,"").toLowerCase(),0<=i.indexOf(" ")))throw new y(4,4009);var r=[];try{r=n.map(function(t){return{initDataType:"cenc",initData:z(t)}})}catch(s){throw new y(4,4007)}return{node:t,Ib:e,keyId:i,init:0<r.length?r:null}}).filter(U)}function ft(t){var e;t instanceof ft?(dt(this,t.T),this.ma=t.ma,this.V=t.V,pt(this,t.ya),this.P=t.P,mt(this,wt(t.a)),this.da=t.da):t&&(e=String(t).match(fs))?(dt(this,e[1]||"",!0),this.ma=bt(e[2]||""),this.V=bt(e[3]||"",!0),pt(this,e[4]),this.P=bt(e[5]||"",!0),mt(this,e[6]||"",!0),this.da=bt(e[7]||"")):this.a=new vt(null)}function dt(t,e,i){t.T=i?bt(e,!0):e,t.T&&(t.T=t.T.replace(/:$/,""))}function pt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.ya=e}else t.ya=null}function mt(t,e,i){e instanceof vt?t.a=e:(i||(e=yt(e,bs)),t.a=new vt(e))}function bt(t,e){return t?e?decodeURI(t):decodeURIComponent(t):""}function yt(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,gt),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gt(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}function vt(t){this.b=t||null}function wt(t){var e=new vt;if(e.b=t.b,t.a){var i,n={};for(i in t.a)n[i]=t.a[i].concat();e.a=n,e.c=t.c}return e}function Et(t,e,i){this.a=t,this.M=e,this.D=i}function Tt(t,e,i,n,r,s){this.position=t,this.startTime=e,this.endTime=i,this.a=n,this.M=r,this.D=s}function St(e,i,n,r,s){null!==s&&(s=Math.round(s));var a={RepresentationID:i,Number:n,Bandwidth:r,Time:s};return e.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,function(e,i,n){if("$$"==e)return"$";var r=a[i];return null==r?e:("RepresentationID"==i&&n&&(n=void 0),e=r.toString(),n=t.parseInt(n,10)||1,Array(Math.max(0,n-e.length)+1).join("0")+e)})}function kt(t,e,i){if(i.length){var n=i[0];n.startTime<=gs&&(i[0]=new Tt(n.position,0,n.endTime,n.a,n.M,n.D)),t||(t=i[i.length-1],t.startTime>e||(i[i.length-1]=new Tt(t.position,t.startTime,e,t.a,t.M,t.D)))}}function Pt(t,e){if(!e.length)return t;var i=e.map(function(t){return new ft(t)});return t.map(function(t){return new ft(t)}).map(function(t){return i.map(t.resolve.bind(t))}).reduce(L,[]).map(function(t){return t.toString()})}function At(t,e){var i=_t(t,e,"timescale"),n=1;i&&(n=rt(i)||1),i=_t(t,e,"duration"),(i=rt(i||""))&&(i/=n);var r=_t(t,e,"startNumber"),s=_t(t,e,"presentationTimeOffset"),a=st(r||"");null!=r&&null!=a||(a=1);var o=It(t,e,"SegmentTimeline"),r=null;if(o){for(var r=n,u=Number(s),h=t.I.duration||1/0,o=X(o,"S"),c=[],l=0,f=0;f<o.length;++f){var d=o[f],p=Z(d,"t",st),m=Z(d,"d",st),d=Z(d,"r",nt);if(null!=p&&(p-=u),!m)break;if(p=null!=p?p:l,d=d||0,0>d)if(f+1<o.length){if(d=Z(o[f+1],"t",st),null==d)break;if(p>=d)break;d=Math.ceil((d-p)/m)-1}else{if(1/0==h)break;if(p/r>=h)break;d=Math.ceil((h*r-p)/m)-1}0<c.length&&p!=l&&(c[c.length-1].end=p/r);for(var b=0;b<=d;++b)l=p+m,c.push({start:p/r,end:l/r,gd:p}),p=l}r=c}return{timescale:n,G:i,ja:a,presentationTimeOffset:Number(s)/n||0,lb:Number(s),w:r}}function _t(t,e,i){return[e(t.u),e(t.R),e(t.L)].filter(U).map(function(t){return t.getAttribute(i)}).reduce(function(t,e){return t||e})}function It(t,e,i){return[e(t.u),e(t.R),e(t.L)].filter(U).map(function(t){return J(t,i)}).reduce(function(t,e){return t||e})}function Rt(t){if(!t)return"";t=new Uint8Array(t),239==t[0]&&187==t[1]&&191==t[2]&&(t=t.subarray(3)),t=escape(Mt(t));try{return decodeURIComponent(t)}catch(e){throw new y(2,2004)}}function Nt(t,e){if(!t)return"";if(t.byteLength%2)throw new y(2,2004);var i;if(t instanceof ArrayBuffer)i=t;else{var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(t)),i=n.buffer}var n=t.byteLength/2,r=new Uint16Array(n);i=new DataView(i);for(var s=0;s<n;s++)r[s]=i.getUint16(2*s,e);return Mt(r)}function xt(t){var e=new Uint8Array(t);if(239==e[0]&&187==e[1]&&191==e[2])return Rt(e);if(254==e[0]&&255==e[1])return Nt(e.subarray(2),!1);if(255==e[0]&&254==e[1])return Nt(e.subarray(2),!0);var i=function(t,e){return t.byteLength<=e||32<=t[e]&&126>=t[e]}.bind(null,e);if(!e[0]&&!e[2])return Nt(t,!1);if(!e[1]&&!e[3])return Nt(t,!0);if(i(0)&&i(1)&&i(2)&&i(3))return Rt(t);throw new y(2,2003)}function Ct(t){t=unescape(encodeURIComponent(t));for(var e=new Uint8Array(t.length),i=0;i<t.length;++i)e[i]=t.charCodeAt(i);return e.buffer}function Mt(t){for(var e="",i=0;i<t.length;i+=16e3)e+=String.fromCharCode.apply(null,t.subarray(i,i+16e3));return e}function Dt(t){this.b=t,this.c=0==vs,this.a=0}function Ot(t){return t.a<t.b.byteLength}function Lt(t){try{var e=t.b.getUint8(t.a)}catch(i){qt()}return t.a+=1,e}function jt(t){try{var e=t.b.getUint16(t.a,t.c)}catch(i){qt()}return t.a+=2,e}function Ut(t){try{var e=t.b.getUint32(t.a,t.c)}catch(i){qt()}return t.a+=4,e}function Bt(t){var e,i;try{t.c?(e=t.b.getUint32(t.a,!0),i=t.b.getUint32(t.a+4,!0)):(i=t.b.getUint32(t.a,!1),e=t.b.getUint32(t.a+4,!1))}catch(n){qt()}if(2097151<i)throw new y(3,3001);return t.a+=8,i*Math.pow(2,32)+e}function Ft(t,e){t.a+e>t.b.byteLength&&qt();var i=t.b.buffer.slice(t.a,t.a+e);return t.a+=e,new Uint8Array(i)}function Kt(t,e){t.a+e>t.b.byteLength&&qt(),t.a+=e}function Vt(t){var e=t.a;try{for(;Ot(t)&&t.b.getUint8(t.a);)t.a+=1}catch(i){qt()}return e=t.b.buffer.slice(e,t.a),t.a+=1,Rt(e)}function qt(){throw new y(3,3e3)}function Ht(t,e){for(;Ot(e);){var i=e.a,n=Ut(e),r=Ut(e);if(1==n?n=Bt(e):n||(n=e.b.byteLength-i),r==t)return n;Kt(e,n-(e.a-i))}return-1}function Gt(t,e){for(var i=new Dt(new DataView(t)),n=[[1836019574,0],[1953653099,0],[1835297121,0],[1835626086,0],[1937007212,0],[1937011556,8],[e,0]],r=-1,s=0;s<n.length;s++){var a=n[s][1],r=Ht(n[s][0],i);if(-1==r)return-1;Kt(i,a)}return r}function zt(t,e,i,n){var r=[];t=new Dt(new DataView(t));var s=Ht(1936286840,t);if(-1==s)throw new y(3,3004);var a=Lt(t);Kt(t,3),Kt(t,4);var o=Ut(t);if(!o)throw new y(3,3005);var u,h;for(a?(u=Bt(t),h=Bt(t)):(u=Ut(t),h=Ut(t)),Kt(t,2),a=jt(t),n=u-n,e=e+s+h,s=0;s<a;s++){u=Ut(t),h=(2147483648&u)>>>31,u&=2147483647;var c=Ut(t);if(Kt(t,4),1==h)throw new y(3,3006);r.push(new Tt(r.length,n/o,(n+c)/o,function(){return i},e,e+u-1)),n+=c,e+=u}return r}function $t(t){this.a=t}function Yt(t){this.b=t,this.a=new Dt(t),ws||(ws=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])])}function Wt(t){var e;if(e=Jt(t),7<e.length)throw new y(3,3002);for(var i=0,n=0;n<e.length;n++)i=256*i+e[n];e=i,i=Jt(t);t:{for(n=0;n<ws.length;n++)if(W(i,ws[n])){n=!0;break t}n=!1}if(n)i=t.b.byteLength-t.a.a;else{if(8==i.length&&224&i[1])throw new y(3,3001);for(var n=i[0]&(1<<8-i.length)-1,r=1;r<i.length;r++)n=256*n+i[r];i=n}return i=t.a.a+i<=t.b.byteLength?i:t.b.byteLength-t.a.a,n=new DataView(t.b.buffer,t.b.byteOffset+t.a.a,i),Kt(t.a,i),new Xt(e,n)}function Jt(t){var e,i=Lt(t.a);for(e=1;8>=e&&!(i&1<<8-e);e++);if(8<e)throw new y(3,3002);var n=new Uint8Array(e);for(n[0]=i,i=1;i<e;i++)n[i]=Lt(t.a);return n}function Xt(t,e){this.id=t,this.a=e}function Qt(t){if(8<t.a.byteLength)throw new y(3,3002);if(8==t.a.byteLength&&224&t.a.getUint8(0))throw new y(3,3001);for(var e=0,i=0;i<t.a.byteLength;i++)var n=t.a.getUint8(i),e=256*e+n;return e}function Zt(t,e,i,n,r,s){function a(){return r}var o=[];t=new Yt(t.a);for(var u=-1,h=-1;Ot(t.a);){var c=Wt(t);if(187==c.id){var l=te(c);l&&(c=i*(l.hd-s),l=e+l.Fc,0<=u&&o.push(new Tt(o.length,u,c,a,h,l-1)),u=c,h=l)}}return 0<=u&&o.push(new Tt(o.length,u,n,a,h,null)),o}function te(t){var e=new Yt(t.a);if(t=Wt(e),179!=t.id)throw new y(3,3013);if(t=Qt(t),e=Wt(e),183!=e.id)throw new y(3,3012);for(var e=new Yt(e.a),i=0;Ot(e.a);){var n=Wt(e);if(241==n.id){i=Qt(n);break}}return{hd:t,Fc:i}}function ee(t,e){var i=It(t,e,"Initialization");if(!i)return null;var n=t.u.N,r=i.getAttribute("sourceURL");r&&(n=Pt(t.u.N,[r]));var r=0,s=null;return(i=Z(i,"range",it))&&(r=i.start,s=i.end),new Et(function(){return n},r,s)}function ie(t,e){var i,n=_t(t,re,"presentationTimeOffset"),r=ee(t,re);i=Number(n);var s=t.u.contentType,a=t.u.mimeType.split("/")[1];if("text"!=s&&"mp4"!=a&&"webm"!=a)throw new y(4,4006);if("webm"==a&&!r)throw new y(4,4005);var s=It(t,re,"RepresentationIndex"),o=_t(t,re,"indexRange"),u=t.u.N,o=it(o||"");if(s){var h=s.getAttribute("sourceURL");h&&(u=Pt(t.u.N,[h])),o=Z(s,"range",it,o)}if(!o)throw new y(4,4002);return i=ne(t,e,r,u,o.start,o.end,a,i),{createSegmentIndex:i.createSegmentIndex,findSegmentPosition:i.findSegmentPosition,getSegmentReference:i.getSegmentReference,initSegmentReference:r,presentationTimeOffset:Number(n)||0}}function ne(t,e,i,n,r,s,a,o){var u=t.presentationTimeline,h=t.I.start,c=t.I.duration,l=e,f=null;return{createSegmentIndex:function(){var e=[l(n,r,s),"webm"==a?l(i.a(),i.M,i.D):null];return l=null,Promise.all(e).then(function(e){var i,s,l=e[0];if(e=e[1]||null,"mp4"==a)l=zt(l,r,n,o);else{if(e=new Yt(new DataView(e)),440786851!=Wt(e).id)throw new y(3,3008);if(s=Wt(e),408125543!=s.id)throw new y(3,3009);for(e=s.a.byteOffset,s=new Yt(s.a),i=null;Ot(s.a);){var d=Wt(s);if(357149030==d.id){i=d;break}}if(!i)throw new y(3,3010);for(i=new Yt(i.a),d=1e6,s=null;Ot(i.a);){var p=Wt(i);if(2807729==p.id)d=Qt(p);else if(17545==p.id)if(s=p,4==s.a.byteLength)s=s.a.getFloat32(0);else{if(8!=s.a.byteLength)throw new y(3,3003);s=s.a.getFloat64(0)}}if(null==s)throw new y(3,3011);if(i=d/=1e9,s*=d,l=Wt(new Yt(new DataView(l))),475249515!=l.id)throw new y(3,3007);l=Zt(l,e,i,s,n,o)}kt(t.Sa,c,l),u.Ha(h,l),f=new $t(l)})},findSegmentPosition:function(t){return f.find(t)},getSegmentReference:function(t){return f.get(t)}}}function re(t){return t.Ia}function se(t,e){var i,n=ee(t,ae);i=ue(t);var r=At(t,ae),s=r.ja;s||(s=1);var a=0;if(r.G?a=r.G*(s-1):r.w&&0<r.w.length&&(a=r.w[0].start),i={G:r.G,startTime:a,ja:s,presentationTimeOffset:r.presentationTimeOffset,w:r.w,wa:i},!i.G&&!i.w&&1<i.wa.length)throw new y(4,4002);if(!i.G&&!t.I.duration&&!i.w&&1==i.wa.length)throw new y(4,4002);if(i.w&&!i.w.length)throw new y(4,4002);return s=r=null,t.L.id&&t.u.id&&(s=t.L.id+","+t.u.id,r=e[s]),a=oe(t.I.duration,i.ja,t.u.N,i),kt(t.Sa,t.I.duration,a),r?(r.Za(a),r.Ta(t.presentationTimeline.ua()-t.I.start)):(t.presentationTimeline.Ha(t.I.start,a),r=new $t(a),s&&(e[s]=r)),{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:r.find.bind(r),getSegmentReference:r.get.bind(r),initSegmentReference:n,presentationTimeOffset:i.presentationTimeOffset}}function ae(t){return t.$}function oe(t,e,i,n){var r=n.wa.length;n.w&&n.w.length!=n.wa.length&&(r=Math.min(n.w.length,n.wa.length));for(var s=[],a=n.startTime,o=0;o<r;o++){var u,h=n.wa[o],c=Pt(i,[h.ic]);u=null!=n.G?a+n.G:n.w?n.w[o].end:a+t,s.push(new Tt(o+e,a,u,function(t){return t}.bind(null,c),h.start,h.end)),a=u}return s}function ue(t){return[t.u.$,t.R.$,t.L.$].filter(U).map(function(t){return X(t,"SegmentURL")}).reduce(function(t,e){return 0<t.length?t:e}).map(function(e){e.getAttribute("indexRange")&&!t.tb&&(t.tb=!0);var i=e.getAttribute("media");return e=Z(e,"mediaRange",it,{start:0,end:null}),{ic:i,start:e.start,end:e.end}})}function he(t,e,i,n){var r,s=de(t);r=At(t,ce);var a=_t(t,ce,"media"),o=_t(t,ce,"index");if(r={G:r.G,timescale:r.timescale,ja:r.ja,presentationTimeOffset:r.presentationTimeOffset,lb:r.lb,w:r.w,Ya:a,Fa:o},a=0+(r.Fa?1:0),a+=r.w?1:0,a+=r.G?1:0,!a)throw new y(4,4002);if(1!=a&&(r.Fa&&(r.w=null),r.G=null),!r.Fa&&!r.Ya)throw new y(4,4002);if(r.Fa){if(i=t.u.mimeType.split("/")[1],"mp4"!=i&&"webm"!=i)throw new y(4,4006);if("webm"==i&&!s)throw new y(4,4005);n=St(r.Fa,t.u.id,null,t.bandwidth||null,null),n=Pt(t.u.N,[n]),t=ne(t,e,s,n,0,null,i,r.presentationTimeOffset)}else r.G?(n||t.presentationTimeline.$a(r.G),t=le(t,r)):(n=e=null,t.L.id&&t.u.id&&(n=t.L.id+","+t.u.id,e=i[n]),a=fe(t,r),kt(t.Sa,t.I.duration,a),e?(e.Za(a),e.Ta(t.presentationTimeline.ua()-t.I.start)):(t.presentationTimeline.Ha(t.I.start,a),e=new $t(a),n&&(i[n]=e)),t={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:e.find.bind(e),getSegmentReference:e.get.bind(e)});return{createSegmentIndex:t.createSegmentIndex,findSegmentPosition:t.findSegmentPosition,getSegmentReference:t.getSegmentReference,initSegmentReference:s,presentationTimeOffset:r.presentationTimeOffset}}function ce(t){return t.Ja}function le(t,e){var i=t.I.duration,n=e.G,r=e.ja,s=e.timescale,a=e.Ya,o=t.bandwidth||null,u=t.u.id,h=t.u.N;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(t){return 0>t||i&&t>=i?null:Math.floor(t/n)},getSegmentReference:function(t){var e=t*n;return 0>e||i&&e>=i?null:new Tt(t,e,e+n,function(){var i=St(a,u,t+r,o,e*s);return Pt(h,[i])},0,null)}}}function fe(t,e){for(var i=[],n=0;n<e.w.length;n++){var r=n+e.ja;i.push(new Tt(r,e.w[n].start,e.w[n].end,function(t,e,i,n,r,s){return t=St(t,e,r,i,s),Pt(n,[t]).map(function(t){return t.toString()})}.bind(null,e.Ya,t.u.id,t.bandwidth||null,t.u.N,r,e.w[n].gd+e.lb),0,null))}return i}function de(t){var e=_t(t,ce,"initialization");if(!e)return null;var i=t.u.id,n=t.bandwidth||null,r=t.u.N;return new Et(function(){var t=St(e,i,null,n,null);return Pt(r,[t])},0,null)}function pe(t){this.f=!1,this.a=[],this.b=[],this.c=[],this.h=t||null}function me(){return{maxAttempts:2,baseDelay:1e3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function be(t,e){return{uris:t,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:e}}function ye(){var t,e={};for(t in Ts)e[t]=!0;for(t in Ss)e[t]=!0;return["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(t){e[t]=!!Ts[t]}),["mpd","m3u8","ism"].forEach(function(t){e[t]=!!Ss[t]}),e}function ge(t,e,i,n){var r=n;return r||(n=new ft(t).P.split("/").pop().split("."),1<n.length&&(n=n.pop().toLowerCase(),r=Ss[n])),r?Promise.resolve(r):(i=be([t],i),i.method="HEAD",e.request(0,i).then(function(e){return(e=e.headers["content-type"])&&(e=e.toLowerCase()),(r=Ts[e])?r:Promise.reject(new y(4,4e3,t))},function(t){return Promise.reject(t)}))}function ve(t,e){this.j=t,this.i=e,this.c=this.a=1/0,this.b=1,this.h=this.f=0,this.g=!0}function we(t,e,i){this.g=ks[e],this.c=t,this.h=0,this.f=1/0,this.a=this.b=null,this.i=i}function Ee(t,e,i){return t>=e?null:new VTTCue(t,e,i)}function Te(t,e,i,n){var r=t.h;return Promise.resolve().then(function(){if(this.c){var t=this.g(e,r,i,n,this.i);if(null!=i&&null!=n){for(var s=0;s<t.length&&!(t[s].startTime>=this.f);++s)this.c.addCue(t[s]);null==this.b&&(this.b=i),this.a=Math.min(n,this.f)}}}.bind(t))}function Se(t,e){return null==t.a||t.a<e||e<t.b?0:t.a-e}function ke(t,e){for(var i=t.c.cues,n=[],r=0;r<i.length;++r)e(i[r])&&n.push(i[r]);for(r=0;r<n.length;++r)t.c.removeCue(n[r])}function Pe(t,e,i){return i==e||t>=Ps&&i==e.split("-")[0]||t>=As&&i.split("-")[0]==e.split("-")[0]}function Ae(t){t=t.toLowerCase().split("-");var e=_s[t[0]];return e&&(t[0]=e),t.join("-")}function _e(t,e,i){for(var n=0;n<t.length;++n)if(i(t[n],e))return n;return-1}function Ie(t){this.a=null,this.b=function(){this.a=null,t()}.bind(this)}function Re(t){t.cancel(),t.a=setTimeout(t.b,100)}function Ne(t,e,i){this.l=this.h=this.s=null,this.B=!1,this.b=null,this.f=new S,this.a=[],this.m=[],this.j=new g,this.H=t,this.i=null,this.g=function(t){this.j.reject(t),e(t)}.bind(this),this.A={},this.K=i,this.v=new Ie(this.Dc.bind(this)),this.C=this.c=!1,this.j["catch"](function(){})}function xe(t,e){if(!t.h)return k(t.f,e,"encrypted",function(){this.f.la(e,"encrypted"),this.g(new y(6,6010))}.bind(t)),Promise.resolve();t.l=e;var i=t.l.setMediaKeys(t.h),i=i["catch"](function(t){return Promise.reject(new y(6,6003,t.message))}),n=null;return t.b.serverCertificate&&(n=t.h.setServerCertificate(t.b.serverCertificate),n=n["catch"](function(t){return Promise.reject(new y(6,6004,t.message))})),Promise.all([i,n]).then(function(){return this.c?Promise.reject():(Me(this),void(this.b.initData.length||this.m.length||k(this.f,this.l,"encrypted",this.jc.bind(this))))}.bind(t))["catch"](function(t){return this.c?Promise.resolve():Promise.reject(t)}.bind(t))}function Ce(t,e){return Promise.all(e.map(function(t){return Ke(this,t).then(function(t){if(t){for(var e=new g,i=0;i<this.a.length;i++)if(this.a[i].ha==t){this.a[i].Oa=e;break}return Promise.all([t.remove(),e]);