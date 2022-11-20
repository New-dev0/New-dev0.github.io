import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bulls</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bulls"/>
        <meta name="description" content="Trending News about Bulls" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bulls</h1>
            <Image width={800} height={500} src="https://cst.brightspotcdn.com/dims4/default/b056385/2147483647/strip/true/crop/5330x3043+0+318/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F_Qf89NtD6rxK_F0W_soKuIeMUVY%3D%2F0x0%3A5330x3678%2F5330x3678%2Ffilters%3Afocal%282665x1839%3A2666x1840%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24211149%2F1244500651.jpg" alt="Bulls"/>
            <h3>Recent News</h3>
            <a href='https://chicago.suntimes.com/bulls/2022/11/19/23467598/chicago-bulls-zach-lavine-demar-derozan-billy-donovan-nba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polling Place: What&#39;s really wrong with the Bulls? (Then again, what ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnJQjJixs2Ftkbcv2i-pkZ08SqkuZPTqcoMzs2GdO0--gE-GOR6P5xDH02wQGf-Yg6bp5PyYSQ" alt="Polling Place: What&#39;s really wrong with the Bulls? (Then again, what ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In this week&#39;s “Polling Place,” your home for Sun-Times sports polls on Twitter, we asked respondents to sum up the Bulls&#39; problems in one of four words:&nbsp;...</p></div>
            </div>
        </a><a href='https://deadspin.com/zach-lavine-is-grumbling-and-so-are-bulls-fans-1849805370'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach LaVine is grumbling — and so are Bulls fans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQL35AtAoh2r5CLCM9rdHvNI5zTBo2mx20WEPMIktsL-3-xWoh6JMekvYsvDO3ZuUhvPq6E_dM2" alt="Zach LaVine is grumbling — and so are Bulls fans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The contemporary NBA has conditioned basketball fans to seek out unhappy All-Stars like lions stalk the most vulnerable wildebeest.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/2022/11/19/bulls-zach-lavine-benching-vs-magic-play-a-guy-like-me-down-stretch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls&#39; Zach LaVine on Benching: &#39;You Play a Guy Like Me Down the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6VUGKIotFLkmSGwOjp3wq05wzP2wV_1Mr4Mm3MdXpZcvtE048j_sf36vmtMVAVVL8lizakMLP" alt="Bulls&#39; Zach LaVine on Benching: &#39;You Play a Guy Like Me Down the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bulls guard Zach LaVine spent the final 3 minutes and 43 seconds of Friday night&#39;s game against the Magic on the bench after a dreadful shooting night.</p></div>
            </div>
        </a><a href='https://theathletic.com/3912621/2022/11/19/zach-lavine-benched-bulls-billy-donovan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach LaVine&#39;s benching sums up the state of the Bulls: &#39;Do I agree ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSujW9TN-G_JInsX0smrCJlsl6IY8cLXIpp-G-yuXfByXshmpokM3tmLitdGO0txcm2WExcpCTr" alt="Zach LaVine&#39;s benching sums up the state of the Bulls: &#39;Do I agree ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“I&#39;ve got a lot of respect on a lot of levels for Vooch and DeMar and Zach, of who they are as players,” Bulls coach Billy Donovan said. “We&#39;re never going to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nba.com/bulls/news/bulls-rally-from-19-point-deficit-fall-to-magic-on-last-second-shot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls rally from 19-point deficit, fall to Magic on last-second shot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR08gsOTNEZViqKzoA-OEVBAXVnMpz2tcbmjyw8LwGXHE4saK14RrtS5yBj7GX2YGVuVn_s4MiX" alt="Bulls rally from 19-point deficit, fall to Magic on last-second shot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chicago clawed their way back from down 19 points to trade leads with Orlando in the final moments. But Magic guard Jalen Suggs sunk a three-pointe...</p></div>
            </div>
        </a><a href='https://chicago.suntimes.com/bulls/2022/11/19/23467871/bulls-zach-lavine-finding-out-max-deal-max-expectations'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Bulls&#39; Zach LaVine finding out max deal comes with max ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWgvACkBg0mZR_y41prAA9Y5E4xIy_cUeikA_R_7-xNy-doGOpy-tRaujwAi8S3QzAYpJetSFX" alt="The Bulls&#39; Zach LaVine finding out max deal comes with max ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a late-game benching in the Friday loss to Orlando, LaVine expressed his disappointment in his coach&#39;s decision. But there&#39;s a bigger picture here,&nbsp;...</p></div>
            </div>
        </a><a href='https://dawindycity.com/2022/11/19/chicago-bulls-lavine-donovan-mess/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zach LaVine and the Chicago Bulls are currently a mess</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSByDgtAqSQX18bTwXdL2yD1L3KaVG4honlT25V4VDS2hNtD8Cm5EjqL3OyrWfch8HT5gccjSi_" alt="Zach LaVine and the Chicago Bulls are currently a mess" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jalen Suggs buried a three to win it for the Magic after Nikola Vucevic missed free throws that could have iced this one. It was a difficult pill to swallow.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/bulls/news/3-takeaways-from-the-chicago-bulls-108-107-home-loss-against-the-orlando-magic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 Takeaways from the Chicago Bulls&#39; 108-107 home loss against the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4vrBaO2RDLgdqpNl95CljffhZNa5JG7GT2VgRxbHBIoOxW7xzef9doQ8BK4w_ILufBtMN8Ddd" alt="3 Takeaways from the Chicago Bulls&#39; 108-107 home loss against the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chicago Bulls lost 108-107 against the Orlando Magic despite 41 points from DeMar DeRozan.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056155-bulls-zach-lavine-annoyed-by-benching-you-play-a-guy-like-me-down-the-stretch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls&#39; Zach LaVine Annoyed by Benching: &#39;You Play a Guy Like Me ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVVg2BpSOprDF5Sz1DZrxyApVmqzKPxvaY4wdSGCQyVKXofcGCTZ00fn5gltv9FOOnuuGaYm43" alt="Bulls&#39; Zach LaVine Annoyed by Benching: &#39;You Play a Guy Like Me ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chicago Bulls guard Zach LaVine questioned the decision by head coach Billy Donovan to bench him for the final four minutes of Friday night&#39;s 108-107 home&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blogabull.com/2022/11/19/23467343/bulls-vs-magic-final-score-another-hole-another-comeback-blown-free-throws-last-second-loss'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bulls vs. Magic final score: another hole, another comeback, blown ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYdWZx4_ZYX9-30y-7uUCkVY9Nzbstf-lhMCXUhzE5ysrGA8Q6vXhZJtJa0wXj2H_TD35QTnwL" alt="Bulls vs. Magic final score: another hole, another comeback, blown ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>That&#39;s when Jalen Suggs closed the Bulls out. Suggs drew a foul from Dosunmu and nailed both his free throws. With 12 seconds remaining and Chicago now leading&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}