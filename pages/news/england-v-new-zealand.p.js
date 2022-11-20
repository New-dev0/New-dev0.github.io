import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England v New Zealand</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England v New Zealand"/>
        <meta name="description" content="Trending News about England v New Zealand" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England v New Zealand</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28536061.ece/ALTERNATES/s1200/0_269855627.jpg" alt="England v New Zealand"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/rugby-union/england-v-new-zealand-player-28536050'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v New Zealand player ratings as hosts complete stunning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8L-LNKd32keGg9DCoM5OvAzYJ4nuEw-yE14p5cauwuT3malrtATk26-UoSivleH-CyO1HzXOp" alt="England v New Zealand player ratings as hosts complete stunning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Freddie Steward: Touched down in the closing stages as part of a stunning comeback, but New Zealand had limited his involvement until then. 7/10.</p></div>
            </div>
        </a><a href='https://www.planetrugby.com/news/autumn-nations-series-five-takeaways-from-england-v-new-zealand-as-the-hosts-spare-their-blushes-after-70-minutes-of-all-blacks-dominance'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autumn Nations Series: Five takeaways from England v New ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-X0nl1hYGHilYuJjypfmHG5Mzm1GB-Ao-VRQnpupZeql-YdwfNp0elyK83RCoIuWUFNTjqbmP" alt="Autumn Nations Series: Five takeaways from England v New ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following a 25-25 draw between England and New Zealand in their Autumn Nations Series fixture, here&#39;s our five takeaways from the match at Twickenham.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/england-v-new-zealand-player-ratings-freddie-steward-superb/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v New Zealand player ratings: Who was &#39;taken to the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYrf-5ZWm-y-5G0bSMjovYOCXAQGyv1C2O4t32sBbvvn8NVauEbzJhxJD5sspTMhuPVwHU85hH" alt="England v New Zealand player ratings: Who was &#39;taken to the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England fought back late on to clinch a thrilling draw at Twickenham - here&#39;s how we rated the players on both sides.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/19/england-new-zealand-autumn-nations-series-rugby-union-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Stuart stuns New Zealand to rescue remarkable draw for England</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd7E2D_-u6aM4Qe1Dagiwl2uxrEYoKFYxTPgh5C70QYjinEu8L96o1clwYNsvk4duQuqewVRyi" alt="Will Stuart stuns New Zealand to rescue remarkable draw for England" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stuart&#39;s close-range brace, sandwiched either side of a Freddie Steward score, yielded the first Twickenham draw in this fixture for 25 years. The All Blacks&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/time-england-all-blacks-tv-25537564'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England v New Zealand kick-off time, TV channel and team news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-SXqamMHSwpj_fGnQY-gvMFwl_xFe0HtY18T6s8wRXMeneRcH2_Lx3p6Obf3ssSsXYW1eopqU" alt="England v New Zealand kick-off time, TV channel and team news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The All Blacks are unbeaten so far this autumn but England will be hoping for a repeat of the 2019 World Cup semi-final, the last time these two sides met&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/all-blacks-player-ratings-vs-england-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All Blacks player ratings vs England | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPN-WKR1inlB1oMlSz_uC58divbRGNvWTKbkOZH4BFWL0rYHUZDBcqoWF1lXua7gdQ9bGNo3Uw" alt="All Blacks player ratings vs England | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The All Blacks have drawn 25-all with England at Twickenham after letting their foot off the gas late in the piece. Who were the best performers in the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}