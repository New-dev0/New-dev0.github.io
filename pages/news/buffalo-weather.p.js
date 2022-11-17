import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Buffalo Weather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Buffalo Weather"/>
        <meta name="description" content="Trending News about Buffalo Weather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Buffalo Weather</h1>
            <Image width={800} height={500} src="https://s.w-x.co/lake-effect-forecast-15nov22.jpg" alt="Buffalo Weather"/>
            <h3>Recent News</h3>
            <a href='https://weather.com/storms/winter/news/2022-11-15-lake-effect-snowstorm-buffalo-new-york'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feet Of Lake-Effect Snow Possible In New York Into The Weekend</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUExvoWRXXAbrUjDYd-NLcjermCey1KK03xtPO6FOo2IIBHjwvGkDW9uI3hosrPidNp4lXUkY3" alt="Feet Of Lake-Effect Snow Possible In New York Into The Weekend" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This setup is likely to wring out prolific snow totals. Here&#39;s where, when and why that could happen. - Articles from The Weather Channel | weather.com.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/16/us/buffalo-ny-snowstorm.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Paralyzing Snowfall&#39; Forecast for Buffalo This Week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFezhumFo1nqdrOOPH5kByuaGGd7x563oCZQ26zdqB21Or2p4wXMc393b_5Fv8zp79xYlpj1ee" alt="&#39;Paralyzing Snowfall&#39; Forecast for Buffalo This Week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A potentially crippling early season snowstorm is taking shape in the Great Lakes region, and places such as Buffalo, no stranger to winter weather,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/climate-environment/2022/11/16/buffalo-watertown-snow-lake-effect/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo, western N.Y. brace for &#39;crippling&#39; lake-effect snowstorm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRw8ZSLg4drdtG90vWNMYuwaAWU-27dTPdzfyEwiHo6Lmpp0L0kswpTC4qu8yGKp-ESLkzDsTQA" alt="Buffalo, western N.Y. brace for &#39;crippling&#39; lake-effect snowstorm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Around 3 feet of snow is forecast for Buffalo, with 4 feet not out of the question.</p></div>
            </div>
        </a><a href='https://globalnews.ca/news/9282854/buffalo-snowstorm-forecast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Paralyzing&#39; snowstorm set to bury Buffalo, N.Y. under 3 feet of snow</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRu-pVX--mqAWSv3dT8yE5DhB3ASQ3JOC7k8n42PQ7R8A5MHcZrwcIz6qkJQJk98sSnqXfvKWnJ" alt="&#39;Paralyzing&#39; snowstorm set to bury Buffalo, N.Y. under 3 feet of snow" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warm weather conditions have set the scene for a winter wallop that&#39;s expected to cripple parts of New York state.</p></div>
            </div>
        </a><a href='https://abcnews.go.com/US/significant-lake-effect-snow-forecast-buffalo-york/story?id=93414183'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Up to 4 feet of lake-effect snow forecast for Buffalo, New York</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYYoCXH52EShtSj_051x0x1m8ZB1-IlWFfICDmPVmNBs3gwotY3dQlW5jtFJuPqtMOwTgFs4es" alt="Up to 4 feet of lake-effect snow forecast for Buffalo, New York" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A lake-effect snow warning is in effect starting 7 p.m. Wednesday through 1 a.m. Saturday for southern Erie County.</p></div>
            </div>
        </a>
        </Template></>;
}