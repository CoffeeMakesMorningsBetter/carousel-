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
	"https://source.unsplash.com/qmnpqDwla_E",
	"https://source.unsplash.com/BeOW_PJjA0w",
	"https://source.unsplash.com/vhChBiAT8aQ",
	"https://source.unsplash.com/1Fm_k4Ip7jM",
	"https://source.unsplash.com/C16xHin1f7A"
]

var left = document.querySelector('#left')
var right = document.querySelector('#right')
var img = document.querySelectorAll('img')

left.addEventListener('click', function(){
	// arr[0] find in img array like object 
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
	// arr[arr.length-1] find in img array like object 
	for(var i = 0; i < img.length; i++){
		if(img[i].srcset === arr[arr.length-1]){
			img[i].srcset = arr[0]
		} else {
			img[i].srcset = arr[arr.indexOf(img[i].srcset)+1]
		}
	}
})

