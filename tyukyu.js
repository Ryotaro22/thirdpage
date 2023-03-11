window.addEventListener('DOMContentLoaded', function(){
    $('.toggle-btn').click(function(){
        if($('.container').hasClass('open')){
            $('.container').removeClass('open');
        } else {
            $('.container').addClass('open');
        }
    })


    $('.view').click(function(){
        if($('.hide-list').hasClass('show')){
            $('.hide-list').removeClass('show');
        } 
        else {
            $('.hide-list').addClass('show');
    }})
});
