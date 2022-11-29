import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wales vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wales vs Australia"/>
        <meta name="description" content="Trending News about Wales vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wales vs Australia</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-11/Lachlan%20Lonergan%20Wales%20Australia%2011262022.jpg?itok=r1mQgoWW" alt="Wales vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/ca/rugby-union/news/wales-vs-australia-live-stream-tv-channel-lineups-2022/xwegtwx9ba2xfjxhuv8dudp5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales vs. Australia result, highlights and analysis as Wallabies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgENT6UPJAlywv-LqE2_E8pBNsXf5lNVbcicbKXavkhhqlStfTok75vEs9xsFq1ejiJnhAg1-0" alt="Wales vs. Australia result, highlights and analysis as Wallabies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales and Australia closed out their autumn 2022 campaigns by putting on one heck of a show in Cardiff, as the Wallabies came back from 34-13 down to win&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/wales-v-australia-uk-media-25615231'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales v Australia UK media reaction: &#39;Insane&#39; implosion leaves ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMl7kTYcBtt9Fr82oDGnPQN-fjik2cgz-aDsXGrQtL49OL2LO-pm8KE6gUo_uabPaZ5AIhYJsS" alt="Wales v Australia UK media reaction: &#39;Insane&#39; implosion leaves ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales&#39; implosion in the final quarter of a match they looked like winning handsomely has left Wayne Pivac on the brink and many scratching their heads as to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/rugby/rugby-union/wales-australia-live-stream-score-result-b2233311.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales vs Australia LIVE rugby: Final score and result as Wallabies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBrKoEquX0aQicWYnoW-X1sKUMxgAn944zdhtyk4sNe5AObwxmHEW5ud_D9lhDM1vhoIgPqEtG" alt="Wales vs Australia LIVE rugby: Final score and result as Wallabies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales 34-39 Australia: Wales somehow contrive to blow a 34-13 lead in the final 25 minutes as the Wallabies fight back for an incredible win.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/26/wales-v-australia-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales v Australia result: Stunning defeat leaves Wales coach ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRDu-IoDIIo-Ppt_nvxS-DEfFiAv3QavlH-imOtY23aXYUDYT619H7PinuANAO2koLYpfYbe5We" alt="Wales v Australia result: Stunning defeat leaves Wales coach ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamie Roberts has urged the Welsh Rugby Union to consider firing Wayne Pivac after the head coach oversaw his ninth Test defeat of the year against&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}