import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Avatar"/>
        <meta name="description" content="Trending News about Avatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Avatar</h1>
            <Image width={800} height={500} src="https://image.cnbcfm.com/api/v1/image/107113334-1662133118723-avatar_22_Cropped.jpg?v=1669176334&w=1920&h=1080" alt="Avatar"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbc.com/2022/11/23/disneys-avatar-the-way-of-water-gets-coveted-china-release.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disney&#39;s &#39;Avatar: The Way of Water&#39; gets coveted China release</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDftaUM-Gp91fm14CpZgxpca1Ubbh3_FYcP0Eb0zJEsnYjeE0l0yKJev6EF3K-wr2n80iU2BS3" alt="Disney&#39;s &#39;Avatar: The Way of Water&#39; gets coveted China release" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>International ticket sales, in general, were a major factor in “Avatar&#39;s” box office success in 2009, as $2.13 billion of the film&#39;s total $2.91 billion in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/entertainment/news-new-avatar-film-gets-rare-china-release-209308'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New &#39;Avatar&#39; film gets rare China release</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrkXrnqlpelt4DluIKgLLuReCvJ2ACWN7bUEgMcnEGmp1BxrhsFZzSYBEIyoCxFmoskffpCwJz" alt="New &#39;Avatar&#39; film gets rare China release" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Avatar: The Way of Water&#39; is one of the few foreign films to get access to the Chinese market in recent months. Get more Entertainment News and Business&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/22/media/avatar-sequel-reliable-sources/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar&#39; sequel needs $2 billion to break even. But are audiences ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSs-b9oVLgT0wCBuebTk9eZ8XrFflpW_uVzcMNSINHjxkQ_rPc6q7PjkGxW6uE1CRxt3pV9skG0" alt="&#39;Avatar&#39; sequel needs $2 billion to break even. But are audiences ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“You have to be the third or fourth highest-grossing film in history. That&#39;s your threshold. That&#39;s your break even,” Cameron explained to the magazine. The&nbsp;...</p></div>
            </div>
        </a><a href='https://fortune.com/2022/11/22/avatar-2-represents-the-worst-business-case-in-movie-history-according-to-its-own-director-james-cameron/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar 2&#39; represents &#39;the worst business case in movie history ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeNdEG_NYunx7v0IKKUcAvA_990W2qCsNd2Aww2MHkB7XgsradJhU2otcp_ljQtmLa1kM-0iBU" alt="&#39;Avatar 2&#39; represents &#39;the worst business case in movie history ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Avatar 2&#39; represents &#39;the worst business case in movie history&#39;, according to its own director James Cameron &middot; Top 4—at least &middot; How Cameron got Avatar&#39;s green&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/avatar-the-way-of-water-china-release-date-1235180610/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar: The Way Of Water&#39; Getting China Release</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwA_XUclRFIQY8KirKcgNiVdoB2Bk1I7snr-KPmBKFY0CAaXFrHt8wTd3PLTu9ixxuQ6QYktNr" alt="&#39;Avatar: The Way Of Water&#39; Getting China Release" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This is a big deal given the fact that China sidelined, during the pandemic, many Hollywood blockbuster films, specifically Disney-Marvel movies. However, the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/entertainment/hollywood/james-cameron-says-avatar-2-needs-to-make-2-billion-just-to-break-even-101669123887050.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>James Cameron says Avatar 2 needs to make $2 billion just to break ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk9lk9TFzC_Zev3ugwpynfw6jn35ldddezDAZr5eToccIrJ0MOCJjAxIgYJYte3Pe_Mln7AB2H" alt="James Cameron says Avatar 2 needs to make $2 billion just to break ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar: The Way of Water director James Cameron is concerned that the film has to earn a huge amount of money just to recover its investments. | Hollywood.</p></div>
            </div>
        </a><a href='https://theprint.in/world/new-avatar-film-gets-rare-china-release/1230924/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New &quot;Avatar&quot; film gets rare China release</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaYKWjai6IgiYR8xPXemNi18MkXfTeNXU9ftjh6ZUe87Emk1Xv39nwKKDZh3DFcmGmNeympiIx" alt="New &quot;Avatar&quot; film gets rare China release" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Casey Hall SHANGHAI (Reuters) – The long-awaited sequel to James Cameron&#39;s blockbuster “Avatar”, will be released in mainland Chinese cinemas on Dec.</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/avatar-the-way-of-water-drops-another-spectacular-trailer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar: The Way of Water&#39; Drops Another Spectacular Trailer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDILnQ0PDs7liiLRp9obUhqxeXBZtL0kh4JIJlU2g9kyoqOj1mhpuYjMWPz5HkWbu7DnpayXxC" alt="&#39;Avatar: The Way of Water&#39; Drops Another Spectacular Trailer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With a reported $250 million budget, Avatar 2 is one of the most expensive films of all time, and that cash can be seen in the footage released Monday. Check&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/22/entertainment/avatar-the-way-of-water-trailer-sequel/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A new trailer for &#39;Avatar: The Way of Water&#39; is here</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrjryJY2QQvE0s4sJrR0iT4zJI66XxHtNiI_gL9pGAE9Mw7KUm3aKJrrqq9sxggMpSoKE8DcbF" alt="A new trailer for &#39;Avatar: The Way of Water&#39; is here" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sigourney Weaver, Cliff Curtis, Edie Falco, Michelle Yeoh, Jemaine Clement, Oona Chaplin, Vin Diesel, Stephen Lang, Matt Gerald, Joel David Moore, CCH Pounder,&nbsp;...</p></div>
            </div>
        </a><a href='https://gizmodo.com/avatar-2-way-of-water-james-cameron-billion-box-office-1849812098'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar: The Way of Water Needs to Make $2 Billion to Break Even</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSaNBOcypvuf5nDvOLDkSNOIDZmuHNssZHl7gDGQtlLcm7iaVMF3uaJC_0r6DPYjN-CG1Txn4s" alt="Avatar: The Way of Water Needs to Make $2 Billion to Break Even" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Director James Cameron reportedly gave this astronomical number to Disney and 20th Century executives.</p></div>
            </div>
        </a>
        </Template></>;
}