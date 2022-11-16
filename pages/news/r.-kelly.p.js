import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>R. Kelly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,R. Kelly"/>
        <meta name="description" content="Trending News about R. Kelly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>R. Kelly</h1>
            <Image width={800} height={500} src="https://cst.brightspotcdn.com/dims4/default/560c594/2147483647/strip/true/crop/3000x1713+0+290/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FX49q4eaIlZQZvAw7EzntX3_56Tc%3D%2F0x0%3A3000x2291%2F3000x2291%2Ffilters%3Afocal%281500x1146%3A1501x1147%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24200887%2Fmerlin_108260168.jpg" alt="R. Kelly"/>
            <h3>Recent News</h3>
            <a href='https://chicago.suntimes.com/2022/11/15/23461672/r-kellys-lawyer-points-to-technicalities-argues-singer-deserves-acquittal-or-new-trial-in-chicago'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R. Kelly&#39;s lawyer points to technicalities, argues singer deserves ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvUl5Dm1gDDftS7Vydgtgiwb31MIInqU6Tml8sFQqfgZODsuZzID4XrTPCdT-qinAeyLzXPNJy" alt="R. Kelly&#39;s lawyer points to technicalities, argues singer deserves ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kelly is already serving a 30-year prison sentence for a racketeering conviction in New York. His time behind bars is likely to increase when he is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/chicago/news/r-kelly-trial-cook-county-prosecutors/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prosecutors get more time to decide if R. Kelly will go to trial in Cook ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5h3i8jF_5jdRXwacj_2l0CkKfi4VnDOeB4IV4MaYp7JcLzTcxiH8bFgxFcGQVyxA3I-SStzk-" alt="Prosecutors get more time to decide if R. Kelly will go to trial in Cook ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The State&#39;s Attorney&#39;s office first filed charges against Kelly in 2019. They involved sexual assault and sexual abuse claims involving four women, three of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcchicago.com/news/local/cook-county-prosecutors-undecided-on-new-r-kelly-trial/2996514/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cook County Prosecutors Undecided on New R. Kelly Trial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYXDiocsYXkawNEhRcmCkM3Cjsu8xrkRgNA2-x75biX1qIBN324Y2g9-X9BAh9Tuk4C_x5D9lh" alt="Cook County Prosecutors Undecided on New R. Kelly Trial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cook County prosecutors on Monday asked for more time to decide on whether to prosecute R&amp;B star R. Kelly on sexual abuse charges involving four&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gmtoday.com/news/illinois/still-no-movement-in-r-kelly-cases-in-illinois-cook-county/article_399b8a24-652d-11ed-bc36-1fa578fdb073.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Still no movement in R. Kelly cases in Illinois&#39; Cook County</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkBf5Juur8M7XkqER2JvmABnk-2N4dwar3E7Q9I8haNNY7IyLn5f_hFIvzPcbV3U7FdQINJbNZ" alt="Still no movement in R. Kelly cases in Illinois&#39; Cook County" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHICAGO — Two months after R. Kelly&#39;s second federal trial concluded, there has been no apparent movement in his Cook County cases.</p></div>
            </div>
        </a><a href='https://www.wjol.com/cook-co-prosecutors-still-deciding-whether-to-prosecutor-r-kelly/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cook Co. Prosecutors Still Deciding Whether To Prosecutor R. Kelly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSogBis_NV3Gfu3cJJvCCKoQZoBaQkci6j2hMrsYsx6H6DOPCECnro74tA4gGxxuEJpNzAPS19I" alt="Cook Co. Prosecutors Still Deciding Whether To Prosecutor R. Kelly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kelly on sex abuse charges. The prosecution yesterday asked a judge for more time to put together transcripts from the singer&#39;s trials in federal court in New&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}