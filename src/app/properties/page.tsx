import {PropertyList} from "@/features/property/view/PropertyList";
import {IProperty, IPropertySearchParams} from "@/features/property/types/property";
import {getAllProperties} from "@/features/property/server-actions/property";
import FilterBar from "@/features/property/view/FilterBar";

async function List({searchParams}: { searchParams: IPropertySearchParams }) {
    const properties: IProperty[] = (await getAllProperties(searchParams as IPropertySearchParams)) as IProperty[];
    return (
        <div className="container max-w-6xl mx-auto m-10 p-10  ">
            <div className="text-center ">
                <h1 className="text-3xl ml-4 mb-8">Properties for Sale</h1>
            </div>
            <FilterBar/>
            <PropertyList properties={properties}/>
        </div>
    )
}

export default List;