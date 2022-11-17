import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake"/>
        <meta name="description" content="Trending News about Earthquake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake</h1>
            <Image width={800} height={500} src="https://npr.brightspotcdn.com/dims4/default/0eff34c/2147483647/strip/true/crop/1400x735+0+105/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa8%2F28%2F5b46b4dd45cf93e2755955f0e690%2Fquake.png" alt="Earthquake"/>
            <h3>Recent News</h3>
            <a href='https://www.kut.org/texas/2022-11-16/5-4-magnitude-earthquake-hits-west-texas-with-reports-of-shaking-stretching-to-austin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5.4 magnitude earthquake hits West Texas, with reports of shaking ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkgLCfxas40RSN_l-Z-fwZI6ijvJMQf9PQxvMlUln-frld93hfCc28Zc0p6mF6BwIKX4F2sI-S" alt="5.4 magnitude earthquake hits West Texas, with reports of shaking ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The earthquake is one of the largest in Texas history. A geophysicist with the USGS said the earthquake was likely caused by oil and gas industry activity&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tpr.org/environment/2022-11-16/you-werent-imagining-it-san-antonio-felt-that-west-texas-earthquake'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You weren&#39;t imagining it: San Antonio felt that West Texas earthquake</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5FrPCryvb4IfMQuggJ29R5GHBAtmxkmbTqEK_fwzQOEm0Qua5-ZOke_Xw1oXdjG2-_VA5oz15" alt="You weren&#39;t imagining it: San Antonio felt that West Texas earthquake" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But for others in San Antonio, the 5.3 magnitude earthquake that struck West Texas around 3:30 p.m. was felt so intensely that they were evacuated from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxweather.com/extreme-weather/earthquake-impacts-texas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Unusually strong earthquake rattles Lone Star State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsEYCObYlQO6gSRsq7_Bp1jF0flqhS0Gix31R8HLuWP2_Vwa9_fV4eYHnl9K3hDeyu0w0plIgb" alt="Unusually strong earthquake rattles Lone Star State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Magnitude 5.3 earthquake strikes near Toyah, Texas on Wednesday afternoon. A magnitude-5.4 earthquake rattled much of Texas Wednesday afternoon, leaving&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ksat.com/weather/2022/11/16/san-antonio-residents-feel-a-shake-following-53-magnitude-west-texas-earthquake/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>San Antonio residents feel a shake following 5.4 magnitude West ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9MqLI7STXVlmMmKt-RTM8RR1NAcLSXWs1YKDNCjhziTfy0rCU15uYlB0hVQXIvGSuAmjgjb1d" alt="San Antonio residents feel a shake following 5.4 magnitude West ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to San Antonio police, residents in high rise buildings near downtown felt what was likely effects from a 5.4 magnitude earthquake that occurred&nbsp;...</p></div>
            </div>
        </a><a href='https://www.currentargus.com/story/news/2022/11/16/earthquake-today-in-carlsbad-nm-new-mexico-downtown-merchants-did-you-feel-that-shaking-earthquakes/69655294007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake shakes Carlsbad, southern New Mexico. Merchants ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNddYX18s52a4nKqjdRvq71u5hbanbf9Mxn-pUGK3sgov6mnB4p4ka4FknWgYi7AXRVI1dTicr" alt="Earthquake shakes Carlsbad, southern New Mexico. Merchants ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The U.S. Geological Survey (USGS) reported a magnitude (M) 5.3 earthquake at about 2:30 p.m. centered in Toyah, Texas.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/us/magnitude-53-earthquake-strikes-western-texas-emsc-2022-11-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magnitude 5.3 earthquake strikes western Texas - EMSC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkwB0rXiYTsPyp-B5GL1EtpMZORJCYmTXFLvUY83z5wMRYawQltTQc1-OXChOsPL7AxF9vx1TE" alt="Magnitude 5.3 earthquake strikes western Texas - EMSC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake of magnitude 5.3 struck western Texas on Wednesday, some 45 km (27.96 miles) from the town of Pecos, the European Mediterranean Seismological&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}