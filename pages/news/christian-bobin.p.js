import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christian Bobin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christian Bobin"/>
        <meta name="description" content="Trending News about Christian Bobin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christian Bobin</h1>
            <Image width={800} height={500} src="https://www.liberation.fr/resizer/Zw2C7Q-jQ4ek4SCKdr4Sq2RCGHE=/1200x0/filters:format(jpg):quality(70):focal(2217x1019:2227x1029)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/OGAAZUMROBCMRHZYXDXNP7JVVQ.jpg" alt="Christian Bobin"/>
            <h3>Recent News</h3>
            <a href='https://www.culture.gouv.fr/Presse/Communiques-de-presse/Hommage-de-Rima-Abdul-Malak-a-Christian-Bobin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hommage de Rima Abdul Malak à Christian Bobin</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Hommage de Rima Abdul Malak à Christian Bobin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour tous ceux qui aimaient ses livres, la perte de Christian Bobin est comme celle d&#39;un ami dont on pouvait relire inlassablement les textes ciselés,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/culture/livres/christian-bobin-aux-anges-20221125_3JE6ZCCROBECREAADDUMZT52MM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christian Bobin aux anges</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJAuaBwPg70vpL9UEP4RfBX_GYBAlRprbn7w6C_NesWw5EDPUocBBLd3B6Kpn2ymuesCUTSjOx" alt="Christian Bobin aux anges" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Contemplatif, sensible, le poète et écrivain est mort à l&#39;âge de 71 ans au Creusot, où il était né.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/lecrivain-christian-bobin-est-mort-25-11-2022-RGQCAATTAFG77MQIVTSGVFZLVU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;écrivain Christian Bobin est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0Svqa9N5y5aikPkzKnqc7v6Mjt0ugUtPGLq4nSZCdOUXpjmnRb_Ne0l0E4ACMpiOEMerS44Qw" alt="L&#39;écrivain Christian Bobin est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;auteur, qui avait connu un grand succès avec « Le Très-Bas » et « La folle allure », s&#39;est éteint à l&#39;âge de 71 ans « d&#39;une grave maladie ».</p></div>
            </div>
        </a><a href='https://www.marianne.net/culture/litterature/lecrivain-de-la-lumiere-cachee-sest-eteint-christian-bobin-est-mort'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;écrivain de la lumière cachée s&#39;est éteint : Christian Bobin est mort</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbx4i00ggCabXxLo1Y6XEZ__4Xm7eFXgX8nv65aKo-zFxsfvyVEHPgRQH2JauDnbwtGfkt7RnW" alt="L&#39;écrivain de la lumière cachée s&#39;est éteint : Christian Bobin est mort" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au début de ses ouvrages inclassables, ces romans qui étaient également de la poésie, ces récits qui se faisaient profession de foi, il était toujours précisé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.centrepresseaveyron.fr/2022/11/25/christian-bobin-le-poete-et-ami-de-pierre-soulages-est-decede-10827334.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christian Bobin, le poète et ami de Pierre Soulages, est décédé</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSm4hf-1az9NOXFxkW9KXrMPBQFYcxacuFCXylLTkyUhqAISkAeJ-Tz8TA-3SBER0ucWvrok4Kr" alt="Christian Bobin, le poète et ami de Pierre Soulages, est décédé" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;auteur notamment de &quot;Pierre&quot; et &quot;La nuit du cœur&quot; avait noué une amitié forte avec le peintre ruthénois Pierre Soulages. Il était venu à Rodez en 2019.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/culture/livres/christian-bobin-l-auteur-du-tres-bas-est-passe-a-l-au-dela-abb10592-6ce1-11ed-a961-e46de8a30dc6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christian Bobin, l&#39;auteur du Très-Bas, était un ciseleur de textes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxxnyqhv97QH7QOfF8qJnOWKhejDYe8S6vXTsLPHLGpFO9YnINg02Iqd-4jMoQW87njPNw6Rzb" alt="Christian Bobin, l&#39;auteur du Très-Bas, était un ciseleur de textes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Écrivain et penseur, Christian Bobin est mort jeudi 24 novembre 2022 au Creusot (Saône-et-Loire). Il laisse à ses très nombreux lecteurs plus de cent livres&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}