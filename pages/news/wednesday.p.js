import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wednesday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wednesday"/>
        <meta name="description" content="Trending News about Wednesday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wednesday</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1155%3A650%3Anowe%3A72%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F22215931%2Fwednesday.jpg" alt="Wednesday"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/23/wednesday-ao-reinventar-a-familia-addams-a-netflix-e-tim-burton-recuperaram-o-gozo-do-entretenimento/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Wednesday&quot;: ao reinventar “A Família Addams”, a Netflix e Tim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVFEZf1eQsPZRNV8TpftrYY5n3U2wWaEbjIV6h5mEwshO9CrrOdemDwgFsrGEbQVENtNJySXra" alt="&quot;Wednesday&quot;: ao reinventar “A Família Addams”, a Netflix e Tim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O realizador americano faz o que em princípio não devia: recupera um título antigo para lhe dar nova imagem. Mas a verdade é que resulta e muito.</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/televisao/wednesday-serie-do-universo-de-a-familia-addams-ja-chegou-a-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Wednesday”: série do universo de “A Família Addams” já chegou à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROdZRTA6qRpNxqXLE1zZWWD53NaahEwS6hN5uTFdCVQpmjo9XxM_b3mtvGR3Exfo1tWFr6vTf7" alt="“Wednesday”: série do universo de “A Família Addams” já chegou à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alguns episódios foram realizados por Tim Burton. A protagonista é Jenna Ortega, que começou a carreira no Disney Channel. 23/11&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurogamer.pt/wednesday-de-tim-burton-chega-a-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wednesday de Tim Burton chega à Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLfPf1Or2ihmS47CDvZQkws0YS0VPkFDkmjsqbUtwdDnDjTMyIiOxJaDsI75o2HrDKmfhuWuva" alt="Wednesday de Tim Burton chega à Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Criada por Alfred Gough, Miles Millar e Tim Burton, Wednesday conta ainda com Catherine Zeta-Jones, Luis Guzmán, Isaac Ordonez e Gwendoline Christie como parte&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeout.pt/lisboa/pt/noticias/wednesday-tim-burton-entra-finalmente-para-a-familia-addams-pela-mao-da-morbida-adolescente-112322'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Wednesday&#39;. Tim Burton entra finalmente para a Família Addams ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvSxebfyz9xs4TUP2vhNuskjDJ7Hzwt53zQzjmgjdTm6LjQji9gUeURk_yakplmcEN0b9xA2Qf" alt="&#39;Wednesday&#39;. Tim Burton entra finalmente para a Família Addams ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Realizador faz nesta a sua grande estreia em televisão: uma série da Netflix sobre a filha mais velha da Família Addams.</p></div>
            </div>
        </a><a href='https://noticiasetecnologia.com/wednesday-serie-tim-burton-netflix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wednesday é a nova série de Tim Burton que estreia hoje na Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSw6y_CMGRFgZcIm0jkWT03-Wok3oWgX20APlr9fdMROPT2lwmdAXWS_SE5jjna43KL6ytbMue_" alt="Wednesday é a nova série de Tim Burton que estreia hoje na Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com produção de Tim Burton e direção de Alfred Gough e Miles Millar, Wednesday é a nova série que teve hoje a sua estreia na plataforma de.</p></div>
            </div>
        </a>
        </Template></>;
}