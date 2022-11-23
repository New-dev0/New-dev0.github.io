import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sindrome de Estocolmo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sindrome de Estocolmo"/>
        <meta name="description" content="Trending News about Sindrome de Estocolmo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sindrome de Estocolmo</h1>
            <Image width={800} height={500} src="https://livecoins.com.br/wp-content/uploads/2022/11/Tiago-Reis-Suno.jpg" alt="Sindrome de Estocolmo"/>
            <h3>Recent News</h3>
            <a href='https://livecoins.com.br/bitcoin-cai-pessoas-aplaudem-sindrome-de-estocolmo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Bitcoin cai 80% e é aplaudido, isso é síndrome de Estocolmo”, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSWFBmaJJ2DJ0cOIAs-K5CxX_vnrpWmyllg9zZseWxsmFx7UZFMCXAFBCLAQ5X3IiCRUhh2vy8" alt="&quot;Bitcoin cai 80% e é aplaudido, isso é síndrome de Estocolmo”, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para Tiago Reis, fundador Suno, o Bitcoin é o &quot;único investimento que as pessoas perdem 80% e ainda aplaudem&quot;. &quot;Síndrome de Estocolmo&quot;</p></div>
            </div>
        </a>
        </Template></>;
}