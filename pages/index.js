import Wallet from "../components/Wallet";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Wallet />
      <div className="bg-white mt-52">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-blue-800 text-6xl font-extrabold">Mint NFT</h1>
      </div>
    </div>
    </div>
  );
}
