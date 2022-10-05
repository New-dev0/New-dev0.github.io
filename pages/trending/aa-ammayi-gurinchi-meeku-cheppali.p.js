import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aa Ammayi Gurinchi Meeku Cheppali</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aa Ammayi Gurinchi Meeku Cheppali"/>
        <meta name="description" content="Trending News about Aa Ammayi Gurinchi Meeku Cheppali" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aa Ammayi Gurinchi Meeku Cheppali</h1>
            <Image width={800} height={500} src="https://images.news18.com/telugu/uploads/2022/10/Aa-Ammayi-Gurinchi-Meeku-Cheppali-Ott--166488183416x9.jpg" alt="Aa Ammayi Gurinchi Meeku Cheppali"/>
            <h3>Recent News</h3>
            <a href='https://telugu.news18.com/photogallery/movies/aa-ammayi-gurinchi-meeku-cheppali-ott-update-this-movie-streams-now-on-amazon-prime-sr-1460456.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aa Ammayi Gurinchi Meeku Cheppali Ott: ప్రముఖ ఓటీటీలోకి ఎంట్రీ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRY_NeztnXCeHWmFDaLiSnFHNIbNBCuqH5YRNHBQCWHnYHfkk14KapLt7b8hXGWOP9vt5dpHhFh" alt="Aa Ammayi Gurinchi Meeku Cheppali Ott: ప్రముఖ ఓటీటీలోకి ఎంట్రీ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aa Ammayi Gurinchi Meeku Cheppali Ott: ప్రముఖ ఓటీటీలోకి ఎంట్రీ ఇచ్చిన ఆ అమ్మాయి గురించి చెప్పాలి.</p></div>
            </div>
        </a><a href='https://www.ntnews.com/cinema/aa-ammayi-gurinchi-meeku-cheppali-movie-will-be-streaming-now-on-amazon-prime-video-788183'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>సైలెంట్‌గా ఓటీటీలోకి వచ్చిన &#39;ఆ అమ్మాయి గురించి మీకు చెప్పాలి&#39;.. స్ట్రీమింగ్‌ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTM3cJPoByTtlwmu1iMLRvh_PZG7tonUp62tUjo73vhN07ZQMKTHHS3BqoTrGf2CQ81PT5Mmj-O" alt="సైలెంట్‌గా ఓటీటీలోకి వచ్చిన &#39;ఆ అమ్మాయి గురించి మీకు చెప్పాలి&#39;.. స్ట్రీమింగ్‌ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aa Ammayi Gurinchi Meeku Cheppali Movie On OTT | ఫలితంతో సంబంధంలేకుండా కథా బలమున్న సినిమాలను చేస్తూ&nbsp;...</p></div>
            </div>
        </a><a href='https://tv9telugu.com/entertainment/tollywood/sudheer-babu-krithi-shetty-starrer-aa-ammayi-gurinchi-meeku-cheppali-movie-is-streaming-on-amazon-prime-ott-au51-795536.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aa Ammayi Gurinchi Meeku Cheppali: ఓటీటీలో ఆకట్టుకుంటోన్న ఆ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlAlEsg_rxzkxJj9QkUu70jdMrm387U0jYJXHhwBgNlnoCMHrW48gfs3zsjyaGnnX41gh5Aq8n" alt="Aa Ammayi Gurinchi Meeku Cheppali: ఓటీటీలో ఆకట్టుకుంటోన్న ఆ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>టాలీవుడ్ లో మంచి అభిరుచి కలిగిన దర్శకుడిగా పేరు తెచ్చుకున్న మోహన్ కృష్ణ ఇంద్రగంటి ఈ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}