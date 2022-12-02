import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morgan Wallen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morgan Wallen"/>
        <meta name="description" content="Trending News about Morgan Wallen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morgan Wallen</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2021/02/04/PPHX/04cf0fc0-f6c1-4c2e-a81b-65495f36b1e0-MW_JohnShearerNew.jpeg?auto=webp&crop=827,465,x0,y64&format=pjpg&width=1200" alt="Morgan Wallen"/>
            <h3>Recent News</h3>
            <a href='https://www.mlb.com/press-release/release-morgan-wallen-citizens-bank-park-12-1-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Wallen announces 2023 One Night at a Time World Tour</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Morgan Wallen announces 2023 One Night at a Time World Tour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CITIZENS BANK PARK PHILADELPHIA, PA SATURDAY, JUNE 17, 2023** WITH SPECIAL GUESTS HARDY, ERNEST, AND BAILEY ZIMMERMAN Tickets on Sale Friday, Dec.</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/entertainment/music/2022/12/01/morgan-wallen-tour-2023-phoenix-concert/69691593007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Wallen&#39;s 2023 Phoenix concert: Here&#39;s how to get tickets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVKuUFE-95zI77jKICezU3jCHP0MkiTla8LSu5ejG4KcFwzkUOVpbmhZTl0IRaOKwJUPx8NzsL" alt="Morgan Wallen&#39;s 2023 Phoenix concert: Here&#39;s how to get tickets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morgan Wallen just announced that his 2023 tour is playing Chase Field in downtown Phoenix. Here&#39;s presale info and who&#39;s opening.</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/music/story/2022-12-01/morgan-wallen-world-tour-dates-new-songs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Wallen announces 2023 world tour dates, new songs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmWuddMOWvIAZDPPV5KxwCOJSiblKa5On3nj6A1yjcjxyPcFtNrBukb9QdNQmunS99iwaiGl2V" alt="Morgan Wallen announces 2023 world tour dates, new songs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Country musician Morgan Wallen will release three new songs — &#39;One Thing at a Time,&#39; &#39;Tennessee Fan&#39; and &#39;Days That End in Why&#39; — Thursday night.</p></div>
            </div>
        </a><a href='https://www.jsonline.com/story/entertainment/music/2022/12/01/morgan-wallen-to-headline-milwaukees-american-family-field-in-april/69691677007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morgan Wallen starting North American tour at Milwaukee&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJxscVZ7vdGeQvMotPqV2M5pVKNtLmRoUvIS6gW3aPAs-Kz4Xz1S9fVUS00fNRYjcJejurk-qP" alt="Morgan Wallen starting North American tour at Milwaukee&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The North American leg of the country star&#39;s One Night at a Time World Tour will start in Milwaukee.</p></div>
            </div>
        </a><a href='https://www.post-gazette.com/ae/music/2022/12/01/country-star-morgan-wallen-will-play-pnc-park-in-june/stories/202212010081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Country star Morgan Wallen will play PNC Park in June</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQp8MugwIlIOFn-dIRDs0TtigZI-iK3_nxpw-4bzqRSXyTNtSWKLj19Lc2yAdIJnR1cX6WUxCP0" alt="Country star Morgan Wallen will play PNC Park in June" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morgan Wallen, who sold out the Pavilion at Star Lake last summer, will bring his One Night at a Time World Tour to PNC Park on June 15.</p></div>
            </div>
        </a><a href='https://www.americantop40.com/calendar/content/2023-06-15-morgan-wallen-one-night-at-a-time-world-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MORGAN WALLEN - ONE NIGHT AT A TIME WORLD TOUR ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR85Gc8FpCqPPVMLpuOgIb5GaYwdvoQikEUWHEdvfIhMDvu7Kmh3o6tYAXlAOr6BblL3hM43lEY" alt="MORGAN WALLEN - ONE NIGHT AT A TIME WORLD TOUR ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MORGAN WALLEN ANNOUNCES 2023. ONE NIGHT AT A TIME WORLD TOUR. PNC PARK - PITTSBURGH, PA THURSDAY, JUNE 15, 2023﻿. ERNEST &amp; Bailey Zimmerman Join All Dates&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}