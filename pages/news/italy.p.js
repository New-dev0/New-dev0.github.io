import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Italy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Italy"/>
        <meta name="description" content="Trending News about Italy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Italy</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/637b8f345896633da71a9f12/0x0.jpg?format=jpg&width=1200" alt="Italy"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/laurabegleybloom/2022/11/21/this-beautiful-italian-town-will-pay-you-30000-to-move-there/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This Beautiful Italian Town Will Pay You $30000 To Move There</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeDjFpxNs3itIaIysq2AJzYeK9QMx9bMIw6l-1Rj7Eq1yKvZMiSJPRuqwiUpO6EELqygopL-Mv" alt="This Beautiful Italian Town Will Pay You $30000 To Move There" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Your dream is coming true: An Italian town in the pretty region of Puglia wants to pay you to move to Italy.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/europe/italy-govt-seek-extension-ukraine-arms-supply-law-2023-paper-2022-11-21/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy to extend Ukraine arms supply law for 2023 - minister</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTocrDRghvaXc8pYBDG-Cyk_2_hF6RKsU1PgSIPKhCqB25vpJn-GCIK6QAurRGlr6H5-DF3CWyp" alt="Italy to extend Ukraine arms supply law for 2023 - minister" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy&#39;s government will ask parliament to approve a new law on military and civilian supplies to Ukraine throughout 2023, Defence Minister Guido Crosetto&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/danieleproch/2022/11/21/three-takeaways-from-italys-exhibition-games-as-manager-roberto-mancini-continues-to-rebuild/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Three Takeaways From Italy&#39;s Exhibition Games As Manager ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRibrrN3En_3E3ly3irO62ex4SZXNCQWA_JjzvecpozYNH-eVN0ZhFx2vyBiTnMwyW2ulbCncIt" alt="Three Takeaways From Italy&#39;s Exhibition Games As Manager ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manager Roberto Mancini is very well aware of that, which is why he has been introducing several elements of novelty in Italy&#39;s most recent exhibition games,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/presicce-town-in-the-puglia-region-of-italy-this-beautiful-italian-town-is-paying-people-30-000-to-move-there-101669031484597.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This beautiful Italian town is paying people $30000 to move there ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQttqaxFJyOVC95NAXeZdgXxUD_rSZoX13X-TForDLJRT2TY9oDIwYEbakVQwCP0WqyzMnQlNoe" alt="This beautiful Italian town is paying people $30000 to move there ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Officials at Presicce town in the Puglia region are willing to pay people 30000 euros (roughly $30000) to buy an empty plot. | World News.</p></div>
            </div>
        </a><a href='https://www.chinadaily.com.cn/a/202211/22/WS637bb0f7a31049175432b09c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Made in Italy by the Chinese Ep4 -- Next Generation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQoZtioVA69bV2h9u98vVZKkoh9EuAuNyA_QNvS4rmcx0q9u6F3TLEyKrIvRdTLJtikjq_ixwrX" alt="Made in Italy by the Chinese Ep4 -- Next Generation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The &#39;Made in Italy&#39; label conveys a message of sheer luxury and high quality. But behind the label, the contribution of the Chinese is little known.</p></div>
            </div>
        </a><a href='https://www.ukrinform.net/rubric-ato/3618737-italys-defense-ministry-to-ask-parliament-to-prove-aid-deliveries-to-ukraine-in-2023.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy&#39;s defense ministry to ask parliament to approve aid deliveries to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQalbe-pUIAs29zpecOkx51AxS4bvjA1rqH8QqbD6ichCBEv2O6c1mF7Dmi-4VVJCBRUEIdJyuB" alt="Italy&#39;s defense ministry to ask parliament to approve aid deliveries to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Italian Ministry of Defense will ask the country&#39;s parliament to adopt a new law on military and civilian assistance deliveries to Ukraine for 2023.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/news/article-11452359/Picturesque-Italian-town-near-pristine-beaches-pay-25-000-willing-there.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Picturesque Italian town near pristine beaches will pay £25000 to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0YBgBR4iT8BuYloSimN1g5qD3tJDUHaKRCO-vz2gh2WWSKzEYiP6yH5bWVQO7IN2t7SCBmcJ_" alt="Picturesque Italian town near pristine beaches will pay £25000 to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presicce is offering money towards buying and renovating a home there &middot; Town in Puglia region surrounded by greenery and just 15 minutes from beaches&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/world/you-will-get-30-000-euros-to-move-to-this-city-in-italy-11669074667195.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>You will get 30000 euros to move to this city in Italy | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdylMBr-tjHURmk6ZmwqQSVSLxMPTT8s-CBG7GwGHTWAAZVqM2jKUEiRlioz1nlbPMDWUzSqgt" alt="You will get 30000 euros to move to this city in Italy | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italian authorities have come up with quite a great deal for anyone wanting to move to the charming town of Presicce in the sunny region of Puglia will&nbsp;...</p></div>
            </div>
        </a><a href='https://greekreporter.com/2022/11/21/town-italy-offering-30000-dollars-anyone-moves-there/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Town in Italy Offering $30000 for Anyone Who Moves There</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfhMGOCGG27i5v61Oc0sgc6osvys9WomlvelBVYnbVHgXH_tuxZzTMvqYcOuwNKKP9QvaHLIqb" alt="Town in Italy Offering $30000 for Anyone Who Moves There" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presicce, a stunning quaint town in the south-east of Italy is offering $30000 to people willing to move and stay there full time.</p></div>
            </div>
        </a><a href='https://www.swissinfo.ch/eng/italy-govt-to-seek-extension-of-ukraine-arms-supply-law-for-2023--paper/48073442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy govt to seek extension of Ukraine arms supply law for 2023 -paper</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSmWKZCy_kxu_CDzt4NfHlAj4cySug06vX23bGkYkBvSFkSXBhmGLZARXsgq2hr6BqBqcb84p6p" alt="Italy govt to seek extension of Ukraine arms supply law for 2023 -paper" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ROME (Reuters) - Italy&#39;s government will ask parliament to pass a new law on military and civilian supplies to Ukraine throughout 2023, Defence Minister&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}