import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ricardo araujo Pereira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ricardo araujo Pereira"/>
        <meta name="description" content="Trending News about Ricardo araujo Pereira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ricardo araujo Pereira</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/w600-1-e1669140889829.jpg" alt="Ricardo araujo Pereira"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/sic-mulher/ricardo-araujo-pereira-e-a-exposicao-publica-acho-sempre-que-a-minha-familia-nao-tem-de-suportar-isso/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricardo Araújo Pereira e a exposição pública: &quot;Acho sempre que a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhtI6igg9qzDLdY3nahxPYXO75xbpWM1Ea2ZqO8YYg1e6Vzw4Zo2sTd9sx93Md3yw41ERFeb0i" alt="Ricardo Araújo Pereira e a exposição pública: &quot;Acho sempre que a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O rosto de &#39;Isto É Gozar Com Quem Trabalha&#39; esteve a ser entrevistado por Andreia Rodrigues, no programa &#39;Júlia&#39;. O rosto de &#39;Isto É Gozar Com Quem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/fama/2118673/ricardo-araujo-pereira-lembra-perda-dificil-na-pandemia-devastado'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricardo Araújo Pereira lembra perda difícil na pandemia: &quot;Devastado&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTj7RCgqr3AVBy4lFHhn2IGYpai4sI1_v7m5rL8eBg1aVF5uXLr733AjzF6yB0JisTKdHU42g6D" alt="Ricardo Araújo Pereira lembra perda difícil na pandemia: &quot;Devastado&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricardo Araújo Pereira lembrou um dos momentos mais difíceis por que passou recentemente. Durante a pandemia, o comediante perdeu todos os seus cães,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/ricardo-araujo-pereira-revela-o-motivo-de-nao-falar-sobre-a-vida-privada-a-minha-familia-nao-tem-de-suportar-isso/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricardo Araújo Pereira revela o motivo de não falar sobre a vida ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQoPJ4xt4Hqc39SFWwa_VyYhLh3BGiwYQ-OfYO4Su5YudZE_s6UJxz0eUN4s6R7OTSnT2eolQWI" alt="Ricardo Araújo Pereira revela o motivo de não falar sobre a vida ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta terça-feira, dia 22 de novembro, Ricardo Araújo Pereira foi um dos convidados do programa “Júlia”, da SIC, e esteve à conversa com Andreia Rodrigues&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/ricardo-araujo-pereira-recorda-as-perdas-durante-a-pandemia-estava-completamente-devastado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricardo Araújo Pereira recorda as perdas durante a pandemia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQd6pkpHFmZZgE5emCj7Y9DuzdygRaa0I7PKOJrtuXmM2d7XtIAbVINKCWDKYmOXNNdXdjwj_Yp" alt="Ricardo Araújo Pereira recorda as perdas durante a pandemia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricardo Araújo Pereira esteve, esta terça-feira, dia 22 de novembro, à conversa com Andreia Rodrigues, no programa &#39;Júlia&#39;, na SIC, e falou sobre um dos.</p></div>
            </div>
        </a><a href='https://infocul.pt/ricardo-araujo-pereira-revela-porque-nao-expoe-a-familia-publicamente-ha-uma-especie-de-contrato-tacito-com-as-pessoas-que-me-seguem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ricardo Araújo Pereira revela porque não expõe a família ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLeLI797yx3WHvC95Dr92JfZY0tbO-YhZOohgmlamjtYUNKu70uopq8yhL--BxWO6PhuwELR8b" alt="Ricardo Araújo Pereira revela porque não expõe a família ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ricardo Araújo Pereira esteve à conversa com Andreia Rodrigues no programa Júlia. Ricardo revelou que a filha mais velha está a estudar na Inglaterra: “Ligo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}