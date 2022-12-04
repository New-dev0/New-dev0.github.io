import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal"/>
        <meta name="description" content="Trending News about Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/03/c4dfd25d246c8ba2e574358b46f0a2a31670090255706426_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/news/world/india-and-portugal-hold-bilateral-dialogue-on-facilitating-safe-orderly-and-regular-labour-migration-2273597'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India- Portugal: भारत और पुर्तगाल ने की द्विपक्षीय वार्ता, मजदूर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSX2wLw43MNBURx9mjba0bqIzfep9Ot4sX7I5ANnVpWCUJ_OBhDAYHUqcvpyBZrJUQzy54EUQR7" alt="India- Portugal: भारत और पुर्तगाल ने की द्विपक्षीय वार्ता, मजदूर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Portugal On Labour Migration: भारत और पुर्तगाल के बीच माइग्रेशन को लेकर द्विपक्षीय बातचीत हुई&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/india-portugal-discuss-facilitating-migration-of-labourers-3575801'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India, Portugal Discuss Facilitating Migration Of Labourers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoY_lM-SGmHGE0j3qz_HxWBd3B7qEIuXSQxJg3_0R9rEmSrpp-BKFgj2Kj9BZxyKrkoQENkCXh" alt="India, Portugal Discuss Facilitating Migration Of Labourers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In bilateral consultations held recently, India and Portugal reviewed the mechanisms between Portuguese and Indian institutions responsible for facilitating&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/03/football/ronaldo-coach-curse-portugal-world-cup-intl-spt/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo denies he swore at Portugal coach over substitution</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT60bw08WJN7W2VYMvv6fXxwVL7DWHks6Xw0kLi9AnbZMyelgmM8O5-1m2RbIvwBHWgGTAw4QaQ" alt="Cristiano Ronaldo denies he swore at Portugal coach over substitution" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo denied that he had sworn at Portugal coach Fernando Santos when he was substituted during a dramatic 2-1 defeat to South Korea in the&nbsp;...</p></div>
            </div>
        </a><a href='https://playingfor90.com/2022/12/03/2-things-south-korea-stunning-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Two things that stood out in South Korea&#39;s stunning win over Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQYgAIb8lXxVarvsRoIxtHC34YS_MkTXtVX4rMW9CDJKGfR-0KBWg1H16QSyRtrhUrDzf2VMoI" alt="Two things that stood out in South Korea&#39;s stunning win over Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal started the match without a few regulars like Bruno Fernandes, Bernardo Silva, William Carvalho and Ruben Dias. They began with a 4-3-3 formation as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/portugal-por/story/4823462/cristiano-ronaldo-insulted-by-south-korea-player-during-substitution-portugal-coach'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo &#39;insulted&#39; by South Korea player - Portugal coach</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3hcoI-MbuEGkSu4nM-13wUc_oh00nUo-XxzAALZE273J9AekhsNn4XwRyMo-AtbuZ8zPgma4R" alt="Ronaldo &#39;insulted&#39; by South Korea player - Portugal coach" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo was &quot;insulted&quot; by South Korea player Cho Gue-sung as he left the pitch, according to Portugal coach Fernando Santos.</p></div>
            </div>
        </a><a href='https://www.thenationalnews.com/fifa-world-cup-2022/2022/12/03/south-korea-v-portugal-ratings-hee-chan-8-heung-min-7-ronaldo-6-dalot-7/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea v Portugal ratings: Hee-chan 8, Heung-min 7; Ronaldo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4bTBNw_qm5wdNouf5SZRc_uDcS4-QpibQZHBevpRyERYNkXdB3iiEK0rRINeeix2PSUgVA6OV" alt="South Korea v Portugal ratings: Hee-chan 8, Heung-min 7; Ronaldo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Asian side advance to World Cup 2022 knockouts after 2-1 win.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/south-korea-vs-portugal-lineups-and-live-updates/blt9d72386378c9eb36'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Portugal: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6qFAIAKzc2SVvvbdz3s9MPwRQWZsnCEFuxunK3TQAk6d6ZmZTxI9yJV18pNcEj__QzASne2ws" alt="South Korea vs Portugal: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal will need to avoid defeat to top the group, while South Korea have all to play for.</p></div>
            </div>
        </a><a href='https://theprint.in/sport/fifa-wc-this-serves-as-a-warning-portugal-coach-after-loss-to-south-korea/1246714/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA WC: This serves as a warning: Portugal coach after loss to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRqv2FUnjf4b3NWhvhZuND-gqKk3KjKrejrBZXywim2tAhFkpsJfIto_ybF3mx_WJKnDeV2Z0FO" alt="FIFA WC: This serves as a warning: Portugal coach after loss to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Al Rayyan [Qatar], December 3 (ANI): Following the loss to South Korea in their group stage FIFA World Cup match, Portugal head coach Fernando Santos said&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/india/india-portugal-hold-bilateral-dialogue-on-facilitating-safe-orderly-and-regular-labour-migration-6531427.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India, Portugal Hold Bilateral Dialogue on Facilitating Safe, Orderly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJHyS7_cJ-0atpvi4QkZn42boe5Ej0Of8O3NWsH9VXTNG6XTA22ybpiNR7Bq12ndf-YxgZYYZc" alt="India, Portugal Hold Bilateral Dialogue on Facilitating Safe, Orderly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two sides reviewed the mechanisms between Portuguese and Indian Institutions responsible for facilitating international migration and discussed the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}