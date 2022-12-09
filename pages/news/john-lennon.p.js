import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>John Lennon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,John Lennon"/>
        <meta name="description" content="Trending News about John Lennon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>John Lennon</h1>
            <Image width={800} height={500} src="https://img.resized.co/hotpress/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLmhvdHByZXNzLmNvbVxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTJcXFwvMDgxMjUxMzlcXFwvUi0yX0pMZW5ub24xOTc0X0dydWVuLWUxNjcwNTAzOTQwOTY1LmpwZ1wiLFwid2lkdGhcIjo2NDcsXCJoZWlnaHRcIjozNDAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5ob3RwcmVzcy5jb21cXFwvaVxcXC9uby1pbWFnZS5wbmc_dj04XCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjJkNDE3YzVlMjA5N2U4ZTY2ZDk0YzEyMDliZjcyMGE3ZWRjZjliYTIifQ==/r-2-jlennon1974-gruen-e1670503940965.jpg" alt="John Lennon"/>
            <h3>Recent News</h3>
            <a href='https://www.hotpress.com/music/on-this-day-in-1980-john-lennon-was-killed-in-new-york-aged-40-22942630'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>On this day in 1980: John Lennon was killed in New York, aged 40</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThKDwffro-x1TU3xXuhvN6Sf3ZMolHOuHihM2CHcpcdLqhfHIER57_OJVG3oNKi3OR_F-fiLuC" alt="On this day in 1980: John Lennon was killed in New York, aged 40" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>42 years ago today, John Lennon was fatally shot in the archway of The Dakota in New York City. To mark his anniversary, we&#39;re revisiting his close friend&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/john-lennon-assassinations-anniversary-see-what-happened-on-fateful-day/articleshow/96093883.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon assassination&#39;s anniversary: See what happened on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP-AzkXQoXVghOuv4mdIyWcupD5qasxIXYQs4naQ3_H1eD1u7CnFnJniQaDZdRtNotQbwihK5f" alt="John Lennon assassination&#39;s anniversary: See what happened on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is the 42nd anniversary of John Lennon&#39;s assassination. Lennon was killed in December 1980 in New York.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/lifestyle/music/2022/12/08/6391ce92268e3ee2248b4602.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon&#39;s murder: How did The Beatles react to his death 42 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyjPZ6Z1DzhrmCu73tSzzXVAUs8-xPSvYHx6vJ6-AGXjFGn9f59Xg7jhNwwHzi51KbDZiLOZ_n" alt="John Lennon&#39;s murder: How did The Beatles react to his death 42 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On December 8, 1980, the world was rocked by the news that Beatles star John Lennon had been murdered. The culprit was a man named Mark Chapman who gunned&nbsp;...</p></div>
            </div>
        </a><a href='https://www.edinburghnews.scotsman.com/news/people/john-lennon-murder-beatles-legends-edinburgh-links-remembered-on-42nd-anniversary-of-assassination-3945885'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon murder: Beatles legend&#39;s Edinburgh links remembered ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9soTS7S88ppWUvz4dFWscrRmwQF78VqBy59kY9YitOVGLCrH9N3NdYziNCDb3OWvlPD_208fM" alt="John Lennon murder: Beatles legend&#39;s Edinburgh links remembered ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>John Lennon was murdered by Mark Chapman on the night of December 8, 1980, as he and Yoko Ono were returning to their New York apartment.</p></div>
            </div>
        </a><a href='https://americansongwriter.com/john-lennon-yoko-ono-love-story-10-songs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon and Yoko Ono&#39;s Love Story in 10 Songs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5TsPaWKB7T90rlcBiLKFzDFNmD4r6CIJ1TBy3L2mtenjslYxqz2Ud8dWjQwRQPuhdZbCVb8G1uw" alt="John Lennon and Yoko Ono&#39;s Love Story in 10 Songs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Much of John Lennon and Yoko Ono&#39;s relationship is documented somewhere in a song. Here&#39;s s a timeline of the Lennons&#39; relationship.</p></div>
            </div>
        </a><a href='https://mybighornbasin.com/today-marks-the-42nd-anniversary-of-john-lennons-tragic-death/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Today Marks the 42nd Anniversary of John Lennon&#39;s Death</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsVYiekEvgjzYZ5NPDdSY-jw_icYx9TJCFxXpiqXXFJyccCM4fqJSJenQktiwhHGrt8pJ7GYD0" alt="Today Marks the 42nd Anniversary of John Lennon&#39;s Death" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On this day in the evening of December 8, 1980, John Lennon of the Beatles , was shot and fatally wounded outside of his home in the Dakota,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nationalworld.com/culture/music/john-lennon-when-did-he-die-how-beatles-mark-chapman-3946738'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Lennon: when did ex Beatles star die, how did he die, who ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHcSUgR_IkTHi7fXr6p2jkTczXSL6lplGH8rHDexXeZ70_iy00upyLNDE4Ayp5NMKapTa7ey1D" alt="John Lennon: when did ex Beatles star die, how did he die, who ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>John Lennon was shot dead by Mark David Chapman outside his New York apartment 42 years ago today.</p></div>
            </div>
        </a><a href='https://www.godisinthetvzine.co.uk/2022/12/08/i-hope-you-like-feminist-rants-3-john-lennon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I Hope You Like Feminist Rants #3 - John Lennon - God Is In The TV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJm3m6hqNsTHmEwNAcRbNa_BaJ9gpZolmgwGnCpgkqhg3uPLviX7XZkD61umvLyK1y5wncLRYt" alt="I Hope You Like Feminist Rants #3 - John Lennon - God Is In The TV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When John Lennon died on 8 December 1980, the world was a very different place to the one in which we live today. Examining happenings and people from a.</p></div>
            </div>
        </a><a href='https://www.broadwayworld.com/bwwmusic/article/Rare-John-Lennon-Yoko-Ono-Issue-of-Rolling-Stone-is-Being-Auctioned-for-Charity-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rare John Lennon-Yoko Ono Issue of Rolling Stone is Being ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUIcNs4bDFu-LasPZmT0whddJj65ZlQi8g3xPnBKgG6Hqt_zd5LtdCLJWmZWdg5J55Vs8h-OtH" alt="Rare John Lennon-Yoko Ono Issue of Rolling Stone is Being ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rolling Stone announced the auction of a rare collector&#39;s edition of its iconic John Lennon and Yoko Ono cover from 1981. Exactly 42 years anniversary ago&nbsp;...</p></div>
            </div>
        </a><a href='https://www.salemnews.com/opinion/column-john-lennon-last-day-in-the-life/article_bbbec38a-7587-11ed-80e6-83114a1b88c2.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Column: John Lennon, last day in the life</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNWWO7G4gzijB9XhBI0PENn7O2ZcjuiOfD5c4F4HWMTtiXje733wO_3Jo3xmz29e6pNESBgLxN" alt="Column: John Lennon, last day in the life" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The last day of John Lennon&#39;s life, Dec. 8, 1980, was extremely exciting and eventful. There was the photo shoot by Annie Leibowitz that ended up on the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}