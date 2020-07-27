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
    // showData() {
    //     const vm = this;
    //     let list = document.getElementById("cardList");
    //     vm.data.forEach((item) => {
    //         const template = `
    //         <div class="col-12 col-md-6 col-xl-3 mb-2">
    //             <div class="card" style="width: 16rem;">
    //             <img class="card-img-top" src="${item.imageUrl[0]}" alt="Card image cap">
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.content}</p>
    //                 <a href="#" class="btn btn-primary disabled">準備中</a>
    //             </div>
    //             </div>
    //         </div>
    //         `;
    //         list.innerHTML = list.innerHTML + template;
    //     });
    // },
    // create(data) {
    //     console.log(data);
    //     const vm = this;
    //     const url = vm.webSite + vm.uuid + `/admin/ec/product`
    //     axios.post(url, data).then((res) => console.log(res)).catch((err) => console.log(err));
    // },
    // update(id, data) {
    //     const vm = this;
    //     const url = vm.webSite + vm.uuid + `/admin/ec/product/${id}`
    //     axios.patch(url, data).then((res) => console.log(res)).catch((err) => console.log(err));
    // },
    // delete(id) {
    //     const vm = this;
    //     const url = vm.webSite + vm.uuid + `/admin/ec/product/${id}`;
    //     axios.delete(url).then((res) => console.log(res)).catch((err) => console.log(err));
    // }
};

export default httpClient;
