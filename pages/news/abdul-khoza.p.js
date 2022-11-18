import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Abdul Khoza</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Abdul Khoza"/>
        <meta name="description" content="Trending News about Abdul Khoza" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Abdul Khoza</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7707/b6420707cbde4dde9e2c85a5fe4a1fc0.jpg" alt="Abdul Khoza"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/truelove/celebrity/the-wife-cast-bids-farewell-to-abdul-khoza-he-created-that-unity-hes-so-talented-we-love-you-abdul-20221117'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Wife cast bids farewell to Abdul Khoza - &#39;He created that unity ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR48bpv1hal6BNvPM4kQFvH5OBteh-zpxgbghTWxECni9HCQgBsfrdbm9S3gtdiGCgzsas1WK7z" alt="The Wife cast bids farewell to Abdul Khoza - &#39;He created that unity ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warning: Spoilers ahead. In a sombre turn of events, Abdul Khoza – who plays Nqoba Zulu on The Wife, exits the show. The flamboyant character is anonymously&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/tshisa-live/tshisa-live/2022-11-17-showmax-confirms-abdul-khozas-exit-from-the-wife-as-stars-bid-farewell-to-nqoba/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Showmax confirms Abdul Khoza&#39;s exit from &#39;The Wife&#39; as stars bid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvFVYwzPNOkrohSRnr-NKZlsp9_4C6aRiImrhJ5Y-YuIO7d8XITTLlaa2_aR9jvtvTGfl7BVY2" alt="Showmax confirms Abdul Khoza&#39;s exit from &#39;The Wife&#39; as stars bid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The actor played “Nqoba Zulu”, a role for which he clinched Favourite Actor at this year&#39;s DStv Mzansi Viewers&#39; Choice Awards and Golden Horn for Best&nbsp;...</p></div>
            </div>
        </a><a href='https://briefly.co.za/entertainment/tv-shows/146157-abdul-khoza-bids-farewell-wife-sa-heartbroken/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Wife&#39; Actor Abdul Khoza Bids Farewell to the Showmax Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTntTa9V8v8xHhN6e_E3kE0y_LngUy_0mMXKRdGQ6ZEoDMzYWbncEd02hNlAQeYqX03fdQk2Iy7" alt="&#39;The Wife&#39; Actor Abdul Khoza Bids Farewell to the Showmax Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Showmax confirmed that Abdul Khoza will be exiting &#39;The Wife&#39; and SA is devastated by the news. They said after his farewell there won&#39;t be a point in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/culture/entertainment/breaking-the-wife-fans-abdul-khoza-nqoba-zulu-dies-17-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Come back as a ghost&#39;: &#39;The Wife&#39; fans bid farewell to Abdul Khoza</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSc1EChxKUWZULP0-PByZGYBUEn87jxMuvLv2mxme-eOdjjbW2ff2xJTgL_aI_QpwGYljTzgHVS" alt="&#39;Come back as a ghost&#39;: &#39;The Wife&#39; fans bid farewell to Abdul Khoza" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;The Wife&#39; fans and cast members are bidding farewell to award-winning actor Abdul Khoza, who played the fan-favourite role of Nqoba.</p></div>
            </div>
        </a>
        </Template></>;
}