import { ModalContactProps } from "types/AppTypes/AppTypes"
import './ModalContact.styles.css'

export const ModalContact = ({ children }: ModalContactProps) => {
    return (
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
                {children}
            </div>
        </div>
    )
}