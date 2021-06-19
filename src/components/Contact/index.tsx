import { ContactProps } from "../../types/AppTypes/AppTypes"

export const Contact = ({ contact }: ContactProps) => {
    return (
        <div className="contacts__contact" id={contact.id}>
            <img src={contact.photo}
                alt={`Photo by ${contact.name}`}
                className="contacts__photo"
            />
            <div className="contacts__info">
                <p className="contacts__name">{contact.name}</p>
                <p className="contacts__phone">{contact.phone}</p>
            </div>
        </div>
    )
}