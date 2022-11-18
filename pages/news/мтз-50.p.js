import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>МТЗ-50</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,МТЗ-50"/>
        <meta name="description" content="Trending News about МТЗ-50" /></Head><Template>
            <h1 style={{fontSize: "30"}}>МТЗ-50</h1>
            <Image width={800} height={500} src="https://patrioty.org.ua/images/2022/11/17185926_creenshot_37_large.png" alt="МТЗ-50"/>
            <h3>Recent News</h3>
            <a href='https://patrioty.org.ua/politic/lukashenko-pokhvalyvsia-iak-na-traktori-mtz-50-vytyskav-280-kmhod--litaky-zlitaiut-na-takii-shvydkosti-video-443957.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко похвалився, як на тракторі МТЗ-50 &quot;витискав&quot; 280 км ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtn5T5AD69cRC05YU-EovS9O_ef9lK9mV1zpfVODkCajKHBKLG_w4EY0bYIfYd5VdHGIlpBRpj" alt="Лукашенко похвалився, як на тракторі МТЗ-50 &quot;витискав&quot; 280 км ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як відомо, МТЗ-50 &quot;Білорусь&quot; випускався Мінським тракторним заводом з 1962 по 1985 роки. Відповідно до запевнень виробника, робоча швидкість цього трактора – 22&nbsp;...</p></div>
            </div>
        </a><a href='https://kp.ua/ua/politics/a659680-lukashenko-pokhvalivsja-jak-litav-na-traktori-mtz-50-zi-shvidkistju-280-kmhod'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко похвалився, як &quot;літав&quot; на тракторі МТЗ-50 зі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYP1BUtmB8E0-wkW58IfbHbUOIi_KtDZ5fmh104fNkhmMafEGghSiuo_cyxSxlYqgdDmy6Im2r" alt="Лукашенко похвалився, як &quot;літав&quot; на тракторі МТЗ-50 зі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лукашенко розганявся трактором МТЗ-50 до 280 км на годину. Лукашенко розповів як розганявся на тракторі 280 км на годину.</p></div>
            </div>
        </a><a href='https://24tv.ua/lukashenko-rozpoviv-bayku-pro-traktor-shho-ne-tak-zayavi-diktatora_n2200053'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ледь не злетів&quot;: Лукашенко хвалиться, що розганявся на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSflYnt4bmnrRIegiEWq4Ljz05F6T4mw1O39o9djDz9stzlxYTkUUNcRpjqN5IBpYAdRiWSRq4L" alt="&quot;Ледь не злетів&quot;: Лукашенко хвалиться, що розганявся на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олександр Лукашенко розповів, що ще в юності розганявся на тракторі до 280 кілометрів на годину. Однак реальні факти дещо суперечать заяві диктатора.</p></div>
            </div>
        </a><a href='https://apostrophe.ua/ua/news/world/ex-ussr/2022-11-17/kartofelnyiy-shumaher-lukashenko-okonfuzilsya-s-ezdoy-na-traktore-video/284133'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Картопляний Шумахер: Лукашенко сконфузився з їздою на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjaIpEdXb-Oxa-TDs-C4ZQmFFOnPrKAwMROIugExnvJV-rbwnEMklSJUskRUAStFXPtBJWPqlW" alt="Картопляний Шумахер: Лукашенко сконфузився з їздою на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У мережі з&#39;явилося відео, де самопроголошений президент Білорусі Олександр Лукашенко розповідає про свій досвід їзди на тракторі МТЗ-50 &quot;Білорусь&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}