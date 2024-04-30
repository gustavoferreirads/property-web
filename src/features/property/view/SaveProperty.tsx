'use client'
import {IProperty, SAVED_PROPERTIES_KEY} from "@/features/property/types/property";
import React, {useState} from "react";
import {getCookie, setCookie} from "@/util/cookie";
import {Modal} from "@/components/Modal";
import {PropertyList} from "@/features/property/view/PropertyList";
import {Button} from "@/components/Button";

export const SaveProperty: React.FC<{ property: IProperty }> = ({property}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [savedProperties, setSavedProperties] = useState<IProperty[]>([]);

    const handleSaveProperty = () => {
        let savedProperties = JSON.parse(getCookie(SAVED_PROPERTIES_KEY) || '[]') as IProperty[];
        if (!savedProperties.find(p => p.id === property.id)) {
            savedProperties = [...savedProperties, property];
            setCookie(SAVED_PROPERTIES_KEY, JSON.stringify(savedProperties), 90);
        }

        setSavedProperties(savedProperties);
        setModalOpen(true);
    };

    return (
        <>

            <Button
                onClick={handleSaveProperty}
                variant={"primary"}
                className={"mb-4 "}
            >
                <span className="text-xl font-normal mr-2 ">♡</span> Save Property
            </Button>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                Saved Properties
                            </h3>
                            <div className="mt-2">
                                <PropertyList properties={savedProperties}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

