import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ufuk Akçiğit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ufuk Akçiğit"/>
        <meta name="description" content="Trending News about Ufuk Akçiğit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ufuk Akçiğit</h1>
            <Image width={800} height={500} src="" alt="Ufuk Akçiğit"/>
            <h3>Recent News</h3>
            <a href='https://haberciniz.biz/biyografi/ufuk-akcigit-kimdir-ufuk-akcigit-meslegi-nedir-ufuk-akcigitin-hayat-hikayesi-4023059'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ufuk Akçiğit kimdir? Ufuk Akçiğit, mesleği nedir? Ufuk Akçiğit&#39;in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ufuk Akçiğit kimdir? Ufuk Akçiğit, mesleği nedir? Ufuk Akçiğit&#39;in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chicago Üniversitesi ekonomi bölümü öğretim üyesi olan Prof D.r Ufuk Akçiğit, ekonomi alanındaki çok sayıda başlık altında akademik çalışmalarını yürütmeye&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}