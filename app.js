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
var clickRight = arr.length-1


left.addEventListener('click', function(){
	// arr[0] src find which element has it when we decrement
	for(var i = 0; i < img.length; i++){
		if(img[i].srcset === arr[0]) {
			img[i].srcset = arr[arr.length-1]
		} else {
			img[i].srcset = arr[arr.indexOf(img[i].srcset)-1]
		}
	}
		
})

// RIGHT BUTTON 
right.addEventListener('click', function(){
	for(var i = 0; i < img.length; i++){
		if(img[i].srcset === arr[arr.length-1]){
			img[i].srcset = arr[0]
		} else {
			img[i].srcset = arr[arr.indexOf(img[i].srcset)+1]
		}
	}
})

