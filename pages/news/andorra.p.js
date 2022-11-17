import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andorra</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andorra"/>
        <meta name="description" content="Trending News about Andorra" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andorra</h1>
            <Image width={800} height={500} src="https://images.oe24.at/GEPA-20221116-101-116-0121.JPG/1600x900Crop/0/536.210.468/536.210.464" alt="Andorra"/>
            <h3>Recent News</h3>
            <a href='https://www.oe24.at/sport/fussball/nationalteam/oesterreich-entgeht-blamage-gegen-andorra/536210472'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Österreich entgeht Blamage gegen Andorra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4Ooi-Tjpjo258Omw9NepdWIWx0i-E0XbqvuCdcXU1RfXlvwp2x3dnRpnE0v5RgHfADN9yg9eQ" alt="Österreich entgeht Blamage gegen Andorra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Österreichs Fußball-Nationalteam kommt im Testspiel gegen Andorra zu einem glanzlosen 1:0-Arbeitssieg. Marko Arnautovic erlöst das ÖFB-Team mit einem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2857705'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gruselkick bei Andorra - Arnautovic wendet Mega-Blamage ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSb60Bja3JKpQD-YOimousXjlTjWFU9nT7ubOWHmUeDK9CiRhyYnOUTHkTSug_QXbCG93bu-cn2" alt="Gruselkick bei Andorra - Arnautovic wendet Mega-Blamage ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Alaba, Nicolas Seiwald, Marko Arnautovic, Christoph Baumgartner, Philipp Lienhart - alle auf der Bank. Teamchef Ralf Rangnick machte mit seiner&nbsp;...</p></div>
            </div>
        </a><a href='https://www.laola1.at/de/red/fussball/oefb-nationalteam/a-team/news/fussball--testspiel-laendermatch-heute--andorra---oesterreich/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Knapper Sieg gegen Andorra! Arnautovic rettet ÖFB vor Blamage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRH8rZkqQ4EZx4H76Rys2yCYQL1TywiBZJQJt9A_5HBuS_ludQyGcQ4TbrdeJXenJs4YTRvVJrM" alt="Knapper Sieg gegen Andorra! Arnautovic rettet ÖFB vor Blamage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das österreichische Nationalteam bekleckert sich im Testspiel gegen Andorra nicht gerade mit Ruhm, gewinnt das Spiel aber immerhin.</p></div>
            </div>
        </a><a href='https://kurier.at/sport/fussball/laenderspiel-in-malaga-live-spielstand-und-ticker-bei-oesterreich-gegen-andorra/402220920'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖFB-Länderspiel live: So steht es bei Österreich gegen Andorra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTE0zRMqKWKcsRkKXcQUj216SvXZJOEGhnMqxU5EzFwWnbddtR-lShoDXR5Rgmk_AQYaoovaeNw" alt="ÖFB-Länderspiel live: So steht es bei Österreich gegen Andorra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Teamchef Ralf Rangnick will das Testspiel unter anderem dazu nutzen, neue Akteure zu testen.</p></div>
            </div>
        </a><a href='https://sport.orf.at/stories/3102980/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖFB: Andorra-Match als „Wettkampfeinheit“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmiZACjUYXU8AcK2TK45MS4quFKfsWT153p7sykc6d_LuBEpfC4PNvnZh8cMUhjpwfn1eZDWuA" alt="ÖFB: Andorra-Match als „Wettkampfeinheit“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor dem abschließenden Länderspielhighlight des Jahres am Sonntag (20.45 Uhr) in Wien gegen Europameister Italien absolvieren Österreichs Teamspieler am&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boerse-express.com/news/articles/debuetant-in-oefb-startelf-gegen-andorra-524194'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Debütant in ÖFB-Startelf gegen Andorra</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Debütant in ÖFB-Startelf gegen Andorra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das ÖFB-Nationalteam schließt das Länderspiel-Jahr 2022 mit zwei Testspielen gegen Andorra und Italien an. Am Mittwoch (ab 18:00 Uhr im LIVE-Ticker) steht&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000140917904/oefb-team-mit-10-sieg-im-test-gegen-andorra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ÖFB-Team mit dürrem 1:0-Sieg im Test gegen Andorra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1Ogl6PUPGB7rTXpe6gT7x4mOWWRnT-JZ0N_aGM01HrftwkbQocLvFxNHan7EaEqNxYRXGSAfb" alt="ÖFB-Team mit dürrem 1:0-Sieg im Test gegen Andorra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Teamchef Ralf Rangnick setzte auf ein 3-4-2-1-System mit Gregoritsch im Angriff, David Alaba und Arnautovic saßen vorerst auf der Bank. Alexander Prass feierte&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}