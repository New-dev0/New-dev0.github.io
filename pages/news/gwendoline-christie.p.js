import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gwendoline Christie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gwendoline Christie"/>
        <meta name="description" content="Trending News about Gwendoline Christie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gwendoline Christie</h1>
            <Image width={800} height={500} src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1060%2C413%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F11%2F22%2FWEDNESDAY-Gwendoline-Christie-Larissa-Weems.jpg" alt="Gwendoline Christie"/>
            <h3>Recent News</h3>
            <a href='https://ew.com/tv/gwendoline-christie-wednesday-beautiful-principal-weems/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gwendoline Christie says &lt;em&gt;Wednesday&lt;/em&gt; is &#39;the first time I ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXtpFkxaJX9OhFmGj9lS3Iii5vjFxgvLXW5WD30U2fCGnHMAB5IOT8WkL0U3UWBws3Xz50vSSh" alt="Gwendoline Christie says &lt;em&gt;Wednesday&lt;/em&gt; is &#39;the first time I ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gwendoline Christie turned to Hitchcock films for inspiration for her &#39;Wednesday&#39; character, Principal Weems. She tells EW that the experience was the&nbsp;...</p></div>
            </div>
        </a><a href='https://screenrant.com/wednesday-gwendoline-christie-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gwendoline Christie Interview: Wednesday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSL9D-sEpVKRmYjLl2zEicPzCBKjdZ9Ya6S5JwSA8BPya-8IbbIUPVDKwgPfBPldQSTPcm2JpRg" alt="Gwendoline Christie Interview: Wednesday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wednesday star Gwendoline Christie breaks down Larissa Weems&#39; arc, her feelings about her newest student, and her dynamic with Morticia Addams.</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/tv/reality-tv/a42057099/wednesday-gwendoline-christie-afraid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wednesday&#39;s Gwendoline Christie reveals why she was afraid to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTOv5iLOdQ_aH0dWyHX1x543zhO-zMFDswkY8wSqJh5tc9NgzC3cse0GH2qGkoY4pFwLOPqWwOe" alt="Wednesday&#39;s Gwendoline Christie reveals why she was afraid to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s that new character aspect that made Christie a bit nervous, as she told Digital Spy exclusively. gwendoline christie, wednesday. Netflix.</p></div>
            </div>
        </a><a href='https://www.cheatsheet.com/entertainment/wednesday-gwendoline-christie-inspired-by-hitchcock-look-larissa-weems.html/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Wednesday&#39;: Gwendoline Christie Was Inspired by Hitchcock for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyV80jkEO6ojWVKmy07A4_9x6Q4qNsdEGeJ5jIBq4MuaPjRIzll4b0oa2u8Dq8UFXqGH6n_jvx" alt="&#39;Wednesday&#39;: Gwendoline Christie Was Inspired by Hitchcock for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gwendoline Christie had control over her &#39;Wednesday&#39; chracter, Larissa Weems. Find out which actors were her inspiration.</p></div>
            </div>
        </a><a href='https://epicstream.com/article/gwendoline-christie-shares-tim-burtons-wednesday-casting-call'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gwendoline Christie Gushes About Tim Burton Casting Her On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQB6HJ32BZx4l1tTUC_rdJSfRMIfOaVOknQZSlaJF-T0UrM23Z5fWqAopcSXk0GQfqkH7ehKZaF" alt="Gwendoline Christie Gushes About Tim Burton Casting Her On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You may know Gwendoline Christie for her famous roles as Brienne of Tarth in Game of Thrones and as Lucifer in The Sandman, and recently, she has debuted as&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}