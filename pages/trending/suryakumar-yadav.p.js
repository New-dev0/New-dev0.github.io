import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suryakumar Yadav</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suryakumar Yadav"/>
        <meta name="description" content="Trending News about Suryakumar Yadav" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suryakumar Yadav</h1>
            <Image width={800} height={500} src="" alt="Suryakumar Yadav"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/entertainment/hollywood/even-hasan-minhaj-knows-he-looks-like-suryakumar-yadav-check-out-his-tweet-101666525833155.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Even Hasan Minhaj knows he looks like Suryakumar Yadav. Check ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4lKIdRW6A4IOh5UUuusuGxfmTHmJa7SLPh6e_LMICv5S-Q94nk3RG1z2GVHHBnJd0FQUVtsBi" alt="Even Hasan Minhaj knows he looks like Suryakumar Yadav. Check ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hasan Minhaj has reacted to a picture of Suryakumar Yadav with a hilarious tweet. He asked ICC to tag him in all future pictures of the cricketer.</p></div>
            </div>
        </a><a href='https://www.bolnews.com/entertainment/2022/10/hasan-minhaj-who-looks-like-suryakumar-yadav-tweets-humorous-icc-request/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hasan Minhaj, who looks like Suryakumar Yadav, tweets humorous ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRACxcLQWECAwKvIPTKnQAzcKFunNn4IegKIGkfnxhVyPWTNr8of-gfHoogIxc3iN5srwQcY2JB" alt="Hasan Minhaj, who looks like Suryakumar Yadav, tweets humorous ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The International Cricket Council shared the artwork of cricketer Suryakumar Yadav. Comedian Hasan Minhaj had the perfect response.</p></div>
            </div>
        </a>
        </Template></>;
}