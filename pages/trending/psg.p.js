import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PSG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PSG"/>
        <meta name="description" content="Trending News about PSG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PSG</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Kylian-Mbappe.jpg" alt="PSG"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/never-asked-to-leave-psg-very-happy-kylian-mbappe-8213697/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Very happy at PSG, never asked to leave in January: Kylian Mbappe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaRQtDI2Re2R5pVOn_vbeLJg4I1Nx3ID9s16Yx6bGdobSM5ONBnCqy6DWKvxxQ9eaCd9cJ5LLM" alt="Very happy at PSG, never asked to leave in January: Kylian Mbappe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Several French media reported on Tuesday that the striker was fed up with unfulfilled promises by President Nasser Al-Khelaifi and wanted to leave the club&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/kylian-mbappe-rubbishes-reports-of-psg-exit-in-january-i-was-as-shocked-as-everyone-else-526033'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappe rubbishes reports of PSG exit in January: I was as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmF1VL-KlgVJQ_FuCk34sFHqNkGb8RK4s_z2I_9jNEIJlLVBQjqbmn2THW4GnMEwz-tr6hhF0T" alt="Kylian Mbappe rubbishes reports of PSG exit in January: I was as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>French striker Kylian Mbappe has rubbished the reports of him wanting to leave Paris Saint-Germain (PSG) in January next year. The news of Mbappe&#39;s desire&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/psg-vs-marseille-ligue-1-live-streaming-commentary-highlights-lionel-messi/article66019020.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG 1-0 OM, Ligue 1 HIGHLIGHTS: Neymar strike helps PSG win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrFsL6RBQ7ebcQDtHYcncM3S24ECOWlBGhJTv2f3VhhRwFy0aYWo3iMBv7cBnKvqVLXV3gnToS" alt="PSG 1-0 OM, Ligue 1 HIGHLIGHTS: Neymar strike helps PSG win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG vs Olympique de Marseille: Catch the highlights, updates and commentary from the Premier League match at Parc des Princes.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/psg-vs-marseille-lineups-and-live-updates/blt059e86fb08556378'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Marseille : Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkxd36cvmKCljFW-3f7gec1yqsqVYZ7HNEOdb_ZBBNAxgKLZC4rI194LcvhzkWe1-C_4tmi9zY" alt="PSG vs Marseille : Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG will be hoping to end their 3 game winless streak as they host Marseille.</p></div>
            </div>
        </a><a href='https://www.ligue1.com/Articles/MATCH-REPORTS/2022/10/16/neymar-fires-psg-to-classique-win-over-marseille'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar fires PSG to Classique win over Marseille</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRx-TMmiIaRkCyxZ_9Y6KX_1E6noNZvenkWLAh7kmFiQxqlMkqV4FjCOCBZoOgYOw4n-KuxOfUC" alt="Neymar fires PSG to Classique win over Marseille" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar Jr. got the only goal of the game as Paris Saint-Germain beat Olympique de Marseille 1-0 at the Parc des Princes to open up a three-point lead at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/neymar-leads-paris-saint-germain-to-classique-win-over-marseille-in-ligue-1-2022-23-in-pics-photos-230484'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar Leads Paris Saint-Germain To &#39;Classique&#39; Win Over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWmfvwY0lNHGz7qOPsrsKA6AYs_XjnrBGQ8c6UQ9ddmf-eppzVDQhLgtp1AInaQTNXp4M4UpNe" alt="Neymar Leads Paris Saint-Germain To &#39;Classique&#39; Win Over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar scored his ninth goal in Ligue 1 2022-23 to guide Paris Saint-Germain to a 1-0 win over bitter rival Marseille in French football&#39;s biggest game on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newindianexpress.com/sport/football/2022/oct/17/kylian-mbapp%C3%A9-denies-he-wants-to-leave-psg-during-transfer-window-2509083.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappé denies he wants to leave PSG during transfer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScjGx0PSnyUfiTmlpWsAXC7sFtpqmzns7zDdpiZqJC9Eas2zdLdbKgfESt6iQ5-ZJYxdVBPkb3" alt="Kylian Mbappé denies he wants to leave PSG during transfer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG&#39;s Kylian Mbappe celebrates after scoring his third goal during the French League One soccer match. PSG&#39;s Kylian Mbappe. (Photo | AP). By Associated Press.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/sports/story-kylian-mbappe-denies-he-wants-to-leave-psg-during-transfer-window-7232174.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पीएसजी को नहीं छोड़ना चाहते थे Kylian Mbappe, ट्रांसफर की खबरों का किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJ1j-Nmy_uW3QRaKJvi8dakbrcHQYIDa7NwRWxc0h4ju78j97WJNdv-yRu3k8eTRswirVcB4pd" alt="पीएसजी को नहीं छोड़ना चाहते थे Kylian Mbappe, ट्रांसफर की खबरों का किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पेरिस सेंट जर्मैन फुटबॉल क्लब के प्लेयर Kylian Mbappe ने स्पष्ट कर दिया है कि वह पीएसजी को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/kylian-mbappe-denies-reports-of-leaving-ligue-1-club-paris-saint-germain-during-january-transfer-window-news-230699'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappe Denies Reports Of Leaving Ligue 1 Club Paris Saint ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyHZ1Tq0xpXjH-ByhUnQFS7kE6j5bNQrlmKr-uxPVD9iwI1qBr5_i5gaMWZrh-cKNB_CiHVnRE" alt="Kylian Mbappe Denies Reports Of Leaving Ligue 1 Club Paris Saint ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kylian Mbappe was close to joining Real Madrid on a free transfer this summer but finally agreed to stay at PSG for two more years with an option for an&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/lionel-messis-paris-saint-germain-vs-marseille-ligue-1-match-livestreaming-details-when-and-where-to-watch-psg-vs-om-in-india-2522719.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messis Paris Saint-Germain vs Marseille Ligue 1 match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTkZHZmzJIfpl_Qi9-d6kcw0S4_XoZy7rEkm9O-ikiTl3dLXl4XyHJom-om1RGir070WLGEpFj" alt="Lionel Messis Paris Saint-Germain vs Marseille Ligue 1 match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Checkout the livestreaming details of PSG vs Marseille below &middot; Where can I watch the Ligue 1 League match between Paris Saint-Germain (PSG) vs Marseille?</p></div>
            </div>
        </a>
        </Template></>;
}