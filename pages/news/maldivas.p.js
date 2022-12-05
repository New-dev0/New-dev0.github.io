import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maldivas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maldivas"/>
        <meta name="description" content="Trending News about Maldivas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maldivas</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/h9ToY6OsUEKriGs7OoIuBAYBFZQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/s/Z/NQa7KeSguFedPYTYtn5A/img-5391.jpg" alt="Maldivas"/>
            <h3>Recent News</h3>
            <a href='https://casavogue.globo.com/lazer-e-cultura/hoteis/noticia/2022/12/catar-tem-resort-que-reproduz-as-ilhas-maldivas-com-diarias-acima-de-r-32-mil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Catar tem resort que reproduz as Ilhas Maldivas com diárias acima ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSoVD_T1L16UZqQKKhvFa3i1PDEwvBJjfnHs7n6EBv8MS1Cg9MhuLEcHXEqbMq0IhyjZhL7ziK" alt="Catar tem resort que reproduz as Ilhas Maldivas com diárias acima ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nomeado de Banana Island Resort Doha by Anantara, o hotel fica em uma ilha de 13 hectares banhada pelas águas do do Golfo Pérsico. Inclusive, é lá que as&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}