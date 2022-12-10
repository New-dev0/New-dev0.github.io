import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vogue Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vogue Williams"/>
        <meta name="description" content="Trending News about Vogue Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vogue Williams</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cf8d7-1600.jpg" alt="Vogue Williams"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1209/1341058-vogue-williams-on-joanne-mcnally-shes-a-disaster/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Williams on Joanne McNally: &#39;She&#39;s a disaster!&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsvKXB6nDUK_skSRqRWZzkNed8RmpAyADgNb0h7ZJV8x963qiDQ4hJoaPYbPpcvh4q8cfuzqeO" alt="Vogue Williams on Joanne McNally: &#39;She&#39;s a disaster!&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They may be the best of pals, perform together and share a podcast - but when push comes to shove, Vogue Williams and Joanne McNally are like chalk and&nbsp;...</p></div>
            </div>
        </a><a href='https://goss.ie/featured/vogue-williams-reveals-hilarious-reason-joanne-mcnally-didnt-turn-up-to-her-sons-christening-320646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Williams reveals hilarious reason Joanne McNally didn&#39;t turn ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKrWICV5rWalz4W2d4FNgkaacVs0Dmbh-ysryc5LtA10YbG72WXtwyeYZZ7DKrF9kEzn2yksRV" alt="Vogue Williams reveals hilarious reason Joanne McNally didn&#39;t turn ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The model chose her best friend and podcast co-host to be one of Otto&#39;s godmothers. However, Joanne never showed up at the church. Speaking on Friday night&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/vogue-williams-tells-late-late-25719574'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Williams tells Late Late Show viewers her &#39;own values&#39; made ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKk9qgVbEwgekMnvm0AQ9OuVLOxs7oRpJG0VmOx9FX33m_6dIy63DQ6KMkOfGh3XnassZRzysZ" alt="Vogue Williams tells Late Late Show viewers her &#39;own values&#39; made ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Next year, Vogue and Joanne Nally are taking their hit show &#39;My Therapist Ghosted Me&#39; on the road with live gigs in Dublin&#39;s 3Arena on November 29 and 30 and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tvandshowbiz/9877127/vogue-williams-podcast-fans-in-shock-reveal-producer-joe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Williams and Joanne McNally&#39;s podcast fans all in complete ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQB6mkYi1301sLyE5FQdv--bFF40m9PtKgNkJ6BDRmfLG6ABroUqfXdebkz1ok9b31RTMuA9iDF" alt="Vogue Williams and Joanne McNally&#39;s podcast fans all in complete ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dubliners have a podcast together called My Therapist Ghosted Me which is produced by Joe Attewell. Advertisement. Joanne McNally shared a picture with &#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.ie/2022/12/09/entertainment/celebrity/vogue-williams-joanne'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vogue Williams Reveals Reason She Could Never Live With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKL9HR9OLTEmaD968DQHLxe3mX4CUuhceiT0QHSbd4UtMwKGbaVAd_zaVGrgy5nNXQBiDMRhr8" alt="Vogue Williams Reveals Reason She Could Never Live With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vogue Williams has revealed the main reason she does not believe herself and pal Joanne McNally would make great housemates, as she detailed the differences&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}