import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Puneeth Rajkumar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Puneeth Rajkumar"/>
        <meta name="description" content="Trending News about Puneeth Rajkumar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Puneeth Rajkumar</h1>
            <Image width={800} height={500} src="https://www.deccanherald.com/sites/dh/files/articleimages/2022/10/22/gandhadaguditwitter0910221200-1155783-1666379821.jpg" alt="Puneeth Rajkumar"/>
            <h3>Recent News</h3>
            <a href='https://www.deccanherald.com/entertainment/puneeth-rajkumar-was-daring-as-ever-in-the-wild-1155783.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Puneeth Rajkumar was daring as ever in the wild&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQt-h9nR9cifgg-9RUKLpaa8n1gr7XCdTN4eDF1Wx_ocL_1zw754rcHRdm3IMqNsuiCa-Mk7KSu" alt="&#39;Puneeth Rajkumar was daring as ever in the wild&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filmmaker Amoghavarsha opens up to Vivek M V about filming &#39;Gandhada Gudi&#39;, a docudrama, with the Sandalwood superstar.</p></div>
            </div>
        </a>
        </Template></>;
}