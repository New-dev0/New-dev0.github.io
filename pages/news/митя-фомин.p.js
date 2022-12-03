import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Митя Фомин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Митя Фомин"/>
        <meta name="description" content="Trending News about Митя Фомин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Митя Фомин</h1>
            <Image width={800} height={500} src="https://russianteleweek.ru/wp-content/uploads/2022/12/maxresdefault.jpg" alt="Митя Фомин"/>
            <h3>Recent News</h3>
            <a href='https://russianteleweek.ru/stars/mitja-fomin-o-remonte-v-kvartire-poezdke-v-arktiku-delikatesah-iz-oleniny-i-koncerte-v-moskve/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Митя Фомин: о ремонте в квартире, поездке в Арктику ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLRcVXU-hS-KEuma8ypGFvts6S080Y3b5q_7im819SEdEvLrCwhJwHE-dxF2boIYv6GkynjO1G" alt="Митя Фомин: о ремонте в квартире, поездке в Арктику ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Артист рассказал, что заставило его избавиться от &quot;вещизма&quot; и начать перестройку своего жилища. Но это не единственные перемены в жизни исполнителя.</p></div>
            </div>
        </a>
        </Template></>;
}