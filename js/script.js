$(() => {
    // fadein
    $(window).scroll(() => {
        $('.fadein').each(() => {
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    // ページTOPに戻る
    let topBtn = $('#page-top');    
    topBtn.hide();

    // スクロールダウン文言
    let scrollDown = $('.scroll-down');
    scrollDown.show();
    
    //スクロールが100に達したらボタン表示
    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
            scrollDown.fadeOut();
        } else {
            topBtn.fadeOut();
            scrollDown.fadeIn();
        }
    });

    //スクロールしてトップ
    topBtn.click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});