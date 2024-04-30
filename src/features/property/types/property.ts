export interface IPropertySearchParams {
    bedrooms?: number;
    bathrooms?: number;
    parking?: number;
    priceRange?: number;
}

export interface IPropertyDTO {
  Id: number
  DateListed: string
  Title: string
  Description: string
  'Sale Price': number
  ThumbnailURL: string
  PictureURL: string
  Location: string
  Sqft: number
  Bedrooms: number
  Bathrooms: number
  Parking: number
  YearBuilt: number
}

export interface IProperty {
    id: number;
    dateListed: Date;
    title: string;
    description: string;
    salePrice: number;
    thumbnailUrl: string;
    pictureUrl: string;
    location: string;
    sqft: number;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    yearBuilt: number;
}

export const convertFromDTO = (property: IPropertyDTO):IProperty  => ({
    id: property.Id,
    dateListed: new Date(property.DateListed),
    title: property.Title,
    description: property.Description,
    salePrice: property['Sale Price'],
    thumbnailUrl: property.ThumbnailURL,
    pictureUrl: property.PictureURL,
    location: property.Location,
    sqft: property.Sqft,
    bedrooms: property.Bedrooms,
    bathrooms: property.Bathrooms,
    parking: property.Parking,
    yearBuilt: property.YearBuilt,
});

export const SAVED_PROPERTIES_KEY= 'savedProperties';