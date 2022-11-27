import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Дженна ортега</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Дженна ортега"/>
        <meta name="description" content="Trending News about Дженна ортега" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Дженна ортега</h1>
            <Image width={800} height={500} src="https://thecity.m24.ru/b/d/SYketSivf4o8JvDObLLBFlFNEhluPXn9kZxNbycGshjv55OD3HWFWh2pL8EsPwl5DpSHzm95vRzNbdeHauL5EWcJ5w9e=dgQJlOP407gdSR-ie9_gqg.jpg" alt="Дженна ортега"/>
            <h3>Recent News</h3>
            <a href='https://thecity.m24.ru/articles/7791'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>От рекламы зубной пасты до сериала Тима Бертона «Уэнсдей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-FKEUpCQZOQ8almAboHAxpg4_qzM7AJ4JxtjWuadMtcEFfz1CTXxxyQ6rkItjGE1qgaP_rTyz" alt="От рекламы зубной пасты до сериала Тима Бертона «Уэнсдей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На Netflix вышел сериал Тима Бертона «Уэнсдей» — о дочери Гомеса и Мортиши. Главную роль девочки с загадочными способностями сыграла Дженна Ортег. В Сети&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}