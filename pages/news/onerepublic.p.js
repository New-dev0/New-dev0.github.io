import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>OneRepublic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,OneRepublic"/>
        <meta name="description" content="Trending News about OneRepublic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>OneRepublic</h1>
            <Image width={800} height={500} src="https://mg.co.za/wp-content/uploads/2022/11/ryan-tedder-onerepublic.jpeg" alt="OneRepublic"/>
            <h3>Recent News</h3>
            <a href='https://mg.co.za/friday/2022-11-15-onerepublic-hits-south-african-stages-in-november/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OneRepublic hits South African stages in November</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvcQK1Zw0knG3MXQN1GhhCvSydpHaLViwEwnyGTzZBXm4LvsvUhqzk3j3VisXzCrtNjbVY89s5" alt="OneRepublic hits South African stages in November" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>OneRepublic consists of singer/songwriter and lead vocalist Ryan Tedder, guitarists Zach Filkins and Drew Brown, bassist and cellist Brent Kutzle, keys player&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}