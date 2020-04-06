Vue.component('my-option', {
    // (1)ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
    template: `
        <option :value="id">

            {{ name }} 

            {{ price }} (円)

        </option>`
    ,
    props: [
        'id',
        'name',
        'price'
    ],
});