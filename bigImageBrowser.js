var big_image_shown = false;
var big_image_shown_id, w_height, w_width, i_width, i_height, CurImg;
var border = 50;
var big_images = new Array();
var expr = new RegExp('\\.(jpe?g|gif|png)$', 'i');
jQuery(document).ready(function($) {
    $('a img').each(function(i){
	href = $(this).parent().attr('href');
	if(expr.test(href)) {
	    big_images[i] = href;
	    $(this).attr('big_image_id', i);
	}
    });
    jQuery('body').append('<div id="big_image_background"><div class="big_img_navigate_btn left">&larr;</div><div class="big_img_navigate_btn right">&rarr;</div><div class="big_img_navigate_btn esc">&#11025;</div><div id="big_image_container"><img id="big_image" /></div></div>');
    $('.big_img_navigate_btn.left').click(function(){
	show_big_image_prev();
    });
    $('.big_img_navigate_btn.right').click(function(){
	show_big_image_next();
    });
    $('.big_img_navigate_btn.esc').click(function(){
	close_big_image();
    });
    $('#big_image').click(function(){
	show_big_image_next();
    });
    jQuery('a img').click(function(){
	big_image_shown_id = $(this).attr('big_image_id');
	if(big_image_shown_id == undefined) {
	    return true;
	} else {
	    get_window_dimentions();
	    $('#big_image_background').show();
	    img = $('#big_image');
	    img.attr('src', $(this).parent().attr('href'));
	    big_image_shown = true;
	    $(window).resize(function(){
		get_window_dimentions();
		resize_big_image();
	    });
	    return false;
	}
    });

    $('#big_image').load(function(){
	CurImg = $(this);
	CurImg.removeAttr("width")
	.removeAttr("height")
	.css({
	    width: "",
	    height: ""
	});
	i_width  = CurImg.width();
	i_height = CurImg.height();
	resize_big_image();
    });

    $("html").keydown(function(e){
	if(big_image_shown) {
	    if(39 == e.keyCode) {
		show_big_image_next();
	    }
	    else if(37 == e.keyCode) {
		show_big_image_prev();
	    }
	    else if(27 == e.keyCode) {
		close_big_image();
	    }
	}
    });
});

function close_big_image() {
    big_image_shown = false;
    jQuery('#big_image').attr('src', '');
    jQuery('#big_image_background').hide();
    jQuery(window).unbind('resize');
}

function show_big_image_next() {
    big_image_shown_id++;
    if(big_image_shown_id == big_images.length){
	big_image_shown_id = 0;
    }
    jQuery('#big_image').attr('src', big_images[big_image_shown_id]);
}
function show_big_image_prev() {
    big_image_shown_id--;
    if(big_image_shown_id < 0){
	big_image_shown_id = big_images.length - 1;
    }
    jQuery('#big_image').attr('src', big_images[big_image_shown_id]);
}

function get_window_dimentions() {
    w_height = jQuery(window).height() - border;
    w_width = jQuery(window).width() - border;
}

function resize_big_image() {
    if(i_width > w_width || i_height > w_height){

	if(i_width - w_width > i_height - w_height) {// больше ширина
	    CurImg.attr('width', w_width);
	} else {

	    CurImg.attr('height', w_height);
	}
    }
    CurImg.parent().css('margin-top', (border + w_height - CurImg.height())/2);
}