import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eng vs Aus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eng vs Aus"/>
        <meta name="description" content="Trending News about Eng vs Aus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eng vs Aus</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/a2zcr3/article66001242.ece/alternates/FREE_1200/GettyImages-1432800917.jpg" alt="Eng vs Aus"/>
            <h3>Recent News</h3>
            <a href='https://m.cricbuzz.com/live-cricket-scores/48193/eng-vs-aus-2nd-t20i-england-tour-of-australia-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England, 2nd T20I, England tour of Australia, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Australia vs England, 2nd T20I, England tour of Australia, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow Australia vs England, 2nd T20I, Oct 12, England tour of Australia, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/dawid-malan-england-vs-australia/article66001285.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENG vs AUS, 2nd T20I: Malan hits 82 as England beats Australia by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeetEmiarzS7asN3zwKV4NxqQqCsqxuIskh_yzzmpHV15sIXaIiuetfNrU0-0M9ATGYwERuS54" alt="ENG vs AUS, 2nd T20I: Malan hits 82 as England beats Australia by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malan shared a crucial 92-run stand in Canberra with Moeen Ali (44) as England compiled 178-7 against a full-strength Australian attack.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/australia-vs-england-t20-series-live-score-updates-8203981/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England 2nd T20 Highlights: England beat Australia by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6QvUJ16fx-qS6hcGA2dldtIv7-xfsF-mSmZeHY0bXE-WErQXZmRVfSif-MQlK48F-SfcPKev8" alt="Australia vs England 2nd T20 Highlights: England beat Australia by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUS vs ENG T20 Match Live Score and Updates: The Match will be played today at Manuka Oval, Canberra. Australia vs England, 2nd T20 Highlights: Australia fall&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidesport.in/eng-vs-aus-dawid-malan-sam-curran-power-england-to-an-impressive-t20i-series-win-over-australia-ahead-of-t20-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENG vs AUS: England to an impressive T20I series win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaHLd3IPzNU-OoD6cKL32BVuPDpNu5zEpATkhEC5yGRhioXessRmK3iSZanGR-SvCxLYg8DPGM" alt="ENG vs AUS: England to an impressive T20I series win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ENG vs AUS: Dawid Malan, Sam Curran power England to an impressive T20I series win over Australia ahead of T20 World Cup, England vs Australia 2nd T20.</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/sports/cricket/live-cricket-score-updates-australia-vs-england-2nd-t20i/liveblog/94806968.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs England 2nd T20I Live Score: Australia to chase 179 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVg9s1iTC125uMIGF2E4sNpc7Fy0UqsJ88PnPyuceXeMEl6SDMJ3WPDCjEt3CoARbgZkzZbAQt" alt="Australia vs England 2nd T20I Live Score: Australia to chase 179 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUS vs ENG Live Cricket Score: England won the opening match in Perth by eight runs, but it was against an Australian team that rested its entire&nbsp;...</p></div>
            </div>
        </a><a href='https://www.geosuper.tv/latest/19158-eng-vs-aus-malan-curran-shine-as-england-secure-series-win-over-australia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENG vs AUS: Malan, Curran shine as England secure series win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjzCM2lfMGeCRc4DaqnKvuHa4IAZKYdTNIK5AS98BVR2ddy3vBQ9lgGu-IJp6muLvAzSx_iQjt" alt="ENG vs AUS: Malan, Curran shine as England secure series win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CANBERRA: Dawid Malan and Sam Curran shined as England defeated the world champions Australia by eight runs to seal a series win in the three-match T20I&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/series/england-in-australia-2022-23-1317467/australia-vs-england-2nd-t20i-1317487/match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dawid Malan relishes return to No. 3 as cool Sam Curran ices ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGekPmHWGTZsECdEetPPqndH97ahw6gET_lRjH4rgx0K7OK15nZbqyG9P4_NMbYC988ANyw7dP" alt="Dawid Malan relishes return to No. 3 as cool Sam Curran ices ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visitors mirror Perth win in Canberra to go 2-0 up in three-match series.</p></div>
            </div>
        </a>
        </Template></>;
}