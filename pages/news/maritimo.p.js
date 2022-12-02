import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maritimo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maritimo"/>
        <meta name="description" content="Trending News about Maritimo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maritimo</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/noticias/images/3b/3b7181aecf54e7136af1e984461196b7?w=860&q=90&rect=0,7,1233,676&auto=format" alt="Maritimo"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/futebol-nacional/rio-ave-vence-maritimo-na-taca-da-liga-com-golo-ao-cair-do-pano_d1450920'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rio Ave vence Marítimo na Taça da Liga, com golo ao &quot;cair do pano&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQg8BDWn9vKAj6IgZM0yn_oW3z50EKrsmpxRIjC2CYpSeEs0B0IaMdFWkAsrI67cYXuY_uC1vqy" alt="Rio Ave vence Marítimo na Taça da Liga, com golo ao &quot;cair do pano&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Rio Ave venceu esta tarde o Marítimo com um golo ao minuto 90 do encontro da primeira jornada da fase de grupos da Taça da Liga de futebol,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-01/taca-da-liga-rio-ave-marca-aos-90-minutos-e-vence-maritimo-veja-o-resumo/966850'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rio Ave marca aos 90 minutos e vence Marítimo (veja o resumo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSY3Pa4_4F45EmYU2Kzxd-QI_vxZjWGK8KQRJyFZ4p2gA5ebpjiN0MDqyuVD0C1ri9zmqigCq9g" alt="Rio Ave marca aos 90 minutos e vence Marítimo (veja o resumo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na primeira jornada do Grupo B da Taça da Liga, o Rio Ave foi à Madeira vencer o Marítimo por 1-0 com o golo dos vila-condenses a ser marcado pelo central&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/rio-ave-vence-maritimo-na-taca-da-liga-com-golo-ao-cair-do-pano-15412829.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rio Ave vence Marítimo na Taça da Liga com golo ao cair do pano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJMeNmgT-v6A4gzECKa_nU81N8yBoRFflcdYdC5fLIgIkK6fXVf1YTXwf2opbw43izWmTfmDz5" alt="Rio Ave vence Marítimo na Taça da Liga com golo ao cair do pano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida do Grupo B, que integra ainda as equipas do Sporting e Farense, parecia que iria terminar com um nulo no marcador, até, que, em cima dos 90&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/rio-ave-bate-maritimo-e-junta-se-ao-sporting-na-lideranca-do-grupo-b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rio Ave bate Marítimo e junta-se ao Sporting na liderança do Grupo B</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSryzyl3Lqe67pwFYaEdDkOQpXi6CORbdxOWiuHYlWhVLPJsvlxcfm45rpfl6lgKGP0xFBkEOeJ" alt="Rio Ave bate Marítimo e junta-se ao Sporting na liderança do Grupo B" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Sporting está no primeiro devido ao número de golos marcados (6) no jogo de ontem diante do Farense....</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/12/01/rio-ave-vence-maritimo-e-cola-se-ao-sporting-na-taca-da-liga/310277/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rio Ave vence Marítimo e cola-se ao Sporting na Taça da Liga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlu6BUV-7Z0Tsp0jPaNIEEYTErQI0RZ5Sy1PvzWdFVN1jLJU35xwIShfL00ORrGUAUod7GDbfV" alt="Rio Ave vence Marítimo e cola-se ao Sporting na Taça da Liga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Madeirenses jogaram em inferioridade numérica desde os 22 minutos, mas só ao cair do pano o é que o jogo ficou decidido.</p></div>
            </div>
        </a><a href='https://www.jm-madeira.pt/desporto/ver/191935/Taca_da_Liga_Maritimo_reduzido_a_dez_empata_ao_intervalo_na_rececao_ao_Rio_Ave'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Marítimo reduzido a dez empata ao intervalo na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPdZcF5_-UJOFl0k7XzvPf4qdBWu3gtGRpS82CLbWJNQi1BOvVEYcpuZxoSaWerVxRwB_wA9L0" alt="Taça da Liga: Marítimo reduzido a dez empata ao intervalo na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marítimo e Rio Ave foram para o intervalo empatados sem golos em jogo da 1.ª jornada do Grupo B da Taça da Liga, que está a ser disputado nos Barreiros.</p></div>
            </div>
        </a><a href='https://funchalnoticias.net/2022/12/01/taca-da-liga-maritimo-perde-em-casa-com-o-rio-ave-0-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Marítimo perde em casa com o Rio Ave (0-1)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaHS-3joQQGNBJEFQ_fEU3t4WybdYRCFUNUc_1Dvd8ch9vA7hc212BjxYhADBtKr5TRN14y1Jq" alt="Taça da Liga: Marítimo perde em casa com o Rio Ave (0-1)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Marítimo recebeu e perdeu hoje com o Rio Ave por 0-1 para a Taça da Liga. Com esta derrota, o Marítimo cola-se ao Farense (com zero pontos),&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}