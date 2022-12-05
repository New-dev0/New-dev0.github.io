import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dolly Parton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dolly Parton"/>
        <meta name="description" content="Trending News about Dolly Parton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dolly Parton</h1>
            <Image width={800} height={500} src="https://npr.brightspotcdn.com/dims4/default/c663150/2147483647/strip/true/crop/3740x1964+0+68/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2014%2F05%2F07%2Fdolly_redfullbodyfinal_wide-3be88f3249ad79f26d17ad66a5e8a18692693f83.jpg" alt="Dolly Parton"/>
            <h3>Recent News</h3>
            <a href='https://www.wvpublic.org/inside-appalachia-2022/2022-12-02/inside-appalachia-looks-back-at-2022-from-historic-floods-to-dolly-parton'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Appalachia Looks Back At 2022: From Historic Floods To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOv4_eAaqpjht5K-2TW5e2KpyBqG2NlPAkZUtdkgIpVUbFn714Q4HfL1xOcGmBA2bidko4fYNP" alt="Inside Appalachia Looks Back At 2022: From Historic Floods To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This week on Inside Appalachia, we look back at some of the stories we told in 2022. We took you to the floods in eastern Kentucky, where you met people who&nbsp;...</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/is-billy-ray-cyrus-related-to-dolly-parton'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Billy Ray Cyrus Related to Dolly Parton?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHVAlln49amcG8cdTWYmUwZW0gE6Je8NpsxDo-sBbpA3-fYj7LPScK0T5qUgxJBUSNi-ky3zhq_w" alt="Is Billy Ray Cyrus Related to Dolly Parton?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Is Billy Ray Cyrus actually related to country music legend Dolly Parton? Here&#39;s what we know about their relationship.</p></div>
            </div>
        </a><a href='https://www.firstcoastnews.com/article/entertainment/dolly-partons-imagination-library-helps-clay-county-girl-learn-braille/77-4600a41f-da59-469f-bad7-4738b9e35d8d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolly Parton&#39;s Imagination Library helps Clay County girl become ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRb5TQlUx2FNoRiLTl6ND8LjOumlvuWTxQ5geqXNKLDALaecLHAgMXqt7gXFifB7GksFCPHE1QT" alt="Dolly Parton&#39;s Imagination Library helps Clay County girl become ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On December 1, RideOut Elementary School student Rosie was a guest on The Kelly Clarkson Show, along with philanthropist and country music diva Dolly Parton.</p></div>
            </div>
        </a><a href='https://governor.ohio.gov/wps/portal/gov/governor/media/news-and-media/Ohio-Governor-Mike-DeWine-and-First-Lady-Fran-DeWine-Celebrate-Dolly-Partons-Imagination-Library-of-Ohio-Milestones-120122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio Governor Mike DeWine and First Lady Fran DeWine Celebrate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7T3WAzlejZjquXHYtVK16EtT8B-0VhmY85KKqXhwxdzSnyiiJOPEKEPyov2gZdyAJYoP5CCSZ" alt="Ohio Governor Mike DeWine and First Lady Fran DeWine Celebrate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio Governor Mike DeWine and Ohio First Lady Fran DeWine announced today two major milestones with Dolly Parton&#39;s Imagination Library of Ohio,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whiskeyriff.com/2022/12/02/dolly-parton-says-two-doors-down-is-about-a-liquid-diet-that-prevented-her-from-eating-fried-clams-with-her-band/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dolly Parton Says “Two Doors Down” Is About A Liquid Diet That ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc-Zuuvv39Y04V0KyX7td9cyi8Jjrho942_qvKYR4ch6dvJJ9x0JJjt9NRiw1sn5AV14TuRdxB" alt="Dolly Parton Says “Two Doors Down” Is About A Liquid Diet That ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This might just be the only country song ever written about fried clams. Dolly Parton recently stopped by the Kelly Clarkson Show, where they covered a ton&nbsp;...</p></div>
            </div>
        </a><a href='https://www.actionnewsjax.com/news/local/clay-county/clay-county-first-grader-gets-sing-with-dolly-parton-kelly-clarkson/B4C7XT2GTVGTFH4UHBAOQIPY6I/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clay County first-grader gets to sing with Dolly Parton and Kelly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZhr9oXLlxYn09FmF8FyW7KIHGUlBsEijPOT4ezhzdtAR0yi1pfjV7L8vnaNxVeoj2YXu4u9M_" alt="Clay County first-grader gets to sing with Dolly Parton and Kelly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before the sing-along, Rosie&#39;s mom Liz got to share with Parton how her Imagination Library program helped Rosie to learn to read and write in Braille.</p></div>
            </div>
        </a><a href='https://www.axios.com/local/columbus/2022/12/02/360k-ohio-children-dolly-parton-book-program'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>360k Ohio children now enrolled in Dolly Parton&#39;s free book program</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZUIHg1aniv9NmtHVyTaCXQKUzK3VlXcVpbow0Sevp-jdcHXyVRl720BB7ymWwQ2EoDhsr7MNr" alt="360k Ohio children now enrolled in Dolly Parton&#39;s free book program" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>More than half of all young children statewide ages 0-5 are in the Imagination Library of Ohio program.</p></div>
            </div>
        </a><a href='https://www.wlwt.com/article/ohio-dolly-partons-imagination-library-10-million-books/42121539'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Over 10 million books delivered to Ohio children as part of Dolly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRY8Cn_EgaaHEP-qTrTzNPX8n_NdAjxVoL7WLuzIT8dX7JyBLTgHhjAdT2U3SFgZOe30QEwjhrR" alt="Over 10 million books delivered to Ohio children as part of Dolly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio leaders are celebrating a major milestone of providing more than 10 million Imagination Library books to children across the state since it started in&nbsp;...</p></div>
            </div>
        </a><a href='https://myfox28columbus.com/gov-dewine-first-lady-fran-celebrate-dolly-partons-imagination-library-milestones-storybook-trails-reading-literacy-ohio-children-free-book-program'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gov. DeWine, first lady celebrate Dolly Parton&#39;s Imagination Library ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKt-5OQVLPPTIZUUc6ZvI4tGAA1RiBEto02a7clhKsSe7qK3nHJWA09guc8f_GGzy-qx4QBtYa" alt="Gov. DeWine, first lady celebrate Dolly Parton&#39;s Imagination Library ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ohio Governor Mike DeWine announced Thursday that Dolly Parton&#39;s Imagination Library of Ohio achieved two major milestones.</p></div>
            </div>
        </a>
        </Template></>;
}