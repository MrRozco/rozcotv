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
                <div className=' grid mx-auto grid-cols-1 sm:grid-cols-3 gap-6 mt-4 md:w-[90vw] lg:w-[80vw] justify-items-stretch items-center ' >
                    <div className=' flex flex-col shadow-2xl bg-white p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full' >
                        <img  className=' rounded-lg '  src={imgOne}></img>
                        <h3 className=' mt-2 text-lg font-semibold '>{headingOne}</h3>
                        <p className=' text-[14px]' >{contentOne}</p>
                    </div>
                    <div className=' flex flex-col shadow-2xl bg-white p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full' >
                        <img  className=' rounded-lg '  src={imgTwo}></img>
                        <h3 className=' mt-2 text-lg font-semibold ' >{headingTwo}</h3>
                        <p className=' text-[14px]' >{contentTwo}</p>
                    </div>
                    <div className=' flex flex-col shadow-2xl bg-white p-4 rounded-lg transition duration-500 ease-out transform hover:scale-105 flex-grow h-full ' >
                        <img  className=' rounded-lg '  src={imgThree}></img>
                        <h3 className=' mt-2 text-lg font-semibold ' >{headingThree}</h3>
                        <p className=' text-[14px]' >{contentThree}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TripData;