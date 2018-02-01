var arr = [
	"https://source.unsplash.com/ywJPwawYR08" ,
	"https://source.unsplash.com/_vPbUVNk4Kc",
	"https://source.unsplash.com/cXidYp18-Jk",
	"https://source.unsplash.com/YwFHhIgG77M",
	"https://source.unsplash.com/gxSgv-oO_YQ",
	"https://source.unsplash.com/_QoAuZGAoPY",
	"https://source.unsplash.com/5em1lVBmvw8",
	"https://source.unsplash.com/ioy3bN5Irew",
	"https://source.unsplash.com/1vg0LlKxHG8",
	"https://source.unsplash.com/dmZRrWqZoXA",
]

var left = document.querySelector('#left')
var right = document.querySelector('#right')
var img = document.querySelectorAll('img')
var clickLeft = 0
var clickRight = 1



left.addEventListener('click', function(){
	if(clickLeft === 0){
		clickLeft = arr.length-2
		clickRight = arr.length-1
		img[0].srcset = arr[clickLeft]
		img[1].srcset = arr[clickRight]
	} else {
		clickLeft--
		clickRight--
		img[0].srcset = arr[clickLeft]
		img[1].srcset = arr[clickRight]
	}
		
})

// RIGHT BUTTON 
right.addEventListener('click', function(){
	if(clickRight === arr.length-1){
		clickRight = 1
		clickLeft = 0
		img[0].srcset = arr[clickLeft]
		img[1].srcset = arr[clickRight]
	} else {
		clickLeft++
		clickRight++
		img[0].srcset = arr[clickLeft]
		img[1].srcset = arr[clickRight]
	}
})

