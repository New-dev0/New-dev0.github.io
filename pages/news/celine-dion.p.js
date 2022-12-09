import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celine Dion</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celine Dion"/>
        <meta name="description" content="Trending News about Celine Dion" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celine Dion</h1>
            <Image width={800} height={500} src="https://extra.globo.com/incoming/25624110-028-c18/w976h550-PROP/whatsapp-image-2022-12-08-at-11.28.54.jpeg.jpg" alt="Celine Dion"/>
            <h3>Recent News</h3>
            <a href='https://extra.globo.com/noticias/saude-e-ciencia/celine-dion-entenda-sindrome-da-pessoa-rigida-doenca-rara-que-afeta-cantora-25624114.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Céline Dion: entenda a Síndrome da Pessoa Rígida, doença rara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkHRKIDdYMKNI4ZGxsbE9B8XvQVxoA75SBWNunizULZ4PmmpEc3nAumZGx-LuOyMERRNqWF6kj" alt="Céline Dion: entenda a Síndrome da Pessoa Rígida, doença rara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Celine Dion usou as redes sociais na manhã desta quinta-feira para revelar que foi diagnosticada com uma doença neurológica rara.</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/noticia/2022/12/08/celine-dion-revela-diagnostico-de-doenca-neurologica-rara.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Céline Dion revela diagnóstico de doença neurológica rara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFgEZt9epc1HzAHZD0qY6VLunI0kKdH47oQMZcoQW8FUomqwf7mhSgBxbm8BRdRuMaAGpfQ1E9" alt="Céline Dion revela diagnóstico de doença neurológica rara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantora afirmou tem síndrome da pessoa rígida em um vídeo no Instagram. Ela cancelou oito dos seus shows de 2023. Por g1. 08/12/2022 10h03&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/vivabem/noticias/redacao/2022/12/08/sindrome-da-pessoa-rigida-celine-dion.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que é a síndrome da pessoa rígida, diagnóstico recente de Céline ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyz9kGN2LKe_jDpCNVt_4k3um0VGL5WvUInUQsGHTiOZMG3xqPWC154FUqb0LIDkwioUafrORg" alt="O que é a síndrome da pessoa rígida, diagnóstico recente de Céline ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E por fim rigidez nos músculos da respiração, em que o paciente pode ter dificuldade respiratória; Pode haver contratura e espasmos musculares - esses sintomas&nbsp;...</p></div>
            </div>
        </a><a href='https://revistagalileu.globo.com/saude/noticia/2022/12/sindrome-da-pessoa-rigida-o-que-e-a-doenca-que-afeta-celine-dion.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Síndrome da pessoa rígida: o que é a doença que afeta Céline Dion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHLDUs505qJIL7Qgcirlgv3-PjKlAqSvgxbE3T57HXeKbDRJvRSvew1knznbQooAxLuNhXqwuY" alt="Síndrome da pessoa rígida: o que é a doença que afeta Céline Dion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantora canadense foi diagnosticada com condição neurológica rara, que atinge cerca de uma a cada 1 milhão de pessoas e causa espasmos musculares&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/geral-63911864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Síndrome da pessoa rígida: entenda o quadro que fez Céline Dion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQ2PhTLK5CgEQHi8w5QsE89Z0A0-Espmwsn-cFezx6qLjqpIZcUTkGJSOMhAwbm6jLjMSHgaxG" alt="Síndrome da pessoa rígida: entenda o quadro que fez Céline Dion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Problema de saúde enfrentado pela cantora causa espasmos dolorosos e não tem cura, mas tratamento pode permitir &#39;vida normal&#39;.</p></div>
            </div>
        </a><a href='https://exame.com/pop/celine-dion-e-diagnosticada-com-doenca-autoimune-rara-saiba-o-que-e/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celine Dion é diagnosticada com doença autoimune rara; saiba ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwEK4Ee6GbxTnz3ekc7MHhQ4rW5f6ainSydm3Bqe8-L7AFaMLm0O7edwgNzquSB9oXaWuc4djp" alt="Celine Dion é diagnosticada com doença autoimune rara; saiba ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Última atualização em 08/12/2022 às 12:10. Nesta quinta-feira, 8, a cantora canadense Celine Dion revelou que foi diagnosticada com uma&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}