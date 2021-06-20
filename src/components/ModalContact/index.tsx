import { ModalContactProps } from "types/AppTypes/AppTypes";
import './ModalContact.styles.css';

export const ModalContact = ({ children, setShowModal }: ModalContactProps) => {
    const handleCloseModal = () => setShowModal(false);
    return (
        <div className="modal">
            <div className="modal__header">
                <i className="fas fa-info-circle modal__icon modal__icon--info"></i>
                <button
                    className="modal__button modal__button--close"
                    id="btn-modal-close"
                    onClick={handleCloseModal}
                >
                    <i className="fas fa-times modal__icon modal__icon--close"></i>
                </button>
            </div>
            <div className="modal__body">
                {children}
            </div>
        </div>
    )
}