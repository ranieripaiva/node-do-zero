import { sql } from './db.js'

sql `
        CREATE TABLE videos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            title TEXT NOT NULL,
            description TEXT,
            duration INTEGER CHECK (duration > 0)
        );
    `.then(() => {
        console.log('Tabela criada!')
    })

//sql`DROP TABLE IF EXISTS videos;`.then(() => { console.log('tabela apagada!')})
/*
sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(()=> {
    console.log('Tabela criada!')
})
*/
//node crate-table.js

/*
async function createTable() {
    // Ativa a extensão pgcrypto para garantir que gen_random_uuid() funcione
    //await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`;
    //console.log('Extensão pgcrypto ativada!');

    // Remove a tabela se já existir
    //await sql`DROP TABLE IF EXISTS videos;`;
    //console.log('Tabela apagada!');

    // Criação da nova tabela com id gerado automaticamente
    await sql`
        CREATE TABLE videos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            title TEXT NOT NULL,
            description TEXT,
            duration INTEGER CHECK (duration > 0)
        );
    `.then(() => {
        console.log('Tabela criada!')
    })
    
}

// Executa a função e captura possíveis erros
createTable().catch(console.error);*/