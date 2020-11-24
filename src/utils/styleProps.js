// Echarts 属性设置涉及到的‘px’

const viewPort = window.screen.width
let rootFontSize = 100
// 注意根元素的大小需要和fullscreen.css里面的大小保持一致
if (viewPort <= 1366) rootFontSize = 80
if (viewPort >= 1367 && viewPort <= 1920) rootFontSize = 100
if (viewPort >= 1921 && viewPort <= 2560) rootFontSize = 120

// 后期需要调整
if (viewPort >= 2561 && viewPort <= 3200) rootFontSize = 140

export default {
  bodyFontSize: rootFontSize,
  forBorderWidth: rootFontSize * 0.01 //
}
