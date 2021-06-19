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

export type ContactsProps = {
    contacts: ContactType[]
}

export type ModalContactProps = {
    children: React.ReactNode
}