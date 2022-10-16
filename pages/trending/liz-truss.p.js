import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liz Truss</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liz Truss"/>
        <meta name="description" content="Trending News about Liz Truss" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liz Truss</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/collage_maker-15-oct-2022-05.34-pm.jpg?VersionId=._PtmAihnY6pJbb4qRW1YO1OmiV1IAmT" alt="Liz Truss"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatoday.in/world/story/uk-pm-liz-truss-inflation-political-crisis-rishi-sunak-2285758-2022-10-15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trouble for Liz Truss? UK PM battles inflation as she faces possible ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7buAJUwwIHyAhu-WTQIbUdfiatg4qbzsCRaR-pgL9T4fq8_FjhQTUgMVbApSB65UIPHX57eEW" alt="Trouble for Liz Truss? UK PM battles inflation as she faces possible ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Anuja Jha: On September 5, Conservative Party leader Liz Truss won the UK PM race, defeating her rival Rishi Sunak to win the Tory leadership contest.</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/joe-biden-calls-liz-truss-original-economic-plan-a-mistake-11665878248767.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joe Biden calls Liz Truss&#39; original economic plan a &#39;mistake&#39; | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpwsrThMcpDdEkKvKUk9728pu_0s2CgUzVlkMG8NmtyyetlnOe0g-pwMbV_ihcy1aEvVGDHfzc" alt="Joe Biden calls Liz Truss&#39; original economic plan a &#39;mistake&#39; | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Biden said it was predictable that the new prime minister on Friday was forced to walk back plans to aggressively cut taxes without identifying cost&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/uk-tabloid-starts-liz-truss-vs-lettuce-livestream-anand-mahindra-reacts/articleshow/94883083.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UK tabloid starts &#39;Liz Truss vs lettuce&#39; livestream, Anand Mahindra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTX3aeYiFi1fcMt-HiPyY6dP52jtmZO_QTyqmE8aXBJOmC_qmVpY0ZVxzxKttHyakig9ZraV6yn" alt="UK tabloid starts &#39;Liz Truss vs lettuce&#39; livestream, Anand Mahindra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Among those who apparently believe it wouldn&#39;t be too long is the British tabloid Daily Star, and it&#39;s running a livestream as a run up to her possible&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-politics-63268860'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who is in charge? Liz Truss or Jeremy Hunt?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYpxuwKCsF4lldoYfeVn2z8an4OeczGgXIigzcWm5-QgFOx7w09iRfjbiAVt_NFN6nHpxcMOOZ" alt="Who is in charge? Liz Truss or Jeremy Hunt?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new chancellor has junked the prime minister&#39;s economic strategy in 24 hours, writes Laura Kuenssberg.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/biden-british-pm-liz-truss-original-economic-plan-was-a-mistake-101665878768417.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden: British PM Liz Truss&#39; original economic plan was a mistake</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDwEAJcnxEWl8rtchU_lleU9Jt8kR8O7BfoxJcvJ6CI44CkvBFFLr7DnIZHrTfzVnfBhyqu1DC" alt="Biden: British PM Liz Truss&#39; original economic plan was a mistake" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;I wasn&#39;t the only one that thought it was a mistake.&quot; Biden told reporters during a stop at an ice cream shop in Oregon as he helped campaign for Tina&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/new-uk-finance-minister-admits-liz-truss-government-s-mistakes-that-s-why-101665815680365.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New UK finance minister admits Liz Truss government&#39;s mistakes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGy17di-2JxE-vjy9hwCyANbjSvIZWNZiCp48UMvDCr7JGr_aXbM_TUjWHIzJ0td1iWBIlsFOo" alt="New UK finance minister admits Liz Truss government&#39;s mistakes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UK finance minister Jeremy Hunt said, “It was a mistake to fly blind and to do these forecasts without giving people the confidence.” | World News.</p></div>
            </div>
        </a><a href='https://www.bbc.com/news/uk-scotland-scotland-business-63268826'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liz Truss versus The Markets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSix7hWoL5N6gVPafNS0GXP_9F9sOmDfafbMlyjkZK6qJoA014dmDs0ZfSXTtM29IYM4iWXvT4" alt="Liz Truss versus The Markets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her new chancellor is looking to reassure investors and reset public finances but some painful choices lie ahead.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/offbeat/great-brutal-britain-quips-anand-mahindra-on-uk-tabloids-liz-truss-vs-lettuce-livestream-3434846'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Great (Brutal) Britain,&quot; Quips Anand Mahindra On UK Tabloid&#39;s Liz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQnWcMBIR8YsMujJFyqrZTZPHtA3loPk7CxS9ZUIk-2DvwjKUh2NujxeUHPNC2ILIuvrNRTfEg" alt="&quot;Great (Brutal) Britain,&quot; Quips Anand Mahindra On UK Tabloid&#39;s Liz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Industrialist Anand Mahindra, who frequently shares interesting content with his Twitter followers, recently reacted to reports of a British tabloid pitting&nbsp;...</p></div>
            </div>
        </a><a href='https://www.siasat.com/uk-pm-liz-trusss-credibility-blown-and-her-authority-gone-2434972/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;UK PM Liz Truss&#39;s credibility blown and her authority gone&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRhpEjYTzXnVXc-NFxCyCXyp_wgX-jEMYVvuN9MQi5Ci1PYFsWz0NqR22fDUh6EDENRVCqqWOc" alt="&#39;UK PM Liz Truss&#39;s credibility blown and her authority gone&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UK PM Liz Truss has sacrificed her Finance Minister and closest political ally just weeks into her premiership in order to save her own skin.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/politics/2022/oct/15/tories-talks-ousting-truss-rescue-party'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senior Tories hold talks to discuss ousting Liz Truss to &#39;rescue&#39; party</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQljgtp-1F77HDuw38G47daYtfJSghmunaw0gapY_uN82i7CN5qmvXmdcvlsDZJ9cST0eUPxr0i" alt="Senior Tories hold talks to discuss ousting Liz Truss to &#39;rescue&#39; party" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As new chancellor Jeremy Hunt rips up prime minister&#39;s economic plans, Conservatives plot route to replace her.</p></div>
            </div>
        </a>
        </Template></>;
}