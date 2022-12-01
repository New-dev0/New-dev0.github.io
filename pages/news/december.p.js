import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>December</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,December"/>
        <meta name="description" content="Trending News about December" /></Head><Template>
            <h1 style={{fontSize: "30"}}>December</h1>
            <Image width={800} height={500} src="" alt="December"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/bamise-slain-fashion-designer-for-burial-on-december-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bamise, slain fashion designer for burial on December 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVo0cYLlXFnIq6BtZeWrtG6QFwtZbE7g2LH7eyMeabsCLN2IpPSDfKhjZ_AhmxOyFsKuwgP-s6" alt="Bamise, slain fashion designer for burial on December 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Ayanwolas disclosed this during the 22nd post humous birthday which took place in Oko-Oba, Agege area of Lagos.</p></div>
            </div>
        </a><a href='https://kqennewsradio.com/2022/11/30/city-of-myrtle-creek-announces-public-meetings-for-december/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CITY OF MYRTLE CREEK ANNOUNCES PUBLIC MEETINGS FOR ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSycMa43doGWn4x0yR8qZ9xSBU6Uwlc4qgrDk8Lzl9Mw6A5vMD2oOra1c14La8ZrxGQYCjMO3yJ" alt="CITY OF MYRTLE CREEK ANNOUNCES PUBLIC MEETINGS FOR ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The City Council will meet on December 6th and December 20th at 5:30 p.m. in the City Hall Council Chambers. Both the Park Commission and the Planning&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}