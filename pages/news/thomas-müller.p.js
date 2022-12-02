import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thomas Müller</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thomas Müller"/>
        <meta name="description" content="Trending News about Thomas Müller" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thomas Müller</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal0x0-0x0/3/f/f/6222847/19946408-A7E7-4B61-8691-BDBC3F9EE55C_v0_h.jpg" alt="Thomas Müller"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/fussball/wm/6222847/Deutschland-ausgeschieden_Thomas-Mueller-nach-erneutem-WMDebakel_'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Müller nach erneutem WM-Debakel: &quot;Es ist eine Katastrophe&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiCuYVyvjUkNfUqgEfn5YiO_q5Rh0MKTt8EYcWSlI9irKgKUBeWa-NhnTlO3ZiqCf-I3UeopgV" alt="Thomas Müller nach erneutem WM-Debakel: &quot;Es ist eine Katastrophe&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trotz des 4:2 gegen Costa Rica ist die WM für Deutschland nach der Gruppenphase zu Ende - weil Japan Spanien mit 2:1 besiegt hat. Die DFB-Spieler suchten&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zdf.de/sport/fussball-wm/thomas-mueller-deutschland-costa-rica-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball: Thomas Müller deutet nach WM-Aus Rücktritt an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbD9v91c-FyknQE1hMT6JZoX5C-XsFSFKu9ak1pJrqSB6CNhwCZTRT8t14e-LY2OB31u-vFfYq" alt="Fußball: Thomas Müller deutet nach WM-Aus Rücktritt an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thomas Müller wendet sich nach dem Scheitern bei der WM an die deutschen Fans. Das 4:2 gegen Costa Rica war Müllers 121. und womöglich letztes Länderspiel.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2212/Artikel/dfb-thomas-mueller-ruecktritt-nationalmannschaft-live-tv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Müller deutet nach WM-Aus in Katar Rücktritt an - und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU9lFJjzlHJl9bgYl2Sgjluc9lsctbwEy4zFvU1Xg_eZgK6bksKaVyxEKYT4oxW7WQLW4jgIIH" alt="Thomas Müller deutet nach WM-Aus in Katar Rücktritt an - und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bastian Schweinsteiger, Müllers langjähriger Teamkollege beim FC Bayern und in der Nationalmannschaft, sagte nach dem Interview in seiner Rolle als ARD-Experte:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tz.de/sport/fussball/wm-experten-ard-bastian-schweinsteiger-khedira-hitzlsperger-thomas-mueller-91947330.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Experten witzeln über Thomas Müller: „Wenn der 90 Minuten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRnALDfzt2haUOpDdJZh7Nt7QQ-ajjz700u5Z_elvec5X38gMR9St6aRfx6zT1vi-0es7Pg153" alt="WM-Experten witzeln über Thomas Müller: „Wenn der 90 Minuten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thomas Müller appelliert im ARD-Interview an die deutschen Nationalspieler. Die WM-Experten erzählen daraufhin reihenweise Anekdoten zum Bayern-Star.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/fussball/wm/2022/12/muller-deutet-karriereende-in-der-nationalmannschaft-an'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Müller deutet Karriereende in der Nationalmannschaft an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlOJ3K0c6UwnjCEZG8ctIx8zel-oKe86BFpxmeRtKSi9WUZieJ-XnBedaHS9dPLU0fEU1gG_jf" alt="Müller deutet Karriereende in der Nationalmannschaft an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>War das Costa-Rica-Spiel der letzte Auftritt von Thomas Müller im DFB-Team? Der Bayern-Star deutet dies nach dem WM-Aus an.</p></div>
            </div>
        </a><a href='https://www.puls24.at/news/sport/dfb-spieler-thomas-mueller-deutet-ruecktritt-an/282627'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DFB-Spieler Thomas Müller deutet Rücktritt an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNKtH7VqQeO3WDl0vpSnkqoHhO8dgiJO35x_h4DtyhOlHG7FWFa5tQEY2Lw5R6FEmZ4Tja5gVz" alt="DFB-Spieler Thomas Müller deutet Rücktritt an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Urgestein in der Nationalmannschaft bedankte sich nach dem Ausscheiden von Deutschland bei der Fußball-WM in Katar bereits vorsorglich bei den deutschen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derwesten.de/sport/fussball/thomas-mueller-ruecktritt-dfb-wm-katar-deutschland-costa-rica-id300334352.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thomas Müller schockt ganz Fußball-Deutschland nach dem WM ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4zG5j1b2rINfuD8TOMGQWk1S_v7ZkbZzep73FNZYMSwQw5yyofDipgeLPhLNjyVUvXU57tIzN" alt="Thomas Müller schockt ganz Fußball-Deutschland nach dem WM ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bei der Fußball-Weltmeisterschaft in Katar treffen die weltbesten Kicker aufeinander. Für einige Stars dürfte es jedoch die letzte WM sein. Wir zeigen dir die&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}