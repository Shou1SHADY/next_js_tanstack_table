"use client"
// src/app/table/page.tsx
import React, { useEffect, useState } from 'react';
import CustomTable from './table';
import { User, fetchData } from '../lib/data';

// Define your columns array using the ColumnDef interface
interface ColumnDef<T> {
    header: string;
    accessor: keyof T;
}

const columns: ColumnDef<User>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Username', accessor: 'username' },
    { header: 'Email', accessor: 'email' },
];

const TablePage: React.FC = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const getData = async () => {
            const users = await fetchData();
            setData(users);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>User Table</h1>
            {/* Render the CustomTable component with columns and data */}
            <CustomTable columns={columns} data={data} />
        </div>
    );
};

export default TablePage;
