import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chris Brown</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chris Brown"/>
        <meta name="description" content="Trending News about Chris Brown" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chris Brown</h1>
            <Image width={800} height={500} src="https://img.buzzfeed.com/buzzfeed-static/static/2022-11/21/13/enhanced/01921cbb62e3/original-6745-1669037868-14.jpg?crop=1243:651;0,11%26downsize=1250:*" alt="Chris Brown"/>
            <h3>Recent News</h3>
            <a href='https://www.buzzfeednews.com/article/ellendurney/kelly-rowland-praised-chris-brown-amas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly Rowland Praised Chris Brown While Accepting An Award On ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrp1qJjQp3jir9EgQAxlsEOljWkL-So__rO5La835vaitSrNh56pXZ_AY6UXGRBKB7CYahUEru" alt="Kelly Rowland Praised Chris Brown While Accepting An Award On ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After Brown was crowned Favorite Male R&amp;B Artist at Sunday night&#39;s ceremony, Rowland gave a speech on his behalf and thanked him for “making great R&amp;B music&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecut.com/2022/11/kelly-rowland-chris-brown-american-music-awards.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Don&#39;t Boo Chris Brown Around Kelly Rowland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyzl69n4XbEebGPGNqvXsY3Jufv6UNEnZJDgh2P5lZOFtWdqlVg_8SDWuwY8tENfoZ2pfqS3nH" alt="Don&#39;t Boo Chris Brown Around Kelly Rowland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>During Sunday&#39;s American Music Awards, in what was perhaps the most cringeworthy moment of the night, Kelly Rowland announced that Chris Brown had won the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/story/2022-11-21/amas-2022-chris-brown-booed-kelly-rowland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AMAs 2022: Chris Brown gets booed, Kelly Rowland defends him</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoQr830r-roBhi4BrTckSWYxHYB9qoipYJ9gb1OcEeGt8K630utAwmQlBZsFnFQ2QgfwAxi8JN" alt="AMAs 2022: Chris Brown gets booed, Kelly Rowland defends him" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some applauded and others booed after Chris Brown won the American Music Award for male R&amp;B artist. Here&#39;s how Kelly Rowland responded.</p></div>
            </div>
        </a><a href='https://decider.com/2022/11/21/chris-brown-booed-american-music-awards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Brown Booed By Angry AMAs Crowd During Acceptance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-AF5Qq2NHRT3sEtkKFPs4EcylKLIMIamdjO_qHBWC3kiR9xYblTreygQbvQt0txutFyjuOu-o" alt="Chris Brown Booed By Angry AMAs Crowd During Acceptance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chris Brown was booed by the audience at the American Music Awards when Kelly Rowland accepted the Favorite Male R&amp;B artist award on his behalf.</p></div>
            </div>
        </a><a href='https://www.refinery29.com/en-us/2022/11/11200551/kelly-rowland-chris-brown-american-music-awards-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly Rowland Defended Chris Brown At The AMAs &amp; People Aren&#39;t ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQryKUt_arytUZ4YDduOLSWrF1IeBP8CxcZA_JEO98a2JWUF3JACphvMaaU7XJCVsjSBKnVVrxC" alt="Kelly Rowland Defended Chris Brown At The AMAs &amp; People Aren&#39;t ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The optics of Kelly Rowland, a dark-skinned Black woman who has been candid about her own experience with intimate partner violence, using a public platform&nbsp;...</p></div>
            </div>
        </a><a href='https://www.complex.com/music/kelly-rowland-chris-brown-american-music-awards'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kelly Rowland Tells Booing Crowd to &#39;Chill Out&#39; While Accepting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYOjQTPvPsmane9L7w5orzd_uISapeoi7LRlbwzAw5fPmdTT2GV8hT25Z8FhL_GDehpUynqYC1" alt="Kelly Rowland Tells Booing Crowd to &#39;Chill Out&#39; While Accepting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prior to this year&#39;s American Music Awards ceremony, Chris Brown claimed on social media that his Michael Jackson tribute performance had been scrapped.</p></div>
            </div>
        </a>
        </Template></>;
}