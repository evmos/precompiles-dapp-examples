import { createPublicClient, http } from "viem";
import { erc20ABI } from "@wagmi/core";

import { evmos } from "viem/chains";

const client = createPublicClient({
  chain: evmos,
  transport: http(),
});
// from https://github.com/evmos/chain-token-registry/pull/52/files
const NEOK = {
  coinDenom: "NEOK",
  minCoinDenom: "neok",
  imgSrc: "",
  pngSrc:
    "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/neok.png",
  type: "IBC",
  exponent: "18",
  cosmosDenom: "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9",
  description: "NEOKingdom DAO",
  name: "NEOKingdom DAO",
  tokenRepresentation: "NEOK",
  channel: "",
  isEnabled: true,
  erc20Address: "0x655ecB57432CC1370f65e5dc2309588b71b473A9", // <-- we will only need this for now
  ibc: {
    sourceDenom: "neok",
    source: "Evmos",
  },
  hideFromTestnet: false,
  coingeckoId: "",
  category: "cosmos",
  coinSourcePrefix: "evmos",
} as const;

export default async function Page() {
  const balance = await client.readContract({
    address: NEOK.erc20Address, // <-- the address of the contract
    abi: erc20ABI, // <-- this is being provided by Wagmi but it's just the standard erc20 ABI
    functionName: "balanceOf",

    /**
     * evmos address in hex
     *
     * If you need to convert from evmos address (ex evmos1gxykhk5uffcrc7mqppftfrcxumqm6gz0lh8t5k)
     * to hex (ex 0x41896bda9c4a703C7B600852b48F06e6C1bd204F)
     * here's a simple function to accomplish that:
     *
     * import { bech32 } from "bech32";
     *
     * export const ethToEvmos = (address: string) => {
     *   const words = bech32.toWords(Buffer.from(address.slice(2), "hex"));
     *   return bech32.encode("evmos", words) as `0x${string}`
     * };
     *
     */
    args: ["0x41896bda9c4a703C7B600852b48F06e6C1bd204F"],
  });
  return (
    <div>
      <h1>Get ERC20 Balance with Viem</h1>
      <p>
        My unformatted balance: {balance.toString()} {NEOK.minCoinDenom}
      </p>
    </div>
  );
}
