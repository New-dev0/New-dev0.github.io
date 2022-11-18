import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve 18 novembro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve 18 novembro"/>
        <meta name="description" content="Trending News about Greve 18 novembro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve 18 novembro</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6376704e0cf2254fb282ba59/og/away" alt="Greve 18 novembro"/>
            <h3>Recent News</h3>
            <a href='https://away.iol.pt/greve/atualidade/greve-esta-sexta-feira-provoca-paralisacao-de-varios-transportes-publicos/20221117/637671df0cf27230dc17e7cf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve esta sexta-feira provoca paralisação de vários transportes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6VXEz75bPwpQD1htZeDf88WLfGOyOnzTXoikshbCAekJcCnYWG1z54nC_7N7-QXAcLV4xstaS" alt="Greve esta sexta-feira provoca paralisação de vários transportes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autocarros em Braga, em Coimbra e no Barreiro deverão ter carreiras paradas devido a greve convocada a nível nacional.</p></div>
            </div>
        </a>
        </Template></>;
}