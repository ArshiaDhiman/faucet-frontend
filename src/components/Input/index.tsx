import React from "react";

interface InputProps {
    label?: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
    label,
    id,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="mb-4 mx-auto">
            <label className="block text-black-900 font-bold mb-4" htmlFor={id}>
                {label}
            </label>
            <input
                className="shadow border rounded py-2 px-3 text-black-900 leading-tight focus:shadow-outline"
                id={id}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

// return (
//     <div className="text-center font-light py-5 bg-black-900 min-h-screen flex justify-center items-center">
//         <div className="text-white">
//             <Input
//                 label="Enter your Testnet Account Address"
//                 id="address"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//             />
//             {active ? <div>`Connected with Account `</div> : <div></div>}
//             <Button onClick={onClick}>Send me ARSH</Button>
//         </div>
//     </div>
// );
