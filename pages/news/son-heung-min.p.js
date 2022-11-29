import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Son Heung-min</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Son Heung-min"/>
        <meta name="description" content="Trending News about Son Heung-min" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Son Heung-min</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/24/615x300/1_000_32nz2f7-22072810.jpg" alt="Son Heung-min"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/colunas/saude-e-bem-estar/2022/11/15130141-jogador-da-coreia-de-mascara-entenda-porque-son-heung-min-joga-de-mascara.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGADOR DA COREIA DE MÁSCARA: entenda por que SON ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtdJjwqOWvBNytmQTigxw5MYZrkSuJgOln-xmROTFQu6h7WzDkUCaVLQkppf_tFw7cFnzp8CZo" alt="JOGADOR DA COREIA DE MÁSCARA: entenda por que SON ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Heung-min, craque da Coreia do Sul, joga de máscara na Copa do Mundo.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15130167-jogador-da-coreia-do-sul-de-mascara-saiba-por-que-son-heung-min-joga-de-mascara-na-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGADOR DA COREIA DO SUL DE MÁSCARA: Saiba por que SON ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWGgllKkkDwwDHI8O3DyT99AqQblXOitT6IHuWiKHDYeoFhW_wjuav5Ay1aIdLjSWWTyy1-aYZ" alt="JOGADOR DA COREIA DO SUL DE MÁSCARA: Saiba por que SON ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entenda motivo de jogador Son Heung-min, da Coreia do Sul, usar máscara durante jogos da Copa 2022.</p></div>
            </div>
        </a><a href='https://fusne.com/web-stories/son-heung-min-o-jogador-que-usa-mascara-nos-jogos-da-copa-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Son Heung-min: o jogador que usa mascara nos jogos da Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRelELYYE9QAq6ZgVOZber4duEf4TMd_shw8OyYLLdwlnXIKlh1UEskh5y8Hv84-mjCP8oVdNwP" alt="Son Heung-min: o jogador que usa mascara nos jogos da Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son Heung-min, mais conhecido como Son, é um futebolista sul-coreano que atua como ponta-esquerda. Atualmente, joga pelo Tottenham.</p></div>
            </div>
        </a><a href='https://aventurasnahistoria.uol.com.br/noticias/historia-hoje/por-que-heung-min-son-capitao-da-coreia-do-sul-usa-mascara-em-campo.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que Heung-Min Son, capitão da Coreia do Sul, usa máscara em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAdR1aUvAmPV4uBjc-znGcDboDxzg728PtxidWRz5AXU4w1bP-FnxgbJL5bkr28MWylaNE8bRr" alt="Por que Heung-Min Son, capitão da Coreia do Sul, usa máscara em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em campo na Copa do Mundo 2022, Heung-Min Son chama atenção com uma máscara.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/esportes/catar-2022/noticia/2022/11/saiba-por-que-son-da-coreia-do-sul-joga-de-mascara.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saiba por que Son, atacante da Coreia do Sul, joga de máscara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-S1nV_eyGihsXdTcJVY2RpKaTd5qUrornoPV5FiHzALRRz63z3SQ9maKFDauaCi-oXRlsrYPx" alt="Saiba por que Son, atacante da Coreia do Sul, joga de máscara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além do jogador coreano, o zagueiro Gvardiol, da Croácia, é outro que utiliza o acessório no Mundial.</p></div>
            </div>
        </a><a href='https://www.portalr10.com/noticia/104546/por-que-alguns-jogadores-entram-em-campo-usando-mascara-confira'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que alguns jogadores entram em campo usando máscara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQS-gAImxC48kWNYs453x4LCGyGkxpIfGjx3Ncqf-3XhKwn_VhpsyWsibW38fZ0kkwE-FwDEjgY" alt="Por que alguns jogadores entram em campo usando máscara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores como o sul-coreano Son Heung-min e o croata Gvardiol estão levantando a curiosidade do público por utilizar uma máscara r&amp;iacu...</p></div>
            </div>
        </a>
        </Template></>;
}