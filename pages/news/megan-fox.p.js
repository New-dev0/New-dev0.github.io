import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Megan Fox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Megan Fox"/>
        <meta name="description" content="Trending News about Megan Fox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Megan Fox</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/11/2022/11/19/megan-fox-posa-com-look-transparente-e-reclama-de-compromissos-1668884559141_v2_615x300.png" alt="Megan Fox"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/splash/noticias/2022/11/19/megan-fox-posa-com-vestido-transparente-e-reclama-de-compromissos.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Megan Fox posa com vestido transparente e reclama de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0q1x1eFPWjkEfol7jp67BBX7PKMRqxgGR7QAAoJEBaRNSiYDiuwYro5mtWRnL4-iHekKq65Un" alt="Megan Fox posa com vestido transparente e reclama de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;2 eventos, 1 noite. Quando é hora de ficar na cama e comer pão de gengibre assistindo &#39;Harry Potter e o Enigma do Príncipe&#39;&quot;?, escreveu a atriz. Além das poses&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sbt.com.br/jornalismo/fofocalizando/noticia/230843-em-vestido-transparente-exibindo-o-bumbum-megan-fox-reclama-de-agenda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em vestido transparente exibindo o bumbum, Megan Fox reclama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvfCc7aHXdaUv9mGt4ysdRqWMhjLuR7CTYZfXSJ76w4qNjES4GRu7gEVEW7hbyXzUEek1EtO82" alt="Em vestido transparente exibindo o bumbum, Megan Fox reclama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz de Hollywood se queixou da agenda de compromissos enquanto posava com o bumbum empinado, chamando a atenção de seus seguidores.</p></div>
            </div>
        </a><a href='https://revistamonet.globo.com/celebridades/noticia/2022/11/megan-fox-sobe-a-temperatura-com-look-transparente-e-reclama-de-noite-agitadissima.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Megan Fox sobe a temperatura com look transparente e reclama de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTG8nMNpf9J2C_0r-N1xkTfYjegBSuj3bmj6Na99ZaqhKm2GVWWcsa9bS2b5FQzXKr9NSbwkqco" alt="Megan Fox sobe a temperatura com look transparente e reclama de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atriz de &#39;Transformers&#39; teve que lidar com dois compromissos, dois looks – e só queria &#39;ficar na cama assistindo a Harry Potter&#39;</p></div>
            </div>
        </a>
        </Template></>;
}