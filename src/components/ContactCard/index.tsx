import { ContactList } from "components/ContactList";
import React, { useEffect, useState } from "react";
import { ContactCardProps, ContactType } from "types/AppTypes/AppTypes";
import './ContactCard.styles.css';

export const ContactCard = ({ state, setShowModal }: ContactCardProps) => {
    const [name, setName] = useState<string>("");
    const [contactsFiltered, setContactsFiltered] = useState<ContactType[]>(state.contacts);
    const handleShowModal = () => setShowModal(true);
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    useEffect(() => {
        if (name === '') return setContactsFiltered(state.contacts)
        const contactsByName = [...state.contacts].filter(product => {
            return product.name.toLowerCase().includes(name.toLowerCase())
        })
        setContactsFiltered(contactsByName)
    }, [name, state])

    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__heading">
                    <h1 className="contacts__title">Contacts</h1>
                    <button className="contacts__btn contacts__btn--plus" onClick={handleShowModal}>
                        <i className="fas fa-plus contacts__icon contacts__icon--plus"></i>
                    </button>
                </div>
                <div className="contacts__searching">
                    <label htmlFor="nameSearch" className="contacts__label">Name:</label>
                    <div className="contacts__search">
                        <input
                            type="text"
                            name="nameSearch"
                            id="nameSearch"
                            placeholder="Search"
                            className="contacts__input"
                            required
                            onChange={handleName}
                        />
                        <i className="fas fa-search contacts__icon contacts__icon--search"></i>
                    </div>
                </div>
            </div>
            <div className="contacts__body">
                <ContactList contacts={contactsFiltered} />
            </div>
        </div>
    )
}