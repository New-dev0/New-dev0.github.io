import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MOORE COUNTY, N.C</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MOORE COUNTY, N.C"/>
        <meta name="description" content="Trending News about MOORE COUNTY, N.C" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MOORE COUNTY, N.C</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221204140237-north-carolina-power-outage.jpg?c=16x9&q=w_800,c_fill" alt="MOORE COUNTY, N.C"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/12/04/us/power-outage-moore-county-criminal-investigation/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NC county announces curfew as nearly 40000 customers remain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvJp1iJFDgzk_t-3Rm1EpQLfv8MFeQuDE0eakrhbtd5mkkR8s7XSlAxAZ6TYnE27K2bUvyxGZS" alt="NC county announces curfew as nearly 40000 customers remain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Authorities have announced a mandatory curfew in a North Carolina county where around 40000 customers lost power after two power substations were damaged by&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moorecountync.gov/public-notice/public-safety/moore-county-power-outage-press-release-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moore County Power Outage - Press Release #1</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Moore County Power Outage - Press Release #1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moore County has issued a State of Emergency as related to Mass Power Outage in Moore County due to a criminal incident. There will be a countywide curfew&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsobserver.com/news/local/article269579392.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Latest update: Attack by &#39;cowards&#39; could leave Moore County without ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcxkFlHlEjF5GL3hG6f5k_TptrX3gUZGcfcPi3dja1k3oJxBotAUALnyA7oy-eEFRqmLfFz483" alt="Latest update: Attack by &#39;cowards&#39; could leave Moore County without ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Attackers damage electrical substations shutting off electricity in Moore County, North Carolina. Possible connection to drag show protest questioned.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/04/us/power-outages-north-carolina.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North Carolina Power Outages Caused by Gunfire at Substations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtAlY9U4GfyeHqjn6NQ6Q6dSExvhl3ZzpJdZTuss8aglns7FQrm4nrdHeaKf5t_QtKa-EZexm2" alt="North Carolina Power Outages Caused by Gunfire at Substations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>About 45000 customers were without power in Moore County after what an official described as an “intentional, willful and malicious” attack on two&nbsp;...</p></div>
            </div>
        </a><a href='https://wlos.com/news/local/moore-county-north-carolina-mass-power-outages-sheriffs-office-act-of-violence-criminal-vandalism-duke-energy-map'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>State of emergency declared for NC county after gunfire damages ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVcqwxjCDE_oKp5oqS8izgyEpasa3tNcbYxgPDEY3SPvnGbkMyAj-Wk_y1Pzgpekn9YplXNexl" alt="State of emergency declared for NC county after gunfire damages ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MOORE COUNTY, N.C. (WLOS) — A state of emergency has been declared as nearly 40,000 people continue to deal with power outages in one North Carolina county.</p></div>
            </div>
        </a><a href='https://abc11.com/moore-county-power-outage-duke-energy-vandalism/12523582/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gunfire takes out power substations in Moore Co.; prompts State of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTy5LXvjPWgvGdGXvgdKpAKShl6u_Z7oQKp5-ZUWZBdSSh7wuD3f2eUFkBAkaAImvoJnKcZrl2f" alt="Gunfire takes out power substations in Moore Co.; prompts State of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acts of intentional vandalism caused ten of thousands of people in Moore County to sleep Saturday night without power.</p></div>
            </div>
        </a>
        </Template></>;
}