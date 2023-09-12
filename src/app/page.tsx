import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5">
      <Link
        className="uppercase font-bold text-xs bg-blue-500 hover:bg-blue-600 p-4 rounded"
        href="/get-erc20-balance"
      >
        Get ERC20 Balance with Viem
      </Link>

      <Link
        className="uppercase font-bold text-xs bg-blue-500 hover:bg-blue-600 p-4 rounded"
        href="/get-delegation-balance"
      >
        Get Delegation Balance with Viem
      </Link>
    </div>
  );
}
