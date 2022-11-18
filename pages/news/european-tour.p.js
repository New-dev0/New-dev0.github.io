import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>European Tour</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,European Tour"/>
        <meta name="description" content="Trending News about European Tour" /></Head><Template>
            <h1 style={{fontSize: "30"}}>European Tour</h1>
            <Image width={800} height={500} src="https://ocs-sport.ams3.cdn.digitaloceanspaces.com/let_new/2022/11/PISchmidt_762.jpg" alt="European Tour"/>
            <h3>Recent News</h3>
            <a href='https://ladieseuropeantour.com/blog/schmidt-ready-and-excited-for-life-on-the-let/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SCHMIDT READY AND EXCITED FOR LIFE ON THE LET - Ladies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOQKRrMIztXI0Awt1VSWHHCx5LbxT0bbubp9lrBKC_osXXhRV9iWrh5-J064axPAHax4JJanLP" alt="SCHMIDT READY AND EXCITED FOR LIFE ON THE LET - Ladies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last month, Germany&#39;s Patricia Isabel Schmidt secured her LET card for the 2023 season by finishing fourth on the LET Access Series Order of Merit.</p></div>
            </div>
        </a>
        </Template></>;
}