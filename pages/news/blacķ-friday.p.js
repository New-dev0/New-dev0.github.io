import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Blacķ Friday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Blacķ Friday"/>
        <meta name="description" content="Trending News about Blacķ Friday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Blacķ Friday</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2020/02/25/15826491255e554f25eccf8_1582649125_3x2_rt.jpg" alt="Blacķ Friday"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/mercado/2022/11/pais-aproveitam-black-friday-para-garimpar-descontos-em-material-escolar.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pais aproveitam Black Friday para garimpar descontos em material ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyJXG3SHv_O7OhWFeqO7XAA1lZmREI091ACETw5C3S3bFMSNbFo1QcJoTDUYfDXYn5NnWMhbUw" alt="Pais aproveitam Black Friday para garimpar descontos em material ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As férias nem chegaram, mas há pais que já estão programando o retorno dos filhos à escola no próximo ano. Pensando no bolso, estão aproveitando as ofertas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}