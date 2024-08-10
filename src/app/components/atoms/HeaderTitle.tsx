interface HeaderTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <h1 className="font-satoshi-900 uppercase text-4xl leading-[48.6px] tracking-[15%]">
      {title}
    </h1>
  );
}
