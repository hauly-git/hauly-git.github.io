/* scroll.js - スクロールアニメーション専用 */

$(document).ready(function() {
    // 画面に入ったら「is-active」クラスをつける関数
    function scrollAnime() {
        $('.js-scroll-trigger').each(function() {
            var elemPos = $(this).offset().top; // 要素の位置
            var scroll = $(window).scrollTop(); // スクロール量
            var windowHeight = $(window).height(); // 画面の高さ
            
            // 画面の下から100pxくらい見えたら発火
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('is-active');
            }
        });
    }

    // スクロールするたびに実行
    $(window).scroll(function() {
        scrollAnime();
    });

    // ページの読み込み完了時にも一度実行
    scrollAnime();
});