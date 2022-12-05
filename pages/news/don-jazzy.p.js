import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Don Jazzy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Don Jazzy"/>
        <meta name="description" content="Trending News about Don Jazzy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Don Jazzy</h1>
            <Image width={800} height={500} src="https://netstorage-legit.akamaized.net/images/288301e85f4465ad.jpg" alt="Don Jazzy"/>
            <h3>Recent News</h3>
            <a href='https://www.legit.ng/entertainment/celebrities/1507468-touching-dorobucci-era-nigerians-pick-don-jazzys-mavin-crew-current-one/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Nothing Is Touching Dorobucci Era”: Nigerians Pick Don Jazzy&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLUaAHGpCQAeUvC-M5dWdKvzG1853haOWRLeVDM0RjRdgmnWniXzeso9JPKLzW_7cGnrUJo5bG" alt="“Nothing Is Touching Dorobucci Era”: Nigerians Pick Don Jazzy&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Popular Nigerian producer Don Jazzy owns Mavins record label, currently home to some of the daily trending artistes in the country; Before Rema,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}