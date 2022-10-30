import Link from "next/link";
import style from "../../styles/header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <nav className={style.gnav}>
        <ul className={style.gnavlist}>
          <li className={style.gnavitem}>
            <Link href="/">
              <a>Top</a>
            </Link>
          </li>
          <li className={style.gnavitem}>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className={style.gnavitem}>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
          <li className={style.gnavitem}>
            <Link href="/skill">
              <a>SKILL</a>
            </Link>
          </li>
          {/* <li className={style.gnavitem}>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
