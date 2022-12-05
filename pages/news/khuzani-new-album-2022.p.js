import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Khuzani New Album 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Khuzani New Album 2022"/>
        <meta name="description" content="Trending News about Khuzani New Album 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Khuzani New Album 2022</h1>
            <Image width={800} height={500} src="https://lh3.googleusercontent.com/65Ju8U_PyAamA0py8xWOw04NNiOMQJFCLQ1F_p6AHdpkPXfPEoVQTsS_rKe_KcCTlohFPOlErAOe3-4gka19qT-K-REl26_qb67qz0rk9MTIJQ=s1000" alt="Khuzani New Album 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.sowetanlive.co.za/entertainment/2022-12-02-khuzani-ends-2022-with-a-bang-and-drops-13th-album/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Khuzani ends 2022 with a bang and drops 13th album</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiEsVPf6NyGpq65UewTv7ffpEowOTnxz1YsRmcebD766LceD5NGGPdJR8dhVEL_Oq8QsSEkBVN" alt="Khuzani ends 2022 with a bang and drops 13th album" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When maskandi singer Khuzani Mpungose won the UkhoziFM Ingoma Ehlukanisa Unyaka in 2020, ushering music fans into the new year, it proved that he has&nbsp;...</p></div>
            </div>
        </a><a href='https://latestnews.fresherslive.com/articles/khuzani-new-album-2022-song-list-complete-track-list-from-khuzani-umqhele-nethawula-album-1112848'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Khuzani New Album 2022 Song List, Complete Track List From ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVxUHjzlowwZvcpuq71fUn0Byci87fyiKkgQ9FobV5oS57zRyf4tFY7ZeuCyaQGKiqKh0DWATK" alt="Khuzani New Album 2022 Song List, Complete Track List From ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Khuzani New Album 2022 Song List- Tokuai Nkosikhona On December 3, 1989, Innocent Mpungose was born in Nkandla, KwaZulu-Natal.</p></div>
            </div>
        </a>
        </Template></>;
}