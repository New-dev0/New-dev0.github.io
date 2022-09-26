import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ronaldo"/>
        <meta name="description" content="Trending News about Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ronaldo</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Sep/1664144074_ronaldo_cristiano.jpg" alt="Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/sports/football/nations-league-cristiano-ronaldo-suffers-nose-injury/cid/1888778'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nations League: Cristiano Ronaldo suffers nose injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKSTz7OT3SLPouHvQ81HiHQ7wAgatYajAVVN5eQhRHvALEYEHBRB4NVfr6JKXHVuGRBM9d3K-_" alt="Nations League: Cristiano Ronaldo suffers nose injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal lead the group on 10 points ahead of Spain on eight after five matches with one game left to play.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/cristiano-ronaldo-suffers-horrific-injury-scare-as-cr7-leaves-pitch-covered-in-blood-during-uefa-nations-league-match-between-portugal-and-czech-republic-watch-101664091085378.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo suffers horrific injury as CR7 leaves pitch covered in blood ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoGYNZqrAwvwICxuk5PBgo68PxDiemCnnGibL0N4UQEEzYeMqGNkc0zh1hYaVrZ8RrleDCcqdT" alt="Ronaldo suffers horrific injury as CR7 leaves pitch covered in blood ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal captain Ronaldo was left bloodied after the nasty incident in the first half of the one-sided contest. Ronaldo finished the game with an assist.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/cristiano-ronaldo-left-bloodied-during-portugals-uefa-nations-league-clash-vs-czech-republic-watch-2514181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Cristiano Ronaldo left bloodied during Portugals Nations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTDE3Cb_ii4892HJAC7PbFFMsfWn9nm-cZOBQSWF_ak_oQTgyo6iOs1iMUawEy54uzNtt01zZvV" alt="WATCH: Cristiano Ronaldo left bloodied during Portugals Nations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ronaldo ended up bloodied after the nasty clash with Czech Republic goalkeeper but still decided to play the full game.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/sports/nations-league-cristiano-ronaldo-was-badly-injured-against-the-czech-republic-blood-came-out-portugal-won'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nations League: चेक गणराज्य के खिलाफ बुरी तरह घायल हुए क्रिस्टियानो ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7rhChT1BO5kVHXt0Bbt2K1UAIBuP7ikRWC_ISrKQwhK--FuFKO8tIetd-BoieAq_7CEctpl6yvg" alt="Nations League: चेक गणराज्य के खिलाफ बुरी तरह घायल हुए क्रिस्टियानो ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nations League Cristiano Ronaldo was badly injured against the Czech Republic blood came out Portugal won: पुर्तगाल पांच मैच में 10&nbsp;...</p></div>
            </div>
        </a><a href='https://a-sports.tv/ronaldo-bruised-after-brutal-collision-portugal-match/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo bruised after brutal collision in Portugal match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdhf5ucnUP_cBKI7OrhOqhPMQoCNXfrNiM5k3Sa884mC_4Q3cRln5ZCh-DUxTcZcqbWw2sIxsg" alt="Ronaldo bruised after brutal collision in Portugal match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal star Cristiano Ronaldo was left covered in blood after a nasty collision with Czech Republic goalkeeper Tomas Vaclik on Saturday night.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-united-news-dalot-ronaldo-25103234'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Diogo Dalot being given what he needs as Cristiano Ronaldo sends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTd5AoYcDjOFdjp695KKzerwZzjWzVQP6BZTPm6OnkUqCH2RWNNMRfOA4op26sBkeDQ4ajsiINi" alt="Diogo Dalot being given what he needs as Cristiano Ronaldo sends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These are your Manchester United evening headlines for Sunday, September 25. Cristiano Ronaldo sends message after injury scare ahead of Man City vs&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3625550/2022/09/25/cristiano-ronaldo-portugal-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo off the pace for Portugal but his confidence and Santos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDn3hjwfhndK5y-Nt6e8YUCart36pT1MfaAsyVpXAF6IckCp5Zq8n5WSHoelgmg7G8fuZJp23M" alt="Ronaldo off the pace for Portugal but his confidence and Santos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo has started only three of Manchester United&#39;s eight games this season, with two of those coming in the Europa League against Real Sociedad&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/19913993/cristiano-ronaldo-portugal-handball-penalty-nose/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Just protecting his nose&#39; – Cristiano Ronaldo handball gives away ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwycAqXqA9UzwMR9qk5EGe5nRNCPl4toTkMDg3f-i_SIlnzx5tBtgUGdQM7L50BR_wq0TTY2DQ" alt="&#39;Just protecting his nose&#39; – Cristiano Ronaldo handball gives away ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FANS have joked Cristiano Ronaldo gave away a penalty for handball in Portugal&#39;s 4-0 win against Czech Republic to &quot;protect his nose&quot; following his si.</p></div>
            </div>
        </a>
        </Template></>;
}