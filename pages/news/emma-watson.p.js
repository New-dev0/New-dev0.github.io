import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Emma Watson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Emma Watson"/>
        <meta name="description" content="Trending News about Emma Watson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Emma Watson</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001ce3b5-1600.jpg" alt="Emma Watson"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1126/1338398-harry-potters-emma-watson-salutes-toy-show-star/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Potter&#39;s Emma Watson salutes Toy Show star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_ccqd8xU-rVCPC0mwF1DM4d27G9rFdg-Jz9GkATpgk8woiXvD8H5QmVYfNUoYSNvcceJPMYyc" alt="Harry Potter&#39;s Emma Watson salutes Toy Show star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Potter star Emma Watson was a surprise guest via video message on Friday&#39;s Late Late Toy Show as she saluted 10-year-old Dubliner Caitríona Kalogeraki&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9796691/rte-caitriona-awareness-autism-emma-watson-toy-show/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE viewers praise Caitriona as she raises awareness about Autism ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKP7JoeCxavRURJ-WJYSiFTwLUAOCJT-S6IKOKgaoujmc7eVd_vakKa4dv-e-B1tR0t0xb0tU8" alt="RTE viewers praise Caitriona as she raises awareness about Autism ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIEWERS praised Caitriona on tonight&#39;s Late Late Toy Show as she raised awareness about Autism and got a special surprise from Harry Potter star Emma.</p></div>
            </div>
        </a>
        </Template></>;
}