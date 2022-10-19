import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aaron Finch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aaron Finch"/>
        <meta name="description" content="Trending News about Aaron Finch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aaron Finch</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/bbfab9a2a25c27a495161aaa97559693684b5b63/0_23_5000_3001/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ab83b60b3306b27988e7ad8b1da700b9" alt="Aaron Finch"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/oct/18/pat-cummins-appointed-australias-odi-captain-to-replace-aaron-finch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pat Cummins named Australia ODI captain to replace Aaron Finch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAtiaL7B3BgB_OTb_zIUDydNEnETmMC9AGQV8zQUkajHsGgm-IRbUL6LJc3AsUjmRZmRGEPHe3" alt="Pat Cummins named Australia ODI captain to replace Aaron Finch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pat Cummins has been announced as Australia&#39;s next one-day international captain, making him the 27th man to lead the country in the format.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/pat-cummins-to-replace-aaron-finch-as-australias-odi-captain-8214883/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pat Cummins to replace Aaron Finch as Australia&#39;s ODI captain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAVWztKnTWdZDr7LTXVby8Kr-HAQNhqluAjmerkwlN9_9Zl_vrx5KCi5k3Ja-3EfRzYmDhlDUg" alt="Pat Cummins to replace Aaron Finch as Australia&#39;s ODI captain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket Australia on Tuesday announced pace bowler Cummins would take on the extra leadership role, starting with an ODI series against England next month.</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/sports/pat-cummins-replaces-aaron-finch-as-australias-new-odi-captain-442441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pat Cummins replaces Aaron Finch as Australia&#39;s new ODI captain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_NKDv6x1QTU5VofAZsApOUkG0XYOD3q7XAHj-c-etS-qe9Bvv4YdA7WQ45gp8FRsgB4NV5dVd" alt="Pat Cummins replaces Aaron Finch as Australia&#39;s new ODI captain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beats the likes of Steve Smith, Glenn Maxwell, Mitchell March and Alex Carey to be appointed as Australia&#39;s 27th ODI skipper.</p></div>
            </div>
        </a><a href='https://news.abplive.com/sports/cricket/fast-bowler-pat-cummins-set-to-replace-aaron-finch-as-australia-odi-captain-1558672'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fast Bowler Pat Cummins Set To Replace Aaron Finch As Australia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRoLalOgw4Ph5E4eJlmPHiXIE5Zp6Y4ZwqC1xFfjp3_ehOs_pvZJixNZPEa2uoe1Oin0g2c0G8L" alt="Fast Bowler Pat Cummins Set To Replace Aaron Finch As Australia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Tuesday, Cricket Australia declared Pat Cummins as the new ODI skipper of Australia. Since Aaron Finch took retirement from the 50-over format,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/cummins-to-succeed-finch-as-australias-odi-captain/article66024863.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cummins to succeed Finch as Australia&#39;s ODI captain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyWCw1zguno9nY6jQFSzoOnlfuG2cxH7CUiGuqrWds0W7YqnePIuyy69tdMLHzjXy8j81pF3F1" alt="Cummins to succeed Finch as Australia&#39;s ODI captain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pat Cummins pipped David Warner to become Australia&#39;s 27th ODI captain and the first fast bowler to hold the position.</p></div>
            </div>
        </a>
        </Template></>;
}