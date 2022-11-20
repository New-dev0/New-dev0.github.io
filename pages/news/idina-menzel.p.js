import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Idina Menzel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Idina Menzel"/>
        <meta name="description" content="Trending News about Idina Menzel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Idina Menzel</h1>
            <Image width={800} height={500} src="" alt="Idina Menzel"/>
            <h3>Recent News</h3>
            <a href='https://www.popsugar.com/entertainment/idina-menzel-james-marsden-singing-49017692'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch &quot;Disenchanted&quot; Stars James Marsden and Idina Menzel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTR48rgpQW7hvuKS8dXHeHXNrLFoUqwNuD4HQKwXn5z4PDVdt8ePoTW71v0Uq9X0yXKUc2fM0X_" alt="Watch &quot;Disenchanted&quot; Stars James Marsden and Idina Menzel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Idina Menzel and James Marsden sang an impromptu duet of &quot;A Whole New World&quot; on The Late Late Show With James Corden.</p></div>
            </div>
        </a>
        </Template></>;
}