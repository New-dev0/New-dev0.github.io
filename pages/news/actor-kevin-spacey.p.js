import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Actor Kevin Spacey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Actor Kevin Spacey"/>
        <meta name="description" content="Trending News about Actor Kevin Spacey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Actor Kevin Spacey</h1>
            <Image width={800} height={500} src="https://staticc.sportskeeda.com/editor/2022/11/7f09d-16686946144189-1920.jpg" alt="Actor Kevin Spacey"/>
            <h3>Recent News</h3>
            <a href='https://www.sportskeeda.com/wwe/bray-wyatt-s-now-deleted-message-kevin-spacey-why-tweet-controversial-actor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bray Wyatt&#39;s now-deleted message for Kevin Spacey: What did he ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNlongkrYQYZLuG0vcz25y9r9m1JCTrfG3fI83bqWQ7fYHQZGR8VbkglaIlWKo_OcOXh3Ad1ro" alt="Bray Wyatt&#39;s now-deleted message for Kevin Spacey: What did he ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WWE Superstar Bray Wyatt received severe backlash on social media after interacting with American actor Kevin Spacey.</p></div>
            </div>
        </a>
        </Template></>;
}