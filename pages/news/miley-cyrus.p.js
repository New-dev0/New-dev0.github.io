import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Miley Cyrus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Miley Cyrus"/>
        <meta name="description" content="Trending News about Miley Cyrus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Miley Cyrus</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7421433/46-192287341.jpg" alt="Miley Cyrus"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/stars/miley-cyrus-amerikas-frechste-pop-zunge-wurde-30-und-was-sie-mit-dolly-parton-zu-tun-hat/402233910'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miley Cyrus: Amerikas frechste Pop-Zunge wurde 30 - und was sie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRByzHDEc_czGNeIGRmjq25wdYHQntR7b4qQPBdvyUwYjgaf3M7XBDQIm8MzrYonex7tNUs2ZIW" alt="Miley Cyrus: Amerikas frechste Pop-Zunge wurde 30 - und was sie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie schlug wirklich ein wie eine Abrissbirne (den Song „Wrecking Ball“ veröffentlichte sie 2013) – die Rede ist von Sängerin und Schauspielerin Miley Cyrus,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tt.com/artikel/30838413/drei-jahrzehnte-party-in-den-usa-miley-cyrus-wird-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Drei Jahrzehnte Party in den USA: Miley Cyrus wird 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8kiXShEhKidpBP3sdJCcSf01ffVGBgcZO7YkylMSRI6eRyo-T4ka_pUyVRMCUedUpceItVWjv" alt="Drei Jahrzehnte Party in den USA: Miley Cyrus wird 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amerika sah ihr beim Erwachsenwerden zu. Dabei wurde Miley Cyrus selbst zu einem prägenden Element der US-Kulturindus...</p></div>
            </div>
        </a><a href='https://www.gala.de/beauty-fashion/beauty/suess-bis-skandaloes--der-beauty-wandel-von-miley-cyrus-22934992.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vom Teenie-Star zur Skandalfigur: So krass hat sich Ex-Hannah ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTW457HlWBj3QW04SJNN20blQtf3yi1sl8ME9BiM5pHi-CkleAkYZo_d19cte18I4S6PZ0MomPY" alt="Vom Teenie-Star zur Skandalfigur: So krass hat sich Ex-Hannah ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der niedliche Teenie-Star hat sich seit Hannah-Montana-Zeiten sehr verändert: Mit knappen Outfits und rausgestreckter Zunge sorgte die Sängerin und&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/service/topeasy/lebenshilfe/6219104/Einfache-Sprache_Saengerin-und-Schauspielerin-Miley-Cyrus-wird-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sängerin und Schauspielerin Miley Cyrus wird 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyZdB7ADX4IE1hyz9nbaqrulogchnqsXaDZmzkRIrDSQ9NCFZJIWjaIyd_OQa7nLC01rKYSr3u" alt="Sängerin und Schauspielerin Miley Cyrus wird 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor mehr als 20 Jahren hatte Miley Cyrus bereits ihre 1. Rolle. Im Jahr 2006 wurde sie mit der Fernseh-Serie &quot;Hannah Montana&quot; weltbekannt.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/das-verbindet-capital-bra-miley-cyrus-und-julien-bam-82033372.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Capital Bra, Miley Cyrus und Julien Bam: Diese Stars haben heute ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiVve7iaGbLJ-G43Qbj3ojovHtHMPnAJNMqwb7Dun4vY3QF0GFwh_7HjWSORj8akxcD-6OPG9j" alt="Capital Bra, Miley Cyrus und Julien Bam: Diese Stars haben heute ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Und dann steht auf der Tagesordnung: Ausgefallene Partys, süße Kinderfotos und teure Geschenke! Doch wer feiert heute Geburtstag? Lesen Sie hier, welche Promis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.srf.ch/news/gesellschaft/miley-cyrus-wird-30-vom-teenie-idol-zum-schillernden-rockstar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miley Cyrus wird 30 - Vom Teenie-Idol zum schillernden Rockstar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQhujLbQ6I-JwHh6XJrtX1BqnyoQ9727gou5USn3SdmD2MNRRQhD6lesKRF7zZA2KuBK3jiod8" alt="Miley Cyrus wird 30 - Vom Teenie-Idol zum schillernden Rockstar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Hannah Montana» war einmal. Miley Cyrus hat sich zum Symbolbild für Provokation und Emanzipation entwickelt.</p></div>
            </div>
        </a><a href='https://www.bild.de/unterhaltung/leute/leute/miley-cyrus-ihr-weg-vom-disney-star-zur-provokanten-pop-saengerin-80872974.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miley Cyrus: Ihr Weg vom Disney-Star zur provokanten Pop ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsgN1zwtRS-8k-cpnjy7vsHm74VgRwCNFZnzxJ2uuidfezKzLIIENPGQ9FDVIr2vzpXKHTrA1c" alt="Miley Cyrus: Ihr Weg vom Disney-Star zur provokanten Pop ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie ist Sängerin, Schauspielerin, Aktivistin. Lesen Sie alles über Miley Cyrus und ihren Weg vom Kinderstar zum bejubelten Musik-Chamäleon!</p></div>
            </div>
        </a><a href='https://www.vip.de/cms/miley-cyrus-der-weg-von-der-disney-prinzessin-zur-pop-queen-5017577.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miley Cyrus: Der Weg von der Disney-Prinzessin zur Pop-Queen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmVxhb1dj6DZvhyP63oX9h4MOI67LXDHOpvhTvqZ1DXacgC1FiCtBOFizj2JvnNPmqYPlXo8o6" alt="Miley Cyrus: Der Weg von der Disney-Prinzessin zur Pop-Queen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Als &quot;Hannah Montana&quot; prägte Miley Cyrus eine ganze Generation - danach rechnete sie mit Disney ab. Heute wird die Sängerin 30 Jahre alt - ein Rückblick.</p></div>
            </div>
        </a>
        </Template></>;
}