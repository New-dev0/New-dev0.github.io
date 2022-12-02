import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kev Adams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kev Adams"/>
        <meta name="description" content="Trending News about Kev Adams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kev Adams</h1>
            <Image width={800} height={500} src="https://file1.closermag.fr/var/closermag/storage/images/1/3/9/0/6/13906046/ca-assomme-kev-adams-bord-des-larmes-evoquant-mort-mylene-demongeot.jpeg?alias=exact1024x768_l" alt="Kev Adams"/>
            <h3>Recent News</h3>
            <a href='https://www.closermag.fr/people/ca-m-a-assomme-kev-adams-au-bord-des-larmes-en-evoquant-la-mort-de-mylene-demongeot-1672259'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Ça m&#39;a assommé” : Kev Adams au bord des larmes en évoquant la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIw1O30Lo6DUwHFC78vfYrY1Rz5paXS9Z_aYKoVqBm2slyA0xg1ydSGvs0-YUlNybp1AaKIOlF" alt="“Ça m&#39;a assommé” : Kev Adams au bord des larmes en évoquant la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 1er décembre, Mylène Demongeot est décédée à l&#39;âge de 87 ans. Une tragique nouvelle pour le monde du cinéma, et notamment pour Kev Adams,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/C-est-bouleversant-Kev-Adams-emu-et-au-bord-des-larmes-dans-C-a-Vous-en-evoquant-Mylene-Demongeot-1753014'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“C&#39;est bouleversant” : Kev Adams ému et au bord des larmes dans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFxx2iLxeTITD9EcbSr4StKjRj0d6xjFJ61C8td12UYw7oicyOFmQHr0Xu_mVAjCKVHxDZOAUU" alt="“C&#39;est bouleversant” : Kev Adams ému et au bord des larmes dans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Décédé ce jeudi 1er décembre, Mylène Demongeot laissera un magnifique souvenir à Kev Adams. L&#39;humoriste, présent sur le plateau de &quot;C à Vous&quot; le même jour,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/video-ca-me-fend-le-coeur-kev-adams-reagit-avec-emotion-a-la-mort-de-mylene-demongeot_507755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – “Ça me fend le cœur” : Kev Adams réagit avec émotion à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5O3siNJaUx3YqXI_gpMLboKAYuT6ZRVelLp2q9PrVcTXiXh4ckbMkqjekKZVMrCr4KQV9mamD" alt="VIDÉO – “Ça me fend le cœur” : Kev Adams réagit avec émotion à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après la mort de Mylène Demongeot ce jeudi 1er décembre, l&#39;humoriste et acteur Kev Adams a été invité à réagir à ce drame sur le plateau de C à vou...</p></div>
            </div>
        </a><a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/c-est-bouleversant-kev-adams-reagit-a-la-mort-de-mylene-demongeot-dans-c-a-vous-20221201'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«C&#39;est bouleversant» : Kev Adams réagit à la mort de Mylène ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfsRHtW4d-06mcAHwRiAtEa8OjpVt_rtQ2_FkoQEXtb4e_n3PEm6yfucdpthl0wjJIeSeyON5g" alt="«C&#39;est bouleversant» : Kev Adams réagit à la mort de Mylène ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VIDÉO - L&#39;humoriste évoque sur France 5 ses souvenirs du tournage de Maison de retraite, le dernier film tourné par l&#39;actrice, décédée ce jeudi 1er&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/ca-me-fend-le-coeur-kev-adams-bouleverse-par-la-mort-de-mylene-demongeot-zap-tv-744224'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Ca me fend le coeur » : Kev Adams bouleversé par la mort de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqLFki1uU8sDEBpFog3hHO0Ql4sOYbCKuq88lymSdecNL2dkaHseRajHPC3BMD5Y8he1oeTFYt" alt="« Ca me fend le coeur » : Kev Adams bouleversé par la mort de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeudi 1er décembre 2022, Anne-Elisabeth Lemoine présentait un nouveau numéro de C à Vous. Dans ce dernier, la journaliste recevait Kev Adams. Et év...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/people/315065-ca-ma-casse-en-deux-kev-adams-tres-emu-pour-rendre-hommage-a-mylene-demongeot-dans-c-a-vous-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ca m&#39;a cassé en deux&quot; : Kev Adams très ému pour rendre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Ca m&#39;a cassé en deux&quot; : Kev Adams très ému pour rendre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité de C à Vous pour promouvoir son cinquième one-man-show et sa participation en tant que parrain du Téléthon 2022, Kev Adams a rendu un hommage&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}