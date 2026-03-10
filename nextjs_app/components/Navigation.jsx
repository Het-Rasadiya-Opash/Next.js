import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center gap-4 p-4 ">
      <div className="font-bold">Logo</div>
      <nav>
        <ul className="flex gap-4 list-none">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-blue-500">Service</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
