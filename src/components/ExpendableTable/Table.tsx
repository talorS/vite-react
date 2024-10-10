import React from 'react';
import TableRow from './TableRow';
import NestedTable from './NestedTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUsers } from '../../hooks/useQuery';
import useOpenController from '../../hooks/useOpenController';

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'UserName' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'website', label: 'Website' },
];

const ExpendableTable = () => {
    const { expandedRows, handleExpandClick } = useOpenController();
    const { data: mainTableData, isError, isLoading } = useUsers();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return (
        <table border={1} cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th style={{ width: '5%' }}></th>
                    {columns.map(col => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {mainTableData?.map(row => (
                    <React.Fragment key={row.id}>
                        <TableRow
                            data={row}
                            columns={columns}
                            isExpandable={true}
                            onExpandClick={() => handleExpandClick(row.id)}
                            isExpanded={expandedRows.includes(row.id)}
                        />
                        {expandedRows.includes(row.id) && (
                            <tr>
                                <td colSpan={columns.length + 1}>
                                    <NestedTable userId={row.id} />
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

const queryClient = new QueryClient();
const ExpendableTableProvider = () => (
    <QueryClientProvider client={queryClient}>
        <ExpendableTable />
    </QueryClientProvider>
);

export default ExpendableTableProvider;
