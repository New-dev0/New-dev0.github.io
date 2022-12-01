import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Peppa Pig</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Peppa Pig"/>
        <meta name="description" content="Trending News about Peppa Pig" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Peppa Pig</h1>
            <Image width={800} height={500} src="https://licensing.biz/wp-content/uploads/2022/11/Bamboo-Bamboo-Peppa-Pig-nf.png" alt="Peppa Pig"/>
            <h3>Recent News</h3>
            <a href='https://licensing.biz/hasbro-partners-with-bamboo-bamboo-on-peppa-pig-tableware/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hasbro partners with Bamboo Bamboo on Peppa Pig tableware</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4QS9ao3GbA15KPl6WaqHiu7Vl7sThL-OEV16iKMTYDUboLgQ4ReirzaZr03LlvumyzYb7bQ95" alt="Hasbro partners with Bamboo Bamboo on Peppa Pig tableware" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bamboo Bamboo, the premium sustainable tableware brand has teamed up with Hasbro to launch the first range of Peppa Pig children&#39;s tableware.</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/fabulous/20600992/mum-fuming-cant-find-anything-peppa-pig-for-son/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mum left fuming as she can&#39;t find anything with Peppa Pig on for her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT44Dqp9wSDePF1sd6NB8ac0D9R_5nzJhrEE5uDVE0KgbDxa6B2OZLodMX8gVmVnRJGxFq30E9x" alt="Mum left fuming as she can&#39;t find anything with Peppa Pig on for her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A MUM has been left fuming after trying to find an outfit for her son with Peppa Pig on it.Kirstie took to her TikTok page to rage about the &quot;one of m.</p></div>
            </div>
        </a>
        </Template></>;
}