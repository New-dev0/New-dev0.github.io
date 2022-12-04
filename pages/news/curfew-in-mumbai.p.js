import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Curfew in Mumbai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Curfew in Mumbai"/>
        <meta name="description" content="Trending News about Curfew in Mumbai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Curfew in Mumbai</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Jun/1655441524_police.jpg" alt="Curfew in Mumbai"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/india/no-curfew-in-mumbai-section-144-imposed-to-ensure-peace-mumbai-police/cid/1901776'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No curfew in Mumbai, section 144 imposed to ensure peace, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfe-6eMzfTLFv8n7h37bFH_tbQQDwyakoClYcVvDggUbwrEU7WQIqnB2jxkS6VZ5IcuWDbWti-" alt="No curfew in Mumbai, section 144 imposed to ensure peace, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cops have imposed section 144 of Criminal Procedure Code from December 3 to 17 to prevent unlawful gatherings and rallies.</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/india/mumbai-curfew-no-fresh-ban-on-gatherings-routine-the-confusion-explained-15317061.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>There&#39;s no fresh curfew in Mumbai, it&#39;s a routine order | Know all ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiqX3UUZ7pofB8bPKXdgYpsFaeJgSBn1sGmh-btlkLcy9ezIxct_sMBdoZMAS84jOgRZBh1zal" alt="There&#39;s no fresh curfew in Mumbai, it&#39;s a routine order | Know all ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to a press release, the Mumbai Police has prohibited gatherings of five or more people across the city from December 3. But there&#39;s no need to&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/india/mumbai-restrictions-section-144-crpc-know-exact-date-public-order-mumbai-police-curb-on-gatherings-loudspeakers-ceremonies-updates-10056109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai Restrictions: No Curfew In City, Confirms Police; Advisory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ50G_k5g6sNOwK5bzsy2CI-imKAQfnDJ82lMXzLZfddSJ6T74YYTQ-xFoLluQbYyuYMST6Tcct" alt="Mumbai Restrictions: No Curfew In City, Confirms Police; Advisory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai Restrictions: Joint Commissioner Vishwas Patil clarified that this was not a curfew and the move is taken routinely to ensure peace in the city and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mid-day.com/mumbai/mumbai-news/article/no-curfew-in-city-mumbai-police-23258789'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No curfew in city: Mumbai Police</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTN72IUY1WtqGGoCHi-KJXuFXv3fJsjHrUnxeI7t8ZcouQ9mToLAup-cDintJwTVWcoprQoyN2K" alt="No curfew in city: Mumbai Police" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Mumbai Police have imposed restrictions in the city from December 3 to 17 to prevent unlawful gatherings and rallies, the police said.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/mumbai/no-curfew-in-mumbai-police-urges-people-not-to-believe-false-rumours-regarding-sec-144-article-95962497'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;No curfew in Mumbai&#39;: Police urges people not to believe false ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7xY_U6ZZnqwAo5Y5bSeX54U7r8AGxHIkjXzhubZc7c5HPg8-Bt8LppPuwtgRm4Ex1IbmCSAVl" alt="&#39;No curfew in Mumbai&#39;: Police urges people not to believe false ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While speaking to media, Mumbai&#39;s Joint Commissioner of Police, VN Patil said, &quot;There&#39;s a rumour that Section 144 of CRPC is implemented in Mumbai. It&#39;s false&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}