import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Graham Norton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Graham Norton"/>
        <meta name="description" content="Trending News about Graham Norton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Graham Norton</h1>
            <Image width={800} height={500} src="https://img.resized.co/hotpress/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLmhvdHByZXNzLmNvbVxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTFcXFwvMjMxMTM0MTBcXFwvR1JBSEFNLU5PUlRPTl8yY3JlZGl0LVNvcGhpYS1TcHJpbmctMS0xLWUxNjY5MjAzMzExNjg0LmpwZ1wiLFwid2lkdGhcIjo2NDcsXCJoZWlnaHRcIjozNDAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5ob3RwcmVzcy5jb21cXFwvaVxcXC9uby1pbWFnZS5wbmc_dj04XCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjhhMDA5ZjQwNmI3NGQyZThhZDhlNzc5NzBlY2Q0ZDIxNTQ3NDdlYjAifQ==/graham-norton-2credit-sophia-spring-1-1-e1669203311684.jpg" alt="Graham Norton"/>
            <h3>Recent News</h3>
            <a href='https://www.hotpress.com/opinion/graham-norton-i-would-watch-the-late-late-show-and-fantasise-about-being-a-guest-it-never-crossed-my-mind-to-be-the-other-person-the-guy-in-the-chair-22939781'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Graham Norton: &quot;I would watch &lt;i&gt;The Late Late Show&lt;/i&gt; and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTLS_igefmouqhJvrAZuZcUBjHdvKymS27T6hNIi7CpSaCMd_mzCx0AWdSELIeWKRClP4VhEff" alt="Graham Norton: &quot;I would watch &lt;i&gt;The Late Late Show&lt;/i&gt; and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Graham Norton having just published his latest novel, the witty and compelling Forever Home, Paul Nolan turns the tables on the superstar talk-show ho.</p></div>
            </div>
        </a><a href='https://www.buzz.ie/tv/graham-norton-show-lineup-friday-28505899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here is the line-up for this Friday&#39;s Graham Norton Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRplq-VWCiLCVM_LXo4wSu1o9rX4nOzx3ON5vSHAATIgJNdVi3thQC5d7--F1cStBBizeYgYH4N" alt="Here is the line-up for this Friday&#39;s Graham Norton Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A former James Bond, a two-time Oscar winner and an acting legend are lined up to appear on this week&#39;s episode of the hugely popular BBC chat show.</p></div>
            </div>
        </a>
        </Template></>;
}