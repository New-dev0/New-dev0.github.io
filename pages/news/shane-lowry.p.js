import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shane Lowry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shane Lowry"/>
        <meta name="description" content="Trending News about Shane Lowry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shane Lowry</h1>
            <Image width={800} height={500} src="https://www.kildarenow.com/resizer/1200/700/true/2022_11_29/MT2248MOOR6714-1669735455614.JPG--shane_lowry_sets__mind__on_2023_masters_ahead_of_busiest_ever_year.JPG?1669735458000" alt="Shane Lowry"/>
            <h3>Recent News</h3>
            <a href='https://www.kildarenow.com/news/golf/977494/shane-lowry-sets-mind-on-2023-masters-ahead-of-busiest-ever-year.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shane Lowry sets &#39;mind&#39; on 2023 Masters ahead of busiest ever year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT65aSbo8uarB7bXh6AOOGu0kW3CLdPgIEkEdwTVZelUpUA1oB2hsV2xfOc3KKm4aU1tePwOtIi" alt="Shane Lowry sets &#39;mind&#39; on 2023 Masters ahead of busiest ever year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SHANE Lowry is playing in the Bahamas this week and is anticipating that 2023 will be one of his busiest years ever. The 2019 Open champion was at home last&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midlands103.com/news/midlands-news/shane-lowry-opening-new-pub-in-offaly-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shane Lowry Opening New Pub In Offaly Today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTntG9HiRetIgQkp3mSbTzrTr0QZ9j3zu2t6chWVWqh9p7KnF_eS8pd0IDSuFzXvkGBNQE5Ljo" alt="Shane Lowry Opening New Pub In Offaly Today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Clara golfer and associate Alan Clancy are behind the redeveloped Old Warehouse in Tullamore. The re-purposed Whiskey distillery is a project the pair have&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/golf/9831262/shane-lowry-open-new-bar-tullamore-pga-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shane Lowry tees off business venture with pal as PGA Tour star set ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnhiYBt_HL9JhhTF_D27mPm0BnPIIUHiYCdC51W5YMKV3AJ7ZcYUImUbPqR5eB_0i70CZYbvD1" alt="Shane Lowry tees off business venture with pal as PGA Tour star set ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PGA Tour star Shane Lowry is set to open his first bar alongside pal Alan Clancy.2019 Open Champion Lowry will open a bar, restaurant and cafe in his.</p></div>
            </div>
        </a>
        </Template></>;
}