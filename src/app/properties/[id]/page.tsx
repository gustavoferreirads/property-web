"use client"
import {PropertyDetails} from "@/features/property/view/PropertyDetails";
import {usePathname} from "next/navigation";

export default  function Property() {
    const path = usePathname();
    const pathnameSegments = path.split('/');
    const propertyId: string = pathnameSegments[2];
    return (<PropertyDetails id={propertyId} />)
}