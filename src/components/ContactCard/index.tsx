import { ContactList } from "components/ContactList";
import { useContacts } from "hooks/useContacts";
import './ContactCard.styles.css';

export const ContactCard = () => {

    const { contacts, isLoading, error } = useContacts();

    if (isLoading) return <p>Loading...</p>
    if (error !== null) return <p>There was an error</p>
    if (contacts?.length === 0) return <p>Contact list is empty.</p>

    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__heading">
                    <h1 className="contacts__title">Contacts</h1>
                    <i className="fas fa-plus contacts__icon--plus"></i>
                </div>
            </div>
            <div className="contacts__body">
                <ContactList contacts={contacts} />
            </div>
        </div>
    )
}