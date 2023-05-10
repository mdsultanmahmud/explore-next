import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function contact() {
    return <>
        <Head>
            <title>Contact Page || Tech-Hunt</title>
        </Head>
        <Navbar></Navbar>
        <h1 style={{ color: "tomato" }}>This is our contact page</h1>
    </>
}