import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alan Jackson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alan Jackson"/>
        <meta name="description" content="Trending News about Alan Jackson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alan Jackson</h1>
            <Image width={800} height={500} src="https://www.countrythangdaily.com/wp-content/uploads/2022/11/Just-as-I-am-Alan-Jackson.jpg" alt="Alan Jackson"/>
            <h3>Recent News</h3>
            <a href='https://www.countrythangdaily.com/just-as-i-am-alan-jackson/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alan Jackson Delivered a Message of Sin and Forgiveness in &quot;Just ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFoY-fk98RP2TQxKbhpBA3VBKuE_YjMuiDCdPAG-KO48-fB6fhrtyNylgyQCWA49iPcsT54Uh6" alt="Alan Jackson Delivered a Message of Sin and Forgiveness in &quot;Just ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As a devoted Christian, it was no surprise Alan Jackson covered one of the favored gospel songs, &quot;Just As I Am,&quot; which appeared in the album Precious&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}