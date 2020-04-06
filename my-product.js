Vue.component('my-product', {
    // (1)ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
    template: `
            <button>
                現在の価格　{{ price }}(円)
            </button>`
    ,
    props: [
        'price'
    ],
});