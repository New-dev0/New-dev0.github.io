import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Olivier Minne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Olivier Minne"/>
        <meta name="description" content="Trending News about Olivier Minne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Olivier Minne</h1>
            <Image width={800} height={500} src="" alt="Olivier Minne"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/olivier-minne-ce-regime-draconien-a-lorigine-de-sa-perte-de-poids-fulgurante-743283'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Olivier Minne : ce régime draconien à l&#39;origine de sa perte de poids ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSjNgDngz0AhWRz_IXkuQma0HxDHoq4F0xcr-QxD-NCbdnMV8SFgh_HLVFrAVne07v1jJbXMHh" alt="Olivier Minne : ce régime draconien à l&#39;origine de sa perte de poids ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que les spectateurs s&#39;interrogent sur son secret minceur, le présentateur du Club des invincibles, réputé pour sa musculature saillante et son corps d&#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}