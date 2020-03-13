// var btnLoad = document.querySelector('#load');
// // 読み込み用のイベントハンドラを定義
// btnLoad.addEventListener('click', function (event) {
//     // 【手順1】XMLHttpRequestオブジェクトのインスタンスを生成
//     var xmlHttpRequest = new XMLHttpRequest();
//     // 【手順2】 通信状態の変化を監視するイベントハンドラを設定
//     xmlHttpRequest.onreadystatechange = function () {
//         // レスポンスの受信が正常に完了した時
//         if (this.readyState == 4 /* && this.status == 200 */ ) {
//             // 受信したデータをコンソールに出力する
//             console.log(this.readyState, this.response);
//         }
//     };
//     // 【手順3】レスポンスの形式を指定する
//     xmlHttpRequest.responseType = 'json';
//     // 【手順4】リクエストメソッドと読み込むファイルのパスを指定する
//     xmlHttpRequest.open('GET', 'products.json');
//     // 【手順5】リクエストを送信する(非同期通信を開始する)
//     xmlHttpRequest.send();
// });

$('#load').on('click', clickHandler);
function clickHandler(event) {
    // 非同期通信でJSONを読み込む
    $.ajax({
        url: 'products.json',
        type: 'GET',
        dataType: 'json'
    })
    .done(function (data, textStatus, jqXHR) {
        updateScreen(data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log('通信が失敗しました');
    });
}

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