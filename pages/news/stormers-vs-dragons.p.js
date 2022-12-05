import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stormers vs Dragons</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stormers vs Dragons"/>
        <meta name="description" content="Trending News about Stormers vs Dragons" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stormers vs Dragons</h1>
            <Image width={800} height={500} src="https://www.sarugbymag.co.za/wp-content/uploads/2022/12/SH_13647711l-e1670077460382.jpg" alt="Stormers vs Dragons"/>
            <h3>Recent News</h3>
            <a href='https://www.sarugbymag.co.za/libbok-stars-stormers-douse-dragons-fire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Libbok stars as Stormers douse Dragons fire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpNMZ__uPUDpVBfj92YWjolX-XA3RSB1nE0SC6hzTVsNkITayw8ctIxrxHkn0-DAz8_Zl9MpfP" alt="Libbok stars as Stormers douse Dragons fire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manie Libbok marked his return to the DHL Stormers lineup with a man-of-the-match performance in a bonus-point victory over Dragons on Saturday afternoon.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/urc/watch-stormers-coach-john-dobson-very-disappointed-about-second-half-against-dragons-22a04497-b01b-40e3-8838-f431f94d03ed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Stormers coach John Dobson &#39;very disappointed&#39; about ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRz5lIbGzpnEXzLWouXHbdAXCZseEgdSQalqCANoWIwQUXSQQYngP3CdxXiq_3-p9wTBqbrJbqt" alt="WATCH: Stormers coach John Dobson &#39;very disappointed&#39; about ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Capetonians dazzled the boisterous 14 000-strong crowd at their Nelson Mandela Stadium adopted home with some scintillating attacking rugby to run in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63824484'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dragons fightback in vain at Stormers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjYLqVnrjFymRoLe7hlHh849SFdgkxoblaklZbTjYhh0mm3vTTLvX-wb7QrjXtZPSSIDhrY0xy" alt="Dragons fightback in vain at Stormers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dragons hit back with tries from Jordan Williams, Aki Seiuli, JJ Hanrahan and Josh Reynolds, but Stormers held on. Playing in their first United Rugby&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/unitedrugbychampionship/urc-makes-fun-return-to-gqeberha-as-stormers-maintain-stellar-home-record-win-dragons-win-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>URC makes fun return to Gqeberha as Stormers maintain stellar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvToatqkgTLyl4IwWo9bckJM3gSj70JBqPdZRcrT9G65z4tSTwdAoiJq4GAoK8G_UMBG1tl_gr" alt="URC makes fun return to Gqeberha as Stormers maintain stellar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Capetonians moved to the summit of the South African shield on Saturday afternoon following a 34-26 victory over the Dragons as franchise rugby made a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/stormers-34-26-dragons-welsh-25666667'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers 34-26 Dragons: Welsh side rescue bonus point against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOe35Iyuc-TN1ayZWKlXWatNnRo5ZueDC9uU_UbDCbu8sd2QZg8L8bGy2qMuPUVKPbrINqYcNd" alt="Stormers 34-26 Dragons: Welsh side rescue bonus point against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dragons recovered from a nightmare first-half against URC champions Stormers to rescue a bonus point in defeat in Cape Town.</p></div>
            </div>
        </a><a href='https://www.thesouthafrican.com/sport/rugby/united-rugby-championship/sloppy-stormers-hold-on-against-fiery-dragons-match-report-3-december-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sloppy Stormers hold on against fiery Dragons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRp4G58nj-mYKrCr-msTadxEyT0crxFXgjuzJCiAASzZDh2rdB71QE0P8Oc-vMbboYTapR9ztbP" alt="Sloppy Stormers hold on against fiery Dragons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Stormers overcame a second half surge by the Dragons to claim a hard-fought 34-26 URC win in Gqeberha on Saturday. Mariette Adams.</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/sport/rugby/2022-12-03-stormers-sparkle-to-down-dragons-in-gqeberha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers sparkle to down Dragons in Gqeberha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXBDWIKZia9djUQ2uxj5CYcmVdilkNoNrB-Bf_WGcM_NxgoWQcHj6XdItZTRS48kNp2qPfAm77" alt="Stormers sparkle to down Dragons in Gqeberha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Stormers mixed panache with power as they downed the Dragons 34-26 in their United Rugby Championship (URC) match in Gqeberha on Saturday.</p></div>
            </div>
        </a>
        </Template></>;
}