jQuery('input[type=file]').change(function(e) {
    if(typeof FileReader == "undefined") return true;

    var elem    = jQuery(this);
    var files   = e.target.files;

    for ( var i = 0, f; f = files[i]; i++ ) {

        if ( f.type.match('image.*') ) {
            var reader = new FileReader();

            reader.onload = (function(theFile) {
                return function(e) {
                    var image = e.target.result;

                    previewDiv  = jQuery('.thumb', elem.parent() );
                    bg_width    = previewDiv.width() * 2;

                    previewDiv.css({
                        "background-size"   : "cover",
                        "background-image"  : "url("+image+")",
                    });

                };

            })(f);

            reader.readAsDataURL(f);
        }
    }
});