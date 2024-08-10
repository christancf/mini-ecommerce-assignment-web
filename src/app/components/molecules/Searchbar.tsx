"use client";
import SearchIcon from "@/assets/icons/SearchIcon";
import { Button } from "../atoms/buttons/Button";
import TextField from "../atoms/TextField";

export default function Searchbar() {
  return (
    <div className="w-[757px] h-16 rounded-[50px] bg-gray-250 flex items-center pl-10 pr-4">
      <input
        className="w-full font-satoshi-500 text-19px bg-gray-250 focus:outline-none leading-25.65px text-gray-350"
        placeholder="Search for products"
      />
      <Button
        className="flex gap-[10px] w-[180px] h-11 bg-blue-custom text-white rounded-[80px] py-[11px] px-10"
        onClick={() => {}}
      >
        <SearchIcon />
        <TextField label="Search" />
      </Button>
    </div>
  );
}
