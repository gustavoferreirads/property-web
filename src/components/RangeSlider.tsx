import React, {useState} from 'react';

interface RangeSliderProps {
    min: number;
    max: number;
    format?: (value: number)=> number | string;
    onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onChange, format }) => {
    const [value, setValue] = useState<number>(max);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="flex items-center space-x-2 w-60	">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div>{format ? format(value) : value}</div>
        </div>
    );
};

export default RangeSlider;
