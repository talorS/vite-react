import ExpendableButton from './ExpendableButton'

type TableRowProps = {
    data: any;
    columns: { key: string, label: string }[];
    isExpandable?: boolean;
    isExpanded?: boolean;
    onExpandClick?: () => void;
};

const TableRow = ({ data, columns, isExpandable, onExpandClick, isExpanded }: TableRowProps) => {
    return (
        <tr>
            {isExpandable && (
                <td>
                    <ExpendableButton isOpen={isExpanded!} toggle={onExpandClick!} />
                </td>
            )}
            {columns.map(col => (
                <td key={col.key}>{data[col.key]}</td>
            ))}
        </tr>
    );
};

export default TableRow;