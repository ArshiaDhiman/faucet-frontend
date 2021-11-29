export const FAUCET_ADDRESS = "0x341a6f6eFFF1A4E941Ab620b4d55354788f44464";

export const TOKEN_ADDRESS = "0xe4aa457d296b896451617f6c83468f3691e0aba4";

export const TOKEN_SYMBOL = "ARSH";

export const TOKEN_DECIMALS = 18;

export const userMustWait =
    'cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,"message":"execution reverted: user must wait","data":{"originalError":{"code":3,"data":"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000e75736572206d7573742077616974000000000000000000000000000000000000","message":"execution reverted: user must wait"}}}, method="estimateGas", transaction={"from":"0xcC2D7b044eE0C7467E3970bfA2615163c8a65084","to":"0x341a6f6eFFF1A4E941Ab620b4d55354788f44464","data":"0x359cf2b7","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.5.0)';

export const transerAmountExceeds =
    'cannot estimate gas; transaction may fail or may require manual gas limit (error={"code":-32603,"message":"execution reverted: ERC20: transfer amount exceeds balance","data":{"originalError":{"code":3,"data":"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002645524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63650000000000000000000000000000000000000000000000000000","message":"execution reverted: ERC20: transfer amount exceeds balance"}}}, method="estimateGas", transaction={"from":"0x32735cf2Bbc75506939d05EA6503b3e5D29274e5","to":"0x341a6f6eFFF1A4E941Ab620b4d55354788f44464","data":"0x359cf2b7","accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.5.0)';

export const knownErrors: { [key: string]: string } = {
    [userMustWait]: "You must wait an hour since you last requested tokens",
    [transerAmountExceeds]: "The faucet has no tokens left to distribute",
};
