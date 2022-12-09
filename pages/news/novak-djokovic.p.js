import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://canberraweekly.com.au/wp-content/uploads/2022/12/20221008001713817053-minihighres.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://canberraweekly.com.au/nick-kyrgios-australia-very-lucky-to-have-novak-djokovic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Kyrgios: Australia &#39;very lucky&#39; to have Novak Djokovic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnENweALqHJ_O0tTpoMdeql0l9hSgiwm4ophURogVat_gjYUYYDhWAc36g485dPlkf9xzu4Ikw" alt="Nick Kyrgios: Australia &#39;very lucky&#39; to have Novak Djokovic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Kyrgios says Australia is &quot;very lucky&quot; to have Novak Djokovic back for its summer of tennis and has declared the Serb as the man to beat.</p></div>
            </div>
        </a><a href='https://www.tennis365.com/australian-open/watch-novak-djokovic-australian-open-love-affair-perfect-10/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Nine episodes of Novak Djokovic&#39;s Australian Open love ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxxBwGG519lGZSOfn6fCSoCgNxSfNXuRJToUU3x4So8-U9byMyiRrn208rbabl8pTPCOdawmEW" alt="WATCH: Nine episodes of Novak Djokovic&#39;s Australian Open love ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic will be gunning for record-extending 10th Australian Open title come January 2023. After missing the defence of his crown at Melbourne Park&nbsp;...</p></div>
            </div>
        </a><a href='https://www.yardbarker.com/tennis/articles/nick_kyrgios_i_cant_see_novak_djokovic_losing_at_the_australian_open/s1_16811_38220511'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nick Kyrgios: &#39;I can&#39;t see Novak Djokovic losing at the Australian Open&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRiQBO7vAnjY6b7TMhWZ1DwX-pVzR5qm5PVR9WmTVq-_4XdU22AVmrSj0aZjo1geHOnqt5dxz3" alt="Nick Kyrgios: &#39;I can&#39;t see Novak Djokovic losing at the Australian Open&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic will attempt to win his tenth Australian Open title in 2023 and Nick Kyrgios believes the Serbian will put on a &#39;show&#39; for the fans.</p></div>
            </div>
        </a><a href='https://www.sentinelassam.com/sports/tennis/novak-djokovic-to-begin-2023-campaign-in-south-australia-627065'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic to begin 2023 campaign in South Australia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQL7dyiUSsM9T8JiQz9zBiVqMb5hyeBbbKKe7LwPvU-0suS6n_vhYrhbPwmkce_RhdrXPXrpUqb" alt="Novak Djokovic to begin 2023 campaign in South Australia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ennis great Novak Djokovic will begin his 2023 campaign at the Adelaide International ahead of his bid for a 10th Australian Open title,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.essentiallysports.com/atp-tennis-news-he-trained-under-bombs-fathers-rousing-speech-on-novak-djokovics-childhood-adversities-is-proof-enough-of-his-indomitable-spirit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He Trained Under Bombs&#39;- Father&#39;s Rousing Speech on Novak ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYx5-ptKLYBIaCkcmIoJddMQXWAqkESqEi1VNsyQXcwnKIfT2_jjGdU4LoMcsZd7_Tw2YKJEIg" alt="&#39;He Trained Under Bombs&#39;- Father&#39;s Rousing Speech on Novak ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic, the Serbian tennis player had got the full support and blessings of his parents. His father recently shared an empirical message about his&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tennisworldusa.org/tennis/news/Tennis_Interviews/125146/-novak-djokovic-is-very-open-unlike-rafael-nadal-said-young-star/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Novak Djokovic is very open, unlike Rafael Nadal&quot; said young star</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS63mAefgodytSJa_FjhIZl0_sF-R2QgYjSQeQVIaskDncwDOl5X3ELxOKnjOUIGuntTCw_XnHV" alt="&quot;Novak Djokovic is very open, unlike Rafael Nadal&quot; said young star" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lorenzo Sonego replaced Jannik Sinner in the best way in the Davis Cup and won both singles matches played against Frances Tiafoe and Denis Shapovalov.</p></div>
            </div>
        </a><a href='https://www.tennisworldusa.org/tennis/news/Novak_Djokovic/125246/adelaide-boss-asked-about-novak-djokovic-s-reception-in-australia-return-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adelaide boss asked about Novak Djokovic&#39;s reception in Australia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdW5WvMOoKB0D-7PG9M8oWEWeppl20Wi1pdqHl8UDafo-Ri66W8cwkaUAqP9RyBOVK0MynSBdq" alt="Adelaide boss asked about Novak Djokovic&#39;s reception in Australia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adelaide International tournament director Alistar MacDonald believes Novak Djokovic has a great fan base in Adelaide and he expects the Serb to definitely&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/tennis/news-watch-novak-djokovic-spotted-training-marbella-spain-ahead-2023-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Novak Djokovic spotted training in Spain ahead of 2023 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyjwF25h5f9qM4pScXbyMbh1dsK5nZo1XR9k-0fiMP7pm7EVzMupgyGzfrUnbKZ0ML3xJc6UVP" alt="Watch: Novak Djokovic spotted training in Spain ahead of 2023 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Serbian, who is in his off-season, was seen doing the drills at an athletics stadium in Marbella, Spain. You can watch the video here:.</p></div>
            </div>
        </a>
        </Template></>;
}