var app = new Vue({
    el: "#app",
    data: {
        point: { 
            x: 0,
            y: 0,
        },
        //ウィンドウサイズ
        width: window.innerWidth,
        height: window.innerHeight,
        stock: 10
    },
    created: function(){
        //イベントハンドラを登録

        addEventListener('mousemove', this.mousemoveHandler);
        addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy: function() {
        //イベントハンドラを解除

        removeEventListener('mousemove', this.mousemoveHandler);
        removeEventListener('resize', this.resizeHandler);
    },
    methods: {
        // mousemoveイベントハンドラ
        mousemoveHandler: function($event) {
            this.point.x = $event.clientX;
            this.point.y = $event.clientY;
        },

        // イベントハンドラ
        resizeHandler: function ($event) {
            // 現在のウィンドウサイズでプロパティを更新
            this.width = $event.target.innerWidth;
            this.height = $event.target.innerHeight;
        },
        //削除ボタンのクリックイベントハンドラ
        onDeleteItem: function () {
            this.stock--;
        }
    }
});