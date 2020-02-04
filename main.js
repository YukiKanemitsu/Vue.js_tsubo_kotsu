var app = new Vue({
    el: "#app",
    data: {
        message: '',
        stock: 10
    },
    methods: {
        //削除ボタンのクリックイベントハンドラ
        onDeleteItem: function () {
            this.stock--;
        }
    },
    computed: {
        // 加工したメッセージを返す算出プロパティ
        statusMessage: function () {
            if (this.stock == 0) {
                return '売り切れ';
            }
            return '';            
        }
    },
    watch: {
        // ステータスの変化を監視するウォッチャ
        statusMessage: function () {
            console.log('商品のステータスが変化しました');
        }
    }
});