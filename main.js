// 数値を通貨書式「##,###,###」に変換するフィルター
Vue.filter('number_format', function (val) {
    return val.toLocaleString();
});

var app = new Vue({
    el: '#app',
    data: {
        // 「セール対象」のチェック状態(true:チェックあり、false:チェック無し)
        showSaleItem: false,
        // 「送料無料」のチェック状態(true:チェックあり、false:チェック無し)
        showDelvFree: false,
        // 「並び替え」の選択値(1:標準、2:価格が安い順)
        sortOrder: 1,
        // 商品リスト
        products:[]
    },
    computed: {
        // 絞り込み後の商品リストを返す算出プロパティ
        filteredList: function () {
            // 絞り込み後の商品リスト格納する新しい配列
            var newList = [];
            for (var i = 0; i < this.products.length; i++) {
                // 表示対象かどうかを判定する
                var isShow = true;
                // 1番目の商品が表示対象かどうかを判定する
                if (this.showSaleItem && !this.products[i].isSale) {
                    // 「セール対象」チェック有りで、セール対象ではない場合
                    isShow = false; //この商品は表示しない
                }
                if (this.showDelvFree && this.products[i].delv > 0) {
                    // 「送料無料」チェック有りで、送料有りの商品の場合
                    isShow = false;
                }
                // 表示対象の商品だけを新しい配列に追加する
                if (isShow) {
                    newList.push(this.products[i]);
                }
            }
            if (this.sortOrder == 2) {
                // 価格が安い順に並び変える
                newList.sort(function (a, b) {
                    return a.price - b.price;
                });
            }
            // 絞り込み後の商品リストを返す
            return newList;
        },
        count: function () {
           return this.filteredList.length; 
        }
    }
});