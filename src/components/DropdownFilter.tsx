import React from "react";

interface DropdownFilterProps {
    label: string;
    value: number | undefined;
    range: number[];
    onChange: (filterName: string, value: undefined | number) => void;
}

export const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, value, range, onChange }) => (
    <div className="flex items-center">
        <label htmlFor={label} className="mr-2">{label}:</label>
        <select
            id={label}
            value={value ?? 'all'}  // Set 'all' as the value when value is undefined
            onChange={(e) => onChange(label.toLowerCase(), e.target.value === 'all' ? undefined : Number(e.target.value))}
            className="p-2 border border-gray-300 rounded mr-4"
        >
            <option value="all">All</option> {/* The 'All' option */}
            {range.map((number) => (
                <option key={number} value={number}>{number}</option>
            ))}
        </select>
    </div>
);
