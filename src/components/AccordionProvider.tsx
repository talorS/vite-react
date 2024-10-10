import {
    useState,
    useContext,
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode
} from 'react';

type AccordionContextProps = {
    activeIndex: number
    setActiveIndex: Dispatch<SetStateAction<number>>
}

type AccordionProviderProps = {
    children: ReactNode
}

const initialContext: AccordionContextProps = {
    activeIndex: -1,
    setActiveIndex: () => { },
}

const AccordionContext = createContext(initialContext);

export const AccordionProvider = ({ children }: AccordionProviderProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    return (
        <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div>{children}</div>
        </AccordionContext.Provider>
    );
};

export function useAccordionContext(): AccordionContextProps {
    const context = useContext(AccordionContext);
    if (context === undefined) {
        throw new Error('useAccordion must be used within an AccordionProvider')
    }
    return context;
}