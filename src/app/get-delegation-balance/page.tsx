import { createPublicClient, http } from "viem";
import { evmos } from "viem/chains";
import stakingABI from "./stakingABI";

const client = createPublicClient({
  chain: evmos,
  transport: http(),
});

// https://docs.evmos.org/develop/smart-contracts/list-evm-extensions
const STAKING_PRECOMPILE_ADDRESS = "0x0000000000000000000000000000000000000800";
// hex format and lowercase
const DELEGATOR_ADDRESS = "0xc1dc8c6c0dcd24226c721a7e109e4a7c20f7bF0f";
const VALIDATOR_ADDRESS = "evmosvaloper1dgpv4leszpeg2jusx2xgyfnhdzghf3rf0qq22v";

export default async function Page() {
  const delegations = await client.readContract({
    address: STAKING_PRECOMPILE_ADDRESS,
    abi: stakingABI,
    functionName: "delegation",
    args: [DELEGATOR_ADDRESS, VALIDATOR_ADDRESS],
  });

  return (
    <div>
      <h1>Get Delegation Balance with Viem</h1>

      <p>
        My unformatted delegation balance: {delegations[1].amount.toString()}
        {delegations[1].denom}
      </p>
    </div>
  );
}
