import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>R. Kelly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,R. Kelly"/>
        <meta name="description" content="Trending News about R. Kelly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>R. Kelly</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/47ef48d/2147483647/strip/true/crop/5760x3024+0+408/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fea%2Fd4%2F9a726bf14cefb056505475c496d5%2Fr-kelly-83442.jpg" alt="R. Kelly"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/entertainment-arts/music/story/2022-12-09/r-kelly-prison-new-album'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R. Kelly releases new album from prison</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrMqRCM5nDQZXTnzZpGd1U78BUnLbwrRMXHohiAVjunomLxOQqbiTC0lMvSmTpq5VPLfDINS4P" alt="R. Kelly releases new album from prison" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>R. Kelly, the disgraced R&amp;B singer currently serving a 30-year prison sentence for federal racketeering and sex trafficking charges, has managed to release&nbsp;...</p></div>
            </div>
        </a><a href='https://variety.com/2022/music/news/new-r-kelly-album-i-admit-bootleg-sony-1235455870/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New R. Kelly Album, &#39;I Admit,&#39; Is a Bootleg — Not an Official Release ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpKjuuvHa-6G81wt6ws6q2_QnxUcORg9n16d1RrpM6G-vPDntorA26XW22nJOeh_mrlUOBTBQm" alt="New R. Kelly Album, &#39;I Admit,&#39; Is a Bootleg — Not an Official Release ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A new R. Kelly album provocatively titled &#39;I Admit&#39; is an unofficial release, despite bearing a false copyright for Sony Music&#39;s catalog division.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/brianbushard/2022/12/09/r-kelly-bootleg-album-i-admit-it-released-and-quickly-removed/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R. Kelly Bootleg Album &#39;I Admit It&#39; Released And Quickly Removed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR51OFXReTyB4lXVJYglWJE8fUKdvIJL1TCQz5WnrEOrJvr_E1YZxmUojpUVECMNJk0_PS-xO9c" alt="R. Kelly Bootleg Album &#39;I Admit It&#39; Released And Quickly Removed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The album was only available on Apple Music and Spotify for a matter of hours before it was removed.</p></div>
            </div>
        </a><a href='https://www.okayplayer.com/music/r-kelly-new-album-i-admit.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s The Deal With This R. Kelly Album That Dropped?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSL5tj8ONT8_Uppkeba9EsLntLVnwyx2Qe20nTJiExNg2hxv2ZKc6FoIJMZ7Zoc17_zV1wITCb-" alt="What&#39;s The Deal With This R. Kelly Album That Dropped?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I Admit, a new R. Kelly album, has quietly hit streaming. But singles for it have been dropping since early September.</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/09/r-kelly-legal-team-investigate-fake-new-album-release-culprit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R. Kelly&#39;s Legal Team Investigating Unauthorized &#39;I Admit It&#39; Album ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYSdHn3dQ6e-gPLBTd-QKVHS6pQbSZUZzxW6PHAxN8Yz5yywz5AwOcIql8Zx8gyO76N4Cma2BS" alt="R. Kelly&#39;s Legal Team Investigating Unauthorized &#39;I Admit It&#39; Album ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>R. Kelly&#39;s legal team is digging deep into the mystery of who dropped an unauthorized album using his name and recordings, and his attorney says they&#39;ve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hollywoodreporter.com/news/music-news/r-kelly-releases-album-i-admit-it-1235278899/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>R. Kelly&#39;s Lawyer on His &#39;I Admit It&#39; Album: “It&#39;s an Unauthorized ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSd6csAgUvfe446bveYqk3lraPj_EVPqPWVM1FLDztpK08Ll7et8Lgvk9qC5XoXVY8FMz7Nayjj" alt="R. Kelly&#39;s Lawyer on His &#39;I Admit It&#39; Album: “It&#39;s an Unauthorized ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The disgraced singer dropped the album on Friday, but it was removed from digital platforms on the same day of its release.</p></div>
            </div>
        </a>
        </Template></>;
}