import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France"/>
        <meta name="description" content="Trending News about France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/ernesto-guzman-jr1680f49e_socialshare.jpg" alt="France"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/noticia/mundo/2022/11/22/franca-parlamento-discute-o-fim-das-touradas-na-quinta-feira/309071/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>França. Parlamento discute o fim das touradas na quinta-feira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1MFl4UYcx7SrWidX0mIBy5xyAmnrgawXWPVMaQuTakJFq1RcJI-8iAsML3i2DjxUsfeBZ109a" alt="França. Parlamento discute o fim das touradas na quinta-feira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A iniciativa tem gerado divisão entre os vários partidos e não deverá passar na Assembleia Nacional francesa. De acordo com uma sondagem da Ifop,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}