import { Contact } from "components/Contact"
import { ContactListProps } from "types/AppTypes/AppTypes"

export const ContactList = ({ contacts }: ContactListProps) => {
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