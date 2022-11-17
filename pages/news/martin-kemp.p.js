import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Martin Kemp</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Martin Kemp"/>
        <meta name="description" content="Trending News about Martin Kemp" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Martin Kemp</h1>
            <Image width={800} height={500} src="https://images.radiox.co.uk/images/533909?width=1200&crop=16_9&signature=G2NwCKgGBCB42BMKlZeSUxTfJRM=" alt="Martin Kemp"/>
            <h3>Recent News</h3>
            <a href='https://www.radiox.co.uk/radio/shows-presenters/chris-moyles/martin-kemp-crazy-stories-new-book-my-80s-story/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Kemp has some of the craziest stories about the 80s</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQN9Y2v53rOwP65i71PTN6eI4iaZF62NXfW8bq7ctcOPcYUIpL01OSTIZvtitpc0Min9BYAFRj9" alt="Martin Kemp has some of the craziest stories about the 80s" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Spandau Ballet legend has talked to Toby Tarrant about some of the craziest stories from the 80s in his latest book.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/uk/eastenders-role-helped-martin-kemp-recover-from-brain-tumour-more-than-anything-else/articleshow/95560961.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EastEnders role helped Martin Kemp recover from brain tumour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpkUkrVeY3MSVBWAcOej1v2cCTfhQjRHcWuQ8blh5X72juSfLVjahQQTk6ToNPZbbeQg_WLXE0" alt="EastEnders role helped Martin Kemp recover from brain tumour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veteran British actor Martin Kemp has claimed that his role in EastEnders helped him recover after his brain tumour surgery &#39;more than anything else.</p></div>
            </div>
        </a><a href='https://uk.news.yahoo.com/martin-kemp-eastenders-killed-off-095600353.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Kemp: EastEnders killed me off after ITV confession</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTd8kRp6JSQLG3Vi2hIKvxbGhzqsHYOCZQG10HGodh0esOeejBIHUaNf_hXJEwoJx9pPcnGtMml" alt="Martin Kemp: EastEnders killed me off after ITV confession" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former &#39;EastEnders&#39; star Martin Kemp has claimed the soap killed his character Steve Owen off after he told them he had landed a contract with rival&nbsp;...</p></div>
            </div>
        </a><a href='https://virginradio.co.uk/entertainment/83819/martin-kemp-says-eastenders-role-helped-him-recover-from-brain-tumour'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martin Kemp says EastEnders role helped him recover from brain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Martin Kemp says EastEnders role helped him recover from brain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who didn&#39;t love Martin Kemp in EastEnders as much-loved villain Steve Owen in the late Nineties? The Spandau Ballet bassist has revealed that his Walford c.</p></div>
            </div>
        </a>
        </Template></>;
}