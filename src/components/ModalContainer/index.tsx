import { ContactCreateForm } from "components/ContactCreateForm";
import { ModalContact } from 'components/ModalContact';
import './ModalContainer.styles.css';

export const ModalContainer = () => {
    return (
        <section className="container" id="container-modal-info">
            <ModalContact>
                <ContactCreateForm />
            </ModalContact>
        </section>
    )
}