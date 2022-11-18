import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Quentin Tarantino</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Quentin Tarantino"/>
        <meta name="description" content="Trending News about Quentin Tarantino" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Quentin Tarantino</h1>
            <Image width={800} height={500} src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f472e6afa15f877a7264cdc331055217.jpg" alt="Quentin Tarantino"/>
            <h3>Recent News</h3>
            <a href='https://www.avclub.com/quentin-tarantino-current-era-tied-worst-film-history-1849795337'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino says the current Hollywood era is tied for the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-xYD9O-ox7g8F-Fv_v7q5FqcFSoFCAS6auH4_jJBqQ9YTQeCHFvFS07aP7_VsLr8SEqN5KVTr" alt="Quentin Tarantino says the current Hollywood era is tied for the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Look, it&#39;s no surprise that Quentin Tarantino is not a fan of the current state of the movie biz. He is among a group of cinema auteurs that are vocally&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gq.com/story/quentin-tarantino-to-direct-tv-series'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Will Direct a TV Show Next Year, and a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNcALGPDLx8YzOzUA236mbO1IHIUnR77kIwcKRCpd2uVMesAQplRiHAcZ6AZ5EkZ5y8IvhfLtY" alt="Quentin Tarantino Will Direct a TV Show Next Year, and a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The legendary filmmaker also says &#39;Once Upon a Time in Hollywood&#39; is his “best movie.”</p></div>
            </div>
        </a><a href='https://www.avclub.com/quentin-tarantino-announces-hes-shooting-an-8-episode-m-1849794241'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino announces he&#39;s shooting an 8-episode mystery ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9bBmOeHDTYc4kfBaLoGShdfCsWCN3bpihg8GkGnDf8-A5AnKp2VD6Re6RhgUujd4vxVvaBqWT" alt="Quentin Tarantino announces he&#39;s shooting an 8-episode mystery ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tarantino, currently on book tour, also revealed which of his own films is his favorite.</p></div>
            </div>
        </a><a href='https://variety.com/2022/film/news/quentin-tarantino-cinema-speculation-tour-1235431316/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Embraces Role as Elder Statesman of Movies at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTt2zSHMwIcL3uHYGFQUKqjIi0Svd0TD7VOsYw1Czsv1GC-rKB-s8SOv4FfCMkl0DeakctP7qGu" alt="Quentin Tarantino Embraces Role as Elder Statesman of Movies at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Structured as essays mixed with memoir, &#39;Cinema Speculation&#39; finds the director in a reflective mood about movies.</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/movies/quentin-tarantino-only-marvel-movie-he-would-make/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Reveals the Only Marvel Movie He Would Make</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvCmisI4UmxbFw0WZp-hJWfY7Jd97hXmRA6a1UlWuZAMirh0L7Ap5bUacQezyGs_fjwd4L7xBu" alt="Quentin Tarantino Reveals the Only Marvel Movie He Would Make" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quentin Tarantino may be ready for the superhero movie boom to end, but he&#39;d consider making an exception for Nick Fury. But not as an Agent of SHIELD.</p></div>
            </div>
        </a><a href='https://collider.com/quentin-tarantino-tv-series-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Plans to Shoot an Eight-Episode TV Series in 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZRwN1q6bh834PgNymBDcKRMFT5Mgs-_VxBk3szQU-d6a935FwDEi84kdbRM_oTWvlHmAUI9Y7" alt="Quentin Tarantino Plans to Shoot an Eight-Episode TV Series in 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It has been a while since director Quentin Tarantino&#39;s last feature Once Upon a Time in Hollywood came out. He is currently promoting his new book Cinema&nbsp;...</p></div>
            </div>
        </a><a href='https://entertainment.ie/tv/tv-news/quentin-tarantino-direct-tv-series-in-2023-548216/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino says he&#39;s going to direct an 8-part TV series next ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbtHZNTc3qYUGBMCJ0hYRYbuoWgE_ngUqigdWnyEoss8DSn9h1aGonHipOE_mE41Xkvmuizf5n" alt="Quentin Tarantino says he&#39;s going to direct an 8-part TV series next ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He is regularly cited as one of the most important movie directors of all time. Up until now, however, Quentin Tarantino has never stepped into the world of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wmagazine.com/culture/quentin-tarantino-limited-series-cast-release-date-trailer-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Is Planning His First TV Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOlOwUWYhdKWBcGtfYmS08vHW9ojnkrNRo2Y6fw_rtjgXeCW0cwllleqIE4PFEEyCO1gx2uBsG" alt="Quentin Tarantino Is Planning His First TV Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The director announced his plans to make an eight-episode limited series at an event on Wednesday.</p></div>
            </div>
        </a><a href='https://www.goldderby.com/article/2022/quentin-tarantino-tv-show/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino says he&#39;s planning an 8-episode television series ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSBxbTexUvjQpFhm3GEr10vBEku_iizuXkVkKW5gs7itKYp6S37dax_-fWSP95b0oiqRHy9_9oK" alt="Quentin Tarantino says he&#39;s planning an 8-episode television series ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(About the de rigueur Marvel question posed to all filmmakers, Tarantino said he would&#39;ve considered doing “Luke Cage” with Laurence Fishburne years ago, but if&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiewire.com/2022/11/quentin-tarantino-final-film-original-script-1234783538/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quentin Tarantino Says Final Film Will Be an &#39;Original&#39; Script</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwWPXPhMBKK8bKEx6Kh1fohAuHENqnpwmta8sGx3DdP_mV-d90NwbFkajKXn39eLGsCE3W5BSH" alt="Quentin Tarantino Says Final Film Will Be an &#39;Original&#39; Script" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quentin Tarantino seemed to rule out a &quot;Kill Bill Vol. 3&quot; or a novel adaptation for his 10th and final film.</p></div>
            </div>
        </a>
        </Template></>;
}