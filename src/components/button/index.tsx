import React from "react";
import { Loader } from "@components";

// export type IButton = React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
// >;

export interface IButton
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    loading: boolean;
}

export const Button: React.FC<IButton> = ({
    className = "",
    children,
    disabled,
    loading,
    ...rest
}) => {
    const classes = `px-6 rounded h-9 w-44 border border-white border-opacity-5 ${
        disabled
            ? "cursor-not-allowed bg-accent-light"
            : "bg-accent hover:bg-accent-dark"
    } ${className}`;

    return (
        <button className={classes} disabled={disabled} {...rest}>
            {loading ? <Loader /> : children}
        </button>
    );
};
