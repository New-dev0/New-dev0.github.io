import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lena Gercke</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lena Gercke"/>
        <meta name="description" content="Trending News about Lena Gercke" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lena Gercke</h1>
            <Image width={800} height={500} src="https://image.gala.de/22966802/t/YP/v3/w1440/r1.7778/-/lena-gercke-dustin-schoene.jpg" alt="Lena Gercke"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.de/stars/news/lena-gercke--auf-fiesen-streich-reagiert-dustin-anders-als-erwartet-22966800.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lena Gercke: Auf ihren fiesen Streich reagiert Dustin Schöne anders ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAjaeHydHOJ_aDse9qtTwbp22FH4U-JbOxJ3dkV5qLXlW6_tcgggwaKHS3fce4l0yoCBIE0NRI" alt="Lena Gercke: Auf ihren fiesen Streich reagiert Dustin Schöne anders ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lena Gercke probiert einen TikTok-Trend aus. Sie stellt Dustin Schöne eine Falle, als er nach Hause kommt. Ob der Regisseur darauf reinfällt?</p></div>
            </div>
        </a><a href='https://www.t-online.de/unterhaltung/stars/id_100084470/hochschwangere-lena-gercke-amuesiert-ihre-fans-streich-des-jahres-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hochschwangere Lena Gercke amüsiert ihre Fans: &quot;Streich des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBIjF7kGp2ezqT5grhQVAcs2orOUyzQveSiO0stuqeO66NFkeAOlDhKD0rt6lH-bQwzN9Wozoi" alt="Hochschwangere Lena Gercke amüsiert ihre Fans: &quot;Streich des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bald wird Lena Gercke zum zweiten Mal Mutter. Jetzt erheitert das Model aber erst einmal mit einem lustigen Video seine Follower.</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/22/langeweile-lena-gercke-versucht-freund-dustin-zu-pranken.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Langeweile? Lena Gercke versucht, Freund Dustin zu pranken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsZGdgD-XtW8PtiJusQJi0twFedU2hjPTJ38d3bsew4YpXBcRLCn7_sE70OHSQL6pYuawmRr0U" alt="Langeweile? Lena Gercke versucht, Freund Dustin zu pranken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lena Gercke (34) wollte sich einen kleinen Spaß mit Dustin Schöne (37) erlauben. Seit mittlerweile drei Jahren geht das Model nun schon mit dem Regisseur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/ups-das-ging-schief-schwangere-lena-gercke-will-ihren-dustin-pranken-5017387.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ups, das ging schief! Schwangere Lena Gercke will ihren Dustin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1-1puTBoMp7p9ko07rqWg4KTF463bBV9scpDq40B2Rv5Oh0LEFiD9ITjwJIEcKOgUKxDDcbJJ" alt="Ups, das ging schief! Schwangere Lena Gercke will ihren Dustin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Langweilig wird es offenbar auch nach all den Jahren, die die Beziehung der beiden auf dem Buckel hat, nicht.</p></div>
            </div>
        </a><a href='https://www.derwesten.de/panorama/promi-tv/lena-gercke-baby-instagram-schwanger-freund-dustin-schoene-leger-kind-id300132272.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lena Gercke spielt Freund fiesen Streich – doch der geht nach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROl9edf_TpvIFHs6OyP8kIQSljjzH-pOPfEYj1PrfFkkC8lERvwKvIVK4521V-PaLoNpxgatOT" alt="Lena Gercke spielt Freund fiesen Streich – doch der geht nach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lena Gercke versucht, ihrem Freund Dustin Schöne einen fiesen Streich zu spielen. Doch das geht plötzlich richtig schief.</p></div>
            </div>
        </a>
        </Template></>;
}