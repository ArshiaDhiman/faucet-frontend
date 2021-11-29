import React from "react";
import { ConnectWallet } from "@components";
import { Logo } from "@components";
import { TOKEN_ADDRESS, TOKEN_DECIMALS, TOKEN_SYMBOL } from "src/constants";
import { useWeb3React } from "@web3-react/core";

// eslint-disable-next-line
declare let window: any;

export const Header: React.FC = () => {
    const { active } = useWeb3React();

    const addToken = async () => {
        const tokenAddress = TOKEN_ADDRESS;
        const tokenSymbol = TOKEN_SYMBOL;
        const tokenDecimals = TOKEN_DECIMALS;
        const tokenImage =
            "https://ipfs.io/ipfs/QmUoJGmkV7oV5Pv5DwwG4okJh9TWYnEqGAzKFWZfi4NSWe";

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20", // Initially only supports ERC20, but eventually more!
                    options: {
                        address: tokenAddress, // The address that the token is at.
                        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                        decimals: tokenDecimals, // The number of decimals in the token
                        image: tokenImage, // A string url of the token logo
                    },
                },
            });

            if (wasAdded) {
                console.log("Thanks for your interest!");
            } else {
                console.log("Your loss!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav>
            <div className="py-2 bg-level-one border-b border-white border-opacity-5">
                <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
                    <div className="flex items-center space-x-4">
                        <div className="mt-2">
                            <Logo />
                        </div>
                        <div className="text-xl">ARSHToken</div>
                    </div>
                    <div className="flex items-center space-x-8">
                        {active && (
                            <a>
                                <button
                                    className="hover:underline"
                                    onClick={addToken}
                                >
                                    Add ARSH
                                </button>
                            </a>
                        )}
                        <ConnectWallet />
                    </div>
                </div>
            </div>
        </nav>
    );
};
