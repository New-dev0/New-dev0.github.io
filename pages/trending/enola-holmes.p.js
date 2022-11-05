import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enola Holmes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enola Holmes"/>
        <meta name="description" content="Trending News about Enola Holmes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enola Holmes</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95306170,width-1070,height-580,imgsize-33238,overlay-economictimes/photo.jpg" alt="Enola Holmes"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/enola-holmes-2-cast-know-whos-playing-with-which-role/articleshow/95306156.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Enola Holmes 2&#39; cast: Know who&#39;s playing with which role</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNeZZ7CoQjcb067Eh6X7FxNShnDTSisoXO833tkBaBHCAmQ-VKNuSYc3yb-l5f322OoLJ15Q9M" alt="&#39;Enola Holmes 2&#39; cast: Know who&#39;s playing with which role" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Professor Moriarty is back in Enola Holmes 2, playing a villainous villain. Moriarty&#39;s machinations are revealed only partway through the film.</p></div>
            </div>
        </a><a href='https://www.vulture.com/article/enola-holmes-2-review-netflix-millie-bobby-brown-mystery.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enola Holmes 2 Thrives on Millie Bobby Brown&#39;s Charm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQIEV78k2FA-hfFWoQUBASer5nNV8bOIjHUx21XWg0HTHEMIlHIEDiczaL6nlmTUeWXOB-5PDDk" alt="Enola Holmes 2 Thrives on Millie Bobby Brown&#39;s Charm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Movie Review: In Enola Holmes 2, Millie Bobby Brown reprises her charming role as Sherlock Holmes&#39;s teenage sister. Henry Cavill plays Holmes,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/entertainment/ott/enola-holmes-2-twitter-review-reactions-millie-bobby-brown-henry-cavill-netflix-film-action-thriller-2022-11-04-821317'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enola Holmes 2 Twitter Review and Reactions: Millie Bobby Brown&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfpsmO_V_5Cvvx_EwJKR9G624G6hQwxCecSQR2w3ZzDLMAsUDzGkZkTIPzwO9Q7GgTGO8WCcVW" alt="Enola Holmes 2 Twitter Review and Reactions: Millie Bobby Brown&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The female-centric Sherlock Holmes movie, featuring Bobby Brown in the titular role, has started to stream from November 4. Early reviews of the film have been&nbsp;...</p></div>
            </div>
        </a><a href='https://www.polygon.com/23439274/enola-holmes-2-review-netflix-release-date'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enola Holmes 2 review: A sharp improvement on a strong beginning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRASUJyvu20HkWjT9J-uRAoFdWSSgvd4pSCnGCpwPgysdy63FgKKcnY_LMy6BMssv1sbWRO2QgS" alt="Enola Holmes 2 review: A sharp improvement on a strong beginning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The second Enola Holmes is an absolute delight. Stranger Things&#39; Millie Bobby Brown and once and future Superman Henry Cavill lead the cast of the Netflix&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/entertainment/hollywood/news-enola-holmes-2-movie-review-millie-bobbie-browns-mystery-film-is-enjoyable-with-one-caveat-531220'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enola Holmes 2 movie review: Millie Bobbie Browns mystery film is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREVFnq9hL4vpVLICW89VHb5r0fIDo5-5kzSoS0dDcFMnxbvdMqZnTpK5R8ENiAlTeyrARA3N04" alt="Enola Holmes 2 movie review: Millie Bobbie Browns mystery film is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Bradbeer&#39;s &#39;Enola Holmes 2&#39; brings back Millie Bobby Brown&#39;s titular heroine and the feisty younger sibling of Sherlock Holmes.</p></div>
            </div>
        </a><a href='https://www.latimes.com/entertainment-arts/movies/story/2022-11-04/reviews-streaming-video-enola-holmes-weird-al-yankovic-selena-gomez'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reviews: &#39;Enola Holmes 2,&#39; &#39;Weird: The Al Yankovic Story&#39; and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHEzYBJVItDrh5etw-bo7gr2ICxFPAoQzZLgmbBi4M9rzVpoFY9IZBcG1nLZflbSD-87JDQMJ8" alt="Reviews: &#39;Enola Holmes 2,&#39; &#39;Weird: The Al Yankovic Story&#39; and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Selena Gomez: My Mind &amp; Me&#39; looks at mental health; Millie Bobby Brown charms in &quot;Enola Homes 2&quot; and Daniel Radcliffe gets &#39;Weird&#39; as Al Yankovic.</p></div>
            </div>
        </a>
        </Template></>;
}