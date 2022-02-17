interface HeaderProps {
  titleHeader: string;
}

export function Header({ titleHeader }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {titleHeader}</span>
      </span>
    </header>
  );
}
