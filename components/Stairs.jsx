import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index)=>{
    const totalStep = 6; //number of steps 
    return totalStep - index - 1;
};

const Stairs = () => {
  return <>
    
    {/* render 6 motion divs, each representing a step of the stairs 
    
    Each div will have the same animation defined by the stairsAnimation object.
    the delay for each is calculated dinamically based on its reversed index,
    creating a staggered effect with decreasing delay for 
    
    */}

    {[...Array(6)].map((_, index)=>{
        return (
        <motion.div key={index} variants={stairAnimation} initial="intital" animate="animate" exit="exit" transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-accent relative"
        
    />

    );
        
    }
    )}
    

  </>;
   
};

export default Stairs;
