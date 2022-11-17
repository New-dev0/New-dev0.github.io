import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tumelo Madlala</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tumelo Madlala"/>
        <meta name="description" content="Trending News about Tumelo Madlala" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tumelo Madlala</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/3368/c48e3fca1bb24c1e93ada713ab287236.jpg" alt="Tumelo Madlala"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/news24/southafrica/news/senzo-meyiwa-murder-trial-tumelo-madlala-kept-netflix-payment-for-himself-court-hears-20221116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senzo Meyiwa murder trial: Tumelo Madlala kept Netflix payment for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA0myWfRRhY7YWk7he3dFizelYQpREN6tX0lEXGjW_v_IAeh904SlAjnnVsufInaSH3KTTZr0f" alt="Senzo Meyiwa murder trial: Tumelo Madlala kept Netflix payment for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Very shocking&quot; were the words an advocate used in the Gauteng High Court in Pretoria to describe the behaviour of a childhood friend of slain Bafana Bafana&nbsp;...</p></div>
            </div>
        </a><a href='https://ewn.co.za/2022/11/16/behaviour-is-very-shocking-mshololo-on-madlala-withholding-netflix-proceeds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Behaviour is very shocking&#39;: Mshololo on Madlala withholding ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSE18MThmeUJJbXiHtz-q2jTPoJT0vdbDgKAKKoGhT50_2T__ADIdfC3iHQxPjVD1jz81k7ytEF" alt="&#39;Behaviour is very shocking&#39;: Mshololo on Madlala withholding ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mshololo has called Madlala&#39;s behaviour shocking, this after he didn&#39;t share the money he received from the Netflix documentary with Meyiwa&#39;s widow.</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/news/south-africa/2022-11-16-witness-to-senzo-meyiwa-murder-tumelo-madlala-does-not-recognise-one-of-the-accused/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Witness to Senzo Meyiwa murder, Tumelo Madlala does not ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQdCSWCDQoqEfQ3bNl9GtwMg_JNmvQLKpZqf4CPxR3Pt18ShpTxM_oOHnA9BuD0j3JMp5SgY-2L" alt="Witness to Senzo Meyiwa murder, Tumelo Madlala does not ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tumelo Madlala, the state&#39;s first witness to the murder of footballer Senzo Meyiwa says he does not recognise accused number five in the trial,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/news/crime-and-courts/media-kicked-out-of-senzo-meyiwa-murder-trial-after-tumelo-madlalas-face-is-shown-on-tv-news-channel-812c9abe-bdd0-4c65-8ac8-79dcb67544ee'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Media kicked out of Senzo Meyiwa murder trial after Tumelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHb5Yu9cExN82rL40uVKsw1NFpVyMGaf2VJU79QXvRQNWI346o7YW4y3uTLLarnOlhzmJzKu3g" alt="Media kicked out of Senzo Meyiwa murder trial after Tumelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Judge Tshifiwa Maumela who is presiding over the Senzo Meyiwa trial, instructed all media to leave the courtroom after Tumelo Madlala&#39;s face was shown by&nbsp;...</p></div>
            </div>
        </a><a href='https://sundayworld.co.za/news/tumelo-madlala-is-real-epitome-of-a-fake-friend-court-hears/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tumelo Madlala is real epitome of a fake friend, court hears</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAbpk-2GsFypZl9QU1mNgMRPhKUDVxigvvwRGgmoV02NfiXaGsNBy4izAN6Jpiyhs4pHqwNpoX" alt="Tumelo Madlala is real epitome of a fake friend, court hears" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defence advocate for accused number five Zandile Mshololo has painted a questionable picture of the state&#39;s third witness in the Senzo Meyiwa.</p></div>
            </div>
        </a><a href='https://www.citizen.co.za/news/media-senzo-meyiwa-trial-tumelo-madlala-face-shown-16-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Media kicked out of Senzo Meyiwa trial after face of state witness ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1Z1o046uha95H1fSQhYyGQOjimWR3wFv2NXtQaFza11-EfvO7b8fDbeA-bW0rrTKu4cxVrGN0" alt="Media kicked out of Senzo Meyiwa trial after face of state witness ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The judge had earlier ruled that the face of state witness Tumelo Madlala could not be shown during the trial.</p></div>
            </div>
        </a>
        </Template></>;
}