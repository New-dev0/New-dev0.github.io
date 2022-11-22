import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Power Rangers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Power Rangers"/>
        <meta name="description" content="Trending News about Power Rangers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Power Rangers</h1>
            <Image width={800} height={500} src="https://variety.com/wp-content/uploads/2022/11/jason-david-frank-obit.jpg?w=1000&h=562&crop=1" alt="Power Rangers"/>
            <h3>Recent News</h3>
            <a href='https://variety.com/2022/tv/obituaries-people-news/jason-david-frank-dead-power-rangers-1235438070/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason David Frank, &#39;Mighty Morphin Power Rangers&#39; Star, Dies at 49</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYmJboV5PQoY3ClZop4myKHG7uM7kjNPVa54FH9s-rNeOxEH6blHe8_JCWWQ0cH5f5x7NpB7SI" alt="Jason David Frank, &#39;Mighty Morphin Power Rangers&#39; Star, Dies at 49" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jason David Frank, who originated the role of the Green Ranger Tommy Oliver in the &quot;Power Rangers&quot; franchise, has died. He was 49.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/20/1138140645/jason-david-frank-dies-green-power-ranger'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason David Frank, who played Tommy Oliver in the &#39;90s Power ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVc_kvPCB-dXlufZXbq6yQsKXOr2NZ6sWZDK81JAlXZZ8vPNewRin7mdwGLp2ysbcZFfOS7efH" alt="Jason David Frank, who played Tommy Oliver in the &#39;90s Power ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEW YORK — Jason David Frank, who played the Green Power Ranger Tommy Oliver on the 1990s children&#39;s series &quot;Mighty Morphin Power Rangers,&quot; has died.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/20/arts/television/jason-david-frank-dead.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former &#39;Power Rangers&#39; Star Jason David Frank Dies at 49</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSa5tYDPfsoWvKx1IAQcUTMFvZfr1S2a05idfBCJzoVv07eA1jjXk7fOkHAcpu24weBAelAsJ8d" alt="Former &#39;Power Rangers&#39; Star Jason David Frank Dies at 49" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mr. Frank played the Green and White Rangers in the campy television show, which featured six teenage high school students who transformed into superheroes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/20/entertainment/jason-david-frank-power-ranger-death-trnd/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason David Frank, Power Rangers actor, dies at 49</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQL-q1ky9JhJ2q5MhjhJRLbV9WO_aO1gxevB9QPlZbesIQj0H-7BPlAHJTZFSMMDyAtxA-hN51W" alt="Jason David Frank, Power Rangers actor, dies at 49" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actor Jason David Frank, best known for starring in the original &quot;Mighty Morphin Power Rangers&quot; TV franchise, has died, according to multiple reports citing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcnews.com/pop-culture/pop-culture-news/jason-david-frank-power-rangers-star-dies-49-rcna58079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jason David Frank, &#39;Power Rangers&#39; star, dies at 49</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIjRQx0xDAEFhtkL86IZLns9kp0NFN9SyuZMiWFQUqHK24ifmeTeov2focGvZwVhTzKK7IvOB6" alt="Jason David Frank, &#39;Power Rangers&#39; star, dies at 49" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frank was best known for his role as Tommy Oliver in the “Mighty Morphin Power Rangers” television series, which ran for three seasons from 1993 to 1996.</p></div>
            </div>
        </a><a href='https://www.inverse.com/entertainment/jason-david-frank-power-rangers-star-dead-at-49'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Power Rangers&#39; star Jason David Frank&#39;s true superpower was his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3v-BGjH7WzgHOWAv_Krw4rJ0m5Q3E4Z1jgUi_bHqPfFKNvXNPvmGs-cbp_XOjKYZafZMCrNz2" alt="&#39;Power Rangers&#39; star Jason David Frank&#39;s true superpower was his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While foremost a martial artist — he had a 4-0 record in amateur MMA, was inducted into the Karate Union Hall of Fame in 2003, and owned a chain of karate&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}