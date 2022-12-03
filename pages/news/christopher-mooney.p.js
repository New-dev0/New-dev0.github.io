import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christopher Mooney</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christopher Mooney"/>
        <meta name="description" content="Trending News about Christopher Mooney" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christopher Mooney</h1>
            <Image width={800} height={500} src="https://focus.sundayworld.com/p09-C6lgg9f-aILiIFOHwWIJ0VM=/0x0/smart/prod-mh-ireland/e76c0509-a0ad-46d3-8695-80598ee496b9/9c5acdf7-7453-4bf1-8ab0-5dc951cf489b/SW_SPLASH_HAMILL.jpg" alt="Christopher Mooney"/>
            <h3>Recent News</h3>
            <a href='https://www.sundayworld.com/crime/irish-crime/friends-of-man-who-died-as-he-fled-scene-of-monaghan-murder-say-death-is-heart-breaking/336128521.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Friends of man who died as he fled scene of Monaghan murder say ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRXyHSpfZxf6r6_OsGrBEGblmmlugWOnfWA9OJv-aR2AVaWVlN309SJVqN10vH2VydCaGxHKqY" alt="Friends of man who died as he fled scene of Monaghan murder say ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Friends of a man who died after being accidentally run over shortly after fleeing the scene of the murder of a sex offender in Monaghan have described his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itv.com/news/utv/2022-12-02/man-killed-violently-in-co-monaghan-named-by-garda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man killed violently in Co Monaghan named by Gardaí as 60-year ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7p6WUPGJrQsKZlYYlQYx_iI4xIcA_OlKS6mww1DgS08U121DFB9xDkPAPWuudMjfeTffAuu7R" alt="Man killed violently in Co Monaghan named by Gardaí as 60-year ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardaí have given the name of the victim of a violent death in Co Monaghan on Thursday as Christopher Mooney. A murder investigation was launched after Mr&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishcentral.com/news/christopher-mooney-murdered-monaghan-man-child-sex-convictions'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Murdered Monaghan man had child sex offense convictions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPKQV4fRUdkH1O14gnx64CeDmITbuYDjwYiFwQSLGgQg5sdf4ezD6rHvh8rtgLQwPxTUwx0VBi" alt="Murdered Monaghan man had child sex offense convictions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A man who was stabbed to death in Monaghan on Thursday had previous convictions for child sex offenses, Irish police have confirmed.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/monaghan-deaths-gardai-suspect-killer-died-in-road-crash-after-fleeing-murder-scene-1400262.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monaghan deaths: Gardaí suspect killer died in road crash after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3Liw6QPSWX2yJcv2dF3HW7lq9igFRhypUNQoAJNXjljJ88HDXbLBwbKMWI3zF6BoKFgyZu62O" alt="Monaghan deaths: Gardaí suspect killer died in road crash after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The murdered man was named locally as Christopher Mooney (60), who was subjected to a sustained attack.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/news/irish-news/tributes-paid-man-who-died-28643269'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tributes paid to man who died after he fled the scene of gruesome ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSd-wmUu94K2qW3LtjQ78b3YE9AIYstkmRsCt66kD1O79peXayqozIkyElyHbggfrHBP0aCpeor" alt="Tributes paid to man who died after he fled the scene of gruesome ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gardai are trying to find a connection between murdered sex offender Chris Mooney and Kieran Hamill - who was hit by a car after the killing.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/crime-law/2022/12/03/gardai-investigating-monaghan-deaths-probe-murder-victims-past-sexual-offences/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gardaí investigating Monaghan deaths probe murder victim&#39;s past ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQU6gW8EftbCUzX8XKAH1r_616BZD0u64MQ8w9t1oTwt-EhoCeyT3ihZJ17ptnnSiyBxaElDxj6" alt="Gardaí investigating Monaghan deaths probe murder victim&#39;s past ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christopher Mooney (60) murdered at home in &#39;personalised&#39; knife attack before suspect Kieran Hamill (37) killed 30 minutes later in crash.</p></div>
            </div>
        </a>
        </Template></>;
}