import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahçe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahçe"/>
        <meta name="description" content="Trending News about Fenerbahçe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahçe</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/FOTOSDR/2022/jorgejesusfenerbahcerayo1.jpg" alt="Fenerbahçe"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-30/turquia-fenerbahce-de-jorge-jesus-comeca-segunda-pre-epoca-com-vitoria/966702'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe, de Jorge Jesus, começa segunda pré-época com vitória</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPByQugCmQ0cnszsK5kBqAR_ASG1H4M_l9W9kjtxPb9_A1vPSu5kttvp-apOoUbgt_XxW3wU_f" alt="Fenerbahçe, de Jorge Jesus, começa segunda pré-época com vitória" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Fenerbahçe, orientado por Jorge Jesus, bateu, esta quarta-feira, o Rayo Vallecano, por 3-1, no primeiro jogo da segunda pré-temporada da equipa de Jorge&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2124389/fenerbahce-de-jorge-jesus-passa-por-susto-mas-vira-e-vence-particular'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahçe de Jorge Jesus passa por susto, mas vira e vence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbiPgwmqraqeRn52DBUq6WProxIeVxoVdErO6xt0iVr7k1ra6JTuC7l7G5K5jF-1st6gEenNG2" alt="Fenerbahçe de Jorge Jesus passa por susto, mas vira e vence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Fenerbahçe venceu nesta quarta-feira o Rayo Vallecano por 3-1, em jogo particular. Nesta pausa para o Mundial&#39;2022, Jorge Jesus quis fazer um ponto de&nbsp;...</p></div>
            </div>
        </a><a href='https://mauaagora.com.br/2022/11/30/fenerbahce-x-rayo-vallecano-assistir-ao-vivo-e-palpites-amistoso-internacional-de-clubes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahce x Rayo Vallecano: ASSISTIR AO VIVO E PALPITES ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Fenerbahce x Rayo Vallecano: ASSISTIR AO VIVO E PALPITES ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A equipe do Fenerbahce segue comandada pelo técnico português Jorge Jesus, que vem fazendo um grande trabalho a frente do clube turco e quer aproveitar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}