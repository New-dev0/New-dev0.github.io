import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>George Harrison</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,George Harrison"/>
        <meta name="description" content="Trending News about George Harrison" /></Head><Template>
            <h1 style={{fontSize: "30"}}>George Harrison</h1>
            <Image width={800} height={500} src="https://images.bauerhosting.com/marketing/sites/16/2022/11/GEORGE-HARRISON-HERO-2.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill" alt="George Harrison"/>
            <h3>Recent News</h3>
            <a href='https://www.mojo4music.com/articles/stories/george-harrison-remembered/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Harrison Remembered</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZFuufw-Y2zZnaIDI9gX7m94LsxYSfu29K3chuq_YT3E1sN5KJEU8RkPxVLRa8xBFkNbAs8PhU" alt="George Harrison Remembered" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Friends and collaborators pay tribute to the former Beatle, who passed away 21 years ago.</p></div>
            </div>
        </a><a href='https://www.guitarworld.com/features/george-harrison-15-greatest-guitar-moments-after-beatles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Harrison&#39;s 15 greatest guitar moments after The Beatles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRA86SIBTAyXyOVRfTYSueoNlFsqNpeLj1vyZDNMoR4mr66DmDK9OzC7-VjJLMPP-yClsUZmnXx" alt="George Harrison&#39;s 15 greatest guitar moments after The Beatles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the breakup of the Beatles, Harrison invented an entirely new, distinctive, and often-imitated guitar persona for himself. Revisit the finest of&nbsp;...</p></div>
            </div>
        </a><a href='https://americansongwriter.com/5-deep-cuts-from-george-harrison-that-you-should-be-listening-to/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 Deep Cuts From George Harrison That You Should Be Listening To</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTziTHPRa1h0p71IEilGuvF5PSip1kwqwa8zL7RfLy2ooVYL0I4AreF7dMAjrvEYpDWA9DOGmLN" alt="5 Deep Cuts From George Harrison That You Should Be Listening To" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Like much of the Beatles&#39; solo music, this track from All Things Must Pass points fingers at his former bandmates in the wake of their breakup. He sings You&#39;ve&nbsp;...</p></div>
            </div>
        </a><a href='https://tulsaworld.com/entertainment/music/this-day-in-history-beatles-guitarist-george-harrison-dies-at-58/video_da6adee7-146b-56b1-b24b-1f7cb141e9ac.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Day in History: Beatles guitarist George Harrison dies at 58</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIjoWj0klIXNlBSgkU3IVdeh9mcO6c912tLaRoqdzQxz7zcmE8bMeeeJUn5tgOTj0M9HXIZq5V" alt="This Day in History: Beatles guitarist George Harrison dies at 58" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The youngest member of the Beatles was 58 years old when he succumbed to throat cancer. Known as &quot;the quiet Beatle,&quot; Harrison was often overshadowed by Paul&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/entertainment/music/1703647/george-harrison-death-the-beatles-ringo-starr-paul-mccartney-final-meeting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Harrison refused to be sad in final meeting with The Beatles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSopaCISO2boIni5erkYEbz-ZcySjqrIXddiG8JQkthO6aa1ABKx-7ttIhzhAmaTu6czVfa8gag" alt="George Harrison refused to be sad in final meeting with The Beatles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harrison seemingly didn&#39;t want to dwell on the sadness of their meeting, however. So, just 17 days before his death, Harrison invited McCartney and Starr to a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.clashmusic.com/news/george-harrisons-final-words-sum-up-the-majesty-of-the-man/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Harrison&#39;s Final Words Sum Up The Majesty Of The Man</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoQZOzxFU7bgVEOq7alTfL8606R64O6N6gNb1vnksMAma7CM4LWVXUDPcheOXzIhSZDChnSgrY" alt="George Harrison&#39;s Final Words Sum Up The Majesty Of The Man" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Harrison&#39;s final words encapsulate the beauty of the Quiet Beatle. The guitarist was diagnosed with cancer during the 90s, but seemed to be.</p></div>
            </div>
        </a>
        </Template></>;
}