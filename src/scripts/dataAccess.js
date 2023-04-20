const applicationState = {
    reservations: [],
    completions: [],
    clowns: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then(res => res.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then (res => res.json())
    .then(
        (reservations) => {
            applicationState.reservations = reservations
        }
    )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then ( res => res.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        }
    )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
    .then(res => res.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}