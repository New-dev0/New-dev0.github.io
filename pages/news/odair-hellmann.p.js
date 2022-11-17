import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Odair Hellmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Odair Hellmann"/>
        <meta name="description" content="Trending News about Odair Hellmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Odair Hellmann</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2019/09/11/5d79b232e37ff.jpeg" alt="Odair Hellmann"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/santos/bastidores-santos-odair-hellmann-virou-plano-a-apos-chegada-de-falcao.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bastidores do Santos: Odair Hellmann virou &#39;plano A&#39; após chegada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPkUCd-p1R8lUcA5r4cxcCVY7qYbLzFixVm6xf8yz6_J1msQIQqlbs9glh5To7T4G94vbsn3jg" alt="Bastidores do Santos: Odair Hellmann virou &#39;plano A&#39; após chegada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Peixe teve outros nomes em pauta, mas conexões entre novo técnico e o homem forte do futebol ajudou no desfecho do negócio.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/16/santos-anuncia-o-tecnico-odair-hellmann-ate-o-fim-de-2023.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santos anuncia o técnico Odair Hellmann até o fim de 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSA1JtTpXJR0IhQT4asdakc2uAKzYqQC5fHCy0YR8Nw-fVaWkDIH9iZ3Vs7tT9QP7JGd3asEzf5" alt="Santos anuncia o técnico Odair Hellmann até o fim de 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele foi anunciado na tarde desta quarta-feira (16) pelo presidente do Santos FC, Andres Rueda, e pelo coordenador esportivo do Clube, Paulo Roberto Falcão. Ele&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/sp/santos-e-regiao/futebol/times/santos/noticia/2022/11/16/noticias-santos-contratacao-treinador-odair-hellmann.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santos anuncia a contratação do técnico Odair Hellmann</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBslye_Klxf_UIYGRrBIYcJx-ob73gp6xM3Q4qAZ1NZsSRhtCT62bzDnmXDFzMbrj2_KkxXHav" alt="Santos anuncia a contratação do técnico Odair Hellmann" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Contrato do novo treinador do Peixe é válido até o fim de 2023.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/futebol-nacional/2022/11/16/noticia_futebol_nacional,3979902/especulado-no-atletico-odair-hellmann-acerta-com-o-santos.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Especulado no Atlético, Odair Hellmann acerta com o Santos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvsBZWd8g7oK_u68Fs9aPTVI4J4rnHw5YFRrX8pDnoAlUdnNYN0_OM1GjOmBljFRLovGAvsiNO" alt="Especulado no Atlético, Odair Hellmann acerta com o Santos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Odair Hellmann é o novo técnico do Santos. O comandante é uma indicação de Paulo Roberto Falcão, novo coordenador esportivo do clube.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/inter/noticia/2022/11/ex-inter-odair-hellmann-e-anunciado-como-tecnico-do-santos-clak54gvy006b014u4yxwz2mr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Inter, Odair Hellmann é anunciado como técnico do Santos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfKYbE2O55hJ10MLPUSxpq3b29pltv3sGticBnQHto77mDbF17zcq9IQI5hmaEabmvinhEHTLH" alt="Ex-Inter, Odair Hellmann é anunciado como técnico do Santos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após uma temporada pelo Fluminense, em 2020, Odair Hellmann comandou o Al Wasl, dos Emirados Árabes, até a metade de 2022. No meio desta temporada, seu nome&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/galerias/odair-hellmann-anunciado-por-gigante-brasileiro-diego-alves-proximo-de-novo-clube-o-dia-do-mercado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odair Hellmann anunciado por gigante brasileiro, Diego Alves ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBQE7HfkSs9o722R6LFAVTU1GO5Vyp8oSd7LNM64fj1ZuTeIjWi6SNtWq7ahFHYcn_4h0GlWbB" alt="Odair Hellmann anunciado por gigante brasileiro, Diego Alves ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Odair Hellmann anunciado por gigante brasileiro, Diego Alves acertando com novo clube... tudo isso e muito mais no resumo do Dia do Mercado destas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}