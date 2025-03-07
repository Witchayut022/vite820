import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import picExp from '../../assets/picExp1.png';
const Experience = () => {
    return(
        <div className='space-y-4'>
            <div className="text-left text-primaryAccent font-medium">Experience</div>
            <div className="grid grid-cols-[30%_70%]">
                <div className='text-left'>
                    <span className='text-sm'>2024-2025</span>
                    <div>
                        <img src={picExp} className='w-5/6 rounded-md border-2'/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="text-primaryAccent">Fashion Ecommerce</div>
                    <div className='flex gap-4 text-lg'>
                        <FontAwesomeIcon icon={faGithub}/>
                        <FontAwesomeIcon icon={faMedium}/>
                        <FontAwesomeIcon icon={faYoutube}/>

                    </div>
                    <div className="text-left text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="text-left flex gap-4 text-sm">
                        <div className="text-primaryBase font-medium bg-primaryTitle px-2 py-1 rounded-md hover:text-gray-100">React</div>
                        <div className="text-primaryBase font-medium bg-primaryTitle px-2 py-1 rounded-md hover:text-gray-100">Tailwind</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;