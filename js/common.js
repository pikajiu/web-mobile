/** 
  @todo touch模拟移动端单击操作
    1.触摸时长<200ms
    2.触摸移动距离<?px
    3.单指触摸 
**/


var clickSim = {
  
  tap: function (dom, callback) {
    var startX, startY, endX, endY, startTime
    dom.addEventListener('touchstart', function (e) {
      if (e.targetTouches.length > 1) {
        return
      }
      startX = e.targetTouches[0].clientX
      startY = e.targetTouches[0].clientY
      startTime = Date.now();
    })



    dom.addEventListener('touchend', function (e) {
      endX = e.changedTouches[0].clientX
      endY = e.changedTouches[0].clientY
      // 2.触摸移动距离<?px
      if (Math.abs(endX - startX) > 3 || Math.abs(endY - startY) > 3) {
        return
      }
      // 1.触摸时长<200ms
      if (Date.now() - startTime > 200) {
        return
      }
      //是单击，执行回调函数
      callback && callback(e)

    })
  }
}