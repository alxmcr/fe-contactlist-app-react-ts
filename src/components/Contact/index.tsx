import phone from 'phone.svg';
import { ContactProps } from "../../types/AppTypes/AppTypes";
import './Contact.styles.css';

export const Contact = ({ contact }: ContactProps) => {
    return (
        <div className="contacts__contact" id={contact.id}>
            <img
                src={phone}
                className="contacts__photo"
                alt={`Contact ${contact.name}`}
            />
            <div className="contacts__info">
                <p className="contacts__name">{contact.name}</p>
                <p className="contacts__phone">{contact.phone}</p>
            </div>
        </div>
    )
}