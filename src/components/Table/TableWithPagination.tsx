import { useState, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
import Table from './Table';
import data from '../../api/data/tableData.json';
import './style.scss';

const PageSize = 10;

export default function TableWithPagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.Heading className="w-[5%]">ID</Table.Heading>
                    <Table.Heading>FIRST NAME</Table.Heading>
                    <Table.Heading>LAST NAME</Table.Heading>
                    <Table.Heading>EMAIL</Table.Heading>
                    <Table.Heading>PHONE</Table.Heading>
                </Table.Header>
                <Table.Body
                    data={currentTableData}
                    render={(item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )}
                />
            </Table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
}
