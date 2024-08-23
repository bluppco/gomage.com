// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT JSX ATOMS
import CircularTextButton from "@/atoms/atoms-shiva/buttons/rotating/jsx"
import LinkNewWindowJSX from "@/atoms/links/new-window/jsx/idnex"
import ParagraphBaseGrayJSX from "@/atoms/atoms-shiva/paragraphs/base/gray/jsx"
import ParagraphXlWhiteJSX from "@/atoms/atoms-shiva/paragraphs/xl/semibold/white/jsx"
import PictureContainJSX from "@/atoms/picture/internal/contain/jsx"

const Cube = ({ cube_data }) => {

    const [rotation, setRotation] = useState(0)

    const handleRotation = () => {

        setRotation( ( prevRotation ) => prevRotation + 90 )

    }
    const isActiveFace = ( sideIndex ) => {

        const activeFaceIndex = ( rotation / 90 ) % cube_data.length
        return activeFaceIndex === sideIndex

    }

    return (

        <div className="relative flex flex-col gap-20 items-center justify-center">
            <div className="cube-container md:py-24">
                <div className="cube" style={{ transform: `rotateX(-10deg) rotateY(${rotation}deg) rotateY(-10deg)`,}} >
                    {

                        cube_data.map( ( side, index ) => (

                            <div className={`face bg-dark-gray p-6 ${ side.face_side }`}>
                                {

                                    side.content &&
                                    <div className={`flex flex-col justify-between h-full ${ isActiveFace(index) ? "" : "hidden" }`}>
                                        <div className="flex flex-col gap-2">
                                            <div className="size-10">
                                                <PictureContainJSX
                                                    alternativeText=""
                                                    source="/icons/quote.png"
                                                />
                                            </div>
                                            <ParagraphBaseGrayJSX>{ side.content.review }</ParagraphBaseGrayJSX>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="flex flex-col gap-2">
                                                <ParagraphXlWhiteJSX>{ side.content.name }</ParagraphXlWhiteJSX>
                                                <ParagraphBaseGrayJSX>{ side.content.title }</ParagraphBaseGrayJSX>
                                            </div>
                                            <LinkNewWindowJSX href={ side.content.link }>
                                                <div className="w-28 aspect-video">
                                                    <PictureContainJSX
                                                        alternativeText=""
                                                        source={ side.content.source }
                                                    />
                                                </div>
                                            </LinkNewWindowJSX>
                                        </div>
                                    </div>

                                }
                            </div>
                            
                        ))

                    }
                </div>
            </div>
            <div className="md:absolute bottom-0 right-0">
                <CircularTextButton onClick_event={ handleRotation } />
            </div>
        </div>

    )

}
export default Cube
