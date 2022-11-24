import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celine Quatennens</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celine Quatennens"/>
        <meta name="description" content="Trending News about Celine Quatennens" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celine Quatennens</h1>
            <Image width={800} height={500} src="https://www.francebleu.fr/s3/cruiser-production/2022/11/5c41f158-005b-426d-8405-91cf757dae7f/1200x680_000_32j387y.jpg" alt="Celine Quatennens"/>
            <h3>Recent News</h3>
            <a href='https://www.francebleu.fr/infos/faits-divers-justice/affaire-quatennens-son-epouse-denonce-des-violences-physiques-et-morales-depuis-plusieurs-annees-1669203969'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Quatennens : le député &quot;dément catégoriquement&quot; les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWIww5UNBQXTVRM6LIa701TZdHBVpqwVuCu5iv5cMfwo_t5P5TY7oeMdVSQeBgPHsD0qjLczqI" alt="Affaire Quatennens : le député &quot;dément catégoriquement&quot; les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Céline Quatennens, l&#39;épouse du député LFI du Nord, a dénoncé mercredi auprès de l&#39;AFP des &quot;colères&quot;, des &quot;crises&quot; et &quot;des violences physiques et morales&quot; de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/politique/clementine-autain-lfi-nous-devons-prendre-en-compte-la-parole-de-celine-quatennens-20221123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clémentine Autain : «Nous devons prendre en compte la parole de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgEGWu0bo8n883BUOs2o8tWhaVpFbGI2DlIMixtgeEyCTqsc2MvBxKoflut6r4SVWvB5-58wGQ" alt="Clémentine Autain : «Nous devons prendre en compte la parole de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>EXCLUSIF - Après un communiqué de l&#39;épouse du député LFI évoquant des «violences physiques et morales» depuis «plusieurs années» de la part de son mari,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leprogres.fr/faits-divers-justice/2022/11/23/affaire-quatennens-son-epouse-denonce-des-violences-depuis-plusieurs-annees'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Politique. Adrien Quatennens : son épouse l&#39;accuse à nouveau, le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTo70d4w4gOX437pvI_67dHS79frN84vzE2gS6IyyTeAMJ80fTTZfgUtaupINPD5amBZFJEcDbh" alt="Politique. Adrien Quatennens : son épouse l&#39;accuse à nouveau, le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le député du Nord dénonce des « accusations mensongères ». Il ne participera pas aux activité du groupe LFI de l&#39;Assemblée jusqu&#39;à la décision de la justice.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/23/affaire-adrien-quatennens-son-epouse-denonce-des-violences-physiques-et-morales-depuis-plusieurs-annees-10822205.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Affaire Adrien Quatennens : son épouse dénonce des &quot;violences ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBlql3T-vvzgMSJ2UQRfHZMkCj84jF9VLsZrSCnW1BAYUsZG9-8GPGCPBXIvWKTNG_efW4fLSc" alt="Affaire Adrien Quatennens : son épouse dénonce des &quot;violences ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Cela fait plusieurs années que je subis ses colères, ses crises, des violences physiques et morales. Au cours de ces dernières années, j&#39;ai voulu le divorce à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lesechos.fr/politique-societe/politique/lepouse-dadrien-quatennens-formule-de-nouvelles-accusations-de-violences-1882140'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Violences conjugales : Adrien Quatennens isolé par le groupe LFI à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFTgnLucskEC4cPVnHS3AbHP7bMRTDxncckljAM33QD9VW7c2d-2DO0403_VEIYUBt-Oxs_iA1" alt="Violences conjugales : Adrien Quatennens isolé par le groupe LFI à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après de nouvelles accusations de violences conjugales de la part de sa femme, qu&#39;Adrien Quatennens « dément catégoriquement », la situation s&#39;est tendue&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/police-justice/article/2022/11/23/celine-quatennens-denonce-des-violences-physiques-et-morales-subies-depuis-plusieurs-annees_6151251_1653578.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Céline Quatennens dit avoir subi des « colères » et des « violences ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlCaZ3dcUBqtDbYeB50cYU45auYYd8SL_jqZ3r64TgLKax0hR-FmXqwp3qLQ7Z0u2HkgtCas-G" alt="Céline Quatennens dit avoir subi des « colères » et des « violences ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le député Adrien Quatennens ne participera plus au groupe LFI de l&#39;Assemblée jusqu&#39;à la décision de la justice, a annoncé ce dernier mercredi dans un&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}