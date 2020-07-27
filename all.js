import httpClient from './httpClient.js';
var app = new Vue({
    el: '#myApp',
    data: {
        itemList: [],
        tempData: {
            title: 'title',
            category: 'category',
            unit: 'unit',
            origin_price: '123',
            price: '55',
            description: 'ddd',
            content: 'content',
            imageUrl: 'imageUrl',
            enabled: true
        },
        modalTitle: '',
        modalButton: '',
        deleteItemName: ''
    },
    methods: {
        getList() {
            console.log('getList');
            const vm = this;
            httpClient.getData().then((res) => {
                console.log(res);
                vm.itemList = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
        },
        create() {
            this.modalTitle = "新增產品";
            this.modalButton = "新增";
            this.cleanTempData();
        },
        edit(item) {
            console.log(item);
            this.modalTitle = "編輯產品";
            this.modalButton = "儲存";
            this.showTempData(item);
        },
        cleanTempData() {
            this.tempData = {
                title: '',
                category: '',
                unit: '',
                origin_price: '',
                price: '',
                description: '',
                content: '',
                imageUrl: ''
            };
        },
        deleted(item) {
            console.log(item);
            this.deleteItemName = item.title;
            $('#deleteModal').modal('show');
        },
        showTempData(item) {
            this.tempData = {
                title: item.title,
                category: item.category,
                unit: item.unit,
                origin_price: item.origin_price,
                price: item.price,
                description: item.description,
                content: item.content,
                imageUrl: item.imageUrl

            };
            $('#tempDataModal').modal('show');
        }
    },
    created() {
        const vm = this;
        //axios.defaults.headers.common['Authorization'] = httpClient.token;
        vm.getList();
    }
});

