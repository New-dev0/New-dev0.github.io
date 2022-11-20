import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/18/3492366-71194488-2560-1440.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.com/tennis/atp-finals/2022/live-novak-djokovic-taylor-fritz_mtc1406938/live-commentary.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic - Taylor Fritz live: ATP Finals - Tennis - Eurosport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0PkrNx6Hj_ELaOV0SH--QsX2KoFLdYReRPDIgfc-7ULidWJky-d4I7tq9prFTFJYtIgNtC8t7" alt="Novak Djokovic - Taylor Fritz live: ATP Finals - Tennis - Eurosport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get the latest Tennis updates on Eurosport. Catch Novak Djokovic - Taylor Fritz live on 18/11/2022. Find scores, stats and comments in real time.</p></div>
            </div>
        </a><a href='https://www.atptour.com/en/news/djokovic-fritz-turin-2022-saturday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic Downs Taylor Fritz To Reach Turin Final | ATP Tour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR56vjiWqJJ3xPBxUkj4DqrFVGFXeJYQLJWovrZuALxCPUzKpNIZyEtW4oS0c0Y1-i4rK3OH5zs" alt="Novak Djokovic Downs Taylor Fritz To Reach Turin Final | ATP Tour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic passed a stern semi-final test from Taylor Fritz on Saturday to move within one victory of equalling Roger Federer&#39;s record of six Nitto ATP&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/19/novak-djokovic-to-face-casper-ruud-in-atp-finals-showpiece-after-semi-wins'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic to face Casper Ruud in ATP Finals showpiece after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZi-iR1K1SY9xTfQ9baqDZ15dVqHyWyjzBEFcS5POKPAXyo-8c-K2IUPS5CBQKdXYzmU1JlVEe" alt="Novak Djokovic to face Casper Ruud in ATP Finals showpiece after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic can win $4740300 for winning the tournament after beating Taylor Fritz in the semi, while Ruud beat Andrey Rublev.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/tennis/2022/11/19/63793a3be2704e4c498b45c1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic takes down Fritz, will look to win sixth ATP Masters title</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjkTTfxmkHTk8d6e34FGibjgw8HDR_NGOesfugiPtpTjiqOp_8VVfNRXOap3TzB_GN9x2cVLJh" alt="Novak Djokovic takes down Fritz, will look to win sixth ATP Masters title" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic is showing no signs of slowing down after taking down the next generation of tennis stars at the ATP Finals in Turin. The Serbian, age 35,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennis.com/news/articles/novak-djokovic-6-0-vs-taylor-fritz-atp-finals-level-turin-awaits-ruud-rublev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic moves to 6-0 against Taylor Fritz after battling to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_00yT_u97fFZsQe9q4EXgsCQmIZ2v_Gmq2wJAHGC28o1VQhLA86KBE077q5r63n47tNCtH_Db" alt="Novak Djokovic moves to 6-0 against Taylor Fritz after battling to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic will play for a record-tying sixth Nitto ATP Finals trophy after winning the first semifinal in Turin over Taylor Fritz on Saturday afternoon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/tennis/1698926/Casper-Ruud-Andrey-Rublev-Novak-Djokovic-showdown-ATP-Finals-title-tennis-news'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casper Ruud crushes Andrey Rublev to set up Novak Djokovic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9SjX0OCcs-7ZME2ajav03bfW5hN3-Y_u4l3fbv3LQJoU9Kz6V4eANzWNrK7xV52zcDpcK7tV4" alt="Casper Ruud crushes Andrey Rublev to set up Novak Djokovic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casper Ruud reached his maiden final at the ATP Finals as he dropped just six games to Andrey Rublev.</p></div>
            </div>
        </a>
        </Template></>;
}