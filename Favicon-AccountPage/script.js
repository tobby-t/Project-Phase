function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profile').attr('https://cdn3.iconfinder.com/data/icons/human-icons-for-interfaces/100/PROFILE-512.png', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#image").change(function(){
    readURL(this);
    //other uploading proccess [server side by ajax and form-data ]
});