import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Griezmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Griezmann"/>
        <meta name="description" content="Trending News about Griezmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Griezmann</h1>
            <Image width={800} height={500} src="https://photos.desired.de/fd/2f/12/d93d9c7f7cf82efeb052a79e49_ZmMgN2YxOTgzNTJmZmZmIDEyMDAgNjI4A2ZmZGQ3YzJlNTc0_imago1019265259h.jpg" alt="Griezmann"/>
            <h3>Recent News</h3>
            <a href='https://www.desired.de/artikel/antoine-griezmann-hat-der-fussballer-eine-partnerin--62g94cchf8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antoine Griezmann: Hat der Fußballer eine Partnerin?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkXDpOhTYi-3aert6nvb9sdxfBtcd1jYzkRpsvdOFtTHwZqd07zkgxVgUIKIu6B15C8x28F2zM" alt="Antoine Griezmann: Hat der Fußballer eine Partnerin?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antoine Griezmann ist ein französischer Fußballspieler, der aktuell bei FC Barcelona spielt. Er hat viele weibliche Fans, doch hat er bereits eine Herzdame?</p></div>
            </div>
        </a><a href='https://de.uefa.com/uefachampionsleague/news/027b-16a676bf399a-081c9dc4821e-1000--griezmann-benzema-mbappe-giroud-wer-sind-die-erfolgreichsten-fr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Griezmann, Benzema, Mbappé, Giroud: Wer sind die erfolgreichsten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZqV6IeiLXiaLpsirvemMzK678FLsJSGoAmjVTpnOwe1ETNZfNEnZpnp6Uplle_Kp6Baahk04H" alt="Griezmann, Benzema, Mbappé, Giroud: Wer sind die erfolgreichsten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Toptorschützen aus Frankreich in UEFA-Klubwettbewerben* ; 88: Karim Benzema (Lyon, Real Madrid) ; 59: Thierry Henry (Monaco, Arsenal, Barcelona) ; 40: Kylian&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}