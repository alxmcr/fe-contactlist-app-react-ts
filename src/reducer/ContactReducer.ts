import { ContactsState, ContactType } from "types/AppTypes/AppTypes";

// Initial state
export const initialState: ContactsState = {
    contacts: []
}

// Actions Types
export type ACTION_TYPES =
    | { type: "add", payload: ContactType }
    | { type: "remove", payload: ContactType }

// Contact reducer
export const contactReducer = (state: ContactsState, action: ACTION_TYPES) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "remove":
            const updateContacts: ContactType[] = state.contacts.filter(contact => {
                return contact.id !== action.payload.id
            })
            return {
                ...state,
                contacts: updateContacts
            }
        default:
            throw new Error("Bad action")
    }
}