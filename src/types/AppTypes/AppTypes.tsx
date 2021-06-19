export type ContactType = {
    id: number
    name: string
    phone: string
    photo: string
}

export type ContactList = {
    contacts: ContactType[]
}

export type ContactProps = {
    contact: ContactType
}

export type ContactListProps = {
    contacts: ContactType[]
}