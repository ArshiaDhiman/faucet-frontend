import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            src="/img/arsh-logo.svg"
            alt="ARSH token"
            width="30"
            height="30"
        />
    );
};
