import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sam Smith</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sam Smith"/>
        <meta name="description" content="Trending News about Sam Smith" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sam Smith</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-12-02-sam-smith.jpg-34b6408c/1.91x1?wm=true&outputFormat=jpeg" alt="Sam Smith"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-12-02-Sam-Smith-no-NOS-Alive-2023-ef965ae4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Smith no NOS Alive 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9EmYxZ7eMRxtalSuHiDmgobcoS0BMY3h83dkrFBJypv5dQKcT9zu6LQXDN0pIQFlAnkcZupgP" alt="Sam Smith no NOS Alive 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mais um dia, mais um nome confirmado para o NOS Alive. Sam Smith irá regressar a um local onde já foi feliz.</p></div>
            </div>
        </a><a href='https://www.jn.pt/artes/sam-smith-e-a-nova-confirmacao-do-nos-alive-15415508.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Smith é a nova confirmação do NOS Alive</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsWwodDxAej5MOc6gaSTQ11IpbL7WMO684uQIJvedfawikDJSWV57rZvp79wMvkHeUTds4iOdy" alt="Sam Smith é a nova confirmação do NOS Alive" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sam Smith atua no Passeio Marítimo de Algés em julho. Os bilhetes para o festival já estão à venda.</p></div>
            </div>
        </a><a href='https://magg.sapo.pt/cultura/musica/artigos/sam-smith-nos-alive'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Smith regressa a Portugal em 2023. Saiba onde, quando e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRJDYyLQ0XyfkVK_OZrA_uj5-Agn6Lslv-HQo0lKnHPHDC30vXJR8z4pRCzhE4UXn-RKCBlPhU" alt="Sam Smith regressa a Portugal em 2023. Saiba onde, quando e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É mais uma confirmação do NOS Alive para o verão de 2023. Sam Smith sobe ao palco NOS no último dia do festival, para cantar alguns dos maiores êxitos da&nbsp;...</p></div>
            </div>
        </a><a href='https://radiocomercial.iol.pt/noticias/131112/sam-smith-no-nos-alive'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Smith no NOS Alive - Rádio Comercial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWDWASJGunRW2pxCbIVcA2XQdvtisjTo-SaYiy6tDMqtIkLJnOyv0O4WX4wbETrquf9iNb8puW" alt="Sam Smith no NOS Alive - Rádio Comercial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor britânico Sam Smith está de volta ao festival NOS Alive, para um concerto no palco principal, o Palco NOS, a 8 de julho. É o regresso do artista ao&nbsp;...</p></div>
            </div>
        </a><a href='https://comunidadeculturaearte.com/nos-alive23-confirma-sam-smith/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NOS Alive&#39;23 confirma Sam Smith</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEhYN2aU8NcSY-OoUjKCffQ5BjC9b1sqJBPzxvKSeGO_Nz0s2MCFJh0jOxxCGY-gbKeCsHt7Uw" alt="NOS Alive&#39;23 confirma Sam Smith" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sam Smith é a grande confirmação do dia 8 de julho no Palco NOS na 15ª edição do NOS Alive&#39;23. Desde o seu álbum de estreia, In The Lonely Hour, Sam Smith&nbsp;...</p></div>
            </div>
        </a><a href='https://mag.sapo.pt/musica/artigos/sam-smith-regressa-ao-nos-alive-em-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sam Smith regressa ao NOS Alive em 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTwQjSzES-Aa3Jz2ozxnfXk5fZt4iz3LqOXs5jjGS1LTMzaJiwV5FoFYSPl3MXloMtQ27a1Q65" alt="Sam Smith regressa ao NOS Alive em 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sam Smith é a grande confirmação para o dia 8 de julho do NOS Alive....</p></div>
            </div>
        </a>
        </Template></>;
}