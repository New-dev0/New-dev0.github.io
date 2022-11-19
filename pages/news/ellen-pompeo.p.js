import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ellen Pompeo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ellen Pompeo"/>
        <meta name="description" content="Trending News about Ellen Pompeo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ellen Pompeo</h1>
            <Image width={800} height={500} src="https://extra.globo.com/incoming/25610821-42e-af5/w533h800/316048061_173707282012049_2045508677458024835_n.jpg" alt="Ellen Pompeo"/>
            <h3>Recent News</h3>
            <a href='https://extra.globo.com/tv-e-lazer/apos-19-temporadas-ellen-pompeo-meredith-grey-se-despede-de-greys-anatomys-show-tem-que-continuar-25610819.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após 19 temporadas, Ellen Pompeo, a Meredith Grey, se despede ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSWeUYkAdzuN11G3aakkexI0P033RgQ3Pk1FC5fkGMdOzRHa2RKm6tovka3eMTc2NFGd-blk4f" alt="Após 19 temporadas, Ellen Pompeo, a Meredith Grey, se despede ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de 19 temporadas de &quot;Grey&#39;s Anatomy&#39;, Ellen Pompeo, intérprete da protagonista Meredith Grey, está se despedindo da série. A atriz disse estar...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/entretenimento/televisao/fim-de-uma-era-ellen-pompeo-se-despede-de-greys-anatomy-e-agradece-fas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fim de uma era! Ellen Pompeo se despede de Grey&#39;s Anatomy e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3XcVRgWBNXALltET-tohJ2HkmKissD23M-pXsf7ELFS7t3Vwv0ls3Metkgm3T-9dyyHyzny3Z" alt="Fim de uma era! Ellen Pompeo se despede de Grey&#39;s Anatomy e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ellen Pompeo deixou claro que vai &quot;voltar para visitar&quot; a série de Shonda Rimes. Ela protagonizou a saga por 19 temporadas.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/entretenimento/ellen-pompeo-se-despede-de-greys-anatomy-apos-19-temporadas-show-deve-continuar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ellen Pompeo se despede de Grey&#39;s Anatomy após 19 temporadas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3E3XIsCcIoF-v1wCLZczUSVsax6bhxYC5zOcuCvS4OFgK0c4unS0RZ_zAJdhVW1KjmEF6hLf2" alt="Ellen Pompeo se despede de Grey&#39;s Anatomy após 19 temporadas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Sou eternamente grata pelo amor e apoio que todos vocês demonstraram a mim, a Meredith GREY e ao espetáculo durante 19 temporadas!”, disse Ellen. “Apesar de&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/apos-19-temporadas-ellen-pompeo-se-despede-de-greys-anatomy-120136086.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após 19 temporadas, Ellen Pompeo se despede de &quot;Grey&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJOVoMEm9hFAC7gHTIIAXRhQETGM9rWSiFhwVz1e8aT91duzXvP8oHbAhwSS4lQBI5KYYh8y56" alt="Após 19 temporadas, Ellen Pompeo se despede de &quot;Grey&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Eu sou para sempre humildemente grata pelo amor e apoio que vocês todos mostraram a mim, a Meredith Grey e o programa por 19 temporadas!&quot;, escreveu a atriz em&nbsp;...</p></div>
            </div>
        </a><a href='https://glamurama.uol.com.br/cultura-e-entretenimento/apos-19-temporadas-ellen-pompeo-se-despede-de-greys-anatomy-imensa-gratidao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após 19 temporadas, Ellen Pompeo se despede de Grey&#39;s Anatomy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGyFsJ_y9X_Q5Yhv6VyVSILPVigUwFPIq1noP2Igi6YP1ScUBGhyGbHbvdE5bwvX-VCOWWyzAZ" alt="Após 19 temporadas, Ellen Pompeo se despede de Grey&#39;s Anatomy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma das personagens mais emblemáticas de Grey&#39;s Anatomy, Ellen Pompeu, deu adeus a série nesta quinta-feira (17).</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/minha-serie/254598-grey-s-anatomy-ellen-pompeo-acalma-fas-diz-voltara-serie-entenda.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grey&#39;s Anatomy: Ellen Pompeo acalma fãs e diz que voltará à série ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_R4FBKcwe2pzXjSxalp2oDwzY6rM_MUeESL8f50_XBxgPEMNLc8y_p0kp87pNaAyGXeK4dMGe" alt="Grey&#39;s Anatomy: Ellen Pompeo acalma fãs e diz que voltará à série ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como já noticiado, Ellen Pompeo não será uma personagem regular na 19ª temporada de Grey&#39;s Anatomy; saiba mais!</p></div>
            </div>
        </a><a href='https://www.correiodopovo.com.br/arteagenda/grey-s-anatomy-ellen-pompeo-se-despede-da-s%C3%A9rie-1.924680'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Grey&#39;s Anatomy&quot;: Ellen Pompeo se despede da série</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJDGV_pKbK0GZmc00sHaPd65yIRwkXs3f-FUtbBmfjSQ2Rt5mnCL1Ppe6iAORkgTFcmB7-1zg7" alt="&quot;Grey&#39;s Anatomy&quot;: Ellen Pompeo se despede da série" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz, que interpreta a médica Meredith, fez anuncio de sua saída por meio de conta no Instagram.</p></div>
            </div>
        </a>
        </Template></>;
}