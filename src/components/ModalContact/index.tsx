export const ModalContact = () => {
    return (
        <section className="container" id="container-modal-info">
            <div className="modal">
                <div className="modal__header">
                    <i className="fas fa-info-circle modal__icon modal__icon--info"></i>
                    <button className="modal__button modal__button--close" id="btn-modal-close">
                        <i className="fas fa-times modal__icon modal__icon--close"></i>
                    </button>
                </div>
                <div className="modal__body">
                    <p className="modal__description">Your session has expired.</p>
                    <p className="modal__details">Enter your password to pick up where you left off</p>
                </div>
                <div className="modal__body">
                    <form className="modal__form">
                        <label htmlFor="password" className="modal__label">Password</label>
                        <input type="password" className="modal__input" />
                        <button className="modal__button modal__button--resume">RESUME</button>
                    </form>
                </div>
            </div>
        </section>
    )
}