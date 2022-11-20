import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tonneins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tonneins"/>
        <meta name="description" content="Trending News about Tonneins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tonneins</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/63791fd171b4ec558e225915/large/image.jpg?v=1" alt="Tonneins"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/19/meurtre-de-vanessa-jai-vu-toute-cette-detresse-dans-leurs-yeux-declare-emu-le-maire-de-tonneins-10814256.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDEO. Adolescente enlevée et tuée : &quot;J&#39;ai vu toute cette détresse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdNwXQukTHvoYrPzniJqc45nK6waiavP1jmHacBrsQarj6D8Rzl5ewfQjnUBXKpdRDb-_S0mq5" alt="VIDEO. Adolescente enlevée et tuée : &quot;J&#39;ai vu toute cette détresse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le maire de Tonneins, Dante Rinaudo, a pris la parole ce samedi en début de soirée après le meurtre de Vanessa, collégienne de 14 ans, un drame qui a plongé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/nouvelle-aquitaine/tonneins-47400/adolescente-tuee-a-tonneins-ce-qu-il-faut-retenir-de-la-conference-de-presse-du-procureur-d-agen-24ccddc8-681b-11ed-8d42-b9ab4d04aa80'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adolescente tuée à Tonneins. Ce qu&#39;il faut retenir de la conférence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFvCSlnVxQVY-F-0Uq8aEI9azG2UlEZ6EawTch67LCKVxMJxIZuow6x_EIjcghTQkELiiLIFp_" alt="Adolescente tuée à Tonneins. Ce qu&#39;il faut retenir de la conférence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le procureur de la République d&#39;Agen (Lot-et-Garonne), Olivier Naboulet, a tenu une conférence de presse ce samedi 19 novembre 2022 après que le corps d&#39;une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dna.fr/faits-divers-justice/2022/11/19/une-adolescente-enlevee-a-ete-retrouvee-morte-un-homme-avoue-son-meurtre'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lot-et-Garonne. Adolescente de 14 ans enlevée à Tonneins et tuée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lot-et-Garonne. Adolescente de 14 ans enlevée à Tonneins et tuée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le suspect a « très rapidement » avoué &middot; Le suspect avait été condamné pour agression sexuelle &middot; Une cellule psychologique ouverte au collège de l&#39;adolescente.</p></div>
            </div>
        </a><a href='https://actu.fr/nouvelle-aquitaine/tonneins_47310/tonneins-meurtre-de-vanessa-le-suspect-a-dit-aux-gendarmes-qu-il-savait-pourquoi-ils-etaient-la_55322421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tonneins. Meurtre de Vanessa : &quot;Le suspect a dit aux gendarmes qu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAN8DX-ktsnbkC5PXDxJ87d3MDLNh9yRWbQ9RY3hOwM-kdaBS4cu4uHm-Dt0SAkdkwIs3_T5n0" alt="Tonneins. Meurtre de Vanessa : &quot;Le suspect a dit aux gendarmes qu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vanessa, adolescente de 14 ans, a été enlevée puis tuée à la sortie du collège à Tonneins (Lot-et-Garonne). Un homme de 31 ans est placé en garde à vue.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/police-justice/ce-que-l-on-sait-du-meurtre-de-vanessa-l-adolescente-de-14-ans-tuee-a-tonneins_AN-202211190389.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce que l&#39;on sait du meurtre de Vanessa, l&#39;adolescente de 14 ans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWyFIufe5FITuHruQItRaMtykyVBcjG4ClF9EKpkJ3vRwwLGQkznlCJCD2FfSv7isBlAHogob5" alt="Ce que l&#39;on sait du meurtre de Vanessa, l&#39;adolescente de 14 ans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le corps d&#39;une jeune fille de 14 ans a été retrouvé vendredi dans une maison abandonnée du Lot-et-Garonne, après les aveux d&#39;un homme de 31 ans qui a aussi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.petitbleu.fr/2022/11/19/adolescente-enlevee-a-tonneins-et-retrouvee-morte-ce-que-lon-sait-du-suspect-et-de-lenquete-10813771.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adolescente enlevée à Tonneins et retrouvée morte : ce que l&#39;on sait ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfzbqICV5ldI7f_KqOhMPapCpGcA4YQVkqahW6iUHgqfnPdKiahrzUhJsuX67VHhdQ30O4gv8i" alt="Adolescente enlevée à Tonneins et retrouvée morte : ce que l&#39;on sait ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le suspect est un homme de 31 ans, ex-intérimaire. Il était déjà connu de la justice pour des faits d&#39;agression sexuelle quand il était mineur. Il n&#39;avait pas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}