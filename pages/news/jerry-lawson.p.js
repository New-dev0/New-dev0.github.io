import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jerry Lawson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jerry Lawson"/>
        <meta name="description" content="Trending News about Jerry Lawson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jerry Lawson</h1>
            <Image width={800} height={500} src="https://image.stern.de/32966940/t/R4/v1/w1440/r1.7778/-/jerry-lawson.jpg" alt="Jerry Lawson"/>
            <h3>Recent News</h3>
            <a href='https://www.stern.de/digital/jerry-lawson--google-ehrt--vater-der-videospielkassette--32966936.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jerry Lawson: Google ehrt &quot;Vater der Videospielkassette&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeWDaIvGBoPlW_86c-mSjeDo9DhmO8Ao5PtJ-hx96YYXSChYwDLsnZsMEjOV_htIODnrAFmvXn" alt="Jerry Lawson: Google ehrt &quot;Vater der Videospielkassette&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am 1. Dezember 2022 wäre Jerry Lawson 82 Jahre alt geworden. Der Videospielentwickler gilt als Erfinder der ersten Spielkonsole, der Fairchild Channel F.</p></div>
            </div>
        </a><a href='https://t3n.de/news/google-doodle-jerry-lawson-minigames-1517900/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Das heutige Google-Doodle ist perfekt zum Prokrastinieren – und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZxdiOzN_TCx46odUBtcb8aHP38-c97NdnmiTZQyxiuw6_IzMYUnZYRjjuOQvYCPwYhiMtCIW-" alt="Das heutige Google-Doodle ist perfekt zum Prokrastinieren – und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sagt euch der Name Jerry Lawson etwas? Falls nicht, ist heute der perfekte Tag, um mehr über den Mann zu erfahren, dem vor allem Videospiel-Fans viel zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nau.ch/news/games/videospiel-pionier-jerry-lawson-ware-heute-82-jahre-alt-66355452'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Videospiel-Pionier Jerry Lawson wäre heute 82. Jahre alt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5J6lZmdvx_tmSg-AxWo8mmeHRm3m6yocgHA5lKWGgENhuJO9mR3U6jXmB9Yc66LWYzBSB3e9y" alt="Videospiel-Pionier Jerry Lawson wäre heute 82. Jahre alt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jerry Lawson gilt als Videospiel-Pionier: Heute würde er seinen 82. Geburtstag feiern. Aus diesem Anlass hat Google einem interaktiven Doodle erstellt.</p></div>
            </div>
        </a><a href='https://cerealkillerz.org/gerald-jerry-lawson-82-geburtstag-und-ein-spielbares-google-doodle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerald &quot;Jerry&quot; Lawson 82. Geburtstag und ein spielbares Google ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzkEUQghzr55GZ5YNu-M3a73TgUjzibaPYs_xDI9x5nO2kGckd75I665-ruG7BEsdMBRD7vyFB" alt="Gerald &quot;Jerry&quot; Lawson 82. Geburtstag und ein spielbares Google ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jerry hat nämlich als leitender Entwickler die erste Spielekonsole mit Cartridges “Fairchild Channel F” geschaffen. Die Konsole war damals revolutionär, da man&nbsp;...</p></div>
            </div>
        </a><a href='https://www.googlewatchblog.de/2022/12/jerry-lawson-google-doodle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jerry Lawson: Ein interaktives Google-Doodle zum 82. Geburtstag ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRU4MhaM1qmi8Z50K-90YaCLf5Ru9YNv6vlIZJJ-j4OZSCXTbEdpvKeS9xuRxsRD8g6q_kNQ1Qy" alt="Jerry Lawson: Ein interaktives Google-Doodle zum 82. Geburtstag ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jerry Lawson gehört zu den Pionieren der Videospielbranche und leitete unter anderem die Entwicklung der ersten Videospielkonsole Fairchild Channel F. Natürlich&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}