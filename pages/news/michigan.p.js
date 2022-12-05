import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michigan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michigan"/>
        <meta name="description" content="Trending News about Michigan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michigan</h1>
            <Image width={800} height={500} src="https://www.mlive.com/resizer/2JTnhxA9xsLFUvulSRKXQs8YfYQ=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/IWHVN2JGABHQPIKE7MCEIIIGUA.jpg" alt="Michigan"/>
            <h3>Recent News</h3>
            <a href='https://www.mlive.com/public-interest/2022/12/these-are-michigans-cheapest-most-expensive-airports-to-fly-out-of.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>These are Michigan&#39;s cheapest, most expensive airports to fly out of</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJG2wEXrYU24REpd959VucFCQwWDfYUYMv7sbuYk0fcbIjQPmC1I_v2-rEK0il-JLFAwEGEPOE" alt="These are Michigan&#39;s cheapest, most expensive airports to fly out of" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The budget-friendly flight prices from the COVID-19 pandemic are nearly gone. Every Michigan commercial airport has seen prices rise in the past year.</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/story/_/id/35180211/georgia-michigan-tcu-ohio-state-chosen-college-football-playoff'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia, Michigan, TCU, Ohio State chosen for College Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkI3SD1PXLWlMtxfApdzHsfrctKPfieqECNQq-6YHGs3M9IAdslyKOUbo9z_3s7gV0hUvkeO7y" alt="Georgia, Michigan, TCU, Ohio State chosen for College Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia, Michigan, TCU and Ohio State will play for the national championship after being chosen for the College Football Playoff.</p></div>
            </div>
        </a><a href='https://mgoblue.com/news/2022/12/4/football-michigan-wolverines-2022-how-we-got-here.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan Football: College Football Playoff Bound</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTva62buAWAY1a9GQ3XXkyCRdWlcjwspmrWf-oWwgiUAZldk3aWtieWv544uVKXUqfXAxjzsLRp" alt="Michigan Football: College Football Playoff Bound" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Relieve all of the action from the 2022 season, including highlights, interviews, notes, photo galleries, and more.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/04/sports/ncaafootball/playoff-georgia-michigan-tcu-ohio-state.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia, Michigan, T.C.U. and Ohio State Are Playoff Semifinalists</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRU_aVysY_hgUfxc1YDeTNbN7oFhekrZA-VcBiPEHE4KZ0LodMC4ooSDveIZIITeS_dqHd9AoGs" alt="Georgia, Michigan, T.C.U. and Ohio State Are Playoff Semifinalists" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alabama, despite lobbying by its coach, Nick Saban, was left out for the second time under the four-team playoff format. Instead, Georgia will play Ohio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsnet.ca/football/article/playoff-field-set-georgia-vs-ohio-state-michigan-vs-tcu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Playoff field set: Georgia vs. Ohio State; Michigan vs. TCU</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Playoff field set: Georgia vs. Ohio State; Michigan vs. TCU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia, Michigan, TCU and Ohio State were chosen Sunday to play in the College Football Playoff, giving the Big Ten multiple teams in the four-team field&nbsp;...</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/college/university-michigan/2022/12/04/michigan-to-face-tcu-in-fiesta-bowl-in-college-football-playoff/69699448007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We&#39;re gonna go get it&#39;: Michigan to face TCU in Fiesta Bowl in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDCNO3D_GyviVdc6PqT_you7b-KhLVMbTdlsD838epiS6P0nropyq-a0GkQBt17Ln0-Jekwc0K" alt="&#39;We&#39;re gonna go get it&#39;: Michigan to face TCU in Fiesta Bowl in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Morris (right) and his teammates greet fans during the welcome back rally at. The national championship game is Jan. 9 at SoFi Stadium in Inglewood,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/04/sport/college-football-playoff-georgia-bulldogs-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College Football Playoff will feature Georgia vs. Ohio State and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQljpKk6k22xqzHtz59VJd0bP8iSMhhPe4ftTFMhwboRxvY_Uxzo1U7y7gKnwhDcdhHWZdxRqer" alt="College Football Playoff will feature Georgia vs. Ohio State and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Michigan Wolverines, Texas Christian University (TCU) Horned Frogs and the Ohio State Buckeyes join the Bulldogs in the playoff, the selection committee&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/2022/12/04/michigan-quarterback-jj-mccarthy-ohio-state-rematch-bring-it-on'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michigan&#39;s J.J. McCarthy on Potential Ohio State Rematch: &#39;Bring It On&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMK8at5TrO1a5BQ9N1jLGzVQzyyWlHGW3zS7v2q7qUiM1pntseI6aocltFF47YFxLPb6P0Qxq7" alt="Michigan&#39;s J.J. McCarthy on Potential Ohio State Rematch: &#39;Bring It On&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 2 Michigan&#39;s win over Purdue in the Big Ten title game essentially clinched the Wolverines&#39; spot in the College Football Playoff. As the team awaits to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}