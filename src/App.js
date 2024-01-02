import { IoMdCart } from "react-icons/io";
import { IoFastFoodOutline, IoTicket } from "react-icons/io5";
import { useState } from "react";

const data = [
  {
    id: 1,
    nama: "Nasi Goreng",
    harga: 10000,
    tipe: "makanan",
    gambar: "./images/nasi-goreng.jpg",
  },
  {
    id: 2,
    nama: "Nasi Lemak",
    harga: 10000,
    tipe: "makanan",
    gambar: "./images/nasi-lemak.jpeg",
  },
  {
    id: 3,
    nama: "Pisang Goreng",
    harga: 10000,
    tipe: "snack",
    gambar: "./images/pisang-goreng.jpg",
  },
  {
    id: 4,
    nama: "Mie Goreng",
    harga: 5000,
    tipe: "makanan",
    gambar: "./images/mie-goreng.jpg",
  },
  {
    id: 5,
    nama: "Mie Goreng + Telur",
    harga: 10000,
    tipe: "makanan",
    gambar: "./images/mie-goreng.jpg",
  },
];

const cartData = [{}];

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartData, setCartData] = useState([]);

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="p-8 bg-slate-200 h-screen relative overflow-auto">
      <Header toggleShowModal={toggleShowModal} />
      <Card setCartData={setCartData} />
      {showModal && (
        <div className="fixed top-0 right-0 w-full h-full flex items-center justify-end z-50 bg-black bg-opacity-50">
          <div className="relative bg-white h-full p-8 right-0 min-w-80">
            <Carts toggleShowModal={toggleShowModal} cartData={cartData} />
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
function Card({ setCartData }) {
  const menus = data;
  return (
    <main>
      <>
        <ul className="flex flex-wrap gap-4 mt-6">
          {menus.map((menu) => (
            <Cards menu={menu} key={menu.id} setCartData={setCartData} />
          ))}
        </ul>
      </>
    </main>
  );
}

function Cards({ menu, setCartData }) {
  const addToCart = () => {
    setCartData((prevCartData) => [
      ...prevCartData,
      { ...menu, qty: 1 }, // Menambah properti qty dengan nilai awal 1
    ]);
  };

  return (
    <li className="list-none">
      <div className="card flex flex-col justify-center content-center w-56 p-4 mb-6 border-2 bg-white border-transparent">
        <img
          className="objectcover w-56 h-48 mb-4"
          src={menu.gambar}
          alt="gambar makanan"
        />
        <div className="flex flex-col justify-start mb-3 gap-1">
          <span className="font-semibold text-gray-600">{menu.nama}</span>
          <span className="text-cyan-600 font-semibold">
            Rp. {menu.harga.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-cyan-600 text-white rounded-xl w-64 h-16 px-6"
            onClick={addToCart}
          >
            + Tambahkan Ke Keranjang
          </button>
        </div>
      </div>
    </li>
  );
}

function Carts({ toggleShowModal, cartData }) {
  const numCart = cartData.length;
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <div className="header flex flex-col gap-4 mb-2">
          <div className="flex flex-row justify-between">
            <span className="flex items-center text-xl">
              <IoMdCart className="mr-1 text-2xl text-cyan-600" />
              Food Cart
            </span>
            <button onClick={() => toggleShowModal()}>X</button>
          </div>
          <hr></hr>
          <div className="cart-list overflow-y-auto max-h-96">
            {numCart > 0 ? (
              cartData.map((cartItem, index) => (
                <CartItem key={index} cartItem={cartItem} />
              ))
            ) : (
              <p>Pilih Makanan anda</p>
            )}
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
        <div className="flex flex-row justify-between items-center h-10 px-3 bg-gray-100">
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

function CartItem({ cartItem }) {
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
            <span className="text-base">{cartItem.nama}</span>
            <span className="text-sm">
              Rp {cartItem.harga.toLocaleString()}
            </span>
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
        className="border-2 rounded text-xs"
        type="text"
        id="fname"
        name="fname"
        placeholder="Masukkan catatan disini..."
      />
    </div>
  );
}
