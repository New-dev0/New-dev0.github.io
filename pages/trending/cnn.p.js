import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CNN</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CNN"/>
        <meta name="description" content="Trending News about CNN" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CNN</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/636bede836c5424c3faf29b7/0x0.jpg?format=jpg&width=1200" alt="CNN"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/markjoyella/2022/11/09/cnn-hits-historic-low-on-election-night-falling-to-third-place-overall-for-first-time-in-history/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CNN Hits Historic Low On Election Night, Falling To Third Place ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScJMnOwaU6KPhdX-fEuWPNGd0Pnv2HQje9-cE8YHoJ-_qBot0PBa4u1eLtggwF9P0iLT4RtSLQ" alt="CNN Hits Historic Low On Election Night, Falling To Third Place ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MSNBC Election. Rachel Maddow, Nicolle Wallace and Joy Reid anchoring MSNBC&#39;s live coverage on Election Night with ... &middot; Kornacki Elex &middot; Fox News Ratings.</p></div>
            </div>
        </a><a href='https://cnnpressroom.blogs.cnn.com/2022/11/09/cnn-to-exclusively-air-michelle-obamas-mission-empowering-girls/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CNN TO EXCLUSIVELY AIR MICHELLE OBAMA&#39;S MISSION ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGSEo96WNui2WNhZBoTwI964U0aTFsdBxChBGhrDViVSl9wJagea8QetAZeJrom50x2nxu0qGt" alt="CNN TO EXCLUSIVELY AIR MICHELLE OBAMA&#39;S MISSION ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Featuring CNN&#39;s Sara Sidner in Conversation with Michelle Obama, Amal Clooney, and Melinda French Gates. Event Airs Sunday, November 20<sup>th</sup> at 8pmET/PT.</p></div>
            </div>
        </a><a href='https://cnnpressroom.blogs.cnn.com/2022/11/09/midterm-ratings-cnn-2022-demo-win/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CNN Ahead of All Broadcast in the P25-54 Demo During 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfDHJewAWNqZ6qgubKTyXWjndBOVDPGyNajY6LGrRhQ78BFPs2KPADCWeGNPO-ViNlRrJmVt9g" alt="CNN Ahead of All Broadcast in the P25-54 Demo During 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Up +18% in Total Viewers from Last Democratic Midterm in 2014 Biggest Midterm Ever for CNN Digital with Nearly 10 Million Starts of Live TV Feed Final&nbsp;...</p></div>
            </div>
        </a><a href='https://www.adgully.com/cnn-s-going-green-spotlights-the-young-environmentalists-124850.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CNN&#39;s &#39;Going Green&#39; spotlights the young environmentalists</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKjyejr_nRLYYb8gSe0ckWMdM9oOhjAr4VYPk6TxXKLvOgEgjxXztZ2szHxedodv-A9nVArMr6" alt="CNN&#39;s &#39;Going Green&#39; spotlights the young environmentalists" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Protecting our planet has never been more important than it is today. Whether it&#39;s finding alternative energy solutions or cleaning up our coastlines,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/business/story/2022-11-09/midterm-ratings-msnbc-finishes-ahead-of-cnn-for-the-first-time-while-fox-news-wins-the-night'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MSNBC&#39;s election coverage finishes ahead of CNN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSB8zLyjwtE8eaejmCL6yePMaxIyl2hjOCFTceLZjb-KKNfYgGQ00r-GzTRgqFKG5WHOJjQjTVI" alt="MSNBC&#39;s election coverage finishes ahead of CNN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fox News scored the most viewers on election night, but all the networks were down from 2018 as traditional TV viewing declines.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/09/business/media/election-night-tv-ratings-midterms.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A rare win for MSNBC over CNN in the election night ratings battle.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsnpNCCAW4eDL3NtXaUVsWLY1oRVSnNMgVm5FH_-rJBXLVmt8pwO-AhGH14fdHueCNTKtAqIY9" alt="A rare win for MSNBC over CNN in the election night ratings battle." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tuesday&#39;s overall viewership, down sharply from 2018, was the smallest total prime-time audience for a midterm election night since 2014.</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/did-wolf-blitzer-retire'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Did Wolf Blitzer Retire? He Wasn&#39;t Anchoring CNN&#39;s Election ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9X4xLqTB6K92QC0jcZw7QjdDvatluqykYto6FnRM9X5RA4DvyLHlSdB4pgmUwL8z20luDBrnH" alt="Did Wolf Blitzer Retire? He Wasn&#39;t Anchoring CNN&#39;s Election ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wolf Blitzer has anchored CNN&#39;s election night coverage since 2004, so why wasn&#39;t he anchoring the network&#39;s coverage on Nov. 8. 2022? Did he retire?</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/fox-news-midterms-viewership-msnbc-cnn-joe-biden-1235168046/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Midterms 2022 Attract Over 25M Viewers, Double-Digit Drop From ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTztdkA41SWQVRd8ZG2QKHtRAOqiQrX8tJxbm9R8kjHGlMkjMaudNHcYMB5VJJLbkxCREI6TXMV" alt="Midterms 2022 Attract Over 25M Viewers, Double-Digit Drop From ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UPDATE, 3:29 PM: The balance of power in Washington DC is still to be determined, but the final votes have been counted up for small screen coverage of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}