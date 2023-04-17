/* Desenvolva sua lógica aqui */

import { insertedValues } from "./valuesData.js"
import { renderValues } from "./render.js"

export function registerNewValue() {

    const input = document.querySelector(".modal__input")
    const buttonConfirm = document.querySelector(".modal__button-confirm")
    const buttonCategory = document.querySelectorAll(".modal__button--categoryID")

    let newValue = {}

    buttonCategory.forEach(element => {
        element.addEventListener('click', () => {
            newValue.categoryID = Number(element.id)
        })
    })

    buttonConfirm.addEventListener("click", () => {

        if (input.value == "" || newValue.categoryID == null) {
            alert("Porfavor preencha o valor e selecione entrada ou saida.")
        } else {
            newValue.value = Number(parseFloat(input.value).toFixed(2))
            newValue.id = Number(insertedValues.length + 1)

            insertedValues.push(newValue)


            input.value = ""

            renderValues(insertedValues)
            newValue = {}
            const modal = document.querySelector(".modal")
            modal.close()

        }

    })


}
