import Link from "next/link";

export function TemporaryNavLinks() {
  return (
    <nav className="c_main_container flex items-center justify-between py-4">
      <ul className="flex gap-4 text-2xl text-white">
        <li>
          <Link href="/" className="c_hover_link">
            главная
          </Link>
        </li>
        <li>
          <Link href="/visual" className="c_hover_link">
            визуал
          </Link>
        </li>
        <li>
          <Link href="/cooperation" className="c_hover_link">
            сотруднечество
          </Link>
        </li>
        <li>
          <Link href="/transformation-mind" className="c_hover_link">
            питание
          </Link>
        </li>
      </ul>
    </nav>
  );
}
