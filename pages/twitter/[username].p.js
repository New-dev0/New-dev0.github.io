import Head from "next/head";
import { Template } from "../_template";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { createRef, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import LoadingPage from "../pagewithLoading";


export default function TwitterPage() {
    const router = useRouter()
    const {username} = router.query;
    const [user, setUser] = useState();

    useEffect(() => {
        if (!router.isReady){
            return
        }
        fetch("https://tgtemp.vercel.app/?twitter=" + username).then(d => {
            d.json().then(setUser)
        })
    }, [username]);

    const photo = user?.photo?.replace("normal", "400x400");
    if (user === undefined) {
        return LoadingPage();
    }
    return <>
        <Head>
            <title>{username}</title>
            <link rel="icon" href={user?.photo} type="image/any-icon"/>
        </Head>
        <Template show_content={false}>
            <div style={{ marginTop: 20 }}>
                {user && user["_"] ? <>
                    <p style={{ fontSize: 32 }}>
                        User not found.</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Image alt="404" height={150} width={150} src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/186/null/external-404-error-seo-and-marketing-smashingstocks-outline-color-smashing-stocks.png" />
                    </div></> : <><div className={styles.card}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            {photo && <Image alt={user.name} className={styles.avatar} src={photo} height={200} width={200} />
                        }</div>
                        <div>
                            {user?.name && <p style={{ marginTop: 10, textDecoration: "underline", textDecorationStyle: "dotted" }}>{user.name}</p>}

                            {user?.description && <p style={{ marginTop: 10, maxWidth: "50vh", fontSize: 18, fontWeight: "normal" }}>{user.description}</p>}
                        </div>
                    </div>
                    <div style={{ textAlign: "right", justifyContent: "right", display: "flex" }}>
                        <a href={`https://twitter.com/${username}`}>

                            <div style={{ backgroundColor: "lightblue", color: "black", padding: 8, borderRadius: 8, marginTop: 8 }}>
                                View on Twitter
                            </div>
                        </a>
                    </div></>}
            </div>
        </Template></>
}