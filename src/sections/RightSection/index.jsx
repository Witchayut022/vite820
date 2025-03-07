import About from "../About";
import Experience from "../Experience";
const RightSection = () => {
    return(
        <div className="gride gap-4 px-4">
            <About />
            <div className='text-left mb-96 mt-40'><Experience /></div>
            <div className='text-left mb-96'>Projects</div>
        </div>
    );
};
   
export default RightSection;