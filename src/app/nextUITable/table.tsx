// src/app/table/table.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { User } from '../lib/data';

// Define a generic interface for column definitions
interface ColumnDef<T> {
    header: string;
    accessor: keyof T; // Use keyof T to specify the key of T (User in this case)
}

interface Props {
    columns: ColumnDef<User>[]; // Use the defined ColumnDef interface
    data: User[];
}

const CustomTable: React.FC<Props> = ({ columns, data }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="user table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.header}>{column.header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((column) => (
                                <TableCell key={`${row.id}-${column.header}`}>{row[column.accessor]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
