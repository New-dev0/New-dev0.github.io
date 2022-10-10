import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Moon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Moon"/>
        <meta name="description" content="Trending News about Moon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Moon</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/5fb923a1cb65ed27b046dd8d/0x0.jpg?format=jpg&crop=3131,1468,x200,y1315,safe&width=1200" alt="Moon"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/jamiecartereurope/2022/10/09/a-long-goodbye-to-the-hunters-moon-as-it-cruises-past-mars-the-naked-eye-night-sky-this-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>See A Beautiful &#39;Hunter&#39;s Moon&#39; Cruise Past Mars: The Naked Eye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYAKwZ9rhZYqU_0u1-pFhROMma0m66vzxWvHZW203I6h5gUsMubSrKNiFIu91yPdLuZu_fl-Yo" alt="See A Beautiful &#39;Hunter&#39;s Moon&#39; Cruise Past Mars: The Naked Eye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Let&#39;s go stargazing! The northern hemisphere&#39;s celestial highlights (mid-northern latitudes) for the week ahead.</p></div>
            </div>
        </a><a href='https://news.abplive.com/science/october-full-moon-2022-hunter-moon-to-rise-after-midnight-when-and-how-to-watch-1557373'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>October Full Moon 2022: Hunter Moon To Rise After Midnight. When ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdXZZpM6Cp5yZHw5o60omahAjuPr_ZC4Oi4W545iyW0NNj6OZxtmYJ4XQ-PaAjs3TjSn9jad92" alt="October Full Moon 2022: Hunter Moon To Rise After Midnight. When ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hunter Moon 2022: The October full moon will appear the brightest at 4:55 pm EDT on Sunday, October 9 (2:25 am IST on Monday, October 10 in India).</p></div>
            </div>
        </a><a href='https://www.vogue.in/beauty/content/how-to-release-negativity-on-blood-moon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to release negativity on Blood Moon on October 9</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJpwNoTDOOGtqBf1oIa934otq665H5kGyCJEG_x-N99rGXPBYdFXVlcFah6AD9U6eEd8cMRE7E" alt="How to release negativity on Blood Moon on October 9" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s a low down on lunar self-care rituals for Hunter&#39;s Moon/Blood Moon to recalibrate and reset.</p></div>
            </div>
        </a><a href='https://www.space.com/full-hunters-moon-orange-october-09-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>See the pumpkin orange Full Hunter&#39;s Moon of October 2022 rise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTILnEMOeCngjzgcfiCgAfdDAv3qYfUEbnivDFTx88JqBHOK2B3mjrmDuZWBTqD0OzWMzl80Xq" alt="See the pumpkin orange Full Hunter&#39;s Moon of October 2022 rise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>October&#39;s full moon, the Hunter&#39;s Moon, will rise on Sunday, October 9 with a suitably seasonal orange hue.</p></div>
            </div>
        </a><a href='https://www.al.com/crime/2022/10/hunters-moon-2022-rises-sunday-when-to-see-it-best.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hunter&#39;s moon 2022 rises Sunday: When to see it best</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJgajeENAoQWAp-k-CToHVzM9SGXJ-di_4AFaG3t0SEvLcvTURcbRvBQ42xKCUMZBYKGHs3N22" alt="Hunter&#39;s moon 2022 rises Sunday: When to see it best" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first full moon of fall is rising tonight (Sunday, Oct. 9). October&#39;s full moon is sometimes called the Hunter&#39;s Moon. According to NASA the Hunter&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yourerie.com/news/heres-when-you-can-see-the-hunters-moon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s when you can see the Hunter&#39;s Moon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_Ha_7uG5k75mr7d0EhTokGlwhmMQQH2yC0Jf7SWxux847ee9cVJRsK9Hu8SLqt-oTQ8KqkRyZ" alt="Here&#39;s when you can see the Hunter&#39;s Moon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Animals are beginning to fatten up ahead of winter, and since the farmers had recently cleaned out their fields under the Harvest Moon, hunters could easily see&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}