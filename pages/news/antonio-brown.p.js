import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antonio Brown</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antonio Brown"/>
        <meta name="description" content="Trending News about Antonio Brown" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antonio Brown</h1>
            <Image width={800} height={500} src="https://imagez.tmz.com/image/b7/16by9/2022/11/22/b7b1e0592a5a4ffea98a31ac73413a42_xl.jpg" alt="Antonio Brown"/>
            <h3>Recent News</h3>
            <a href='https://www.tmz.com/2022/11/22/antonio-brown-fake-gisele-nude-pic-bizarre-tom-brady-beef/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown Posts Fake Gisele Nude Pic Amid Bizarre Tom Brady ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTWrImXmXja_TW3OAawQFqGS5jf9Vs5dqpEPWJ1CFkjCP8jF8yhhIVvtgjD--EyBCyKXQRUH4xz" alt="Antonio Brown Posts Fake Gisele Nude Pic Amid Bizarre Tom Brady ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown posted a clearly photoshopped nude pic of Gisele Bündchen on his social media page amid his ongoing feud with Tom Brady.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/nfl/tampa-bay-buccaneers/2022/11/22/637d4132268e3ee5068b460f.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown posts a Gisele Bündchen nude doctored photo in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRZPyvdBS7M6dEy7vce6f36n4FOSPCuO7yMjDxu7yeXuuxnLQ4SXrU569JeVYA1JGfJff2J-VP" alt="Antonio Brown posts a Gisele Bündchen nude doctored photo in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At this point, it is unclear if Antonio Brown is trying to shoot his shot with the super model or if he just has a vendetta against Tom Brady. All we know is&nbsp;...</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/22/antonio-brown-posts-nude-photoshopped-gisele-bundchen-photo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown allegedly posts nude Photoshopped Gisele ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6C0bk3OSkQzX7s4SBlGlMXB9bAEl7RzdMIlaauIZsNRATcoj0aTY9mFRpf12cyzsQ9EBgtKXi" alt="Antonio Brown allegedly posts nude Photoshopped Gisele ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown posted a naked Photoshopped picture of Gisele Bündchen to his Snapchat on Monday after her divorce from Tom Brady.</p></div>
            </div>
        </a><a href='https://larrybrownsports.com/football/antonio-brown-fake-nude-photo-gisele-snapchat/607569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown shares fake nude photo of Gisele on Snapchat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmcJKAqgnFtE64G6OMPzSKZATGA3o9ug8KWP7WuSaxbCu5BcWvDU1UA3UuqmQicLIsLbI_x6ce" alt="Antonio Brown shares fake nude photo of Gisele on Snapchat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nov 8, 2020; Tampa, Florida, USA; Tampa Bay Buccaneers receiver Antonio Brown before the game against the New Orleans Saints at Raymond James Stadium.</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/nfl/news-antonio-brown-takes-another-wild-shot-tom-brady-ex-wife-gisele-bundchen-s-doctored-risque-pictures'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown takes another wild shot at Tom Brady with ex-wife ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6f2lqEJRbg_agoI9IRC1gFDnt1lfl6TiLPyNE0C4vO2lPDHCagguG2xCELOTm1tLmunqdipEW" alt="Antonio Brown takes another wild shot at Tom Brady with ex-wife ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown seemingly has no boundaries, especially when it comes to social media. And the former NFL star may have crossed a line again, with another&nbsp;...</p></div>
            </div>
        </a><a href='https://torontosun.com/sports/football/antonio-brown-posts-fake-nude-of-gisele-for-some-reason'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antonio Brown posts fake nude of Gisele for some reason</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Antonio Brown posts fake nude of Gisele for some reason" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Brown&#39;s bizarre behaviour continues.The former superstar NFL wide receiver who has had a number of head injuries, has taken to trolling one of his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}