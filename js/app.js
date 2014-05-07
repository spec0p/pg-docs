// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Requires the license to be accepted before downloading the Phune Gaming platform
$('#download-platform').click(function() {
    if (!$('#accept-license').is(':checked')) {
        $('[for="accept-license"]').addClass('error');
        alert('Sorry, you must accept the License Agreement before downloading.');
        return false;
    } else {
        $('[for="accept-license"]').removeClass('error');
    }
});
