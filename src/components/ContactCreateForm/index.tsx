import "./ContactCreateForm.styles.css"

export const ContactCreateForm = () => {
    return (
        <form className="modal__form">
            <label htmlFor="password" className="modal__label">Password</label>
            <input type="password" className="modal__input" />
            <button className="modal__button modal__button--resume">RESUME</button>
        </form>
    )
}