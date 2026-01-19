$(document).ready(function() {
    
    // 設定項目
    const autoPlaySpeed = 5000; // 自動再生の間隔（ミリ秒）: 5000 = 5秒
    const transitionSpeed = 1;  // 切り替えアニメーションの秒数

    // 要素の取得
    const $slides = $('.slide');
    const $paginationItems = $('.pagination .item');
    const totalSlides = $slides.length;
    let currentIndex = 0;
    let isAnimating = false;
    let autoPlayTimer;

    // 初期化：最初のスライドを表示
    function init() {
        $slides.eq(0).addClass('is-active').css('opacity', 1);
        $paginationItems.eq(0).addClass('is-active');
        startAutoPlay();
    }

    // スライドを切り替える関数
    function changeSlide(nextIndex) {
        // アニメーション中、または同じスライドなら何もしない
        if (isAnimating || nextIndex === currentIndex) return;
        isAnimating = true;

        // インデックスのループ処理（最後→最初、最初→最後）
        if (nextIndex >= totalSlides) nextIndex = 0;
        if (nextIndex < 0) nextIndex = totalSlides - 1;

        const $currentSlide = $slides.eq(currentIndex);
        const $nextSlide = $slides.eq(nextIndex);
        
        const $currentDot = $paginationItems.eq(currentIndex);
        const $nextDot = $paginationItems.eq(nextIndex);

        // ページネーション（数字）の更新
        $currentDot.removeClass('is-active');
        $nextDot.addClass('is-active');

        // GSAP (TweenMax) を使ったアニメーション
        // 次のスライドを準備
        $nextSlide.addClass('is-active').css({ opacity: 0, zIndex: 2 });
        $currentSlide.css({ zIndex: 1 });

        // フェードイン・アウトのアニメーション
        TweenMax.to($currentSlide, transitionSpeed, {
            opacity: 0,
            ease: Power2.easeInOut,
            onComplete: function() {
                $currentSlide.removeClass('is-active');
            }
        });

        TweenMax.to($nextSlide, transitionSpeed, {
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: function() {
                isAnimating = false;
            }
        });

        // 現在のインデックスを更新
        currentIndex = nextIndex;
    }

    // 自動再生タイマー
    function startAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(function() {
            changeSlide(currentIndex + 1);
        }, autoPlaySpeed);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // --- イベントリスナー ---

    // 次へボタン
    $('.arrow.next').on('click', function() {
        changeSlide(currentIndex + 1);
        resetAutoPlay();
    });

    // 前へボタン
    $('.arrow.prev').on('click', function() {
        changeSlide(currentIndex - 1);
        resetAutoPlay();
    });

    // ページネーション（数字）クリック
    $paginationItems.on('click', function() {
        const index = $(this).index();
        changeSlide(index);
        resetAutoPlay();
    });

    // 実行
    init();
});