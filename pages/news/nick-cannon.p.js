import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nick Cannon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nick Cannon"/>
        <meta name="description" content="Trending News about Nick Cannon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nick Cannon</h1>
            <Image width={800} height={500} src="https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/637368060cf255d6e13a8449/" alt="Nick Cannon"/>
            <h3>Recent News</h3>
            <a href='https://www.lux.iol.pt/internacional/15-11-2022/nick-cannon-foi-pai-novamente'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Cannon foi pai novamente!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIX47wWB0qZu1wsaE__I3T1XR59aV_oX3CIEinSwYtvIUhKWlQ-VwXLLiQ--DG9gqeiswxaTcJ" alt="Nick Cannon foi pai novamente!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Cannon foi pai novamente! Uma semana depois de anunciar o 11º filho a caminho, o segundo com a modelo Alyssa Scott, o artista de 42 anos anunciou o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}