import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-video-cover/1500000001712637/640/0" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Tennis/Actualites/Novak-djokovic-disposera-bien-d-un-visa-temporaire-pour-disputer-l-open-d-australie/1365283'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic disposera bien d&#39;un visa temporaire pour disputer l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHraAQPkDvJnw442LfFkq_WGpylvkOvvGo0aMhiynZM7cM8SMrXZdqRyTvLGo97K0cMSYmeUuu" alt="Novak Djokovic disposera bien d&#39;un visa temporaire pour disputer l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interdit d&#39;Open d&#39;Australie et chassé de l&#39;île en janvier dernier, Novak Djokovic s&#39;est vu attribuer un visa temporaire par le ministère de l&#39;Immigration du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/tennis/rafael-nadal/tennis-rafael-nadal-se-rejouit-de-la-presence-de-novak-djokovic-au-prochain-open-d-australie-c56b6808-669f-11ed-9c6a-75ffb43b0cc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis. Rafael Nadal se réjouit de la présence de Novak Djokovic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTi7b1APoEHmDnhEDO9wgswWuHX_Z2WsKMMOkiJEV2VudIbpomeKxX4jJvBqNNPiT9gzAFguMpz" alt="Tennis. Rafael Nadal se réjouit de la présence de Novak Djokovic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Espagnol Rafael Nadal s&#39;est exprimé sur l&#39;autorisation accordée à Novak Djokovic de disputer le prochain Open d&#39;Australie. Il décrit « la meilleure&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welovetennis.fr/atp/atp-finals/hantuchova-ce-que-fait-novak-djokovic-est-de-la-perfection-pure'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hantuchova : « Ce que fait Novak Djokovic est de la perfection pure »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyPmPfxOW2RFrZIoVXbKDBNK2qaAuKOLpYl4ByETAS3H376r3bAyvBzH-qwU8137n65kVAN2o_" alt="Hantuchova : « Ce que fait Novak Djokovic est de la perfection pure »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Consultante pour Amazon Prime, Daniela Hantouchova, ancienne 5 <sup>e</sup> joueuse mondiale et proche de Nole, s&#39;est dite éblouie par la forme du 8 <sup>e</sup> joueur mondial. « C&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sports/tennis/open-d-australie/tennis-novak-djokovic-annonce-beneficier-d-un-visa-pour-disputer-l-open-d-australie_5478027.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis : Novak Djokovic annonce bénéficier d&#39;un visa pour disputer l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLyCQscYl57gknTyjJBi76612RjM3Y2HIfuOzzVWVvEbJd6vJllCH3uXnkrxS-ibZCCS9t9Vej" alt="Tennis : Novak Djokovic annonce bénéficier d&#39;un visa pour disputer l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après son expulsion de Melbourne l&#39;an passé, le Serbe, qui refuse toujours d&#39;être vacciné contre le Covid, prendra bien part au tournoi le 16 janvier&nbsp;...</p></div>
            </div>
        </a><a href='https://le10sport.com/tennis/tennis-une-grande-nouvelle-tombe-pour-djokovic-nadal-senflamme-622068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis : Une grande nouvelle tombe pour Djokovic, Nadal s&#39;enflamme</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSvmEbSnMEPOVAsObD-_yIP0oJs94sLmoy6pTFvr0L4ifHdWd7p_NeVC9fmYcfqREOK6aEGVCgg" alt="Tennis : Une grande nouvelle tombe pour Djokovic, Nadal s&#39;enflamme" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une excellente nouvelle est tombée ces dernières heures : Novak Djokovic pourra bel et bien participer à l&#39;Open d&#39;Australie. Après la polémique suscitée en…</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/tennis/atp-finals/2022/atp-finals-novak-djokovic-qualifie-pour-les-demies-apres-sa-victoire-face-a-andrey-rublev_sto9228991/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals - Novak Djokovic qualifié pour les demies après sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmgPoyJQJUE964hUL3wlnlAwpiPVuB8fUJnKkPRrL1mXw34KYQyMvzWRkafs2oMDVZX7bojx8Q" alt="ATP Finals - Novak Djokovic qualifié pour les demies après sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MASTERS TURIN - Novak Djokovic a passé la vitesse supérieure. Solide en première manche puis très convaincant dans la deuxième face à Andrey Rublev (6-4,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Tennis/Actualites/Novak-djokovic-bat-andrey-rublev-et-se-qualifie-pour-les-demi-finales-du-masters-de-turin/1365171'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic bat Andrey Rublev et se qualifie pour les demi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5vFSFZL1n96-YFjyhakj_gfCB4iabBNAp3vh1A8aIl0jDwxyVJ16wt8cAKWhv-vB7L_H7T4r9" alt="Novak Djokovic bat Andrey Rublev et se qualifie pour les demi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après sa victoire contre le Russe Andrey Rublev (6-4, 6-1), ce mercredi, lors du deuxième match du groupe rouge, Novak Djokovic s&#39;est qualifié pour les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/tennis/novak-djokovic/direct-djokovic-rublev-suivez-le-match-du-masters-atp-de-turin-en-live-d43aaf0e-65ac-11ed-9023-3db2565e335c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters ATP de Turin. Trop fort pour Andrey Rublev, Novak Djokovic ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR405BRNpp2waSB7J4Ff0B4MdhW8JK-5FwbGJqx10niyb0p3Pp1rhzzYNY5h7S8FYqFEGwymbXf" alt="Masters ATP de Turin. Trop fort pour Andrey Rublev, Novak Djokovic ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux matches et autant de victoires pour Novak Djokovic au Masters ATP. Ce mercredi à Turin, le Serbe a dominé sans trembler Andrey Rublev (6-4, 6-1),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/radiofrance/podcasts/la-selection-sports/novak-djokovic-tres-heureux-de-pouvoir-participer-a-l-open-d-australie-8148384'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic &quot;très heureux&quot; de pouvoir participer à l&#39;Open d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4TkkQRhwu5CKq0m7MSgZijX3rbVvLDJVcwbWw2ChFssqQJX01LlQZpM0j6RIg7Nbqw340vnoR" alt="Novak Djokovic &quot;très heureux&quot; de pouvoir participer à l&#39;Open d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic était interdit de territoire australien car il n&#39;était pas vacciné contre le covid. Au début de l&#39;année 2022, il avait donc été expulsé du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/tennis/open-d-australie/2022/open-d-australie-novak-djokovic-confirme-avoir-recu-un-visa_sto9229057/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Open d&#39;Australie - Novak Djokovic confirme avoir reçu un visa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgVo-SkWxbmXY_wTTVo_z8AZPTRm2qiDiICOqnQGEUlwC8hCdROnKgy62lYy_f_6pC_eZ5i-Ra" alt="Open d&#39;Australie - Novak Djokovic confirme avoir reçu un visa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;J&#39;étais très heureux de recevoir la nouvelle hier (mardi). C&#39;est un soulagement&quot;, a-t-il confié en marge des Masters ATP de fin d&#39;année à Turin.</p></div>
            </div>
        </a>
        </Template></>;
}