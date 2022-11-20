import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>International Mens Day messages</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,International Mens Day messages"/>
        <meta name="description" content="Trending News about International Mens Day messages" /></Head><Template>
            <h1 style={{fontSize: "30"}}>International Mens Day messages</h1>
            <Image width={800} height={500} src="https://img.mensxp.com/media/content/2022/Nov/MENS-DAY-MENSXP_6378b93fba43c.jpeg" alt="International Mens Day messages"/>
            <h3>Recent News</h3>
            <a href='https://www.mensxp.com/special-features/features/122514-international-mens-day-what-men-want-to-hear-from-women.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instead Of Receiving &#39;Happy Men&#39;s Day&#39; Messages, Here Are 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvfuZBum8iJHtirbIlvjX0mKjBiQdamyJ4uOlV1WvdK-2Ch_AMW2hCXXqCBnzs0th6YlKv5Pp3" alt="Instead Of Receiving &#39;Happy Men&#39;s Day&#39; Messages, Here Are 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Be it women&#39;s day or men&#39;s day, brands don&#39;t leave any opportunity to lure us with myriads of discounts and offers. As your phone starts pinging with these&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}