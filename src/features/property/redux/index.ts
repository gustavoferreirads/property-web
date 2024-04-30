import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IProperty} from "@/features/property/types/property";

type InitialState = {
    value: {
        selected: IProperty
    }
}

type PropertyState = {
    selected: IProperty
}

const initialState: InitialState = {
    value: {
        selected: {} as IProperty
    } as PropertyState
}


export const propertyRedux = createSlice({
    name: "property",
    initialState,
    reducers: {
        selectProperty: (state, action: PayloadAction<IProperty>) => {
            return {
                value: {
                    selected: action.payload
                }
            }
        }
    }
})

export const  { selectProperty } = propertyRedux.actions;

export default propertyRedux.reducer