import { Router } from "express";
import Potion from "../db/Tables/Potion";

const router = Router()

router.get('/', async (req, res) => {
    try {
        const potions = await Potion.findAll();
        res.json(potions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, description, photo, price } = req.body;
        if (!name || !description || !photo || !price) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const potion = await Potion.create({ name, description, photo, price });
        res.json(potion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.put('/:id_potion', async (req, res) => {
    try {
        const id_potion = Number(req.params.id_potion);
        const {
            name,
            description,
            photo,
            price
        } = req.body;

        if (!name || !description || !photo || !price) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const potion = await Potion.update({
            name,
            description,
            photo,
            price
        }, {
            where: {
                id: id_potion
            }
        });

        res.json(potion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/:id_potion', async (req, res) => {
    try {
        const id_potion = Number(req.params.id_potion);
        const potion = await Potion.destroy({
            where: {
                id: id_potion
            }
        });

        res.json(potion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;