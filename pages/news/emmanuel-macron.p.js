import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Emmanuel Macron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Emmanuel Macron"/>
        <meta name="description" content="Trending News about Emmanuel Macron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Emmanuel Macron</h1>
            <Image width={800} height={500} src="https://img.20mn.fr/4AXTzFKBQG6SZ-U4O3VQcyk/1200x768_emmanuel-macron-et-joe-biden-lors-du-g7-de-2022-en-allemagne" alt="Emmanuel Macron"/>
            <h3>Recent News</h3>
            <a href='https://www.20minutes.fr/monde/4012493-20221129-emmanuel-macron-etats-unis-quatre-questions-avant-visite-etat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron aux Etats-Unis : Quatre questions avant la visite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThMK41lcCXjdYn9CoEFBktzNhiUdUxDVskhBn86UTIo5eEc-zr2td-Z6hEM9DFlUIycCsIpqdN" alt="Emmanuel Macron aux Etats-Unis : Quatre questions avant la visite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président de la République est pendant quatre jours aux Etats-Unis, notamment à Washington.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/international/emmanuel-macron-aux-etats-unis-pour-desamorcer-les-tensions-20221129'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron aux États-Unis pour désamorcer les tensions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjuIYGxbvOAg_aBPeT3qkoBKhavkc9hlY7NeY9NLkv5MiFNFL9BbzuUl03tOpOfSxWvgIgZHO6" alt="Emmanuel Macron aux États-Unis pour désamorcer les tensions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANALYSE - Le président espère convaincre Joe Biden de revoir son plan de lutte contre l&#39;inflation, que l&#39;UE juge contraire à ses intérêts.</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/france/emmanuel-macron-aux-etats-unis-une-visite-difficile-souligne-maurice-gourdault-montagne-13181799.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron aux États-Unis : « Une visite difficile », souligne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZG1VR75HdWxmPXD7pU-Skc8cuY67cTreTI6wcXqDzWYjbFCzr1xoAPtBSj9gz3JKZcoMUzAVG" alt="Emmanuel Macron aux États-Unis : « Une visite difficile », souligne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour l&#39;ancien ambassadeur et ex-secrétaire général du Quai d&#39;Orsay Maurice Gourdault-Montagne, la visite d&#39;État du président français chez Joe Biden&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/politique/emmanuel-macron-chez-joe-biden-les-coulisses-dune-visite-detat-29-11-2022-WSHQ7LJZFVGF5LVM2LKV6LKCHA.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron chez Joe Biden : les coulisses d&#39;une visite d&#39;État</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGdrKDTiVUIgGHeUCW5Or6XCmRrTEIjZkn63dby9uQE-LWFVj_FJ9n0y0nHa9UIskqkJ3h7E8b" alt="Emmanuel Macron chez Joe Biden : les coulisses d&#39;une visite d&#39;État" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président de la République effectue à partir de ce mercredi son deuxième déplacement de ce type aux États-Unis. L&#39;occasion de confirmer l&#39;étroite&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnews.fr/monde/2022-11-29/emmanuel-macron-aux-etats-unis-quelles-personnalites-accompagnent-le-president-pour'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron aux Etats-Unis : quelles personnalités ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAYMoOW5N07WQH-8oBapjCCowcoN6GA4nTRbidua9bbNN-SYZJBRGwvMtOjGiebcmJo9pwreWCmQ" alt="Emmanuel Macron aux Etats-Unis : quelles personnalités ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parti ce mardi, Emmanuel Macron sera aux Etats-Unis pour une visite d&#39;Etat jusqu&#39;à vendredi. Une délégation importante et variée l&#39;accompagne pour l&#39;épauler&nbsp;...</p></div>
            </div>
        </a><a href='https://www.france24.com/fr/%C3%A9co-tech/20221129-emmanuel-macron-porte-parole-de-l-industrie-europ%C3%A9enne-face-au-protectionnisme-am%C3%A9ricain'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emmanuel Macron, porte-parole de l&#39;industrie européenne face au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8_2zOncX3dqAQv3F0WJCzjBTP5evztYAy05qPox-Jev_W6YR-LJsho4xfq3kd4PvoexRKQqj4" alt="Emmanuel Macron, porte-parole de l&#39;industrie européenne face au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plombée par des factures énergétiques qui s&#39;envolent, l&#39;industrie européenne est également pénalisée par l&quot;&#39;Inflation Reduction Act&quot; de Joe Biden qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lejdd.fr/Sport/tunisie-france-emmanuel-macron-a-washington-les-5-infos-dont-vous-allez-entendre-parler-demain-4151075'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie-France, Emmanuel Macron à Washington... Les 5 infos dont ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP9GMdBuq1LlQzqP3__UCV2rH2TRiJLAuAy_LGaxKOGkkoptn6_BIE63iAZV8xRd6LjVcAy5ZF" alt="Tunisie-France, Emmanuel Macron à Washington... Les 5 infos dont ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chaque soir, le JDD vous présente les infos dont vous allez entendre parler le lendemain. Aujourd&#39;hui, on s&#39;intéresse au prochain match des Bleus à la Coupe&nbsp;...</p></div>
            </div>
        </a><a href='https://positivr.fr/dans-une-lettre-ouverte-a-emmanuel-macron-15-associations-reclament-deux-jours-sans-chasse/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dans une lettre ouverte à Emmanuel Macron, 15 associations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSONcEVjiWPEQS5V4_qDWdS4Zy-jWvvJpvLvmyjJMxJJQYSBpYFOzE63Int28YkBF6oHnyn17lW5Q" alt="Dans une lettre ouverte à Emmanuel Macron, 15 associations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>S&#39;appuyant sur des sondages, ces associations de protection de la nature espèrent convaincre le Président de la République.</p></div>
            </div>
        </a>
        </Template></>;
}