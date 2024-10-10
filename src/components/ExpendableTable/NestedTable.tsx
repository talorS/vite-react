import { useUserPosts } from '../../hooks/useQuery';
import TableRow from './TableRow';

type NestedTableProps = {
    userId: number;
};

const columns = [
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body' },
];

const NestedTable = ({ userId }: NestedTableProps) => {
    const { data: nestedTableData, isError, isLoading } = useUserPosts(userId);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return (
        <table border={1} cellPadding="5" cellSpacing="0" style={{ width: '100%' }}>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {nestedTableData?.map(subRow => (
                    <TableRow key={subRow.id} data={subRow} columns={columns} />
                ))}
            </tbody>
        </table>
    );
};

export default NestedTable;