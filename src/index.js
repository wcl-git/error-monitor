/**
 * 前端日志及埋点上报解决方案
 * 作者: wcl
 */
// import "babel-polyfill"
import "core-js/stable";
import "regenerator-runtime/runtime";
import {ErrrorWeb} from './monitor-web'
import {AnalysisWeb} from './analysis-web'
export {AnalysisWeb, ErrrorWeb}
