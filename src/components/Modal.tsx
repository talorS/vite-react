import {
    useRef,
    useEffect,
    PropsWithChildren
} from 'react';
import { ModalProvider, useModalContext } from './ModalProvider';

type ModalProps = PropsWithChildren & {
    buttonText?: string
}

type ModalOpenButtonProps = {
    buttonText?: string
}

type ModalHeaderProps = {
    title: string
}

type ModalBodyProps = PropsWithChildren & {
    description?: string
}

type ModalFooterProps = {
    confirmLable: string;
    closeLable: string;
}

const Modal = ({ children, buttonText = 'Open the Modal' }: ModalProps) => {
    return (
        <ModalProvider>
            <div>
                <Modal.OpenButton buttonText={buttonText} />
                <Modal.Dialog>
                    {children}
                </Modal.Dialog >
            </div>
        </ModalProvider>
    )
}

Modal.OpenButton = ({ buttonText }: ModalOpenButtonProps) => {
    const { setIsModalOpen } = useModalContext();
    return (
        <button onClick={() => setIsModalOpen(true)} className="border p-4 bg-indigo-300 rounded-md">
            {buttonText}
        </button>
    )
}

Modal.Dialog = ({ children }: PropsWithChildren) => {
    const { isModalOpen } = useModalContext();
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        const modalElement = modalRef.current

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal()
            } else {
                modalElement.close()
            }
        }
    }, [isModalOpen]);
    return (
        <dialog ref={modalRef}>{children}</dialog>
    );
}


Modal.Header = ({ title }: ModalHeaderProps) => {
    return <h2 className="text-2xl mb-4 font-bold">{title}</h2>;
}

Modal.Body = ({ description, children }: ModalBodyProps) => {
    return (
        <div className="flex flex-col mb-4">
            {description && <p>{description}</p>}
            {children}
        </div>
    );
}


Modal.Footer = ({ confirmLable, closeLable }: ModalFooterProps) => {
    const { setIsModalOpen } = useModalContext();
    return (
        <div className="flex justify-end gap-2">
            <button onClick={() => setIsModalOpen(false)} className="bg-red-600 p-2 rounded-md text-white">
                {confirmLable}
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-blue-400 p-2 rounded-md text-white">
                {closeLable}
            </button>
        </div>
    )
}

export default Modal;
