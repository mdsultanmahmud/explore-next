import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
export default function blog() {
    return (<div>
        <Navbar></Navbar>
        <h1>This is our blog section</h1>
        <ImageContainer></ImageContainer>
        {/* write css code with jsx  */}

        <style jsx>
            {`
                h1{
                    color: green;
                }
            `}
        </style>
    </div>)
}