import {
    useContext,
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useState
} from 'react';

type ModalContextProps = {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

type ModalProviderProps = {
    children: ReactNode
}

const initialContext: ModalContextProps = {
    isModalOpen: false,
    setIsModalOpen: () => { },
}

const ModalContext = createContext<ModalContextProps>(initialContext);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a Modal')
    }
    return context;
}