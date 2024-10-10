import { useAccordionContext, AccordionProvider } from './AccordionProvider';

type AccordionItemProps = {
    index: number;
    children: (props: { isActive: boolean }) => React.ReactNode;
}

type AccordionButtonProps = {
    index: number;
    children: React.ReactNode;
}

type AccordionContentProps = {
    isActive: boolean;
    children: React.ReactNode;
}

type AccordionComposition = {
    Item: (props: AccordionItemProps) => React.ReactNode
    Button: (props: AccordionButtonProps) => React.ReactNode
    Content: (props: AccordionContentProps) => React.ReactNode
}

type AccordionProps = {
    children: React.ReactNode
}

type AccordionWrapper = (props: AccordionProps) => React.ReactNode

const Accordion: AccordionWrapper & AccordionComposition = ({ children }) => {
    return <AccordionProvider>{children}</AccordionProvider>
}

Accordion.Item = ({ children, index }) => {
    const { activeIndex } = useAccordionContext();
    const isActive = activeIndex === index;

    return <div>{children({ isActive })}</div>;
};

Accordion.Button = ({ children, index }) => {
    const { activeIndex, setActiveIndex } = useAccordionContext();
    const isActive = activeIndex === index;
    const activeColor = isActive ? 'blue' : '';

    return (
        <button
            onClick={() => setActiveIndex(isActive ? -1 : index)}
            style={{ color: activeColor }}
        >
            {children}
        </button>
    );
};

Accordion.Content = ({ children, isActive }) => {
    return isActive ? <div>{children}</div> : null;
};

export default Accordion;