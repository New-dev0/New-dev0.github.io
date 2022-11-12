import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Real Madrid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Real Madrid"/>
        <meta name="description" content="Trending News about Real Madrid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Real Madrid</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1418546599.jpeg" alt="Real Madrid"/>
            <h3>Recent News</h3>
            <a href='https://therealchamps.com/2022/11/11/pep-guardiola-real-madrid-claim/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pep Guardiola delivers incredible Real Madrid claim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUZJgSGZHOGAxWI_aLk1Vqsp-pdO8BUs1cMy0kolhDSpC2ztN9xR81eAqft2L1PVOKjHIn-QrT" alt="Pep Guardiola delivers incredible Real Madrid claim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola has delivered an incredible claim about Real Madrid and their ability to win one Champions League after the other.</p></div>
            </div>
        </a><a href='https://therealchamps.com/2022/11/11/liverpool-offer-real-madrid-superstar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool made an offer to the Real Madrid superstar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5kBJk-71tdcHpYP9IJ1IkH6cb2M-2csS06Kkdb30dENSH6qUnHyLAh-tkqzoXT6Eskd9xRCL_" alt="Liverpool made an offer to the Real Madrid superstar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benzema is coming off of his best season ever, having guided the team to the Champions League and La Liga title last season, and scooping up the Ballon d&#39;Or for&nbsp;...</p></div>
            </div>
        </a><a href='https://footballexpress.in/real-madrid-have-big-plans-for-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid have big plans for 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9ABXi2Ci4BkgoJO95e30ZO3uU_JNsixljaEBc16WSA8BF_5mA-nEg6C5VbgSgV6mYQc9lNHQq" alt="Real Madrid have big plans for 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But apart from that, they are firing in La Liga with Vinicius, Rodrygo, and Valverde leading from the front. Barcelona are the only team who have scored more&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11417541/Carlo-Ancelotti-teases-Luka-Modric-HORRENDOUS-miss-Real-Madrids-win-Cadiz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlo Ancelotti teases Luka Modric for his HORRENDOUS miss in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxhLEmw3am7TF3WxOJzT8j1r9iyYn0_V7LneVRun5QBeG5TT0QUorldmpTsartkSybf4gI0fMc" alt="Carlo Ancelotti teases Luka Modric for his HORRENDOUS miss in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid manager Carlo Ancelotti gave an amusing response when asked about Luka Modric&#39;s glaring miss on Thursday night, joking that he was lucky that&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/luka-modric-mocks-real-madrid-player-for-missing-sitter-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luka Modric mocks Real Madrid player for missing sitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjY127fzNqx_oG0rEKZKfAmTu5KS10TWgZr4084I5C7Vow2MY5-GfVaCe3TDvxhIsDKUgycnGr" alt="Luka Modric mocks Real Madrid player for missing sitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Blancos came away with a crucial win against Cádiz on Thursday night, but there was a moment that few could have believed.</p></div>
            </div>
        </a><a href='https://madriduniversal.com/guardiola-makes-a-major-claim-about-real-madrids-success-in-the-uefa-champions-league/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guardiola makes a major claim about Real Madrid&#39;s success in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1gq-eyoQg96wm30nTQNhnkuTgg14VPGIcL0fqWRF5ldXqkt-DDWw-7aO0aJvNg0HpPINVPa8P" alt="Guardiola makes a major claim about Real Madrid&#39;s success in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Speaking in an interview with Rio Ferdinand for BT Sport, Manchester City manager Pep Guardiola has made a major claim about Real Madrid&#39;s success in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/football/news-liverpool-made-offer-sign-real-madrid-superstar-karim-benzema-reports'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool made offer to sign Real Madrid superstar Karim Benzema ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWs7TvJLwLGDKaMLolajRW9XuU72I6sMHmslcDT0quLRGFHqT_zLy6mh7iUCcCNI0VIsOBuBMf" alt="Liverpool made offer to sign Real Madrid superstar Karim Benzema ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Benzema reportedly told the club that he would leave if Los Blancos signed another star striker in the summer. He had a potential suitor as well, with the Reds&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}