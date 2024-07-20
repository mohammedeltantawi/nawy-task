# nawy-task

## Getting Started
Clone the project and navigate to the project root

Run the following command to build the frontend and backend projects from docker
```
docker-compose up --build
```
The frontend is hosted on localhost:3000 navigate to localhost:3000/apartments for the apartments page and localhost:3000/apartments/[id] for the apartment details page or press on any apartment from the apartments page and it will navigate to get it's details

The backend server is hosted on localhost:9000
The three endpoints are as follows
/apartments METHOD: 'GET' this will return all the apartments
/apartments METHOD: 'POST' this takes a json body with the following model {
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
example body 
{
    "name": "Condo",
    "neighbourhood": "New Cairo",
    "area": 180,
    "totalPrice": 37273000,
    "resale": false,
    "about": "A 2 bedroom Apartment in Palm Hills New Cairo by Palm Hills Developments. The Apartment size is 180 m2 with 1 bathroom and a roof of 60 m2",
    "bedrooms": 2,
    "bathrooms": 1,
    "downPayment": 156000,
    "monthlyInstallments": 327860,
    "installmentsYears": 7,
    "delivery": "2025",
    "compound": "Palm Hills",
    "finished": false,
    "thumbnail": "https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg",
    "pictures": [
      "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/234086/Screenshot_11.png",
      "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/234086/Screenshot_11.png",
      "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/234086/Screenshot_11.png",
      "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/234086/Screenshot_11.png"
    ]
  }
/apartments/:id METHOD: 'GET' where the id is a query param with the id of the needed apartment


For the mobile project open the cmd at the root project and run the following commands and make sure you have your android emulator up and running
```
cd apartments_mobile
npm i
npm run android
```
PS. I haven't tried the ios build unfortunately

