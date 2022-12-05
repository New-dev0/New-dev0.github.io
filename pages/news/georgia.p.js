import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Georgia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Georgia"/>
        <meta name="description" content="Trending News about Georgia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Georgia</h1>
            <Image width={800} height={500} src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-11/221109-atlatna-vote-mjf-1539-df78c9.jpg" alt="Georgia"/>
            <h3>Recent News</h3>
            <a href='https://www.nbcnews.com/politics/2022-election/hbcu-students-georgia-face-extra-obstacle-voting-rcna59442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HBCU students in Georgia face an extra obstacle in voting</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVijyyxXPW7m1UKrTJgunfM5CgZTTW9C0aBxaIHcgNGTV-9KuP7gc87DK2Uqyye5vvJWQnNyF5" alt="HBCU students in Georgia face an extra obstacle in voting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When Lauren Nicks, a senior at Spelman College in Atlanta, cast her vote in last month&#39;s midterms, she did so in her home state of New York.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/04/sports/ncaafootball/playoff-georgia-michigan-tcu-ohio-state.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia, Michigan, T.C.U. and Ohio State Are Playoff Semifinalists</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRU_aVysY_hgUfxc1YDeTNbN7oFhekrZA-VcBiPEHE4KZ0LodMC4ooSDveIZIITeS_dqHd9AoGs" alt="Georgia, Michigan, T.C.U. and Ohio State Are Playoff Semifinalists" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alabama, despite lobbying by its coach, Nick Saban, was left out for the second time under the four-team playoff format. Instead, Georgia will play Ohio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/dec/04/georgia-runoff-democratic-us-senate-majority-joe-biden'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia runoff: full steam ahead for Democrats as they aim to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKtbFB3inACrM8nemq6V1UKyE_-gkDqaUfVrXkSQ7RQ7pf69ebrXxI69ww8NScmcjUvIOHKhBl" alt="Georgia runoff: full steam ahead for Democrats as they aim to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polls suggest narrow lead for Raphael Warnock as party brings out big guns to campaign days before election.</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/story/_/id/35180211/georgia-michigan-tcu-ohio-state-chosen-college-football-playoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia, Michigan, TCU, Ohio State chosen for College Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkI3SD1PXLWlMtxfApdzHsfrctKPfieqECNQq-6YHGs3M9IAdslyKOUbo9z_3s7gV0hUvkeO7y" alt="Georgia, Michigan, TCU, Ohio State chosen for College Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia, Michigan, TCU and Ohio State will play for the national championship after being chosen for the College Football Playoff.</p></div>
            </div>
        </a><a href='https://www.news4jax.com/news/georgia/2022/12/04/in-wake-of-more-record-early-voting-georgia-prepares-to-wrap-us-senate-runoff/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In wake of more record early voting, Georgia prepares to wrap U.S. ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpL1GLWix63gUVbhTAPbnGqF-kWHWT857-9zdE0Nv77kibZLN-pt2hLwS-a3q5q2vXc-vpjAaG" alt="In wake of more record early voting, Georgia prepares to wrap U.S. ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia voters continued strong turnout each day last week during early voting for the U.S. Senate runoff between Sen. Raphael Warnock, a Democrat,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/04/sport/college-football-playoff-georgia-bulldogs-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College Football Playoff will feature Georgia vs. Ohio State and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQljpKk6k22xqzHtz59VJd0bP8iSMhhPe4ftTFMhwboRxvY_Uxzo1U7y7gKnwhDcdhHWZdxRqer" alt="College Football Playoff will feature Georgia vs. Ohio State and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Michigan Wolverines, Texas Christian University (TCU) Horned Frogs and the Ohio State Buckeyes join the Bulldogs in the playoff, the selection committee&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usnews.com/news/sports/articles/2022-12-04/playoff-field-set-georgia-vs-ohio-state-michigan-vs-tcu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Playoff Field Set: Georgia Vs. Ohio State; Michigan Vs. TCU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStQPQufROKUy2iYystcvym7VSDtMniHco9z4JiLe8zPRTUNxkK6udKJpq4BXTHQskXpQp0wzTI" alt="Playoff Field Set: Georgia Vs. Ohio State; Michigan Vs. TCU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The defending national champions, two Big Ten powers and an upstart that wasn&#39;t even expected to contend in its conference this season.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-12-04/your-sunday-briefing-georgia-finally-decides'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Your Sunday Briefing: Georgia Finally Decides</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQN5dG_OnwlTfstemXQuCWsrFk5VNaIzkImYOByR5KiMmwgfmoIRNLJKYWPk76sUmSs4ScEzLuN" alt="Your Sunday Briefing: Georgia Finally Decides" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The big vote: Nearly a month after the midterm elections, voters will finally decide between Democrat Raphael Warnock or his Republican opponent Herschel Walker&nbsp;...</p></div>
            </div>
        </a><a href='https://thehill.com/homenews/campaign/3761518-betting-markets-heavily-favor-warnock-over-walker-in-georgia-runoff/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Betting markets heavily favor Warnock over Walker in Georgia runoff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuXseSEmR_qcCipchNYZc3uRnzXbW5TF8qOW0yl1rXeRDVINdGvQ6w2eJ1WQz-XZFXtyowOwdA" alt="Betting markets heavily favor Warnock over Walker in Georgia runoff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Online betting markets are heavily favoring incumbent Sen. Raphael Warnock (D) over Republican Herschel Walker in Georgia&#39;s Senate runoff with two days&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cleveland.com/osu/2022/12/ohio-state-vs-georgia-odds-and-point-spread-for-the-peach-bowl-college-football-playoff-semifinal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State vs. Georgia odds and point spread for the Peach Bowl ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIr26idUPbAoG2sg7UF-FYqkuL5tWYnTmfvQLSVhQVl1bCSZfdsc0LpWweLlk1CibdQz-4qE23" alt="Ohio State vs. Georgia odds and point spread for the Peach Bowl ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 4 Ohio State football plays No. 1 Georgia in a College Football Playoff semifinal at the Peach Bowl on Dec. 31. See the odds for the game.</p></div>
            </div>
        </a>
        </Template></>;
}