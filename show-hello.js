Vue.component('show-hello', {
    // テンプレート部分
    template: 
        `<div>
            <span>{{ name }}</span>: <span>{{ price }}</span>
        </div>`,
    // dataオプション
    data: function () {
        return {
            name: 'スマホケース',
            price: 980
        } 
    },
    // メソッド
    methods: {

    },
    // 算出プロパティ
    computed: {

    },
    // ウォッチャ
    watch: {

    },
    // フィルター
    filters: {

    },
    // ライフサイクルハック
    created: function () {
        
    }
});