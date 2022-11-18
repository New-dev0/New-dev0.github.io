import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Piers Morgan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Piers Morgan"/>
        <meta name="description" content="Trending News about Piers Morgan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Piers Morgan</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=6c820084-0267-4c1a-bf44-3425ebfd286e&w=800&h=420&watermark=true&t=20221117205500" alt="Piers Morgan"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/cristiano-ronaldo/noticias/ronaldo-a-piers-morgan-ate-me-ofereceram-ao-sporting-ao-napoles-15363109.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo a Piers Morgan: &quot;Até me ofereceram ao Sporting, ao ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCxEQZLoIW5CWKiQ3Y3tjrwSDVEawLgdCHVHPQqKF8x3JgU2dOhc-nO12y_p6AGayIeNo-8xih" alt="Ronaldo a Piers Morgan: &quot;Até me ofereceram ao Sporting, ao ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Se fores um agente, o Jorge Mendes tem mais de 100 jogadores, sempre dizem que se ele for ao Chelsea ou outro clube que é por causa do Cristiano Ronaldo. Eles [&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}