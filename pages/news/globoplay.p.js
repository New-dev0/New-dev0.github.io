import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Globoplay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Globoplay"/>
        <meta name="description" content="Trending News about Globoplay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Globoplay</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/11/24/1669317550637fc3ae050a4_1669317550_3x2_rt.jpg" alt="Globoplay"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/colunas/monicabergamo/2022/11/torcida-do-corinthians-sera-tema-de-documentario-no-globoplay.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcida do Corinthians será tema de documentário no Globoplay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-M2cWODg4NRfdZHg8SbGpGMu7MtiwJj_a9nHMGJJLtR9r3l2bY35w3qjEks_fQU-PyCtSrtBr" alt="Torcida do Corinthians será tema de documentário no Globoplay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores que participaram da vitória no Mundial como Danilo, Emerson Sheik e o goleiro Cássio são entrevistados no documentário pelos jornalistas Edgar Alencar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.omelete.com.br/ccxp/brasil-camaroes-ccxp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Globoplay vai transmitir jogo Brasil x Camarões ao vivo na CCXP22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPulKTdCDGtqhfl7THJBqcxN6gXuK21S5uRhCGHrTonvaBBYwj0Q7aLsFqLgrtSCYBVbMkDtvv" alt="Globoplay vai transmitir jogo Brasil x Camarões ao vivo na CCXP22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Globoplay vai levar a Copa do Qatar até os visitantes da CCXP22. O serviço de vai transmitir a partida ao vivo no Palco Thunder by Cinemark Club.</p></div>
            </div>
        </a>
        </Template></>;
}