"use client"
import {IProperty} from "@/features/property/types/property";
import {getPropertyById} from "@/features/property/server-actions/property";
import Image from "next/image";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch, useTypedSelector} from "@/redux/store";
import {selectProperty} from "@/features/property/redux";
import {ContactForm} from "@/features/contact/ContactForm";
import {SaveProperty} from "@/features/property/view/SaveProperty";
import {formatCurrency, formatDate} from "@/util/formats";

export const PropertyDetails = ({id}: { id: string }) => {
    const dispatch = useDispatch<AppDispatch>();
    const property: IProperty = useTypedSelector(state => state.propertyReducer.value.selected)

    useEffect(() => {
        if (!property.id) {
            getPropertyById(Number(id)).then((found) => {
                if (found) {
                    dispatch(selectProperty(found))

                }
            })
        }
    }, [])

    return (
        <div className="max-w-6xl mx-auto m-10 p-10 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5 p-4">
                    {property.id && (<>
                            <div className=" mb-2 flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-medium">{property.title}</h1>
                                    <p>{property.location}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-medium">{formatCurrency(property.salePrice)}</p>
                                    <p className="text-sm">{`Date Listed: ${formatDate(property.dateListed)}`}</p>
                                </div>
                            </div>

                            <Image
                                src={property.pictureUrl || ''}
                                alt={property.title || ''}
                                className="mb-4 w-full max-h-96 object-cover"
                                layout="responsive"
                                width={350}
                                height={350}
                            />
                            <div className="grid grid-cols-5 gap-4 mb-4 p-4 bg-gray-100 rounded">
                                <div className="flex flex-col items-center">
                                    <span className="font-bold text-lg">{property.bedrooms}</span>
                                    <span className="text-sm text-gray-600">BED</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-bold text-lg">{property.bathrooms}</span>
                                    <span className="text-sm text-gray-600">BATH</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-bold text-lg">{property.parking}</span>
                                    <span className="text-sm text-gray-600">PARKING</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-bold text-lg">{property.sqft}</span>
                                    <span className="text-sm text-gray-600">SQFT</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-bold text-lg">{property.yearBuilt}</span>
                                    <span className="text-sm text-gray-600">YEAR BUILT</span>
                                </div>
                            </div>
                            <p>{property.description}</p>
                        </>
                    )}

                </div>
                <div className="md:w-2/5 p-4 border-l border-gray-200 float-right items-end	flex flex-col">
                    <SaveProperty property={property}/>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};