import { Contact } from "components/Contact"
import { ContactsProps } from "types/AppTypes/AppTypes"

export const ContactList = ({ contacts }: ContactsProps) => {
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