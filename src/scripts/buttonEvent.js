import { insertedValues } from "./valuesData.js"
import { renderValues } from "./render.js"
import { registerNewValue } from "./modal.js"

export function handleFilter() {
    const filter = document.querySelectorAll(".container-first__button")

    filter.forEach(Element => {
        Element.addEventListener('click', () => {
            if (Element.id == "all") {
                renderValues(insertedValues)
            } else {
                const newArray = insertedValues.filter(item => item.categoryID == Element.id)
                renderValues(newArray)
            }
        })
    })
}

export function showModal() {

    const register = document.querySelectorAll(".register-button")
    const modal = document.querySelector(".modal")

    register.forEach(button => {
        button.addEventListener('click', () => {
            modal.showModal()
            closeModalButton()
        })
    })

    registerNewValue()

}

export function closeModalButton() {
    const buttonClose = document.querySelectorAll(".close-modal")
    const modal = document.querySelector(".modal")

    buttonClose.forEach(button => {
        button.addEventListener('click', () => {
            modal.close()
        })
    })

}

export function handleRemoveValue() {
    const buttonRemove = document.querySelectorAll(".container-data__button")
    buttonRemove.forEach(element => {
        element.addEventListener('click', () => {
            const valueRemove = insertedValues.findIndex(value => value.id === Number(element.dataset.id))
            insertedValues.splice(valueRemove, 1)
            insertedValues.forEach((element, index) => { element.id = index + 1 })
            renderValues(insertedValues)
        })
    })
}