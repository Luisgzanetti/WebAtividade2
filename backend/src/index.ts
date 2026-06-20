import express from "express";
import cors from "cors";
import sequelize from "./db/db";
import Potion from "./db/Tables/Potion";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/potions', async (req, res) => {
    const potions = await Potion.findAll();
    res.json(potions);
})

async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Conectado com o banco');

        await sequelize.sync({ force: true });
        console.log('Tabelas inicializadas com sucesso');

        // Cria as poções iniciais 
        await Potion.create({
            name: '🧪 Poção Blue Sky',
            description: 'Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quandoescreveu Lucy in the Sky with Diamonds.',
            photo: 'https://i.ibb.co/ZzS7xb2/rsz-sky.png',
            price: 300,
        });

        await Potion.create({
            name: '🔮 Poção do Perfume Misterioso',
            description: 'Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.',
            photo: 'https://i.ibb.co/pyhZJXf/rsz-lilas.png',
            price: 200,
        });

        await Potion.create({
            name: '🌲 Poção de Pinus',
            description: 'Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.',
            photo: 'https://i.ibb.co/DkzdL1q/rsz-pinus.png',
            price: 3000,
        });

        await Potion.create({
            name: '💀 Poção da Beleza Eterna',
            description: 'Veneno que mata rápido. :(',
            photo: 'https://i.ibb.co/9p872NK/rsz-1beleza.png',
            price: 100,
        });

        await Potion.create({
            name: '🔮 Poção do Arco Íro',
            description: 'Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.',
            photo: 'https://i.ibb.co/PrC09MP/rsz-2unicornio.png',
            price: 120,
        });

        await Potion.create({
            name: '🔮 Caldeirão das Verdades Secretas',
            description: 'As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.',
            photo: 'https://i.ibb.co/s9Lyvj8/rsz-verdades.png',
            price: 150,
        });

        app.listen(3000, () => {
            console.log("Server running on port:3000");
        });
    }
    catch (error) {
        console.error('Erro ao conectar com o banco:', error);
    }
}

initialize();