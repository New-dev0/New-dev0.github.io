import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Papa Bouba Diop</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Papa Bouba Diop"/>
        <meta name="description" content="Trending News about Papa Bouba Diop" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Papa Bouba Diop</h1>
            <Image width={800} height={500} src="http://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/news/2022/11/30/koulibaly-goal-senegal-ecuador" alt="Papa Bouba Diop"/>
            <h3>Recent News</h3>
            <a href='https://www.chelseafc.com/en/news/article/koulibaly-on-realising-a-childhood-dream-paying-tribute-to-papa-bouba-diop'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Koulibaly on realising a childhood dream, paying tribute to Papa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4jyGzEI5ZmTXiGg6VAd__ebah9fV58A8Tut6MpOyIFZIbmt300kwtn-kyzNzQDWAroarEk-cI" alt="Koulibaly on realising a childhood dream, paying tribute to Papa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Considering the quality of Kalidou Koulibaly&#39;s volley that sent Senegal through to the last-16 of the World Cup, you could be forgiven for being surprised&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailystar.co.uk/sport/football/senegal-papa-bouba-diop-death-28620568'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal World Cup hero Papa Bouba Diop put nation on the map ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTj2zCmQwoDTFQorh-xZT1ZUM3AxaqKkXCv_8jR4gYURjEYL4aCiRWjFDAZBKvOEvsu9EfNGm1h" alt="Senegal World Cup hero Papa Bouba Diop put nation on the map ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup hero Papa Bouba Diop will forever remain an icon of African football who &#39;means everything to Senegal&#39; two years after his tragic passing at the&nbsp;...</p></div>
            </div>
        </a><a href='https://independent.ng/koulibaly-pays-tribute-to-senegal-icon-diop/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Koulibaly Pays Tribute To Senegal Icon Diop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMv-2hoef0Z-WhNea3x_AeUZ1yFBjaN5BRTfNNg0j6Oro1VPB6kLZu_4N2EezoH-f-EYfG0Gq7" alt="Koulibaly Pays Tribute To Senegal Icon Diop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senegal captain Kalidou Koulibaly dedicated their 2-1 win over Ecuador at the 2022 World Cup to the late Papa Bouba Diop on the second anniversary of his&nbsp;...</p></div>
            </div>
        </a><a href='https://au.news.yahoo.com/world-cup-2022-senegal-dedicate-115350761.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Senegal dedicate win to Papa Bouba Diop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSI-a0JmgyKANEzZzk2yR94b_Xrvz-1Rdp4WWiqhFmQGgABtvsqcu--r_afhM75vxw9ubCnixdx" alt="World Cup 2022: Senegal dedicate win to Papa Bouba Diop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Senegal players dedicate their World Cup win over Ecuador to the late Papa Bouba Diop, who starred for the country at the 2002 finals.</p></div>
            </div>
        </a><a href='https://www.leicestermercury.co.uk/sport/football/football-news/leicester-city-papy-mendy-senegal-7879055'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Papy Mendy pays emotional tribute as Senegal set up England ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQOAO2aKYogrjBXfpoG3NgjiwxRgpC1TOguZp3oT2Sth9BmLUlrg0Ta9WAgiMcDTfQrvs8wiOP3" alt="Papy Mendy pays emotional tribute as Senegal set up England ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leicester City midfielder Nampalys Mendy has paid tribute to late midfielder Papa Bouba Diop. Mendy came on as a substitute as Senegal beat Ecuador 2-1 in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theweek.in/news/sports/2022/11/30/qatar-2022-why-senegal-captain-wore-no-19-on-his-armband.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: Why Senegal captain wore no. 19 on his armband</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQxbv05za_OBurD50Kainb4TUVVoGtU6uBjDMyFIoJ8Y_46Z8-3uQyMlwuruRh_-wARUgfx4g_" alt="Qatar 2022: Why Senegal captain wore no. 19 on his armband" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Papa Bouba Diop. The name is as memorable as the man&#39;s exploits in the 2002 FIFA World Cup held in Japan and South Korea. Diop scored the solitary goal in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ug/news/2022-world-cup-senegal-like-brothers-despite-mane-and-kouyate-absence-koulibaly/blt329384d558afd12d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Senegal like brothers despite Mane and Kouyate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQAvFULwZ-_uBTX58k287qAYPS19z8GeW5Y6cRXEK4KFtW0Mh2djZjxXexTmUg7wgOy8ivukjbX" alt="2022 World Cup: Senegal like brothers despite Mane and Kouyate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kalidou Koulibaly has revealed Senegal&#39;s togetherness despite missing injured Sadio Mane and Cheikhou Kouyate at the 2022 World Cup finals.</p></div>
            </div>
        </a>
        </Template></>;
}