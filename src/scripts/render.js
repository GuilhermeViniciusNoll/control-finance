import { valuesCategory, insertedValues } from "./valuesData.js"
import { handleRemoveValue } from "./buttonEvent.js"

export function renderValues(array) {

    const ul = document.querySelector(".container-data__ul")

    ul.innerHTML = ""

    array.forEach(value => {
        const li = createHtmlElements(value)
        ul.appendChild(li)
    });

    handleRemoveValue()

    renderAmount(array)

    checkContainerEmpty(array)
}

function createHtmlElements({ id, value, categoryID }) {

    const li = document.createElement("li")
    const spanValue = document.createElement("span")
    const container = document.createElement("div")
    const spanCategory = document.createElement("span")
    const contaier2 = document.createElement("div")
    const buttonRemove = document.createElement("img")

    li.append(spanValue, container)
    container.append(contaier2, buttonRemove)
    contaier2.appendChild(spanCategory)

    li.classList.add("container-data__li")
    container.classList.add("container-data__container")
    spanValue.classList.add("container-data__value")
    contaier2.classList.add("container-data__container-category")
    spanCategory.classList.add("container-data__category")
    buttonRemove.classList.add("container-data__button")

    spanValue.innerText = "R$ " + value.toFixed(2)
    spanCategory.innerText = valuesCategory[categoryID]
    buttonRemove.src = "./src/assets/trash.svg"
    buttonRemove.dataset.id = id

    return li
}

function renderAmount(array) {

    const amountValue = document.querySelector(".container-sum__span")

    let value = array.reduce((accumulator, item) => accumulator + item.value, 0)

    amountValue.innerText = "R$ " + value.toFixed(2)
}

function checkContainerEmpty(array) {
    const empty = document.querySelector(".container__container-empty")

    if (array.length > 0) {
        empty.classList.add("container__container-empty--toggle")
    } else {
        empty.classList.remove("container__container-empty--toggle")
    }
}