import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Snow Ireland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Snow Ireland"/>
        <meta name="description" content="Trending News about Snow Ireland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Snow Ireland</h1>
            <Image width={800} height={500} src="https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTJcXFwvMDQxMjU2MTFcXFwvR2V0dHlJbWFnZXMtOTA1NjI5MDk4LWUxNjcwMTU4NTg4MTM2LmpwZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjI3LFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuYnJlYWtpbmduZXdzLmllXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmdcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiNTc4NjZlZGFjNzBlMjQyYTRjNmVhZDA1MWE3ZDE1NTBhNWE3Y2Q3NSJ9/chance-of-snow-next-week-as-arctic-airmass-moves-over-ireland.jpg" alt="Snow Ireland"/>
            <h3>Recent News</h3>
            <a href='https://www.breakingnews.ie/ireland/chance-of-snow-next-week-as-country-faces-into-cold-snap-1400946.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chance of snow next week as Arctic airmass moves over Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMKz4xvQgTnI5VPp-kGb0VW054woTJyFq4au8kOY7uEqCoL__Kk0ksvZ-eFRlR9oTuCuCDmpTt" alt="Chance of snow next week as Arctic airmass moves over Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Met Éireann has forecast hail, sleet and snow next week as the country faces into a spell of cold weather. Temperatures are set to fall considerably in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.ie/weather/ireland-weather-arctic-air-mass-to-descend-over-country-with-severe-frost-and-snow-forecast-42193882.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland weather: Arctic air mass to descend over country with severe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6HT37dKALJvilBuS2K4WHBfSfoSXYVRAJ2CLY4fYCrXq2ERZEFCJHJ4amlvkCwt-HVL2wDOZW" alt="Ireland weather: Arctic air mass to descend over country with severe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An arctic air mass is set to descend over Ireland, with severe frosts and icy roads, showers of hail, sleet and snow, forecast for midweek.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/met-eireann-confirms-snow-sleet-28650907'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Met Eireann confirms snow and sleet to hit Ireland this week as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOThbBfl_-wi454mPiJnCGZ06iv-NYWMwJwWkP08dYT920l9ubeaeAb7rDUmR-miYIXPd0XfBi" alt="Met Eireann confirms snow and sleet to hit Ireland this week as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Forecasters expect temperatures to drop to freezing conditions across the country, starting from today. A winter weather advisory for the whole country, issued&nbsp;...</p></div>
            </div>
        </a><a href='https://www.corkbeo.ie/news/local-news/met-eireann-issue-notice-ireland-25669957'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Met Eireann issue notice for Ireland as Arctic airmass to bring snow</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQI3oTDm4KaSYrvk6Kx6uJT6GRz85EFjl_fOgTH1sZI1_w5XLU5abTUV8sDZPFk2QyKt6YGumVQ" alt="Met Eireann issue notice for Ireland as Arctic airmass to bring snow" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They added that official weather warnings may be issued over the coming days.</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/met-eireann-confirms-exact-day-25670257'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Met Eireann confirms exact day snow will hit Ireland along with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpCyphYf4VJPaAGZomMN00-F3PoQz1oEA5f-veHSdmJoAeQG0gPjfm66j8OLj25AtZbP_fylP6" alt="Met Eireann confirms exact day snow will hit Ireland along with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In their latest forecast, Met Eireann have indicated that snow may fall on Thursday with temperatures dropping to below freezing.</p></div>
            </div>
        </a><a href='https://www.offalyexpress.ie/news/local-news/979663/ireland-weather-forecast-met-eireann-snow.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland Weather: Arctic airmass to bring snow and freezing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQW9yEy35krKIlD7E5Ifsb4vh-_cXoHS-Shc2V78KvLEF9eiIV9nvOlhcG3ISyFtpEpNmmxQ9-A" alt="Ireland Weather: Arctic airmass to bring snow and freezing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An Arctic airmass is to bring snow and freezing temperatures to Ireland this week, Met Eireann is warning. Met Eireann has issued a Winter Weather Advisory&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/news/9845601/exact-days-snow-ireland-major-temperature-swing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Exact days snow to hit parts of Ireland as Met Eireann say &#39;potential ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTF6royvbYbURfG910oLXCG4N7AvPJwAsK6ml0QeyFXESUsERkxEQiAnrJwdbv3lck-NECPVl8N" alt="Exact days snow to hit parts of Ireland as Met Eireann say &#39;potential ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Forecasters have said it&#39;s set to get &quot;very cold&quot; with hail, sleet and snow expected on Wednesday and Thursday as an Arctic airmass lands. Advertisement. Snow&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}