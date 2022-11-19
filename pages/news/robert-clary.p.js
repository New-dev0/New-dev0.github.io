import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Robert Clary</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Robert Clary"/>
        <meta name="description" content="Trending News about Robert Clary" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Robert Clary</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/18/ap22321020720808_wide-82a727be67f15f995e18f213ac02fbcc35510046-s1400-c100.jpg" alt="Robert Clary"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/18/1137601639/robert-clary-the-last-star-of-the-hogans-heroes-dies-at-96'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, the last star of the &#39;Hogan&#39;s Heroes,&#39; dies at 96</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNrt3HrZNQ64_G-l7k-Ype2kHNIldoFZNRpZwyvVsD4I4d6Yc1PVFmHoqROIrxi-eb3Yh3lQ2S" alt="Robert Clary, the last star of the &#39;Hogan&#39;s Heroes,&#39; dies at 96" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A French-born survivor of Nazi concentration camps during World War II, Robert Clary began his career in entertainment as a nightclub singer.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/18/entertainment/robert-clary-actor-holocaust-hogans-heroes-scli-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, &#39;Hogan&#39;s Heroes&#39; star who survived the Holocaust ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdufxzIuXjEpFFtTjsM69HgqvDmwfXLnMhqJDC8JxI8bOrqmbHuDJXmTzsV1zKqdREZk3V1z5J" alt="Robert Clary, &#39;Hogan&#39;s Heroes&#39; star who survived the Holocaust ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris-born actor and singer Robert Clary, who survived 31 months in Nazi concentration camps but later co-starred in &quot;Hogan&#39;s Heroes,&quot; the US sitcom set in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/obituaries/2022/11/17/robert-clary-hogans-heroes-actor-dead/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, &#39;Hogan&#39;s Heroes&#39; actor, dies at 96</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRT6giqfvU3LH8G-kJzcwmxLpQK3JtEclaDzHCj9vkg9a6aVskiVA-QmDSUNCE5SaZemQaU9R-w" alt="Robert Clary, &#39;Hogan&#39;s Heroes&#39; actor, dies at 96" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He was a survivor of Nazi concentration camps during World War II and late in life spoke about his experiences, including the killing of 12 of his family&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/arts/television/robert-clary-dead.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, Who Took a Tragic Journey to &#39;Hogan&#39;s Heroes,&#39; Dies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgSsuQVTAS3s-vJ-QaEXnRiUoqLRCew3s9shqP169wRGoN1d4ChK4Av4iEKrwSRFzg2viQR7V-" alt="Robert Clary, Who Took a Tragic Journey to &#39;Hogan&#39;s Heroes,&#39; Dies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After surviving concentration camps as a youth, he went on to star on the hit 1960s sitcom set in a German prisoner-of-war camp.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/us/robert-clary-holocaust-survivor-who-starred-tvs-hogans-heroes-dies-96-2022-11-17/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, Holocaust survivor who starred in TV&#39;s &#39;Hogan&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHw8fZ1nYmOb6JJCYerLBBEAbxhglZoddHuY7yIHXHJxe-3ANsiF_ZBMr6M8OycSFAVW05D7Kz" alt="Robert Clary, Holocaust survivor who starred in TV&#39;s &#39;Hogan&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Clary, the diminutive Paris-born actor and singer who survived 31 months in Nazi concentration camps but later had no qualms about co-starring in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.avclub.com/rip-robert-clary-hogan-s-heroes-star-holocaust-survivor-1849797908'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R.I.P. Robert Clary, Hogan&#39;s Heroes star, Holocaust survivor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP2nDyBq5Qq-UDyrKWL9lLsrx44vxSf2JZCjQeTwQ1JxbtraA43E38HqbmMKlkif5VWyLyYKP3" alt="R.I.P. Robert Clary, Hogan&#39;s Heroes star, Holocaust survivor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Clary, who played the French chef Corporal Louis LeBeau on Hogan&#39;s Heroes, has died. Clary&#39;s granddaughter Kim Wright confirmed to The Hollywood&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/obituaries/story/2022-11-17/robert-clary-holocaust-survivor-and-last-of-the-hogans-heroes-stars-dies-at-96'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Clary, ex-Nazi prisoner and last &#39;Hogan&#39;s Hero,&#39; dies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPDQGYxV5JUTN3pYG-I88y0wBRloNFzV86aW65H4O4RiFuqXjMRna9_VUQV3XvxAN-H2Id5sEY" alt="Robert Clary, ex-Nazi prisoner and last &#39;Hogan&#39;s Hero,&#39; dies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actor Robert Clary, a Nazi concentration camp survivor who played a prisoner of war in the improbable sitcom &#39;Hogan&#39;s Heroes,&#39; dies at 96.</p></div>
            </div>
        </a>
        </Template></>;
}