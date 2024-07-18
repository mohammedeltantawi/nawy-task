import express from 'express';

const listApartmentRouter = express.Router();

import { ListApartment } from '../models/list-apartment.model.mjs';

listApartmentRouter.get('/', async (req, res)=> {
    try {
        const apartments = await ListApartment.find({});
        res.status(200).json(apartments);
    } catch (e) {
        res.status(400).json({ error: "Error retrieving apartments" });
        console.log(e);
    }
});

listApartmentRouter.post('/add-apartment', async (req, res) => {
    try {
        const newApartment = await ListApartment.create(req.body);
        res.status(200).json(newApartment);
    } catch (e) {
        res.status(400).json({ error: "Error adding apartment"});
        console.log(e);
    }
});

listApartmentRouter.get('/apartment/:id', async (req, res) => {
    try {
        const apartment = await ListApartment.findById(req.params.id);
        res.status(200).json(apartment);
    } catch (e) {
        res.status(400).json({ error: "couldn't find apartment"});
        console.log(e);
    }
});

export { listApartmentRouter }; 