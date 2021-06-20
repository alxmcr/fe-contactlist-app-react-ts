import { ACTION_TYPES } from "reducer/ContactReducer"

export type ContactType = {
    id: string
    name: string
    phone: string
}

export type ContactsState = {
    contacts: ContactType[]
}

export type ContactProps = {
    contact: ContactType
}

export type ContactCardProps = {
    state: ContactsState
    setShowModal: (showModal: boolean) => void
}
export type ModalContainerProps = {
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    dispatch: React.Dispatch<ACTION_TYPES>
}

export type ContactCreateFormProps = {
    dispatch: React.Dispatch<ACTION_TYPES>
    setShowModal: (showModal: boolean) => void
}

export type ContactsProps = {
    contacts: ContactType[]
}

export type ModalContactProps = {
    children: React.ReactNode
    setShowModal: (showModal: boolean) => void
}