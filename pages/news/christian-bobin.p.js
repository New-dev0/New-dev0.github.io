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
            <Image width={800} height={500} src="https://resize.marianne.net/r/1540,924/img/var/LQ11260981C/657674/000_32TN6EW.jpg" alt="Christian Bobin"/>
            <h3>Recent News</h3>
            <a href='https://www.culture.gouv.fr/Presse/Communiques-de-presse/Hommage-de-Rima-Abdul-Malak-a-Christian-Bobin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hommage de Rima Abdul Malak à Christian Bobin</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Hommage de Rima Abdul Malak à Christian Bobin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour tous ceux qui aimaient ses livres, la perte de Christian Bobin est comme celle d&#39;un ami dont on pouvait relire inlassablement les textes ciselés,&nbsp;...</p></div>
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
        </a><a href='https://www.francetvinfo.fr/culture/livres/l-ecrivain-christian-bobin-auteur-de-la-plus-que-vive-et-le-tres-bas-est-mort-a-71-ans_5501046.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;écrivain Christian Bobin, auteur de &quot;La plus que vive&quot; et &quot;Le Très ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaW_0UxVzJYeW--z926SIsVtek98OG-PiGNwL2sgpfqUupT447u3Ix0x9OCqXvJa7hZqDGM1Nz" alt="L&#39;écrivain Christian Bobin, auteur de &quot;La plus que vive&quot; et &quot;Le Très ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;auteur français Christian Bobin est mort à l&#39;âge de 71 ans, a annoncé le 25 novembre 2022 sa maison d&#39;édition, Gallimard. Le romancier publiait début&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/livres/l-ecrivain-christian-bobin-est-decede-a-71-ans-25-11-2022-2499185_37.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;écrivain Christian Bobin est décédé à 71 ans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4se7XhRQpZDJyeduwVuIdmKWMqKUfGcAGJO-yEwmIa4-LFPgAlUGudb64K-mWfo4lauGk5dRlaQ" alt="L&#39;écrivain Christian Bobin est décédé à 71 ans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christian Bobin s&#39;est notamment fait connaître avec la publication de son ouvrage « Le Très-Bas », qui a dépassé les 100 000 exemplaires.</p></div>
            </div>
        </a>
        </Template></>;
}