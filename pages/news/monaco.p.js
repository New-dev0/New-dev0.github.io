import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monaco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monaco"/>
        <meta name="description" content="Trending News about Monaco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monaco</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/pvfjR1fHtZDlXG9CulCz5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/sheknows_79/4603965206913fbc82592db76ca38d1e" alt="Monaco"/>
            <h3>Recent News</h3>
            <a href='https://www.yahoo.com/lifestyle/jeannie-mai-jenkins-her-daughter-161200032.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jeannie Mai-Jenkins &amp; Her Daughter Monaco Look Like a Holiday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaddPsX5pkT6PJwsGLkZg7u_cu__0w_aJhjAbOojcI03yhAh3qQjyOPTVQ_10JKgPkVkMv79tj" alt="Jeannie Mai-Jenkins &amp; Her Daughter Monaco Look Like a Holiday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeannie Mai-Jenkins and her daughter Monaco&#39;s newest snapshot together is as picture-perfect as it gets! On Dec 2, Mai-Jenkins shared one of the sweetest&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}