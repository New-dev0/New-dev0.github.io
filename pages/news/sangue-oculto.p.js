import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sangue Oculto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sangue Oculto"/>
        <meta name="description" content="Trending News about Sangue Oculto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sangue Oculto</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/MGL4860-scaled-e1669386759510.jpg" alt="Sangue Oculto"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/programas/e-especial/ator-adriano-luz-sofre-pequeno-acidente-nas-gravacoes-de-sangue-oculto-e-guilherme-moura-afirma-foi-um-azar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ator Adriano Luz sofre pequeno acidente nas gravações de &#39;Sangue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaXjfX7l5D6vLC3TftePEDt0FDzaJPLfoAXPHr3AUWb5LO92W-omaZ_Rn_tYs7fm3wZBYx9A2C" alt="Ator Adriano Luz sofre pequeno acidente nas gravações de &#39;Sangue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator, que dá vida a Vasyl na novela da SIC, explicou o que aconteceu ao colega.</p></div>
            </div>
        </a><a href='https://www.zapping-tv.com/sangue-oculto-soma-e-segue-contra-quero-e-viver-e-para-sempre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Sangue Oculto&quot; soma e segue... contra &quot;Quero é Viver&quot; e &quot;Para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpvVhLi9BTKqqLNuwSv9K0o0UlulYmbvx5_IdLP1QV-SAI3BR_6Mgvw2WlxKqC66YNlpJEg6YV" alt="&quot;Sangue Oculto&quot; soma e segue... contra &quot;Quero é Viver&quot; e &quot;Para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A novela protagonizada por Sara Matos marcou ontem 7.5/19.1% com 706.100 espectadores fidelizados. O pico de “Sangue Oculto” foi de 8.8/20.7%. A TVI ainda&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}