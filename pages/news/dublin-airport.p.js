import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dublin Airport</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dublin Airport"/>
        <meta name="description" content="Trending News about Dublin Airport" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dublin Airport</h1>
            <Image width={800} height={500} src="https://www.independent.ie/life/travel/travel-news/fcaa7/42208379.ece/AUTOCROP/w1240h700/IMG_7042.jpg" alt="Dublin Airport"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/life/travel/travel-news/dublin-airport-travel-disruption-to-continue-into-saturday-as-more-flights-cancelled-following-snow-and-freezing-fog-42207869.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow, weather and travel: Dublin Airport chaos to continue into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS69rZjiVOtwwsUBCw4jIaXN7nNDjPAgGZ5hYtrwOgagoq_dBoP7WDrqYVbJXT87hNND_zOmgDO" alt="Snow, weather and travel: Dublin Airport chaos to continue into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Travel disruption looks set to continue into a second day after 143 flights due to depart or land in Dublin Airport were cancelled on Friday.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41025122.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Icy conditions see several flights delayed at Dublin Airport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQS1DlyiJpN0Cy9X60pBd6kBzQEopeTeT1PajHJ2qpesK7RKv-mflG6HisitjwEz5sK0t95aK3p" alt="Icy conditions see several flights delayed at Dublin Airport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>daa advised passengers to check with their airline for the latest flight information regarding their specific flight.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/passengers-report-six-hour-waits-28695391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dublin Airport passengers report six-hour waits on planes as snow ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFXgh8z6ZezcDjKwSXIqhivUakCgOQhSDAnBgPc0yNSm82tBKYtA7coK9XyxyoHQ4h7C0YYHEv" alt="Dublin Airport passengers report six-hour waits on planes as snow ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The daa confirmed that a number of flights have been cancelled on Friday due to snow and ice at Dublin Airport.</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/dublin-airport-laser-investigation-5942141-Dec2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Investigation launched after aircraft landing at Dublin Airport ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSoEGRo_jTskgRmeo9GbX7ZBzJXCmPW6eUwdz3Q7neKWROFKKqyyfnJRKwUDWp8ubDZrNcBOO1a" alt="Investigation launched after aircraft landing at Dublin Airport ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is understood that at least five aircraft were targeted by the laser pointer and that they were shone at the pilots from the Blanchardstown area of west&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/flight-delays-dublin-airport-cold-weather-ice-5941672-Dec2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cold weather severely disrupts Dublin Airport as 143 flights cancelled</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSR0L9KmduThpj3N8rAYXP-Xn6fJmUedJCunV4wz_Wv94h5UZdFHoTkLiGGDUQxHcL8JqtpUwhC" alt="Cold weather severely disrupts Dublin Airport as 143 flights cancelled" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Severe weather causing difficulties for airlines attempting to de-ice planes have caused 69 flights out of Dublin Airport to be cancelled today, with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/dublin-airport-passengers-furious-snow-25712289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dublin Airport passengers furious as snow strands them on planes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIzR_XFiQsKw3eOhZEYb2A5TtCjQwqDCuOwepUm4clVX0L6P_Ypgh8Ja05WL-DsQDACYGDIUUr" alt="Dublin Airport passengers furious as snow strands them on planes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dublin Airport is currently experiencing delays to both inbound and outbound flights due to icy conditions and sub zero temperatures.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/planes-targeted-lasers-approach-dublin-28692955'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Planes targeted by lasers on approach to Dublin Airport as pilots ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQi1WTyGVS3f35kuRhqcVb1xYfwM6EHESQOj1M4Vx6m4u9mUYvMztcsgfQ_RFqEiY5tW9SCYji9" alt="Planes targeted by lasers on approach to Dublin Airport as pilots ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardai have confirmed that &#39;inquiries are ongoing&#39; after reports of the laser attacks were made to them.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/ireland/2022/12/09/gardai-investigating-laser-pointer-attacks-on-planes-landing-at-dublin-airport/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gardaí investigating laser pointer &#39;attacks&#39; on planes landing at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRchm9PbiUQQO55ug1P7z3fYTkjJcrj70cWZBGnsRrl0OB6SooXpt4pH9lLtvgqdo0-itb53-cC" alt="Gardaí investigating laser pointer &#39;attacks&#39; on planes landing at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardaí are investigating an incident in which a laser pointer was aimed at flights landing at Dublin Airport last week, with the national pilots&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/laser-pen-attacks-at-dublin-airport-spark-security-concerns-1403525.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laser pen attacks at Dublin Airport spark security concerns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRGX3SvvcXRedSDXopTXaMN9NX8IgoC68br8ueQc5yAugHDsCCjzSkj_-WFwMEAGFcyE5yu0j6" alt="Laser pen attacks at Dublin Airport spark security concerns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least five flights were targeted while trying to land last Friday night though none were forced to divert.</p></div>
            </div>
        </a><a href='https://simpleflying.com/dublin-ice-leads-ryanair-flight-cancelations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Overnight Ice Prompts Ryanair Cancelations In Dublin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToWNi2GuXCHLHLYWCoxa5fB5inYqqk0roS_ilB0qJQzTi71keLZduT2YQHhk9vopO2Ir-08xx3" alt="Overnight Ice Prompts Ryanair Cancelations In Dublin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“While the runways and taxiways at Dublin Airport have been open and operational all day, some airlines experienced delays to their flight schedules due to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}