import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Switzerland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Switzerland"/>
        <meta name="description" content="Trending News about Switzerland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Switzerland</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1202%2Fr1101073_1296x729_16%2D9.jpg" alt="Switzerland"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/fifa-world-cup/story/4823464/fiery-world-cup-win-for-switzerlands-shaqiri-vs-serbia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fiery World Cup win for Switzerland&#39;s Shaqiri vs. Serbia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1vj7DJ3SM9FPUimQIG0T5zvaki5JBcIakLdcLp06AYR05I2eWW7zqnFZ3Eemn91nYNF6Q7SBG" alt="Fiery World Cup win for Switzerland&#39;s Shaqiri vs. Serbia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite intense pressure and jeering, Xherdan Shaqiri stepped up and Switzerland advance in the 2022 World Cup as Serbia fell short yet again.</p></div>
            </div>
        </a><a href='https://foreignpolicy.com/2022/12/02/switzerland-serbia-kosovo-soccer-world-cup-qatar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup: Switzerland vs. Serbia Match Is Really All About ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYHDXUNHyfbGzxVeP5c-S6NjRDPZTh1gDXVyZ0-41tagS9ktIkvsogG4aLE-9gewkCs70dRU69" alt="Qatar World Cup: Switzerland vs. Serbia Match Is Really All About ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before Shaqiri&#39;s strike, the score sat level at 1-1 after Granit Xhaka, another Swiss player of Kosovar-Albanian heritage, canceled out Serbia&#39;s early opener.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/serbia-vs-switzerland-world-cup-2022-live-score-updates-result/YPfpu80pTlMY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland beats Serbia 3-2 and advances to World Cup 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQlUFmbYuZbblsP9kXku7thKZHIBwci2nyH9NQckDd60kNG0zeLfE7uJp8YmyJzeZmDqx2eAD8o" alt="Switzerland beats Serbia 3-2 and advances to World Cup 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Serbia face Switzerland at Stadium 974 in their final Group G game on Friday, knowing that they need to win to stand any chance of progressing to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2022/fifa-world-cup-2022-in-qatar-live-serbia-v-switzerland-updates_sto9248746/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland edge five-goal Serbia thriller to reach World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtXroSSVthpqc_wC8UrUnM1spICTJvp8AIm3tYZdCMlgYiWr2UYuzPNRBXfuzk2rCjrcaW7DEm" alt="Switzerland edge five-goal Serbia thriller to reach World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xherdan Shaqiri fired the Swiss into the lead before Aleksandar Mitrovic and Dusan Vlahovic goals put the Serbians provisionally second in Group G. But Breel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nwaonline.com/news/2022/dec/03/switzerland-survives-tense-match/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland survives tense match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6iH3uEDKUGbVowkCHZlPOp2xOwETiNaMEQ0ytHXGSagcK0ezA8hcdLMIYhzWqy5Rah8mMVsC4" alt="Switzerland survives tense match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA, Qatar -- Xherdan Shaqiri took off as soon as the ball hit the back of the net. It was no surprise where he was headed after scoring the first goal in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/gallery/2022/12/2/serbia-vs-switzerland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland edge out Serbia in goal fest to reach last 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFNxeDLKNzk4a-uDQyHNgzHKsdgpTv7tIvHotegG8J3U1HcHWgppKtvyhyP-iJav94-bjWXitm" alt="Switzerland edge out Serbia in goal fest to reach last 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Switzerland reached the World Cup knockout round for the third successive tournament after beating Serbia 3-2.</p></div>
            </div>
        </a><a href='https://www.amnesty.org/en/latest/news/2022/12/switzerland-urgent-need-for-support-to-protect-socio-economic-rights-in-ukraine/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland: Urgent need for support to protect socio-economic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQxFELDhlKA170OLFR_z-rHIc-i7PORGLFZH6EUwx7NKBJxvNMac5G4vM075f1KM58F5OlG1Xi" alt="Switzerland: Urgent need for support to protect socio-economic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>State delegates at next week&#39;s Ukraine Recovery Conference in Lugano, Switzerland, should demonstrate their support for the people of Ukraine by ensuring&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}