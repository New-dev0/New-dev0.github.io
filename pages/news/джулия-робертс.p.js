import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джулия Робертс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джулия Робертс"/>
        <meta name="description" content="Trending News about Джулия Робертс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джулия Робертс</h1>
            <Image width={800} height={500} src="https://n1s2.hsmedia.ru/b6/88/94/b68894f2322228438c6fa4b856ff922d/1200x630_0xac120003_6466681831668504889.png" alt="Джулия Робертс"/>
            <h3>Recent News</h3>
            <a href='https://www.elle.ru/moda/zvezdny-stil/ryzhevolosaya-krasotka-dzhuliya-roberts-v-kostyume-v-polosku-i-s-samym-rozhdestvenskim-manikyurom-v-nyu-iorke/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рыжеволосая красотка: Джулия Робертс в костюме в полоску и с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB6fd7hxskAxdqLAUBozMC22XSBPdGAUuqGuIAk_qON95fCBs8NeXNAb02wlx5gOG2tiw8JUNB" alt="Рыжеволосая красотка: Джулия Робертс в костюме в полоску и с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>55-летняя актриса обрадовала поклонников новым выходом, в очередной раз доказав своё превосходство над цифрами в паспорте | ELLE.</p></div>
            </div>
        </a>
        </Template></>;
}