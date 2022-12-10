import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Richarlison</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Richarlison"/>
        <meta name="description" content="Trending News about Richarlison" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Richarlison</h1>
            <Image width={800} height={500} src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/12/09091223/richarlison-brazil-2022-1.jpg" alt="Richarlison"/>
            <h3>Recent News</h3>
            <a href='https://www.planetfootball.com/quick-reads/richarlison-brazil-nicest-man-world-tottenham-everton-politics-charity-work/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11 wonderful times Richarlison was the nicest man in the world</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAoy6QPE9mAj7yAU7SqJgsP5lk_WJl0MBFaBvKCPNioqm76EuehDj-6_u2-M2GCVLwOgV282le" alt="11 wonderful times Richarlison was the nicest man in the world" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dismiss him at your peril; while Tottenham and Brazil striker Richarlison may look like your average football, all snarls and tattoos, he&#39;s actually a gem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}