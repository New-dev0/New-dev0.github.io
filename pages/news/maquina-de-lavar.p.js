import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maquina de lavar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maquina de lavar"/>
        <meta name="description" content="Trending News about Maquina de lavar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maquina de lavar</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/25/375034079-lava-louca-1.jpg" alt="Maquina de lavar"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/especiais/black-friday/como-escolher-a-melhor-lava-louca-na-black-friday,8a3cfa36e037dd4a72d1e24ec38071f7labkn9rw.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como escolher a melhor lava-louça na Black Friday?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjsUX7SDVpjtxpUf2hn2WLz_PTKgCKEEsQmcSdkvKz4rN4p_72QuYZ3tYaDoMx0PIR6am_yghp" alt="Como escolher a melhor lava-louça na Black Friday?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nove em cada dez brasileiros odeiam lavar louça ! Brincadeiras à parte, uma coisa é fato: a ...</p></div>
            </div>
        </a>
        </Template></>;
}