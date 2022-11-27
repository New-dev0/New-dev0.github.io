import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liam Cunningham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liam Cunningham"/>
        <meta name="description" content="Trending News about Liam Cunningham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liam Cunningham</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28593176.ece/ALTERNATES/s1200/0_269966834.jpg" alt="Liam Cunningham"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/news/irish-news/liam-cunningham-attends-raise-roof-28592890'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liam Cunningham attends Raise The Roof housing protest in Dublin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKyd4MeULBCs5tDHFwHVOCEShb2HkMBnAYWy--KzGrnOsP1tvKnCi372BwSF8RuFFjMT1id80q" alt="Liam Cunningham attends Raise The Roof housing protest in Dublin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Game of Thrones star was among those leading the Raise the Roof rally in Dublin over what he called a “breakdown in the social contract”. Speaking ahead of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/news/arid-41015609.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game of Thrones star joins Raise the Roof to protest &#39;breakdown in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFGFBa12hk7CYkBrr_dqEaOL6zIZpgXe5A843mJy_-fND14pkUiIECd0Hq7tsTe68UP-YD7syb" alt="Game of Thrones star joins Raise the Roof to protest &#39;breakdown in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liam Cunningham is joining today&#39;s rally in Dublin as thousands expected to protest the housing crisis.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/news/9801458/housing-rally-government-game-of-thrones-liam-cunningham/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Government invited soulless vulture funds back into the country ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJ6sNwFdVusM59f75U9p7fP9_PETRaoMy-OcvBbUKd3iYfXvy_WoS2LsUbv_wNO7g95Qwt08rd" alt="Government invited soulless vulture funds back into the country ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GAME OF Thrones star Liam Cunningham was back in battle yesterday - this time fighting for action on Ireland&#39;s housing crisis.The actor was one of t.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/ireland/thousands-take-to-dublin-streets-to-highlight-housing-crisis-1397670.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thousands take to Dublin streets to highlight housing crisis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRP9mOm7fX4ztrMpw7eCbvcQa9jkCcNP9k1cnPB88GjBe55tgDNg16Jt7GNYKWp1l3_jKTuVc0Z" alt="Thousands take to Dublin streets to highlight housing crisis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rally was organised by Raise the Roof, a campaign group made up of trade unions, advocacy groups, homelessness agencies and student unions and political&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/thousands-expected-take-dublins-streets-25612015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3000 take to Dublin&#39;s streets for housing protest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbdJTg8vlRcEGbSKgMHbBJN15pbSkXf_UhUkKg42FA7pQQLJHpBVQp6ZDxK2WsijE9ugI-0Q7g" alt="3000 take to Dublin&#39;s streets for housing protest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Crowds started to gather at the Garden of Remembrance at 1pm. Dublin Live estimated around 3,000 people took part in the rally which ended in Merrion Square.</p></div>
            </div>
        </a>
        </Template></>;
}