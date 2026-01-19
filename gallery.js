/* ==================================================
   写真の設定エリア
   ここに行を追加するだけでギャラリーに反映されます！
   ================================================== */
const photoList = [
    // --- 縦画像 (Vertical) ---
    // { file: "ファイル名", type: "vertical" },
    { file: "image/tate_photo1.png", type: "vertical" },
    { file: "image/tate_photo2.png", type: "vertical" },
    { file: "image/tate_photo3.png", type: "vertical" },
    { file: "image/tate_photo4.png", type: "vertical" },
    { file: "image/tate_photo5.png", type: "vertical" },
    { file: "image/tate_photo6.png", type: "vertical" },
    { file: "image/tate_photo7.png", type: "vertical" },
    { file: "image/tate_photo8.png", type: "vertical" },
    { file: "image/intro.png", type: "vertical" },
    { file: "image/Rize.png", type: "vertical" },

    // --- 横画像 (Landscape) ---
    // { file: "ファイル名", type: "landscape" },
    { file: "image/yoko_photo1.jpg", type: "landscape" },
    { file: "image/yoko_photo2.png", type: "landscape" },
    { file: "image/main_visual.png", type: "landscape" },
    { file: "image/yoko_photo3.jpg", type: "landscape" },
    { file: "image/profile.jpg",     type: "landscape" },
    { file: "image/yoko_photo4.png", type: "landscape" },
    { file: "image/yoko_photo5.png", type: "landscape" },
    { file: "image/yoko_photo6.png", type: "landscape" },
    { file: "image/yoko_photo7.png", type: "landscape" },
    // 追加したいときはここに以下の形式で足す
    // { file: "image/新しい写真の名前.jpg", type: "landscape" },
];


/* ==================================================
   ここから下は触らなくてOKです（自動生成プログラム）
   ================================================== */
$(document).ready(function() {
    const $verticalContainer = $('#gallery-vertical');
    const $landscapeContainer = $('#gallery-landscape');

    photoList.forEach(function(photo) {
        // HTMLを作成
        // <a href="..." data-lightbox="..." class="gallery-item"><img src="..."></a> の形を作る
        const html = `
            <a href="${photo.file}" data-lightbox="${photo.type}" class="gallery-item">
                <img src="${photo.file}" alt="VRChat Photo">
            </a>
        `;

        // タイプによって入れる箱を変える
        if (photo.type === 'vertical') {
            $verticalContainer.append(html);
        } else if (photo.type === 'landscape') {
            $landscapeContainer.append(html);
        }
    });
});