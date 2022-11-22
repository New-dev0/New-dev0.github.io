import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thami Ngubeni</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thami Ngubeni"/>
        <meta name="description" content="Trending News about Thami Ngubeni" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thami Ngubeni</h1>
            <Image width={800} height={500} src="http://www.thesouthafrican.com/wp-content/uploads/2022/11/Screenshot_20221121-151221_Samsung-Internet_copy_1200x858_1.jpg" alt="Thami Ngubeni"/>
            <h3>Recent News</h3>
            <a href='https://www.thesouthafrican.com/lifestyle/celeb-news/breaking-kidnapped-metro-fm-host-thami-ngubeni-pamela-mtanga-highjack-21-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I was kidnapped&#39;: Metro FM host Thami Ngubeni opens up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSPal6lpnZ7JgzCCjudfBmkZi7e5TuDXLibdjZEe4FsefKNGKYh9Nbs1Jsh-QtQxSNNcXI-SUW" alt="&#39;I was kidnapped&#39;: Metro FM host Thami Ngubeni opens up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Metro FM presenter Thami Ngubeni shared her horrific experience of being hijacked and kidnapped last week.</p></div>
            </div>
        </a><a href='https://zwnews.com/they-took-away-everything-except-my-life-says-thami-ngubeni-after-being-highjacked/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>They took away everything except my life, says Thami Ngubeni after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZBRWsCDCMogCOzye3Nd8KzmFZmOCANhZiHbRmJc_pOaoKsx_qIR8zM-NCvynRrjXf-mvkavO0" alt="They took away everything except my life, says Thami Ngubeni after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thami Ngubeni reveals how she narrowly escaped death following a recent kidnapping and car hijacking. The TV/ radio personality opened up about the incident&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}