import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        className="uppercase font-bold text-xs bg-blue-500 hover:bg-blue-600 p-4 rounded"
        href="/get-erc20-balance"
      >
        Get ERC20 Balance with Viem
      </Link>
    </div>
  );
}
