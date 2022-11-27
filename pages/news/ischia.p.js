import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ischia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ischia"/>
        <meta name="description" content="Trending News about Ischia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ischia</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/399038231575fd164b51_socialshare.jpg" alt="Ischia"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/noticia/mundo/2022/11/26/pelo-menos-oito-mortos-na-ilha-italiana-de-ischia-apos-deslizamento-de-terras/309619/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelo menos oito mortos na ilha italiana de Ischia após deslizamento ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7RntF5kYVvQ_KjmssGrvI5ONCD_cltbWVjjcp6FL7oujV1-I5U6TTrlXEMnEWAe3JBnWppVod" alt="Pelo menos oito mortos na ilha italiana de Ischia após deslizamento ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Há, pelo menos, uma criança entre vários desaparecidos. Ischia é uma ilha vulcânica no Mar Tirreno, a cerca de 30 quilómetros de Nápoles.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/varios-desaparecidos-em-deslizamento-de-terra-na-ilha-italiana-de-ischia_v1449798'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vários desaparecidos em deslizamento de terra na ilha italiana de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBdeAXD_a59KLtKwxTMRqflIPk19IxMnamY7yKR0u42U7RrgJ1qJy9IEQ3lgKjFk3BMJOcKjrO" alt="Vários desaparecidos em deslizamento de terra na ilha italiana de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelo menos 12 pessoas estão dadas como desaparecidas após um deslizamento de terra em Casamicciola, na ilha italiana de Ischia.</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/mundo/2022-11-26-Pelo-menos-12-desaparecidos-em-deslizamentos-de-terra-na-ilha-italiana-de-Ischia-24225b5f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelo menos 12 desaparecidos em deslizamentos de terra na ilha ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkVIiTNMcybepDYnNa02zXYaZrYHYgL_tzxwSCk1-ph8gif3V8FQLwYsJwu5wCJEuRauWKu_04" alt="Pelo menos 12 desaparecidos em deslizamentos de terra na ilha ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O corpo da mulher foi recuperado entre a lama e as equipas de resgate continuam à procura de uma dezena de desaparecidos, na sequência dos deslizamentos de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnoticias.pt/2022/11/26/337942-deslizamento-de-terra-na-ilha-italiana-ischia-provoca-8-mortos-e-ha-desaparecidos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deslizamento de terra na ilha italiana Ischia provoca 8 mortos e há ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7NMc8R3NSnZuLLlxKsmrAzl2nVB1ZSg6f6rGAsazWeMY0XJf1GerVrXcZyXjlRhQZDfbdNZAv" alt="Deslizamento de terra na ilha italiana Ischia provoca 8 mortos e há ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ministro das Infraestruturas e vice-presidente, Matteo Salvini, também confirmou o balanço provisório de oito mortos, enquanto o corpo de &#39;carabineros&#39; (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/mundo/2121649/ministro-do-interior-contradiz-salvini-e-autarca-e-nega-mortes-em-ischia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministro do Interior contradiz Salvini e autarca e nega mortes em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiF-dpUPIMfd6vibsk4oZW68psb9Xj-QN-CRjcVa8w8DYjeEt_NoKiD2zg_t0POG20mkbVhjxA" alt="Ministro do Interior contradiz Salvini e autarca e nega mortes em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os deslizamentos de terra ocorridos hoje na ilha de Ischia, no sul da Itália, na sequência de chuvas fortes, deixaram 12 pessoas desaparecidas,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wort.lu/pt/mundo/it-lia-deslizamento-de-terra-faz-oito-mortos-na-ilha-de-ischia-6382012bde135b92364ae014'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Itália. Deslizamento de terra faz 12 desaparecidos na ilha de Ischia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1-3uFXYMldafDFJ3wzZYP3iQyzZLXM08sAlk0Iwq0EwA32yTxlwbgyB5xSI5NtCcPMpYmEBGz" alt="Itália. Deslizamento de terra faz 12 desaparecidos na ilha de Ischia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inicialmente, vários jornais italianos avançaram que havia oito mortos, mas o ministro do Interior diz que não há mortes confirmadas.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/noticias/mundo/deslizamento-de-terra-atinge-ilha-de-ischia-na-italia-1-mulher-morre-e-10-pessoas-estao-desaparecidas,fa043efe173dbf4b77c5c327452eb380c9ro6qqs.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deslizamento de terra atinge ilha de Ischia na Itália; 1 mulher morre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Deslizamento de terra atinge ilha de Ischia na Itália; 1 mulher morre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma mulher foi encontrada morta e cerca de dez pessoas ainda estão desaparecidas na ilha de ...</p></div>
            </div>
        </a>
        </Template></>;
}