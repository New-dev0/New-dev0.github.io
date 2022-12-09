import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Johnny Hallyday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Johnny Hallyday"/>
        <meta name="description" content="Trending News about Johnny Hallyday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Johnny Hallyday</h1>
            <Image width={800} height={500} src="https://images.rtl.fr/~c/2000v2000/rtl/www/1428141-johnny-hallyday.jpg" alt="Johnny Hallyday"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.fr/culture/medias-people/johnny-par-laeticia-l-objectif-etait-de-montrer-que-c-etait-quelqu-un-d-unique-confie-william-karel-7900213951'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Johnny par Laeticia&quot; : l&#39;objectif était de &quot;montrer que c&#39;était quelqu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTD_f05tyiZPBitPkaFDtul0YvsimGAJ6SFkmwxlWtE6taXQShyFQxr-C3EWJWWQpI6K8rttE5K" alt="&quot;Johnny par Laeticia&quot; : l&#39;objectif était de &quot;montrer que c&#39;était quelqu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>William Karel, réalisateur du documentaire &quot;Johnny par Laeticia&quot;, revient sur la conception de ce film inédit diffusé par M6 ce jeudi.</p></div>
            </div>
        </a><a href='https://www.linternaute.com/musique/evenement/2684204-johnny-par-laeticia-ou-sont-laura-et-david-hallyday-dans-le-documentaire-m6/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Johnny par Laeticia&quot; : où sont Laura et David Hallyday dans le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOHzbGzsgYS2FFNQ5icRjUDmJcTW3SEHlRw6QkqSUTAJNiw-CQhUNFmrqUt0ygOmYObGbcrFrf" alt="&quot;Johnny par Laeticia&quot; : où sont Laura et David Hallyday dans le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JOHNNY HALLYDAY. Ce jeudi 8 décembre, M6 diffuse le documentaire &quot;Johnny par Laeticia&quot;, réalisé par William Karel, dans lequel la veuve du Taulier livre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/johnny-par-laeticia-en-larmes-laeticia-detaille-les-derniers-mois-de-vie-de-johnny-hallyday-1670182'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny par Laeticia : en larmes, Laeticia détaille les derniers mois ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8M7hB62CAYEjZzpxI6_fEz-1fpsXoJpvqVRkIf8mu2xGnEK9_z0Zrq8y4nw6SATbDN21Z_iW-" alt="Johnny par Laeticia : en larmes, Laeticia détaille les derniers mois ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 8 décembre, Laeticia Hallyday s&#39;est livrée comme jamais auparavant sur les derniers mois de vie de Johnny dans un documentaire, Johnny par Laeticia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/culture/people/johnny-hallyday/ces-fans-de-johnny-hallyday-vont-creer-un-memorial-a-saint-tropez-pour-se-recueillir-en-metropole-74b4860a-770d-11ed-bb87-77a7713d66c6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ces fans de Johnny Hallyday vont créer un mémorial à Saint-Tropez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEOvJlPnDDSF3iSLcpbuvRqoB_A_7bg38XvFyQk8lvILW9vx-5hcQjywPoyczPer8HNIgnPTF1" alt="Ces fans de Johnny Hallyday vont créer un mémorial à Saint-Tropez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les fans, ne pouvant aller s&#39;y recueillir, aimeraient trouver un autre lieu afin de lui rendre hommage et organiser des rassemblements. Le club Desperados,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/culture/encheres/johnny-hallyday-mylene-farmer-georges-brassens-leurs-souvenirs-aux-encheres-chez-drouot-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny Hallyday, Mylène Farmer, Georges Brassens... Leurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9ZoFFk6YpyH5wn2dfy-sKAqfFFNEXgiT65pXLeADC60k4upiEs5zeQDNUawDqe7b4UnOxz1Hu" alt="Johnny Hallyday, Mylène Farmer, Georges Brassens... Leurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disques d&#39;or, costumes de scène, mèches de cheveux, contrats, partitions, photos, micros sont dispersés samedi.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/musique/313908-johnny-par-laeticia-m6-pourquoi-david-hallyday-et-laura-smet-apparaissent-ils-si-peu-dans-le-documentaire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny par Laeticia (M6) : pourquoi David Hallyday et Laura Smet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Johnny par Laeticia (M6) : pourquoi David Hallyday et Laura Smet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 8 décembre dès 21h10, M6 diffuse le documentaire inédit et intime Johnny par Laeticia, dans lequel Laeticia Hallyday revient sur ses 23 années de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/culture/article/johnny-par-laeticia-sur-m6-un-documentaire-different-des-autres_211278.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Johnny par Laeticia » sur M6, un documentaire différent des autres</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK__Pl98P2IUjgiEJRh2IH2-CEpspDcrWEJGnz_tYfz_cZ7GnqvuWR2igJUjVQd3v2YuJ_08gD" alt="« Johnny par Laeticia » sur M6, un documentaire différent des autres" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cinq ans après la mort du chanteur de « Je te promets », M6 diffuse des images inédites filmées dans l&#39;intimité par Laeticia Hallyday.</p></div>
            </div>
        </a><a href='https://www.nostalgie.fr/artistes/johnny-hallyday/actus/johnny-hallyday-son-lien-a-lile-de-saint-barthelemy-70249225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny Hallyday : son lien à l&#39;île de Saint-Barthélemy - Nostalgie.fr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT45xSgQynyR5PvPi41lRy5QAWt4ZvuCoyikB1s2XG3Xty6dWElkCUQsDjovadTQCZrbynwAn4Q" alt="Johnny Hallyday : son lien à l&#39;île de Saint-Barthélemy - Nostalgie.fr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Johnny Hallyday repose à Saint-Barthélemy, dans les Caraïbes, une île que lui a fait découvrir Joe Dassin et dans laquelle il s&#39;était construit un havre de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francelive.fr/article/france-live/laeticia-hallyday-trois-choses-a-connaitre-sur-la-veuve-de-johnny-hallyday-7754677/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Laeticia Hallyday. Couple à trois, mariage, écart d&#39;âge avec Johnny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4vhBjZ8I_jwzTXdwGVhUCYijttPy10bYIqkSj6XYfEMbB1NthpUCFYKS7w_ZFuVMIiXfh8VHv" alt="Laeticia Hallyday. Couple à trois, mariage, écart d&#39;âge avec Johnny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Laetitia Hallyday a partagé pendant plus de 23 ans la vie de Johnny Hallyday. Cinq ans après la mort du chanteur, elle dévoile ce jeudi 8 décembre 2022 sur&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/il-a-souffert-comment-johnny-hallyday-a-vecu-le-desastre-de-las-vegas-et-les-moqueries-des-guignols-zaptv-744756'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Il a souffert » : comment Johnny Hallyday a vécu le « désastre » de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJd9yZC9SC40D7fgw-rmbTD36sazUlBHQNHvwKTCsrqKKvxYDAov6JMiLtYdrTzBzpl9Q-j3Ho" alt="« Il a souffert » : comment Johnny Hallyday a vécu le « désastre » de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jeudi 8 décembre 2022, la chaîne M6 diffusait le documentaire Johnny par Laeticia. La veuve de Johnny Hallyday a profité de ce temps de parole pour...</p></div>
            </div>
        </a>
        </Template></>;
}