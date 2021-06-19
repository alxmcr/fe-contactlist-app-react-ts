import { ContactList } from "components/ContactList";
import { useReducer } from "react";
import { contactReducer, initialState } from "reducer/ContactReducer";

export const ContactCard = () => {

    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__heading">
                    <h1 className="contacts__title">Contacts</h1>
                    <i className="fas fa-plus contacts__icon--plus"></i>
                </div>
            </div>
            <div className="contacts__body">
                <ContactList contacts={state.contacts} />
            </div>
        </div>
    )
}