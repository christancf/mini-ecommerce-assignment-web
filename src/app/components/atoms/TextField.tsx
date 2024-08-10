interface TextFieldProps {
  label: string;
  className?: string;
}

export default function TextField({ label, className }: TextFieldProps) {
  return (
    <div className={`font-satoshi-700 text-19px leading-25.65px ${className}`}>
      {label}
    </div>
  );
}
