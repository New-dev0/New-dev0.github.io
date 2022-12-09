import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal  Lyon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal  Lyon"/>
        <meta name="description" content="Trending News about Arsenal  Lyon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal  Lyon</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=e1b9655f-0e00-4845-9c57-e8461fd5bb5c&w=800&h=420&watermark=true&t=20221208201600" alt="Arsenal  Lyon"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/multimedia/videos/um-panenka-que-correu-muito-mal-no-arsenal-lyon-veja-o-video-15451841.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um panenka que correu muito mal no Arsenal-Lyon: veja o vídeo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPM3AgO7hpUdtPj16B220LAkpF-AA06bc1aR-B1igMyl0LGOlE8nEb1GYO8JwwzwntMkscjOjm" alt="Um panenka que correu muito mal no Arsenal-Lyon: veja o vídeo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rayan Cherki, avançado de 19 anos do Lyon, tentou marcar um penálti à panenka, mas o resultado não foi feliz para o jogador. Os franceses defrontaram o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-08/arsenal-vence-lyon-com-golaco-de-fabio-vieira-video/967841'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vence Lyon com golaço de Fábio Vieira (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDZhJrg-NZ3L9DU_Z7F67hsHtEX7lfZM-iob9ObThEmAKHq7GQ5KlUc_VieZgbGrpTdzBTXI_1" alt="Arsenal vence Lyon com golaço de Fábio Vieira (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio português Fábio Vieira fez um autêntico golaço, esta tarde, em encontro particular do Arsenal frente ao Lyon, a decorrer no Dubai, que terminou com&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2129000/fabio-vieira-assiste-rubrica-golaco-e-arsenal-bate-lyon-num-amigavel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fábio Vieira assiste, rubrica golaço e Arsenal bate Lyon num amigável</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6rbTRrZC9J-kY_5P_bsXIXagvr3G5pefMtQ0I8EBSdXHY1AttM61zJ2rT8XrCWufTrAmLg-9A" alt="Fábio Vieira assiste, rubrica golaço e Arsenal bate Lyon num amigável" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cédric Soares e Anthony Lopes também foram titulares no amigável desta quinta-feira, realizado no Dubai.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/made-in/internacional/video-fabio-vieira-marca-golaco-em-jogo-de-preparacao-do-arsenal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: Fábio Vieira marca golaço em jogo de preparação do Arsenal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSBzi89BngHGPKgc5C9kxF1P7j4Ol7cFko2FRTyv8kHNjGSw0W-CLZFiaSz3fdFKjhMSVF7V0w" alt="VÍDEO: Fábio Vieira marca golaço em jogo de preparação do Arsenal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além do golo, o internacional sub-21 português fez uma assistência em apenas 45 minutos diante do Lyon.</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/paises/inglaterra/detalhe/este-deixou-saudades-fabio-vieira-continua-em-alta-no-lider-arsenal?ref=HP_Ultimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Este deixou saudades: Fábio Vieira continua em alta no líder Arsenal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRM2kpLnQBhvh6cawLyUOFTm8Gl0iXdcKn7ND0259ZXYdpE7Z8W08YXM5XDplUCPJs8Mxw9v95q" alt="Este deixou saudades: Fábio Vieira continua em alta no líder Arsenal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fábio vieira marcou um &#39;golão&#39; no encontro amigável entre Arsenal e Lyon e incendiou as redes sociais do clube londrino. Os adeptos do emblema gunner&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}