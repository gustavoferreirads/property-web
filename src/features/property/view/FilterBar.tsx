"use client"
import React, {useState} from 'react';
import {DropdownFilter} from "@/components/DropdownFilter";
import RangeSlider from "@/components/RangeSlider";
import {useRouter} from "next/navigation";
import {formatCurrency} from "@/util/formats";
import {IPropertySearchParams} from "@/features/property/types/property";


const FilterBar = () => {
    const router = useRouter();

    const [filters, setFilters] = useState<IPropertySearchParams>({});

    const handleFilterChange = (filterName: string, value: undefined | number) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined) {
                queryParams.append(key, value.toString());
            }
        });
        router.push(`/properties?${queryParams}`);
    };

    return (
        <div className="flex flex-wrap items-center justify-center space-x-4 p-4  ">
            <DropdownFilter label="Bedrooms" value={filters?.bedrooms} range={[1, 2, 3, 4, 5]} onChange={handleFilterChange} />
            <DropdownFilter label="Bathrooms" value={filters?.bathrooms} range={[1, 2, 3, 4]} onChange={handleFilterChange} />
            <DropdownFilter label="Parking" value={filters?.parking} range={[1, 2, 3 ,4]} onChange={handleFilterChange} />
            <RangeSlider min={199000} max={725000} format={formatCurrency} onChange={(value) => handleFilterChange('priceRange', value)} />
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 " onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default FilterBar;