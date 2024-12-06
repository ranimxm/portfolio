import Link from "next/link";

export default function Header() { 
    return (
      <header className="flex items-center justify-between p-4 px-7 text-h3  text-white">
        <div className="flex flex-col items-start justify-center">
          <p>Ranim</p>
          <p>Mohammad</p>
        </div>
        <nav className="flex flex-row gap-4">
          <Link className="hover-link" href={"/"}>home</Link>
        </nav>
      </header>
    );
}
