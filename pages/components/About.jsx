import Link from "next/link";
import Image from "next/image";
import style from "../../styles/about.module.css";
import profImg from "/img/profile.jpg";

const About = () => {
  return (
    // <div className={(style.about, style.section)} id="about">
    <div>
      <div id="about">
        <div className={style.container}>
          <h2 className={style.title}>ABOUT</h2>
          <div className={style.profile}>
            <p className={style.profileImg}>
              <Image src={profImg} alt="" />
            </p>
            <div className={style.profileBody}>
              <p>
                ちゃむじです。
                <br />
                趣味はお酒・ご飯・麻雀・プログラミング・バドミントンです。
                <br />
                コーディングの技量、品質面、マネジメントなどまだまだ自分には不足している部分があるので、もっと色々なことを吸収していきたいです。
                <br />
                インフラ・バックエンドが苦手なため、案件や資格取得の学習に取り組み苦手を克服中です。
                <br />
                ドローンはDJI社のinspire1です。
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      {}
      {}
      <br />
      <br />
      <br />
      <div id="history">
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>1995-10~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>北海道の片田舎に生まれる</h3>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2002-04~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>小学生時代</h3>
              <p>児童会長をやりつつ水泳少年団や自転車少年団に入っていた。</p>
              <p>
                ワープロで遊ぶのが好きだったが、ある日父親が購入したWindowsXPと出会ったこと、
                <br />
                父親が色々な電子機器を修理している姿を見て、パソコンや電子機器系に魅力を感じるようになった。
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2008-04~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>中学生時代</h3>
              <p>
                生徒会長をやりつつ、和太鼓部やバドミントン部主将として活動していた。
                <br />
                <Link href="https://www.youtube.com/watch?v=ER67xkDvVfw&t=200s">
                  <a target="_blank">
                    <u>
                      <b>和太鼓の動画</b>
                    </u>
                  </a>
                </Link>
                <br />
                <br />
                壊れたゲーム機やビデオデッキなどを知人からもらい修理して遊んでいた。
                <br />
                修理していく中で携帯ゲームのOSや通信がどういう風にできているのか興味を抱く。
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2011-04~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>高校生時代</h3>
              <p>
                高校は普通科で理系コース
                <br />
                バドミントン部
              </p>
              <p>
                商業科の先生からHTMLやJavaのことを教えてもらい、独学で勉強する。
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2014-04~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>大学生時代</h3>
              <p>
                情報系の大学に進学
                <br />
                学生実行委員会の会長を務め、体育祭・大学祭など全ての学校行事の企画・運営に携わる。
                <br />
                バドミントン部副部長
                <br />
                <br />
                ドローン選手権大会に出場
                <br />
                <Link href="https://www.do-johodai.ac.jp/topics/8147/">
                  <a target="_blank">
                    <u>
                      <b>ドローン選手権大会詳細</b>
                    </u>
                  </a>
                </Link>
                &emsp;
                <Link href="https://www.secure-drone.org/wp-content/uploads/hdc2017_1.pdf">
                  <a target="_blank">
                    <u>
                      <b>ドローン選手権大会詳細1</b>
                    </u>
                  </a>
                </Link>
                &emsp;
                <Link href="https://www.secure-drone.org/wp-content/uploads/hdc2017_2.pdf">
                  <a target="_blank">
                    <u>
                      <b>ドローン選手権大会詳細2</b>
                    </u>
                  </a>
                </Link>
                &emsp;
                <Link href=" https://www.secure-drone.org/wp-content/uploads/hdc2017_3.pdf">
                  <a target="_blank">
                    <u>
                      <b>ドローン選手権大会詳細3</b>
                    </u>
                  </a>
                </Link>
                &emsp;
                <br />
                <br />
                大学では勉強・プライベート共に刺激ある毎日でとても充実した４年間だった。
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2018-04~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>新卒でPG</h3>
              <p>
                大学卒業後、介護系のパッケージソフト開発の会社に就職
                <br />
                C#.NETを用いたWindows向けのソフトを開発していました。
                <br />
                <br />
                休日は卒業研究の延長線上で趣味で機械学習、モバイル開発を行なっていました。
                <br />
                麻雀の牌を検知する特徴ファイルの作成や顔認識など。
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>2019-06~</h2>
            </div>
            <div className={style.historyRight}>
              <h3>株式会社インプルに入社</h3>
              <p>
                主にモバイルアプリの開発・ディレクション業務を行なっています。
                <br />
                趣味で社会人バドミントンサークルを立ち上げる
              </p>
            </div>
          </div>
        </div>
        <div className={style.historyContainer}>
          <div className={style.historyItem}>
            <div className={style.historyLeft}>
              <h2>20XX年X~</h2>
            </div>
            <div className={style.historyRight}>
              <p>〜〜〜〜</p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
