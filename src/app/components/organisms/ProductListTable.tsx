import { PRODUCTLISTTABLEHEADERTITLES } from "@/utils/constants";
import TableDataRow from "../molecules/TableDataRow";

export default function ProductListTable({}) {
  return (
    <table className="mt-10 w-full">
      <thead className="mb-10">
        <tr className="text-left">
          {PRODUCTLISTTABLEHEADERTITLES?.map((title: string) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((item) => (
          <TableDataRow key={item} />
        ))}
      </tbody>
    </table>
  );
}
