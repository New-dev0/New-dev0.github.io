import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dallas Mavericks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dallas Mavericks"/>
        <meta name="description" content="Trending News about Dallas Mavericks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dallas Mavericks</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/2pFF_KkQJzxbySwpFTEk1lu3-o0=/0x146:2253x1326/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24202833/usa_today_17955706.jpg" alt="Dallas Mavericks"/>
            <h3>Recent News</h3>
            <a href='https://www.mavsmoneyball.com/2022/11/16/23462254/mavericks-odds-how-to-bet-the-houston-rockets-vs-dallas-mavericks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mavericks Odds: How to bet the Houston Rockets vs Dallas Mavericks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrYIeTH2h3r_3TMUV1W-r_-6e6LH_REGM6bvvMQt2Lil2FK9Z09BjISZxEavHk7rpGSvueYItl" alt="Mavericks Odds: How to bet the Houston Rockets vs Dallas Mavericks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A clutch 4 quarter performance from Reggie Bullock helped the Mavericks avoid a calamity. With Houston coming into town, the team will need to bring the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thedreamshake.com/2022/11/16/23462019/houston-rockets-vs-dallas-mavericks-game-preview-luka-doncic-jalen-green-stephen-silas-nba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Houston Rockets vs. Dallas Mavericks game preview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrYIeTH2h3r_3TMUV1W-r_-6e6LH_REGM6bvvMQt2Lil2FK9Z09BjISZxEavHk7rpGSvueYItl" alt="Houston Rockets vs. Dallas Mavericks game preview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Houston Rockets face a familiar Southwest Division foe in the Dallas Mavericks. The Rockets head up I-45 (well, they&#39;ll fly in that direction at least)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/nba/fastbreak/injuries/breaking-luka-doncic-status-for-rockets-mavs-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BREAKING: Luka Doncic&#39;s Status For Rockets-Mavs Game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRATBUmWpsuXhAD1SXM_mTb9OfJSfl6118jOv9-tyKSTXodNQ17YzT7lawCmiL8fLqr0SfVIxGY" alt="BREAKING: Luka Doncic&#39;s Status For Rockets-Mavs Game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luka Doncic has been ruled out for Wednesday&#39;s game between the Houston Rockets and Dallas Mavericks.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/nba-odds-rockets-vs-mavericks-prediction-odds-and-pick-11-16-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA Odds: Rockets vs. Mavericks prediction, odds and pick - 11/16 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnarK_HPweKbcrjo-imIX3k5ow2svQXrme8KsI2mHIRycU0OhutNxhr_Sb1m3Hfxf3jDgvCZ6v" alt="NBA Odds: Rockets vs. Mavericks prediction, odds and pick - 11/16 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Houston Rockets visit the Dallas Mavericks on Wednesday. We continue our NBA odds series with a Rockets-Mavericks prediction and pick.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/basketball/nba/dallas-mavericks/2022/11/16/6374bb25268e3e16068b45c2.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doncic loses his head after a decisive three-pointer... and shushes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwzNNUpWES_byClFsB2812_zVVeT34YVbPW1rvtwQWEYfyvSRPXugos_yEK8RoVAekqYhBJGao" alt="Doncic loses his head after a decisive three-pointer... and shushes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luka Doncic hit a spectacular and crucial three-pointer late in the game against the Los Angeles Clippers that ultimately earned a win for his Dallas&nbsp;...</p></div>
            </div>
        </a><a href='https://spacecityscoop.com/posts/houston-rockets-dallas-mavericks-game-preview-november-16'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Houston Rockets vs Dallas Mavericks game preview - November 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYl14wBqUKGBGCII2Sg_YJh6TJO4oSCj9k0fG6jFobgtBLCzhnRd9ewGlbxdk_poKjBaPexZ_m" alt="Houston Rockets vs Dallas Mavericks game preview - November 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Houston Rockets travel to Dallas to take on the Mavericks on Wednesday,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsbookwire.usatoday.com/2022/11/16/dallas-mavericks-vs-houston-rockets-odds-tips-and-betting-trends-november-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dallas Mavericks vs. Houston Rockets odds, tips and betting trends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTHXy4_rv8qlBed1BcY6z0kUwKGAg_71TPeGRc-q62V5CJWG_IT3aziNjTB8AZzoUwld0BwjHl" alt="Dallas Mavericks vs. Houston Rockets odds, tips and betting trends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dallas Mavericks (8-5) will be attempting to continue a six-game home winning streak when taking on the Houston Rockets (2-12) on Wednesday,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}