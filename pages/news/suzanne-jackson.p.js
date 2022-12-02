import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suzanne Jackson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suzanne Jackson"/>
        <meta name="description" content="Trending News about Suzanne Jackson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suzanne Jackson</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/Suzanne-Jackson-one-pic.png?strip=all&quality=100&w=1920&h=1080&crop=1" alt="Suzanne Jackson"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/tv/9829990/suzanne-jackson-breaks-silence-dancing-with-the-stars/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Influencer Suzanne Jackson breaks silence following Dancing With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdQz5R6Wbzzr7kMgDRM89kGvwCZ9elj1SaxrswbKfIKah4XOf8L-B2o82cuT36DR1Czd9h_ucm" alt="Influencer Suzanne Jackson breaks silence following Dancing With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>INFLUENCER Suzanne Jackson has broken her silence following the Dancing With The Stars news.The 38-year-old is set to take to the dancefloor this yea.</p></div>
            </div>
        </a>
        </Template></>;
}