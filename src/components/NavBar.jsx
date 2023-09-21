import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-900">
      <div className="container flex justify-between py-3 mx-auto iterms-center">
        <h3 className="text-3xl font-bold">NextCRUD</h3>

        <ul className="flex text-lg font-bold gap-x-2">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">
              Task
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
