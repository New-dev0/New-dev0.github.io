import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Любовь Успенская</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Любовь Успенская"/>
        <meta name="description" content="Trending News about Любовь Успенская" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Любовь Успенская</h1>
            <Image width={800} height={500} src="https://img.dni.ru/binaries/social/514000.jpg" alt="Любовь Успенская"/>
            <h3>Recent News</h3>
            <a href='https://dni.ru/showbiz/2022/12/3/514000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;В такую пасть только *** класть&quot;: облизавшей губки Успенской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX_gt0kHwF-cu1oupYCuIjB6_sVjmQkw1duUGGsNrXsJKN2_yLNn8ixyfedfbFwZIIg8W5dPa5" alt="&quot;В такую пасть только *** класть&quot;: облизавшей губки Успенской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Народ прошелся по Любови Успенской. В который раз... Сложно не заметить, что за последние 10 лет королева шансона Любовь Успенская очень изменилась. Артистка не&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}