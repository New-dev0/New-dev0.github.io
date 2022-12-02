import { Template } from "./_template";
import styles from "../styles/Projects.module.css";
import Head from "next/head";
import Image from "next/image";
import { useMediaQuery } from "./useMediaQuery";

function gh(repo) {
    return `https://github.com/New-dev0/${repo}`;
}

function CreateCard({ title, description, image, href, style }) {
    return <a href={href || title.toLowerCase()}><div className={styles.card} style={style}>
        <h2>{title}</h2> {!image && <p style={{ paddingLeft: "2rem" }}>{description}</p>}
        {image && <div style={{ display: "flex" }}>
            <Image src={image} width="200" height="100" alt={title} />
            <div>{description}</div>
        </div>}
    </div>
    </a>
}

export default function Projects() {
    const query = useMediaQuery(960);
    return <>
        <Head>
            <title>Projects</title>
        </Head>
        <Template show_content={false}>
            <h1 className={styles.heading}>Projects</h1>
            <CreateCard title="TgTwitterStreamer" description={"Automate posting of Twitter tweets on Telegram."} image="https://raw.githubusercontent.com/New-dev0/TgTwitterStreamer/main/TgTwitterStreamer/assets/START.webp" style={{ width: query ? "40vh" : "90vh" }} />
            <CreateCard title="Template-Generator" description="Create profile templates for Github, Telegram and more." href="https://template.newdev0.in" style={{ width: query ? "40vh" : "90vh" }} />
            <CreateCard title="TgTwitterBot" description={"Control and Explore Twitter from Telegram."} image="https://raw.githubusercontent.com/New-dev0/TgTwitterStreamer/main/TgTwitterStreamer/assets/START.webp" style={{ width: query ? "40vh" : "90vh" }} />
            <CreateCard title="Bing-Chatbot" description={"Bing AI Based Telegram Chat bot."} href={gh("Bing-ChatBot")} style={{ width: query ? "40vh" : "90vh" }} />
        </Template>
    </>
}
