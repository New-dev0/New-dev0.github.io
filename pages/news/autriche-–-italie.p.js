import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Autriche – Italie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Autriche – Italie"/>
        <meta name="description" content="Trending News about Autriche – Italie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Autriche – Italie</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/verratti-a-rate-son-match-en-autriche-p-ponente-presse-sports/1500000001713916/0:0,1354:903-640-427-75/24440.jpg" alt="Autriche – Italie"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Amical-l-italie-perd-logiquement-en-autriche/1365957'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amical : l&#39;Italie perd logiquement en Autriche</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIszfz3iZw6Ga6jpsIizTpe9NKDnWiYUOYiLWzE15tvZLrrKaAnA9AK3QPpYeGZQBFRRtiLhvk" alt="Amical : l&#39;Italie perd logiquement en Autriche" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inférieure à son adversaire, l&#39;Italie s&#39;est logiquement inclinée en Autriche (0-2) lors d&#39;un amical ce dimanche.</p></div>
            </div>
        </a><a href='https://www.sofoot.com/en-direct-autriche-italie-521739.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Revivez Autriche - Italie (2 - 0)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGfeTge9MfIkaO07kBvlOVuQTKasBuZakSdXSLiU26VdK_LbEoDjqdSnEEDUsv4S4c67YdWb8i" alt="Revivez Autriche - Italie (2 - 0)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>94&#39; : On se retrouve évidemment demain sur sofoot.com pour la suite des festivités au Qatar. Ça ...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a3418339181931308818-amical-grande-absente-du-mondial-litalie-sombre-contre-lautriche'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amical : grande absente du Mondial, l&#39;Italie sombre contre l&#39;Autriche !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSo2WZ3PQ8E3Dy4ExTCyGDjqm0Td8BwDL3Sn_H7x9St32WVB_lp653H9fwB3d1ZKbFJKIyAxTJv" alt="Amical : grande absente du Mondial, l&#39;Italie sombre contre l&#39;Autriche !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dépassés collectivement dans le premier acte, les hommes de Roberto Mancini ont subi les assauts de Marcel Sabitzer et consorts. Malgré une seconde période plus&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/selections/autriche-italie-la-squadra-azzurra-s-incline-a-vienne-en-amical-807029'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autriche-Italie : la Squadra Azzurra s&#39;incline à Vienne en amical !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEOH6ByLW6Yi-NeW6m-yMdSFGW9AZaCZY-ahVEFSoYRwwI9GoKYFLae5vOLFx7gJcAyC9D8ipg" alt="Autriche-Italie : la Squadra Azzurra s&#39;incline à Vienne en amical !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans ce duel d&#39;absents du Mondial, l&#39;Italie s&#39;est incliné 2 - 0 en Autriche. Zapping Onze Mondial Les plus beaux maillots de Ligue 1 Uber Eats édition 2022/&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/football-l-italie-s-incline-en-autriche-lors-d-un-match-amical-b46e0768-691f-11ed-a603-4a3131a74a26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football. L&#39;Italie s&#39;incline en Autriche lors d&#39;un match amical</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoW087cuTTK8Pjqxhrt7WWmVRuzfc9fDoauNe_QImJL-cNLD1L54cLsgRfxDivgoCqd60h8vGb" alt="Football. L&#39;Italie s&#39;incline en Autriche lors d&#39;un match amical" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malgré les présences des Parisiens Marco Verratti et Gianluigi Donnarumma sur la pelouse pour l&#39;Italie, ce sont bien les Autrichiens qui ont dominé, notamment&nbsp;...</p></div>
            </div>
        </a><a href='https://madeinfoot.ouest-france.fr/infos/article-amical-l-italie-tombe-face-a-l-autriche-397403.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amical : L&#39;Italie tombe face à l&#39;Autriche</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRD47M8k8FikhKirdhIq95WaOzB5ycic-ZHt3CG1J5tvXL7NolK_pb6t5WEwguyDtoN7VCZOWNm" alt="Amical : L&#39;Italie tombe face à l&#39;Autriche" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foot : Le 20/11/2022 23:15, Amical - L&#39;Italie tombe face à l&#39;Autriche. Pour son deuxième et dernier match amical du mois de novembre, l&#39;Italie a perdu,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.be/info/belgique/politique/l-autriche-bat-l-italie-2-0-et-met-fin-a-une-attente-de-62-ans-1416524.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;Autriche bat l&#39;Italie 2-0 et met fin à une attente de 62 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW0E8tq6kdi2jxKJgpOhgzPjbCgkQn9mju7mQBEpntJfMvY7ybtyEcEMJ6QJ4vBtu9IGjz9tFy" alt="L&#39;Autriche bat l&#39;Italie 2-0 et met fin à une attente de 62 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Belga) Grande absente du Mondial au Qatar, l&#39;Italie disputait un match amical face à l&#39;Autriche, dimanche soir à Vienne. Les champions d&#39;Europe se ...</p></div>
            </div>
        </a>
        </Template></>;
}