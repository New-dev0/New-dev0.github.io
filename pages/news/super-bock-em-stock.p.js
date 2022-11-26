import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Super Bock em Stock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Super Bock em Stock"/>
        <meta name="description" content="Trending News about Super Bock em Stock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Super Bock em Stock</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-10-24-pluto.png-fd182507/1.91x1?wm=true&outputFormat=jpeg" alt="Super Bock em Stock"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-26-Pluto-no-Super-Bock-em-Stock-o-bicho-do-rock-morde-sempre-duas-vezes-ecb3d97e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pluto no Super Bock em Stock: o bicho do rock morde sempre duas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDYxhKmeD6EUpJVGyAlKa9uvReUNNQFTBTBAgmciQwjWeh-8Ihxv46WHjz9pOkiFsDGIPfWtWo" alt="Pluto no Super Bock em Stock: o bicho do rock morde sempre duas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na sua segunda vida, os Pluto de Manel Cruz e Peixe mantêm o espírito rock de “Bom Dia”, o único disco que gravaram, em 2004. No festival Super Bock em&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/blitz/2022-11-26-Quem-tem-pronuncia-do-norte-tem-tudo.-David-Bruno-serve-pralines-power-ballads-e-duetos-de-luxo-no-Super-Bock-em-Stock-15e1d9e8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem tem pronúncia do norte tem tudo. David Bruno serve pralinés ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrkY-iEJtmbEiNVJePsa60s2fbirS8liWGGlpPASxVGYp4U93R8cc1PrzI5SSMzsVb6d6Uj4hD" alt="Quem tem pronúncia do norte tem tudo. David Bruno serve pralinés ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gisela João, Mike El Nite e Marlon Brandão, d&#39;Os Azeitonas, juntaram-se a David Bruno no palco do Coliseu dos Recreios para um dos concertos mais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}