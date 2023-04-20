import { getReservations, deleteReservation, getClowns, saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const convertReservationToListItem = (reservation) => {
    const clowns = getClowns()
    const listItem = `<li>
                        Reservation for little ${reservation.childName}, booked by ${reservation.parentName} for ${reservation.date}.
                        <button class="reservation__deny"
                            id="reservation--${reservation.id}">
                            Deny
                        </button>
                    </li>
                    <select class="clowns" id="clowns">
                        <option value="">Choose</option>
                         ${
                            clowns.map(
                                clown => {
                                    return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                                }
                             ).join("")
                        }
                    </select>`
    return listItem
}

export const Reservations = () => {
    const reservations = getReservations()
    let html = `
        <ul>
        ${
            reservations.map(convertReservationToListItem).join("")
        }
        </ul> `
    return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")){
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns"){
            const [reservationId, clownId] = event.target.value.split("--")

            const completion = {
                "reservationId": reservationId,
                "clownId": clownId,
                "date_created": Date.now()
            }

            saveCompletion(completion)
        }
    }
)