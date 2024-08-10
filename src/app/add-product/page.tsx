import StarIconFilledLarge from "@/assets/icons/StarIconFilledLarge";
import Link from "next/link";
import HeaderTitle from "./components/atoms/HeaderTitle";
import { Button } from "./components/atoms/buttons/Button";
import Searchbar from "./components/molecules/Searchbar";
import TextField from "./components/atoms/TextField";
import ProductListTable from "./components/organisms/ProductListTable";

export default function Home() {
  return (
    <>
      {/* Products */}
      <HeaderTitle title="Products" />
      <div className="mt-10 flex justify-between">
        {/* search bar */}
        <Searchbar />
        <div className="flex gap-3">
          {/* button */}
          <Link href="/add-product">
            <Button className="w-[249px] flex items-center justify-center h-14 rounded-10px bg-blue-custom">
              <TextField label="New Product" className="text-gray-250" />
            </Button>
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
        <ProductListTable />
      </div>
    </>
  );
}
