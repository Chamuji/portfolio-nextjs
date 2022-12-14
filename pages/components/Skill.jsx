import Link from "next/link";
import Image from "next/image";
import style from "../../styles/skill.module.css";
import profImg from "/img/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Star } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
//SkillIcon
//language
import android_icon from "../../img/skill/language/android_icon.png";
import c_sharp_icon from "../../img/skill/language/c_sharp.png";
import dart_icon from "../../img/skill/language/dart.svg";
import html_icon from "../../img/skill/language/html_icon.png";
import java_icon from "../../img/skill/language/java_icon.png";
import javascript_icon from "../../img/skill/language/javascript_icon.png";
import kotlin_icon from "../../img/skill/language/kotlin_icon.png";
import php_icon from "../../img/skill/language/php_icon.png";
import swift_icon from "../../img/skill/language/swift_icon.png";
import typescript_icon from "../../img/skill/language/typescript_icon.png";
//framework_library
import android_studio_icon from "../../img/skill/framework_library/android_studio_icon.png";
import dot_net_icon from "../../img/skill/framework_library/dot_net_icon.png";
import flutter_icon from "../../img/skill/framework_library/flutter_icon.png";
import laravel_icon from "../../img/skill/framework_library/laravel_icon.png";
import nextjs_icon from "../../img/skill/framework_library/nextjs_icon.png";
import react_icon from "../../img/skill/framework_library/react_icon.png";
import react_native_icon from "../../img/skill/framework_library/react_native_icon.png";
import redux_icon from "../../img/skill/framework_library/redux_icon.png";
import xcode_icon from "../../img/skill/framework_library/xcode_icon.png";

//infra_cloud
import aws_icon from "../../img/skill/infra_cloud/aws_logo.jpg";
import firebase_icon from "../../img/skill/infra_cloud/firebase_icon.png";
import heroku_icon from "../../img/skill/infra_cloud/heroku_icon.png";
//devops
import docker_icon from "../../img/skill/devops/docker_icon.png";
import git_icon from "../../img/skill/devops/git_icon.png";
import github_icon from "../../img/skill/devops/github_icon.png";
import gitlab_icon from "../../img/skill/devops/gitlab_icon.png";
//other
import pl_icon from "../../img/skill/other/pl_icon.jpg";
import wordpress_icon from "../../img/skill/other/wordpress_icon.png";
//certificate
import nego_icon from "../../img/skill/certificate/nego_icon.png";

const Skill = () => {
  return (
    // <div className={(style.skill, style.section)} id="skill">
    <div id="skill">
      <div className={style.container}>
        <h2 className={style.title}>SKILL</h2>
        <div className={style.skillList}>
          <p>
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            <br />
            ???????????????????????????React,ReactNative?????????
            <br />
            ???????????????????????????????????????????????????????????????????????????????????????
            <br />
            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </p>
          <p>
            ????????????????????????????????????????????????
            <br />
            ???1: ??????????????????????????????????????????
            <br />
            ???2: ?????????????????????????????????????????????????????????????????????
            <br />
            ???3: ?????????????????????????????????
            <br />
            ???4: ????????????????????????????????????????????????????????????????????????
            <br />
            ???5: ??????????????????????????????????????????
          </p>
        </div>

        <h2 className={style.title}>Language</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={javascript_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>JavaScript</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={typescript_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>TypeScript</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={java_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Java</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={kotlin_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Kotlin</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={android_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>AndroidJava</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={android_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>AndroidKotlin</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={swift_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Swift</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={php_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>PHP</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={c_sharp_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>C#</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={dart_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Dart</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={html_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>HTML5/CSS3</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
        </div>

        <h2 className={style.title}>Framework/Library</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={android_studio_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>AndroidStudio</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={xcode_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Xcode</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={react_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>ReactJS</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={react_native_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>ReactNative</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={redux_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Redux</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={laravel_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Laravel</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={flutter_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Flutter</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={nextjs_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>NextJS</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={dot_net_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>.Net</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
        </div>

        <h2 className={style.title}>Infra/Cloud</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={firebase_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Firebase</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={heroku_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Heroku</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={aws_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>AWS</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
        </div>

        <h2 className={style.title}>DevOps</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={docker_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>Docker</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={git_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>git</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={github_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>gitHub</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={gitlab_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>gitLab</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
            </div>
          </div>
        </div>
        <h2 className={style.title}>Other</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={wordpress_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>WordPress</h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>

          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={pl_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>
                ???????????????????????????????????????????????????
              </h3>
              {/* <p className={style.skillText}>???????????????????????????????????????</p> */}
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                style={{ color: "#fc6530" }}
              />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
            </div>
          </div>
        </div>
        <h2 className={style.title}>Certificate</h2>
        <div className={style.skillList}>
          <div className={style.skillItem}>
            <p className={style.skillImg}>
              <Image src={nego_icon} alt="" />
            </p>
            <div className={style.skillBody}>
              <h3 className={style.skillName}>????????????????????????</h3>
              <p className={style.skillText}>?????????????????????</p>
              {/* <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} />
              <FontAwesomeIcon icon={Star} style={{ color: "#fc6530" }} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
