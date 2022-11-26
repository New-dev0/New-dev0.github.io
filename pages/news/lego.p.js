import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LEGO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LEGO"/>
        <meta name="description" content="Trending News about LEGO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LEGO</h1>
            <Image width={800} height={500} src="https://cdn.mos.cms.futurecdn.net/jQxw9eUTMaBpp6nF6B9Hfk-1200-80.jpg" alt="LEGO"/>
            <h3>Recent News</h3>
            <a href='https://www.space.com/black-friday-lego-guardians-advent-calendar-save-47-percent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Lego Guardians of the Galaxy advent calendar is up to 47% off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwFUEjNVuAquzMs15wpY8Cj0R92NOQueIC5wJWZWFcS9uFipSJjedeSk_0sWIR5Sf3l__f7dpD" alt="The Lego Guardians of the Galaxy advent calendar is up to 47% off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon is offering 47% off the Lego Guardians of the Galaxy advent calendar for Black Friday, just in time for December.</p></div>
            </div>
        </a><a href='https://www.space.com/crush-the-decepticons-with-30-off-this-lego-optimus-prime-kit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crush the Decepticons with $30 off this Lego Optimus Prime set</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbw0TykDYUOHR9py5nnnxApcWI32ss5PTSaTHMCv4C_EAIUqsirsOJeV5QrtyjHLbFTgQFL4Ae" alt="Crush the Decepticons with $30 off this Lego Optimus Prime set" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Transform and roll out with this imposing LEGO Optimus Prime model, now $149.99 in Walmart&#39;s Black Friday sale.</p></div>
            </div>
        </a><a href='https://stylecaster.com/lego-sale/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Major Sale Alert: Save Up to 30% on LEGO Sets For &#39;Star Wars ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo_pyNHPMo944qBfYg6-RcUd194-yFzzPVPE6Vh2hybwwgp34Dy_Cm3_JJ42wiOb1yj5-vhB9h" alt="Major Sale Alert: Save Up to 30% on LEGO Sets For &#39;Star Wars ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The best LEGO deals on Amazon are all about Star Wars, Harry Potter, Batman and Super Mario. Shop them while you still can.</p></div>
            </div>
        </a><a href='https://gizmodo.com/brilliant-self-stacking-lego-domino-machine-is-perpetua-1849820984'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brilliant Self-Stacking Lego Domino Machine Is Perpetually ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_7G5iIDalOD75GJ2src-IkhHuViWqmSdZBLxOq85K-lNKJ6IoG1JiuNGLFIdgM9m2aPz_OA4I" alt="Brilliant Self-Stacking Lego Domino Machine Is Perpetually ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Although it&#39;s a game that can trace its origins back over 700 years, most people know Dominoes as a fun chain reaction toy that&#39;s actually only fun when it&nbsp;...</p></div>
            </div>
        </a><a href='https://9to5toys.com/2022/11/25/lego-jurassic-park-30th-anniversary-sets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five upcoming LEGO Jurassic Park 30th anniversary sets slated to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5Qu0gefnyUBak0oRjVooylBN29vER62jLsfVIU9otmtEfkxhzei9v_-erRsHxAKxUzhJgDYyG" alt="Five upcoming LEGO Jurassic Park 30th anniversary sets slated to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five upcoming LEGO Jurassic Park 30th anniversary sets will look to celebrate the original theatrical release of the iconic movie.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/lego-black-friday-2022-sale-is-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LEGO Black Friday 2022 Sale Is Live - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4FYeqZ2wsu3tUh5fbuAUNucXZv2auP7q8a-6P7PD9gZZhDQqUFQ7AzdbKqr1WtgHUXtqSaZ7j" alt="LEGO Black Friday 2022 Sale Is Live - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the coolest LEGO sets you can save on during Black Friday 2022, including Optimus Prime, Mickey Mouse, the Mandalorian&#39;s ship, and more.</p></div>
            </div>
        </a><a href='https://www.livescience.com/build-code-and-play-for-less-with-black-friday-lego-deal-on-robot-inventor-set'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Build, code, and play for 20% less with this Black Friday Lego deal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_hdTVpEZQZpbLMz1x-6M1g86Cu3cMy8RZNAzKm1rI2YdAyBREWlKJ1eRNzwc4lSs9_zN1Y2a2" alt="Build, code, and play for 20% less with this Black Friday Lego deal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LEGO is selling the soon to be retired Robot Inventor set for $287.99 in its Black Friday sale.</p></div>
            </div>
        </a><a href='https://www.sfgate.com/shopping/article/best-lego-black-friday-sales-17610598.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Best LEGO Black Friday deals on Amazon and Walmart</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIEUsAvP8BA_47_A0wJXH0NBPp6stNKr_3qieQMO0wBnFS8SiRoU9_n0qKmLiQtaROROiZU6EN" alt="Best LEGO Black Friday deals on Amazon and Walmart" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You&#39;ll find Black Friday sales on everything from LEGO Advent calendars to puzzles, with building sets from &quot;Guardians of the Galaxy&quot; and &quot;Jurassic World.&quot;</p></div>
            </div>
        </a><a href='https://defector.com/an-oral-history-of-the-time-six-doctors-swallowed-lego-heads-to-see-how-long-theyd-take-to-poo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>An Oral History Of The Time Six Doctors Swallowed Lego Heads To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXXZNuuf6OIBlnNhnUtcugnAjRhhW_YemCcyGHbKQ8kCJyr5wu5e-wLCs8w6vXrEXaH19-fyHD" alt="An Oral History Of The Time Six Doctors Swallowed Lego Heads To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five of the pediatricians recovered their Lego heads in a matter of days. One pediatrician never recovered his Lego head. This is their story.</p></div>
            </div>
        </a><a href='https://gamerant.com/lego-brawls-discount-black-friday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LEGO Brawls Drops to One of Its Lowest Prices Yet for Black Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo0LIXoo2IQ3FuUD6FaeQYPgDZf2WTq9EapL710GbPemN8xySuADft6NUHzAHa0re4xw1-5zSc" alt="LEGO Brawls Drops to One of Its Lowest Prices Yet for Black Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Those looking to check out LEGO Brawls can pick up the game for 50% off on Amazon during its current Black Friday sales event.</p></div>
            </div>
        </a>
        </Template></>;
}