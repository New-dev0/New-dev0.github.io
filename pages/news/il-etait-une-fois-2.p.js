import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Il etait une fois 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Il etait une fois 2"/>
        <meta name="description" content="Trending News about Il etait une fois 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Il etait une fois 2</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/amy-adams-patrick-dempsey-il-etait-une-fois-2-1-14e6f1-0@1x.jpeg" alt="Il etait une fois 2"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/cinema-streaming-il-etait-une-fois-2-amy-adams-fait-chanter-patrick-dempsey-sur-disney-plus-2238960.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Il était une fois 2&quot; : Amy Adams fait chanter Patrick Dempsey sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyxwBxyb1bQtmctaj4kxJKa9SzeII8i-iKY7yt_kx1HbBmx_80fT1wmpR2QHRea11fyWwrxm4E" alt="&quot;Il était une fois 2&quot; : Amy Adams fait chanter Patrick Dempsey sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Quinze ans après avoir séduit le public au cinéma, la comédie musicale de Disney revient. La magie d&#39;Amy Adams opère plus que jamais face au&nbsp;...</p></div>
            </div>
        </a><a href='https://mcetv.ouest-france.fr/mon-mag-culture/mon-mag-serie-tv/il-etait-une-fois-2-5-choses-a-savoir-sur-le-nouveau-film-de-disney-18112022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Il était une fois 2: 5 choses à savoir sur le nouveau film de Disney+ !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmZIAm63B115S3q375ymtam7RNP8h_gKe3vSkRP7HQS2PTM5WONZxKn-ZH1UmVKAPZZ-W5eby_" alt="Il était une fois 2: 5 choses à savoir sur le nouveau film de Disney+ !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 18 novembre, Il était une fois revient sur nos écrans, 15 ans après la sortie du premier film. Pour l&#39;occasion, c&#39;est sur la plateforme Disney + que&nbsp;...</p></div>
            </div>
        </a><a href='https://www.journaldugeek.com/critique/critique-il-etait-une-fois-2-tout-est-mal-qui-finit-mal-%F0%9F%A5%80/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Critique Il était une fois 2 : tout est mal qui finit mal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUTwGcUS-jNFWV0WembNhm6PVoHNTtc5TOE9fvdKCRsEgOrubeuD_mpDb5tHDm-l4J7C_aNTbs" alt="Critique Il était une fois 2 : tout est mal qui finit mal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disney+ est devenue la plateforme parfaite pour faire renaître des classiques, mais est-ce que la magie perdure pour Giselle et Robert ? Critique.</p></div>
            </div>
        </a><a href='https://www.disneyphile.fr/dans-les-coulisses-enchantes-de-il-etait-une-fois-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dans les coulisses enchantés de &#39;Il Était une Fois 2&#39; | Disneyphile</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4P2r0jNnPTPw55CFJC37EbFGjJWZnRpPIpKybcLJQQ0djY6iC8mWwskL7erxroHqIE50T3-F-" alt="Dans les coulisses enchantés de &#39;Il Était une Fois 2&#39; | Disneyphile" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>« Ce film a tellement compté pour moi à bien des égards », a déclaré l&#39;actrice Amy Adams à propos du premier opus et son incarnation de la princesse Giselle sur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ledevoir.com/culture/771305/critique-cinema-il-etait-une-fois-2-desenchantement'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Il était une fois 2»: désenchantement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPHTHYGgb7_bM21KsK7zrw9xsZt4ye9fVotMkAGFdOj1-bK8nYVTC9cKUj2bTk8B56XUT_pcIy" alt="«Il était une fois 2»: désenchantement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Film musical d&#39;Adam Shankman. Avec Amy Adams, Maya Rudolph, Patrick Dempsey et Gabriella Baldacchino. États-Unis, 2022, 121 minutes. Sur Disney+. À voir en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.melty.fr/cinema/il-etait-une-fois-2-la-magie-continue-avec-amy-adams-et-patrick-dempsey-critique-1064046.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Il était une fois 2 : la magie continue avec Amy Adams et Patrick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUqU7jUEcguveUMqINdWXr_xdvSvO0jgq9cXRMeUgZZx_MR_GgqfeJ5oGWpqFfvFAoS1Yab307" alt="Il était une fois 2 : la magie continue avec Amy Adams et Patrick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il était une fois 2 a débarqué sur Disney+ ! L&#39;occasion de retrouver la magie d&#39;Andalasia et du duo formé par Amy Adams et Patrick Dempsey.</p></div>
            </div>
        </a><a href='https://www.cosmopolitan.fr/il-etait-une-fois-2-disney-pourquoi-le-film-a-t-il-ete-tourne-deux-fois,2066151.asp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Il était une fois 2 (Disney +) : pourquoi le film a-t-il été tourné deux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSnauuHAiLAdzKvxeFe6LmyvE0sjlv4mOmDGw_KjkBK4KUVZ44gQQXmgMN4HnxTxTQMUDkTc1o" alt="Il était une fois 2 (Disney +) : pourquoi le film a-t-il été tourné deux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On le sait, Gisele, le personnage principal, adore chanter. Que ce soit avec les oiseaux, avec les rats, ou avec des passants dans la rue. Pour Amy Adams, l&#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}