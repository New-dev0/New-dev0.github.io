import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paysandu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paysandu"/>
        <meta name="description" content="Trending News about Paysandu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paysandu</h1>
            <Image width={800} height={500} src="https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/preview-share-min.png" alt="Paysandu"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/pa/futebol/copa-verde/jogo/15-11-2022/paysandu-vila-nova.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo Paysandu 0 x 0 Vila Nova melhores momentos - Copa Verde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxmLStMvbTJBAVCwGZT5HV1U6ZtBlpRgDENkmzxxP8zKVOSVYNTzx6iRuMcRvRGEk4jXxqwGXf" alt="Jogo Paysandu 0 x 0 Vila Nova melhores momentos - Copa Verde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba tudo sobre o jogo Paysandu 0 x 0 Vila Nova (Copa Verde, Final): placar, escalação, fotos, gols e lances da partida.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/artigo/_/id/11233290/com-um-a-menos-paysandu-segura-empate-com-o-vila-nova-na-partida-de-ida-da-final-da-copa-verde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com um a menos, Paysandu segura empate com o Vila Nova na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnXYEU6Fy5WA572BntUosIEzD1jgjQH1SU9S5PdcJm7dpx0FyTTcQsPlhkelith-N8Yy_QlhgO" alt="Com um a menos, Paysandu segura empate com o Vila Nova na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelo jogo de ida da final da Copa Verde, o Paysandu recebeu o Vila Nova na noite desta terça-feira, no Estádio da Curuzu, em Belém (PA), e empatou sem gols.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15121224-transmissao-do-jogo-do-paysandu-hoje-15-11-veja-em-tempo-real-a-final-da-copa-verde-entre-paysandu-x-vila-nova.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRANSMISSÃO DO JOGO DO PAYSANDU HOJE (15/11): Veja em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQir_-sdV9JYWiEET5bhFk5Kvtvllg6Np_yPV3ZWwiWo_MiRkJxKPn2nqjMicjx4iZLDHGBJitk" alt="TRANSMISSÃO DO JOGO DO PAYSANDU HOJE (15/11): Veja em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida desta terça entre Paysandu x Vila Nova é válida pela final da Copa Verde.</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/paysandu/vale-titulo-paysandu-recebe-o-vila-nova-no-jogo-de-ida-da-final-da-copa-verde-2022-1.612821'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vale título! Paysandu recebe o Vila Nova no jogo de ida da final da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4DIA3lBgpGHiHRCwBsrkXla-RhPxfMK2u8QuwpoWaSKQcM7zfhcVAAi1H4GkdOzK55qNJ1OWB" alt="Vale título! Paysandu recebe o Vila Nova no jogo de ida da final da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida começa às 18h30 desta terça-feira (15), no Estádio da Curuzu.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15121232-resultado-do-jogo-do-paysandu-e-vila-nova-saiba-quem-venceu-o-jogo-de-ida-da-final-da-copa-verde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RESULTADO DO JOGO DO PAYSANDU E VILA NOVA: Saiba quem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXJ8LbPz3TIBGOlRrAqBH1F74y54rajUxw5i77fr7FC91x_ZKi0lntB4tNVAcA_7ig9cDYUphk" alt="RESULTADO DO JOGO DO PAYSANDU E VILA NOVA: Saiba quem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O duelo entre Paysandu x Vila Nova é válida pela final da Copa Verde.</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/paysandu/paysandu-rescisao-de-contrato-de-atacante-e-protocolada-na-cbf-e-jogador-retornara-ao-atletico-mg-1.612937'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paysandu: Rescisão de contrato de atacante é protocolada na CBF ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNe9o9N2J00Po4eW8VUOCVt2sqTFCnni1nV_HeEczwqa4wD_VbWt8p9nE9F_eobdrfxQua0vcZ" alt="Paysandu: Rescisão de contrato de atacante é protocolada na CBF ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste período defendendo o Lobo, Alessandro Vinícius foi titular em apenas duas partidas. Seu último jogo pelo clube alviceleste foi na derrota de virada por 2&nbsp;...</p></div>
            </div>
        </a><a href='https://sagresonline.com.br/vila-nova-empata-com-o-paysandu-na-primeira-final-da-copa-verde/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vila Nova empata com o Paysandu na primeira final da Copa Verde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNglQkdi-cpOv9Vt29YEtS2Fj3pfNpV_P8XAIA9DMRCXmQtQ3NHH_3Sr6g1sO3R3iJmoYHuUhW" alt="Vila Nova empata com o Paysandu na primeira final da Copa Verde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na Curuzu, Paysandu e Vila Nova não saíram do zero nesta terça-feira (15) e empataram sem gols no primeiro jogo da final da Copa Verde.</p></div>
            </div>
        </a>
        </Template></>;
}