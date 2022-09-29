import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/hockey/toggti/article65864904.ece/alternates/LANDSCAPE_615/GettyImages-1141233603jpg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.nagalandpost.com/index.php/what-ails-nagaland-sports/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What ails Nagaland sports? | Nagaland Post</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="What ails Nagaland sports? | Nagaland Post" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Department is also said to have ten top most priority disciplines with special emphasis on Football, Archery, Sepaktakraw, Boxing, Wrestling, Athletics,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/other-sports/indian-sports-news-updates-september-28-results/article65946886.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian sports news wrap, September 28</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSs3jSJ12lHz5ygLnOw3hqS0oOWOLLBbRW-vaBvwumXwbQPNl34iS0hLgeQ6DvW-htMSF9gl-7g" alt="Indian sports news wrap, September 28" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nehru girls tournament: Mahila Hockey Academy thrashes Punjab Public School. Gayatri Mahavar scored six goals including a hat-trick to help Mahila Hockey&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailyexcelsior.com/ut-level-hogam-sports-cship-held/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UT level Hogam Sports C&#39;ship held - Jammu Kashmir Latest News ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsgRhXesJSauMYpplG7mtEiARJ8aLlzSU_EduqA0tFoHYI5i3BG1ojKIkwvPYwfKTOy1pfm-oD" alt="UT level Hogam Sports C&#39;ship held - Jammu Kashmir Latest News ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SRINAGAR, Sept 28: The first UT level Hogam Sports Championship was concluded under the aegis of Hogam Federation of India at Polo Ground Lal Chowk, here today.</p></div>
            </div>
        </a><a href='http://brighterkashmir.com/1st-jk-hogam-sports-championship-held'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>1st JK Hogam sports championship held</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdd77HVmZUTMnBzP_Oz3-bbKeFSyQGM5fdRHpq8Ntf8iBkFJgq5WFwDZcx9yXC8Ae7dxUVFFhb" alt="1st JK Hogam sports championship held" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first JK UT Hogam Sports championship was held from 26th to 27th of September under the aegis of Hogam Federation of India at Pologround Lal Chowk&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}