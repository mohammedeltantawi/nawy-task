"use client"

import { useEffect, useState } from "react"
import { IApartment } from "@models/apartment.model";
import { getApartment } from "@services/apartments.service";
import { useQuery } from "react-query";
import { formatNumber } from "@services/numbers.service";
import Carousel from "@/components/carousel/carousel";

const Apartment = ({ params }: {
    params: { apartmentId: string}
}) => {
    const { data: apartment, refetch, isFetching } = useQuery(
        ['get-apartment'],
        () =>
            getApartment(params.apartmentId)
      );
   
    return (  
        apartment &&      
        <div className="flex min-h-screen bg-white flex-col items-center p-10">
            <div className="flex flex-col gap-10 w-[90%]">
                <Carousel images={apartment.data.pictures} />
                <div className="flex flex-row gap-10 p-10 border-b border-gray-200 h-[150px] w-full items-center">
                    <div className="w-[90px] h-[90px]">
                        <img src="https://prod-images.cooingestate.com/processed/developer/logo_image/16/high.webp" 
                        className="rounded-full border border-gray-200"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-0">
                            <p className="text-[20px] font-bold">{apartment.data.name}</p>
                            <p className="text-sm text-gray-600">{apartment.data.neighbourhood}</p>
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-base text-gray-600">Price</p>
                            <p className="text-[20px] font-bold">{formatNumber(apartment.data.totalPrice)} EGP</p>
                        </div>
                    </div>
                </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <h2 className="text-[32px] font-bold">Villa</h2>
                        <div className="border-t border-gray-200 mt-2"></div>
                        <div className="mt-2">
                            <p className="flex justify-between font-semibold items-center px-2 bg-gray-200 h-[35px]">
                            <span>Bedrooms</span>
                            <span>{apartment.data.bedrooms}</span>
                            </p>
                            <p className="flex justify-between font-semibold items-center px-2 h-[35px]">
                            <span>Bathrooms</span>
                            <span>{apartment.data.bathrooms}</span>
                            </p>
                            <p className="flex justify-between font-semibold items-center px-2 bg-gray-200 h-[35px]">
                            <span>Delivery In</span>
                            <span>{apartment.data.delivery}</span>
                            </p>
                            <p className="flex justify-between font-semibold items-center px-2 h-[35px]">
                            <span>Compound</span>
                            <span>{apartment.data.compound}</span>
                            </p>
                            <p className="flex justify-between font-semibold items-center px-2 bg-gray-200 h-[35px]">
                            <span>Finishing</span>
                            <span>{apartment.data.finished ? "Finished" : "Not Finished"}</span>
                            </p>
                        </div>
                        </div>
                    </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[32px] font-semibold">Payment Plans</p>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col border-r border-gray-600 pr-2 md:pr-5">
                            <p className="font-bold text-[20px]">{formatNumber(apartment.data.monthlyInstallments)}</p>
                            <p className="text-sm text-gray-600">Monthly</p>
                        </div>

                        <div className="flex flex-row border-r border-gray-600 px-2 md:px-5 items-center">
                            <p className="text-[20px]">{formatNumber(apartment.data.downPayment)} - Down Payment</p>
                        </div>

                        <div className="flex flex-row pl-2 md:pl-5 items-center">
                            <p className="text-[20px] font-semibold">{apartment.data.installmentsYears} Years</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[32px] font-semibold">About Villa</p>
                    <p className="text-[20px]">{apartment.data.about}</p>
                </div>
            </div>    
        </div>
    )
        
};

export default Apartment;