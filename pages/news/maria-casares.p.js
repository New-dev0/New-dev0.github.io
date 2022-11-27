import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maria casares</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maria casares"/>
        <meta name="description" content="Trending News about Maria casares" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maria casares</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/22/0/150/1620/1080/1440/960/60/0/dcde438_1669110057424-maria-casares-et-albert-camus-toi-ma-vie.jpg" alt="Maria casares"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/culture/article/2022/11/25/maria-casares-et-albert-camus-toi-ma-vie-sur-france-5-histoire-d-une-passion_6151667_3246.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Maria Casarès et Albert Camus, toi, ma vie », sur France 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxkgHcgYsusJKzuomYRNKS4zVL-8e8yCSStFQy5HE2akmzMj1kNIsyguhbzBeNpC-gRCVMoCvK" alt="« Maria Casarès et Albert Camus, toi, ma vie », sur France 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elisabeth Kapnist relate la relation amoureuse qu&#39;ont entretenue l&#39;écrivain et l&#39;actrice.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/culture/notre-critique-du-documentaire-maria-casares-et-albert-camus-toi-ma-vie-les-amants-magnifiques-sur-france-5-20221125'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notre critique du documentaire Maria Casarès et Albert Camus, toi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDmWGpeZfZcNBAf-AHa2JjaAvvVhgcxSogrBnOuUlPTf0gRwM_QvNkFUILAdh-A56pqADkNdtO" alt="Notre critique du documentaire Maria Casarès et Albert Camus, toi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CRITIQUE - Après leur rencontre en 1944, ils ont échangé plus de 900 lettres incandescentes d&#39;où jaillit l&#39;intensité de leur amour.</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/ce-soir-a-la-tv/20221125.OBS66403/maria-casares-et-albert-camus-toi-ma-vie-l-incandescence-d-une-liaison.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Maria Casarès et Albert Camus, toi, ma vie », l&#39;incandescence d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6Dzwlz0KHFp4R-s4hDFnlTtCLUY9bCkj0H_fkXj8q1Np6zkQc24rdwDTOjsCvTtSNjXoSDsbR" alt="« Maria Casarès et Albert Camus, toi, ma vie », l&#39;incandescence d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La documentariste Elisabeth Kapnist explore la riche correspondance des deux amants, qui s&#39;étend sur 16 ans, jusqu&#39;à la mort accidentelle de l&#39;écrivain.</p></div>
            </div>
        </a>
        </Template></>;
}