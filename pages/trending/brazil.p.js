import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brazil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brazil"/>
        <meta name="description" content="Trending News about Brazil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brazil</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/5jhglj/article65943828.ece/alternates/LANDSCAPE_615/2022-09-27T200710Z_1854742302_UP1EI9R1JVW5D_RTRMADP_3_SOCCER-FRIENDLY-BRA-TUN-REPORT.JPG" alt="Brazil"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/international-football/brazil-tunisia-5-1-paris-qatar-world-cup-2022-neymar-raphinha-vinicius/article65943829.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil hammers 10-man Tunisia 5-1; banana thrown at Brazilian ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcgyjqq2XOdvJDnxYRJ4iQ9RTHi0n9gK_IqYWQB0X2S-ERQv_1CGu1bGIyP4wk3RazrbUItZfj" alt="Brazil hammers 10-man Tunisia 5-1; banana thrown at Brazilian ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>During the match, a banana was thrown from the stands toward the Brazil players while they were celebrating a goal. Brazilian players have been vocal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opendemocracy.net/en/oureconomy/brazil-lula-bolsonaro-presidential-election-economy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>If progressive Lula wins in Brazil, this is what he faces</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTipKxNDh24cuXIDLyUT8sE6Na5dU3o6c1eLB_emUzek37Wd1TtE-OH4dndS1j10svT1S0PUX--" alt="If progressive Lula wins in Brazil, this is what he faces" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lula would enter office with a progressive agenda. Will he be able to repeat the successes of his last presidency?</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/samindrakunti/2022/09/28/brilliant-brazil-dazzles-ahead-of-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brilliant Brazil Dazzles Ahead Of World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqjzkr4y5iDjZL_ULkDrHo0DFBGzDT69YvSV2US6saPM-proKIIP346fIWooN_0BfPk0JvJvjO" alt="Brilliant Brazil Dazzles Ahead Of World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At a feverish Parc des Princes, dotted with red shirts and the colors of Esperance, the Tunisia supporters, who had snapped up all tickets in a matter of days,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/brazil-bra/story/4755068/fan-throws-banana-at-brazil-players-during-goal-celebration-in-final-world-cup-warm-up'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fan throws banana at Brazil players during goal celebration in final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCaU3rqbkCXCAk2_Z3ytmPytcd2Ytmog8k2Kz_upkzTXh948PhNmVIyzUn0Du4kVvCx63Lnvyw" alt="Fan throws banana at Brazil players during goal celebration in final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A banana was thrown from the crowd at Brazil players celebrating a goal in a friendly against Tunisia in Paris on Tuesday.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-09-28/a-stock-investor-s-guide-to-brazil-s-presidential-election'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Stock Investor&#39;s Guide to Brazil&#39;s Presidential Election</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpfMT46hTxw-DKl0yq4DuVh38DnocEBKVMUMGSGW_-7D6v5ivtqWrA4t_Xtilu8-Zg5kErDShj" alt="A Stock Investor&#39;s Guide to Brazil&#39;s Presidential Election" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian stocks have outperformed global peers this year, and some investors say more gains are likely in store as neither of the two candidates vying for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/9/28/brazil-richarlison-banana-racism-tunisia-football-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil&#39;s Richarlison demands action after banana thrown at match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRll33v1ZHnkpL5hAMbOpda16n_NzalMmAaDA4JJRF4uaUdIeWyISpXijQIbhyHWfrcxG6QHLWl" alt="Brazil&#39;s Richarlison demands action after banana thrown at match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian footballer Richarlison subjected to racist abuse during a friendly game in Paris against Tunisia.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/2022/9/28/lulas-lead-over-bolsonaro-widens-days-ahead-of-brazil-election'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula&#39;s lead over Bolsonaro widens days before Brazil election</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSSPjDKheo8QT4GvxmLkin8NmLlt2HnYPbRcPAmYHBJO9rqsvHa3YYMMJyLLlfLCtn1mIxf2gY" alt="Lula&#39;s lead over Bolsonaro widens days before Brazil election" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazil remains tense in advance of October 2 vote, as polls show former left-wing leader ahead of incumbent Jair Bolsonaro. Luiz Inacio Lula da Silva. Former&nbsp;...</p></div>
            </div>
        </a><a href='https://www.article19.org/resources/brazil-shareinformation-sharedemocracy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil: #ShareInformation #ShareDemocracy - ARTICLE 19</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTql3c6-xLaBEmOnloxLIg4azaj-Hg9b3FySG-tGinvjU9W0xl1GsHaDEcDqk1a_Bluch-XpJFH" alt="Brazil: #ShareInformation #ShareDemocracy - ARTICLE 19" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The #ShareInformation #ShareDemocracy campaign promotes free speech and the right to information during the Brazilian 2022 general elections.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/brazil-winners-losers-and-ratings-vs-tunisia/bltcfaf2a7e335af909'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil winners, losers and ratings as Neymar &amp; team-mates stand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMJ4rIuw8M1HH1g-LVX2Avak9Fs965-UNTt_m9GGZNNw1v-7iVgP2vLYzMhOuZYUB7WTM3AN4W" alt="Brazil winners, losers and ratings as Neymar &amp; team-mates stand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>That was a mess of a friendly match, but the Selecao handled it as well as possible.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/sep/27/banana-thrown-at-tottenhams-richarlison-as-brazil-beat-tunisia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richarlison demands action after banana thrown at him in Brazil win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAH8ByUyr_TGCIqaU6mxWnQXAIJ96iNdCLQNPz579ZLAUq1ZouVTY7DPGKIZyFt4PtlOaS5E11" alt="Richarlison demands action after banana thrown at him in Brazil win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Brazilian Football Federation (CBF) issued a statement on the Richarlison incident via Twitter. It read: “Unfortunately a banana was thrown on the pitch&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}