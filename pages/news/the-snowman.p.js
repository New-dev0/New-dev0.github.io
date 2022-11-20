import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Snowman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Snowman"/>
        <meta name="description" content="Trending News about The Snowman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Snowman</h1>
            <Image width={800} height={500} src="https://www.belfasttelegraph.co.uk/entertainment/news/f15d1/42158112.ece/AUTOCROP/w1240h700/bpanews_6e435368-b719-411c-b92b-123b949674f2_1" alt="The Snowman"/>
            <h3>Recent News</h3>
            <a href='https://www.belfasttelegraph.co.uk/entertainment/news/arlene-philips-among-stars-celebrating-25th-year-of-the-snowman-stage-show-42158115.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arlene Philips among stars celebrating 25th year of The Snowman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4C528L2e0mk1Rcck3ManTYAv0NDfPblpK48QLxZ9n-uqan3rwWjejT3IKfeQdjMChnlTFRsRs" alt="Arlene Philips among stars celebrating 25th year of The Snowman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dame Arlene Philips, Gemma Collins and Gok Wan were among the famous faces who have celebrated the 25th anniversary of the stage adaptation of The Snowman.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/tvshowbiz/article-11447573/Gemma-Collins-throws-peace-signs-poses-Snowman-25th-Anniversary-Gala.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gemma Collins throws up the peace signs as she poses at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTJKsEtoeFzZjSZKUOycoUbYvdjKaMloddX5EqPHvNLe1vpK59ZqrXXc_MVryjRtsrmH3WgI3O7" alt="Gemma Collins throws up the peace signs as she poses at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 41-year-old former TOWIE star donned a leopard printed co-ord and a luxurious black fur gilet for the special festive event at the Peacock Theatre.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tvandshowbiz/9760136/gemma-collins-festive-outing-london/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gemma Collins shows off her figure in leopard print ensemble on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjnGeldnazTp79y3yQ_-ozvhjtEyawqr9tQQQ9yzOtNtjQDUBRPHX3O50BXICPRZpUnP4XS6Z_" alt="Gemma Collins shows off her figure in leopard print ensemble on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former Towie star, 41, was all smiles as she posed for pictures at the Snowman 25th Anniversary Gala performance at the Peacock Theatre. Advertisement.</p></div>
            </div>
        </a><a href='https://www.thebharatexpressnews.com/gemma-collins-throws-up-the-peace-signs-as-she-poses-at-the-snowman-25th-anniversary-gala/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gemma Collins throws up the peace signs as she poses at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_zjLthx5DkoBa4lZL_9CynQdk85eKrIbafrf5QL9jCicwgJ5Mf8KYg9U8AMmCMRRXhHc50ctl" alt="Gemma Collins throws up the peace signs as she poses at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 41-year-old former TOWIE star donned a leopard printed co-ord and a luxurious black fur gilet for the special festive event at the Peacock Theatre.</p></div>
            </div>
        </a>
        </Template></>;
}