import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seren Serengil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seren Serengil"/>
        <meta name="description" content="Trending News about Seren Serengil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seren Serengil</h1>
            <Image width={800} height={500} src="https://imgrosetta.mynet.com.tr/file/15979752/15979752-700x400.jpg" alt="Seren Serengil"/>
            <h3>Recent News</h3>
            <a href='https://www.mynet.com/8-bin-658-yil-hapis-cezasi-alan-adnan-oktar-in-seren-serengil-aciklamasi-yeniden-gundem-oldu-seren-dindardir-soylediklerimin-dogru-oldugunu-biliyordu-431225-mymagazin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Can Tanrıyar&#39;dan karşı misilleme! 8 bin 658 yıl hapis cezası alan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNTp1wxVkyVYuamZdYzdS9RW-ZRyoFIWqN40_antdABg2VnJrt6KhowO6YZhFk32KFMS-032sk" alt="Can Tanrıyar&#39;dan karşı misilleme! 8 bin 658 yıl hapis cezası alan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adnan Oktar organize suç örgütü davasında 8 bin 658 yıl hapis cezası alan Adnan Oktar&#39;ın Seren Serengil açıklaması sosyal medyada yeniden gündem oldu.</p></div>
            </div>
        </a>
        </Template></>;
}