import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eve Hewson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eve Hewson"/>
        <meta name="description" content="Trending News about Eve Hewson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eve Hewson</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article23540533.ece/ALTERNATES/s1200/1_JS229077073.jpg" alt="Eve Hewson"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/news/irish-news/irish-actress-eve-hewson-corrects-28642368'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish actress Eve Hewson corrects The New York Times - after being ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdnbq_7aPxsfwb6TcTTFqY_r8sYQyjtnglrDU5QVY8S0i8_3v6TK6LkX8AG0KAId0NgcYkOjvQ" alt="Irish actress Eve Hewson corrects The New York Times - after being ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s far from the first time an Irish celebrity has been wrongly claimed to be from somewhere else.</p></div>
            </div>
        </a><a href='https://www.rte.ie/entertainment/2022/1201/1339520-irish-stars-bewildered-after-being-called-british/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish stars bewildered after being called British</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTo3z7N0I-5iE2AWJrSaKI0B6-qT_JJzuwj9xZOIbOoUBT4zckOKO7vUcO1VF0iALY9nuLxLG0f" alt="Irish stars bewildered after being called British" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A group of well-known Irish actresses, including Eve Hewson and Eva Birthistle, have reacted with surprise after they were described as British by The New&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9835546/sharon-horgan-eve-hewson-eva-hit-back-shock-error/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bad Sisters stars Sharon Horgan, Eva Birthistle and Eve Hewson hit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNufpNre60FNW9ihoR0k-MaEcmfYZFfQq6O53_UpK4w5Pgry5XtLYPPLm6smrUdVfmTZ477rUj" alt="Bad Sisters stars Sharon Horgan, Eva Birthistle and Eve Hewson hit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BAD Sisters stars Sharon Horgan, Eva Birthistle and Eve Hewson have hit back at a shock error.The actresses have all reacted to a false statement abou.</p></div>
            </div>
        </a><a href='https://entertainment.ie/tv/tv-news/bad-sisters-irish-not-british-new-york-times-549018/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eve Hewson wasn&#39;t happy with the New York Times for calling the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7pnQJxJcGEeYNYZ0giZrgAUwZevuzY8rdpQ0I9gnyOkkpHie-2xC76V8rDeaoq9MXQRSbtWoW" alt="Eve Hewson wasn&#39;t happy with the New York Times for calling the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Normally, it&#39;s the British media who make it their business to wind us up collectively as a nation by trying to claim our most successful athletes,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishpost.com/entertainment/bad-sisters-stars-hit-back-at-new-york-times-article-referring-to-them-as-british-244090'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bad Sisters stars hit back at New York Times article referring to them ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5wkzFL0jVyKVjx7WSF_MFg6gxydyoIEb-g_kBBu2g2CE--IPT2KB8q04_BAt5JBp7Yfmi9wO8oQ" alt="Bad Sisters stars hit back at New York Times article referring to them ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The article, written by chief television critic James Poniewozik and television critics Mike Hale and Margaret Lyons featured the show in originally described&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}