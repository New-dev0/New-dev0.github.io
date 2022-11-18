import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Wonder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Wonder"/>
        <meta name="description" content="Trending News about The Wonder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Wonder</h1>
            <Image width={800} height={500} src="https://static01.nyt.com/images/2022/11/18/multimedia/17wonder1-1-64d3/17wonder1-1-64d3-facebookJumbo.jpg" alt="The Wonder"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/2022/11/17/movies/the-wonder-review.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Wonder&#39; Review: The Hungry Woman</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZ7Kwglq8us-lxfQv0X1br1sDUX48f4hdXNKBm0ce4U67qHDUF6EeXtzEfv4HRIdPSexO4_bdz" alt="&#39;The Wonder&#39; Review: The Hungry Woman" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In this period drama, Florence Pugh plays a British nurse hired to observe an Irish girl who&#39;s said not to have eaten in four months.</p></div>
            </div>
        </a><a href='https://www.cosmopolitan.com/uk/entertainment/a41990107/the-wonder-ending-explained/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix and Florence Pugh&#39;s The Wonder ending explained</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROFth4e-gdKUhrKT6RfcSDDW6m1oKCC_6S8_1W-eIXhulEBAFN_kRMZdQkuGCbo4NjoATpYLKz" alt="Netflix and Florence Pugh&#39;s The Wonder ending explained" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How does The Wonder end? Florence Pugh&#39;s Netflix period drama explained, including whether Anna dies and what happens to Lib.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/entertainment/movie-review/the-wonder-movie-review-florence-pugh-netflix-film-8273414/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Wonder movie review: Florence Pugh&#39;s divine new Netflix film ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBM3cy5Ut68zJ5hjdC_v0USbcS-gP13BTOjnUB58651RSBsK1GHXIRux9gb3bgc8FELDrAs96P" alt="The Wonder movie review: Florence Pugh&#39;s divine new Netflix film ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Wonder movie review: After having her talents disrespected in Don&#39;t Worry Darling, Florence Pugh reestablishes herself as one of the brightest young&nbsp;...</p></div>
            </div>
        </a><a href='https://screenrant.com/the-wonder-ending-explaining/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Wonder Ending Explaining (In Detail)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUSNLMEsyXOe-L-Y5j59cGO-y20Ssrg0mYmrjwODUykpB-IYCW1GCykKM7TAI5kADr2DfBQqkH" alt="The Wonder Ending Explaining (In Detail)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warning: This post contains major spoilers for The Wonder.Florence Pugh stars as the lead character Elizabeth &quot;Lib&quot; Wright, a nurse from England who had&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pittsburghmagazine.com/movie-review-the-wonder/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Movie Review: The Wonder | Pittsburgh Magazine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCXz9SK0cXNipZ8YSPCLc9Et8oX6Y3n3l7faUNSXAOvF79vvJLwaRTmvJWClFio_i2mWwhxr5H" alt="Movie Review: The Wonder | Pittsburgh Magazine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florence Pugh, the supremely talented actress who probably should&#39;ve won two Oscars in 2020, was thrust into the maelstrom of gossip and speculation this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/16/entertainment/wonder-review-anywhere-but-hollywood-november-2022/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florence Pugh&#39;s riveting performance makes eerie thriller &#39;The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbHCuOx4Fm7Mm2M_lUFKRNTfoM4HSif6LD0RNNuxmsZhGMZ12Q9Hp4QB5dvDU1DT2PowCcNn-l" alt="Florence Pugh&#39;s riveting performance makes eerie thriller &#39;The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florence Pugh as Lib Wright, a nurse sent to monitor a mysterious young girl in &quot;The Wonder.&quot; Christopher Barr/Netflix. Editor&#39;s Note: Anywhere But Hollywood&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/the-wonder-that-ending-explained-and-all-your-questions-answered/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Wonder&#39;: That Ending Explained and All Your Questions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-8U0DCkDlIW3umRtIGfbFCSgRiKcrCeHHIqeq04JpfIsGiEzFu0_tsznTrJ_bQMjFqhiC5S86" alt="&#39;The Wonder&#39;: That Ending Explained and All Your Questions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The drama mystery starring Florence Pugh has an unconventional beginning and ending, to say the least.</p></div>
            </div>
        </a><a href='https://www.bevnet.com/news/2022/8th-wonder-tea-announces-launch-on-amazon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8th Wonder Tea Announces Launch on Amazon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQ1YyjOU3iSfTFzeDD-Q2cCxe-ZUtVgJIJATtROw-uiAdHXaRXn23ykzdeJqX2XwRvvt-37DIt" alt="8th Wonder Tea Announces Launch on Amazon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LOS ANGELES, Calif.— 8th Wonder Tea is announcing their launch on Amazon for their line of organic sparkling teas containing real fruit juice, superfoods,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}