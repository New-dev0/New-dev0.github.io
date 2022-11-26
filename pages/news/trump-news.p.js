import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Trump news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Trump news"/>
        <meta name="description" content="Trending News about Trump news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Trump news</h1>
            <Image width={800} height={500} src="https://apa.at/wp-content/uploads/2022/11/87990011470121916_BLD_Online-1.jpg" alt="Trump news"/>
            <h3>Recent News</h3>
            <a href='https://apa.at/news/trump-will-2024-wieder-us-praesident-werden-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump will 2024 wieder US-Präsident werden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTifQhsOAHf7k72EGN-A298EpfNyK_vTJ6yN7SmCvfzWi8_8vYFeJp5wOqcmLhLVZgE_D8UHT-m" alt="Trump will 2024 wieder US-Präsident werden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Amerikas Comeback beginnt genau jetzt&quot;, sagte der 76-Jährige vor geladenen Gästen in einem Saal. Trump hatte die Wahl 2020 gegen den Demokraten Joe Biden&nbsp;...</p></div>
            </div>
        </a><a href='https://orf.at/stories/3293858/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weißes Haus: Trump verkündet Wiederkandidatur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRR7sZ-90PoRr5Wda3lVkyjb9bf2YQWfEBmCxBAbLtk1U8aI4i84Cfqh4a4S--D8XDOVAUHmr7l" alt="Weißes Haus: Trump verkündet Wiederkandidatur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der frühere US-Präsident Donald Trump will bei der Präsidentenwahl 2024 erneut für die Republikaner antreten. Das kündigte Trump am Dienstagabend (Ortszeit)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6215918/bei-dieser-trump-show-muessen-alle-zusehen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bei dieser Trump-Show müssen alle zusehen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYBwkTfpdOMrxszf8C60nFk3fjFr3xTdkmGrHmSTuMkbAqcznyuqKOEBqxqPSfwayixGSxOjsR" alt="Bei dieser Trump-Show müssen alle zusehen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist ein kurzer Clip, den eine Reporterin aus dem Ballsaal in Mar-a-Lago auf Twitter teilt. Donald Trump, Ex-Präsident und Wieder-Kandidat, steht vorn auf der&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/politik/ausland/trump-will-es-nochmal-wissen-ex-praesident-kuendigt-wiederkandidatur-an/402220029'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump will es nochmal wissen: Ex-Präsident kündigt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLJ7t6PgzjjxaUEkWHJgsWvNazVQuykhxGcg-tkTB35FdsMv8wSEl5Uxb3cPV3cBnR1ZW7s9hE" alt="Trump will es nochmal wissen: Ex-Präsident kündigt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trump: „Amerikas Comeback beginnt genau jetzt”. Ex-Präsident kündigt offizielle Präsidentschaftskandidatur für 2024 an.</p></div>
            </div>
        </a><a href='https://www.diepresse.com/6215917/donald-trump-kandidiert-auch-2024-fuers-weisse-haus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Donald Trump kandidiert auch 2024 fürs Weiße Haus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRENi28Ig4qv2pQbwmu9RgkK8IPqLbXUGeqYoUGCRkX1a_8Qi_Zsxg9P75doKICVwOB87KUr_D4" alt="Donald Trump kandidiert auch 2024 fürs Weiße Haus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Republikaner Trump erklärte am Dienstagabend in Mar-a-Lago „Amerikas Comeback“ und seine neuerliche Kandidatur für das Präsidentenamt - trotz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/politik/welt/2167965-Trump-tritt-wieder-an.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trump tritt wieder an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMheqlc4tRAGhsznVsp9ghCsr0VAIVekztT7xTt73xMBUSG63iYqJY1KK0Dh46fXIA5-h0ZFoS" alt="Trump tritt wieder an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Amerikas Comeback beginnt genau jetzt&quot;, sagte der 76-Jährige vor geladenen Gästen in einem Saal. Trump hatte die Wahl 2020 gegen den Demokraten Joe Biden&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}