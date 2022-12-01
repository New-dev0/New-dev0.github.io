import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pope Francis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pope Francis"/>
        <meta name="description" content="Trending News about Pope Francis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pope Francis</h1>
            <Image width={800} height={500} src="https://www.thecatholictelegraph.com/wp-content/uploads/2022/11/popeorthodox.jpg" alt="Pope Francis"/>
            <h3>Recent News</h3>
            <a href='https://www.thecatholictelegraph.com/pope-francis-restoration-of-christian-unity-is-an-urgent-priority-in-todays-world/84376'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope Francis: Restoration of Christian unity is &#39;an urgent priority in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFZNRLJ4LLKxMzaPsParLk12Sk_Y9QmkSC_y7y9RhXtb8HqVY6kCNMnlRgZCSv4HG-FKd9QEri" alt="Pope Francis: Restoration of Christian unity is &#39;an urgent priority in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a letter to the Ecumenical Patriarch Bartholomew I of Constantinople, the pope expressed gratitude that Catholic and Orthodox Christians are seeking “to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ncregister.com/cna/pope-francis-spiritual-life-tip-a-daily-examination-of-conscience-helps-to-avoid-repeating-mistakes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope Francis&#39; Spiritual Life Tip: A Daily Examination of Conscience ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHMcNlp8kaDyg8YoEyudqny1cTWFMz-ImMBHf5PoG0Sly4UoRHDpLB2rykPVu9WM56GwIW46yD" alt="Pope Francis&#39; Spiritual Life Tip: A Daily Examination of Conscience ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pope Francis&#39; advice was part of his tenth catechesis in a weekly series on spiritual discernment, which he began at the end of August.</p></div>
            </div>
        </a><a href='https://www.jpost.com/christianworld/article-723765'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope Francis receives Israeli artwork depicting Jesus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0R4Uo9jgUPbIAYkHHLFThpgDfSJq-9oi_BJ5TG2F0OoOnTcQ9u3ztDVSPb4XWX7qFEtsmPqzW" alt="Pope Francis receives Israeli artwork depicting Jesus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Israeli artist Nilly Shachor found a formation of branches that look like crucified Jesus, so she took it home and enhanced it.</p></div>
            </div>
        </a><a href='https://www.vaticannews.va/en/pope/news/2022-11/pope-bartholomew-only-dialogue-can-overcome-conflicts.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope to Bartholomew: Only dialogue and encounter can overcome ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJPb-HzpdgUYiFs3b5zTNi_Mbj_PVWnT1EYbymoOqJ0YNh12FWRhh73YdWZ--4EFxDGF7PBW5o" alt="Pope to Bartholomew: Only dialogue and encounter can overcome ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Vatican Delegation led by Cardinal Sandri visits Istanbul for the occasion of the Feast of St. Andrew the Apostle and conveys Pope Francis&#39; ...</p></div>
            </div>
        </a><a href='https://www.catholicherald.com/article/global/pope-francis/even-a-two-minute-examination-of-conscience-is-helpful-pope-says/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Even a two-minute examination of conscience is helpful, pope says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAZgXpyZDfykDOjSfLUnmznJ8VzIleWySKh8PxhgzOjRK51_SumQwu_323VWHZ_82Qd3ZwcagX" alt="Even a two-minute examination of conscience is helpful, pope says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pope Francis greets the crowd during his general audience in St. Peter&#39;s Square at the Vatican Nov. 30. (CNS photo/Paul Haring).</p></div>
            </div>
        </a><a href='https://aleteia.org/2022/11/30/the-devil-starts-with-what-is-most-dear-to-us-says-pope/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The devil starts with what is most dear to us, says Pope</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTrjjToGqrXniNsQOqWH-23h0HMXaCEAlK7iNG3q0N0wr46S7SledgFGJLYfZdxk7xPcU20Ntbs" alt="The devil starts with what is most dear to us, says Pope" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pope Francis offers an assurance -- that just 2 minutes spent on an examination of what happened in your heart today will &quot;do you good, I assure you.&quot;</p></div>
            </div>
        </a><a href='https://catholicreview.org/overcoming-christian-divisions-would-give-world-hope-pope-tells-patriarch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Overcoming Christian divisions would give world hope, pope tells ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuBppFQVp7gzA4rkaaNs2hZcI7wbLIGl7Nzd87L3Xb6AohN7aduw27JeKtJGGf9RfkdoZXhwGH" alt="Overcoming Christian divisions would give world hope, pope tells ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While formal dialogue about the theological and historical causes of the splits in Christianity are essential, so, too, is a recognition that &quot;sinful&nbsp;...</p></div>
            </div>
        </a><a href='https://www.i24news.tv/en/news/israel/culture/1669829231-art-for-the-pope-jesus-from-the-soil-of-the-holy-land'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Art for the Pope: &#39;Jesus from the soil of the Holy Land&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTstM_8f-QEznnMwAGNusVOawEycwA10aJ32IS_e_fP5Zg_OtEXWHVdoK1K8i8_BPL8YOPkAYe9" alt="Art for the Pope: &#39;Jesus from the soil of the Holy Land&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An Israeli professor gifted Pope Francis with a depiction of Jesus Christ in the form of branches and twigs - Click the link for more details.</p></div>
            </div>
        </a>
        </Template></>;
}