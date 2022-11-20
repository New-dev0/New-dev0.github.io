import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grazi Massafera</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grazi Massafera"/>
        <meta name="description" content="Trending News about Grazi Massafera" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grazi Massafera</h1>
            <Image width={800} height={500} src="https://noticiasdatv.uol.com.br/media/uploads/artigos_2021/reynaldo-gianecchini-grazi-massafera-filme-familia-feliz-1911.jpg" alt="Grazi Massafera"/>
            <h3>Recent News</h3>
            <a href='https://noticiasdatv.uol.com.br/noticia/celebridades/grazi-massafera-gravida-com-reynaldo-gianecchini-da-no-na-cabeca-de-fas-92991'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grazi Massafera &#39;grávida&#39; com Reynaldo Gianecchini dá nó na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrGgMaUD31Ul2RB4dBq-Ie69ozAwUZJKdbvvfUQzZqizyOMirTWogtTGQIIVS-gd5fAORFpnFx" alt="Grazi Massafera &#39;grávida&#39; com Reynaldo Gianecchini dá nó na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma foto de Grazi Massafera com barrigão de grávida deixou os fãs confusos. Reynaldo Gianecchini compartilhou a imagem ao lado da atriz nos bastidores de&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/grazi-massafera-gr%C3%A1vida-reynaldo-gianecchini-125400827.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grazi Massafera grávida de Reynaldo Gianecchini? Atriz &#39;quebra a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPhgPaYMsvAMHPlNVdW0C3j9JQ_Y_LdLBcAU_8VhrJrWMt5L8S71uVNLNYxUGYQUctItXsEYYC" alt="Grazi Massafera grávida de Reynaldo Gianecchini? Atriz &#39;quebra a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reynaldo Gianecchini publicou uma foto em que Grazi Massafera aparece com um barrigão de gravidez. Mas tudo não passa...</p></div>
            </div>
        </a><a href='https://enfoco.com.br/entretenimento/grazi-massafera-aparece-gravidissima-ao-lado-de-gianecchini-87345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grazi Massafera aparece gravidíssima ao lado de Gianecchini ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTprnvX4smQKcDmBHnOKTBcXdYjcOW6pbznPv08uWpyDFVl3L9tEhLfLZ865ZVB3P8zv8ri6EAY" alt="Grazi Massafera aparece gravidíssima ao lado de Gianecchini ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz Grazi Massafera foi clicada nos bastidores do filme &quot;Uma Família Feliz&quot; com uma barriga falsa de gravidez.</p></div>
            </div>
        </a><a href='https://www.bnews.com.br/noticias/entretenimento/grazi-massafera-aparece-gravida-de-ator-e-confunde-cabeca-dos-fas-veja-foto.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grazi Massafera aparece grávida de ator e confunde a cabeça dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT8DuzVPiLZ48vuv28MUdHMD0Px3Jr5kucBHxfJwUDmWX32QIEu_d0E2AnIKeANC9jB-d9xFnZt" alt="Grazi Massafera aparece grávida de ator e confunde a cabeça dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grazi Massafera&nbsp;...</p></div>
            </div>
        </a><a href='https://baudainternet.com/2022/11/19/grazi-massafera-aparece-gravida-e-internautas-ficam-sem-entender/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grazi Massafera aparece &#39;grávida&#39; e internautas ficam sem entender</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQE4F5G1QOCtVhogxLme2Dn_CtQTufgxWXuknRhYzSaxSKT11wdo5sAj1jCdc_4DpBZ4YNTAcUM" alt="Grazi Massafera aparece &#39;grávida&#39; e internautas ficam sem entender" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Internautas ficaram chocados ao ver uma foto de Grazi Massafera com um barrigão gigante. Ela apareceu ao lado de Reynaldo Gianechini, a foto foi postada no&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}