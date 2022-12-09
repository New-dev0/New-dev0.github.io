import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Булгаков</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Булгаков"/>
        <meta name="description" content="Trending News about Булгаков" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Булгаков</h1>
            <Image width={800} height={500} src="https://505221.selcdn.ru/prmira/publications/sharing-images/facebook/7ada6ab7-f779-4623-9406-074721bdb584.jpeg" alt="Булгаков"/>
            <h3>Recent News</h3>
            <a href='https://prmira.ru/news/v-bare-bulgakov-projdet-prazdnovanie-novogo-goda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В баре «Булгаков» пройдет празднование Нового года</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwoo9bQ3vd6pbYaMmv2976hLDzdBbrZvMOpx8M1600g7lN_Cn9d-FgBfglp7FitlWq576uQlqE" alt="В баре «Булгаков» пройдет празднование Нового года" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В баре «Булгаков» 31 декабря пройдет празднование новогодней ночи. Гости заведения соберутся, чтобы проводить старый год и встретить новый — 2023.</p></div>
            </div>
        </a>
        </Template></>;
}