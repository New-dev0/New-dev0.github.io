import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Михайлов день 21 ноября</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Михайлов день 21 ноября"/>
        <meta name="description" content="Trending News about Михайлов день 21 ноября" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Михайлов день 21 ноября</h1>
            <Image width={800} height={500} src="https://static.life.ru/publications/2022/11/17/1194851422008.0898.png" alt="Михайлов день 21 ноября"/>
            <h3>Recent News</h3>
            <a href='https://life.ru/p/1539642'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что можно и что нельзя делать в Михайлов день 21 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvr-CPp8_T9cBcWFmMTWE_fCzByukApvgJIRi5hpm9_ldEx01OgWoBWLJZNgJiaWXMs_q-W6fn" alt="Что можно и что нельзя делать в Михайлов день 21 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Что означает праздник Собора архистратига Михаила 21 ноября, или Михайлов день, древние приметы и при чём тут экзорцизм.</p></div>
            </div>
        </a>
        </Template></>;
}