var app = new Vue({
    el: "#app",
    data: {
        // 初期値は当年
        // year: (new Date()).getFullYear()
        // message: 'これは一方通行のバインドです'
        // answer: '',
        // options: [
        //     { 
        //         code: 'ans1', label: '初めて'
        //     },
        //     { 
        //         code: 'ans2', label: '週一回以上'
        //     },
        //     { 
        //         code: 'ans3', label: '月2回以上'
        //     },
        //     { 
        //         code: 'ans4', label: '半年に一回'
        //     },
        // ]
        // category: []
        arraival_date: null,
        min_date: null,
        color: '#000000',
        red: 0,
        green: 0,
        blue: 0,
    },
    computed: {
        // 赤・緑・青を配列で返す算出プロパティ
        colorElement: function() {
            return [this.red, this.green, this.blue];
        }
    },
    watch: {
        // 赤・緑・青のいずれかの変更の監視をする
        colorElement: function (newRGB, oldRGB) {
            // 赤・緑・青を2桁の16進数表記に変換する
            var r = ('00' + newRGB[0].tuString(16),toUpperCase() ).slice(-2);
            var g = ('00' + newRGB[1].tuString(16),toUpperCase() ).slice(-2);
            var b = ('00' + newRGB[2].tuString(16),toUpperCase() ).slice(-2);
            // #RRGGBB　形式の文字列で更新する
            this.color = '#' + r + g + b;
        },
        // カラーパレットの選択変更を監視する
        color: function (newColor, oldColor) {
            this.red = parseInt(newColor.substr(1, 2), 16);
            this.green = parseInt(newColor.substr(3, 2), 16);
            this.blue = parseInt(newColor.substr(5, 2), 16);
        }
    },
    created: function() {
        //　翌日の日付を初期値をする
        var dt = new Date();
        dt.setDate(dt.getDate() + 1);
        this.arraival_date =this.formatDate(dt);
        //　翌日の日付を最小値をする
        this.min_date = this.arraival_date;
    },
    methods: {
        // 日付をYYYY-MM-DD に整形するメソッド
        formatDate: function (dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth() + 1)).slice(-2);
            var d = ('00' + (dt.getDate())).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;
        }
    },
    // computed: {
    //     selectedCategory: function () {
    //         return this.category.length >=1 ? this.category.join() : '';
    //     }, 
    //     selection: function () {
    //         return this.answer.join();
    //     }
    // }
    // methods: {
    //     // 「年」のinputイベントハンドラ
    //     yearInputHandler: function ($event) {
    //         // 直接データを更新する
    //         this.year = $event.target.value;
    //     }
    // }
});