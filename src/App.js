import { IoMdCart } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

export default function App() {
  return (
    <div className="px-8 pt-8 bg-slate-100 h-screen">
      <Header />
      <Card />
    </div>
  );
}

function Header() {
  return (
    <div className="header flex justify-between">
      <div className="left flex">
        <span className="flex justify-center text-xl">
          <IoFastFoodOutline className="mr-1 text-2xl text-cyan-600" />
          Main Course
        </span>
      </div>
      <div className="right">
        <button className="border-2 border-cyan-600 rounded w-36 h-8">
          <IoMdCart className="inline-block mr-2" />
          Keranjang
        </button>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex flex-wrap gap-4 mt-6 ">
      <Cards imageUrl="./images/nasi-goreng.jpg">Nasi Goreng</Cards>
      <Cards imageUrl="./images/nasi-lemak.jpeg">Nasi Lemak</Cards>
      <Cards imageUrl="./images/pisang-goreng.jpg">Pisang Goreng</Cards>
      <Cards imageUrl="./images/mie-goreng.jpg">Mie Goreng</Cards>
      <Cards imageUrl="./images/nasi-goreng.jpg">Nasi Goreng</Cards>
      <Cards imageUrl="./images/nasi-lemak.jpeg">Nasi Lemak</Cards>
      <Cards imageUrl="./images/pisang-goreng.jpg">Pisang Goreng</Cards>
      <Cards imageUrl="./images/mie-goreng.jpg">Mie Goreng</Cards>
    </div>
  );
}

function Cards({ children, imageUrl }) {
  return (
    <div className="card flex flex-col justify-center content-center w-56 p-4 mb-6 border-2 bg-white border-transparent">
      <img
        className="object-cover w-56 h-52"
        src={imageUrl}
        alt="gambar makanan"
      />
      <div className="flex flex-col justify-start mb-3 gap-1">
        <span>{children}</span>
        <span className="text-cyan-600 font-semibold">Rp 10.000</span>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-cyan-600 text-white rounded-xl w-64 h-16 px-6">
          + Tambahkan Ke Keranjang
        </button>
      </div>
    </div>
  );
}
