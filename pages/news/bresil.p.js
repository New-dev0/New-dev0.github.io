import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bresil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bresil"/>
        <meta name="description" content="Trending News about Bresil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bresil</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/3edbb19a-5aaf-11ed-ac80-005056bfb2b6/w:1280/p:16x9/2022-11-01T203550Z_1990957345_RC27DX9KJ6S6_RTRMADP_3_BRAZIL-ELECTION-BOLSONARO.JPG" alt="Bresil"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/am%C3%A9riques/20221122-br%C3%A9sil-le-parti-de-jair-bolsonaro-d%C3%A9pose-un-recours-contre-le-r%C3%A9sultat-de-la-pr%C3%A9sidentielle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil: le parti de Jair Bolsonaro dépose un recours contre le résultat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCN7uYls0msIR4USd0Bkd6sovF2c9Jyd6q-qqTdR5z4OhNegpq8AoFYYsq5xeQ91bgd9Z5S0AA" alt="Brésil: le parti de Jair Bolsonaro dépose un recours contre le résultat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le parti du président sortant a déposé un recours en annulation partielle du scrutin, alors que quelques manifestants continuent de bloquer des routes et de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lesechos.fr/monde/ameriques/jair-bolsonaro-conteste-sa-defaite-devant-le-tribunal-superieur-electoral-du-bresil-1881749'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jair Bolsonaro conteste sa défaite devant le tribunal supérieur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSolXrs9jFgRDlPK9Dk2DOavmptZ4BLZXhN7eP3Q_EeP4Am6oeShYcuVLO-VjiSx-53Gl8R3vXp" alt="Jair Bolsonaro conteste sa défaite devant le tribunal supérieur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président sortant du Brésil, resté très discret depuis sa défaite face à Lula le 30 octobre dernier, a déposé un recours pour contester ce résultat en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.france24.com/fr/am%C3%A9riques/20221122-au-br%C3%A9sil-jair-bolsonaro-d%C3%A9pose-un-recours-pour-contester-le-r%C3%A9sultat-de-la-pr%C3%A9sidentielle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Au Brésil, Jair Bolsonaro conteste en justice le résultat de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSregcayoaSM4FlEOYlZ_ez_wWP12WH69_mDgySCVTHNLfAi3Qb6qLl-Xr0Xx78tWikC1At7eJP" alt="Au Brésil, Jair Bolsonaro conteste en justice le résultat de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président sortant du Brésil, Jair Bolsonaro, a déposé mardi un recours contre le résultat de l&#39;élection présidentielle du mois d&#39;octobre et demande au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.humanite.fr/monde/bresil/bresil-lula-ne-gouverne-pas-pour-la-gauche-mais-pour-l-ensemble-des-travailleurs-771864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil. « Lula ne gouverne pas pour la gauche mais pour l&#39;ensemble ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJsoI5IRy6-UAvg_zewGnQ00oN_wODtOiQ8eXZnuc9tNC1ze1_F7PtxSyna-0CXBN4r7mP_Fit" alt="Brésil. « Lula ne gouverne pas pour la gauche mais pour l&#39;ensemble ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Da Silva Santos, analyste des enjeux environnementaux au Brésil pour Leaks podcast, a fait campagne pour l&#39;élection de Lula. Quels sont les défis que le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/flash-actu/bresil-le-parti-de-bolsonaro-demande-l-annulation-d-une-part-des-voix-de-lula-20221122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil : le parti de Bolsonaro demande l&#39;annulation d&#39;une part des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGlvllNaElwp88KBNrt4xUPVmWbCSCmm1oAV7f-aa_6naIgzA_NRBFJ-n5zLlPYmZndL7G4psi" alt="Brésil : le parti de Bolsonaro demande l&#39;annulation d&#39;une part des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le parti du président brésilien Jair Bolsonaro a demandé mardi au Tribunal supérieur électoral (TSE) l&#39;annulation des voix provenant de plus de...</p></div>
            </div>
        </a><a href='https://www.challenges.fr/monde/bresil-bolsonaro-depose-un-recours-contre-le-resultat-de-la-presidentielle_836381'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil: Bolsonaro conteste le résultat de la présidentielle perdue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ2nX_RTmGZKJrouLYLSSj8fUAyDwkjZlLP92Z2OPWnouVWqDbZz_rdioYuyd3QldHDH8bjulR" alt="Brésil: Bolsonaro conteste le résultat de la présidentielle perdue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>par Ricardo Brito et Carolina Pulice. BRASILIA (Reuters) - Le président sortant Jair Bolsonaro conteste le résultat de l&#39;élection présidentielle organisée&nbsp;...</p></div>
            </div>
        </a><a href='https://www.capital.fr/entreprises-marches/le-risque-credit-du-bresil-degrade-lula-contraint-le-conseil-bourse-1452614'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le risque crédit du Brésil dégradé, Lula contraint, le conseil Bourse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_aeMND9xkk2q9T2c4sKgKLw4g8k9p6MxQdIShp21ixfK5QWfT_MCToi2Goohn0nknOeGUxoAp" alt="Le risque crédit du Brésil dégradé, Lula contraint, le conseil Bourse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Bourse du Brésil donne des signes de fatigue. Si la tendance de long terme reste porteuse, les prochains mois pourraient être plus chahutés.</p></div>
            </div>
        </a><a href='https://www.lindependant.fr/2022/11/22/presidentielle-au-bresil-le-president-sortant-bolsonaro-depose-un-recours-contre-la-victoire-de-lula-10820551.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Présidentielle au Brésil : le président sortant Bolsonaro dépose un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvWUTWhXq0Kh6m_1kIE5qI7DJxjbutWbomUysIhbpZ4Vn91o6I_7AFjVo3jaoPt49Pq9qR3n3h" alt="Présidentielle au Brésil : le président sortant Bolsonaro dépose un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président sortant Jair Bolsonaro conteste le résultat de l&#39;élection présidentielle organisée le mois dernier au Brésil, conclue par sa défaite face à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.actusnews.com/fr/vergnet/cp/2022/11/22/vergnet-rayonne-au-bresil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VERGNET rayonne au Brésil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-Bf8q8VajwuM1zuVZjKvKHoSom9STh8fzA167-Wr0N9NPOQJ3R2NpbaKpW6sjKbTj7TINCb4s" alt="VERGNET rayonne au Brésil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au Brésil, c&#39;est fait ! Les activités de Vergnet prennent de l&#39;ampleur. En effet, plusieurs projets de centrales solaires photovoltaïques vont prochainement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/monde/bresil/jair-bolsonaro/bresil-jair-bolsonaro-depose-un-recours-contre-le-resultat-de-la-presidentielle-3cb4032c-6a9f-11ed-9372-84fe68898a5a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brésil. Jair Bolsonaro dépose un recours contre le résultat de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjnanzPBPT15NSc5YfOlT8w7_b2xtggVsXKbnE0-9U4iewVxcVZRsE3-Eav31M2zBYN4KE_B_7" alt="Brésil. Jair Bolsonaro dépose un recours contre le résultat de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président sortant Jair Bolsonaro conteste le résultat de l&#39;élection présidentielle organisée en octobre au Brésil, conclue par sa défaite face à Luiz&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}