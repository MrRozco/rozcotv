import { Component } from 'react';


class DestinationData extends Component {
    render () {

        const flexColClass = this.props.reverseCol ? 'flex-col-reverse' : 'flex-col' ;
        const orderClass = this.props.imagesLeft ? 'md:flex-row-reverse' : 'md:flex-row';

        return (
            <>
                <div className={` flex ${flexColClass} ${orderClass} px-4 my-2 self-center justify-center align-middle mx-3 `} >
                    <div className=' my-5 flex-1 text-left overflow-hidden' >
                        <h2 className=' font-bold text-xl ' >{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                
                    <div className='flex w-[80vw] h-[50vw] sm:w-[100%] sm:h-[40vw] md:w-[40%] md:h-[30vw] pt-2 gap-4 text-center px-4 justify-center  mx-3' >
                        <img src={this.props.imgOne} alt='seashells on the beach' className='relative bottom-[-4%] md:w-[50%] object-cover rounded-lg' />
                        <img src={this.props.imgTwo} alt='seashells on the beach' className='relative top-[-4%] md:w-[50%] object-cover rounded-md' />
                    </div>
                </div>
            </>
        )
    }
}

export default DestinationData;