import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AIIMS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AIIMS"/>
        <meta name="description" content="Trending News about AIIMS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AIIMS</h1>
            <Image width={800} height={500} src="https://img-mm.manoramaonline.com/content/dam/mm/mo/health/health-news/images/2022/9/26/aiims-1.jpg" alt="AIIMS"/>
            <h3>Recent News</h3>
            <a href='https://www.manoramaonline.com/health/health-news/2022/09/26/renaming-politics-continues-modi-govt-to-rename-aiims-watch-what-each-medical-institute.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>പേരു മാറ്റിയാൽ &#39;പെരുമയും&#39; നഷ്ടം ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrg-g6eY-7FZW7k9SGE6YSJMVl14FaC0f--I-u833arjyIkgCvPA4iKvUGV_WD8oBQH0ko2JWi" alt="പേരു മാറ്റിയാൽ &#39;പെരുമയും&#39; നഷ്ടം ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>പേരു മാറ്റിയാൽ &#39;പെരുമയും&#39; നഷ്ടം? മാറ്റരുതെന്നു വിദഗ്ധർ; &#39;മൂന്നും&#39; കൽപിച്ച് ബിജെപി? റൂബിൻ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}