import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Steven vitoria</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Steven vitoria"/>
        <meta name="description" content="Trending News about Steven vitoria" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Steven vitoria</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=a3a573d9-289e-4ae5-b360-87936d158f93&w=800&h=420&watermark=true&t=20221124000300" alt="Steven vitoria"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/steven-vitoria-apos-derrota-com-a-belgica-foi-duro-mereciamos-mais-15382305.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steven Vitória após derrota com a Bélgica: &quot;Foi duro, merecíamos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRe6ttfTWXZb2uOPBeEO1mVYA0HO_AaQLf6zVey-wz2WEtfw8HXMBu4zMZJMkcXRjKx9MDJ_RP-" alt="Steven Vitória após derrota com a Bélgica: &quot;Foi duro, merecíamos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogar no Mundial: &quot;Foi um sentimento especial, é sobre isto que tudo gira. Mas queremos vitórias. O próximo jogo será mais especial.&quot;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}