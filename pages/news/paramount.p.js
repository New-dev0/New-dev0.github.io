import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paramount</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paramount"/>
        <meta name="description" content="Trending News about Paramount" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paramount</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/16/1174634599-walter-hamada.jpg" alt="Paramount"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/diversao/entre-telas/filmes/ex-presidente-da-dc-films-fara-filmes-de-terror-para-a-paramount,494978714521d4c21fb7d33e5e498732zn27lum7.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-presidente da DC Films fará filmes de terror para a Paramount</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUrWWisyz_oJPW5VECGAbqUBZOS4Q7c7aycHUybz1Hie9fM44XqpUrSyBamqxjybbxF2JpWde3" alt="Ex-presidente da DC Films fará filmes de terror para a Paramount" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Walter Hamada, ex-presidente da DC Films, fechou um contrato com o estúdio Paramount. Com ...</p></div>
            </div>
        </a><a href='https://ovicio.com.br/ex-chefe-da-dc-films-assina-com-a-paramount-pictures/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-chefe da DC Films assina com a Paramount Pictures</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGiXxIVXleRafkQBzjaO9d8V0-Vdro1Y40bcpeGQn5nZ8gbb5S5lkxHALaKwuFWgYHXlwIIZAu" alt="Ex-chefe da DC Films assina com a Paramount Pictures" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após saída conturbada da DC Films, divisão da Warner Bros. Pictures da qual liderou por quatro anos, Walter Hamada encontrou um novo estúdio.</p></div>
            </div>
        </a><a href='https://www.chippu.com.br/noticias/walter-hamada--ex-presidente-da-dc-films--e-o-novo-chefe-de-filmes-de-terror-da-paramount-pictures'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Walter Hamada, ex-presidente da DC Films, é o novo chefe de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNVVzPqqrszKQXy48i9RivjNp96XcGIzko3mEnmzdpB81CW2_BQINbAFrP5tSe3eX2RBMcqMxB" alt="Walter Hamada, ex-presidente da DC Films, é o novo chefe de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-presidente da DC Films, Walter Hamada, está de casa nova. O executivo, que deixou a Warner Bros. em outubro, assinou um contrato de múltiplos anos com&nbsp;...</p></div>
            </div>
        </a><a href='https://cinepop.com.br/apos-sair-da-dc-walter-hamada-ira-supervisionar-projetos-de-terror-da-paramount-pictures-374279/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após sair da DC, Walter Hamada irá supervisionar projetos de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT26SOe22JKBl_oPKPVHP_OgIl3TvIcFdkmAlFtMWebCCZ_qEXfNojdvcSXwKg-EBQ3dBFJWiYr" alt="Após sair da DC, Walter Hamada irá supervisionar projetos de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com o The Hollywood Reporter, Walter Hamada foi contratado para supervisionar as produções de terror da Paramount Pictures.</p></div>
            </div>
        </a><a href='https://teg6.com/77065/noticias/walter-hamada-esta-se-juntando-a-paramount-pictures-apos-sua-saida-da-warner-bros-discovery/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Walter Hamada está se juntando à Paramount Pictures após sua ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJo_w28Bk3Cg2c7IlsP2EqFHl5p7nRwVInjtn7bF8twDXhfwrUlXdbJqWflaqbGFGrKoEcL1PT" alt="Walter Hamada está se juntando à Paramount Pictures após sua ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em uma declaração pública sobre o acordo, o presidente e CEO da Paramount Pictures, Brian Robbins, chamou Hamada de “o parceiro ideal e visionário” para assumir&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}