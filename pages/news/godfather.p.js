import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Godfather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Godfather"/>
        <meta name="description" content="Trending News about Godfather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Godfather</h1>
            <Image width={800} height={500} src="https://telugu.samayam.com/photo/msid-95622362,imgsize-50078/pic.jpg" alt="Godfather"/>
            <h3>Recent News</h3>
            <a href='https://telugu.samayam.com/telugu-movies/ott/release/chiranjeevis-godfather-is-streaming-on-ott-now/articleshow/95622224.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GodFather OTT: ఓటీటీలోకి వచ్చేసిన చిరంజీవి &#39;గాడ్‌ఫాదర్&#39; మూవీ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSaCiWBYapHCTdFZd1WbhBjc5aGI9lw-myfeBC7XvAYalCApih4n1aLGuAnXXFSu0r53AXquBw" alt="GodFather OTT: ఓటీటీలోకి వచ్చేసిన చిరంజీవి &#39;గాడ్‌ఫాదర్&#39; మూవీ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GodFather Movie OTT Release: మెగాస్టార్ చిరంజీవి (Megastar Chiranjeevi) నటించిన &#39;గాడ్‌ఫాధర్&#39; సినిమా&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telugupost.com/movie-news/godfather-and-sardar-movies-are-streaming-ott-platforms-1448845'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ఓటీటీలోకి వచ్చేసిన గాడ్ ఫాదర్, సర్దార్</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6zFdlxYXReHPElwH6PW1ZbD4zZiKwPa6PG0TVwtAXvXOX5oyyozLT2ymcik5qQJbFzx4UB4iM" alt="ఓటీటీలోకి వచ్చేసిన గాడ్ ఫాదర్, సర్దార్" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>గాడ్ ఫాదర్ ఓటీటీ హక్కులను ప్రముఖ ఓటిటి సంస్థ &#39;నెట్ ఫ్లిక్స్&#39; సొంతం చేసుకున్న సంగతి&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sakshi.com/telugu-news/movies/ott-chiranjeevi-godfather-movie-now-streaming-netflix-1503313'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ఓటీటీకి వచ్చేసిన గాడ్‌ ఫాదర్‌, అక్కడ అర్థరాత్రి నుంచి స్ట్రీమింగ్‌</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNnMJyK_CagIQihRyhfnqYbCDYLiOhLg5YM9McRV0acA6Op1wqHfxXyu5ztXKT9l1UDi2XVJxL" alt="ఓటీటీకి వచ్చేసిన గాడ్‌ ఫాదర్‌, అక్కడ అర్థరాత్రి నుంచి స్ట్రీమింగ్‌" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>మెగాస్టార్‌ చిరంజీవి నటించిన లేటెస్ట్‌ మూవీ గాడ్‌ ఫాదర్‌. మలయాళ మూవీ లూసీఫర్ రీమేక్‏గా&nbsp;...</p></div>
            </div>
        </a><a href='https://10tv.in/movies/godfather-streaming-in-netflix-ott-532403.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Godfather Movie: OTTలో గ్రాండ్ ఎంట్రీ ఇచ్చిన &#39;గాడ్‌ఫాదర్&#39;.. పండగ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjTAZnpm54v0zrbNfgCQ2Wyqy12D7iZHlRMmXEzY1-vmrB0LD_eahFMXl7t3Z7hSA8GTwC77M1" alt="Godfather Movie: OTTలో గ్రాండ్ ఎంట్రీ ఇచ్చిన &#39;గాడ్‌ఫాదర్&#39;.. పండగ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>మెగాస్టార్ చిరంజీవి నటించిన రీసెంట్ మూవీ &#39;గాడ్‌ఫాదర్&#39; దసరా కానుకగా రిలీజ్ అయ్యి&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/telugu/entertainment/chiranjeevi-and-salmans-god-father-movie-streaming-on-netflix-from-november-19-83730'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Godfather in OTT: మెగాస్టార్ గాడ్ ఫాదర్ ఓటీటీలోకి వచ్చేసింది.. స్ట్రీమింగ్ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw_1-y_1mE_lFnV-xAAW9yRQ6XHiapGoh_chW2F_DHN_sc1MkgI20dcfyQQV9kwNJUb6Z6ZNxr" alt="Godfather in OTT: మెగాస్టార్ గాడ్ ఫాదర్ ఓటీటీలోకి వచ్చేసింది.. స్ట్రీమింగ్ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Godfather in OTT: మెగాస్టార్ చిరంజీవి, బాలీవుడ్ స్టార్ సల్మాన్ ఖాన్ కలిసి నటించిన &#39;గాడ్&nbsp;...</p></div>
            </div>
        </a><a href='https://telugu.filmibeat.com/ott/chiranjeevi-godfather-movie-streaming-on-netflix-114819.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Godfather OTT: ఆ ఓటీటీలోకి వచ్చేసిన &#39;గాడ్ ఫాదర్&#39;.. చిరంజీవి మాస్ కుమ్ముడు</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqHEZOXCjfvsb8-dqGdQ5eA8nSq3ISs7_rZdzuGdguF1Uyi-_3n3H_O2gQOEDubiwSrPQFYrlQ" alt="Godfather OTT: ఆ ఓటీటీలోకి వచ్చేసిన &#39;గాడ్ ఫాదర్&#39;.. చిరంజీవి మాస్ కుమ్ముడు" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Megastar Chiranjeevi Did Godfather Movie Under Mohan Raja Direction. This Movie Streaming on Netflix From Today. టాలీవుడ్ స్టార్ హీరో&nbsp;...</p></div>
            </div>
        </a><a href='https://tolivelugu.com/godfather-hungama-starts-again/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>మళ్లీ మొదలైన గాడ్ ఫాదర్ హంగామా</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQn_3gxhbW-2QJzaFReEzkuDRFH46k20ZaBh1rUsRubJjuxk0Opqb8GwU0GKnSzRYLGRjN_AX5l" alt="మళ్లీ మొదలైన గాడ్ ఫాదర్ హంగామా" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>godfather hungama : గాడ్ ఫాదర్ హంగామా మళ్లీ మొదలైంది. అవును.. థియేటర్లలో పూర్తయిన హంగామా&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}