import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Keylor Navas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Keylor Navas"/>
        <meta name="description" content="Trending News about Keylor Navas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Keylor Navas</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/22/3494903-71245228-2560-1440.jpg" alt="Keylor Navas"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.fr/football/coupe-du-monde/2022/mondial-2022-espagne-costa-rica-keylor-navas-oublie-au-psg-icone-absolue-des-ticos_sto9239109/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 / Espagne - Costa Rica / Keylor Navas, oublié au PSG ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgQdsx5Dvqdtun603VZ0AZGDrks8FkgvtLZy3qroWRl8034TItzCqsf94GdUSwhggWhJ8wCbmf" alt="Mondial 2022 / Espagne - Costa Rica / Keylor Navas, oublié au PSG ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE – Relégué au rang de remplaçant au Paris Saint-Germain, Keylor Navas reste une icône absolue au Costa Rica.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/ligue-1/psg--keylor-navas-regle-ses-comptes-avec-galtier--802263'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG : Keylor Navas règle ses comptes avec Galtier</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvB3Ve-dSOC47dZ5uBYpiYKGpFzrZa8d7Jz3RrKOiWAA6CYmWLjTRI6AHbgPFtZMhCk3BiDRAC" alt="PSG : Keylor Navas règle ses comptes avec Galtier" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Keylor Navas, qui n&#39;a pas joué le moindre match avec le Paris Saint-Germain, règle ses comptes avec Christophe Galtier.</p></div>
            </div>
        </a><a href='https://le10sport.com/football/mercato/mercato-psg-lenorme-aveu-de-keylor-navas-sur-le-real-madrid-622781'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercato - PSG : L&#39;énorme aveu de Keylor Navas sur le Real Madrid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdR2PZnTw0YOlhowqKjula6WinyLcl9E5afdeVIPzD-VG8wx53A5REP3Pk21NOa_1QyQWHCtR1" alt="Mercato - PSG : L&#39;énorme aveu de Keylor Navas sur le Real Madrid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant de briller avec le PSG, Keylor Navas s&#39;est fait un nom dans le football européen grâce à ses prestations avec le Real Madrid pendant plusieurs années.</p></div>
            </div>
        </a><a href='https://www.linternaute.com/sport/competitions/2679822-keylor-navas-present-a-la-coupe-du-monde-il-aurait-pu-mourir-a-la-naissance/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Keylor Navas : présent à la Coupe du monde, il aurait pu mourir à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQS6sy6tBl0RmITwL8mWhGw3sUsUIhWghfptOjruh1-I2xk4MtBCNHmfebuCKCVY70yJQiijeCE" alt="Keylor Navas : présent à la Coupe du monde, il aurait pu mourir à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sur le banc du PSG, Keylor Navas est la star de l&#39;équipe du Costa Rica et sera très attendu pour cette Coupe du monde.</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a326645117091778907-psg-keylor-navas-sen-prend-a-christophe-galtier'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG : Keylor Navas s&#39;en prend à Christophe Galtier</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNMxmBGjj7Xn7EpsxnNrIjtCapGwA9ykdUEl4PaTx_UuxGdXIq50iyD_M61Js-WGpRLsKzSaEO" alt="PSG : Keylor Navas s&#39;en prend à Christophe Galtier" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doublure de Gianluigi Donnarumma au PSG, le Costaricain s&#39;est confié sur sa situation dans la capitale. Et il n&#39;a pas hésité à égratigner son coa (.</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/psg-keylor-navas-s-exprime-sur-le-mondial-avec-le-costa-rica-et-ses-souvenirs-de-coupe-du-monde-807385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG : Keylor Navas s&#39;exprime sur le Mondial avec le Costa Rica et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThGWdrb6tnWhYij53aRILZFzSNM7xVy7vML0chu3EIsXepymmhGWV1Dm_ckmDpSyr5w9VONrdv" alt="PSG : Keylor Navas s&#39;exprime sur le Mondial avec le Costa Rica et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que sa Coupe du Monde avec le Costa Rica débute aujourd&#39;hui, Keylor Navas s&#39;est exprimé ! Zapping Onze Mondial Guardiola compare Haaland à Cruyff et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/coupe-du-monde/coupe-du-monde-costa-rica-keylor-navas-seul-au-monde-bc0cb2d6-5082-11ed-a150-b59977897a18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Costa Rica, Keylor Navas seul au monde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPuCKHwRhDloXBhgxZIcyAfu5qUHLT1UeWJUKCl4QBMuii7Ez1PY2OImoD99buCbexlThtRlr_" alt="Coupe du monde. Costa Rica, Keylor Navas seul au monde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tout dernier qualifié pour la Coupe du monde 2022 au Qatar, le Costa Rica aura dû attendre le 14 juin et une victoire contre la Nouvelle-Zélande (1-0) pour&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}