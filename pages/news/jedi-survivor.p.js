import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jedi: Survivor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jedi: Survivor"/>
        <meta name="description" content="Trending News about Jedi: Survivor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jedi: Survivor</h1>
            <Image width={800} height={500} src="https://starwarsblog.starwars.com/wp-content/uploads/2022/12/star-wars-jedi-survivor-tall.jpg" alt="Jedi: Survivor"/>
            <h3>Recent News</h3>
            <a href='https://www.starwars.com/news/star-wars-jedi-survivor-cameron-monaghan-interview'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&lt;em&gt;Star Wars Jedi: Survivor&lt;/em&gt;: Cameron Monaghan on Cal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTayykvESLkh5LbEPAtKcLbJcEfSikmlSsKSLlWHc7_NsPVyipB4N_enIf_mUP5K74KzPEo3kcE" alt="&lt;em&gt;Star Wars Jedi: Survivor&lt;/em&gt;: Cameron Monaghan on Cal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cameron Monaghan talks to StarWars.com about Star Wars Jedi: Survivor&#39;s new trailer and returning as Order 66 survivor Cal Kestis.</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/gaming/star-wars-jedi-survivor-trailer-reveals-gameplay-march-17-release-date/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Wars Jedi: Survivor Trailer Reveals Gameplay, March 17 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTjbmisxviK6cIAYXm8CcyWJ3zgrHAdGzALOyi7jZyBoxpAU6ETBdntoEtcR3zQ-LGJeJWpLyaM" alt="Star Wars Jedi: Survivor Trailer Reveals Gameplay, March 17 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thursday&#39;s Game Awards brought a look at the new mechanics and returning characters in the sequel to Jedi: Fallen Order.</p></div>
            </div>
        </a><a href='https://blog.playstation.com/2022/12/09/star-wars-jedi-survivor-launches-march-17-on-ps5-new-trailer-screens-gameplay-details/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Wars Jedi: Survivor launches March 17 on PS5: new trailer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVreFRr9fVJV-cgm95g-ppbAm6Q3QXWh_yIH6m5llzJV21G7tkm9Z9OmbNI8yTcHztuV1cI75v" alt="Star Wars Jedi: Survivor launches March 17 on PS5: new trailer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jedi Cal Kestis returns in this third-person adventure from Respawn Entertainment, spanning both new and familiar locations across the galaxy. Follow Cal&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/star-wars-jedi-survivor-follows-a-changing-cal-kestis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Wars Jedi: Survivor Follows a Changing Cal Kestis - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShiMtQbtXnGkQmL83lGn-4Mzcdyf2W1kfgEP57qVCfDNyhIZ71LsnKh5c6MvN-msinfp2rbE4D" alt="Star Wars Jedi: Survivor Follows a Changing Cal Kestis - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last night, we got our first proper gameplay trailer for Star Wars Jedi: Survivor at The Game Awards, along with a March 17, 2023 release date.</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/who-is-in-the-bacta-tank-in-jedi-survivor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who Is in the Bacta Tank in &#39;Star Wars Jedi: Survivor&#39;?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVThKiXZ3aYyR9t7ENENvKFU-PoL7IIfAodP2uAbbSlUwQRtGTcXS7Qo0siL6WQe2jlhyaZpQa" alt="Who Is in the Bacta Tank in &#39;Star Wars Jedi: Survivor&#39;?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The official trailer for &#39;Star Wars Jedi: Survivor&#39; debuted during the 2022 Game Awards, and fans are still wondering who is in the bacta tank.</p></div>
            </div>
        </a><a href='https://gamerant.com/star-wars-jedi-survivor-mantis-crew-left-behind-new-cast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Wars Jedi: Survivor Seems to Be Leaving the Mantis Crew Behind</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjPG2NzruTxeh-I3bxTeSH9iNPwDY50jOTlAtpNDrsATaoXqkFMdhqC9aEnteRSqTxnel9x5aH" alt="Star Wars Jedi: Survivor Seems to Be Leaving the Mantis Crew Behind" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The fate of the Mantis crew remains an ominous mystery, as Cal Kestis embarks on a new journey with new allies in Jedi: Survivor&#39;s latest trailer.</p></div>
            </div>
        </a>
        </Template></>;
}