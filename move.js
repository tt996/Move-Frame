
// MOVE运动框架1.3
// 以像素为结果的缓冲运动
// 缓冲运动,兼容px单位
			// 如margin:10px;属性名(name):属性值(value)
			// getComputedStyle()只读
			// target没有单位'px'而name有---采用取整parseInt()解决
			function move(obj,name,target,fn){
				clearInterval(obj.timer)
				obj.timer=setInterval(function (){
					// 定义获取值为nowStyle
					let nowStyle=parseInt(getComputedStyle(obj)[name])
					let speed=(target-nowStyle)/10
					// 最后一个像素/10=0.9,无法停止
					// 采取取整方法解决未归零问题:
					// 取整方法:①向上取整(有小数,整数+1):Math.ceil(5.1234);//6
					// 		②向下取整(<=该数值的最大整数)与parseInt()一样:Math.floor(5.1234);//5
					// 最后10像素以内,speed为小于1的小数,无法停止定时器,需speed=0
					if (speed>0) {
						// 向上取整
						speed=Math.ceil(speed)
					} else{
						// 向下取整
						speed=Math.floor(speed)
					}
					
					
					if (nowStyle==target){
						clearInterval(obj.timer)
						// 如果存在第四个变量-true执行
						if(fn){fn()}
					}else{
						obj.style[name]=nowStyle+speed+'px'
					}
				},30)
			}