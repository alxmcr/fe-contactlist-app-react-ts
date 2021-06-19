import './ContactForm.styles.css'

export const ContactForm = () => {
    return (
        <form className="contacts__form">
            <label htmlFor="name" className="contacts__label">Name:</label>
            <div className="contacts__search">
                <input type="text" name="name" id="name" placeholder="Search" className="contacts__input" required />
                <button className="contacts__btn contacts__btn--search">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    )
}