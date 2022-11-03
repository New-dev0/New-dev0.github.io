import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Avatar"/>
        <meta name="description" content="Trending News about Avatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Avatar</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/avatar-2-1200.jpeg" alt="Avatar"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/entertainment/hollywood/avatar-the-way-of-water-trailer-james-cameron-sequel-8245216/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar The Way of Water trailer: James Cameron&#39;s sequel promises ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6Oo-7FzY0552Zckv0Fr2KzqtlTeQZs0D1v00-dAm-Tgvu2klKeU3MDCqGjYFQFEGpsGxTfjGq" alt="Avatar The Way of Water trailer: James Cameron&#39;s sequel promises ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar The Way of Water trailer: The long-awaited sequel to the biggest film in history is arriving in December. Check out what new sorcery director James&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/avatar-the-way-of-water-first-full-official-trailer-of-movie-gets-released/articleshow/95262905.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar: The Way Of Water&#39;: First full official trailer of movie gets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNNkuqQ1PuPbqV4_zxPrrz-6dramud1lHj1KPT3INMs8z5eFajgARvoKJJzGEhWRHUMiDBCcp8" alt="&#39;Avatar: The Way Of Water&#39;: First full official trailer of movie gets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney will release the 20th Century Studios sci-fi adventure abroad on December 14. The US release date is December 16.</p></div>
            </div>
        </a><a href='https://collider.com/avatar-the-way-of-water-poster-sam-worthington-zoe-saldana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New &#39;Avatar: The Way of Water&#39; Poster Teases an Epic Underwater ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbivB63SsgsUFTnRcqBmfcI24_l6arc9XqmPqPjNGAFSuZNfM_KaOS1SLqTKCn8Q_g8yGdi_fJ" alt="New &#39;Avatar: The Way of Water&#39; Poster Teases an Epic Underwater ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sam Worthington, Zoe Saldaña, Bailey Bass, and Britain Dalton take the spotlight on the new poster for James Cameron&#39;s Avatar: The Way of Water.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/entertainment/movies/avatar-the-way-of-water-new-trailer-a-gobsmacking-return-to-pandora/article66086774.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar: The Way of Water&#39; trailer: A gobsmacking return to Pandora ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTC0A6qWDha1Y7bfYGV0Ms1EuPPDjgaZ1-7NbLq4QDAi9t1uHCvZ_vxfV7URdq6-QfuqJ-d4_EY" alt="&#39;Avatar: The Way of Water&#39; trailer: A gobsmacking return to Pandora ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>James Cameron&#39;s film, starring Zoe Saldana and Sam Worthington among others, is set to release on December 16.</p></div>
            </div>
        </a><a href='https://www.cnet.com/culture/entertainment/avatar-way-of-water-trailer-dives-viewers-into-gorgeous-underwater-world/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Avatar: Way of Water&#39; Trailer Dives Into Gorgeous Underwater World</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSCOmDgiu_WiC_W5dLIOK4lWpU_AhjyDeaREhL1s7-ldamfZAP0v30M3LNygoXG5QT4rXChir5-" alt="&#39;Avatar: Way of Water&#39; Trailer Dives Into Gorgeous Underwater World" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The trailer for James Cameron&#39;s sequel takes moviegoers back to Pandora and the world of the Na&#39;vi.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/film/2022/nov/02/james-cameron-releases-extended-trailer-for-avatar-the-way-of-water'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>James Cameron releases extended trailer for Avatar: The Way of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQ1TNXUhSotCo1O7TknAVla6g5NacftwZeq_uGIIyDtVUo8t09VwP1Erb1W5iVlz-pr8j_76bO" alt="James Cameron releases extended trailer for Avatar: The Way of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New footage from the sequel to the highest-grossing movie of all time has been released on YouTube.</p></div>
            </div>
        </a><a href='https://telugu.news18.com/news/movies/james-cameron-avatar-the-way-of-water-official-trailer-released-sr-1490026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2 Trailer : అవతార్ 2 ట్రైలర్ చూశారా.. విజువల్ వండర్ అంతే..</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbMNd4FaPWSx5j2YRDCgrsRcUdFjuRj4MBymTMowy0KDl3dyhnES4Qw5p7dwj5Ut4ybs9_7tTi" alt="Avatar 2 Trailer : అవతార్ 2 ట్రైలర్ చూశారా.. విజువల్ వండర్ అంతే.." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar 2 Trailer : దర్శకుడు జేమ్స్ కామెరాన్ (James Cameron) తన దర్శకత్వ ప్రతిభతో పండోరా అంటూ కొత్త&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sakshi.com/telugu-news/movies/james-cameron-avatar-way-water-official-trailer-out-now-1498649'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2 Trailer: అవతార్‌ 2 ట్రైలర్‌ వచ్చేసింది</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFdKxR_8FhOe5d5NG6O3O5NpDC2aZpdjgyaqUb-FRvgu2CQfIss59cJ590XjqaiyBmPuiMII4m" alt="Avatar 2 Trailer: అవతార్‌ 2 ట్రైలర్‌ వచ్చేసింది" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>విజువల్‌ వండర్‌ అవతార్‌ మూవీ గురించి తెలియని సినీ ప్రేమికుడు ఉండడంటే అతిశయోక్తి కాదు.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/telugu/entertainment/james-cameron-avatar-2-avatar-the-way-of-water-trailer-delay-81753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2 New Trailer : మీరు కూడా ఇలా తయారయ్యారేంట్రా?.. అవతార్ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShnxxOSmZrvcsMIy4IYcfML_dTZkY0feYsn1M_Z0I12xgtgdY0j4MLtTvA_1loRCG44dgXqOU5" alt="Avatar 2 New Trailer : మీరు కూడా ఇలా తయారయ్యారేంట్రా?.. అవతార్ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar 2 New Trailer : మీరు కూడా ఇలా తయారయ్యారేంట్రా?.. అవతార్ ట్రైలర్ ఆలస్యంపై ట్రోల్స్. James Cameron&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ntnews.com/cinema/james-cameron-visual-wonder-avatar-2-trailer-is-out-now-822754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar-2 Trailer | విజువల్‌ వండర్‌ అవతార్‌ 2 ట్రైలర్‌ వచ్చేసింది..వీడియో</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxN_01HVRO-ZwdERXMgr_0VCc-xzVLVSBvlhhVVlok7RasbqeXh-QIMiqOZleWBli8qb1LLk5T" alt="Avatar-2 Trailer | విజువల్‌ వండర్‌ అవతార్‌ 2 ట్రైలర్‌ వచ్చేసింది..వీడియో" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>హాలీవుడ్‌ ఫిల్మ్‌ మేకర్‌ జేమ్స్‌ కామెరాన్‌ (James Cameron) సిల్వర్‌ స్క్రీన్‌పై సృష్టించిన ఈ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}