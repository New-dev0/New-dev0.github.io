import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brooklyn Nets</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brooklyn Nets"/>
        <meta name="description" content="Trending News about Brooklyn Nets" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brooklyn Nets</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1110%2Fr1088990_1296x729_16%2D9.jpg" alt="Brooklyn Nets"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/nba/story/_/id/35041820/sources-kyrie-irving-rejoin-nets-soon-sunday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sources - Kyrie Irving could rejoin Nets as soon as Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwXgigQff2bZzoL6t24HWCT8SSI49iZfyq7ubD_vBqR40qRvAw37otowqOmCuyWClzfD_5WMP5" alt="Sources - Kyrie Irving could rejoin Nets as soon as Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Kyrie is continuing his journey of dialogue and education,&quot; National Basketball Players Association executive director Tamika Tremaglio told ESPN on Wednesday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/nba/fastbreak/news/kevin-durant-sounds-off-on-brooklyn-nets-following-loss-to-sacramento-kings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant Sounds Off On Brooklyn Nets Following Embarrassing ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPC4XsD1zdNumX9dBEtOWjipOdU2Kt2eFFXTFo4Z5nVLsvdmXCo9okVfohsAv25WWjbju9v7Yi" alt="Kevin Durant Sounds Off On Brooklyn Nets Following Embarrassing ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following a 153-121 road loss to the Sacramento Kings on Tuesday night, Brooklyn Nets All-Star Kevin Durant voiced his frustrations with the way things are&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sbnation.com/2022/11/16/23460860/nicolas-claxton-breakout-bright-spot-brooklyn-nets-nba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nicolas Claxton is the brightest light amidst the Brooklyn Nets dark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRP7rhBQ_o81pQIiZL4QESWXMHQAcgAefjWxz8sSy4TuG1smheY-INjzw-IatRr2Rny3nB392Dk" alt="Nicolas Claxton is the brightest light amidst the Brooklyn Nets dark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Merely a week into the season, the Brooklyn Nets were confronted with an on-court dilemma. The starting lineup of Kyrie Irving, Royce O&#39;Neale, Kevin Durant,&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3902850/2022/11/16/nets-ben-simmons-frustrations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside the Nets&#39; building frustration with Ben Simmons as team looks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqnKtmr1Sb2Q1kcFCr84EcJJdOUlqQq6O9JjtpHGcHjc3qPNGmGssccv9mOM5wZt2MzqpR1drV" alt="Inside the Nets&#39; building frustration with Ben Simmons as team looks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simmons had his best performance as a Nets player in Sacramento. It was a necessary first step toward rebuilding the team&#39;s trust in him.</p></div>
            </div>
        </a><a href='https://www.sacbee.com/sports/nba/sacramento-kings/article268795342.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Light the beam!&#39;: Sacramento Kings play &#39;perfect game&#39; to blast ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1hMJW5hIpqeHKBLSM2Wkygc_v20pLvsO1w20RqRsBs4mp2fqMzndYNNczZk8-tDUKz-hoBhJs" alt="&#39;Light the beam!&#39;: Sacramento Kings play &#39;perfect game&#39; to blast ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Terence Davis, De&#39;Aaron Fox, Kevin Huerter, Domantas Sabonis lead Mike Brown&#39;s Sacramento Kings over Kevin Durant&#39;s Brooklyn Nets on TNT.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/nets/news/report-nets-building-frustration-with-ben-simmons'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Nets Becoming Frustrated With Ben Simmons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBbirUUcFzecQtD0Jg2j8Nl8UUVHAm73DwEep9pElCknVgrHEkpAwlgL5pawWXBTYE4bWkAugE" alt="Report: Nets Becoming Frustrated With Ben Simmons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The morning after the Brooklyn Nets were embarrassed on national television - giving up a franchise-regulation 153 points in the loss to the Sacramento&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxnews.com/sports/kevin-durant-says-hes-reason-nets-expected-win-goes-in-depth-trade-request'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant says he&#39;s the reason Nets are expected to win, goes in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwWckCq-pKFtTpHnQJcGCm7LOKqYDpVCViAHTpzjW-KduuTaplNlF6DCAuH-0T4wnWxU_Mvi4W" alt="Kevin Durant says he&#39;s the reason Nets are expected to win, goes in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brooklyn Nets superstar Kevin Durant went on in depth on a variety of topics regarding the status of his team, saying he&#39;s the reason people expect them to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.inquirer.com/sixers/ben-simmons-sixers-brooklyn-nets-injuries-20221116.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nets growing frustrated with Ben Simmons — and he appears to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTP89J79ltEQG7xr3Oh04IsYy5Fq_z_IsS_z7yn6jvBLQGQp23xU9JM9HmT8NB1jbTnC0miGlj_" alt="Nets growing frustrated with Ben Simmons — and he appears to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Sixer discussed his performance this season and addressed his health in an interview with The Athletic.</p></div>
            </div>
        </a><a href='https://www.outkick.com/brooklyn-nets-fed-up-with-ben-simmons-after-15-games/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brooklyn Nets Fed Up With Ben Simmons After 15 Games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDFY1MJm7znYJEy7oFgajfbcDkykNSJ16JeQmfFlyXacd80o51UUJZmky89UrXGxMRouKgMzwGrQ" alt="Brooklyn Nets Fed Up With Ben Simmons After 15 Games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to a report from The Athletic&#39;s Sam Amick, the Nets organization and players are increasingly frustrated with Simmons&#39; drive and health as he manages&nbsp;...</p></div>
            </div>
        </a><a href='https://deadspin.com/it-appears-kevin-durant-has-made-peace-with-treading-wa-1849793068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It appears Kevin Durant has made peace with treading water in a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlH4Uj_HO-N8gNDsH0oNuf1MivRAm_vGGjtLDwOj2dLeirGbhpyYP1XGotN-JOtSLP52oWZ7Ua" alt="It appears Kevin Durant has made peace with treading water in a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brooklyn is three games under .500, but he&#39;s not sweating it.</p></div>
            </div>
        </a>
        </Template></>;
}