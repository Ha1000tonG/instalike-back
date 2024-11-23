// Importa o dotenv
import 'dotenv/config';
// Importa o ObjectId do MongoDB
import { ObjectId } from "mongodb";
// Importa o MongoClient do MongoDB para interagir com o banco de dados
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts
export async function getTodosPosts() {
    // Obtém o banco de dados "imerssao-instabytes"
    const db = conexao.db("imersao-instadev");

    // Obtém a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instadev");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instadev");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}