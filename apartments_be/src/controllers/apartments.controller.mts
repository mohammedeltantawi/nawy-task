import { Apartments } from '../models/apartments.model.mjs';
import { Request, Response } from 'express';

export const getApartments = async (req: Request, res: Response)=> {
    try {
        const apartments = await Apartments.find().select('name neighbourhood area totalPrice bedrooms bathrooms downPayment monthlyInstallments installmentsYears delivery thumbnail');
        res.status(200).json(apartments);
    } catch (e) {
        res.status(400).json({ error: "Error retrieving apartments" });
    }
};


export const getApartmentById = async (req: Request, res: Response)=> {
    try {
        const apartment = await Apartments.findById(req.params.id);
        res.status(200).json(apartment);
    } catch (e) {
        res.status(400).json({ error: "couldn't find apartment"});
    }
}

export const addApartment = async (req: Request, res: Response)=> {
    try {
        const newApartment = await Apartments.create(req.body);
        res.status(200).json(newApartment);
    } catch (e) {
        res.status(400).json({ error: "Error adding apartment"});
    }
}