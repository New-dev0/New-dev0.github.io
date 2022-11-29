import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Львівська область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Львівська область"/>
        <meta name="description" content="Trending News about Львівська область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Львівська область</h1>
            <Image width={800} height={500} src="https://lviv.media/static/content/thumbs/1200x630/2/5c/mbyyzz---c1200x630x50px50p-up--b995cc22932ba7b8d3dfd1524bb205c2.jpg" alt="Львівська область"/>
            <h3>Recent News</h3>
            <a href='https://lviv.media/lvivshchyna/60404-chehiya-dopomozhe-vidnovlyuvati-energetichnu-infrastrukturu-lvivshini/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Львівська область отримає джерела резервного живлення від Чехії</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwAU6P3APKh_JvnCPdrOluszRB8CuJOXdEVwsdzlccfczWtbxoLyezADy_AhpnUFpF3rvvQ-_7" alt="Львівська область отримає джерела резервного живлення від Чехії" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чеська сторона зазначила, що планує доєднатись до відновлення енергетичної інфраструктури.</p></div>
            </div>
        </a><a href='https://zahid.espreso.tv/chekhiya-mozhe-peredati-na-lvivshchinu-generatori-dlya-obektiv-kritichnoi-infrastrukturi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чехія може передати на Львівщину генератори для об&#39;єктів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtbv5z1532RsL5CVjYHpm_SrRZLYaiRj7ZRphQQGvF6HZYYQsT_R57wnAUeC27gKpbbK6vA9hN" alt="Чехія може передати на Львівщину генератори для об&#39;єктів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні, 28 листопада, відбулась зустріч керівництва профільних департаментів Львівської ОВА з Генеральним консулом Чеської Республіки у Львові та&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}