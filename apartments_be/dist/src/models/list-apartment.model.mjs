import mongoose from 'mongoose';
const listApartmentSchema = new mongoose.Schema({
    name: String,
    area: String,
    price: Number,
    resale: Boolean,
    about: String,
    bedrooms: Number,
    bathrooms: Number
});
const ListApartment = mongoose.model('ListApartment', listApartmentSchema);
export { ListApartment };
//# sourceMappingURL=list-apartment.model.mjs.map