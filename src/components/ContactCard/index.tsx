import { ContactList } from "components/ContactList";
import { ContactSearchForm } from "components/ContactSearchForm";
import { ContactCardProps } from "types/AppTypes/AppTypes";
import './ContactCard.styles.css';

export const ContactCard = ({ state, setShowModal }: ContactCardProps) => {
    const handleShowModal = () => setShowModal(true);

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
                <ContactList contacts={state.contacts} />
            </div>
        </div>
    )
}