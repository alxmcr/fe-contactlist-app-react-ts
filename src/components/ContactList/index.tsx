import { Contact } from "components/Contact"
import { ContactsProps } from "types/AppTypes/AppTypes"

export const ContactList = ({ contacts }: ContactsProps) => {
    return (
        <>
            {contacts?.length === 0 && <p>Contact's list is empty.</p>}
            {
                contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))
            }
        </>
    )
}