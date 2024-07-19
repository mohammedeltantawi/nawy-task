import express from 'express';
import { getApartments, getApartmentById, addApartment } from '../controllers/apartments.controller.mjs';

const apartmentsRouter = express.Router();


apartmentsRouter.get('/', getApartments);

apartmentsRouter.get('/:id', getApartmentById);

apartmentsRouter.post('/', addApartment);

export { apartmentsRouter }; 