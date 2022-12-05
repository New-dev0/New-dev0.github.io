import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pele"/>
        <meta name="description" content="Trending News about Pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pele</h1>
            <Image width={800} height={500} src="" alt="Pele"/>
            <h3>Recent News</h3>
            <a href='https://www.iol.co.za/sport/world-cup/pray-for-pele-says-brazil-assistant-coach-cesar-sampaio-941c6dc6-3b55-40ea-838b-03f81ab24924'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Pray for Pele,&#39; says Brazil assistant coach Cesar Sampaio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFtMx0DsJK4u3ehLEwg7OW7wwaqYwcaeOZB7C4VURDcYhg0yxcyxkS9c_SXt1K7T4XSvMorli3" alt="&#39;Pray for Pele,&#39; says Brazil assistant coach Cesar Sampaio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazil&#39;s assistant coach Cesar Sampaio has asked the footballing world to send its prayers to Pele as the icon receives treatment for colon cancer and a&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/en/news/pele-goals-scored-football-career-how-many'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele&#39;s goal record: Numbers that justify why Brazilian legend is &#39;King&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlBOJEufUrhRseqbmlM1GYrGvsbHWQLRvER3ug80mKRdOCIKK5uR-7-wozLOa1FRnxY9VPrTB7" alt="Pele&#39;s goal record: Numbers that justify why Brazilian legend is &#39;King&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pele has scored 77 goals in 92 international matches for Brazil and 680 goals in official club matches. His overall career goals tally, however,&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/12/03/world-cup-lights-up-to-show-support-for-hospitalised-pele'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup lights up to show support for hospitalised Pele</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfi9s4UqWhqDUAXXVEfAWWBMKRRJueqHg8SpYanyh2_PlVziZM2ThnKypmfrtlv0ZjsOeC3xcP" alt="World Cup lights up to show support for hospitalised Pele" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Lusail Stadium in Doha, which will host the World Cup final on December 18, and the Aspire Tower next to the Khalifa Stadium, were adorned with pictures&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crowrivermedia.com/national/entertainment/pele-insists-he-is-full-of-energy-amid-cancer-fight/article_51ce035f-a1a4-5911-89b9-63c9a0df5cde.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pele insists he is &#39;full of energy&#39; amid cancer fight</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-y_UWmrwEgLYHNQXPzU8YKsnoKzPaqfEepM34tYywuLJgT-dRPY8elVqRgtLGXmT6aUXfDYoO" alt="Pele insists he is &#39;full of energy&#39; amid cancer fight" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He has been undergoing chemotherapy treatment since September 2021 and has been said to no longer be responding to the treatment. Pele was taken into hospital&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/03/football/pele-football-world-well-wishes-intl-spt/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pelé says he&#39;s &#39;strong&#39; and &#39;with a lot of hope&#39; in social media update</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSq2vqee1YYuzT-ulFfCo7m4bMC8K_5dli8i_R8qTknG4nvrh0BvOWOMupa3sRHIFPOx87vPMCh" alt="Pelé says he&#39;s &#39;strong&#39; and &#39;with a lot of hope&#39; in social media update" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian soccer great Pelé says he&#39;s &quot;strong&quot; and has &quot;a lot of hope&quot; as he continues his treatment for colon cancer.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/dec/04/brazil-assistant-coach-cesar-sampaio-asks-people-to-pray-for-pele'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil assistant coach César Sampaio asks people to pray for Pelé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgFWMDF4pwXSww47ucCkn9jKssbjL3Jj8k_PP4B3_7U2R036FIwlY1XQvVg0fLczClgt1N7eg3" alt="Brazil assistant coach César Sampaio asks people to pray for Pelé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>César Sampaio, an assistant coach at the World Cup, said: &#39;Regardless of religion, please say a prayer,&#39; while Pelé said from hospital: &#39;I want to keep&nbsp;...</p></div>
            </div>
        </a><a href='https://www.southcoastregister.com.au/story/8006798/brazil-coach-tites-hopes-for-ailing-pele/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil coach Tite&#39;s hopes for ailing Pele</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGA-hT9zdI-fIAMnftKOsZtuG53OJrMGFgwbiwwwUS5Yx_y9HwStNsOs5rAGrU_R1BGdGq1wZw" alt="Brazil coach Tite&#39;s hopes for ailing Pele" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazil head coach Tite has wished three-time World Cup winner Pele good health, recalling how he was left...</p></div>
            </div>
        </a>
        </Template></>;
}