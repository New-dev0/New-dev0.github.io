import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Signos horóscopo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Signos horóscopo"/>
        <meta name="description" content="Trending News about Signos horóscopo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Signos horóscopo</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/ieMtF7P9n5Pj--DHFG8G7ks4iB0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/N/q/0tD87wRRmUm4CxoLDClA/para-cards-copiar.jpg" alt="Signos horóscopo"/>
            <h3>Recent News</h3>
            <a href='https://gshow.globo.com/horoscopo-etc/noticia/quais-os-signos-dos-personagens-de-travessia.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quais os signos dos personagens de Travessia?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQw4UHbyKYDo3QrxlH-i5I-Q6dmQJVJgf5y_fNnG7bUraoEGSNyoCN8IXFYO7QNZd-Evc_0xXE_" alt="Quais os signos dos personagens de Travessia?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem aí não perde um capítulo de Travessia? Brisa (Lucy Alves), Ari (Chay Suede), Chiara (Jade Picon) e cia já fazem parte da nossa vida, não é?</p></div>
            </div>
        </a>
        </Template></>;
}