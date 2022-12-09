import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zé Trovão drogas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zé Trovão drogas"/>
        <meta name="description" content="Trending News about Zé Trovão drogas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zé Trovão drogas</h1>
            <Image width={800} height={500} src="https://cdn.oantagonista.com/uploads/2022/12/Ze-Relampago-1024x1024.jpeg" alt="Zé Trovão drogas"/>
            <h3>Recent News</h3>
            <a href='https://oantagonista.uol.com.br/fact-checking/real-ze-trovao-posa-para-foto-ao-lado-de-drogas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real: Zé Trovão posa para foto ao lado de drogas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiPVHNaDU2GGs6Kh344MHjkQwtHbMhs91ibZvVGI5qTygMYr6Qj3vQw3Q8FatD95hUQevI3kl7" alt="Real: Zé Trovão posa para foto ao lado de drogas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É real a foto que circula com o deputado eleito Zé Trovão (PL) em posse de drogas ilícitas. A imagem viralizou nas redes sociais nesta quinta-feira (8)...</p></div>
            </div>
        </a><a href='https://ndmais.com.br/politica/video-apos-viralizar-em-foto-com-drogas-deputado-eleito-ze-trovao-se-manifesta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: Após viralizar em foto com drogas, deputado eleito Zé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3Z24IO6bTR7FXWuLqT5ho3k0Z7t62Bj4H4bcSa3YLQp_4dkSGiqNJr81dOMXhmzs6Ed77awi9" alt="VÍDEO: Após viralizar em foto com drogas, deputado eleito Zé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O deputado eleito falou sobre a imagem que ganhou destaque na internet na mesma semana em que foi internado às pressas.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/politica/ultimas-noticias/2022/12/08/ze-trovao-fala-sobre-foto-com-cocaina-nas-redes-fase-que-tento-esquecer.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zé Trovão fala sobre foto com cocaína nas redes: &#39;Fase que tento ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTV17ZMNqBYj5Rrkylf1V4a9hrY-nQ36nJ1_HhA0OK196VwzCna86pFgqonjtNPfHmH_0bF_BGk" alt="Zé Trovão fala sobre foto com cocaína nas redes: &#39;Fase que tento ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O deputado federal eleito Marcos Antônio Pereira Gomes (PL-SC), conhecido também como Zé Trovão, aliado do presidente Jair Bolsonaro (PL), confirmou ser ele&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/virou-viral/apos-ser-internado-lider-bolsonarista-aparece-com-drogas-em-foto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após ser internado, líder bolsonarista aparece com drogas em foto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9z88UnhUAzwwsHby5nqEDDRMAB6_wgllKc5csghT1YaWlZ4mLp6Gjg_DohDmEVG35svvTL7tV" alt="Após ser internado, líder bolsonarista aparece com drogas em foto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Recém-eleito deputado federal por Santa Catarina confirmou veracidade da imagem.</p></div>
            </div>
        </a><a href='https://omunicipiojoinville.com/video-ze-trovao-diz-que-foto-com-drogas-que-viralizou-e-antiga-nao-orgulho/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO - Zé Trovão diz que foto com drogas que viralizou é antiga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIz2H8wvdwvycQNlLz194CilKZVKcoTkECjD_OHAwBD8dtEEZXp-piiN4lIuFl4ifgToKPUyFT" alt="VÍDEO - Zé Trovão diz que foto com drogas que viralizou é antiga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a imagem viralizar, postagens na internet começaram associar a internação do deputado ao uso de entorpecentes. Por conta disso, a reportagem do jornal O&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}