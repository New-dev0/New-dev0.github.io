import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Colo-Colo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Colo-Colo"/>
        <meta name="description" content="Trending News about Colo-Colo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Colo-Colo</h1>
            <Image width={800} height={500} src="https://futebolatino.lance.com.br/wp-content/uploads/2020/07/pellegrini-enche-de-elogios-o-elenco-do-betis-em-sua-apresentacao-Futebol-Latino-13-07.jpg" alt="Colo-Colo"/>
            <h3>Recent News</h3>
            <a href='https://futebolatino.lance.com.br/midia-espanhola-tece-duras-criticas-a-pellegrini-apos-goleada-sofrida-para-o-colo-colo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mídia espanhola tece duras críticas a Pellegrini após goleada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSbYoLtILEbAFGeJOSzNn5NImuABizfQN075r2wkV0pi8L-McNeuB8CYE23fGelxelklA4EJoH" alt="Mídia espanhola tece duras críticas a Pellegrini após goleada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O placar de 5 a 0 para o Colo-Colo em partida amistosa na última quarta-feira, não surpreendeu apenas os torcedores do Cacique, mas também ao próprio Real Betis&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}