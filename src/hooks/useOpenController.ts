import { useState } from "react";

export default function useOpenController() {
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const handleExpandClick = (rowId: number) => {
        setExpandedRows(expandedRows.includes(rowId)
            ? expandedRows.filter(id => id !== rowId)
            : [...expandedRows, rowId]);
    };

    return { expandedRows, handleExpandClick };
}