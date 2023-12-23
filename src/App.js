import { IoMdCart } from "react-icons/io";
import { IoFastFoodOutline, IoTicket } from "react-icons/io5";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="px-8 pt-8 bg-slate-200 h-full relative">
      <Header toggleShowModal={toggleShowModal} />
      <Card />
      {showModal && (
        <div className="fixed top-0 right-0 w-full h-full flex items-center justify-end z-50 bg-black bg-opacity-50">
          <div className="relative bg-white h-full p-8 right-0">
            <Carts toggleShowModal={toggleShowModal} />
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ toggleShowModal }) {
  return (
    <div className="header flex justify-between">
      <div className="left flex">
        <span className="flex justify-center text-xl">
          <IoFastFoodOutline className="mr-1 text-2xl text-cyan-600" />
          Main Course
        </span>
      </div>
      <div className="right">
        <button
          className="border-2 border-cyan-600 hover:bg-cyan-600 text-cyan-600 hover:text-white rounded w-36 h-8 items-center"
          onClick={() => toggleShowModal()}
        >
          <IoMdCart className="inline-block mr-2 " />
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

function Carts({ toggleShowModal }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <div className="header flex flex-col gap-4 ">
          <div>
            <div className="flex flex-row justify-between">
              <span className="flex items-center text-xl">
                <IoMdCart className="mr-1 text-2xl text-cyan-600" />
                Food Cart
              </span>
              <button onClick={() => toggleShowModal()}>X</button>
            </div>
          </div>
          <hr></hr>
          <div className="cart-list">
            <CartItem />
            <CartItem />
          </div>
        </div>
        <hr></hr>
        <div className="voucher flex flex-col gap-2 mt-2">
          <span className="flex items-center text-sm">
            <IoTicket className="mr-1 text-base text-cyan-600" />
            Tambah Voucher
          </span>
          <input
            className="border-2 rounded text-sm"
            type="text"
            id="fname"
            name="fname"
            placeholder="Masukkan vouchermu disini..."
          />
        </div>
        <hr></hr>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center h-10 px-3 bg-gray-200">
          <span>Total</span>
          <span>Rp 20.000</span>
        </div>
        <button className="w-full h-10 bg-cyan-600 rounded text-white">
          Buat Pesanan
        </button>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex flex-col mb-4">
      <div className="cart-content flex mb-2">
        <img
          className="object-cover w-24 h-28 mr-2"
          src="./images/mie-goreng.jpg"
          alt="gambar makanan"
        />
        <div className="cart-detail flex flex-col justify-between w-80">
          <div className="flex flex-col mb-2">
            <span className="text-base">Mie Goreng</span>
            <span className="text-sm">Rp 10.000</span>
          </div>
          <div className="cart-note-qty flex justify-between items-center text-ellipsis w-80 max-h-20 text-sm">
            <div>
              <p className="leading-none">
                noteeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeee
              </p>
            </div>
            <div className="qty flex gap-4">
              <button className="bg-cyan-600 text-white w-5 h-5 rounded">
                -
              </button>
              <span>qty</span>
              <button className="bg-cyan-600 text-white w-5 h-5 rounded">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <input
        className="border-2 rounded text-sm"
        type="text"
        id="fname"
        name="fname"
        placeholder={"Masukkan catatan disini..."}
      />
    </div>
  );
}
