// JSONPのURL(サーバーに配置する)
var url = 'サーバーのURL/products.js';

// 非同期通信でJSONPを読み込む
$.ajax({
    url: url,                   //通信先URL
    type: 'GET',                //使用するHTTPメソッド
    dataType: 'jsonp',          //レスポンスのデータタイプ
    jsonp: 'callback',          //クエリパラメータの名前
    jsonpCallback: 'products'   //コールバック関数の名前
})
.done(function (data, textStatus, jqXHR) {
    console.log(data);
})
.fail(function (jqXHR, textStatus, errorThrown) {
    console.log('通信が失敗しました');
});


// 商品一覧の描画を更新する
function updateScreen(products) {
    // 商品リストの子ノードをすべて削除する
    $('#result').empty();   
    // 商品の子ノードをDOMに挿入する
    var list = "";
    for (var i = 0; i < products.length; i++) {
        list += '<div>';
        list += '商品ID:' + products[i].id;
        list += '商品名:' + products[i].name;
        list += '料金:' + products[i].price;
        list += '画像パス:' + products[i].image;
        list += '送料:' + products[i].delv;
        list += 'セール対象:' + products[i].isSale;
        list += '</div>';        
    }
    $('#result').append(list);
}