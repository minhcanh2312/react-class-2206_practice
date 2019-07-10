const showIphoneBtn = document.querySelector('.showIphone')
const showAndroidBtn = document.querySelector('.showAndroid')
const showPriceLessThan1000Btn = document.querySelector('.priceLessThan1000')
const showPriceGreaterThan1000Btn = document.querySelector('.priceGreaterThan1000')
const addBtn = document.querySelector('.addBtn')

function hideElement(element) {
    element.classList.add('hide') //classList là 1 thuộc tính có sẵn của 1 html element
}

function displayElement(element) {
    element.classList.remove('hide')
}

function isIphone(element) {
    let type = element.getAttribute('data-type')
    return type === 'iPhone' // biểu thức điều kiện trả về kiểu boolean, có thể gán cho 1 biến, hoặc trả về trực tiếp
}

function isAndroid(element) {
    let androidTypes = ['samsung', 'xiaomi', 'bphone', 'winphone', 'huaway']
    let type = element.getAttribute('data-type')
    let result = androidTypes.indexOf(type) !== -1 // indexOf là 1 phương thức có sẵn trên mọi Array, nó trả về thứ tự index của phần tử đó trong mảng nếu có. Không có thì sẽ trả về -1
    return result
}

function isPriceLessThan1000(price) {
    if (price < 1000) return true
}

function isPriceGreaterThan1000(price) {
    if (price > 1000) return true
}

showIphoneBtn.addEventListener('click', function() {
    showIphoneBtn.classList.toggle('on')
    let productEls = Array.from(document.querySelectorAll('.product'))
    for (let i = 0; i < productEls.length; i++) {
        let productEl = productEls[i]
        let check = showIphoneBtn.getAttribute('class').split(" ").indexOf("on")
        if (check === -1 && isIphone(productEl)) {
            hideElement(productEl)
        } else if (check !== -1 && isIphone(productEl)) {
            displayElement(productEl)
        }
    }
})

showAndroidBtn.addEventListener('click', function() {
    showAndroidBtn.classList.toggle('on')
    let productEls = Array.from(document.querySelectorAll('.product'))
    for (let i = 0; i < productEls.length; i++) {
        let productEl = productEls[i]
        let check = showAndroidBtn.getAttribute('class').split(" ").indexOf("on")
        if (check === -1 && isAndroid(productEl)) {
            hideElement(productEl)
        } else if (check !== -1 && isAndroid(productEl)) {
            displayElement(productEl)
        }
    }
})

showPriceLessThan1000Btn.addEventListener('click', function() {
    showPriceLessThan1000Btn.classList.toggle('on')
    let productEls = Array.from(document.querySelectorAll('.product'))
    for (let i = 0; i < productEls.length; i++) {
        let productEl = productEls[i]
        let price = Number(productEls[i].getAttribute('data-price'))
        let check = showPriceLessThan1000Btn.getAttribute('class').split(" ").indexOf("on")
        if (check === -1 && isPriceLessThan1000(price)) {
            hideElement(productEl)
        } else if (check !== -1 && isPriceLessThan1000(price)) {
            displayElement(productEl)
        }
    }
})

showPriceGreaterThan1000Btn.addEventListener('click', function() {
    showPriceGreaterThan1000Btn.classList.toggle('on')
    let productEls = Array.from(document.querySelectorAll('.product'))
    for (let i = 0; i < productEls.length; i++) {
        let productEl = productEls[i]
        let price = Number(productEls[i].getAttribute('data-price'))
        let check = showPriceGreaterThan1000Btn.getAttribute('class').split(" ").indexOf("on")
        if (check === -1 && isPriceGreaterThan1000(price)) {
            hideElement(productEl)
        } else if (check !== -1 && isPriceGreaterThan1000(price)) {
            displayElement(productEl)
        }
    }
})

function addNewItem() {
    let content = document.querySelector('.content')
    let newItem = document.createElement('div')
    let name = document.querySelector('[name=phoneName]').value
    let type = document.querySelector('[name=phoneType]').value
    let price = document.querySelector('[name=phonePrice]').value
    let dataId = document.querySelector('[data-id]:last-child').getAttribute('data-id')
    dataId++
    newItem.setAttribute('class', 'product')
    newItem.setAttribute('data-id', dataId)
    newItem.setAttribute('data-price', price)
    newItem.setAttribute('data-type', type)
    let h3 = document.createElement('h3')
    h3.innerText = name
    newItem.appendChild(h3)
    let span = document.createElement('span')
    span.innerText = price
    newItem.appendChild(span)
    if ((name && type && price) === '') {
        alert('Ban chua dien day du thong tin')
    } else {
        content.appendChild(newItem)
    }
}