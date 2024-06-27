import { Component } from "react";


class TripData extends Component {
    render () {

        const imgOne = this.props.boxOneImg;
        const imgTwo = this.props.boxTwoImg;
        const imgThree = this.props.boxThreeImg;

        const headingOne = this.props.boxOneHeading;
        const headingTwo = this.props.boxTwoHeading;
        const headingThree = this.props.boxThreeHeading;

        const contentOne = this.props.boxOneContent;
        const contentTwo = this.props.boxTwoContent;
        const contentThree = this.props.boxThreeContent;

        return (
            <>
                <div className=' grid mx-auto grid-cols-1 sm:grid-cols-3 gap-11 mt-4 md:w-[90vw] lg:w-[80vw] justify-items-stretch items-center ' >
                    <div className=' flex flex-col shadow-2xl  bg-gradient-to-b  from-red-900 via-gray-900  to-black p-4 p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full' >
                        <img  className=' rounded-lg h-[65%]'  src={imgOne} alt={imgOne}></img>
                        <h3 className=' mt-2 text-xl font-semibold  text-white mb-2'>{headingOne}</h3>
                        <p className=' text-[18px]  text-white' >{contentOne}</p>
                    </div>
                    <div className=' flex flex-col shadow-2xl bg-gradient-to-b from-red-900 via-gray-900  to-black p-4 p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full' >
                        <img  className=' rounded-lg h-[65%]'  src={imgTwo} alt={imgTwo}></img>
                        <h3 className=' mt-2 text-xl font-semibold  text-white mb-2' >{headingTwo}</h3>
                        <p className=' text-[18px]  text-white' >{contentTwo}</p>
                    </div>
                    <div className=' flex flex-col shadow-2xl bg-gradient-to-b from-red-900 via-gray-900  to-black p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full ' >
                        <img  className=' rounded-lg h-[65%]'  src={imgThree} alt={imgThree}></img>
                        <h3 className=' mt-2 text-xl font-semibold text-white mb-2' >{headingThree}</h3>
                        <p className=' text-[18px] text-white'  >{contentThree}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TripData;