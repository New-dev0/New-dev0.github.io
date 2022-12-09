import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Камикадзе Ди розыск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Камикадзе Ди розыск"/>
        <meta name="description" content="Trending News about Камикадзе Ди розыск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Камикадзе Ди розыск</h1>
            <Image width={800} height={500} src="https://cdn.forbes.ru/forbes-static/shareimages/482200.jpg?v=1670491068" alt="Камикадзе Ди розыск"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.ru/forbeslife/482200-mvd-ob-avilo-v-federal-nyj-rozysk-priznannogo-inoagentom-blogera-kamikadze-di'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МВД объявило в федеральный розыск признанного иноагентом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfgckbp3qMVJbLb3Cm4F-fYrVzXv3OZhZmtEDuC3zJ6gYM4Cn7hkLi0m1CoeIsOcngrJGrAnrL" alt="МВД объявило в федеральный розыск признанного иноагентом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блогер Камикадзе Ди (Дмитрий Иванов) объявлен в федеральный розыск, согласно базе данных МВД. Ранее ведущий YouTube-канала Kamikadzedead был включен в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/proisshestviya/08122022/529347'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блогера Камикадзе Ди объявили в федеральный розыск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRg9Mfc0VFkMq7zAzw5_A6J6gO4JTN9IDeGiX1LfvriFvwBJf4mvpSNWevFXDzfG1yVWUnd6BSe" alt="Блогера Камикадзе Ди объявили в федеральный розыск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В сентябре Камикадзе Ди, который является главным редактором сайта CarambaTV.ru, стал фигурантом уголовного дела о распространении фейковой информации о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/mvd-rossii-obyavilo-v-rozysk-yutub-blogera-dmitriya-ivanova-/32167235.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МВД России объявило в розыск блогера Камикадзе Ди</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvQ2xZsbCWewH7QmjCLObt0tk35udt5Z-cVkL4oxWMitNVWnVUJVbc3iwEYdsGQ0NJykWzzeEj" alt="МВД России объявило в розыск блогера Камикадзе Ди" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>МВД России объявило в федеральный розыск блогера Дмитрия Иванова (Камикадзе Ди). На это обратила внимание &quot;Медиазона&quot;. Иванов ведет ютуб-канал Kamikadzedead&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/514617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МВД объявило в розыск Камикадзе Ди</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXCTVviqFhdMEIbylvslfeB8SyqsoeZHui0-dhT0Rl-6IwFJs1jOpHQd04U-QhB3hfTelSb91F" alt="МВД объявило в розыск Камикадзе Ди" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Камикадзе Ди (настоящая фамилия Дмитрий Иванов) является главным редактором сайта CarambaTV.ru. У Иванова также есть свой канал на YouTubе с 1,7 млн подписчиков&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/society/bloger-kamikadze-di-obyavlen-v-federalnyj-rozysk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блогер Камикадзе Ди объявлен в федеральный розыск</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCJPpeRZJ3nV8zDSaHte1kGQyGfmX1mng4GQbs7A9oN77QDSaYGbnt2k0Vf1MOFf-NsRiBQ7w-" alt="Блогер Камикадзе Ди объявлен в федеральный розыск" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блогера Дмитрия Иванова, известного под псевдонимом «Камикадзе Ди», объявили в федеральный розыск.</p></div>
            </div>
        </a><a href='https://ovd.news/express-news/2022/12/08/mvd-obyavilo-v-rozysk-yutub-blogera-kamikadze-di'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МВД объявило в розыск ютуб-блогера «Камикадзе Ди» | ОВД-News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQY8wZXNX5r1ZARQa4VQv6Tp2wTUW07i4ZA6ZyZWUuvwfOlNAJh9eSLd_GME24AkXHHJL9vLgQe" alt="МВД объявило в розыск ютуб-блогера «Камикадзе Ди» | ОВД-News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>МВД объявило в федеральный розыск ютуб-блогера Дмитрия Иванова, известного как «Камикадзе Ди». Внимание на карточку в базе розыска обратила «Медиазона».</p></div>
            </div>
        </a>
        </Template></>;
}