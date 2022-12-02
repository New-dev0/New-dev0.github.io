import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kate Middleton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kate Middleton"/>
        <meta name="description" content="Trending News about Kate Middleton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kate Middleton</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/12/duchess-kate-boston.jpg?quality=75&strip=all&w=1200" alt="Kate Middleton"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/12/01/kate-middleton-changes-from-burberry-to-chanel-for-boston-celtics-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton changes from Burberry to vintage Chanel for Boston ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2ufIfRoVwviS46c_QIqcXyI3dnLVtkmRKSvL8lXXR_uGy6_nHbGleIzXOCnDhfc9B8A6ceXTY" alt="Kate Middleton changes from Burberry to vintage Chanel for Boston ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton and Prince William kicked off their Earthshot Prize trip to Boston with the princess wearing custom Burberry and vintage Chanel.</p></div>
            </div>
        </a><a href='https://pagesix.com/2022/12/01/kate-middleton-and-prince-william-coordinate-for-boston-visit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton and Prince William coordinate in burgundy for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRniGj6I8Rl7MnDzJJmBXXek9i92_PweV8BPsAeVCA5JSwRPsWTEyojAjVuTO4StqAfLBxjjZoo" alt="Kate Middleton and Prince William coordinate in burgundy for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton wore a berry-colored Rouland Mouret trouser suit and pink blouse for her second day in Boston with Prince William.</p></div>
            </div>
        </a><a href='https://www.vogue.com/article/kate-middleton-princess-of-wales-boston-day-two'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton, The Princess of Wales, Doubles Down on Her ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMCsVnk3Ap2mauBmy_3gE-MKq9Wts_3kQxLjBVGTbOW39gVKsfIm-6_p5eZOXDIZ7-WnEa1vrL" alt="Kate Middleton, The Princess of Wales, Doubles Down on Her ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On day two of the Prince and Princess of Wales&#39;s royal tour of Boston, Kate wore a new Roland Mouret suit and a vintage Chanel bag. Vogue takes a closer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.allure.com/story/kate-middleton-boston-blowouts'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton Is Giving Us All the Blowout Inspo on Her Trip to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-lCcf5b4rMXvxgHzRsUCNwC7yZOwxcMK26jzigBp0ni3YxjJm2g-RMH28zSr5LTKYeWhqnSQW" alt="Kate Middleton Is Giving Us All the Blowout Inspo on Her Trip to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Princess of Wales appeared at two events in Boston with her hair in two inspiring blowouts: a sleek, shiny loose waves style and full, perfect bouncy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/01/prince-william-kate-middleton-celtics-game-prince-harry-meghan-markle-netflix-trailer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prince William, Kate Middleton at Celtics Game as &#39;Harry &amp; Meghan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTk9I7RFngc8vcVYqcT6wMxFHpX8XJwmfk2o1Abk4QYvqH3MDlT4NrxnEe1gw9OryTAMIOhHC6w" alt="Prince William, Kate Middleton at Celtics Game as &#39;Harry &amp; Meghan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince William and Kate Middleton spent their first night in the U.S. at a Boston Celtics game, as one Royal controversy has exploded and another is on the&nbsp;...</p></div>
            </div>
        </a><a href='https://wwd.com/fashion-news/fashion-scoops/kate-middleton-us-tour-roland-mouret-suit-chanel-bag-1235435248/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton Pairs Burgundy Suit With Matching Chanel Bag on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTehSGKllPCOJ-M1irEfnn1kcsQ5CEk8yUES9Y2bOxoa72mDwo6AOaAlljX-C6cA9PH98CbNk5a" alt="Kate Middleton Pairs Burgundy Suit With Matching Chanel Bag on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catherine, Princess of Wales, visited both Greentown Labs, a sustainability company, and Roca, a non-profit for at-risk youth, today on U.S. tour.</p></div>
            </div>
        </a><a href='https://observer.com/2022/12/kate-middleton-boston-tour-fashion-maroon-suit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton Suited Up in a Polished Burgundy Ensemble</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVWy-bwq-E3mMft2dTZs9WR1ReK3WmCtmcVIidMAAz_u8M4H0owz6zs1dg_856aaqd1Cd4dDJr" alt="Kate Middleton Suited Up in a Polished Burgundy Ensemble" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Prince and Princess of Wales are in Boston on a whirlwind three-day trip for the Earthshot Awards, and the royal visit is already off to a very&nbsp;...</p></div>
            </div>
        </a><a href='https://www.townandcountrymag.com/society/tradition/a42120830/kate-middleton-vintage-blue-chanel-blazer-boston-celtics-basketball-game-photos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton Pairs Vintage Chanel Blazer with Affordable Jewelry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTV5IdP4PRciZ6Xewei7PKkFdNlr4avDn-miVwbf6MKjfcmv1SAha_6d8DfaJC007yXpyBtj9gD" alt="Kate Middleton Pairs Vintage Chanel Blazer with Affordable Jewelry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Princess of Wales and Prince William made a surprise appearance at the basketball game on Wednesday night, where they watched the home team take on the&nbsp;...</p></div>
            </div>
        </a><a href='https://people.com/royals/kate-middleton-prince-william-visit-boston-harbor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton and Prince William Bundle up for Visit to Boston ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTr7OD4a4bKB7TbuZRCw3hiVW9mER8nacluH6YK3r7c-LBPAQBgtWCpMVEF2njCioeo3BG8U3eE" alt="Kate Middleton and Prince William Bundle up for Visit to Boston ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton and Prince William visit Boston Harbor to learn about how climate change is affecting the city.</p></div>
            </div>
        </a><a href='https://www.glamour.com/story/kate-middleton-prince-william-celtics-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kate Middleton and Prince William Attended Boston Celtics Game ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUxJtiC2aZLArrQ2SRmfdiRamijd6Dxsz7EdeLh5wEtgRY_A6Brnj3d-mBbkWq5CvoZ_vME-7j" alt="Kate Middleton and Prince William Attended Boston Celtics Game ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I would bet money that the only people who know less about basketball than I do are the Prince and Princess of Wales, but a royal&#39;s duties are never done. “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}