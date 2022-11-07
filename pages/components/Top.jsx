import Link from "next/link";
import style from "../../styles/top.module.css";

const Top = () => {
  return (
    <div className={style.mv}>
      <div className={style.mvContainer}>
        <p className={style.mvTitle}>TOP</p>
        <p className={style.mvSubTitle}>ようこそ</p>
      </div>
    </div>
  );
};

export default Top;
