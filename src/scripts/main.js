import { fetchReservations, fetchClowns } from "./dataAccess.js"
import { PartyClown } from "./PartyClown.js"

const mainContainer = document.querySelector("#container")

//render function
//includes fetchReservations, fetchClowns, fetchCompletions, then
const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(() => {
        mainContainer.innerHTML = PartyClown()
    })
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)