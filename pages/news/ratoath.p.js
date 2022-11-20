import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ratoath</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ratoath"/>
        <meta name="description" content="Trending News about Ratoath" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ratoath</h1>
            <Image width={800} height={500} src="https://imengine.public.prod.cmg.infomaker.io?uuid=95b5768d-8e9a-5af7-a7ae-4de64d2e56c1&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84606&x=0&y=0&width=1200&height=675" alt="Ratoath"/>
            <h3>Recent News</h3>
            <a href='https://www.meathchronicle.ie/2022/11/19/disappointment-for-ratoath/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disappointment for Ratoath | Meath Chronicle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSA--1JE9jcScX-PhUpfZWn3GpvycMjz2o7mHfSyG_kU7y0pX_CFJaUYE92VoKjmJOmT7yK6Yvj" alt="Disappointment for Ratoath | Meath Chronicle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disappointment for Ratoath &middot; SCORERS &middot; The Downs - Luke Loughlin 0-6 two frees; Niall Mitchell 1-1 frees; Ciaran Nolan 1-0; Andrew Kilmartin 0-2; Johnathon Lynam&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rte.ie/sport/football/2022/1119/1337081-the-downs-fend-off-ratoath-in-leinster-thriller/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Downs fend off Ratoath in Leinster thriller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdVl7G7wDMkF4FHMU8dquggvGeXT7EaIudGYIkWtdPY2y9qebwNOQ9L5yXP305SaYfOtJr8Cqd" alt="The Downs fend off Ratoath in Leinster thriller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Exactly 50 years after their last AIB Leinster club SFC final appearance, Westmeath&#39;s The Downs are back in another provincial decider after a thrilling&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/sport/gaa/arid-41010599.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Downs survive late Ratoath onslaught to reach final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDFAj2FVqSLSrwsK4I84gTJKoOq1IMElPGo-Ef62Xrtrdq-po1jXF8_cajlop2Vi5VmZCNNWGG" alt="The Downs survive late Ratoath onslaught to reach final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AIB Leinster Club SFC semi-final: The Downs (Westmeath) 2-12 Ratoath (Meath) 0-17. A neat 50 years after they last contested an AIB Leinster club football&nbsp;...</p></div>
            </div>
        </a><a href='https://www.the42.ie/the-downs-ratoath-5924623-Nov2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Westmeath champs The Downs advance to first Leinster final in 50 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQb-_wjJA5ejxenspj1O2yqYSfrqbRCDGNgKRhOGZp-HcRy1CekzzH7oHgzcBoEI3rb21VVQncL" alt="Westmeath champs The Downs advance to first Leinster final in 50 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Westmeath champions The Downs defeated Ratoath by a point in this evening&#39;s Leinster semi-final.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/sport/gaelic-games/2022/11/19/the-downs-bridge-half-century-gap-as-they-hold-off-ratoath-revival-to-make-leinster-final/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Downs bridge half-century gap as they hold off Ratoath revival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnIxc2IVSPyBkROENuJED8ai2aK55Nxr0iQ6gCCmvbQLEal6ewWjCNK4Ij5xHhjEHFy8YPD6GI" alt="The Downs bridge half-century gap as they hold off Ratoath revival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luke Loughlin scores five points to help Westmeath side secure final spot for the first time since 1972.</p></div>
            </div>
        </a><a href='https://www.lmfm.ie/news/sport/recap-dunshaughlin-and-castletown-into-their-respective-leinster-finals-as-ratoath-and-cooley-bow-out/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Dunshaughlin and Castletown into their respective Leinster ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjg0NxWOU4IYP2PugZBq2jVEt61yc2oyTg2plsaz_6dIp8f2nOVBRy5xJVcxqgY3PV_7PGAFPg" alt="Recap: Dunshaughlin and Castletown into their respective Leinster ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Four local teams were in action on Leinster Club Football Championship semi-final day.</p></div>
            </div>
        </a><a href='https://www.independent.ie/sport/gaelic-games/gaelic-football/the-downs-claim-place-in-leinster-club-sfc-final-after-croke-park-thriller-against-ratoath-42157642.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Downs claim place in Leinster Club SFC final after Croke Park ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTztmISh5jf0ORtt1yplZ-vMbNiKM5qTLksgFMwTH3LDoIOyv-dSwo_dWiAf-t1xtZBnaZZ1uDj" alt="The Downs claim place in Leinster Club SFC final after Croke Park ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The crowd huddled under the cover in the Lower Hogan Stand. And they were soon enjoying a cracker of a match. An absolute thriller of a semi-final. The Downs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newstalk.com/podcasts/otb-gaa-on-off-the-ball/the-downs-through-to-leinster-final-an-emotional-david-brady-player-of-the-match-luke-loughlin-and-elated-lar-wall'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>THE DOWNS THROUGH TO LEINSTER FINAL | An emotional David ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScK9vOmyM3Vg_wD-3i_VVChbBTqgNCtCRNltnU4xE3TFHZSZ9aBz5Rldf4m4EZ3qYLqgh3pg2X" alt="THE DOWNS THROUGH TO LEINSTER FINAL | An emotional David ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aisling O&#39;Reilly caught up with both sets of managers as well as the player of the match following The Downs GAA&#39;s victory over Ratoath in the Leinster&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}