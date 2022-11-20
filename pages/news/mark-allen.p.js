import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mark Allen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mark Allen"/>
        <meta name="description" content="Trending News about Mark Allen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mark Allen</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/19/3493083-71208833-2560-1440.jpg" alt="Mark Allen"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.com/snooker/uk-championship/2022-2023/ronnie-osullivan-says-mark-allen-looks-more-comfortable-and-consistent-following-weight-loss_vid1778206/video.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronnie O&#39;Sullivan says Mark Allen &#39;looks more comfortable and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4Xv5zDuviz-40lXcVFNe1OSKxFf5ylZqsV2NWRO9v1CdMFNbdloQdPK7vjJwE2uGip0rPmhqP" alt="Ronnie O&#39;Sullivan says Mark Allen &#39;looks more comfortable and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Allen has had a great season so far, including the defence of his Northern Ireland Open title, and is in the semi-finals of the UK Championship. Stream the 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}