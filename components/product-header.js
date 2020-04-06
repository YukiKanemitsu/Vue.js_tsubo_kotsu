var productHeader = {
    template: `
        <header>
            <h1 class="pageTitle">
                商品一覧
            </h1>
            <!-- 検索欄 -->
            <div class="search">
                <div class="result">
                    検索結果
                    <span class="count">
                        {{ count }} 件
                    </span>
                </div>
                <div class="condition">
                    <div class="target">
                        <label for="">
                            <input type="checkbox" 
                                name="" id=""
                                :checked="showSaleItem"
                                @change="$emit('showSaleItemChanged')"
                                >
                            セール対象
                        </label>
                        <label for="">
                            <input type="checkbox" 
                                name="" id=""
                                :checked="showDelvFree"
                                @change="$emit('showDelvFreeChanged')"
                                >
                            送料無料
                        </label>
                    </div>
                    <div class="sort">
                        <label for="sort">
                            並び替え
                        </label>
                        <select name="" id="sort" class="sorting" :value="sortOrder"
                            @change="$emit('sortOrderChanged', parseInt($event.target.value))">
                            <option value="1">
                                標準
                            </option>
                            <option value="2">
                                価格が安い順
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </header>`,
        props: [
            'count',
            'showSaleItem',
            'shohwDelvFree',
            'sortOrder'
        ]
};