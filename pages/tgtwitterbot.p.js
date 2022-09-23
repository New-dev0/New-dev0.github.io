import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { Template } from "./_template";
import Head from "next/head";

export default function TgTwitterBot() {
    return <>
    <Head>
        <title>TgTwitterBot</title>
        <link rel="icon" href="/twt.ico" type="image/any-icon" />
    </Head>
        <Template>
            <>
                <h1>TgTwitterBot</h1>
                <div className={styles.timage}>
                    <Image alt="Twitterbot" width={300} height={300} src="https://raw.githubusercontent.com/New-dev0/TgTwitterBot/main/logo.png"></Image>
                </div>
                <br />
                <p>
                    <Image width={100} height={30} alt="GitHub forks" src="https://Img.shields.io/github/forks/New-dev0/TgTwitterBot?style=social" />
                    <Image style={{ marginLeft: "5px" }} width={100} height={30} alt="GitHub Repo stars" src="https://Img.shields.io/github/stars/New-dev0/TgTwitterBot?style=social" />
                </p>
                <div className={styles.card} style={{ fontSize: 20 }}>

                    <h3>Getting ENV&apos;s</h3>
                    <ol>
                        <li>Create a <a href="https://developer.twitter.com/en">Twitter Developer Account</a>.<br />
                            <Image alt="twitter" width={800} height={300} src="https://1000logos.net/wp-content/uploads/2017/06/logo-Twitter-500x180.png" /><br /></li><br />
                        <li>Go to Developer Portal/Dashboard.</li>
                        <li>Create a Application and fill the details Asked !</li>
                        <li>Change the App Setting to <code>Read + Write</code>.</li>
                        <li>Go to <code>Keys and Token</code> Tab.</li>
                        <li>You can see <code>Consumer Key</code>&apos;s Heading<br />
                            <Image alt="authentication" width={650} height={300} src="https://graph.org/file/53cd6e806af38801df381.jpg" >
                            </Image>
                            <br />
                            Generate the Api Key & Secret<br /> Generated Api Key will be <code>CONSUMER_KEY</code> and Api Secret will be <code>CONSUMER_SECRET</code><br />Which
                            are Required in ENV.
                        </li>
                        <li>Check <i>Authentication Token</i><br />
                            <Image alt="access token" width={600} height={380} src="https://graph.org/file/bc7b4923f87f48e0c1be2.jpg" />
                            <br />Generate Your Access Token and Secret.<br /> Access Token will be <code>ACCESS_TOKEN</code><br /> Access Secret will be <code>ACCESS_TOKEN_SECRET</code>,
                            Required.
                        </li>

                        <li>Add the User Id of users in <code>AUTHUSERS</code> Var. They will have Access to Use Your BOT.</li>

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
                    </ol>
                </div>

                <div id="local-deploy">
                    <a href="#local-deploy"><h2><b># Deploying Locally</b></h2></a>
                </div>
                <div className={styles.card} style={{ fontSize: 20 }}>
                    <li>Clone the Github Repo.<br />
                        <code>git clone https://github.com/New-dev0/TgTwitterBot.git<br />cd TgTwitterBot</code>
                    </li>
                    <li>Install Requirements<br /><code>pip install -r requirements.txt</code></li>
                    <li>Start The Bot<br /><code>python -m twitterbot</code></li>
                </div>

            </></Template>
    </>
}