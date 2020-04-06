Vue.component('my-row', {
    // (1)ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
    template: `
        <tr>
            <td>
                {{ id }} 
            </td>
            <td>
                {{ name }} 
            </td>
            <td>
                {{ price }} (円)
            </td>
        </tr>`
    ,
    props: [
        'id',
        'name',
        'price'
    ],
});