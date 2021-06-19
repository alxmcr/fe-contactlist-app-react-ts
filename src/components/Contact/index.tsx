import { ContactProps } from "../../types/AppTypes/AppTypes"
import './Contact.styles.css'

export const Contact = ({ contact }: ContactProps) => {
    return (
        <div className="contacts__contact" id={contact.id}>
            <img src={contact.photo}
                alt={`${contact.name}-${contact.id}`}
                className="contacts__photo"
            />
            <div className="contacts__info">
                <p className="contacts__name">{contact.name}</p>
                <p className="contacts__phone">{contact.phone}</p>
            </div>
        </div>
    )
}