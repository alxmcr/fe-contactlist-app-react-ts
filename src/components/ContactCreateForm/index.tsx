import { ContactCreateFormProps } from "types/AppTypes/AppTypes";
import "./ContactCreateForm.styles.css";

export const ContactCreateForm = ({ dispatch }: ContactCreateFormProps) => {
    const handleCreateContact = () => {
        console.log("creating...");
    }
    return (
        <form className="modal__form">
            <div className="modal__inputgroup">
                <label htmlFor="name" className="modal__label">Name:</label>
                <input type="text" className="modal__input" id="name" name="name" />
            </div>
            <div className="modal__inputgroup">
                <label htmlFor="phone" className="modal__label">Phone:</label>
                <input type="text" className="modal__input" id="phone" name="phone" />
            </div>
            <button className="modal__button modal__button--resume" onClick={handleCreateContact}>Create</button>
        </form>
    )
}