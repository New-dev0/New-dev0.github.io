import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rosie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rosie"/>
        <meta name="description" content="Trending News about Rosie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rosie</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2021/12/comp-ap-6469-chris-ramsey.jpg?strip=all&quality=100&w=1500&h=1000&crop=1" alt="Rosie"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/tvandshowbiz/8063950/inside-rosie-ramsays-dream-home-strictly/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Strictly Christmas special star Rosie Ramsey&#39;s £1.3m dream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFgbtGvE0pPQECdxM-wb7yg4XRkVNh4wCxejrIkgupqTuXVS6wpqdVU7HPnLpBHaF6CdaxQiN0" alt="Inside Strictly Christmas special star Rosie Ramsey&#39;s £1.3m dream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROSIE Ramsey is set to hit the dance floor in a Strictly Come Dancing special episode this Christmas season.But luckily for the TV star - who is marri.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/showbiz/celebrity-news/chris-rosie-ramsey-one-tvs-28648064'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris and Rosie Ramsey one of TV&#39;s most lucrative couples after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJjjTfctSmp4Ghc_3cigTpxULBWrCMJo9uWt-VCsQJZ2mSoO33CyvfsL78qtC5KRauLI57yGUc" alt="Chris and Rosie Ramsey one of TV&#39;s most lucrative couples after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The lovebirds, whose podcast about family life Sh*gged. Married. Annoyed helped them bag a BBC show, upped their earnings by more than £750000 in the last&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heraldscotland.com/news/23157306.rosie-molloy-gives-everything-sheridan-smith-stars-new-comedy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosie Molloy Gives Up Everything: Sheridan Smith stars in new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR45_5Oz-PauIfpZSjyXfoz_HXTjjAG-fcV_Tqjk4rtuz57LQMkLeqinYFxQiqZ_FzjeMDSAiF4" alt="Rosie Molloy Gives Up Everything: Sheridan Smith stars in new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sex, alcohol, drugs, cigarettes, Terry&#39;s Chocolate Oranges … The list goes on. Tell me more. Sheridan Smith plays the titular character in a new Sky Comedy&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}