import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liverpool FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liverpool FC"/>
        <meta name="description" content="Trending News about Liverpool FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liverpool FC</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95363623,width-1070,height-580,imgsize-12408,overlay-economictimes/photo.jpg" alt="Liverpool FC"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/liverpool-football-club-is-up-for-sale-read-full-statement-issued-by-clubs-owner-fsg/articleshow/95363614.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool Football Club is up for sale! Read full statement issued by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkLb2dapSyTXV7-jAvEmwdqSiTdCzQXZLaoF2u_YT_ppcyjkda4OIe5vt1Ozsvx1j5VtvI8AsE" alt="Liverpool Football Club is up for sale! Read full statement issued by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool Football Club has been placed for sale, with FSG seeking new owners to buy the Premier League club and take it forward.</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-07/liverpool-fc-owners-weigh-sale-of-historic-uk-football-club'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool FC Owners Weigh Sale of Historic UK Football Club</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwtD94IiuJfVzkoki1D09juzmSJNOZcHIBnsBMFoR7QNjzTiI_ldNmSAAPWMKd2EhQx5O_gP4e" alt="Liverpool FC Owners Weigh Sale of Historic UK Football Club" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenway Sports Group Holdings LLC is working with Goldman Sachs Group Inc. and Morgan Stanley as it gauges buyer interest in the English Premier League team, the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/07/sports/soccer/liverpool-fsg-sale.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool FC Is Up For Sale by Fenway Sports Group</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ895zrIa_9NsbycH7_VRfRkFFJp3tdZgYQJIWCuP6p6fenGTufHpZ1czfuvIE8PiwVIDt_yClz" alt="Liverpool FC Is Up For Sale by Fenway Sports Group" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Months after its Premier League rival Chelsea traded hands in a deal worth $3 billion, Liverpool&#39;s owners hired bankers and said they would entertain offers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ft.com/content/a131793d-028d-4aa8-9da3-acb50967ddfa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool FC sale explored by US owners Fenway Sports Group</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNgCNE-GZAW2E2JbWXyvxSnzMcvTmmIwk9g2Lv1AQvc1bjLvpaHBQ3gjv5zEIXqBGV7KTi2RCE" alt="Liverpool FC sale explored by US owners Fenway Sports Group" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Move comes months after Chelsea was sold to consortium led by American financier Todd Boehly for £2.5bn.</p></div>
            </div>
        </a><a href='https://www.arabianbusiness.com/lifestyle/lifestyle-sport/investors-in-the-middle-east-eye-sensational-5bn-deal-for-liverpool-football-club'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Investors in the Middle East eye sensational $5bn deal for Liverpool ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjlMZ1kng-_DlfPxg5O8g4e_W9BeTznVSM45-5a7MhpZTVELylf6BDC4I1C8nwCI51QI3sJQJb" alt="Investors in the Middle East eye sensational $5bn deal for Liverpool ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenway Sports Group Holdings LLC is working with Goldman Sachs Group and Morgan Stanley as it gauges buyer interest in the English Premier League team, the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/nov/07/fsg-fully-committed-to-liverpool-amid-reports-of-club-being-put-up-for-sale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FSG &#39;fully committed&#39; to Liverpool but &#39;would consider&#39; new investment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRYIDIJc7_sPrzBcV64Se9wwlVp3EJJBSgS7LnHOU8BKs2A1aNyYLImy7SjdfKjnLNdJoCWHMI" alt="FSG &#39;fully committed&#39; to Liverpool but &#39;would consider&#39; new investment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American-based owner Fenway Sports Group have enlisted two investment banks but is not understood to have any plans to sell a majority stake in Liverpool.</p></div>
            </div>
        </a>
        </Template></>;
}