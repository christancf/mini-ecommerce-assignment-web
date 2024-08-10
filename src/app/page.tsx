import CaretDownIcon from "@/assets/icons/CaretDownIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import StarIconFilled from "@/assets/icons/StarIconFilled";
import StarIconFilledLarge from "@/assets/icons/StarIconFilledLarge";
import Image from "next/image";
import Link from "next/link";
import ProductImage from "../assets/images/product-img-1.png";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import EditIcon from "@/assets/icons/EditIcon";
export default function Home() {
  return (
    <>
      {/* admin nav */}
      <nav>
        <div className="flex items-center justify-end gap-8">
          <div className="flex gap-1">
            <div className="font-satoshi-700 text-19px leading-25.65px uppercase">
              Admin
            </div>
            <div>
              <CaretDownIcon />
            </div>
          </div>
          <div className="relative w-58px aspect-square bg-blue-custom rounded-full">
            <div className="absolute top-[42px] right-0 w-3 aspect-square rounded-full bg-green-online"></div>
          </div>
        </div>
      </nav>
      {/* Products */}
      <h1 className="font-satoshi-900 uppercase text-4xl leading-[48.6px] tracking-[15%]">
        Products
      </h1>
      <div className="mt-10 flex justify-between">
        {/* search bar */}
        <div className="w-[757px] h-16 rounded-[50px] bg-gray-250 flex items-center pl-10 pr-4">
          <input
            className="w-full font-satoshi-500 text-19px bg-gray-250 focus:outline-none leading-25.65px text-gray-350"
            placeholder="Search for products"
          />
          <button className="flex gap-[10px] w-[180px] h-11 bg-blue-custom text-white rounded-[80px] py-[11px] px-10">
            <SearchIcon />
            <div className="font-satoshi-700 text-19px leading-25.65px">
              Search
            </div>
          </button>
        </div>
        <div className="flex gap-3">
          {/* button */}
          <Link href="/add-product">
            <div className="w-[249px] flex items-center justify-center h-14 rounded-10px bg-blue-custom">
              <div className="font-satoshi-700 text-19px leading-25.65px text-gray-250">
                New Product
              </div>
            </div>
          </Link>
          {/* favorites */}
          <Link href="/favorites">
            <div className="flex items-center justify-center border-blue-custom border rounded-10px w-[72px] h-[54px] py-[15px] px-[5px]">
              <StarIconFilledLarge />
            </div>
          </Link>
        </div>
      </div>
      {/* product list */}
      <div className="px-10">
        <table className="mt-10 w-full border-separate border-spacing-y-3">
          <thead className="mb-10">
            <tr className="text-left">
              <th>SKU</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item}>
                <td>#CA25</td>
                <td>
                  <Image
                    src={ProductImage}
                    width={66}
                    height={66}
                    alt="product image"
                    className="rounded-md"
                  />
                </td>
                <td>Product-name</td>
                <td>$24.00</td>
                <td className="">
                  <div className="flex items-center justify-end gap-3">
                    <button>
                      <DeleteIcon />
                    </button>
                    <button className="mx-3">
                      <EditIcon />
                    </button>
                    <button>
                      <StarIconFilled />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </>
  );
}
