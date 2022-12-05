import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lenny Henry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lenny Henry"/>
        <meta name="description" content="Trending News about Lenny Henry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lenny Henry</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/000b4036-1600.jpg" alt="Lenny Henry"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1202/1339728-lenny-henry-recalls-his-late-mother-winifred/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lenny Henry recalls his late mother Winifred</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuvkDJz6HujjOS-tkrdWWxlD7SLjNl6GOl6t3f6l8SPaSImW_kLG382j4pS5OmERb95uegsCeI" alt="Lenny Henry recalls his late mother Winifred" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lenny Henry has recalled the day his late mother Winifred made him re-enact his first ever TV audition when he was just 15 years old on their front&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}