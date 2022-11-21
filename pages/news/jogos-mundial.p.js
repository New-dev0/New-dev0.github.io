import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos Mundial</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos Mundial"/>
        <meta name="description" content="Trending News about Jogos Mundial" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos Mundial</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2019/01/cropped-cropped-ndr9869-2-1.jpg?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Jogos Mundial"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/11/20/autarquias-apagam-ecras-gigantes-para-os-jogos-do-mundial-de-futebol/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autarquias “apagam” ecrãs gigantes para o Mundial de futebol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBcTkPyWqKzzL1rUyhmF4Cqos_BXxEMfRqliIM9GqYYiwUFP7RuSlrrRmmM2s1pNbpoKdbRCwb" alt="Autarquias “apagam” ecrãs gigantes para o Mundial de futebol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maioria das autarquias, incluindo Lisboa e Porto, optou por não criar &quot;fan zones&quot; para assistir aos jogos do Mundial de futebol no Qatar, mas recusa ao ECO&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/bares-alemaes-boicotam-jogos-do-mundial-15371392.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bares alemães boicotam jogos do mundial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRahTlMKrmP9CktNjK97Re68X2xNuX_1D1MUVA3HYpv4Py069MlDQko8CubQ3fh5J110EfJ2KGH" alt="Bares alemães boicotam jogos do mundial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para o dono de um bar em Colónia era mais importante tomar posição sobre o Qatar do que lucrar à custa do torneio. O boicote ganhou adeptos entre outros&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}