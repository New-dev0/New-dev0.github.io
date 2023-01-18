import { Template } from "../_template";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Projects.module.css";
import { useMediaQuery } from './../useMediaQuery';
import { Button } from "@nextui-org/react";
import LoadingPage from "../pagewithLoading";
import { RWebShare } from "react-web-share";
// import ShareIcon from "@material-ui/icons/Share"

function extractContent(html) {
    return new DOMParser()
        .parseFromString(html, "text/html")
        .documentElement.textContent;
}

export default function News() {
    const router = useRouter();

    const md = useMediaQuery();
    const { hash } = router.query;
    const [content, saveContent] = useState();

    useMemo(() => {
        if (!router.isReady) {
            return;
        }
        fetch(`/api/news?hash=${hash}`).then(d => d.json().then(saveContent))
    }, [hash]);
    if (hash == undefined) {
        return <LoadingPage />
    }

    return <>
        <Head>
            <title>{content?.title || "News"}</title>
            <meta title={content?.title} property="og:title" />
            <meta name="description" content={`Trending News about ${content?.title}`} />
            <meta property="og:image" content={content?.image} />
            <meta name="keywords" content={`news,trending,latest,sports,breaking,top,${content?.title}`} />
        </Head>
        <Template title={content?.title} show_content={false}>
            {(content?.ok == false) ? <h1>Page not Found!</h1> :
                <>{content?.image && <Image style={{ borderRadius: 10 }} width={750} height={500} src={content?.image} alt={content?.title} />}
                    <h3 style={{ textDecoration: "underline" }}>Recent News</h3>
                    {content?.articles?.map(article => {
                        return <a href={"/read?url=" + article.url} key={article.url} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto" : "90vh" }}>
                                <h3>{extractContent(article.title)}</h3>
                                <div style={{ display: "flex" }}>
                                    <Image src={article?.image?.imageUrl} alt={content?.title} height={150} width={250} style={{ marginLeft: "15px" }} />
                                    <p style={{ paddingLeft: "15px" }}>{extractContent(article.snippet)}</p></div>
                            </div>
                        </a>
                    })}
                    <div style={{ marginTop: 10 }}>
                        <RWebShare data={{ title: content?.title, url: window?.location?.href }}>
                            <Button>Share</Button>
                        </RWebShare>
                    </div></>}
        </Template></>
}