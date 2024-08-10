import DeleteIcon from "@/assets/icons/DeleteIcon";
import EditIcon from "@/assets/icons/EditIcon";
import StarIconFilled from "@/assets/icons/StarIconFilled";
import Image from "next/image";
import ProductImage from "../../../assets/images/product-img-1.png";
import { Product } from "@/app/utils/types";

interface TableDataRowProps {
  product?: Product;
}

export default function TableDataRow({ product }: TableDataRowProps) {
  return (
    <tr>
      <td>{product?.sku ?? "#CA25"}</td>
      <td>
        <Image
          src={ProductImage}
          width={66}
          height={66}
          alt="product image"
          className="rounded-md"
        />
      </td>
      <td>{product?.productName ?? "Product-name"}</td>
      <td>{`$${product?.price ?? 24.0}`}</td>
      <td>
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
  );
}
