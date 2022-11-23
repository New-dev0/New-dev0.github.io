import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MSC Cruises</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MSC Cruises"/>
        <meta name="description" content="Trending News about MSC Cruises" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MSC Cruises</h1>
            <Image width={800} height={500} src="https://www.travelmarketreport.com//services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=0ac7f86e-a06a-ed11-b00b-005056a8720b" alt="MSC Cruises"/>
            <h3>Recent News</h3>
            <a href='https://www.travelmarketreport.com/Cruise/articles/MSC-Cruises-USA-Names-VP-of-Field-Sales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MSC Cruises USA Names VP of Field Sales</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyYld4TylBxOLRpI46Mr5jkl3vs2r4p-82hW618G4rNNe1W1i-ZgFdGSNf99lqRHs9uK2yeQmB" alt="MSC Cruises USA Names VP of Field Sales" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MSC Cruises USA has appointed Erin Douglas as vice president of field sales, effective immediately. She will lead MSC&#39;s business development managers and&nbsp;...</p></div>
            </div>
        </a><a href='https://cruise.blog/2022/11/10-things-msc-cruises-does-well'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>10 Things MSC Cruises does well</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQo_PTJfvEVapGHs3NoknbJqJnPyg2lfx6CqwEKZSRL7VbbG_KIXbOyPsT-LSQWRWHQiQZbe-Kd" alt="10 Things MSC Cruises does well" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MSC Cruises just had its best month ever, with nearly 400000 bookings, and they launched their biggest cruise ship to date, MSC World Europa.</p></div>
            </div>
        </a>
        </Template></>;
}