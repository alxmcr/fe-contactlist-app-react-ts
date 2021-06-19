export const ContactCard = () => {
    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__heading">
                    <h1 className="contacts__title">Contacts</h1>
                    <i className="fas fa-plus contacts__icon--plus"></i>
                </div>
                <form className="contacts__form">
                    <label htmlFor="name" className="contacts__label">Name:</label>
                    <div className="contacts__search">
                        <input type="text" name="name" id="name" placeholder="Search" className="contacts__input" required />
                        <button className="contacts__btn contacts__btn--search">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="contacts__body">
            </div>
        </div>
    )
}