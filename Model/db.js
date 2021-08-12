import postgres from 'postgres'


const sql = postgres('postgres://ife@localhost:5432/blog');

export { sql };