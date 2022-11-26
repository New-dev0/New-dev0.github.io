import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Walliams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Walliams"/>
        <meta name="description" content="Trending News about David Walliams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Walliams</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/801e75983d04edc1fc755cb7ed852d3ab4fca6bb/0_31_5456_3276/master/5456.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7b68b27b584b72e19b818d08d50ad059" alt="David Walliams"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/tv-and-radio/2022/nov/25/david-walliams-future-as-britains-got-talent-judge-up-in-the-air'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Walliams expected to quit as Britain&#39;s Got Talent judge</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7exvlIOj2r4UqFRZoCp3yNLIOwbM000mHRaC1M3145CISmZ7v31o0JLJXIPW2FaixC7yvuD7p" alt="David Walliams expected to quit as Britain&#39;s Got Talent judge" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reports suggest comedian is to step down, though BGT spokesperson says no decision made after apology for &#39;disrespectful comments&#39;</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/tv/amanda-holden-insists-shes-team-28587532'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amanda Holden insists she&#39;s &#39;team David Walliams&#39; amid Britain&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTd8wT_FtyKKmwTOU5cmtyTfOV3S23Zv6rQnPSpFAZv5xzc_OU4vghGFBDlxo2O-c6l71-z8Ed" alt="Amanda Holden insists she&#39;s &#39;team David Walliams&#39; amid Britain&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Walliams&#39; Britain&#39;s Got Talent co-star and close friend Amanda Holden has continued to back him amid the leaked recordings scandal.</p></div>
            </div>
        </a><a href='https://www.fm104.ie/news/buzz/david-walliams-quits-popular-tv-show-after-10-years/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Walliams &#39;quits&#39; popular TV show after 10 years</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQc3eBXjAJvc-G4DVlkyE4X74yEm0RqlS5J99cTROacnFNflQdYOZTrVz7OVeTY016vOYhDGS7i" alt="David Walliams &#39;quits&#39; popular TV show after 10 years" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The BGT judge, 51, was forced to apologise earlier this year after comments he made about contestants on the ITV show were leaked. A leaked transcript from the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/tv/reality-tv/a42071205/britain-s-got-talent-amanda-holden-supports-david-walliams/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Britain&#39;s Got Talent judge Amanda Holden shares support for David ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQBMWVi-RRhLYKo9SpyeIIHZgxfLLHiodZ3nIjd8aquHy89s1RyCNpCVXoay_dW3NYn6a9sDD0H" alt="Britain&#39;s Got Talent judge Amanda Holden shares support for David ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Britain&#39;s Got Talent judge Amanda Holden has shared her support for fellow judge David Walliams amid rumours of a panel shake-up.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9796634/oti-mabuse-bgt-judge-david-walliams/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Strictly legend tipped to take over from David Walliams on BGT...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcScLGZ3z48ZpaiMpGjUThkaFT8A3VIKdb4o921ZkFIlrBvwknhJqt4IxOWIF9rrWFbFv5e16Urf" alt="Strictly legend tipped to take over from David Walliams on BGT..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Strictly Come Dancing legend is tipped to take over from David Walliams as a judge on Britain&#39;s Got Talent.The Sun revealed yesterday that David, 51.</p></div>
            </div>
        </a><a href='https://www.edinburghnews.scotsman.com/read-this/david-walliams-quits-as-itv-judge-for-britains-got-talent-after-controversial-comments-about-contestants-3931168'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Walliams &#39;quits&#39; as ITV judge for Britain&#39;s Got Talent - after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqDtOfT1HBjZ-ldCSWHuSX4TxohwC2P0VyhLwBw0hL8O9eigbUJxA7rrgzA021xHl3rJ86cxxh" alt="David Walliams &#39;quits&#39; as ITV judge for Britain&#39;s Got Talent - after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Britain&#39;s Got Talent judge David Walliams has faced backlash over vile off-camera comments made about contestants of the ITV show.</p></div>
            </div>
        </a><a href='https://www.joe.ie/movies-tv/david-walliams-quits-britains-got-talent-offensive-comments-760410'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>David Walliams reportedly quits Britain&#39;s Got Talent after making ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSX0DhfBdgcwuYns0kbJPeAZFu__oi7SlE5FEFYa9VJGmL8Y-MTnFp5lWMc2j_BSn6UI3utheRt" alt="David Walliams reportedly quits Britain&#39;s Got Talent after making ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Transcripts from 2020 revealed earlier this month that the judge had called a pensioner a &#39;c***&#39; during filming for BGT and said of another contestant: “She&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}