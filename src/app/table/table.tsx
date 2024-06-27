// components/Table.tsx
import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table';
import { User } from '../lib/data';

interface TableProps {
    columns: ColumnDef<User, unknown>[];
    data: User[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table style={{ border: 'solid 1px blue', width: '100%' }}>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                    padding: '10px',
                                }}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                    background: 'papayawhip',
                                }}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
