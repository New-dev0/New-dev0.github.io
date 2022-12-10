import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warriors</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warriors"/>
        <meta name="description" content="Trending News about Warriors" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warriors</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/2514e75c6737eee9d93bd3dbdcd67988f35d4493/0_118_3552_2131/master/3552.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cc7477770eee2f424b5d3a3c590893ec" alt="Warriors"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/dec/08/simone-fontecchio-dunk-utah-jazz-golden-state-warriors-nba-basketball'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;What happened?&#39; Warriors blow four-point lead with 13.9sec left ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXKShx5WpLADNAXIL7XaiyumLY8ej9EWz50GXWExCPN-YDItaDp2C0O1pcsXWNiMb-GDp4YfGn" alt="&#39;What happened?&#39; Warriors blow four-point lead with 13.9sec left ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simone Fontecchio dunked with 1.4 seconds left as the Utah Jazz beat the Golden State Warriors 124-123 on Wednesday night in a breathless finish.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/klay-thompson-admits-falling-asleep-171024160.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klay Thompson admits falling asleep late in Warriors&#39; frustrating loss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMNahgCSShPtLbX7yT4BNaiU1sWYmxSjK-mjLgk6sGmaqVoQic9aEHYix_z7Y4eMGGkNV9PLiK" alt="Klay Thompson admits falling asleep late in Warriors&#39; frustrating loss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Klay Thompson made a crucial mistake late in the Warriors&#39; 124-123 loss to the Utah Jazz.</p></div>
            </div>
        </a><a href='https://theathletic.com/3981308/2022/12/08/warriors-collapse-utah-lose-heartbreaker/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors collapse late in Utah, lose heartbreaker to Jazz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqipd-4TQhZQK-KcEkPJModgCLDzVnMQ-8-Vtw6ytXyi3eRlf6_X7v3QbJ7QJ_k_9cmlpiyDIu" alt="Warriors collapse late in Utah, lose heartbreaker to Jazz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two blunders combined to erase what would&#39;ve been an important win without Steph Curry, Draymond Green and Andrew Wiggins.</p></div>
            </div>
        </a><a href='https://patch.com/california/san-francisco/confirmed360-partners-golden-state-warriors-mvp-experience'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confirmed360 Partners With Golden State Warriors For MVP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVQNZ_VXmZVZtbmtKqJqDKU2aemcNxB9RwTXYOTwOl1KHmiplGXIbK8qYW6BHDBHiRKYJHqS3t" alt="Confirmed360 Partners With Golden State Warriors For MVP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SAN FRANCISCO, CA - The 2022 NBA Champion Golden State Warriors and Chase Center announced a first of its kind partnership with Confirmed360,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nba/jazz/news/jazz-defeat-warriors-takeaways'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jazz 124, Warriors 123: Four Encouraging Takeaways</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1Rj2p2U6QdgOi9hYuVsA6CBqoK2vLYzSzX1rNIpS2whDSyCKYvX6WCipidl_goP4zx4dvVSUW" alt="Jazz 124, Warriors 123: Four Encouraging Takeaways" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The team&#39;s 9-1 record after 10 games raised scrutiny, placing additional sports media attention on the Jazz. Then there were more wins and more losses.</p></div>
            </div>
        </a><a href='https://usfdons.com/news/2022/12/8/mens-basketball-markovetskyy-guides-dons-over-warriors.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Markovetskyy Guides Dons Over Warriors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6q-XCzaoL_gAv-auAiNUCaVXCDs2xTI3KFwFPwoZ_UvN9Bqm2MKu7TrpIafLNI_Ibb1qz2jK5" alt="Markovetskyy Guides Dons Over Warriors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SAN FRANCISCO, Calif. - Getting back in the win column at home on the Hilltop, the University of San Francisco men&#39;s basketball team (8-2) took care of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsobserver.com/sports/article269754166.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fontecchio lifts Jazz past Warriors in short-handed matchup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSe0MFsmnuSX6bcVVORnrFF_mOyPYKp0B4X6w8qDOJvnZ0kcFYZYGFXM6Z3AY35gKGE8htrXEQ9" alt="Fontecchio lifts Jazz past Warriors in short-handed matchup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simone Fontecchio dunked with 1.4 seconds remaining off Nickeil Alexander-Walker&#39;s steal and the Utah Jazz beat the Golden State Warriors 124-123 on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chicoer.com/2022/12/07/undermanned-warriors-drop-close-one-in-utah-in-wild-fashion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wild ending to loss in Utah left Warriors wondering &#39;what just ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4oBQUl4dVJv_5Tab9-6icad792fwNfX-PFyRCBrPHoqUPT8yzqFAJloLJh7T9eHWhxESVajr_" alt="Wild ending to loss in Utah left Warriors wondering &#39;what just ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Warriors return home to host the Boston Celtics in a 2022 NBA Finals rematch Saturday at Chase Center before hitting the road for a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}