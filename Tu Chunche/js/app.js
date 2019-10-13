

$('#camera').hide();


$('#takeImage').click(function(){
    $('#main').fadeOut(400);
    $('#camera').fadeIn(400);
    start(); // camera.js -> start

});

// cambiar la camara del usuario
$('#changeCamera').click(function(){
    start(); // camera.js -> start

    if($('#cameraIcon').html() == 'camera_front'){
        $('#cameraIcon').fadeOut(400, function(){
            $('#cameraIcon').html('camera_rear');
            $('#cameraIcon').fadeIn(400);
        });
    }else{
        $('#cameraIcon').fadeOut(400, function(){
            $('#cameraIcon').html('camera_front') ;
            $('#cameraIcon').fadeIn(400);
        });

    }
}); 

///colocar la imagen del stream en div:preview 
$('#cameraIcon').click(function(){
    $video = document.querySelector('video');
    $video.pause();

    //Obtener contexto del canvas y dibujar sobre él
    $canvas = document.querySelector('canvas')
    let contexto = $canvas.getContext("2d");
    $canvas.width = $video.videoWidth;
    $canvas.height = $video.videoHeight;
    contexto.drawImage($video, 0, 0, $canvas.width, $canvas.height);

    $('#camera').fadeOut(500);
    $('#main').fadeIn(500);

    stop();

    filePreviewCanvas($canvas);
    
});

/// actualizar nombre de input file
// generar preview

jQuery('input[type=file]').change(function(){
    $('#imageName').html(jQuery(this).val().split('\\').pop());
    filePreview($('input[type=file]')[0]);
});




function filePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview img').remove();
            $('#preview').append('<img id="uploadImage" src="'+e.target.result+'" width="100%" />');
            $('#preview img').fadeIn(500);

        }
        reader.readAsDataURL(input.files[0]);
    }
}

function filePreviewCanvas(canvas){
    $('#preview img').remove();
    $('#preview').append('<img id="uploadImage" src="'+canvas.toDataURL()+'" width="100%" />');
    $('#preview img').fadeIn(1000);
}