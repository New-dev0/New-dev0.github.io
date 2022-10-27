import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arvind Kejriwal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arvind Kejriwal"/>
        <meta name="description" content="Trending News about Arvind Kejriwal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arvind Kejriwal</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/10/26/600x338/ANI-20221026015-0_1666784015544_1666784015544_1666784036466_1666784036466.jpg" alt="Arvind Kejriwal"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/bjp-congress-jibes-arvind-kejriwal-ganesha-laxmi-images-on-currency-notes-idea-fix-economy-11666783633042.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BJP, Congress tear into Arvind Kejriwal for &#39;Ganesha, Laxmi images ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzXc4uvxjPHr_oNoJxGomvt0oFA52W5BXTyf2ClA82BB6wJRerEivUoW-rAYrgZRo5YXwMuAZh" alt="BJP, Congress tear into Arvind Kejriwal for &#39;Ganesha, Laxmi images ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CM Arvind Kejriwal appealed to Prime Minister Narendra Modi to consider including the images of Goddess Lakshmi and Lord Ganesh on currency notes in India&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/political-pulse/arvind-kejriwal-aap-bjp-gods-on-currency-notes-8231448/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Gods on currency notes&#39;: BJP worried Arvind Kejriwal dipping into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHYU7swACgow1K9OaT79CPtTW1W_K3HuzLq_IOE42chgvON6Vh7AQcrbxO3dhVGjPZ2wRN1Pbk" alt="&#39;Gods on currency notes&#39;: BJP worried Arvind Kejriwal dipping into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irresponsible” demand but AAP has nothing to lose and everything to gain after “anti-Hindu” remarks, admit BJP leaders.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/india/arvind-kejriwal-coining-a-bjp-clone-for-gujarat/cid/1894447'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arvind Kejriwal coining a BJP clone for Gujarat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMet1DriZVt6fm4Z9Q29FtJfZmCMeJ4ApZ8Mxr_U47sbjhC4WOLSjpcAyJHPN-DdpcPaBVHfFA" alt="Arvind Kejriwal coining a BJP clone for Gujarat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aam Aadmi Party (AAP) leader Arvind Kejriwal on Wednesday demanded that the images of Goddess Lakshmi and Lord Ganesha be printed on currency notes in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/india-news/congress-jibe-after-bjp-on-arvind-kejriwal-appeal-to-include-photos-of-ganesh-laxmi-on-currency-notes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arvind Kejriwal: नोटों पर अल्लाह को भी शामिल करें..., केजरीवाल के बयान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdBL6ZWM2Q5U41Wb243-sC_1TF9qV38zYSi1lW-T-2MmLIJUjpcqeLY5Mlhq-qKQszQCVOLpvQ" alt="Arvind Kejriwal: नोटों पर अल्लाह को भी शामिल करें..., केजरीवाल के बयान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अरविंद केजरीवाल की नोटों पर भगवान गणेश व माता लक्ष्मी की फोटो की मांग पर भाजपा के बाद&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/delhi-news/if-indonesia-can-we-too-can-kejriwal-proposes-lakshmi-ganesha-images-on-inr-101666769565417.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kejriwal wants Laxmi, Ganesha on ₹ notes &#39;to stem its slide&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZdmLiudlP-bhZ---MGU2rmB2Gf_5W7mn75s83RRTEKIudENOLTsl0BFvZV-QQQh31YewIwYxr" alt="Kejriwal wants Laxmi, Ganesha on ₹ notes &#39;to stem its slide&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kejriwal said if the Indian currency notes have the images of the god and goddess, it will help fructify efforts to improve the economy | Latest News Delhi.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/politics-and-nation/arvind-kejriwal-wants-lakshmi-and-ganesh-images-too-on-currency-notes/articleshow/95107492.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arvind Kejriwal wants Lakshmi and Ganesh images too on currency ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_rVXgNvcbih9ts9f3Qb_R8n1ENXS7GUMSJe6a1g6RSW_FMCkNKz9XPP6TdnNJed9hvbbU0E1y" alt="Arvind Kejriwal wants Lakshmi and Ganesh images too on currency ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kejriwal said he was not asking for a change in currency notes but was requesting new notes to include the photos of Lakshmi and Ganesh.</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/chhattisgarh/chhattisgarh-politics-cm-bhupesh-baghel-on-aap-statement-about-arvind-kejriwal-ann-2246307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chhattisgarh Politics: सीएम बघेल ने AAP को बताया बीजेपी की &#39;B टीम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvOOK139gxPdUhjifqZLsXFHGB0aO16LTs_UClf6fFCFWtscG2e8fVnPccIpWM299g7Lft0mmW" alt="Chhattisgarh Politics: सीएम बघेल ने AAP को बताया बीजेपी की &#39;B टीम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>मुख्यमंत्री भूपेश बघेल ने कहा कि छत्तीसगढ़ में एक दूसरे के घर में दीपक पहुंचाने की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/politics/story/cait-calls-arvind-kejriwals-idea-of-printing-indian-gods-photo-on-currency-notes-as-politically-motivated-350835-2022-10-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CAIT calls Arvind Kejriwal&#39;s idea of printing Indian gods photo on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTu8Fd48izRyrsR55vcV_tzztoS9M4NhPcqTE0u7Hyv466vjjNw2f6sun119s3_FbE8VVaMDuCt" alt="CAIT calls Arvind Kejriwal&#39;s idea of printing Indian gods photo on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CAIT National President BC Bhartia and Secretary General Praveen Khandelwal said that it is absolutely wrong to put pictures of Hindu Gods and Goddesses on&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/navbharatgold/breaking-news-in-hindi/kejriwal-demand-central-govt-to-issue-lakshmi-ganesh-on-indian-currency-notes-before-election/story/95096332.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arvind Kejriwal Appeal: केजरीवाल ने क्यों कहा, नोट पर छपे लक्ष्मी-गणेश ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuwXgh2UorNq7kRDB73_eAsIV_21KPH7FABsPb6rBgrq1vPDcXqVNw69LlwdCoeoV67oY1p2CG" alt="Arvind Kejriwal Appeal: केजरीवाल ने क्यों कहा, नोट पर छपे लक्ष्मी-गणेश ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kejriwal Demand Laxmi Ganesh on Indian Rupees: गुजरात चुनाव नज़दीक हैं। गुजरात में आम आदमी पार्टी अपने लिए&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/delhi-news/exaap-leader-ashutosh-asks-pm-modi-to-sack-economic-advisors-in-jibe-at-kejriwal-101666775456699.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-AAP leader asks PM Modi to &#39;sack economic advisors&#39; in jibe at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGg32YkeK8RDiGKIAgbWwCo1163aPQgDIdF6bXEV5QPg3UJlr0V0A4AZ--YwndxM5WBCWmTNcZ" alt="Ex-AAP leader asks PM Modi to &#39;sack economic advisors&#39; in jibe at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a swipe at the AAP national convenor Arvind Kejriwal, Ashutosh said it&#39;s a “great suggestion” for new British Prime Minister Rishi Sunak to uplift his&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}