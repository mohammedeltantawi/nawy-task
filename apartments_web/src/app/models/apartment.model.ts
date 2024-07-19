export interface IApartment {
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
    _id: string
}