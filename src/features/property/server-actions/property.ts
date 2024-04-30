"use server"
import {convertFromDTO, IProperty, IPropertyDTO, IPropertySearchParams} from "@/features/property/types/property";
import {ApiUrl} from "@/types/api";

export async function getPropertyById(id: number): Promise<IProperty | undefined> {
    const properties = await getAllProperties()
    return properties.find(p => p.id == id)
}

export async function getAllProperties(searchParams?: IPropertySearchParams): Promise<IProperty[]> {
    const response = await fetch(ApiUrl.BASE + ApiUrl.PROPERTIES, {
        cache: "no-cache", next: {
            tags: [ApiUrl.PROPERTIES]
        }
    });

    let properties: IProperty[] =  (await response.json() as IPropertyDTO[]).map(dto => convertFromDTO(dto))

    // (SSO Architecture benefits) In this case the API should support filter and pagination but as it is just returning a json Im simulating the filter below
    if (searchParams) {
        properties = properties.filter(property => {
            return (
                (searchParams.bedrooms === undefined || property.bedrooms == searchParams.bedrooms) &&
                (searchParams.bathrooms === undefined || property.bathrooms == searchParams.bathrooms) &&
                (searchParams.parking === undefined || property.parking == searchParams.parking) &&
                (searchParams.priceRange === undefined || property.salePrice <= searchParams.priceRange)
            );
        });
    }

    return properties;
}

