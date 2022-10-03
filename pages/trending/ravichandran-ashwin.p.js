import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ravichandran Ashwin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ravichandran Ashwin"/>
        <meta name="description" content="Trending News about Ravichandran Ashwin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ravichandran Ashwin</h1>
            <Image width={800} height={500} src="https://thecricketlounge.com/static/c1e/client/99591/uploaded_original/34663ed525f2655d5728465e0eef859b.jpg" alt="Ravichandran Ashwin"/>
            <h3>Recent News</h3>
            <a href='https://thecricketlounge.com/t20-world-cup-2022/ICC-T20-World-Cup-2022-Player-Preview-Ravichandran-Ashwin/cid8625981.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 Player Preview: Ravichandran Ashwin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn6jTL5TC0A01XqOpGIj3ijzdnWv_Ovy2MCBacvSDoPNLq3GWwnZIpFVfq79vgCif7nvnrRWGA" alt="ICC T20 World Cup 2022 Player Preview: Ravichandran Ashwin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Need no introduction, one of the great servants of Indian cricket, Ashwin is a master of a spinner to have in any team. In red ball cricket, his class is of the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}