import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fitbit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fitbit"/>
        <meta name="description" content="Trending News about Fitbit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fitbit</h1>
            <Image width={800} height={500} src="https://i.insider.com/6380fae1b4cf0100187d8e15?width=1200&format=jpeg" alt="Fitbit"/>
            <h3>Recent News</h3>
            <a href='https://www.businessinsider.com/guides/deals/fitbit-black-friday-deals-2022-11-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Fitbit deals of Black Friday 2022 ending soon: Save up to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXRDMXb1S9EvcwABMsfndGtg_K-d6rCPNZzmAnGIs-OgXyJ9VBicUNB5h2cVCFort6EFLMBW83" alt="The best Fitbit deals of Black Friday 2022 ending soon: Save up to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Several of Fitbit&#39;s premium line of fitness trackers and smartwatches are on sale throughout Black Friday 2022, including the Versa 4 and Sense 2.</p></div>
            </div>
        </a><a href='https://www.androidpolice.com/fitbit-charge-5-black-friday-deal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Fitbit Charge 5 is down to its lowest price yet for Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6xyJHlmHvPygZAnlDkR6wEeJq9YI-K12bjNzDTZTxB1RVQ4tGPI2KXHy73Ul5IX6gz7VrP2Z6" alt="The Fitbit Charge 5 is down to its lowest price yet for Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fitbit&#39;s Charge 5 is a robust health and fitness tracker that&#39;s light and comfortable to wear. It has excellent battery life, the OLED display is crisp and&nbsp;...</p></div>
            </div>
        </a><a href='https://mashable.com/uk/deals/best-black-friday-fitbit-charge-5-deal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best Black Friday 2022 deal: 42% off the Fitbit Charge 5</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRmzRW-x-9SR5BBx-q_pYXOgAUIBnpY2ZUN-kY9h5S1W83DlTvSQ2jPASnNOihQV1BfM0A0N9u" alt="Best Black Friday 2022 deal: 42% off the Fitbit Charge 5" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Garmin Vivofit Jr 2is on sale for £99 this Black Friday, saving you 42% on list price.</p></div>
            </div>
        </a><a href='https://www.xda-developers.com/fitbit-versa-4-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Black Friday Fitbit deal gets you a head start on those fitness ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSntV8LZYIpfBk5TMyq857PpFCMx636QOhQ_-AAUkOJ8KsfW0OWhYSdUWezVJFFO_93gf1pPIiH" alt="This Black Friday Fitbit deal gets you a head start on those fitness ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Fitbit Versa 4 is a reliable fitness tracker that&#39;ll help you achieve your fitness goals. It&#39;s also a good-looking watch that can mirror notifications from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.coachmag.co.uk/news/the-cheapest-black-friday-fitbit-deal-is-also-the-best'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Inspire 2 Is The Best Black Friday Fitbit Deal And Also The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsxkre501YmQrbh0mZmc7CFW7eksZWVAa4e6i0KhSSJifukSlGIqOBJKIbfZUzwsLzzo-iFYUc" alt="The Inspire 2 Is The Best Black Friday Fitbit Deal And Also The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You can pick up the Fitbit Inspire 2 for £45 in the Amazon Black Friday sale.</p></div>
            </div>
        </a><a href='https://www.livescience.com/black-friday-fitbit-charge-5-deal-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurry! Save $50 with this cheap Black Friday Fitbit Charge 5 deal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzsb_c7ZzCW7OKcKddmQm97T2P-_xZjZ2A6zYkVD7hyqCeEGHJF10Fliid1rXz4zDY4lhqVtPZ" alt="Hurry! Save $50 with this cheap Black Friday Fitbit Charge 5 deal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At the lowest-ever price of $99.95, now is your chance to snap up this Fitbit Charge 5 deal this Black Friday.</p></div>
            </div>
        </a><a href='https://www.pocket-lint.com/smartwatches/news/google/163573-how-to-fitbit-workout-google-pixel-watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to do a Fitbit workout on Google Pixel Watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQExmdqzKs63PmAUYF1WYNIhWYy4pzbWhyXLJlr7VejWPkeDh5eWYkdWb_B9lOC_57t6lxoWy8_" alt="How to do a Fitbit workout on Google Pixel Watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Pocket-lint) - Google&#39;s takeover of Fitbit means that it&#39;s got one heck of an integrated fitness platform for its devices moving forward - including its&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/extras/indybest/black-friday/fitbit-versa-smartwatch-black-friday-deal-b2233035.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Save 40% on the Fitbit versa 3 smartwatch in this Black Friday deal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYqNlFQ_8EXJ1cWmLaZdoCofEZaAV-bOin79ILSADTRaHIFAXtzQUpUxF88g7vjwYLQzG6_Ke6" alt="Save 40% on the Fitbit versa 3 smartwatch in this Black Friday deal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This Black Friday deal sees the Fitbit versa 3 fitness tracker and smartwatch reduced by 40% – here&#39;s how to shop this one-day-only discount.</p></div>
            </div>
        </a>
        </Template></>;
}