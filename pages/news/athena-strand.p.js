import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Athena Strand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Athena Strand"/>
        <meta name="description" content="Trending News about Athena Strand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Athena Strand</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221203004411-athena-strand.jpg?c=16x9&q=w_800,c_fill" alt="Athena Strand"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/12/03/us/athena-strand-kidnapping-death-man-arrested/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FedEx driver is arrested in the kidnapping and killing of a 7-year-old ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyi3Kkg7gy7lgc97BFwtMkBV9sjky7a6jdmGxKdCYxxuN0L9yMz2D1BlIPbpZgdZ3XwuMAk6mU" alt="FedEx driver is arrested in the kidnapping and killing of a 7-year-old ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A driver working for FedEx was arrested and charged Friday in the kidnapping and killing of a 7-year-old girl who had disappeared from her home&#39;s driveway&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox4news.com/news/athena-strand-memorial-service-for-7-year-old-to-be-held-tuesday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Athena Strand: Memorial service for 7-year-old to be held Tuesday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO-wtNOIKfVSPGo-gR2bLSZcn7CE_WYxwA0IfEprggS0eDwsvvOIN_sRuWDfXRETCcNUrXzny0" alt="Athena Strand: Memorial service for 7-year-old to be held Tuesday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>First Baptist Church Cottondale will hold a candlelight memorial service to remember the young girl&#39;s life.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/news/nation/2022/12/03/missing-texas-girl-athena-strand-found-driver-arrested/10826468002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FedEx driver charged in kidnapping of 7-year-old Texas girl who ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-ULv_k6nwfQyd6gwDLFAqIX2Df12rMotImBD74yQmhsKNvaVzcUPOnekBzsrNkcpDmDR6t6GF" alt="FedEx driver charged in kidnapping of 7-year-old Texas girl who ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Athena Strand went missing from her home in Wise County, Texas, this week. FedEx driver Tanner Lynn Horner was charged with kidnapping and murder.</p></div>
            </div>
        </a><a href='https://www.buzzfeednews.com/article/stefficao/athena-strand-disappearance-killing-arrest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Missing 7-Year-Old Girl Has Been Found Dead, And A FedEx ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZ3a871TP3EIKT8sOZGOxPWjCuV61xZQdcnv9mAWRSa-8YAkRf1keoLrAg0tgGogsyr7SFZUXL" alt="A Missing 7-Year-Old Girl Has Been Found Dead, And A FedEx ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The body of Athena Strand, who disappeared from her driveway on Wednesday, was found on Friday evening.</p></div>
            </div>
        </a><a href='https://www.kltv.com/2022/12/03/missing-texas-girl-athena-strand-abducted-killed-by-fed-ex-driver-sheriff-says/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missing Texas girl Athena Strand abducted and killed by Fed Ex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJ4THZD6sFf2UtDRONYB5gAAa-kYWmO1LcJhAIvOAlvsZZ8cOaGeBz2ch_LB7R-YUnncoF8Sqz" alt="Missing Texas girl Athena Strand abducted and killed by Fed Ex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The suspect, identified by the sheriff as Tanner Lynn Horner, 31, of Lake Worth, Texas, allegedly confessed and is now in custody on capital murder and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.star-telegram.com/news/local/crime/article269550197.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is Tanner Horner, suspect in kidnapping, murder of Texas 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStW0YEBam2H9ES2jOavT-CaY-sazuNdbshIc8T7e-DyW4bVilAY_c20tFliJhkC86ITb_drnHr" alt="Who is Tanner Horner, suspect in kidnapping, murder of Texas 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Authorities arrested Tanner Lynn Horner, a FedEx contract driver accused of kidnapping and killing 7-year-old Athena Strand in Wise County TX.</p></div>
            </div>
        </a>
        </Template></>;
}