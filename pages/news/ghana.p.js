import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ghana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ghana"/>
        <meta name="description" content="Trending News about Ghana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ghana</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/11/000_1462W4.jpg?resize=1920%2C1440" alt="Ghana"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/news/2022/11/18/ghana-minister-sorry-for-economic-crisis-fends-off-criticism'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana minister &#39;sorry&#39; for economic crisis, fends off criticism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjdWQH9CbXFg0_CC2VyWqkG-lXJBJQLK4b3glRS_3ktmKR_Y4jnVogZl01eQTPGL28dHv8I00D" alt="Ghana minister &#39;sorry&#39; for economic crisis, fends off criticism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Finance minister Kenneth Ofori-Atta faced an enquiry from lawmakers amid Ghana&#39;s worst economic crisis in a generation.</p></div>
            </div>
        </a><a href='https://guardian.ng/news/ghana-refutes-issuing-travel-advisory-against-non-essential-travel-to-nigeria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana refutes issuing travel advisory against non-essential travel to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAkpOcenixr8oLUm0ZS5NrcHOt8Hs9-3XiVo_dZhH5TuACVM7g48TZgUs--EN47bKvH9hRdzjQ" alt="Ghana refutes issuing travel advisory against non-essential travel to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Ghana Ministry of Foreign Affairs and Regional Integration has said it did not authorize the issuance of any travel advisory against non-essential&nbsp;...</p></div>
            </div>
        </a><a href='https://www.africanews.com/2022/11/18/ghanas-finance-minister-truly-sorry-for-economic-crisis-fends-off-criticism/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana&#39;s finance minister &#39;truly sorry&#39; for economic crisis, fends off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBzD9YjQWjRjjy-1gdJpHAoh9-zBAt9asnnRHWW_9juzyos3KLvzzQPT94ZQFgSwn6MNAudlIn" alt="Ghana&#39;s finance minister &#39;truly sorry&#39; for economic crisis, fends off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kenneth Ofori-Atta faced an inquiry from lawmakers for his financial management, as the government came under increasing pressure and President Nana Akufo-Addo&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/ghana-disowns-unauthorised-advisory-against-travel-to-abuja/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana disowns &#39;unauthorised&#39; advisory against travel to Abuja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzy2IshGtiBRs851IrSUZnIzUl5GExNutCVA5ma1lTuOE_hIu7fXnsJmPDFi7TOVuyv86blhl5" alt="Ghana disowns &#39;unauthorised&#39; advisory against travel to Abuja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghana has disowned a security advisory issued on Wednesday, warning her citizens from travelling to Nigeria&#39;s Federal Capital Territory, Abuja.</p></div>
            </div>
        </a><a href='https://allafrica.com/stories/202211180540.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana: Stakeholders Brainstorm On Challenges Facing Ghana&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ghana: Stakeholders Brainstorm On Challenges Facing Ghana&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The development facility of eco.business Fund has teamed up with Fidelity Bank Ghana to host a capacity-building workshop focused on economical and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/ghana-alert-advising-against-non-essential-travel-to-nigeria-is-unauthorised'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana: Alert advising against non-essential travel to Nigeria ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTHGOZ9bWAL3K5v95BFHGDLZwYGm3ayR_lqbLOmHIUXnk7r8jXvT4Pg08NOL03n8tggA5MbgDU" alt="Ghana: Alert advising against non-essential travel to Nigeria ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Ghana ministry of foreign affairs says it is not aware of any security alert warning the country&#39;s citizen against non-essential travel...</p></div>
            </div>
        </a><a href='https://allafrica.com/stories/202211180016.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana: Switzerland Set to Test Ghana&#39;s World Cup Readiness</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ghana: Switzerland Set to Test Ghana&#39;s World Cup Readiness" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghanaians will be given the strongest possi-ble hint of their Qatar World Cup expecta-tion when the Black Stars take on Switzerland in their final brush-up&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arise.tv/ghana-double-sees-off-swiss-in-world-cup-warm-up/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana Double Sees off Swiss in World Cup Warm-Up - Arise News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTP6AFUDC5vEFrXVcc6qxlSLC0yGLtQs1lXUKlRmcmggpP6pVbqnd0NwdpOSfQVYu4twOBe9XgC" alt="Ghana Double Sees off Swiss in World Cup Warm-Up - Arise News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A storming run from Kamaldeen Sulemana four minutes later was blocked by Swiss goalkeeper Yann Sommer but the ball popped up for Antoine Semenyo to fire home&nbsp;...</p></div>
            </div>
        </a><a href='https://allafrica.com/stories/202211180241.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana: Irrigation, Quality Seed Crucial to Transforming Ghana&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ghana: Irrigation, Quality Seed Crucial to Transforming Ghana&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irrigation and quality seeds are crucial to trans-forming Ghana&#39;s agricul-ture, former Nebraska State Senator, Ken Schilz, has said.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/11/ghana-edge-switzerland-2-0-in-world-cup-warm-up-match/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ghana edge Switzerland 2-0 in World Cup warm-up match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREiH39jc7yNwyNPW0-H_x7gPOlW5CzwZ6kdHt-MOU6tFO6FekItj_jyND7z9Ie6cWCwB71HO12" alt="Ghana edge Switzerland 2-0 in World Cup warm-up match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ghana&#39;s Black Stars continued their preparations for the 2022 FIFA World Cup with a convincing 2-0 victory over Switzerland on Wednesday.</p></div>
            </div>
        </a>
        </Template></>;
}