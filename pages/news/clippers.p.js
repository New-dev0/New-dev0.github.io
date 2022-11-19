import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clippers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clippers"/>
        <meta name="description" content="Trending News about Clippers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clippers</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/d3c1ffb/2147483647/strip/true/crop/4800x2520+0+63/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F58%2F21%2F4222962e402094955279d3960e6a%2F1217586-sp-clippers-pistons010-ls.jpg" alt="Clippers"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/sports/clippers/story/2022-11-18/los-angeles-clippers-kawhi-leonard-return-lineup-rotations'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers begin reshaping roles with Kawhi Leonard&#39;s return</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR17CK2ezZGTMOhh-0eQtArkDPXeknHVLKhazHnxpzXG67K_V2di25DX3gpREJKYo-Mo7p7qiws" alt="Clippers begin reshaping roles with Kawhi Leonard&#39;s return" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Kawhi Leonard again healthy and in the starting lineup, the L.A. Clippers look to improve offense, from decreasing turnovers to increasing quality&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/story/_/id/35047360/clippers-star-kawhi-leonard-return-start-vs-pistons'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kawhi Leonard nets 6 points in 25 minutes of Clippers return</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxwmykZKGC0zCGOcVS799Y--ZEUdoWOYXnw-sC5aFGUONv3hRnqYT21xoDKMYc8o9a9ZxSjON3" alt="Kawhi Leonard nets 6 points in 25 minutes of Clippers return" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LOS ANGELES -- Saying that the recovery from a torn ACL can be a &quot;two-year process,&quot; Kawhi Leonard returned to the court and started his first game of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nba.com/news/kawhi-leonard-returns-clippers-knee-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kawhi Leonard returns, starts for Clippers after missing 12 games ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_aV3gu4PPtjBhvaL1rqGTaVxQyyCIAtsOCFFZXoU9ir2ijs9FC-i3WZb7wldYfOJp_WCfwnGy" alt="Kawhi Leonard returns, starts for Clippers after missing 12 games ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kawhi Leonard returns after missing 12 straight games due to right knee soreness and injury management, immediately rejoins starting lineup.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/kawhi-leonard-returns-to-clippers-after-12-games-out-due-to-acl-rehab-makes-1st-start-of-season-021330205.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kawhi Leonard returns to Clippers after 12 games out due to ACL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQry9owGp1gjPDj6GBjpKTIK-RdfkDMOM4Ap3e42VHqoVuKfAu2GrjdJzrmUs9Tu90IxDy1fdhI" alt="Kawhi Leonard returns to Clippers after 12 games out due to ACL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two-time Finals MVP returned to the court on Thursday against the Detroit Pistons, his first appearance in 12 games after missing more than three weeks due&nbsp;...</p></div>
            </div>
        </a><a href='https://www.detroitbadboys.com/2022/11/18/23466108/detroit-pistons-los-angeles-clippers-recap-goes-cold-as-detroit-falls-to-clippers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pistons offense goes cold as Detroit falls to Clippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhTybMEekPE3D4Qz_-VfBFYEpnuZOZ-QD_cz-u2YkiEuebB8u-DA-OtFnk9Y_DIfgWWfFqYVR0" alt="Pistons offense goes cold as Detroit falls to Clippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pistons sprinted ahead behind pressure defense, but eventually crumbled as shots wouldn&#39;t fall.</p></div>
            </div>
        </a><a href='https://theathletic.com/3908121/2022/11/17/kawhi-leonard-injury-return/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kawhi Leonard returns from injury: How this helps the Clippers?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXgoKsxb4as5Mj18jiPG5SisnkeNpM66N_Jx7Jk_tgvPn51Ulv4DXzS6r3H-Sff5QRkf7E9a3D" alt="Kawhi Leonard returns from injury: How this helps the Clippers?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clippers star Kawhi Leonard returned to action on Thursday against the Detroit Pistons after missing time due to injury management.</p></div>
            </div>
        </a>
        </Template></>;
}