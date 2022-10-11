import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Manchester United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Manchester United"/>
        <meta name="description" content="Trending News about Manchester United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Manchester United</h1>
            <Image width={800} height={500} src="" alt="Manchester United"/>
            <h3>Recent News</h3>
            <a href='https://www.wionews.com/sports/the-goat-virat-kohli-hails-cristiano-ronaldo-as-manchester-united-star-completes-700-club-goals-524159'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The GOAT: Virat Kohli hails Cristiano Ronaldo as Manchester ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDPlbdigbBqR3dpXg7PJPQcLFpmNVUrBukQ7U2_yXyDRj8ocWgIsUBkFOvWX0QESAm7RrcRP2e" alt="The GOAT: Virat Kohli hails Cristiano Ronaldo as Manchester ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo finally brought an end to his long-standing drought as he scored his first goal of the season in the Premier League for Manchester United.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/virat-kohli-drops-epic-reaction-after-cristiano-ronaldo-reaches-another-massive-landmark-in-manchester-united-vs-everton-clash-in-premier-league-101665395805044.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virat Kohli drops epic reaction after Ronaldo reaches another ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4QkHPUt3YgVicVn2Yn-DoxjDck3OLZWB3MNm-S3YuDYtkJOF0YvafUF-q9mL912kGai8AjDRdiA" alt="Virat Kohli drops epic reaction after Ronaldo reaches another ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Indian skipper Virat Kohli has hailed goal-machine Cristiano Ronaldo after the Manchester United star scored a landmark goal against Everton in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manutd.com/en/news/detail/casemiro-performance-against-everton-shows-what-the-brazilian-will-bring-to-man-utd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Casemiro is United&#39;s midfield general</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3thvcHm2SF1-5ODTaHfFlGq5Vn_-soIEdNmQos5VpbdndfaH5mKCqy7ABuArPHhro8Q_RROxj" alt="Why Casemiro is United&#39;s midfield general" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When Erik ten Hag&#39;s starting XI was revealed for Manchester United&#39;s clash away at Everton on Sunday evening, Casemiro&#39;s first Premier League start as a Red&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/sports/cristiano-ronaldo-nets-700th-club-goal-to-guide-manchester-united-past-everton-439945'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo nets 700th Club goal to guide Manchester United ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGs6Xaud2fGipgeygrB4LQFEjAa-xg9vJ1_q1Mr53ujabLEE9MZwLC58nWJsBnjkf7vIztfBk-" alt="Cristiano Ronaldo nets 700th Club goal to guide Manchester United ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo set a new milestone on Sunday in the Premier League when he scored his career&#39;s 700th club goal while playing as a substitute for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-united-casemiro-ronaldo-rashford-25220539'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Three Manchester United players told how Casemiro helped them ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9E_HWM67niRJTW4de0iAimWZnHW2qS1rI2tPfTrS-C3PxtSlNCYf138i-bsD7oYFqA_lvqgkJ" alt="Three Manchester United players told how Casemiro helped them ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He, Ronaldo and Bruno Fernandes all put in solid showings as United went within a point of the top four thanks to the win. But speaking on BT Sport after the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/trends/sports-trends/english-premier-league-manchester-uniteds-antony-creates-history-with-goal-against-everton-9303381.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier League: Manchester United&#39;s Antony creates history with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRn2T0xaza2QkWWLNHulkQWJhi5DAOMUxZtoDqvcUCzHtPgvaYK_D3zaLGWnofEZI6EDYuyf7jZ" alt="Premier League: Manchester United&#39;s Antony creates history with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antony Matheus dos Santos beat Zlatan Ibrahimovic&#39;s record, who had scored in two consecutive games for Manchester United in 2016. (Image credit: @antony00/&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportstiger.com/news/the-goat-former-indian-skipper-virat-kohli-reacts-after-manchester-united-star-cristiano-ronaldo-completes-700-goals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The GOAT: Virat Kohli reacts after Manchester United star Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxQVmrIcF9vJ1d9QegzJGXxmeyZggAdE9F43clFSTypuM5rsGdQFDKAA4UszXYZk7_N0LEDxM8" alt="The GOAT: Virat Kohli reacts after Manchester United star Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portuguese legend Cristiano Ronaldo redeemed himself on Sunday as he played an instrumental role in notching up a thrilling victory for Manchester United&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/cristiano-ronaldo-s-700th-club-goal-helps-manchester-united-beat-everton-in-premier-league-2022-23-in-pics-photos-228797'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo&#39;s 700th Club Goal Helps Manchester United Beat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkbr7sbfy44aSqtc5Vs735KxR9O_KZGICX_daWqbjxbO7uO-iZ7XKLmUol1t5otQwXjdYfJolm" alt="Cristiano Ronaldo&#39;s 700th Club Goal Helps Manchester United Beat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo scored the 700th club goal of his career to earn Manchester United a 2-1 victory at Everton that moved his team a point off the Premier&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/cristiano-ronaldo-garnacho-man-united-25226311'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United&#39;s Alejandro Garnacho sends Cristiano Ronaldo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf6xRxzAHAAC0e9ZqExSFE-3CXXbjl2fNffgzf1dy5McgClwjmqkW1hjcHVRREASNpt9Kxm4Ma" alt="Manchester United&#39;s Alejandro Garnacho sends Cristiano Ronaldo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo scored his 700th club career goal against Everton and Alejandro Garnacho has reacted to his &#39;idol&#39;.</p></div>
            </div>
        </a><a href='https://talksport.com/football/1215350/casemiro-tank-man-utd-cristiano-ronaldo-premier-league-everton/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casemiro labelled &#39;tank&#39; as Manchester United star assists Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaqMnS8QiLLa4ABXoPri9TQr9HPvQurnxynHOISg_gh-pB7h92ZN_r2mo2UzVKssrNdE16r0g9" alt="Casemiro labelled &#39;tank&#39; as Manchester United star assists Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casemiro finally got his chance to start a Premier League game and showed why Manchester United paid £70million to prise him away from Real Madrid.Th.</p></div>
            </div>
        </a>
        </Template></>;
}