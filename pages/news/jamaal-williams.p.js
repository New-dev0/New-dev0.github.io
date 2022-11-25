import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jamaal Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jamaal Williams"/>
        <meta name="description" content="Trending News about Jamaal Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jamaal Williams</h1>
            <Image width={800} height={500} src="https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/11/USATSI_19495607_168393267_lowres.jpg" alt="Jamaal Williams"/>
            <h3>Recent News</h3>
            <a href='https://profootballtalk.nbcsports.com/2022/11/24/jamaal-williams-scores-again-lions-up-7-0/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamaal Williams scores again, Lions up 7-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1qi8TV5ba4sHgNY0RZbkU21s8A8xXFY31FQgBeqaoZJZO4r8lDxvsbeBz_6z2pSzjrNw9Z-gr" alt="Jamaal Williams scores again, Lions up 7-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Williams ran for three touchdowns in last Sunday&#39;s win over the Giants and he&#39;s scored the first touchdown of the team&#39;s Thanksgiving game against the Bills.</p></div>
            </div>
        </a><a href='https://kslsports.com/495765/detroit-lions-jamaal-williams-touchdown-run-thanksgiving-day/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former BYU Star Scores Touchdown On Thanksgiving Day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRynhTYcHlal79F01O1gYl_5hfJ4enIaVuI0fGhpkXN39Smy9mdbzp7SBbs8euEYn4JmIysBwXL" alt="Former BYU Star Scores Touchdown On Thanksgiving Day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former BYU and current Detroit Lions RB Jamaal Williams found paydirt with a touchdown run against the Buffalo Bills on Thanksgiving Day.</p></div>
            </div>
        </a><a href='https://clutchpoints.com/broncos-news-jamaal-williams-thanksgiving-td-proves-how-atrocious-russell-wilson-denver-offense-is'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamaal Williams Thanksgiving TD proves how atrocious Russell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTO6Ll-LtGBzuh_Xn_XNLH-jKKPO5t1gKxd2fuXhAF8ep6esHfB-FqETjBM76AFo4rowd-IyMFV" alt="Jamaal Williams Thanksgiving TD proves how atrocious Russell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the Detroit Lions take on the Buffalo Bills on Thanksgiving, running back Jamaal Williams has found his way into the endzone once again.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/fantasy/football/news/lions-jamaal-williams-another-rushing-touchdown/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lions&#39; Jamaal Williams: Another rushing touchdown</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lions&#39; Jamaal Williams: Another rushing touchdown" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Williams rushed 18 times for 66 yards and one touchdown during Thursday&#39;s 28-25 loss to the Bills. Williams continued to handle the lion&#39;s share of work out&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsnaut.com/jamaal-williams-season-detroit-lions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamaal Williams continues shocking season for the Detroit Lions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVwMRW5w99YSq7VtQ5gK3bls6crbBg9fNrfgovgt4VD7pIsTOQxolmmkoynmzmqvuxcCFiRj4x" alt="Jamaal Williams continues shocking season for the Detroit Lions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Detroit Lions running back Jamaal Williams had scored all of 13 rushing touchdowns in his first five NFL seasons heading into the 2022 campaign.</p></div>
            </div>
        </a>
        </Template></>;
}