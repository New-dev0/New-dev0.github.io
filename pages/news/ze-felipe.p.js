import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ze Felipe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ze Felipe"/>
        <meta name="description" content="Trending News about Ze Felipe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ze Felipe</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=ded3445b-a69f-4715-8f11-4bbb5bd699b4&w=800&h=420&watermark=true&t=20221125175800" alt="Ze Felipe"/>
            <h3>Recent News</h3>
            <a href='https://www.jn.pt/artes/ze-felipe-pisa-hoje-o-palco-super-bock-arena-15388502.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zé Felipe pisa hoje o palco Super Bock Arena</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT94-BIehGu9oVWCPyvoAJ5sSoVOgKbxPbbqEcoc_KLPx_IU26l-T7YCQQlV9JYLUNjKav0AThv" alt="Zé Felipe pisa hoje o palco Super Bock Arena" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos maiores artistas brasileiros da atualidade, Zé Felipe, atua esta sexta-feira no palco do Super Bock arena no Porto, às 21.30 horas.</p></div>
            </div>
        </a>
        </Template></>;
}