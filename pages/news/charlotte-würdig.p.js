import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charlotte Würdig</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charlotte Würdig"/>
        <meta name="description" content="Trending News about Charlotte Würdig" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charlotte Würdig</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/4242203/46-150284722.jpg" alt="Charlotte Würdig"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/stars/charlotte-wuerdig-ueber-trennung-von-sido-scheidung-erfordert-allen-mut/402220617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlotte Würdig über Trennung von Sido: &quot;Scheidung erfordert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbOy7p-3XQCAJRBJ9kHM-mZXZl6QcNSvBVUf0UEXiO_JyvKFpA6fiOq0ZM_0lvpZz8jK9dLEwc" alt="Charlotte Würdig über Trennung von Sido: &quot;Scheidung erfordert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moderatorin Charlotte Würdig hat sich zu ihrem Verhältnis zu Rapper Sido nach ihrer Trennung geäußert. &quot;Paul bleibt für immer ein wichtiger Teil in meinem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/leute/Charlotte-Wuerdig-brauchte-Mut-fuer-Scheidung-article23721687.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sido bleibt &quot;wichtiger Teil&quot;: Charlotte Würdig brauchte Mut für ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLRWcGX2EYf05l1ROsoEQYL9i_vYh039bBaiQGrZIFRaCa8o1MuzvFSBWp62DCXk03baWMn0GF" alt="Sido bleibt &quot;wichtiger Teil&quot;: Charlotte Würdig brauchte Mut für ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gut zwei Jahre sind Charlotte Würdig und Rapper Sido geschieden. Bislang äußerte sich die 43-Jährige nicht zum Aus der Ehe. Nun aber erklärt sie in einem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stern.de/lifestyle/leute/nach-ehe-aus-mit-sido--charlotte-wuerdig---das-tut-schon-weh--32916588.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Ehe-Aus mit Sido: Charlotte Würdig: &quot;Das tut schon weh&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzkNmLFNDypuFiyfThJfBbc4KIcJeJaMfAqj3AB7qrr1oCfXeEwLieZnGxVXsi5gvt2MvtKuu9" alt="Nach Ehe-Aus mit Sido: Charlotte Würdig: &quot;Das tut schon weh&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lief die Scheidung von Charlotte Würdig und Sido damals friedlich ab? In einem Interview hat die Moderatorin nun ihr Schweigen gebrochen.</p></div>
            </div>
        </a><a href='https://www.berliner-kurier.de/show/charlotte-wuerdig-verraet-so-lief-der-scheidungstermin-mit-ex-mann-sido-li.287672'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Charlotte Würdig verrät: So lief der Scheidungstermin mit Ex-Mann ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwSYIjsdSkj2XBvp8wlKC8olDefDAvWqfLGfzvqzMhDCqhYCZsKMvKwgnIqL2fNbL-uWtGMVAG" alt="Charlotte Würdig verrät: So lief der Scheidungstermin mit Ex-Mann ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Jahr 2012 hatten die Moderatorin Charlotte Würdig und der Berliner Rapper Sido geheiratet. Zwei Kinder kamen zur Welt und die Ehe verlief meistens&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}