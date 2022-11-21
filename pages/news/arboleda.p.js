import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arboleda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arboleda"/>
        <meta name="description" content="Trending News about Arboleda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arboleda</h1>
            <Image width={800} height={500} src="https://static.gazetaesportiva.com/uploads/imagem/2022/11/19/Arboleda-3.jpg" alt="Arboleda"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetaesportiva.com/times/sao-paulo/arboleda-celebra-volta-por-cima-apos-lesao-no-sao-paulo-ninguem-acreditava/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arboleda celebra volta por cima após lesão no São Paulo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQi08HYcr6XyY8GuhVPqvFOeqL2ZTNkem9GC6Du1226LbxIcNY06zKom4zkien7gqcww94SnxUV" alt="Arboleda celebra volta por cima após lesão no São Paulo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador conseguiu se recuperar a tempo do Mundial de uma lesão grave no tornozelo, sofrida no jogo de ida das oitavas de final da Copa do Brasil, contra o&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/equador/noticia/2022/11/20/arboleda-celebra-vitoria-do-equador-na-estreia-e-projeta-ter-chance-como-titular-na-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arboleda celebra vitória do Equador na estreia e projeta ter chance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqqaaiXPO0mTabFC7-_jOsnDJUIIt4D0NWNlUD6CnQGk6Mz7qBCjp7JkxFyr_7eYKkP-8jZFB9" alt="Arboleda celebra vitória do Equador na estreia e projeta ter chance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O zagueiro Robert Arboleda não saiu do banco de reservas do Equador na vitória por 2 a 0 sobre o Catar na abertura da Copa do Mundo, mas o jogador do São&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/sao-paulo/artigo/_/id/11253659/na-copa-arboleda-questionado-volta-jogar-pelo-sao-paulo-2023-diz-qual-prioridade'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Na Copa com o Equador, Arboleda é questionado se volta a jogar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGnRxOVUUF1sw4GWsZZN1u_vFEkCKsOei_fA_3k8b6zlzX3sAmhu5c8jBL3LnBPmeOe-OT_m8iaw" alt="Na Copa com o Equador, Arboleda é questionado se volta a jogar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arboleda tem contrato com o São Paulo até dezembro de 2024 e falou sobre seu futuro no clube.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/saopaulo/Sem-ele...-Torcida-do-Sao-Paulo-lamenta-ausencia-de-Arboleda-em-estreia-do-Equador-na-Copa-do-Mundo-20221120-0090.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Sem ele...&quot;; Torcida do São Paulo &#39;lamenta&#39; ausência de Arboleda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTukKc1JIPC10p0Zjf6edeHMPRIf54dtoJ_hgY1JzDeyaXAgIgv5G-J2D98qi2i0VCKW1Zu3ABD" alt="&quot;Sem ele...&quot;; Torcida do São Paulo &#39;lamenta&#39; ausência de Arboleda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Sem ele...&quot;; Torcida do São Paulo &#39;lamenta&#39; ausência de Arboleda em estreia do Equador na Copa do Mundo &middot; Zagueiro do Tricolor ficou no banco em vitória sobre o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arqtricolor.com/ultimas/representante-do-spfc-na-copa-arboleda-pode-estar-em-campo-contra-o-catar-saiba-como-assistir/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Representante do SPFC na Copa, Arboleda pode estar em campo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRc6Zna8Dy4y26IwRWdLSN61EH9af5xtpVIDfHmIvqdtr2d_HYqZbaXjcpqrqI6VAiywkk8pawT" alt="Representante do SPFC na Copa, Arboleda pode estar em campo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O único representante do atual elenco do São Paulo na Copa é o zagueiro Arboleda que poderá estar em campo neste domingo.</p></div>
            </div>
        </a>
        </Template></>;
}