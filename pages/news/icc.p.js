import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Icc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Icc"/>
        <meta name="description" content="Trending News about Icc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Icc</h1>
            <Image width={800} height={500} src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2022/11/20-39.jpg" alt="Icc"/>
            <h3>Recent News</h3>
            <a href='https://www.andhrajyothy.com/2022/telangana/hyderabad/two-icc-awards-for-tsspdcl-952496.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>టీఎ్‌సఎస్పీడీసీఎల్‌కు రెండు ఐసీసీ అవార్డులు</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="టీఎ్‌సఎస్పీడీసీఎల్‌కు రెండు ఐసీసీ అవార్డులు" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>దక్షిణ తెలంగాణ విద్యుత్‌ పంపిణీ సంస్థ(టీఎస్‌ఎస్పీడీసీఎల్‌) రెండు ఇండియన్‌ చాంబర్‌ ఆఫ్‌&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntnews.com/telangana/tsspdcl-bags-two-icc-awards-851089'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>టీఎస్‌ఎస్‌పీడీసీఎల్‌కు రెండు ఐసీసీ అవార్డులు</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhrt8xcRDfCO1wM-CdOueddzg2uhblt-b3cgFExmuFGvJlTZUsXppcbk71dUFD-ZwE5ik8mbSV" alt="టీఎస్‌ఎస్‌పీడీసీఎల్‌కు రెండు ఐసీసీ అవార్డులు" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>దక్షిణ తెలంగాణ విద్యుత్తు పంపిణీ సంస్థ (టీఎస్‌ఎస్‌పీడీసీఎల్‌)కు రెండు ఇండియన్‌&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}