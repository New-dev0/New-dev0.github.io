import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1117%2Fr1092299_1296x729_16%2D9.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/fifa-world-cup/story/4805208/argentinauruguay-take-4,000-pounds-of-meat-to-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina, Uruguay take 4000 pounds of meat to World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqGNyKtUg7OdRCl4UYRo0Ovsbz927XLrmv3oed-vakSqjakSFgWSnisXg_kv8N-0LtgsdN6_Xx" alt="Argentina, Uruguay take 4000 pounds of meat to World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The national teams of Argentina and Uruguay have taken a combined 4000 pounds of meat with them to the World Cup for asados.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-2022-argentina-joaquin-correa-nico-gonzalez-ruled-out-qatar-wc-22-with-injury/article66150964.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Argentina&#39;s Joaquin Correa, Nico Gonzalez ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpmQkNY8s-JQwS0VR_zVCs0gzaHC0LuXSIIInbycohiweymXDcW05BP07wRt3WySIeO425C0uJ" alt="FIFA World Cup 2022: Argentina&#39;s Joaquin Correa, Nico Gonzalez ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina forwards Nico Gonzalez and Joaquin Corrrea are ruled out of the FIFA World Cup in Qatar after injuries. Gonzalez, who has 21 caps to his name,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/story/2022-11-17/gracias-futbol-comic-argentina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The World Cup means rooting for Argentina and making new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRxHeIBLy7trDPfT29tR4mJXZDJmAi61QXBg3wf4PsvEnHaEM5daPILkV14U_uN3xH4Z4zwo44" alt="The World Cup means rooting for Argentina and making new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Even though I&#39;m not a devoted football follower, I love the occasions that bring us together and the memories we create along the way. As a person who loves&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/explained-why-argentina-and-uruguay-are-bringing-2000-pounds-of-meat-to-qatar/blt783e65487b6ffb80'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explained: Why Argentina and Uruguay are bringing 2000 pounds ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQolQMQt3EEhfFTsHr-I4iZMKfVDT4Nn2UJYrGrj-nRhQe_5wT36Mw85srH_eiwa7JfdJyneEj" alt="Explained: Why Argentina and Uruguay are bringing 2000 pounds ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WHAT HAPPENED? With the Qatar World Cup firmly on the horizon, all 32 nations are preparing accordingly to put together their strongest tournament possible.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/argentina-arg/story/4805317/argentina-call-up-angel-correa-replace-injured-nicolas-gonzalez'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina call Correa, Almada for World Cup after injuries</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzliFkFOMlRppFioVwMLWMe_EscaA6855w74P4Jm4Fi8RWu0FFMbzSRVVp4OQK5HrbKIfsTcpS" alt="Argentina call Correa, Almada for World Cup after injuries" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina have called up Angel Correa as a replacement for injured striker Nicolas Gonzalez, who will miss the World Cup with a muscular injury.</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/correa-replaces-injured-gonzalez-argentina-world-cup-squad-2022-11-17/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Injured Correa and Gonzalez out of Argentina World Cup squad</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFAywcLwJ4FsepKWLYjOXtku2J_pNsBPO2XIJBM_JrUuwgmqLzp_pywwj-p7wzrYOkSajWNWbg" alt="Injured Correa and Gonzalez out of Argentina World Cup squad" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina&#39;s Joaquin Correa and Nicolas Gonzalez have been ruled out of the World Cup due to injuries, the Argentine Football Association (AFA) said on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.barrons.com/news/argentina-forward-gonzalez-out-of-world-cup-01668717306'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina Forward Gonzalez Out Of World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Argentina Forward Gonzalez Out Of World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina forward Nicolas Gonzalez suffered an injury in training on Thursday and is out of the World Cup, his country&#39;s football federation (AFA) said.</p></div>
            </div>
        </a><a href='https://www.madhyamam.com/lifestyle/woman/argentina-fans-photo-gallery-house-1097450'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>അർജന്റീന ഈ വീടിന്റെ ഐശ്വര്യം ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwnT7WSLyAsnjFwU5FxzqsfHlPriUQrpfsNBh7ON-diB1MfSh4a4UVSTdlnaxFd8aJJVlnH8p2" alt="അർജന്റീന ഈ വീടിന്റെ ഐശ്വര്യം ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>കണ്ണൂർ: ഇടതുവശത്ത് ഇതിഹാസമായ ഡീഗോ മറഡോണയുടെ ഒരു വലിയ ചിത്രമുണ്ട്, തലക്കു ചുറ്റും&nbsp;...</p></div>
            </div>
        </a><a href='https://football-italia.net/official-fiorentina-star-nico-gonzalez-dropped-from-argentinas-world-cup-squad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Official: Injured Fiorentina star Nico Gonzalez dropped from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKgfZTtSr46EesdXBjWVuCM4fJCQqd1I6XJZXLzoV8ZHuFUB4EnggDUQhq9AYSbYJk1v9_E_Et" alt="Official: Injured Fiorentina star Nico Gonzalez dropped from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fiorentina winger Nico Gonzalez won&#39;t take part in the World Cup with Argentina following an injury during today&#39;s training session.</p></div>
            </div>
        </a><a href='https://wtvbam.com/2022/11/17/soccer-correa-replaces-injured-gonzalez-in-argentina-world-cup-squad/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Soccer-Correa replaces injured Gonzalez in Argentina World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9ct1OVqNVbotGhjtfO9vAp0fLBrWDmRCJ1d-ZtFzJh_jjBb9b8C8V8JMTdCY6BGeJOBrTDPab" alt="Soccer-Correa replaces injured Gonzalez in Argentina World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Reuters) - Argentina have called up forward Angel Correa to replace Nicolas Gonzalez in their World Cup squad after the latter sustained a muscle inj...</p></div>
            </div>
        </a>
        </Template></>;
}