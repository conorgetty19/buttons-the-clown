import { Form } from "./Form.js"
import { Reservations } from "./Reservations.js"

//main HTML function
//includes Form() and Reservations()
export const PartyClown = () => {
    return `
    <h1>Buttons and Lollipop the Clowns</h1>
    <section class="reservationForm">
        ${Form()}
    </section>

    <section class="reservationList">
        <h2>Reservations</h2>
        ${Reservations()}
    </section>`
}