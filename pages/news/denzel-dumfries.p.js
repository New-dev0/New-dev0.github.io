import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Denzel Dumfries</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Denzel Dumfries"/>
        <meta name="description" content="Trending News about Denzel Dumfries" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Denzel Dumfries</h1>
            <Image width={800} height={500} src="https://rp-online.de/imgs/32/1/5/0/9/8/9/9/7/9/tok_e445f650209d0f02f38cc2dec30e3847/w1200_h630_x1500_y1000_DPA_bfunkdpa_5FAB06007C60CC87-c991a8b53f02e133.jpg" alt="Denzel Dumfries"/>
            <h3>Recent News</h3>
            <a href='https://rp-online.de/sport/fussball/wm/wm-2022-niederlaender-dumfries-spricht-offen-ueber-mentale-probleme_aid-81192633'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 - Niederländer Dumfries spricht offen über mentale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR--Y2HT7U0-HrlvcQ1GlLJxEG3tBKmefUPWgdiNgLgrBGPz56bZsPDZ1F940QPicw51vcFt1B4" alt="WM 2022 - Niederländer Dumfries spricht offen über mentale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mit zwei Vorlagen und einem Tor war Denzel Dumfries der überragende Mann beim Sieg der Niederlande gegen die USA. Zuvor hatte er ob seiner Leistungen bei&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}