// pages/index.tsx
import React from 'react';

import { fetchData, User } from '../lib/data';
import { ColumnDef } from '@tanstack/react-table';
import Table from '../table/table';

export async function getStaticProps() {
    const data = await fetchData();
    return {
        props: {
            data,
        },
    };
}

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

interface HomePageProps {
    data: User[];
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
    return (
        <div>
            <h1>User Table</h1>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default HomePage;
