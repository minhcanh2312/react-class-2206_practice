function test() {
    let select = Number(document.querySelector('#mySelect').value)
    let products = Array.from(document.querySelectorAll('.productItem'))
    let length = products.length
        // debugger
    for (let i = 0; i < length; i++) {
        let price = Number(products[i].attributes["data-price"].value)
        if (select === 0) {
            return alert("Ban chua chon danh muc tim kiem")
        }
        if (select === 1 && price > 2500000) {
            products[i].classList.add('hide')
        } else if (select === 1 && price < 2500000) {
            products[i].classList.remove('hide')
        } else if (select === 2 && (price < 2500000 || price > 5000000)) {
            products[i].classList.add('hide')
        } else if (select === 2 && price >= 2500000 && price <= 5000000) {
            products[i].classList.remove('hide')
        } else if (select === 3 && price <= 5000000) {
            products[i].classList.add('hide')
        } else {
            products[i].classList.remove('hide')
        }
    }
}

function onFindProductsClick() {
    test()
}