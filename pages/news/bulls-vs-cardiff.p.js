import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bulls vs Cardiff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bulls vs Cardiff"/>
        <meta name="description" content="Trending News about Bulls vs Cardiff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bulls vs Cardiff</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7849/5d32b727444d40e7b9517ca250abcda4.jpg" alt="Bulls vs Cardiff"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/unitedrugbychampionship/moodie-arendse-combine-to-spark-thumping-bulls-win-as-cardiff-crash-down-to-earth-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moodie, Arendse combine to spark thumping Bulls win as Cardiff ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyTZQRUZC8FUcB0J87-W0s-No3TaQUT-1X5snLHlCvqScLar8S9J6doCJcAIWPtaJhmeR6cwbH" alt="Moodie, Arendse combine to spark thumping Bulls win as Cardiff ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kurt-Lee Arendse and Canan Moodie dazzled as the Bulls ran out comfortable bonus point winners against Cardiff in an entertaining URC clash at Loftus on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63824606'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goosen inspires Bulls as Cardiff suffer heavy loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnjZ_Ye-qsHr5N_0SGN57w6kX9LvdxzCR9_ctlow78dmDNs_bdzVw5MLbjMuzOTRAWewevPteC" alt="Goosen inspires Bulls as Cardiff suffer heavy loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cardiff&#39;s bright start in Pretoria was snuffed out by a masterclass from the Bulls&#39; returning Springboks. Johan Goosen scored a try and set up two more for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/goosen-soars-bulls-crush-cardiff/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goosen soars as Bulls crush Cardiff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyWXNj2EiURMz_3K2f0Hr-jyr_LHr6fMNgU3kvfbQ8T-WHcx9Yw7Ge_jc_DVwzD-soiM7hfQpb" alt="Goosen soars as Bulls crush Cardiff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Flyhalf Johan Goosen starred against Cardiff in Pretoria on Saturday as the Vodacom Bulls made it four wins on the trot in the Vodacom United Rugby&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/urc/superb-bulls-run-cardiff-into-the-ground-under-the-saturday-night-lights-at-loftus-88a5464b-14d3-446c-bfc1-69c0938cc8ce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Superb Bulls run Cardiff into the ground under the Saturday night ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUmw-dz6BKHKXAqpFDm8BZ-iNA0IB301vpeI2Zu9ab-sEAhcP3xX0E8g22UrsS1esffVyLtfrD" alt="Superb Bulls run Cardiff into the ground under the Saturday night ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bulls ran in six superb tries as they dismantled a tough Cardiff outfit during their United Rugby Championship clash under the Saturday night lights at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/bulls-v-cardiff-live-team-25667485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cardiff unable to repeat South African heroics in six-try defeat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAxRk2bTC19_Ba4SlHG3Z_fWFIojKgOWHlLogar8nENvFBmlpXngv2Q7XHmVBIiYgn1ruBiKsG" alt="Cardiff unable to repeat South African heroics in six-try defeat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cardiff Rugby: Cameron Winnett; Jason Harries, Mason Grady, Ben Thomas, Aled Summerhill; Jarrod Evans, Lloyd Williams; Rhys Carre, Kristian Dacey, Dmitri Arhip,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/sport/rugby/2022-12-03-bulls-put-hapless-cardiff-to-the-sword-in-pretoria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls put hapless Cardiff to the sword in Pretoria</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSybxaNpvFXR1PDaRaFAeMnywcgiC9gMRqYV8-FNph8deZXHfKm3G-6oj_of37SIcCTjbitzOOf" alt="Bulls put hapless Cardiff to the sword in Pretoria" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bulls ran in six unanswered tries, including a brace by emerging Bok winger Canan Moodie, to demolish Cardiff 45-9 during their one-sided United Rugby&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/bulls-bring-cardiff-down-to-earth-to-earth-with-a-bump/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls bring Cardiff down to earth with a bump</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8xvCF0RtRSUdZ5OV1X3ScV81HEr_ORkSao0btUyjtiIY0CqezQGopKj1sBTCr_UU0mnH5lpw8" alt="Bulls bring Cardiff down to earth with a bump" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cardiff came up well short in their bid to complete a South African double as they suffered a 45-9 defeat to the Bulls in Pretoria.</p></div>
            </div>
        </a>
        </Template></>;
}