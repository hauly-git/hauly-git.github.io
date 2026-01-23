/* booth.js - Booth商品スライドショー専用 */

// === ここに商品を登録してください ===
const boothItems = [
    // { img: "画像のパス", url: "Boothの商品ページURL", alt: "商品名" },
    
    // 例:
    { 
        img: "https://booth.pximg.net/5c553278-95c3-477b-97f1-8bf41d61c3aa/i/7839275/8e86e45a-85d0-4966-8c5e-34765e676513_base_resized.jpg", 
        url: "https://yowayowa-shop.booth.pm/items/7839275", 
        alt: "Powder Moco" 
    },
    { 
        img: "https://booth.pximg.net/5c553278-95c3-477b-97f1-8bf41d61c3aa/i/7813706/6b535e14-fa90-4bc6-bcee-f0dac681a093_base_resized.jpg", 
        url: "https://yowayowa-shop.booth.pm/items/7813706", 
        alt: "Urban Glitch" 
    },
    { 
        img: "https://booth.pximg.net/5c553278-95c3-477b-97f1-8bf41d61c3aa/i/7387816/c2a6b551-8402-4304-9e18-a7b265b17f23_base_resized.jpg", 
        url: "https://yowayowa-shop.booth.pm/items/7387816", 
        alt: "シールドケーブルヘイロー" 
    },
    { 
        img: "https://booth.pximg.net/5c553278-95c3-477b-97f1-8bf41d61c3aa/i/6588633/5e90f332-8406-4d33-afca-bae8d26ee812_base_resized.jpg", 
        url: "https://yowayowa-shop.booth.pm/items/6588633", 
        alt: "トリガーオン！ギミック" 
    },
    { 
        img: "https://booth.pximg.net/5c553278-95c3-477b-97f1-8bf41d61c3aa/i/7871674/95155093-d81d-41ec-980e-3fec53be6901_base_resized.jpg", 
        url: "https://yowayowa-shop.booth.pm/items/7871674", 
        alt: "Ribbon Halo" 
    },
    // 商品が少ない場合は、同じものを複数回書いてもOKです
];

$(document).ready(function() {
    const $track = $('.booth-track');
    
    // 商品が登録されていないページでは何もしない
    if ($track.length === 0) return;

    // リストからHTMLを生成する関数
    function createItems() {
        let html = '';
        boothItems.forEach(function(item) {
            html += `
                <a href="${item.url}" class="booth-item" target="_blank" rel="noopener">
                    <img src="${item.img}" alt="${item.alt}">
                </a>
            `;
        });
        return html;
    }

    // 無限ループのために、同じリストを2セット配置する
    $track.append(createItems()); // 1セット目
    $track.append(createItems()); // 2セット目（つなぎ目用）
});