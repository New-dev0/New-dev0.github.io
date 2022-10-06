import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mr. Harrigan's Phone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mr. Harrigan's Phone"/>
        <meta name="description" content="Trending News about Mr. Harrigan's Phone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mr. Harrigan's Phone</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/mr-harrigans-phone-review.jpg" alt="Mr. Harrigan's Phone"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/entertainment/movie-review/mr-harrigans-phone-movie-review-netflix-stephen-king-adaptation-8191334/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mr Harrigan&#39;s Phone movie review: Hang up on Netflix&#39;s new horror ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSzD1I8xOg2d2SBCB-fW6j2VH7LFXnKx432HCWnjJ6-zfV5OewEy3TaXYGG2vei77ARTwqBiHc" alt="Mr Harrigan&#39;s Phone movie review: Hang up on Netflix&#39;s new horror ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr Harrigan&#39;s Phone movie review: Netflix&#39;s lifeless Stephen King adaptation -- starring Jaeden Martell and Donald Sutherland -- is neither scary nor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rogerebert.com/reviews/mr-harrigans-phone-movie-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mr. Harrigan&#39;s Phone movie review (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIBOXmc2gT-2eiyDx4-3XmU8qZyrmbOuf9b2bu1VUvjx8YVK4rVkB8yCdJvIdNfQ4Y3zXDr1u4rA" alt="Mr. Harrigan&#39;s Phone movie review (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He brings the earnestness of those films to King&#39;s ghost story and proves to be the wrong filmmaker for this project. “Mr. Harrigan&#39;s Phone” needed a&nbsp;...</p></div>
            </div>
        </a><a href='https://dmtalkies.com/mr-harrigans-phone-ending-explained-2022-netflix-film-john-lee-hancock/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Mr. Harrigan&#39;s Phone&#39; Ending, Explained: How Does Craig Keep ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQq6FxkJ0bT7eDyfsIpcYrLuiWEhDOyDVW2Jn-NpH4kK-_BugRFsbaKNpyWXcU_mC4RUc7oOevE" alt="&#39;Mr. Harrigan&#39;s Phone&#39; Ending, Explained: How Does Craig Keep ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Based on a novella by the same name, the new Netflix film follows a teenager named Craig who has a set of supernatural experiences after the death of Mr.</p></div>
            </div>
        </a><a href='https://collider.com/jaeden-martell-mr-harrigans-phone-interview-stephen-king/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaeden Martell Talks &#39;Mr. Harrigan&#39;s Phone&#39; and Being the Stephen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOenIRjDdXHCPnLe9919HwvZIfZj4wLUBd8wyqtpqlTM7uKBBx1L8eoioQ9xTa2zj5VdK1PYQpCA" alt="Jaeden Martell Talks &#39;Mr. Harrigan&#39;s Phone&#39; and Being the Stephen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Directed by John Lee Hancock, the story follows the friendship between a kid, Craig (Jaeden Martell) and a miserly billionaire, Mr. Harrington (Donald&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/10/05/entertainment/mr-harrigans-phone-review/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Mr. Harrigan&#39;s Phone&#39; gets its message across with a smart Stephen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQxPmmp4QQCBzr67jcOE5EYuQjoRkZ4GmeXKsTAnYXHjrKygPlXhwLoOg3mno7VG2dryb6q9qr" alt="&#39;Mr. Harrigan&#39;s Phone&#39; gets its message across with a smart Stephen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Add &quot;Mr. Harrigan&#39;s Phone&quot; to the relatively short list of really good Stephen King adaptations, garnishing a coming-of-age story with understated hints of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/film/2022/oct/05/mr-harrigans-phone-movie-review-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mr Harrigan&#39;s Phone review – minor Stephen King gets minor Netflix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9XWNQKev6Lg7lMql5pEZYRl8WHZx1YFW1jToNDAAr--G8Uoil1TVfcvWls3lSagpYod6E1Vhj" alt="Mr Harrigan&#39;s Phone review – minor Stephen King gets minor Netflix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaeden Martell stars as a teen who might be texting with a ghost in a languid tale that recycles familiar King tropes without adding anything new.</p></div>
            </div>
        </a>
        </Template></>;
}