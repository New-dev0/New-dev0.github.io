import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>US midterm elections</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,US midterm elections"/>
        <meta name="description" content="Trending News about US midterm elections" /></Head><Template>
            <h1 style={{fontSize: "30"}}>US midterm elections</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/midterms-1.jpg" alt="US midterm elections"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-global/takeaways-from-the-us-midterm-elections-8259450/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US midterm elections: Takeaways so far</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTr1vuC4NxGq3PduWV-QfCM1Pmqrb2qpUYnfPZQo-0AvaYn0KB7f7D6xmUjpTS7B9HkIHUdGra-" alt="US midterm elections: Takeaways so far" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The expected &#39;red wave&#39; is nowhere in sight, but Republicans have still managed to dent Democrats. Meanwhile, LGBTQ+ candidates have made history.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/us-midterm-elections-joe-biden-hails-midterm-polls-as-republicans-make-gains-3506212'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Good Day For Democracy&quot;: Joe Biden Cheers Democrats&#39; Show In ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIV4zr9JPZLK7XYjxjfCR5bbE7_iYxQAbRlt_e0P8VkXnZ679XpkC1O_0yMkPlv6zJTBabx9CN" alt="&quot;Good Day For Democracy&quot;: Joe Biden Cheers Democrats&#39; Show In ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US President Joe Biden on Wednesday hailed a &quot;good day for democracy&quot; after a surprisingly strong performance in midterm elections with Republicans inching&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/international/democratic-party-holds-back-red-wave-in-us-midterm-polls/article66114073.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Democratic Party holds back &#39;red wave&#39; in U.S. midterm polls</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAUKdlcuDAF_HGqXoVSNROclS5Ri7d4AGUYW-iAT1IX_dBGMxr2rB_x6s5RN3rDNOViuUd58QR" alt="Democratic Party holds back &#39;red wave&#39; in U.S. midterm polls" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Pennsylvania, Democrat John Fetterman flipped a Republican-controlled Senate seat key to the party. In the evenly split Senate, battleground was focussed&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/us-midterm-elections-2022-will-donald-trump-run-for-a-third-time-in-2024-presidential-polls/articleshow/95402852.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US midterm elections 2022: Will Donald Trump run for a third time in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_0Pk3FS8JfIQdnGKSrT2abxEsv6s0AqsfnHyyafPT-8dUH0B2NRnDsGqOsguM1iPM4ej3t7HW" alt="US midterm elections 2022: Will Donald Trump run for a third time in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many political pundits in the US expect the Republicans to take hold of the House, which would make the 2024 presidential elections extremely interesting. And&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/us-midterm-elections-results-joe-biden-donald-trump-us-midterm-elections-live-updates-republicans-seek-gains-in-senate-and-house-101667963160223.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US midterms highlights: Prez Biden says &#39;prepared&#39; to work with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyTQsyOA8q3YOjqRWi_l-Md5exmS9D0QWreU427ePblfCNo2jXcNr6w-gxE7KL_zn7wBw2QrIJ" alt="US midterms highlights: Prez Biden says &#39;prepared&#39; to work with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Midterm Elections Results highlights: The Senate race in Pennsylvania between Democrat John Fetterman and Republican Mehmet Oz is too close to call.</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/world/us-midterm-elections-live-updates-counting-on-democrats-vs-republicans-biden-trump-15120411.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Midterm Election highlights: White House optimistic though both ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpkv5y-kGP0IlF2_kKo5St775lQQr3Cl69keLGGAG_JWSfmfiP-Eqqk24HbXsVQajDC6vkCh1A" alt="US Midterm Election highlights: White House optimistic though both ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US midterm elections highlights: Senate incumbents including Democratic leader Chuck Schumer and senior Republican John Thune won re-election in Tuesday&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/world/us-midterm-elections-2022-russian-businessman-claims-russia-interfered-in-us-elections'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Midterm Elections 2022: एक रूसी व्यापारी का सनसनीखेज दावा- रूस ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXufxEPGXcDexbdRQr2RxLx30_182U3OW2f05_6xZzVXL5mvHpmG5mZ52DIVQnqDeX4X2OlaDn" alt="US Midterm Elections 2022: एक रूसी व्यापारी का सनसनीखेज दावा- रूस ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Midterm Elections 2022: जिस समय अमेरिका के मिड टर्म चुनावों में रूस और चीन के दखल देने की चर्चा&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/world-us-canada-63565113'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US midterm elections: The candidates making history</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQCo2tffcV0GzmO8IuDzj31LieXGiZ-CKca9FzNGjTdYqV-X45thb2TQ5kNJsou-jhXMNTXhA5" alt="US midterm elections: The candidates making history" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Republican candidate Katie Britt, 40, will be elected as Alabama&#39;s first woman to serve in the US Senate, according to projections from the BBC&#39;s US partner CBS&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/us-midterm-elections-2022-live-updates-america-votes-to-decide-who-controls-congress-11667908240536.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Midterm Elections 2022: America votes to decide who controls ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmb8ddD1PNEvb3LmRskYupvH_074lcBsgmi0trCpJIZ6tRN7JCNGq28JHredfxF5i6ny9jMuq5" alt="US Midterm Elections 2022: America votes to decide who controls ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Americans cast the final ballots that will determine whether Democrats lose control of Congress, and with it the ability to push forward on President Joe&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/world/us-midterm-elections-donald-trumps-republicans-make-modest-gains-but-joe-bidens-democrats-perform-better-than-expected-2533243.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US Midterm Elections: Republicans make modest gains but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcB7ijtnSPvPNbkJXTYoSJw6knUcc72-Xb2u5huAYo-8rScEBc5ubxJeUJ1YT-MleqxfLVCGhw" alt="US Midterm Elections: Republicans make modest gains but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia US Senate race between Democratic incumbent Raphael Warnock and Republican Herschel Walker will go to a Dec. 6 runoff.</p></div>
            </div>
        </a>
        </Template></>;
}