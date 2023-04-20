import { sendReservation } from "./dataAccess.js"


export const Form = () => {
    let html = `
    <div class="orderForm">
        <div class="field">
            <label class="label" for="reservationParentName">Parent Name</label>
            <input type="text" name="reservationParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationChildName">Child Name</label>
            <input type="text" name="reservationChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationNumberOfKids">Number of Children</label>
            <input type="number" name="reservationNumberOfKids" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date of Reservation</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Length of Reservation (in hours)</label>
            <input type="number" name="reservationLength" class="input" />
        </div>
    </div>
        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

//click event listener for submit request button
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        //collect what user typed in form fields
        const userParentName = document.querySelector("input[name='reservationParentName']").value
        const userChildName = document.querySelector("input[name='reservationChildName']").value
        const userNumberOfKids = document.querySelector("input[name='reservationNumberOfKids']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userDateOfReservation = document.querySelector("input[name='reservationDate']").value
        const userLengthOfReservation = document.querySelector("input[name='reservationLength']").value

        //make object from user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numeberOfKids: userNumberOfKids,
            address: userAddress,
            date: userDateOfReservation,
            length: userLengthOfReservation,
            date_created: Date.now()
        }

        sendReservation(dataToSendToAPI)
    }
})