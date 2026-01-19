$(document).ready(function() {
    
    // --- ハンバーガーメニューの処理 ---

    // ハンバーガーボタンをクリックした時
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');          // ボタンを×印に変える
        $('.global-nav').toggleClass('active'); // メニューを表示する
    });

    // メニュー内のリンクをクリックした時（メニューを閉じる）
    $('.global-nav a').on('click', function() {
        $('.hamburger').removeClass('active');  // ボタンを元に戻す
        $('.global-nav').removeClass('active'); // メニューを閉じる
    });

});