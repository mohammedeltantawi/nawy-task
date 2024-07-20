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
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    },
    neighbourhood: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    },
    area: {
      type: Number,
      required: true,
      min: 1,
      max: 100
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    resale: {
      type: Boolean,
      required: true
    },
    about: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 3000
    },
    bedrooms: {
      type: Number,
      required: true,
      min: 1,
      max: 20
    },
    bathrooms: {
      type: Number,
      required: true,
      min: 1,
      max: 20
    },
    downPayment: {
      type: Number,
      required: true,
      min: 0
    },
    monthlyInstallments: {
      type: Number,
      required: true,
      min: 0
    },
    installmentsYears: {
      type: Number,
      required: true,
      min: 0
    },
    delivery: {
      type: String,
      required: true
    },
    compound: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    },
    finished: {
      type: Boolean,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    pictures: {
      type: [String],
      required: true
    }
  });

const Apartments = mongoose.model<IApartment>('Apartments', apartmentsSchema)

export { IApartment, Apartments};