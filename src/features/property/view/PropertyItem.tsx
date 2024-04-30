import Image from "next/image";
import React from "react";
import {IProperty} from "@/features/property/types/property";
import ViewPropertyButton from "@/features/property/view/ViewPropertyButton";

export const PropertyItem: React.FC<{ item: IProperty }> = ({ item }) => {
    const { title, bedrooms, bathrooms, location, pictureUrl,salePrice } = item;
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-white w-64		 h-auto">
            <Image className="w-full h-48 object-cover" src={pictureUrl} alt="Listing image" width={350} height={350}/>
            <div className="px-6 py-4">
                <div className="font-bold text-sm mb-2 line-clamp-1">{title}</div>
                <p className="text-gray-700 text-base">
                    {location}
                </p>
                <p className="text-gray-700 text-base">
                    {bedrooms} beds | {bathrooms} baths
                </p>
                <p className="text-gray-900 text-xl">
                    ${salePrice}
                </p>
            </div>
            <div className="px-6 pb-4">
                <ViewPropertyButton property={item} />
            </div>
        </div>
    );
};