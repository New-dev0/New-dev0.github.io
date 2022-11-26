import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zara Tindall</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zara Tindall"/>
        <meta name="description" content="Trending News about Zara Tindall" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zara Tindall</h1>
            <Image width={800} height={500} src="https://cdn.images.express.co.uk/img/dynamic/12/1200x712/4423509.jpg?r=1669411042406" alt="Zara Tindall"/>
            <h3>Recent News</h3>
            <a href='https://www.express.co.uk/life-style/style/1701668/zara-tindall-engagement-ring-solitaire-diamond-minimalist-mike-tindall-pictures'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara Tindall wears &#39;minimalist&#39; £140000 engagement ring that Mike ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSHGtdhrernAFK6S8isn2FM-iwNccycOFoZgu8bBupB2eQR046_gy86EqBD4hrIe6cjq6qf6o8" alt="Zara Tindall wears &#39;minimalist&#39; £140000 engagement ring that Mike ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Tindall took his wife Zara&#39;s career into consideration when purchasing her engagement ring back in 2010.</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/healthandbeauty/mother-and-baby/20221125158037/zara-tindall-home-birth-son-lucas-royal-tradition/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara Tindall brought back this royal tradition with birth of third child ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6ei7XhSumFI9PHA2-rsRd7O3DJ-MiMZ16r3EM7lRjUO8egw4ZQ_gzeOi7SSI2a2iLBYwDOVSu" alt="Zara Tindall brought back this royal tradition with birth of third child ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;m a Celebrity star Mike Tindall&#39;s wife Zara Tindall brought back a long-standing royal tradition when she welcomed her third child Lucas - details.</p></div>
            </div>
        </a><a href='https://www.hellomagazine.com/healthandbeauty/makeup/20221125158021/kate-middleton-zara-tindall-beauty-team-revealed/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everything you need to know about royals&#39; beauty teams from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdi1Y_lRgpGmooA2-RiCbKr3cEe84kTmXbbYYDFtOTv1iugOs-OUIO7Jf2ACRmumZtHLPMRw__" alt="Everything you need to know about royals&#39; beauty teams from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kate Middleton, Zara Tindall and Princess Beatrice and Princess Eugenie use a are never short of an incredible look. Find out eveything you need to know&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}