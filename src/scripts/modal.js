/* Desenvolva sua lógica aqui */

import { insertedValues } from "./valuesData.js"
import { renderValues } from "./render.js"

export function registerNewValue() {

    const input = document.querySelector(".modal__input")
    const buttonConfirm = document.querySelector(".modal__button-confirm")
    const buttonCategory = document.querySelectorAll(".modal__button--categoryID")
    const buttonInput = document.querySelector(".modal__button-input")
    const buttonExit = document.querySelector(".modal__button-exit")

    let newValue = {}

    buttonCategory.forEach(element => {
        element.addEventListener('click', () => {
            newValue.categoryID = Number(element.id)
            if (element.id == 0) {
                buttonInput.classList.add("modal__button--toggle")
                buttonExit.classList.remove("modal__button--toggle")
            } else {
                buttonInput.classList.remove("modal__button--toggle")
                buttonExit.classList.add("modal__button--toggle")
            }
        })
    })

    buttonConfirm.addEventListener("click", () => {

        if (input.value != "" && newValue.categoryID != null && input.value >= 0) {
            newValue.value = Number(parseFloat(input.value).toFixed(2))
            newValue.id = Number(insertedValues.length + 1)

            insertedValues.push(newValue)


            input.value = ""

            renderValues(insertedValues)
            newValue = {}

            buttonInput.classList.remove("modal__button--toggle")
            buttonExit.classList.remove("modal__button--toggle")

            const modal = document.querySelector(".modal")
            modal.close()

        }

    })


}
