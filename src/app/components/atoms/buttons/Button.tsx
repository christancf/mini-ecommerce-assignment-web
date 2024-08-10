interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}
export function Button({
  children,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button type={type} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
