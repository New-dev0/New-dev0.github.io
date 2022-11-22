import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matt Turner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matt Turner"/>
        <meta name="description" content="Trending News about Matt Turner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matt Turner</h1>
            <Image width={800} height={500} src="https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/turner-wc-promo.png?itok=mB5ehmd6" alt="Matt Turner"/>
            <h3>Recent News</h3>
            <a href='https://www.arsenal.com/news/matt-turners-rapid-rise-college-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Turner&#39;s rapid rise from college to Qatar | Feature | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS97znkV-JoZm-Fiqnk5WI8mrKft15ZJpCKjKGYOTObCLb8IR9otmkoxZwaXEvsjNGx7ELlGk5u" alt="Matt Turner&#39;s rapid rise from college to Qatar | Feature | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When the USA take to the field this evening against Wales, it&#39;ll be their first World Cup match in over eight years. Much has changed in that time&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/matt-turner-usa-soccer-goalkeeper-world-cup-usmnt/h0g9uzsytohgcrhrnuiapd2a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is the USA&#39;s starting goalkeeper? Arsenal&#39;s Matt Turner hoping ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRInBqUkxZaqSp_kY6NBFnscU5DLwbtismfaMOaxBX1-wkeQ012d-bnESAg2zZ_MBHhqerNWlsP" alt="Who is the USA&#39;s starting goalkeeper? Arsenal&#39;s Matt Turner hoping ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If there&#39;s one place that the U.S. men&#39;s national team has thrived at, it&#39;s between the posts. From Kasey Keller to Tim Howard, Tony Meola to Brad Guzan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onlinegooner.com/articles/view/arsenal-keeper-matt-turner-shares-banter-with-aaron-ramsdale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal keeper Matt Turner shares &#39;banter&#39; with Aaron Ramsdale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ01Dm-t5TPKrQt5vtx8qSMBdQ3JeHqkftX7R6ZAl6Qe7Qa2HXfHZkzxTejgYAsWvTz7ivnSQ6" alt="Arsenal keeper Matt Turner shares &#39;banter&#39; with Aaron Ramsdale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal goalkeeper Matt Turner has opened up about life so far in North London and how he&#39;s remained poised ahead of the World Cup.</p></div>
            </div>
        </a><a href='https://www.newsweek.com/matt-turner-world-cup-soccer-usa-world-cup-final-1758309'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Turner: I Treat Every Game Like a World Cup Final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7nnIStKoDXcth3kU8PlTMZlfzMnsl-8UltIvBoJxZTiKUvBXvfEBZ91UN0lRFl_WK-6q-HNoE" alt="Matt Turner: I Treat Every Game Like a World Cup Final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I was 16 years old when I watched my first World Cup, in 2010. It was unlike anything I&#39;d ever seen before. When Landon Donovan scored the goal against&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}