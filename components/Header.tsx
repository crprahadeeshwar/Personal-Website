import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="page">
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label="CRP home">
            CRP
          </Link>

          <nav className="header__nav" aria-label="Primary navigation">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <a href="mailto:">Contact</a>
          </nav>
        </div>

        <div className="rule" />
      </div>
    </header>
  );
}