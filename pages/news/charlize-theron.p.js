import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charlize Theron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charlize Theron"/>
        <meta name="description" content="Trending News about Charlize Theron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charlize Theron</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/6625/b2f1a0655c88416592086cdea0bf2b00.jpg" alt="Charlize Theron"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/channel/celebrities/charlize-therons-controversial-opinion-about-her-mother-tongue-its-not-a-very-helpful-language-20221116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlize Theron&#39;s controversial opinion about Afrikaans - &#39;It&#39;s not a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTbV_mQWYfZ7aZQMyxwPW5W_Z58NssscgX3xEMcYSQrKLcBFnefD--9hZNZs28gnmfGIuG-pWlr" alt="Charlize Theron&#39;s controversial opinion about Afrikaans - &#39;It&#39;s not a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charlize Theron opened up about her Afrikaans heritage in a new interview. The South African actor was born and raised in Benoni, Gauteng,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/news/breaking-charlize-theron-comments-afrikaans-wednesday-16-november/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Afrikaans is unhelpful&#39;: Charlize Theron remarks spark controversy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnaaAorjYsMNaWeC8GCG6RvXtuAO-4RiTLv7hJKVHHHdcoU03VfcOZSB0v_UdXmpq6fjkP2h40" alt="&#39;Afrikaans is unhelpful&#39;: Charlize Theron remarks spark controversy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oh, that&#39;s not going to go down well. Charlize Theron has likely offended a few with her boiling-hot take on the Afrikaans language.</p></div>
            </div>
        </a>
        </Template></>;
}