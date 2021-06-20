import { ContactCreateForm } from "components/ContactCreateForm";
import { ModalContact } from 'components/ModalContact';
import { ModalContainerProps } from "types/AppTypes/AppTypes";
import './ModalContainer.styles.css';


export const ModalContainer = ({
    dispatch,
    showModal,
    setShowModal
}: ModalContainerProps) => {
    const classContainer = showModal ? `container container--show` : `container`;

    return (
        <section className={classContainer} id="container-modal-info">
            <ModalContact setShowModal={setShowModal}>
                <ContactCreateForm
                    dispatch={dispatch}
                    setShowModal={setShowModal}
                />
            </ModalContact>
        </section>
    )
}