"use client"
// src/app/table/page.tsx
import React, { useEffect, useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import Table from './table';
import { User, fetchData } from '../lib/data';

const columns: ColumnDef<User>[] = [
    {
        header: 'ID',
        accessorKey: 'id', // accessorKey is the "key" in the data
    },
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Username',
        accessorKey: 'username',
    },
    {
        header: 'Email',
        accessorKey: 'email',
    },
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
            <Table columns={columns} data={data} />
        </div>
    );
};

export default TablePage;
