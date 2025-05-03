import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex bg-base-200 p-3 gap-8 items-center'>
            <p className='bg-secondary text-white  text-center px-6 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={60}>
                <div className='flex gap-4'>
                    <p className=' font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
                    <p className=' font-bold'> "How Bangladesh’s ‘Gen Z’ protests brought down PM Sheikh Hasina"
                    </p>
                    <p className=' font-bold'> "Bangladesh’s Sheikh Hasina forced to resign: What happened and what’s next?"
                    </p>
                    <p className=' font-bold'>
                        "July Uprising: Sheikh Hasina among 408 sued in murder case"
                    </p>
                    <p className=' font-bold'>
                        "Probe in two cases against Hasina nearing end"
                    </p>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;