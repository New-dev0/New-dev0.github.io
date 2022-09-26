import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BBC news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BBC news"/>
        <meta name="description" content="Trending News about BBC news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BBC news</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_hindi/16AE8/production/_126840929_p0d2j0zl.jpg" alt="BBC news"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/hindi/media-63025562'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भारत-पाकिस्तान क्या चीन से सबक लेकर एक साथ आ पाएंगे? - BBC News ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSN7bNa6zX7GRzKOV2MXpjECFdaDKvhPZMDNZEbqqrXyJwlUZG5-1rZlBDg8xWaPbV7S-ShddwB" alt="भारत-पाकिस्तान क्या चीन से सबक लेकर एक साथ आ पाएंगे? - BBC News ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दोनों ही देशों की जनता महंगाई से परेशान है लेकिन फिर भी सीमापार से होने वाला व्यापार का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/mediacentre/2022/trust-in-bbc-news-film'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Powerful new film about trust in BBC News launched</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPCiOYGkuoXexrFddjg1bxWVpugk85b2XhHQxEsHb1Hbgfur9pQMCSW_vKZQbRM4-SRGF6hnO2" alt="Powerful new film about trust in BBC News launched" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The film brings the BBC&#39;s rigorous Editorial Guidelines to life, showcasing how they drive and guide accurate and impartial reporting, trusted by audiences&nbsp;...</p></div>
            </div>
        </a><a href='https://www.khaleejtimes.com/opinion/bbc-faces-ott-competition-as-its-independence-is-tested'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BBC faces OTT competition as its independence is tested</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdnbHa2Qkgp5KpundLWfWEyOlcHWB4BlFhSIL7m906EJmQBQNq5GoIRc5IPNPbmpUoXtsmZaCy" alt="BBC faces OTT competition as its independence is tested" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The number of licence fee payers has come down over the years, with youngsters choosing streaming services and other online platforms to access content,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}