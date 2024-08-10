import CaretDownIcon from "@/assets/icons/CaretDownIcon";

export default function Navbar() {
  return (
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
  );
}
