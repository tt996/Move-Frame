
// MOVE运动框架1.1：
// 以像素为结果的缓冲运动
	// 缓冲运动,兼容px单位
			// 如margin:10px;属性名(name):属性值(value)
			// getComputedStyle()只读
			// target没有单位'px'而name有---采用取整parseInt()解决
			function move(obj,name,target){
				clearInterval(obj.timer)
				obj.timer=setInterval(function (){
					// 定义获取值为nowStyle
					let nowStyle=parseInt(getComputedStyle(obj)[name])
					if (nowStyle==target){
						clearInterval(obj.timer)
					}else{
						let speed=(target-nowStyle)/10
						obj.style[name]=nowStyle+speed+'px'
					}
				},30)
			}