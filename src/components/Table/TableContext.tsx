import { createContext, PropsWithChildren, useContext } from "react";

const TableContext = createContext(undefined);

export function TableProvider({ children }: PropsWithChildren) {
    return (
        <TableContext.Provider value={undefined}>
            <div className={`rounded-lg border overflow-scroll`}>
                <table className={`min-w-full`}>{children}</table>
            </div>
        </TableContext.Provider>
    );
}

export function useTableContext() {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error('useTableContext must be used within a TableProvider')
    }
    return context;
}