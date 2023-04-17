/* Desenvolva sua lógica aqui */

import { insertedValues } from "./valuesData.js"
import { renderValues } from "./render.js"
import { handleFilter, showModal } from "./buttonEvent.js"


renderValues(insertedValues)
handleFilter()
showModal()
