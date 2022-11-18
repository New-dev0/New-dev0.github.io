import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Missile nord-coréen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Missile nord-coréen"/>
        <meta name="description" content="Trending News about Missile nord-coréen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Missile nord-coréen</h1>
            <Image width={800} height={500} src="https://www.liberation.fr/resizer/CflrarRG-AaCFsIQHkbv87gNg94=/1200x678/filters:format(jpg):quality(70):focal(1432x819:1442x829)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/NYHQ44CX4NFMTJKG3CEREVKM5Q.jpg" alt="Missile nord-coréen"/>
            <h3>Recent News</h3>
            <a href='https://www.liberation.fr/international/asie-pacifique/la-coree-du-nord-lance-un-missile-balistique-et-une-nouvelle-salve-de-menaces-20221117_2QBF7G4YYBDMDPFCK5IMCHSLSQ/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Corée du Nord lance un missile balistique et une nouvelle salve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTy_SiW65U8BOwqq-wK2ic8FPu632vq4II2OArgEIPod_3uji40YB_s_6coqqg03FXI31GWD4t-" alt="La Corée du Nord lance un missile balistique et une nouvelle salve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon l&#39;état-major sud-coréen, Pyongyang a effectué un énième tir ce jeudi matin, en direction de la mer du Japon, au moment où le régime promettait une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/international/nouveau-tir-de-missile-de-la-coree-du-nord-apres-avoir-promis-une-riposte-feroce-aux-exercices-militaires-etats-unis-2238904.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nouveau tir de missile de la Corée du Nord après avoir promis une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG4CLWUp95Jo9HP4jvXjKJ4J0F0Ezy9DL_wZZuAfu8lJczsKTJX3OpaHzFds_eRQkCx2j9BBJu" alt="Nouveau tir de missile de la Corée du Nord après avoir promis une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce tir intervient quelques heures après que Pyongyang a promis une riposte &quot;féroce&quot; au renforcement de l&#39;alliance militaire entre Washington, Séoul et Tokyo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/monde/coree-du-nord/la-coree-du-nord-tire-un-nouveau-missile-et-promet-une-riposte-feroce_5482344.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Corée du Nord tire un nouveau missile balistique en direction de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSet91wGJVk4Xr46pzgvLK0DrzSHsVo1ZBgNRfdxVY4QK_e6028xyabcgNzIOgGxLpwrX9I4t2-" alt="La Corée du Nord tire un nouveau missile balistique en direction de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le bureau du Premier ministre nippon a dénoncé &quot;les lancements répétés de missiles balistiques qui menacent la paix et la sécurité&quot; de la région.</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/monde/4010423-20221117-coree-nord-pyongyang-tire-nouveau-missile-balistique-promet-riposte-feroce-alliance-occidentale'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corée du Nord : Pyongyang tire un nouveau missile balistique et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCJhrPHV_6julftmg_EH1A6Ljh6HWatAcqf1iR1db2_jniCY2sjPJHIm5ObAbrXDAQ9Vv0YFuO" alt="Corée du Nord : Pyongyang tire un nouveau missile balistique et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les lancements de missiles se multiplient depuis quelques semaines, alors que la Corée du Nord voit les exercices américains comme une menace d&#39;invasion.</p></div>
            </div>
        </a><a href='https://www.capital.fr/economie-politique/la-coree-du-nord-a-tire-un-nouveau-missile-balistique-en-direction-du-japon-1452155'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Corée du Nord a tiré un nouveau missile balistique en direction ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8nZzM9V0dTNNOWAfDVLck76JY920SWWqA6XQWtP1Vwk2xZUfYUIH1-Xno89RTDwkS1030N3W5" alt="La Corée du Nord a tiré un nouveau missile balistique en direction ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Japon a confirmé le tir. Le bureau du Premier ministre nippon a dénoncé &quot;les lancements répétés de missiles balistiques qui menacent la paix et la sécurité&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lavoixdunord.fr/1254712/article/2022-11-17/un-nouveau-missile-tire-par-la-coree-du-nord-le-pays-promet-une-riposte-feroce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un nouveau missile tiré par la Corée du Nord, le pays promet une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQdu8lzKEpd0NaQ_sHE2O2aWCAbu7VyIugm5BnnJV0KwsUbWB_ocv1qkotM0Jg9Yqe7926NBY-R" alt="Un nouveau missile tiré par la Corée du Nord, le pays promet une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quelques heures après avoir promis une riposte « féroce » au renforcement de l&#39;alliance militaire entre Washington, Séoul et Tokyo, la Corée du Nord a tiré&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvanouvelles.ca/2022/11/17/la-coree-du-nord-tire-un-nouveau-missile-et-promet-une-riposte-feroce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Corée du Nord tire un nouveau missile et promet une riposte ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtZxPrDPchUnvgUr93-i6T1EkUcwYa1Q-K11x_CVxlsNbO_FKdWyn8v_NwDRl7WFfzjT1sTUjW" alt="La Corée du Nord tire un nouveau missile et promet une riposte ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Japon a confirmé le tir. Le bureau du Premier ministre nippon a dénoncé «les lancements répétés de missiles balistiques qui menacent la paix et la sécurité&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}