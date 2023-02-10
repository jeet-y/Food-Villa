import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-gray-400 p-8 mt-2">
            <div className="text-gray-800 font-semibold text-xl underline">{title}</div>
            {(isVisible) && <div className="text-gray-800 font-normal text-sm">{description}</div>}
            {
                (isVisible) ?
                    <label className="text-gray-900 text-sm cursor-pointer underline hover:text-red-600"
                        onClick={() => { setIsVisible("") }}>Read less</label>

                    : <label className="text-gray-900 text-sm cursor-pointer underline hover:text-red-600"
                        onClick={() => { setIsVisible(title) }}>Read more</label>
            }
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("")
    return (
        <div className="w-full full-height flex justify-center mt-8">
            <div className="w-3/4 xl:w-3/4 xl:px-16 2xl:w-2/3 px-8">
                <div className="mt-10 font-bold text-xl">
                    <Section title={"Title1"}
                        description={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        }
                        isVisible={visibleSection === "Title1"}
                        setIsVisible={(e) => { setVisibleSection(e) }}
                    />
                    <Section title={"Title2"}
                        description={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        }
                        isVisible={visibleSection === "Title2"}
                        setIsVisible={(e) => { setVisibleSection(e) }}
                    />
                    <Section title={"Title3"}
                        description={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        }
                        isVisible={visibleSection === "Title3"}
                        setIsVisible={(e) => { setVisibleSection(e) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Instamart;