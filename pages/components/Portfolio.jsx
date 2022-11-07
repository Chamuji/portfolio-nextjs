import Link from "next/link";
import Image from "next/image";
import style from "../../styles/portfolio.module.css";
import profImg from "/img/profile.jpg";
import githubImg from "/img/portfolio/GitHubLogo.png";
import NoImg from "/img/portfolio/NoImage.png";
import PortfolioWebImg from "/img/portfolio/portfolio-web.png";
import WebSiteImg from "/img/portfolio/web_site.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className={style.container}>
        <h2 className={style.title}>PORTFOLIO</h2>
      </div>
      <div className={style.portfolio}>
        <p className={style.portfolioImg}>
          <Image src={PortfolioWebImg} alt="" />
        </p>
        <div className={style.portfolioBody}>
          <h3>Chamuji Portfolio</h3>
          <span className={style.date_tag_item}>作成日 : 2022-10</span>
          <span className={style.date_tag_item}>
            タグ : HTML / CSS / Firebase
          </span>

          <p>
            自分の情報をまとめたポートフォリオ初期版。自分のスキルなどを記載している。
            <br />
            HTML、CSSのみで作成した静的サイトでFirebaseのHostingで公開している。
            <br />
          </p>

          <div className={style.link}>
            <div className={style.itemSpace}>
              <Link href="https://github.com/Chamuji/portfolio-web">
                <a target="_blank">
                  <u className={style.cursor}>
                    <b>GitHubはこちら</b>
                  </u>
                </a>
              </Link>
            </div>
            <div className={style.itemSpace}>
              <Link href="https://chamuji-portfolio-web.web.app/">
                <a target="_blank">
                  <u className={style.cursor}>
                    <b>公開したサイトはこちら</b>
                  </u>
                </a>
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>

      <br />
      <br />

      <div className={style.portfolio}>
        <p className={style.portfolioImg}>
          <Image src={NoImg} alt="" />
        </p>
        <div className={style.portfolioBody}>
          <h3>Chamui Portfolio NextJS</h3>
          <span className={style.date_tag_item}>作成日 : 2022-11</span>
          <span className={style.date_tag_item}>
            タグ : NextJS / CSS / Vercel
          </span>

          <p>
            HTMLで作成したポートフォリオを模倣してNextJSで作成
            <br />
            完全なレスポンシブ対応ができていないため、スマホ・タブレットでの閲覧をした場合レイアウトが崩れてしまう。
            <br />
          </p>

          <div className={style.link}>
            <div className={style.itemSpace}>
              <Link href="https://github.com/Chamuji/portfolio-web">
                <a target="_blank">
                  <u className={style.cursor}>
                    <b>GitHubはこちら</b>
                  </u>
                </a>
              </Link>
            </div>
            <div className={style.itemSpace}>
              <Link href="https://chamuji-portfolio-web.web.app/">
                <a target="_blank">
                  <u className={style.cursor}>
                    <b>公開したサイトはこちら</b>
                  </u>
                </a>
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>

      <br />
      <br />

      {/* <div className={style.portfolio}>
        <p className={style.portfolioImg}>
          <Image src={NoImg} alt="" />
        </p>
        <div className={style.portfolioBody}>
          <h3>タイトル</h3>
          <span className={style.date_tag_item}>作成日 : yyyy-mm</span>
          <span className={style.date_tag_item}>タグ : hoge / foo / huga</span>

          <p>
            ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
            <br />
            ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。
            <br />
          </p>

          <div className={style.footerLink}>
            <div className={style.footerLinkItem}>
              <Link href="https://github.com/chamuji">
                <a target="_blank">
                  <Image src={githubImg} alt="" className={style.cursor} />
                </a>
              </Link>
            </div>

            <div className={style.footerLinkItem}>
              <Link href="https://github.com/chamuji">
                <a target="_blank">
                  <Image
                    src={WebSiteImg}
                    alt=""
                    className={`${style.cursor} ${style.footerLinkItemRadius}`}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
