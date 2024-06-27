// lib/data.ts
import axios from 'axios';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export async function fetchData(): Promise<User[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}
