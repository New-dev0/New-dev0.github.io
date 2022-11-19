import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/allwyn_181122_art2.jpg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.daijiworld.com/news/newsDisplay?newsID=1021071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Best E-sports Players from India</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuFzSc_2GNcMRYK0mg9bbxiXsxfF66fZ0RRqX8_cMX2YBLAYIFCzZZik-hRNLXqOECoypj-lD5" alt="The Best E-sports Players from India" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He has a significant impact on the Indian eSports scene nowadays, being not only a PUGB player but also a content producer in the community. ScoutOP is well-&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/other-sports/indian-sports-news-november-18-highlights-scores-updates/article66152512.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian Sports Wrap, November 18: Ramkumar exits Challenger ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAzEo5aAEQlLReCvyOjEVwE-eAuANJl7lRTr7WfJCV5nwn0Syy499Nh8yjKLIYhRjDaDq-IGDh" alt="Indian Sports Wrap, November 18: Ramkumar exits Challenger ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TENNIS &middot; Ramkumar knocked out of Challenger event in Japan &middot; ITF men&#39;s tournament: Digvijay overcomes slow start to defeat Sidharth Rawat &middot; The results: &middot; Adhiraj&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lifestyleasia.com/ind/food-drink/top-sports-bars-in-bengaluru-where-you-can-watch-the-fifa-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Head to these top sports bars in Bengaluru to watch the FIFA World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmbtlHzpR9zzLRA-pa5hJ57oETGi5L4iecwiLNGjEwl-r61PCIOpm5KFgoJ_Vz8mOw9iFGQK24" alt="Head to these top sports bars in Bengaluru to watch the FIFA World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ever wondered what would football in Bengaluru seem like? With the FIFA World Cup already around the corner, let&#39;s make you consider the best sports bars in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prnewswire.com/news-releases/toms-watch-bar-the-new-gameday-headquarters-for-sports-super-fans-to-open-in-washington-dcs-historic-chinatown-steps-from-capital-one-arena-on-december-5-301683048.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tom&#39;s Watch Bar, the new gameday headquarters for sports super ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvKxaiDVDl8nTgtPPG1wf1UK7jq4-rW2SCUHImFiDpafoqZNJoAw_4ToqTWXQJl0C_xkJpe-5v" alt="Tom&#39;s Watch Bar, the new gameday headquarters for sports super ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PRNewswire/ -- With an elevated, 360°-degree viewing room complete with personalized audio at every table, and more than 120 high-definition screens,&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/cricket/sourav-ganguly-roots-for-sports-as-part-of-childrens-education-3533443'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sourav Ganguly Roots For Sports As Part Of Children&#39;s Education</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5f39NmE2dUJio5zseGq5-2m6HJ4njjkIyAe09TMb5dqa0dXmt_MLcA07HDJnyG_hMgs7VG_v1" alt="Sourav Ganguly Roots For Sports As Part Of Children&#39;s Education" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former cricketer urged everybody to &quot;come together to ensure that all children are in school and continue learning&quot;. Sponsored by Vuukle. West Bengal UNICEF&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/jammu/sports-reasi-news-jmu272575460'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>तलवारबाजी प्रतियोगिता में डिग्री कॉलेज रियासी विजेता</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZRdR1cL-awMWgQJ4M0MyijHK9so5MNGz6Yk2FKXTYi4ytM6pAKccFcyx30F_t5se85Xi16sjs" alt="तलवारबाजी प्रतियोगिता में डिग्री कॉलेज रियासी विजेता" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रियासी। जम्मू यूनिवर्सिटी के डाइरेक्टोरेट ऑफ स्पोर्ट्स एंड फिजिकल एजू&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}