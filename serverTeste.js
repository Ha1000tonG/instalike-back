import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descricao: "Igreja Matriz de São José dos Campos",
        imagem: "https://lh3.googleusercontent.com/p/AF1QipP9ziYIeq0rqyp4vvS7umTOp4qi0h1iF4q4V9C7=s1360-w1360-h1020-rw"
    },
    {
        id: 2,
        descricao: "Parque Vicentina Aranha - São José dos Campos",
        imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/01/56/69/vista-da-capela-sagrado.jpg?w=1800&h=1000&s=1"
    },
    {
        id: 3,
        descricao: "Parque Santos Dumont - São José dos Campos",
        imagem: "https://lh3.googleusercontent.com/p/AF1QipOPLl6W5p8s4QgdwF3mvUgNw-cB9xZkL4lkuwQC=s1360-w1360-h1020-rw"
    },
    {
        id: 4,
        descricao: "Museu Municipal de São José dos Campos",
        imagem: "https://lh3.googleusercontent.com/p/AF1QipM0tK4Z-nttbtdEaU6t7aN7ikly2-QGT0Brnz6f=s1360-w1360-h1020-rw"
    },

];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");

});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});


function buscarPostPoID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPoID(req.params.id);
    res.status(200).json(posts[index]);
});