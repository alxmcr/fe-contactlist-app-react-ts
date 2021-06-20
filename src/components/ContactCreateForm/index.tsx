import React, { useState } from "react";
import { ContactCreateFormProps, ContactType } from "types/AppTypes/AppTypes";
import "./ContactCreateForm.styles.css";

export const ContactCreateForm = ({ dispatch }: ContactCreateFormProps) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handlerPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }
    const handleCreateContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `Contact-${Math.floor(Math.random() * 77777)}`;
        const newContact: ContactType = { id, name, phone }
        dispatch({ type: "add", payload: newContact })
    }
    return (
        <form className="modal__form" onSubmit={handleCreateContact}>
            <div className="modal__inputgroup">
                <label htmlFor="name" className="modal__label">Name:</label>
                <input type="text"
                    className="modal__input"
                    id="name"
                    name="name"
                    placeholder="Enter some name"
                    onChange={handlerName}
                    required
                />
            </div>
            <div className="modal__inputgroup">
                <label htmlFor="phone" className="modal__label">Phone:</label>
                <input type="text"
                    className="modal__input"
                    id="phone"
                    name="phone"
                    placeholder="Enter some phone number"
                    onChange={handlerPhone}
                    required
                />
            </div>
            <button className="modal__button modal__button--resume">Create</button>
        </form>
    )
}