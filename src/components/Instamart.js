import { useState } from "react"

const Section = ({ title, key, description }) => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div className="border border-gray-400 p-8 mt-2" key={key}>
            <div className="text-gray-800 font-semibold text-xl underline">{title}</div>
            {
                (isVisible) ?
                    <>
                        <div className="bg-gray-900 text-gray-50 w-24 text-center text-sm p-2 mt-3 cursor-pointer hover:bg-red-600"
                            onClick={() => { setIsVisible(false) }}>Read more</div>
                    </>
                    :
                    <>
                        <div className="text-gray-800 font-normal text-sm">{description}</div>
                        <div className="bg-gray-900 text-gray-50 w-24 text-center text-sm p-2 mt-3 cursor-pointer hover:bg-red-600"
                            onClick={() => { setIsVisible(true) }}>Read less</div>
                    </>
            }
        </div>
    )
}


const Instamart = () => {
    return (
        <div className="mt-10 font-bold text-xl">
            <Section title={"Title1"} key={"Title1"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
            />
            <Section title={"Title2"} key={"Title2"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
            />
            <Section title={"Title3"} key={"Title3"}
                description={
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                }
            />

        </div>
    )
}

export default Instamart;