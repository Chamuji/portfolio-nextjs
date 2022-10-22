import Link from "next/link";
import Image from "next/image";
import style from "../../styles/about.module.css";
import profImg from "/img/profile.jpg";

const About = () => {
  return (
    <div className={(style.about, style.section)} id="about">
      <div className={style.container}>
        <h2 className={style.title}>ABOUT</h2>
        <div className={style.profile}>
          <p className={style.profileImg}>
            <Image src={profImg} alt="" />
          </p>
          <div className={style.profileBody}>
            <p>
              ちゃむじです。情報系の大学でドローン、画像処理、Androidアプリを学んでいました。大学卒業後、C#.NETを使った自社開発サービスの会社入社、その後モバイルアプリを作成したい思いが強く、現在の会社に転職しました。
            </p>
            <p>
              IT業界に入ったきっかけは、ITの技術が好きで面白いことがしたい、ITの技術で人を笑顔にさせたいという気持ちがあったからです。
            </p>
            <p>
              コーディングの技量、品質面、マネジメントなどまだまだ自分には不足している部分があるので、もっと色々なことを吸収していきたいです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <section class="about section" id="about">
        <div class="container">
          <h2 class="title">ABOUT</h2>
          <div class="profile">
            <p class="profile-img">
              <img src="img/about.JPG" alt="">
            </p>
            <div class="profile-body">
              <p>
                ちゃむじです。情報系の大学でドローン、画像処理、Androidアプリを学んでいました。大学卒業後、C#.NETを使った自社開発サービスの会社入社、その後モバイルアプリを作成したい思いが強く、現在の会社に転職しました。
              </p>
              <p>
                IT業界に入ったきっかけは、ITの技術が好きで面白いことがしたい、ITの技術で人を笑顔にさせたいという気持ちがあったからです。
              </p>
              <p>コーディングの技量、品質面、マネジメントなどまだまだ自分には不足している部分があるので、もっと色々なことを吸収していきたいです。</p>
            </div>
          </div>
        </div>
      </section> */
}
