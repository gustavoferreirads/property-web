import {PropertyItem} from "@/features/property/view/PropertyItem";
import {IProperty} from "@/features/property/types/property";


const EmptyState = () => (
    <div className="text-center py-10">
        <div className="text-gray-500 text-lg mb-4">No Properties Found</div>
        <p>We couldn`t find any properties matching your search criteria.</p>
        <p>Please try adjusting your filters or search criteria.</p>
    </div>
);

export function PropertyList({properties}: { properties: IProperty[] }) {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {properties.map(property => (
                <PropertyItem key={property.id} item={property}/>
            ))}
            {(properties.length === 0) && <EmptyState/>}
        </div>
    )
}

