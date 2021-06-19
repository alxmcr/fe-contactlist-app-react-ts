export type ContactType = {
    id: string
    name: string
    phone: string
    photo: string
}

export type ContactsState = {
    contacts: ContactType[]
}

export type ContactProps = {
    contact: ContactType
}

export type ContactCardProps = {
    setShowModal: (showModal: boolean) => void
}
export type ModalContainerProps = {
    showModal: boolean
}

export type ContactsProps = {
    contacts: ContactType[]
}

export type ModalContactProps = {
    children: React.ReactNode
}