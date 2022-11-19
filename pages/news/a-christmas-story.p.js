import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>A Christmas Story</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,A Christmas Story"/>
        <meta name="description" content="Trending News about A Christmas Story" /></Head><Template>
            <h1 style={{fontSize: "30"}}>A Christmas Story</h1>
            <Image width={800} height={500} src="https://assets.entrepreneur.com/content/3x2/2000/1668807151-ScreenShot2022-11-18at43159PM.png" alt="A Christmas Story"/>
            <h3>Recent News</h3>
            <a href='https://www.entrepreneur.com/business-news/the-house-from-a-christmas-story-is-up-for-sale/439526'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You Can Now Own the Famous Home From &#39;A Christmas Story&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYE4LewhdrV5kI3zGPXQY8bj0YQj6BfLk7X-9IdAfQ5GSlDppSP-gWw_DYRMSZxI7oj9j_ji2R" alt="You Can Now Own the Famous Home From &#39;A Christmas Story&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The home, located in Cleveland, Ohio, was made famous by the 1983 classic holiday film &#39;A Christmas Story.&#39;</p></div>
            </div>
        </a><a href='https://www.wkyc.com/article/news/local/cleveland/a-christmas-story-house-not-interested-in-selling-to-cast-cleveland-update/95-9bda6fe5-6c4c-4189-84e5-9f6dbea55367'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A Christmas Story&#39; House update: &#39;We are not interested in selling to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRt8_eF4ALBaWI81_gE8d0Jf-Yau1dVGuayvJ3kdrq2zHDQIDS_jGYeclsOKlbVMRP5DT1Fi7iv" alt="&#39;A Christmas Story&#39; House update: &#39;We are not interested in selling to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Although actor Yano Anaya said cast members from A Christmas Story were interested in buying the Cleveland property, officials with the house are saying no.</p></div>
            </div>
        </a><a href='https://www.thedailybeast.com/sequel-a-christmas-story-christmas-review-will-shoot-your-eye-out-with-nostalgia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sequel &#39;A Christmas Story Christmas&#39; Review - Will Shoot Your Eye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrsvpjffEq94qRIzQaa35yDPbHcF0tVbg60vqg5_mETn2DAaf9P9wF_9V-iYYE9Izu04th-Fp5" alt="Sequel &#39;A Christmas Story Christmas&#39; Review - Will Shoot Your Eye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The sequel to the 1983 holiday classic is a completely unnecessary retread of the original—until its reminder of the tinsel-covered weight of our own&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cleveland.com/entertainment/2022/11/a-christmas-story-house-owners-deny-reports-that-actors-are-in-talks-to-buy-tremont-properties.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Christmas Story House owners deny reports that actors are in talks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCwzitC60g-FSjfrQw_l26fkBRy8vRGTN22Mqe8-CowVTYl1rBYqIIQsDp_ugO7fKQDkr691UL" alt="A Christmas Story House owners deny reports that actors are in talks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Actor Yano Anaya, who played Scott Farkus&#39; “crummy little toadie” in the 1983 holiday classic, “A Christmas Story,” is creating a bit of a stir in the media&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/tonifitzgerald/2022/11/17/a-christmas-story-bully-explains-how-the-sequel-finally-got-made/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A Christmas Story&#39; Bully Explains How The Sequel Finally Got Made</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-Pi8LGz-Se_MepNp5o9vw-qou2oLJaUHcwOqO0DqPYBzKMZI5Vgpz2xZFQ49x0PXpP1gRQOTV" alt="&#39;A Christmas Story&#39; Bully Explains How The Sequel Finally Got Made" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;A Christmas Story Christmas&quot; took decades to make. Zack Ward, who played iconic bully Scut Farkus in the original, gives the background on why HBO Max&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsweek.com/why-christmas-story-christmas-recast-ralphie-parker-mom-melinda-dillon-1760634'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why &#39;A Christmas Story Christmas&#39; Recast Ralphie Parker&#39;s Mom</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1YESJTBKi4C3bQgr53i3Sq1m-6kz1QcHZRI4uYlEtWE1_44t4ItUSVah8JUBS67O7KLjkVTuJ" alt="Why &#39;A Christmas Story Christmas&#39; Recast Ralphie Parker&#39;s Mom" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>While much of the original cast reunited for the 1983 film&#39;s long-awaited sequel, Melinda Dillon did not reprise her role.</p></div>
            </div>
        </a><a href='https://people.com/movies/a-christmas-story-cast-where-are-they-now/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>See What Peter Billingsley, Melinda Dillon and the Cast of A ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUpaEndbJVVVRRTxpAdkH7qRj7nPN_aefbbEViwE_un1vnuBnhvMorLX5m_f_GAnSQ6hfajdpX" alt="See What Peter Billingsley, Melinda Dillon and the Cast of A ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s what Peter Billingsley, Melinda Dillon and the cast of A Christmas Story have been in the years leading up to the HBO sequel, A Christmas Story&nbsp;...</p></div>
            </div>
        </a><a href='https://www.smithsonianmag.com/travel/you-can-now-buy-ralphie-parkers-house-from-a-christmas-story-180981146/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You Can Now Buy Ralphie Parker&#39;s House From &#39;A Christmas Story&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQeeGXjMlIfXAYlSjD3eu8V1QsUUL0phgWgw9ucBSZVn9kkyMqaxEXAp6f5mIB89BGa1IiiDIYE" alt="You Can Now Buy Ralphie Parker&#39;s House From &#39;A Christmas Story&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For years, fans of the 1983 classic movie have been flocking to the home and museum in Cleveland.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/17/movies/a-christmas-story-christmas-review.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;A Christmas Story Christmas&#39; Review: Nostalgia Is Fragile</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkAmP5iTJjZkQCgturcQQjK_OC8qslxflThAFSxROhwymABgrS0fiDuYelzlawEhEKpWYJ8IG_" alt="&#39;A Christmas Story Christmas&#39; Review: Nostalgia Is Fragile" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cast of the perennial holiday classic “A Christmas Story” returns for this half-baked legacy sequel.</p></div>
            </div>
        </a><a href='https://screenrant.com/who-narrates-a-christmas-story-2022-sequel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who Is The Narrator In A Christmas Story Christmas?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ43AqXBC9KP47-Z8wpzHHY0RHx11WmNJhl37a3OjiIxRecQYaZbLw29IkV79Ku5c5bHunwHwbl" alt="Who Is The Narrator In A Christmas Story Christmas?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Christmas Story Christmas includes narration just like the original 1983 movie, but who provides the voice of the narrator in the 2022 sequel?</p></div>
            </div>
        </a>
        </Template></>;
}