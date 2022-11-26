import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Crocs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Crocs"/>
        <meta name="description" content="Trending News about Crocs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Crocs</h1>
            <Image width={800} height={500} src="https://s.yimg.com/os/creatr-uploaded-images/2022-11/65c902b0-69b6-11ed-8afc-28bb008cfd3f" alt="Crocs"/>
            <h3>Recent News</h3>
            <a href='https://www.yahoo.com/lifestyle/crocs-black-friday-2022-110458435.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s your chance to save up to 50% off Crocs in nearly every color ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCaqlFYsqvFAb86Mq5aZs_u8yIhUiqPsK3Wk-DqwC4cRFowrGheYX3b-vBRaEmi74WfVwzisY7" alt="Here&#39;s your chance to save up to 50% off Crocs in nearly every color ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cult of Croc is real — and so is this massive Black Friday sale.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/shop-now/fashion/amazon-black-friday-sale-avail-as-much-as-32-off-on-crocs-footwear-101669382686644.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amazon Black Friday Sale: Avail as much as 32% off on Crocs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKiLtuVIfX6lfhXICEmOM91tXc3zU9EA1Cef7r1UBEN8oG3ZNYIwzPmzJ8NbFiboTtZXsLgf1_" alt="Amazon Black Friday Sale: Avail as much as 32% off on Crocs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Black Friday Sale: You can get Crocs footwear at very attractive shoes. Read to know more.</p></div>
            </div>
        </a><a href='https://www.sfgate.com/shopping/article/crocs-black-friday-amazon-17607081.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crocs are 50% off for Black Friday on Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReLd7rWou_AI9E3oXWprO7raDUdVXWSn5nrvgoRcMGPgGd42rjiL1x5fytMzVVQlIZODPfcamX" alt="Crocs are 50% off for Black Friday on Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Crocs lovers can snap up some serious savings with Amazon&#39;s Black Friday sale, which offers the oh-so-comfortable clogs at up to 42%.</p></div>
            </div>
        </a><a href='https://uk.style.yahoo.com/crocs-deals-black-friday-2022-114611050.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>These fur-lined Crocs are only $38 for Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFJmHjwoV_Ozu-eJjjeiP2dcR1gXQQ2D0UWzM4cuHS5W8niwBslq0xUVSZ9E4eIUXH1mkUNTSZ" alt="These fur-lined Crocs are only $38 for Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Our favorite Black Friday deals include Crocs. Love &#39;em or not, the iconic clog remains Amazon&#39;s top-selling shoe year after year.</p></div>
            </div>
        </a>
        </Template></>;
}