import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Corrida</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Corrida"/>
        <meta name="description" content="Trending News about Corrida" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Corrida</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/corrida-toros-24-11-1-d83da4-0@1x.jpeg" alt="Corrida"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/societe/corrida-en-france-quand-6-taureaux-sont-tues-dans-l-arene-en-compte-t-on-150-qui-vivent-2239678.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corrida : quand 6 taureaux sont tués dans l&#39;arène, en compte-t-on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT29vpxS-mMqZj3rCSbbssKo5tWc2I57MRvm88PAGIa7bis3ugwIhbNx4nB-NqaIZ5OWmS-7087" alt="Corrida : quand 6 taureaux sont tués dans l&#39;arène, en compte-t-on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En France, on estime à moins de 50 le nombre d&#39;élevages de taureaux de combat. Ces derniers, dont la race est nommée &quot;toro bravo&quot; de l&#39;autre côté des Pyrénées,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/culture/toros/corrida-a-l-assemblee-le-combat-n-a-pas-eu-lieu-13112731.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corrida : à l&#39;Assemblée nationale, le combat n&#39;a pas eu lieu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTB6FjMOIBZsalAMz0hGHTWFxtk5t7xWTGva265Bo07BodN51hidUrhIWqLMsiKUGVMuruSVhvk" alt="Corrida : à l&#39;Assemblée nationale, le combat n&#39;a pas eu lieu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coup de théâtre ce jeudi 24 novembre au Palais-Bourbon : Aymeric Caron, face aux centaines d&#39;amendements déposés, a choisi de retirer sa proposition&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/politique/parlement/interdiction-de-la-corrida-le-depute-lfi-aymeric-caron-retire-son-texte-et-denonce-l-obstruction_AN-202211240652.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interdiction de la corrida: le député LFI Aymeric Caron retire son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVf6BoOm56TUmU_5lCOcWL9Z36cijaDw4Jh_8ZSIugMnYUKsAUZlnLxjGpqjIimDZg9uLAAMYK" alt="Interdiction de la corrida: le député LFI Aymeric Caron retire son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;élu parisien a annoncé dans l&#39;hémicycle retirer sa proposition de loi qui visait à interdire la corrida. &quot;Je regrette de ne pas voir beaucoup de courage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/24/abolition-de-la-corrida-aymeric-caron-retire-sa-proposition-de-loi-10825268.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corrida : Aymeric Caron retire sa proposition de loi, quelles suites ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSm2gjqbckT27J4JVSHwtL68weJ0RUm11ugTsTJXmWOZfEyu0hJGNhp5EqwZQd2plZY6eEDpeYp" alt="Corrida : Aymeric Caron retire sa proposition de loi, quelles suites ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que la question de la corrida commençait à être débattue, Aymeric Caron, qui en était le rapporteur, a retiré son texte face au flot d&#39;amendements qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/24/interdiction-de-la-corrida-le-depute-aymeric-caron-retire-son-texte-et-fustige-lobstruction-10825276.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interdiction de la corrida : le député Aymeric Caron retire son texte et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM-DoWXoSAR7lrM_G2slYM4o2geeAGfTrkkXmjXNzrcJBc2xZkY3Gv6Bk4wwEW0GS8rkV-pfM9" alt="Interdiction de la corrida : le député Aymeric Caron retire son texte et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À la surprise générale, la proposition de loi pour abolir la corrida a été retirée ce jeudi 24 novembre à l&#39;Assemblée nationale. Le député LFI Aymeric Caron&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/politique/assemblee-la-proposition-de-loi-pour-abolir-la-corrida-retiree-a-la-surprise-generale-par-lfi-20221124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assemblée nationale: la proposition de loi pour abolir la corrida ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZ0QRLLaFwYHmwmp3_ThOnGKg0JV0nY20yZSIS05oz3DfzPboUf_a1gycV2CMAcuxHSAcaS8Ag" alt="Assemblée nationale: la proposition de loi pour abolir la corrida ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dénonçant l&#39;obstruction de leurs opposants, les Insoumis ont considéré que le texte sur la réintégration des soignants non-vaccinés avait plus de chances&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/vox/societe/pourquoi-j-enseigne-la-corrida-aux-jeunes-20221124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Pourquoi j&#39;apprends aux jeunes à devenir toréro»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5W33NNtwv1SK6qYUKkMsTXhs7MH-tE_ZdGANAF2Z4QCvRt0YygNnPSAcJYq9e4v8fRk2PsXyZ" alt="«Pourquoi j&#39;apprends aux jeunes à devenir toréro»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIGAROVOX/TRIBUNE - Président de l&#39;école taurine du Pays d&#39;Arles, Yves Lebas défend la corrida et revient sur sa signification. En se saisissant de cet art,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lexpress.fr/actualites/1/societe/en-france-l-inquietude-d-un-monde-aseptise-sans-corrida_2184096.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>En France, l&#39;inquiétude d&#39;un monde &quot;aseptisé&quot; sans corrida</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTM32hMVm70OpjLLcJSh-Hmg42rr1Cz06R8wGOV4JrCvP05wzaQ_ClhKkoWQnqiCLG38LCz6jJY" alt="En France, l&#39;inquiétude d&#39;un monde &quot;aseptisé&quot; sans corrida" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tradition espagnole introduite en France au XIXe siècle, ce combat ritualisé, jusqu&#39;à la mort, entre homme et taureau dans une arène, a très vite pris&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}