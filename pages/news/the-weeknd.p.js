import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Weeknd</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Weeknd"/>
        <meta name="description" content="Trending News about The Weeknd" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Weeknd</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/ADhadzeoZFfj8rcLO88Vcmi-htE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/y/Pg3Bt4TA2t4ZrKA63Yhg/063-1231032461.jpg" alt="The Weeknd"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/pop-arte/musica/noticia/2022/12/08/the-weeknd-anuncia-show-extra-em-sp.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd anuncia show extra em SP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdlwOXflVNTNkweZ9nNg2wdFQ1hij0VR2yXAbJjY1y33iq4RNHZ84Q8viikvSU9xm5k9bg2uj9" alt="The Weeknd anuncia show extra em SP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor de &#39;Blinding Lights&#39; já tinha confirmado duas apresentações no Brasil. Nova data é 11 de outubro, após ingressos para São Paulo esgotarem em horas.</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/emais/gente/the-weeknd-ingressos-para-show-em-sp-esgotam-no-site-e-fas-reagem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd: Ingressos para show em SP esgotam no site e fãs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdfHe2rbglbs_IoGp7BsDm6QeMWQTYKwKS9lp7YGAoycVXG-nUH_NfwvAcTOUhdWoocmzkCnpo" alt="The Weeknd: Ingressos para show em SP esgotam no site e fãs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo assessoria, restam poucos ingressos físicos somente na bilheteria oficial; no Rio, ainda é possível comprar online para alguns setores.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/entretenimento/apos-ingressos-esgotarem-turne-de-the-weeknd-anuncia-show-extra-em-sao-paulo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após ingressos esgotarem, turnê de The Weeknd anuncia show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMNBuLTeTwpAT71FJpCC9ZAspIBfWbNgLp8SZYmE-klad86DFFng4kVRoVRK1-OicusulhAhZI" alt="Após ingressos esgotarem, turnê de The Weeknd anuncia show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após esgotar os ingressos para o primeiro show em São Paulo, a turnê “After Hours” do canadense The Weeknd anunciou mais uma data para a capital paulista.</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/diversao-e-arte/2022/12/5057699-the-weeknd-anuncia-show-extra-em-sao-paulo-apos-ingressos-esgotados.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Weeknd anuncia show extra em São Paulo após ingressos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCUf-NudLKZJjNEg9E-QneSvEtH5oZ2CvwF0SwmX67OOiaRMHGnF75LUu2upPI7OOG1RmfpPBr" alt="The Weeknd anuncia show extra em São Paulo após ingressos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor canadense faz passagem pelo Brasil em outubro de 2023 e ingressos já estão à venda. Uma segunda data foi anunciada para um show extra.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/12/15137670-the-weeknd-comeca-vendas-na-eventim-veja-precos-de-ingressos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>THE WEEKND NO BRASIL: Começa vendas na EVENTIM. Veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_TJJl9CFTz3QV3nieEh32rN3V4HgiYJJ0Sow92MEdOVMQRmB6xN3vJ-2Z3fP6vxgDEVDAbFGE" alt="THE WEEKND NO BRASIL: Começa vendas na EVENTIM. Veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O show do Rio será no Estádio Nilton Santos Engenhão. Já em São Paulo, ocorre no Allianz Parque. The Weeknd Brasil: Começa vendas na EVENTIM. Veja preços de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/12/08/the-weeknd-extra.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após esgotar ingressos, The Weeknd abre nova data de show em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWwsEAhFxGRV6K4bNMiC_SRD70ohrHNOK_aY_8l6TlEWXBKjRjLbjzrCosvS6kCfkJRhI29mV_" alt="Após esgotar ingressos, The Weeknd abre nova data de show em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com os ingressos para sua apresentação em São Paulo esgotados, o cantor The Weeknd anunciou hoje um novo show na capital paulista: ele vai se apresentar no&nbsp;...</p></div>
            </div>
        </a><a href='https://www.papelpop.com/2022/12/o-pai-ta-on-the-weeknd-esgota-show-em-sao-paulo-e-anuncia-data-extra/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O PAI TÁ ON! The Weeknd esgota show em São Paulo e anuncia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4LWrbAe0n1HJzYkrbSHdDTtI3LJibuBVXT_1w2ffmVViDl86XA_Cvj0VvVLf6kpvkAs4GGLhY" alt="O PAI TÁ ON! The Weeknd esgota show em São Paulo e anuncia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AMANHECEU! Horas após esgotar ingressos para a apresentação que fará em São Paulo, no dia 10 de outubro de 2023, o cantor The Weeknd e a promotora Live&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}