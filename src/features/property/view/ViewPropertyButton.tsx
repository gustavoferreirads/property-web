"use client"

import Link from "next/link";
import React from "react";
import {IProperty} from "@/features/property/types/property";
import {AppDispatch} from "@/redux/store";
import {useDispatch} from "react-redux";
import {selectProperty} from "@/features/property/redux";


export default function ViewPropertyButton({property}: { property: IProperty }) {
    const dispatch = useDispatch<AppDispatch>();

    const onSelectProperty = () => {
        dispatch(selectProperty(property))
    }

    return (
        <Link href={`/properties/${property.id}`} passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSelectProperty}>
                View Details
            </button>
        </Link>)
}