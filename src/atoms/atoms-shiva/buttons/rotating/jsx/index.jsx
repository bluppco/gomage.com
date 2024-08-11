// IMPORT JSX ATOMS
import PictureContainJSX from "@/atoms/picture/internal/contain/jsx"

const CircularTextButton = ( { onClick_event } ) => {

	return (

		<button className="relative flex items-center justify-center size-32 group" onClick={ onClick_event }>
			<svg viewBox="0 0 100 100" className="group-hover:-rotate-180 group-hover:scale-125 duration-300">
				<defs>
				<path id="circle" d="
								M 50, 50
								m -37, 0
								a 37,37 0 1,1 74,0
								a 37,37 0 1,1 -74,0"></path>
				</defs>
				<text className="font-semibold font-minion_pro">
					<textPath xlink:href="#circle">next &nbsp; next &nbsp; next &nbsp; next &nbsp; next &nbsp;
						next
					</textPath>
				</text>
			</svg>
			<div className="absolute size-12 group-hover:-rotate-45 group-hover:scale-125 duration-300">
				<PictureContainJSX
					alternativeText=""
					source="/icons/arrow-right.svg"
				/>
			</div>
        </button>

	)

}
export default CircularTextButton
  