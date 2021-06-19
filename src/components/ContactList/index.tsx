import { Contact } from "components/Contact"
import { ContactsProps } from "types/AppTypes/AppTypes"

export const ContactList = ({ contacts }: ContactsProps) => {

    if (contacts?.length === 0) return <p>Contact's list is empty.</p>

    return (
        <div>
            {
                contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))
            }
        </div>
    )
}