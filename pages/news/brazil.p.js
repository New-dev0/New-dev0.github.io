import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brazil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brazil"/>
        <meta name="description" content="Trending News about Brazil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brazil</h1>
            <Image width={800} height={500} src="https://news.microsoft.com/wp-content/uploads/prod/sites/42/2022/12/ignite-spotlight.png" alt="Brazil"/>
            <h3>Recent News</h3>
            <a href='https://news.microsoft.com/pt-br/microsoft-ignite-spotlight-on-brazil-traz-novidades-exclusivas-para-o-brasil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Microsoft Ignite Spotlight on Brazil traz novidades exclusivas para o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSde6NhbrF_cmmX8d2gTllpGp_tSa00GzzHp7YE_D1wD0qXBPWx9kXsjNExAN6PL3sGWo4BL5G7" alt="Microsoft Ignite Spotlight on Brazil traz novidades exclusivas para o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Companhia disponibilizou conteúdo sob demanda com os lançamentos que aconteceram em evento realizado ontem com destaques para discussões sobre aplicações de&nbsp;...</p></div>
            </div>
        </a><a href='https://saquarema.rj.gov.br/guarda-ambiental-e-instituto-vital-brazil-promovem-curso-na-faetec/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guarda Ambiental e Instituto Vital Brazil promovem curso na Faetec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxEQszzMAodZH-ntknbUfE1sz5dMZW0E_9-we5k2eI-6OCsjogT7mHwt4k9jkq8lcyB9iKttH5" alt="Guarda Ambiental e Instituto Vital Brazil promovem curso na Faetec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na última semana, a Guarda Ambiental de Saquarema e o Instituto Vital Brazil promoveram um curso de capacitação em manejo de animais peçonhentos para alunos&nbsp;...</p></div>
            </div>
        </a><a href='https://glamour.globo.com/entretenimento/celebridades/noticia/2022/12/carol-castro-usa-body-made-in-brazil-um-pouco-de-realidade-e-olheira-pra-ficar-de-olho-no-brasil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carol Castro usa body &quot;Made in Brazil&quot;: &quot;um pouco de realidade (e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpsx664NyWlqPd5UH9O1thLHI6V0Ri-TtCeXzxaDycFq_cPLNJ4ddMS929Dwz7MMn37cHR1XZF" alt="Carol Castro usa body &quot;Made in Brazil&quot;: &quot;um pouco de realidade (e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em clima de Copa do Mundo, atriz mostra look eleito para acompanhar à partida do Brasil: &quot;Depois dos avatares um pouco de realidade (e olheira) pra ficar de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}