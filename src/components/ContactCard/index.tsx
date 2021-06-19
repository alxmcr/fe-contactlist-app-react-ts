import { ContactList } from "components/ContactList";
import { ContactSearchForm } from "components/ContactSearchForm";
import { useContacts } from "hooks/useContacts";
import { ContactCardProps } from "types/AppTypes/AppTypes";
import './ContactCard.styles.css';

export const ContactCard = ({ setShowModal }: ContactCardProps) => {

    const { contacts, isLoading, error } = useContacts();

    if (isLoading) return <p>Loading...</p>
    if (error !== null) return <p>There was an error</p>
    if (contacts?.length === 0) return <p>Contact list is empty.</p>

    const handleShowModal = () => {
        console.log("Add..");
        setShowModal(true);
    }

    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__heading">
                    <h1 className="contacts__title">Contacts</h1>
                    <button className="contacts__btn contacts__btn--plus" onClick={handleShowModal}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <ContactSearchForm />
            </div>
            <div className="contacts__body">
                <ContactList contacts={contacts} />
            </div>
        </div>
    )
}