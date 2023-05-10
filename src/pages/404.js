import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {
    const router = useRouter()
    function handleRouting(){
        router.push("/")
    }
    return (
        <div>
            <h1>This route is not exit</h1>
            <Link href={"/"}>Go To Home page</Link>
            <br/>
            <br/>
            <button onClick={() => router.push("/")}>Go To Home page</button>
            <br/>
            <br/>
            <button onClick={() => router.push("/contact")}>Go To contact page</button>
            {/* same things with writtten function  */}
            <br/>
            <br/>
            <button onClick={handleRouting}>Go to home page</button>
        </div>
    );
};

export default ErrorPage;