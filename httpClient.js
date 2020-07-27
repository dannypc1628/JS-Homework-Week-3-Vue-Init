var httpClient = {
    uuid: "e7b798fe-6e68-48d0-81f4-fc1f1740833d",
    webSite: "https://course-ec-api.hexschool.io/api/",
    token: "Bearer ",
    data: [],
    getData: function () {
        const vm = this;
        const url = vm.webSite + vm.uuid + "/ec/products";
        console.log(url);
        return axios.get(url);
    },
    showData() {
        const vm = this;
        let list = document.getElementById("cardList");
        vm.data.forEach((item) => {
            const template = `
            <div class="col-12 col-md-6 col-xl-3 mb-2">
                <div class="card" style="width: 16rem;">
                <img class="card-img-top" src="${item.imageUrl[0]}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                    <a href="#" class="btn btn-primary disabled">準備中</a>
                </div>
                </div>
            </div>
            `;
            list.innerHTML = list.innerHTML + template;
        });
    },
    create(data) {
        console.log(data);
        const vm = this;
        const url = vm.webSite + vm.uuid + `/admin/ec/product`
        axios.post(url, data).then((res) => console.log(res)).catch((err) => console.log(err));
    },
    update(id, data) {
        const vm = this;
        const url = vm.webSite + vm.uuid + `/admin/ec/product/${id}`
        axios.patch(url, data).then((res) => console.log(res)).catch((err) => console.log(err));
    },
    delete(id) {
        const vm = this;
        const url = vm.webSite + vm.uuid + `/admin/ec/product/${id}`;
        axios.delete(url).then((res) => console.log(res)).catch((err) => console.log(err));
    }
};

export default httpClient;
// var newData = {
//     title: '小書痴的下剋上：為了成為圖書管理員不擇手段！【第四部】貴族院的自稱圖書委員III',
//     category: '幻奇冒險',
//     content: "隔了好一段時間，羅潔梅茵終於再度回到神殿，但奉獻儀式、印刷事務、無數的會見和文件處理等神殿長的工作，讓她每天都忙碌不已。時序進入冬天尾聲，羅潔梅茵身邊依然不斷發生各種大大小小的變化。在一年級學期快要結束的時候，她在貴族院舉辦了全領地的茶會，而高年級的領主候補生與近侍也即將舉行畢業儀式。為了領地的繁榮，羅潔梅茵的婚約開始受到討論。但她最擔心的，卻是即將與平民區的人們分離……",
//     description: '作者：香月美夜',
//     imageUrl: [
//         'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/085/07/0010850791.jpg&v=5e53a5ab'
//     ],
//     enabled: true,
//     origin_price: 299,
//     price: 299,
//     unit: '本',
// };
// var updateObj = { content: '作者：香月美夜', description: '春天的腳步近了，在貴族院的第一年也正式畫下句點。即使如此，該做的事情還是堆積如山，羅潔梅茵完全沒有時間為了與平民區的人們別離而悲傷。她不只要增加與路茲約定好的書本製作量，還要與神官長一起製作魔導具墨水，並帶侍從和護衛騎士們前往直轄地舉行祈福儀式。出於政治考量，慶春宴上也將宣布她的婚約對象。然而，在看似平靜的生活中，亞倫斯伯罕在檯面下的動作卻越來越多，羅潔梅茵不得不提高警戒……' }