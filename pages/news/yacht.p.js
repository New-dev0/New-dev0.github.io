import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yacht</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yacht"/>
        <meta name="description" content="Trending News about Yacht" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yacht</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/00277194cd14b800f7169904c80c51138a53a84d/0_230_3072_1843/master/3072.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f14b44feaf814843f9a29f58d03b8b71" alt="Yacht"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/world/2022/dec/08/italy-russian-oligarch-yacht-dmitry-mazepin-sardinia-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russian oligarch&#39;s yacht seized in Sardinia has disappeared from port</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmQ2aF7nLsGJ5phzIVCMq4WQNb_XzgK4Ts0svP0-om_AVS9VzFxcTSIJHHJfDp2hZDDZ9KbRmD" alt="Russian oligarch&#39;s yacht seized in Sardinia has disappeared from port" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 22-metre vessel, owned by billionaire Dmitry Mazepin, was last seen at the Italian island in summer.</p></div>
            </div>
        </a><a href='https://news.sky.com/story/royal-yacht-government-sunk-2-5m-on-successor-to-royal-yacht-britannia-before-project-was-scuppered-12764062'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Royal yacht: Government sunk £2.5m on successor to Royal Yacht ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDYNvX2-K-hu75ua3UA0DVzm_MOLlRibnGRh_kaBs0be5yymIrUoPLrDX3vqfA1IJI5LXWwkYw" alt="Royal yacht: Government sunk £2.5m on successor to Royal Yacht ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boris Johnson in 2021 announced plans for a new royal yacht as a successor to Britannia, but the project was given the chop around a month ago.</p></div>
            </div>
        </a>
        </Template></>;
}