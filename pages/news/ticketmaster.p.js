import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TicketMaster</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TicketMaster"/>
        <meta name="description" content="Trending News about TicketMaster" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TicketMaster</h1>
            <Image width={800} height={500} src="https://townsquare.media/site/366/files/2022/11/attachment-Kurt-Cobain-Kid-Rock.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" alt="TicketMaster"/>
            <h3>Recent News</h3>
            <a href='https://loudwire.com/musicians-telling-truth-about-ticketmaster/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musicians Telling the Truth About Ticketmaster</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRt-w0-53UpLDptQWSHe78Tf0c98wChnbNOpWXx2vs3NC8jnTZFeuPHv0MREvOarStkwuCOjrCu" alt="Musicians Telling the Truth About Ticketmaster" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He says he did it by working with Live Nation (Ticketmaster&#39;s parent company) and taking a pay cut on his end of concert ticket revenue. Kid Rock also called&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bizjournals.com/bizwomen/news/latest-news/2022/11/swifties-citi-analyst-live-nation-ticketmaster.html?page=all'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sorry, Swifties: Citi analyst says a Live Nation/TicketMaster breakup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQa6otdfxR1L2f9d4lK6N-2E_CFlpTVG_1uI5zFh79SRRDT7wgN7LdHp4nGqqDvnKAeLnVdf5k9" alt="Sorry, Swifties: Citi analyst says a Live Nation/TicketMaster breakup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frustrated fans called for the conglomerate to be split apart after a ticket presale for Swift&#39;s upcoming tour was riddled with problems, saying Live&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}