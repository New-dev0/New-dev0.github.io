import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alisha Weir</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alisha Weir"/>
        <meta name="description" content="Trending News about Alisha Weir" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alisha Weir</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001beb13-1600.jpg" alt="Alisha Weir"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1118/1337045-alisha-weir-goes-from-toy-show-to-tinseltown/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alisha Weir goes from Toy Show to Tinseltown</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNN2IbqOyrOQNhUkF3VLZND-5F81okumhCjTPd4TfAmNf6iOjY4U-qlsTKXI1m-BgHrE-4Cqpl" alt="Alisha Weir goes from Toy Show to Tinseltown" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>13-year-old Dubliner Alisha Weir told Ryan Tubridy on Friday&#39;s Late Late Show about landing the lead role opposite Emma Thompson in the upcoming movie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/celebs/matilda-star-alisha-weir-age-28528697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matilda star Alisha Weir: Age, previous roles and past Late Late Toy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2AAhx6qwCMGVDU00fzbfH5Z73cyicl6tUVnH_B0dEJGmc1hsVfLh-XFP3VKSfV5KTlRf5o8Wl" alt="Matilda star Alisha Weir: Age, previous roles and past Late Late Toy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The child actress has been working hard behind the scenes, following her Late Late Toy Show performance five years ago.</p></div>
            </div>
        </a>
        </Template></>;
}