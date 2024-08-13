import ArrowIcon from "@/assets/icons/ArrowIcon";
import Link from "next/link";

interface HeaderTitleProps {
  title: string;
  subtitle?: string;
}

export default function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <h1 className="font-satoshi-900 uppercase text-4xl leading-[48.6px] tracking-[15%]">
          {title}
        </h1>
      </Link>
      {subtitle && (
        <>
          <ArrowIcon />
          <h2 className="font-satoshi-700 text-2xl tracking-[8%] text-blue-custom cursor-default">
            {subtitle}
          </h2>
        </>
      )}
    </div>
  );
}
