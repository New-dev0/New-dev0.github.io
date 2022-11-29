import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brazil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brazil"/>
        <meta name="description" content="Trending News about Brazil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brazil</h1>
            <Image width={800} height={500} src="https://braziljournal.com/wp-content/uploads/2022/11/Dasa.jpeg" alt="Brazil"/>
            <h3>Recent News</h3>
            <a href='https://braziljournal.com/dasa-busca-investidor-para-levantar-r-2-bi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dasa busca investidor para levantar R$ 2 bi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVsOMkisQ3QQYXBOuJGaSFJYQbsecrNe12jQ2A_2Pa1vlqbyPzYp_3iZfg9BzQYEa-IJwzUmWa" alt="Dasa busca investidor para levantar R$ 2 bi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Dasa está buscando investidores para um aumento de capital de R$ 2 bilhões, fontes a par do assunto disseram ao Brazil Journal.</p></div>
            </div>
        </a><a href='https://braziljournal.com/ctg-brasil-quer-r-4-bi-no-ipo-das-hidreletricas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CTG Brasil quer R$ 4 bi no IPO das hidrelétricas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvAmDh9UE4RALFyoPUu1oME1E_5h53geq0IRiHtiz7wkKJmynV1TLG42lR04FkIL93TvMF_i2v" alt="CTG Brasil quer R$ 4 bi no IPO das hidrelétricas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A CTG Brasil - uma das maiores geradoras de energia do País - prepara um IPO que deve levantar perto de R$ 4 bilhões.</p></div>
            </div>
        </a>
        </Template></>;
}