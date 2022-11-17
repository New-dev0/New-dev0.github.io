import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aymeric Caron</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aymeric Caron"/>
        <meta name="description" content="Trending News about Aymeric Caron" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aymeric Caron</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/15/0/72/3130/2087/1440/960/60/0/2fdc2bd_1668504828856-000-sa1ny.jpg" alt="Aymeric Caron"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/politique/article/2022/11/16/interdiction-de-la-corrida-la-proposition-du-depute-insoumis-aymeric-caron-divise-sur-les-bancs-de-l-assemblee_6150147_823448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interdiction de la corrida : la proposition du député « insoumis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMVHJywe0qzUujAkJTwfu5CKC6CBXnUZ120lu3C9FJVh5SxT7-Y0WPhlAkGPQqZXu-jH4tyIzK" alt="Interdiction de la corrida : la proposition du député « insoumis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre défense d&#39;une tradition locale et condamnation d&#39;une maltraitance animale, l&#39;ensemble des partis affiche en interne des positions rarement uniformes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/actu/debats-societe/interdiction-de-la-corrida-aymeric-caron-critique-le-separatisme-et-le-poids-des-lobbies-7900206748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interdiction de la corrida : Aymeric Caron critique le &quot;séparatisme&quot; et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8sFA3e-XJ4drZ1EnnpOnhGTXEIi0wgCejWKDg0JWn1sDxHZEzgOFlD_NjoPRqXzXwPF9PoGvB" alt="Interdiction de la corrida : Aymeric Caron critique le &quot;séparatisme&quot; et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le député Aymeric Caron défend sa proposition pour interdire la corrida. Il confie avoir subi des pressions de la part de lobbies.</p></div>
            </div>
        </a><a href='https://www.marianne.net/politique/jean-rene-cazeneuve-depute-renaissance-aymeric-caron-a-t-il-deja-vu-une-corrida'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jean-René Cazeneuve, député Renaissance : &quot;Aymeric Caron a-t-il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgFLflJbaWlv9CABhNDuyu896sHKhKM5oWSZ-dbdPSk4146HWUOLLN2HItK1U0mSRrgoKKvOS5" alt="Jean-René Cazeneuve, député Renaissance : &quot;Aymeric Caron a-t-il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Commission des lois de l&#39;Assemblée nationale doit examiner, ce mercredi 16 novembre, les textes émanant de la niche parlementaire de la France insoumise.</p></div>
            </div>
        </a><a href='https://lcp.fr/actualites/abolition-de-la-corrida-la-proposition-de-loi-d-aymeric-caron-repoussee-en-commission'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abolition de la corrida : la proposition de loi d&#39;Aymeric Caron ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQx6VJY0sHB7lS7l5QGqr13tP356mkd37o5mLiJVu3BFDBEBoWuEdLI7bi8iMYDEDsPTJrHsXfn" alt="Abolition de la corrida : la proposition de loi d&#39;Aymeric Caron ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La commission des lois de l&#39;Assemblée a rejeté, mercredi 16 novembre, la proposition de loi visant à abolir la corrida, présentée par La France insoumise.</p></div>
            </div>
        </a><a href='https://www.lejdd.fr/Politique/interdiction-de-la-corrida-la-proposition-du-depute-insoumis-aymeric-caron-rejetee-par-lassemblee-4148137'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interdiction de la corrida : la proposition du député insoumis Aymeric ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYSvayiIAXvD-lX0kMCAbNyaB0lujXp2Z1ZbLG90wdyx-SLwNrlbggN2liJExmD_KB6VooWHkw" alt="Interdiction de la corrida : la proposition du député insoumis Aymeric ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les députés ont rejeté une première fois mercredi en commission la proposition d&#39;interdiction de l&#39;élu LFI antispéciste Aymeric Caron.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/16/abolition-de-la-corrida-la-proposition-de-loi-daymeric-caron-rejetee-en-commission-des-lois-10806846.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abolition de la corrida : la proposition de loi d&#39;Aymeric Caron rejetée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzLcM-lZC5KQlHlkHceex1A2oS9v7QAttMHl0OWsNp_PseCFbnOLJivyztC3gGOpRaPrnpy_sf" alt="Abolition de la corrida : la proposition de loi d&#39;Aymeric Caron rejetée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un amendement déposé par le député gardois Yoann Gillet pour supprimer l&#39;article unique de la PPL a été approuvé ce mercredi en commission des lois.</p></div>
            </div>
        </a>
        </Template></>;
}