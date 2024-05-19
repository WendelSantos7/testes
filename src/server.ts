import express from 'express'; // Adicione esta linha
import routes from './index';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Adicione esta linha
app.use(cors())
app.use(routes)//usa rota do users

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
