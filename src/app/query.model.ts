export interface Query {
    id?: string;
    name: string;
    email: string;
    query: string;
    date: Date;
    reply?: string;
}