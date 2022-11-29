import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christmas FM</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christmas FM"/>
        <meta name="description" content="Trending News about Christmas FM" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christmas FM</h1>
            <Image width={800} height={500} src="https://img.resized.co/lovin_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3Zpbi5pZVxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTFcXFwvMjgxMDAwNDBcXFwvY2hyaXN0bWFzLUZNLTAwMS5qcGdcIixcIndpZHRoXCI6NjQ3LFwiaGVpZ2h0XCI6MzQwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9sb3Zpbi5pZVxcXC9pbWFnZXNcXFwvbm8taW1hZ2UucG5nXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjUyZDI4YjEyMDk3Nzg1NTQ0NTU1YTQ0YTA5YWJjMmRlYjhhMGYxOWQifQ==/christmas-fm-makes-its-return-to-the-airwaves-today.jpg" alt="Christmas FM"/>
            <h3>Recent News</h3>
            <a href='https://lovin.ie/entertainment/christmas-fm-makes-its-return-to-the-airwaves-today'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christmas FM makes its return to the airwaves today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGuyrx2-mluz_1XJ5yTD9JTdN9QVcz91p8yhdLk4CAhiFvgqFryQRFxfKn4LKSrYtGG-rfmVYm" alt="Christmas FM makes its return to the airwaves today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s beginning to look a lot like Christmas...Town is lit up in Christmas lights, the Late Late Toy Show has been and gone, and today sees the triumphant&nbsp;...</p></div>
            </div>
        </a><a href='https://radiotoday.ie/2022/11/christmas-fm-launches-across-the-country-to-raise-money/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christmas FM launches across the country for 15th year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBvTEANw8oYdRTpLbm-cz6o7Aj-UYv2NGyoUOmu39m2HAMkPchKiS-uiCqCTgyRhK5dI6bHG6Q" alt="Christmas FM launches across the country for 15th year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The festive station launched at midday today and will play non-stop Christmas music for the 15th year in a row. The main FM radio frequencies for Christmas FM&nbsp;...</p></div>
            </div>
        </a><a href='https://www.westmeathexaminer.ie/2022/11/28/fundraising-station-christmas-fm-returns-to-the-airwaves-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fundraising station Christmas FM returns to the airwaves today ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUIEZSqd-pMbTXUyCxykqshSOc9ALqt0Nz_TAH1i7Nx1PSgF790KkowAsfldaem6veIzHAN1np" alt="Fundraising station Christmas FM returns to the airwaves today ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A popular festive fundraising radio station, Christmas FM, returns to the Irish airwaves from noon today (Monday).</p></div>
            </div>
        </a><a href='https://www.sundayworld.com/showbiz/irish-showbiz/christmas-fm-returns-to-irish-airwaves-for-2022/1117059881.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christmas FM returns to Irish airwaves for 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTP6FhgeB3n-Yqlp5KbSO38DNjfnTobWlHw7cYqVwTf3a7aIhZeyuK9sLnDnqjvxEC24OnzEbZ" alt="Christmas FM returns to Irish airwaves for 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The radio station is raising funds for a number of children&#39;s charities while it plays round-the-clock Christmas hits. From midday Monday, Irish people have&nbsp;...</p></div>
            </div>
        </a><a href='https://www.corkbeo.ie/news/local-news/christmas-fm-live-you-need-25621525'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christmas FM is live - All you need to know about the station and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMa7cmxrWY-fFgQOYLXhtSiMTMnJIkeRJ3_NGdIdPST37PRX5n75PTwQ1T0N7R_oZ4kCLutPlP" alt="Christmas FM is live - All you need to know about the station and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to tune in? The FM radio frequencies for Cork are; Cork City, part county 106.7 FM, and Cork North, part county 87.7 FM. The other main frequencies for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yaycork.ie/christmas-fm-is-back-on-the-airwaves-from-today-heres-how-to-tune-in/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christmas FM is back on the airwaves from today – here&#39;s how to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuXbkGbSsAjTgyW_LfpPCVdnWpTqlD2r-4JW0RkYMbiu5E74F4AWEpwbzEhaQhyx2HkGWvjIrV" alt="Christmas FM is back on the airwaves from today – here&#39;s how to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Listeners can look forward to hearing all of their festive favourites including classic Christmas songs as well as newer Christmas hits, while the radio station&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}