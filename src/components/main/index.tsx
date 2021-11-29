import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@components";
import ABI from "src/abi/Faucet.json";
import { FAUCET_ADDRESS, knownErrors } from "src/constants";
import { useContract } from "src/hooks/useContract";
import { shortenHex } from "src/utils";

export const Main: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const faucet = useContract(FAUCET_ADDRESS, ABI, true);
    const { active, account } = useWeb3React();

    const onClick = async () => {
        setLoading(true);
        try {
            if (faucet) {
                toast.info("Awaiting successful transaction");
                const tx = await faucet.requestTokens();
                await tx.wait();
                toast.success("Success");
            }
            // eslint-disable-next-line
        } catch (err: any) {
            console.log(err.message);
            const message = knownErrors[err.message] || err.message;

            console.log(message);
            toast.error(message);
        }
        setLoading(false);
    };

    return (
        <div className="text-center font-light py-5 min-h-screen flex justify-center items-center">
            <div className="bg-level-one max-w-md w-full py-10 rounded-lg border border-white border-opacity-5">
                <div className="px-3">
                    <div className="mb-4">
                        <Image
                            src="/img/arsh-logo.svg"
                            alt="ARSH token"
                            width="100"
                            height="100"
                        />
                    </div>

                    <div className="mb-4">
                        This Faucet allows you to collect 10,000 ARSH Tokens
                        every hour on the Rinkeby Testnet.
                    </div>
                    <div className="mb-6 text-lg">
                        <strong>
                            {active
                                ? `Connected with ${shortenHex(account || "")}`
                                : "Please Connect to MetaMask"}
                        </strong>
                    </div>

                    <Button
                        loading={loading}
                        onClick={onClick}
                        disabled={!active}
                    >
                        Send me ARSH
                    </Button>
                </div>
            </div>
        </div>
    );
};
