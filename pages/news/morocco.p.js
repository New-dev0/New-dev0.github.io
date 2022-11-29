import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Morocco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Morocco"/>
        <meta name="description" content="Trending News about Morocco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Morocco</h1>
            <Image width={800} height={500} src="https://www.state.gov/wp-content/uploads/2021/02/Press_release_gold_edited.png" alt="Morocco"/>
            <h3>Recent News</h3>
            <a href='https://www.state.gov/ambassador-hussain-travels-to-morocco-the-gambia-and-senegal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ambassador Hussain Travels to Morocco, The Gambia, and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQSLssEcfHW-Iey6DkECl1YQ6HRjmWql8k7V_RL2fTeaIPMnEjnUVn2xPO4CjRQUiRi_NxlCCe" alt="Ambassador Hussain Travels to Morocco, The Gambia, and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. Ambassador at Large for International Religious Freedom Rashad Hussain will travel to Morocco, The Gambia, and Senegal from November 28 through&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/0001/01/01/we-can-do-anything-says-morocco-s-regragui-after-belgium-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We can do anything&#39;, says Morocco&#39;s Regragui after Belgium win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwY8ZPeyCKIRM2bEg_OaUKxSSZqKdQaSCzaHRko7CdIB5vJ-ysWRSLiE4r4FDh0Vi8_gJDm48-" alt="&#39;We can do anything&#39;, says Morocco&#39;s Regragui after Belgium win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morocco&#39;s coach Walid Regragui reacts at the end of the Qatar 2022 World Cup Group F football match between Belgium and Morocco at the Al-Thumama Stadium in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/28/football/brussels-riots-belgium-morocco-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco&#39;s World Cup win against Belgium triggers riots in Brussels</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOIZ8Dr8CQ1Pjt0lxJmW9B744SIOpLuH6Z8q51YpK9Tu8GQRIyubd5wyaKAzD3yfWr5-6ZnXwa" alt="Morocco&#39;s World Cup win against Belgium triggers riots in Brussels" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to Reuters, several riots took place across the Belgian capital where dozens of soccer fans, some draped in Moroccan flags, clashed with riot police,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sowetanlive.co.za/sport/soccer/2022-11-28-crazy-difficult-hakim-ziyech-shows-morocco-what-they-were-missing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Crazy, difficult&#39; Hakim Ziyech shows Morocco what they were missing</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWNg5zl0chXtj3RgD3i5QG5YMCZ4PK3an9YB5ANLefGMm0wGr9WVyBu3O8C_OayEtLMPC3iEiR" alt="&#39;Crazy, difficult&#39; Hakim Ziyech shows Morocco what they were missing" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakim Ziyech tries to get past Belgium&#39;s Amadou Onana in Morocco&#39;s World Cup Group F win at Al Thumama Stadium on November 27 2022. Image: Stu Forster/Getty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kingfut.com/2022/11/27/morocco-win-belgium-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco secure vital win over Belgium in another World Cup upset</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUZgfM6NSGeYTu76ySg6E9kxnk63pdl9GX5qkNb0ShzX85f438VSs8xJFS2kO_Gy4eCqWtf8rL" alt="Morocco secure vital win over Belgium in another World Cup upset" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Moroccan national team earned a convincing 2-0 victory over Belgium in the World Cup group stages on Sunday.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-za/news/world-cup-morocco-thinking-big-shouldn-t-be-underestimated-ziyech-belgium/blt166a28d7efc648be'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Morocco thinking big and shouldn&#39;t be underestimated ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZN_rCgjSy67KTZNC3L5jskmYnex4iSqdxojNJCGsZJoG0OU1J1QKNX1oftsRTQsiXEU5jlNRG" alt="World Cup: Morocco thinking big and shouldn&#39;t be underestimated ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hakim Ziyech has cautioned those writing off Morocco insisting they have a strong squad capable of performing well at the 2022 Fifa World Cup.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/11/27/morocco-fans-in-belgium-elated-over-world-cup-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco fans in Belgium elated over World Cup win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAYyTWXcj8A6jpHlmLLtVKnUPsKDur9tJ_WrOneiZr3UVb5PqqcGYnmgK-6Wy_Rk3J0cG5loxh" alt="Morocco fans in Belgium elated over World Cup win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many who gathered at a youth centre in Brussels said Morocco&#39;s victory over Belgium shows the team is there to win.</p></div>
            </div>
        </a>
        </Template></>;
}