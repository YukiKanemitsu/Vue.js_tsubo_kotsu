// 金額の配列
var array_price = [1280, 1980, 1580, 980, 1680, 1780];

// 値が小さい順に並び変える比較関数
function desc_order(a, b) {
    if (a < b) {
        return -1;
    }
    if (a == b) {
        return 1;
    }
    return 0;
}

// 安い順にソート
array_price.sort(desc_order);

console.log(array_price);

var products = [
    {
        ID: 1, price: 1280,
    },
    {
        ID: 2, price: 1980,
    },   
    {
        ID: 3, price: 980,
    },
    {
        ID: 4, price: 1680,
    },
    {
        ID: 5, price: 1780,
    }
];

// 安い順にソート
products.sort(function (a, b) {
    return a.price - b.price; 
});

// 並び変えた結果
console.log(products);