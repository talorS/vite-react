import { PropsWithChildren } from 'react';
import { TableProvider } from './TableContext';

type TableHedingProps = PropsWithChildren & {
    className?: string;
}

type TableCol = {
    id: number,
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

type TableBodyProps = PropsWithChildren & {
    data: TableCol[],
    render: (elm: TableCol, index: number) => React.ReactNode
}

export const Table = ({ children }: PropsWithChildren) => {
    return (
        <TableProvider>
            {children}
        </TableProvider>
    );
}

Table.Header = ({ children }: PropsWithChildren) => {
    return (
        <thead className="bg-resources-bg text-mid-grey rounded-lg">
            <tr className="text-left">{children}</tr>
        </thead>
    );
}

Table.Heading = ({ children, className }: TableHedingProps) => {
    return (
        <th className={`px-6 py-2 whitespace-nowrap ${className}`}>{children}</th>
    );
}

Table.Body = ({ data, render }: TableBodyProps) => {
    if (!data?.length)
        return (
            <tbody>
                <tr>
                    <td className="text-center py-4 text-slate-400">
                        Data not avalaible!
                    </td>
                </tr>
            </tbody>
        );

    return <tbody>{data?.map(render)}</tbody>;
}

export default Table;