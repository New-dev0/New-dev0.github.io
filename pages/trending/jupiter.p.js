import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jupiter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jupiter"/>
        <meta name="description" content="Trending News about Jupiter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jupiter</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Jupiter_1_3-647x363.jpeg?M_xv1NLg0U_gv.NuUNcCYCN47KccQGiD" alt="Jupiter"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatoday.in/science/story/watch-live-jupiter-comes-closest-to-earth-in-59-years-it-won-t-for-next-107-years-2005006-2022-09-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH LIVE | Jupiter comes closest to Earth in 59 years, it won&#39;t for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRB-zypjGe7jU7OAnkgosPGQ2em2YEDTzuSL5UDN6e_YB8cbvU1waYO3RSwLixq7dzEpTeBIE0d" alt="WATCH LIVE | Jupiter comes closest to Earth in 59 years, it won&#39;t for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jupiter is at its closest to the Sun in 59 years, making it an unmissable celestial event as the planet will not be this close for another 107 years.</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/international/jupiter-to-be-closest-to-earth-in-59-years-today-here-s-how-to-watch-122092600823_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jupiter to be closest to Earth in 59 years today; heres how to watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsMGvvWoaKv35mTBw58QqGiaHtTMaryKyyw9XmtonYrlmV2r2uXZFpdeICCkcLHb9NApNvx-4b" alt="Jupiter to be closest to Earth in 59 years today; heres how to watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the National Aeronautics and Space Administration (NASA), opposition occurs when any astronomical object rises in the east as the Sun and sets in&nbsp;...</p></div>
            </div>
        </a><a href='https://gizmodo.com/jupiter-closest-approach-binoculars-1849581096'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Look at Jupiter With Binoculars Tonight</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyJnnk706X4VSlcI_ICrK3nHFHKmGKNQWMse_7XgubrKTbDZCA078fIdrGABoNzdNzYo4fAx0D" alt="Look at Jupiter With Binoculars Tonight" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The gas giant is making its closest approach to Earth in 59 years.</p></div>
            </div>
        </a><a href='https://youthistaan.com/the-wait-of-59-years-is-over-jupiter-came-close-to-the-earth-now-this-wonderful-sight-will-be-seen-after-107-years/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The wait of 59 years is over, Jupiter came close to the earth, now this ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGqLSzK55OadjXN7fYQsV2v7smmYmOignMidxs87dd_Z_oeI3d1M7eRCMGkO1puLTTMwLt9Aq5" alt="The wait of 59 years is over, Jupiter came close to the earth, now this ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is a good news for the people interested in the field of space. Jupiter (Jupiter), the largest planet in the solar system, has come very close to the&nbsp;...</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/dont-miss-jupiters-closest-date-with-earth-in-59-years/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t miss Jupiter&#39;s closest date with Earth in 59 years | News Room ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSu1SNVTDhjuuphhPILkP2mVVNsFvR18vIU6bzy7Q2OM5VnN7Ry_-rh1L00ob5xbbmgEtlsGNIJ" alt="Don&#39;t miss Jupiter&#39;s closest date with Earth in 59 years | News Room ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Stargazers: Jupiter will make its closest approach to Earth in 59 years! Weather-permitting, expect excellent views on September 26. A good pair of binoculars&nbsp;...</p></div>
            </div>
        </a><a href='https://www.deseret.com/2022/9/26/23373649/jupiter-closest-to-earth-time-nasa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to observe planet Jupiter Monday night?</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="How to observe planet Jupiter Monday night?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Planet Jupiter is passing by Earth and coming the closest it&#39;s been in 59 years on Monday. This will happen as the sun, Earth and Jupiter align in a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}