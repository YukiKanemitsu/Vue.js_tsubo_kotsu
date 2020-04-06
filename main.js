const app = new Vue({
    el: '#app',
    data: {
        price: 980
    },
    methods: {
        // (5)子から呼び出されるメソッド
        priceDown: function () {
            var discount = 0;
            // 値下げ幅が指定されていない場合は100円とする
            if (this.price - 50 < 500) {
                // 例)現在の価格が530円の場合、値下げ幅は30円
                discount = this.price - 500;
            } else {
                // 例)現在の価格が550円以上の場合、値下げ幅は50円
                discount = 50;
            }
            // 値下げする
            this.price -= discount;
        }
    }
});