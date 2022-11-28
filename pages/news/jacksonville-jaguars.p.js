import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jacksonville Jaguars</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jacksonville Jaguars"/>
        <meta name="description" content="Trending News about Jacksonville Jaguars" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jacksonville Jaguars</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fblackandteal.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F18819892.jpeg" alt="Jacksonville Jaguars"/>
            <h3>Recent News</h3>
            <a href='https://blackandteal.com/2022/11/27/jaguars-jaxson-de-ville-ravens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars mascot Jaxson De Ville catches everyone&#39;s attention vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNiKp8IUqQpf2cONrnJltSu6vSl0mEFwWz5Vd8BaECbBihwLnMOZ5wJ0mEHMKh31XS13RcfPKK" alt="Jaguars mascot Jaxson De Ville catches everyone&#39;s attention vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaxson De Ville, the mascot of the Jacksonville Jaguars, caught everyone&#39;s attention when he was dancing following a touchdown by JaMycal Hasty.</p></div>
            </div>
        </a><a href='https://blackandteal.com/2022/11/27/jaguars-ravens-trevor-lawrence-comeback/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trevor Lawrence leads Jaguars to comeback victory over Ravens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeWskyrZek74NoCPVzey_zCOlygXuHQuQeydV1kZEpYruFHMmvbRZZZQDtXcVdx9diAOrt2NWk" alt="Trevor Lawrence leads Jaguars to comeback victory over Ravens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars make a bold decision to go for two, upset the Baltimore Ravens and win 28-27 at TIAA Bank Field.</p></div>
            </div>
        </a><a href='https://www.jacksonville.com/story/sports/nfl/2022/11/27/jags-vs-ravens-game-score-live-updates-jacksonville-jaguars-baltimore-nfl-week-12/10760423002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Postgame recap: Trevor Lawrence leads Jacksonville Jaguars rally ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2UqDBJvFN8swJV92g8krL9dI71fQwR97y4lE-7P6-2JsT2pbKOHvLtj3LgE2egL5njTB3am4U" alt="Postgame recap: Trevor Lawrence leads Jacksonville Jaguars rally ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trevor Lawrence and the Jacksonville Jaguars (4-7) faced Lamar Jackson and the Baltimore Ravens (7-4) on Sunday, November 27, 2022 at TIAA Bank Field.</p></div>
            </div>
        </a><a href='https://www.news4jax.com/sports/2022/11/27/gamble-pays-off-jaguars-stun-ravens-at-the-finish/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Our guys believe&#39;: Gamble pays off as Jaguars stun Ravens at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTM_8-GxS-WCSV3ZZi1twyc6tEvCQeqwtgjeMXockAylPb8qzjL0j-mvRGj0-kEwiQDDd6w0vQh" alt="&#39;Our guys believe&#39;: Gamble pays off as Jaguars stun Ravens at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baltimore had one final shot, getting in field goal position for Tucker, the most lethal kicker in NFL history. His kick was accurate but too short as the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynews13.com/fl/orlando/sports/2022/11/27/jacksonville-jaguars-edge-baltimore-ravens-late-two-point-conversion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacksonville Jaguars edge Baltimore Ravens on late score</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwVX93a1j7UzR8zbCBrdVThzWd6C_n9vLa1u3z3LT-XAjvpY3RqVPldHx7KdVq3sDlTOWJzAJ_" alt="Jacksonville Jaguars edge Baltimore Ravens on late score" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars stunned the Baltimore Ravens thanks to a late touchdown pass and two-point conversion from Trevor Lawrence.</p></div>
            </div>
        </a><a href='https://www.bigcatcountry.com/2022/11/27/23480625/jacksonville-jaguars-beat-baltimore-ravens-week-12-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars beat Ravens: Recap of Week 12 late victory in Jacksonville</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtn--TUyzHWKcaK2G6dv5kmcTo2r4cvmNSfjjDZ2oqmF_fXWnGNv6Mnl9nvID2zHYtulKxn8z3" alt="Jaguars beat Ravens: Recap of Week 12 late victory in Jacksonville" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jacksonville Jaguars takes down Baltimore Ravens in a glorious upset win.</p></div>
            </div>
        </a><a href='https://www.baltimoresun.com/sports/ravens/bs-sp-ravens-jaguars-instant-analysis-week-12-20221127-pgdvbmticvgp7d6cqyclmansbu-story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant analysis from Ravens&#39; 28-27 loss to Jacksonville Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4oFUAxNrvQ_VTufm4-ZvIYlP_MK5q2KgQROg6A6lUlySvFIH-BslT2z5qlQ07BBnabKGhKubw" alt="Instant analysis from Ravens&#39; 28-27 loss to Jacksonville Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s what the Baltimore Sun sports staff had to say immediately after the Ravens&#39; 28-27 loss to the Jaguars in Sunday&#39;s Week 12 game at TIAA Bank Field in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news4jax.com/news/local/2022/11/27/full-florida-man-scantily-clad-jaxson-de-ville-causes-online-stir-during-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Full Florida man&#39;: Scantily clad Jaxson de Ville causes social media ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9Xn3jsF4xzEirUUkVK_QceuFa-6Zu1IyVkwmI8uV3M85Y57lb7PI6_p12zP_vZikOzZgJ-zip" alt="&#39;Full Florida man&#39;: Scantily clad Jaxson de Ville causes social media ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After the thunderstorms passed through, it was unseasonably warm Sunday at TIAA Bank Field. Apparently a little too warm for the Jaguars mascot.</p></div>
            </div>
        </a><a href='https://floridapolitics.com/archives/572945-confederate-banner-stokes-controversy-ahead-of-jacksonville-jaguars-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confederate banner stokes controversy ahead of Jacksonville ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQALeuBzjMoWoe9ZOhCsIOLMjs6VAMJyRfL0Wi4S2MQc2bJO9vQktL0l0dqdjYTvgV8zYCnHbUB" alt="Confederate banner stokes controversy ahead of Jacksonville ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This incident was weeks after antisemitic messages were displayed on Florida/Georgia Weekend. For the second time in 2022, a football game in Jacksonville was&nbsp;...</p></div>
            </div>
        </a><a href='https://fansided.com/2022/11/27/jaguars-mascot-speedo-memes-tweets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars mascot wears a speedo for America: Best memes and tweets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXSazm4oZDe-9moxFnLD86DZ2inuyCz_UKSegwrkQkhFRlGfHshpgF6ZPfaJzI0rO-JkZhBIkk" alt="Jaguars mascot wears a speedo for America: Best memes and tweets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars mascot, Jaxson de Ville, is letting it all hang out on Sunday afternoon. I&#39;m not sure if this qualifies as NSFW.</p></div>
            </div>
        </a>
        </Template></>;
}