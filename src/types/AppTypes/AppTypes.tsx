export type ContactType = {
    id: string
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