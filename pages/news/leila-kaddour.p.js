import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leila Kaddour</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leila Kaddour"/>
        <meta name="description" content="Trending News about Leila Kaddour" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leila Kaddour</h1>
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/637a425a5f6dca625f60994a/large/image.jpg?v=1" alt="Leila Kaddour"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/11/20/jt-sur-france-2-leila-kaddour-boudadi-en-larmes-annonce-une-triste-nouvelle-pour-la-chaine-et-laudiovisuel-francais-10815617.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JT sur France 2 : Leïla Kaddour-Boudadi en larmes annonce une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgnWKYeN_xZpDvH_DLiLmUgKOL7JPRNnfvHCtE04IdYP7uQHpRASJdv3-uz8Gey-RlFsrH9yt1" alt="JT sur France 2 : Leïla Kaddour-Boudadi en larmes annonce une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La présentatrice du journal de 13h de France n&#39;a pu cacher son émotion, ce dimanche 20 novembre, en annonçant le décès d&#39;une personne qui lui était chère.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/20/jt-de-13-heures-de-france-2-pourquoi-leila-kaddour-boudadi-a-fini-son-journal-en-larmes-10815486.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JT de 13 heures de France 2 : pourquoi Leïla Kaddour-Boudadi a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFNUlPSSU46P-WzoonfFfrZfvB95o9mxfkjO4rxkp-lxM62YCj1RG76u4EqbZRKd94t-43AVN_" alt="JT de 13 heures de France 2 : pourquoi Leïla Kaddour-Boudadi a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La journaliste s&#39;est alors interrompue sous le coup de l&#39;émotion. Malgré la tristesse palpable, les trémolos dans la voix, elle a poursuivi l&#39;hommage. &quot;Un grand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/medias/video/mort-de-pascal-josephe-leila-kaddour-fond-en-larmes-en-plein-jt-sur-france-2_210478.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Pascal Josèphe : Leïla Kaddour fond en larmes en plein JT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYDrpZOYOgaeqpcMaRZW-MFVAUSNBlcmPigFmap2ic3lXfxftwj01VKehRhNxYPGLGNN4nVdYZ" alt="Mort de Pascal Josèphe : Leïla Kaddour fond en larmes en plein JT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La présentatrice du 13-heures n&#39;a pas pu retenir ses sanglots en annonçant la mort soudaine de Pascal Josèphe, ancien directeur des antennes de France 2 ou&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/leila-kaddour-la-journaliste-fond-en-larmes-en-direct-en-annoncant-la-mort-d-un-de-ses-collaborateurs-1669078'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leïla Kaddour : la journaliste fond en larmes en direct en annonçant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ97ncFbJ2OSFvLUd1Dai61jXJRs-ZKI-mjUDA4lBM1IJUjoeMRq_FrltwCwElYU8lVzxEeb_Sl" alt="Leïla Kaddour : la journaliste fond en larmes en direct en annonçant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aux commandes du JT de 13h de France 2 dimanche 20 novembre 2022, la journaliste Leïla Kaddour-Boudadi n&#39;a pas pu retenir ses larmes au moment d&#39;annoncer la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ozap.com/actu/leila-kaddour-boudadi-en-larmes-au-13-heures-de-france-2-en-annoncant-la-mort-de-pascal-josephe/624047'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leïla Kaddour-Boudadi en larmes au &quot;13 heures&quot; de France 2 en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSleSFHsgZfAp8CEngb2ObbDlfo5i6VLQya5-z3eewyfcbkjGAaGB5HfY6WTHWQRxE4jMzMDdY3" alt="Leïla Kaddour-Boudadi en larmes au &quot;13 heures&quot; de France 2 en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il y a des nouvelles qu&#39;on aimerait ne jamais avoir à annoncer a d&#39;abord lancé Leïla Kaddour-Boudadi. Ce dimanche 20 novembre 2022, à la fin du journal de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dhnet.be/medias/television/2022/11/20/pourquoi-leila-kaddour-a-fondu-en-larmes-pendant-la-presentation-du-13-heures-de-france-2-ce-dimanche-YFGG7UYOSRETPCJ3QCFEDG2EYY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pourquoi Leïla Kaddour a fondu en larmes pendant la présentation ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfCD33GMqYjg3VN_FShwsmu4Lp1XmBMycUuHIWMa4y9vPyCZf9FqrXKKz48nhKVvjiGyA4ChP8" alt="Pourquoi Leïla Kaddour a fondu en larmes pendant la présentation ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;image est très inhabituelle : voir une ou un journaliste présentant un journal télévisé fondre littéralement en larmes. C&#39;est pourtant ce qui est arrivé&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}