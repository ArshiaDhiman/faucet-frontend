import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div className="text-center p-2 bg-level-one border-t border-white border-opacity-5 w-full">
            <ul className="flex justify-center list-none ">
                <li className="mx-3">
                    <a target="_blank" href="https://github.com/ArshiaDhiman">
                        <Image
                            src="/icons/github-icon.svg"
                            alt="github"
                            width="28"
                            height="29"
                        />
                    </a>
                </li>
                <li className="mx-3">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/arshia-dhiman-932898202/"
                    >
                        <Image
                            className="accent"
                            src="/icons/linkedin-icon.svg"
                            alt="linkedin"
                            width="28"
                            height="32"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};
