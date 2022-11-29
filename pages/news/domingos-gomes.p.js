import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Domingos Gomes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Domingos Gomes"/>
        <meta name="description" content="Trending News about Domingos Gomes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Domingos Gomes</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=57b0009b-a72c-45dd-b293-6036ec90d1cd&w=800&h=420&watermark=true&t=20221128164400" alt="Domingos Gomes"/>
            <h3>Recent News</h3>
            <a href='https://www.jn.pt/desporto/morreu-o-antigo-medico-do-f-c-porto-domingos-gomes-15395711.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F. C. Porto corrige: Domingos Gomes não morreu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQw2-x4kJPuCPZt1ijxGTIsS69kbxww1eFfsJhEwLMxT7rJ3CpLrngmUl7JER39ciXJelnU6UcH" alt="F. C. Porto corrige: Domingos Gomes não morreu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O F. C. Porto anunciou, esta segunda-feira, o falecimento de Domingos Gomes, de 82 anos. No entanto, a notícia do óbito do médico não é verdadeira e foi,&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/primeira-liga/artigos/faleceu-domingos-gomes-historico-medico-do-fc-porto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Site do FC Porto anunciou falecimento de Domingos Gomes, mas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEjJ3_JzIUbs23CiwIx6vJ490NlR-DuYFdiNUlbcctCOG4a4n9JLZyZyPXxZvcHyZnvb1WZ8b2" alt="Site do FC Porto anunciou falecimento de Domingos Gomes, mas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;A notícia foi escrita com base numa fonte hospitalar, que, felizmente, se revelou falsa&quot;, explica o FC Porto.</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/28/fc-porto-corrige-noticia-errada-que-anunciava-a-morte-do-medico-domingos-gomes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Porto corrige notícia errada que anunciava a morte do médico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTyeXwWEk-Aw8M-tHvSGpEfkML6l9ypzDHhkiy5LJJocNUt4PP7O8Ieetm4kBexUBmZbf8i80H7" alt="FC Porto corrige notícia errada que anunciava a morte do médico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O mundo do futebol respirou de alívio: a notícia da morte de Domingos Gomes está errada. A informação tinha sido avançada pelo próprio Futebol Clube de Porto,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-28/equivoco-dos-dragoes-domingos-gomes-afinal-nao-morreu/966413'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equívoco dos dragões: Domingos Gomes afinal não morreu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcvbTy3DgpARTI9pedK5xDlZcezWqgGZ3EMXvu8XM4Mfan_1mQRzHy51iwNW8CP80Dg1RkMzcK" alt="Equívoco dos dragões: Domingos Gomes afinal não morreu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pouco depois de ter noticiado no seu site oficial a morte de Domingos Gomes, médico que passou pelo clube, o FC Porto branco corrigiu a notícia,&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/porto/2022/11/28/site-do-fc-porto-noticiou-morte-de-domingos-gomes-e-falso/309836/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Site do FC Porto noticiou morte de Domingos Gomes. É falso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6xxBTPplzlM5c9J80PKMlv1ggcGcANykUoHDUOPnusvcbQRmR0Lo2g24MRZYOCWyYTpTmlAqd" alt="Site do FC Porto noticiou morte de Domingos Gomes. É falso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;O artigo publicado às 16h22 no site oficial do FC Porto - intitulado “Morreu Domingos Gomes” - não corresponde à verdade. A notícia foi escrita com base numa&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/fc-porto/domingos-gomes/esclarecimento-sobre-a-noticia-da-morte-de-domingos-gomes-antigo-medico-do-fc-porto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esclarecimento sobre a notícia da morte de Domingos Gomes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6jirCqxaze47BNJDDBWtXQM34TENkYdWF-9cyJ1YiFq13IGSIQ8okHrp35Reaq5LH1vDX24MM" alt="Esclarecimento sobre a notícia da morte de Domingos Gomes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Maisfutebol noticiou, durante a tarde desta segunda-feira, a morte de Domingos Gomes, antigo médico do FC Porto, e uma figura marcante da história do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/morreu-domingos-gomes-historico-medico-do-fc-porto-15395739.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Site do FC Porto noticia erradamente a morte de Domingos Gomes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAb5QT7FEG0UL5XoWoid3ltXfwW7oYsVebU_VVBD5PfR5Sk7dGNXgZbUof2VmPgdRL8iRRsUAP" alt="Site do FC Porto noticia erradamente a morte de Domingos Gomes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dragões retiraram a notícia, pouco tempo depois de a terem publicado. DN/Lusa. 28 Novembro 2022 — 17:05.</p></div>
            </div>
        </a>
        </Template></>;
}