import Head from "next/head";
import { Template } from "./template";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function Streamer() {
    return <>
        <Head>
            <title>TgTwitterStreamer</title>
            <link rel="icon" href="/twt.ico" type="image/any-icon" />
        </Head>
        <Template>
            <h1>TgTwitterStreamer</h1>
            <div className={styles.timage}>
                <Image alt="Twitter" width={500} height={300} src="https://raw.githubusercontent.com/New-dev0/TgTwitterStreamer/main/TgTwitterStreamer/assets/START.webp"></Image>
            </div>   <br />
            <p style={{ minWidth: "20px" }}>
                <Image width={100} height={30} alt="GitHub forks" src="https://Img.shields.io/github/forks/New-dev0/TgTwitterStreamer?style=social" />
                <Image style={{ marginLeft: "10px" }} width={100} height={30} alt="GitHub Repo stars" src="https://Img.shields.io/github/stars/New-dev0/TgTwitterStreamer?style=social" />
            </p>
            <div className={styles.card} style={{ fontSize: 20 }}>

                <h3>Getting ENV&apos;s</h3>
                <ol>
                    <li>Create a <a href="https://developer.twitter.com/en">Twitter Developer Account</a>.<br />
                        <Image alt="Twitter" width={800} height={300} src="https://1000logos.net/wp-content/uploads/2017/06/logo-Twitter-500x180.png" /><br /></li><br />
                    <li>Go to Developer Portal/Dashboard.</li>
                    <li>Create a Application and fill the details Asked !</li>
                    <li>Change the App Setting to <code>Read + Write</code>.</li>
                    <li>Go to <code>Keys and Token</code> Tab.</li>
                    <li>Click on Generate Bearer Token, Fill its value in <code>BEARER_TOKEN</code>
                    </li>
                    <li>Go to <a href="https://my.telegram.org">my.telegram.org</a><br />
                        <ul type="square">
                            <li>Login with Your Account.</li>
                            <li>Go to <i color="black">API Development tools</i> Tab</li>
                            <li>Create A Telegram APP.</li>
                            <li>You will Get Your <code>API_ID</code> and <code>API_HASH</code></li>
                        </ul><br />
                    </li>
                    <li>Go to <a href="https://t.me/botfather">BotFather</a>
                        <ul type="circle">
                            <li>Create a Bot and you will get Bot Token.</li>
                            <li>Fill it as <code>BOT_TOKEN</code></li>
                        </ul>
                    </li>
                    <li>and <b>Done</b> !</li>
                </ol></div>
            <div id="local-deploy">
                <a href="#local-deploy"><h2><b># Deploying Locally</b></h2></a>
            </div>
            <div className={styles.card} style={{ fontSize: 20 }}>
                <li>Clone the Github Repo.<br />
                    <code>git clone https://github.com/New-dev0/TgTwitterStreamer.git<br />cd TgTwitterStreamer</code>
                </li>
                <li>Install Requirements<br /><code>pip install -r requirements.txt</code></li>
                <li>Start The Bot<br /><code>python -m TgTwitterStreamer</code></li>
            </div>
        </Template>
    </>
}