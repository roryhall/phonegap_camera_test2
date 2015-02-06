//-----------------------------------------------------
// Test 2a Assignment

// Not the best settings as it crops the photo somewhat but there seems to be alot of documented bugs around the samsung phones and cordova to fit the 			   16 megapixel images into memory for some reason.

//-----------------------------------------------------

// Camera Function

	TakePhoto = function(el){
	    if (!navigator.camera){
	        alert('Camera API not supported', 'Error');
	        return;
	    };


	    var options =   {   quality: 50,
	    					targetWidth: 720,
	                        destinationType: Camera.DestinationType.DATA_URL,
	                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
	                        encodingType: Camera.EncodingType.JPEG,
	                        correctOrientation: true
	                    };
	    navigator.camera.getPicture(
	        function(imageData){
	        	$('.imgtitle').remove();
	            $('.photozone', this.el).attr('src', "data:image/jpeg;base64," + imageData);
	        },
	        function() {
	            alert('Error taking picture', 'Error');
	        },
	        options);
	};
	
	GetPhoto = function(el){
	    if (!navigator.camera){
	        alert('Camera API (get picture) not supported', 'Error');
	        return;
	    };


	    var options =   {   quality: 50,
	    					targetWidth: 720,
	                        destinationType: Camera.DestinationType.DATA_URL,
	                        sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Album
	                        encodingType: Camera.EncodingType.JPEG,
	                        correctOrientation: true
	                    };
	    navigator.camera.getPicture(
	        function(imageData){
	        	$('.imgtitle').remove();
	            $('.photozone', this.el).attr('src', "data:image/jpeg;base64," + imageData);
	        },
	        function() {
	            alert('Error taking picture', 'Error');
	        },
	        options);
	};	
	
//-----------------------------------------------------
	init=function(){
		console.log('Ready for test run')
	}
	
//-----------------------------------------------------
	document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady=function(){
	    init();
	}