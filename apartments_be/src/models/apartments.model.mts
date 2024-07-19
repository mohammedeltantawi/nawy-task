import mongoose from 'mongoose';
import { Schema } from 'mongoose';

interface IApartment {
    name: string;
    neighbourhood: string;
    area: number;
    totalPrice: number;
    resale: boolean;
    about: string;
    bedrooms: number;
    bathrooms: number;
    downPayment: number;
    monthlyInstallments: number;
    installmentsYears: number;
    delivery: string;
    compound: string;
    finished: boolean;
    thumbnail: string;
    pictures: string[];
  }

const apartmentsSchema = new Schema<IApartment>({
  name: { type: String, required: true },
  neighbourhood: { type: String, required: true },
  area: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  resale: { type: Boolean, required: true },
  about: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  downPayment: { type: Number, required: true },
  monthlyInstallments: { type: Number, required: true },
  installmentsYears: { type: Number, required: true },
  delivery: { type: String, required: true },
  compound: { type: String, required: true },
  finished: { type: Boolean, required: true },
  thumbnail: { type: String, required: true },
  pictures: { type: [String], required: true }
});

const Apartments = mongoose.model<IApartment>('Apartments', apartmentsSchema)

export { IApartment, Apartments};