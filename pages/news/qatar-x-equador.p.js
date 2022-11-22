import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar x Equador</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar x Equador"/>
        <meta name="description" content="Trending News about Qatar x Equador" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar x Equador</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb71b6d8c9d1e7e0e/636ef8593aefad64f9a80826/GK_Saad_al-Sheeb.jpg" alt="Qatar x Equador"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/br/listas/todos-os-cartoes-amarelos-da-copa-do-mundo-2022/bltdcb2395b83a6f034'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todos os cartões amarelos da Copa do Mundo 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTkFnBWly2rW-OH4Zss7_zxhS2rx64TZ_YSWuf8JXomvBhLnpQU30KSGR7OGnvrQKUl_vHUWzU" alt="Todos os cartões amarelos da Copa do Mundo 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pela regra, se um jogador levar dois cartões amarelos em partidas diferentes, ele terá que cumprir suspensão no jogo seguinte. No entanto, os cartões serão&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}