import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Snow</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Snow"/>
        <meta name="description" content="Trending News about Snow" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Snow</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cf8b4-1600.jpg" alt="Snow"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/news/weather/2022/1209/1340874-weather-ireland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Met Éireann warns of &#39;long cold spell&#39; into next week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvWvWD1y_YesF-4rrbmWyFpvi1pWDErfF4Gf3wiQJieffaYuPXTjbw5NXLDJBnXOO7QRVLi3Ye6g" alt="Met Éireann warns of &#39;long cold spell&#39; into next week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Most counties remain under weather warnings tonight, with a mixture of scattered sleet and showers as well as icy stretches and freezing fog adding to a day&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-63916101'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UK weather: More snow on the way as people struggle to heat homes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWu1e-Hjo0Fy0dOzpmVu18v4cO10MBQG4O4uvWrwBJjUK8d6Fbi6oPb3Aq_dnpu-gw51wBVIJf" alt="UK weather: More snow on the way as people struggle to heat homes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cold snap continues with snow forecast for more areas, including London and the South East.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/snow-falls-across-parts-of-the-country-as-cold-snap-to-continue-next-week-1403421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weekend temperatures will struggle to get past freezing, says Met ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSX_QJoqGTysFla4ootrc8uqxPXG_vOPyxU6tR0w0ufv67cbcU-GDYN10n0pRFi7y-LcNMEM4Nu" alt="Weekend temperatures will struggle to get past freezing, says Met ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Updated 7pm. Yellow warnings for freezing fog and ice in place for the Republic; Separate yellow warning for snow and ice also in place for Donegal; Antrim,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/dublin-airport-passengers-furious-snow-25712289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dublin Airport passengers furious as snow strands them on planes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIzR_XFiQsKw3eOhZEYb2A5TtCjQwqDCuOwepUm4clVX0L6P_Ypgh8Ja05WL-DsQDACYGDIUUr" alt="Dublin Airport passengers furious as snow strands them on planes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dublin Airport is currently experiencing delays to both inbound and outbound flights due to icy conditions and sub zero temperatures.</p></div>
            </div>
        </a><a href='https://www.derryjournal.com/news/environment/weather-ice-snow-warnings-for-derry-donegal-in-force-into-weekend-3947887'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WEATHER: ICE &amp; SNOW warnings for Derry &amp; Donegal in force into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhh0hrdqkPazR9bmKvawWjazjKkABFr8iBjtx-rSIKQGSLpOk2cfetyEYSb8oRh9BXziqF0P5E" alt="WEATHER: ICE &amp; SNOW warnings for Derry &amp; Donegal in force into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A yellow warning for ice has been extended into the weekend for the north west as temperatures continue to hover around freezing point.</p></div>
            </div>
        </a><a href='https://www.independent.ie/life/travel/travel-news/dublin-airport-travel-disruption-to-continue-into-saturday-as-more-flights-cancelled-following-snow-and-freezing-fog-42207869.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow, weather and travel: Dublin Airport chaos to continue into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS69rZjiVOtwwsUBCw4jIaXN7nNDjPAgGZ5hYtrwOgagoq_dBoP7WDrqYVbJXT87hNND_zOmgDO" alt="Snow, weather and travel: Dublin Airport chaos to continue into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Travel disruption looks set to continue into a second day after 143 flights due to depart or land in Dublin Airport were cancelled on Friday.</p></div>
            </div>
        </a><a href='https://laois-nationalist.ie/2022/12/09/snow-falls-across-parts-of-the-country-as-cold-snap-to-continue-next-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weekend temperatures will struggle to get past freezing, says Met ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqljKPRHt2FvYhkX0h4QgQpJRI0-s7B9Fe6LY1HnjFt9Bgu47vmaNOjISXe6JYUEdp8-6NPXY6" alt="Weekend temperatures will struggle to get past freezing, says Met ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Updated 7pm. Yellow warnings for freezing fog and ice in place for the Republic; Separate yellow warning for snow and ice also in place for Donegal; Antrim,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/weather/snow-starts-to-fall-amid-weather-warnings-for-three-counties-as-varadkar-vows-no-power-cuts-for-homes-42204958.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cold weather forecast for Ireland: Met Éireann issue snow warnings ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7zgMvkwg_CAExmDFn9pWJr0NdLSBNFkOCvqzN5ktHpPNMirL91PVfhfc5lzf5sC1EaWLabSqm" alt="Cold weather forecast for Ireland: Met Éireann issue snow warnings ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Snow has started to fall in parts of the country with as Ireland is set to be plunged into sub-zero conditions by an Arctic air mass likely to bring the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/cold-snap-yellow-warnings-5941068-Dec2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow falls in parts of country as Status Yellow warnings take effect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDyXPnxEeWzUaMOsy4kZmIPsaxdwRAOkhSR-gatR_Eo4JPxo2yS3rrsspGdt-7O4PY7ujyUzHy" alt="Snow falls in parts of country as Status Yellow warnings take effect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Met Éireann has forecast severe frost and temperatures falling to -4 degrees Celsius.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/snow-and-cold-weather-disrupts-dublin-public-transport-1403495.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow and cold weather disrupts Dublin public transport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg6whvjzCf7E6Zcbs_RQBCErRSAekPAYwSj0fbvJvIueGJ0AOL0EcakvDhzV1B-140JH4ga2gq" alt="Snow and cold weather disrupts Dublin public transport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There are no Dart rail services between Howth and Howth Junction, with Dublin Bus accepting valid tickets.</p></div>
            </div>
        </a>
        </Template></>;
}