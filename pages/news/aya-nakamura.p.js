import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aya Nakamura</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aya Nakamura"/>
        <meta name="description" content="Trending News about Aya Nakamura" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aya Nakamura</h1>
            <Image width={800} height={500} src="https://cdn-s-www.leprogres.fr/images/080921F7-5C21-495B-99B7-578A39F537FD/FB1200/photo-1669227785.jpg" alt="Aya Nakamura"/>
            <h3>Recent News</h3>
            <a href='https://www.leprogres.fr/faits-divers-justice/2022/11/24/violences-reciproques-la-star-aya-nakamura-et-son-ex-compagnon-juges-ce-jeudi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seine-Saint-Denis. Violences réciproques : procès renvoyé pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIb4d6B_0u-Kh4qq4tZCvyHMsZRlCfnFZOhTk6DkW_72AkwV6l9_wnfRTyg8_zDUQkNZnEL0Ml" alt="Seine-Saint-Denis. Violences réciproques : procès renvoyé pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le procès de la star Aya Nakamura et de son ex-compagnon Vladimir Boudnikoff, qui devaient être jugés ce jeudi à Bobigny pour des violences réciproques sur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/culture/medias-people/aya-nakamura-et-vladimir-boudnikoff-pourquoi-sont-ils-juges-7900209499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aya Nakamura et Vladimir Boudnikoff : pourquoi sont-ils jugés ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbzTst2iCqlZelwiecjjh39s0gNK_JJhcIart4N-rml_zxr3bMs7M8F2A_dJtuiCLpzGIuiyu3" alt="Aya Nakamura et Vladimir Boudnikoff : pourquoi sont-ils jugés ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse et son compagnon se retrouvent ce 24 novembre devant la 12e chambre du tribunal correctionnel de Bobigny. En cause : une soirée houleuse en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/societe/justice/le-proces-d-aya-nakamura-et-son-conjoint-renvoye-6c6712e4-6c02-11ed-918c-3d4ea5ca1edf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le procès d&#39;Aya Nakamura et son conjoint pour violences ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRbx0wS-8RlQNRWSe7Le0fiWepUTcdJlSGIQkdyikC6m-j8ms2FG1YIbTpCzmY0r-7NAb2I7fY" alt="Le procès d&#39;Aya Nakamura et son conjoint pour violences ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le procès de la star Aya Nakamura et de son ex-compagnon Vladimir Boudnikoff, qui devaient être jugés jeudi 24 novembre 2022 à Bobigny pour des violences&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/24/aya-nakamura-et-vladimir-boudnikoff-juges-pour-violences-reciproques-sur-conjoint-le-proces-renvoye-a-la-demande-des-avocats-10824904.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aya Nakamura et Vladimir Boudnikoff jugés pour violences ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8oXhsuqIlfUBAKIaW_eB0LOpwPiH_Q5N550wWzER5wgHJe83mCEJHkRWnCS2DImjQL-iD5AdL" alt="Aya Nakamura et Vladimir Boudnikoff jugés pour violences ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le procès de la star Aya Nakamura et de son ex-compagnon Vladimir Boudnikoff, qui devaient être jugés ce jeudi 24 novembre à Bobigny pour des violences&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/justice/le-proces-d-aya-nakamura-et-de-son-conjoint-renvoye-au-26-janvier-24-11-2022-2499070_2386.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le procès d&#39;Aya Nakamura et de son conjoint renvoyé au 26 janvier</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6vAp4e0zM0IXNYNDyFJYOzTnZG2pFx7hrvI08HNgtL8vALynUVCTAUp3SG3Et0ea792O0mFQw" alt="Le procès d&#39;Aya Nakamura et de son conjoint renvoyé au 26 janvier" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse française et son ex-compagnon devaient être jugés ce jeudi pour violences réciproques. À la demande de leurs avocats, le procès a été renvoyé.</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/faits_divers/4011687-20221124-justice-proces-aya-nakamura-ex-conjoint-violences-reciproques-reporte-janvier'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Justice : Le procès d&#39;Aya Nakamura et de son ex-conjoint pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT61CdaNqB2I8YkxzoAgBemSvi1ywT9svXT2YcK57fi1uTDc5v1OWfYSj23dp8x2MXh8sOuIHSF" alt="Justice : Le procès d&#39;Aya Nakamura et de son ex-conjoint pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aya Nakamura et Vladimir Boudnikoff n&#39;étaient pas présents à l&#39;audience. Connue pour ses tubes au succès planétaire, dont Djadja, la star de 27 ans et le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/24/nous-avons-fait-des-betises-ce-soir-la-aya-nakamura-et-son-ex-juges-ce-jeudi-pour-violences-reciproques-10822590.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Nous avons fait des bêtises ce soir-là&quot; : Aya Nakamura et son ex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZIvyfuU4cMh-ab-J9rznx0CHzoRv_372xxHC4Ex9GIqv0t436Ekk_g4Ta85J3P9UhPWfBpdKm" alt="&quot;Nous avons fait des bêtises ce soir-là&quot; : Aya Nakamura et son ex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les faits remontent au mois d&#39;août. Dans le cadre de violences réciproques, Aya Nakamura et son ex-conjoint, le producteur Vladimir Boudnikoff sont jugés&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}