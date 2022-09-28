import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Galaxy S22</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Galaxy S22"/>
        <meta name="description" content="Trending News about Galaxy S22" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Galaxy S22</h1>
            <Image width={800} height={500} src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/02/samsung-galaxy-s22-plus-review-3.jpg" alt="Galaxy S22"/>
            <h3>Recent News</h3>
            <a href='https://www.androidpolice.com/galaxy-s22-sms-delay-bug/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Some Galaxy S22 phones plagued by inability to receive SMS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcST13HSk4Me8aAmAPzS3URWE0aiK8gNBKzwznjG1OhBkKckgdbvN9vDeNVpfFH6N1rcvzMlwSlM" alt="Some Galaxy S22 phones plagued by inability to receive SMS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As a result, these S22 users are being forced to reboot their phones several times a day to avoid missing important texts. Of course, once the phone reboots and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.xda-developers.com/carrier-locked-galaxy-s22-text-messages-bug-september-update/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Some Galaxy S22 users in the U.S. aren&#39;t able to receive text ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQi6Q_g-9BoWa_WLuFwR4xw-D1PQc-IXYCG053lgD30HbApcE9sRhvqKHFpTZ80F3HD1HBZi3G3" alt="Some Galaxy S22 users in the U.S. aren&#39;t able to receive text ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to recent reports, U.S. users with carrier-locked Galaxy S22 series devices are not able to receive text messages following the September update.</p></div>
            </div>
        </a><a href='https://piunikaweb.com/2022/09/27/samsung-galaxy-s22-users-not-receiving-text-messages/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galaxy S22 not receiving text messages after September update</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6Z5G7eeK4CepJWdNQKbw8zaWvZmeyjW-hLwAlgmtklKsY9k3o6eVDs6YLAMGVhsRsdsxjlfZX" alt="Galaxy S22 not receiving text messages after September update" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Some Samsung Galaxy S22 users are not receiving text messages after September update on Verizon, T-Mobile and others - unless they reboot.</p></div>
            </div>
        </a><a href='https://www.sammobile.com/news/recent-galaxy-s22-update-usa-prevents-users-from-getting-messages/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recent Galaxy S22 update for USA prevents users from getting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSa8x_MwYKKzo4tRIKolZzE7QypSt7mapu9JwNK6yyY7vGIB5b3WWN0T8TkKBt9D_mjm9aTln3P" alt="Recent Galaxy S22 update for USA prevents users from getting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A recent firmware update for the Samsung Galaxy S22 series in the USA is reportedly causing issues and preventing users from receiving text messages.</p></div>
            </div>
        </a><a href='https://www.androidauthority.com/samsung-galaxy-s22-update-2-3213622/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A recent update has disrupted texting for some Galaxy S22 users</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQi0ofViU9OpE9Ai87jXNPSowUXU7pUibZgdE7Ex6gyiSCSMYQ4NR8eNWL5BqZNLVqs-An6XNeB" alt="A recent update has disrupted texting for some Galaxy S22 users" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The September update for the Samsung Galaxy S22 appears to have caused text messaging to stop on some users&#39; phones.</p></div>
            </div>
        </a>
        </Template></>;
}