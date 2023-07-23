import { motion ,AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Model({showpop}) {
    const childone = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:0.4,
            transition:{ease:'easeInOut',duration:1},
        },
        exit:{opacity:0,
        transition:{ease:'easeInOut'}
        }
    }
    const childone1 = {
        hidden:{
            y:'-100vh'
        },
        visible:{
            y:0,
            transition:{type:'spring' ,delay:1}
        },
        exit:{y:'-100vh',
        transition:{type:'spring'}
        }
    }
  return (
    <AnimatePresence>
      {showpop &&
      <div className='w-full h-full flex items-center justify-center'>
        <motion.div className='absolute w-full h-full opacity-40 bg-black top-0 left-0'
        variants={childone}
        initial='hidden'
        animate='visible'
        >
        </motion.div>
          <motion.div className='bg-white rounded-2xl h-52 w-1/2 absolute z-40 top-60 py-5 flex flex-col justify-center items-center gap-6'
          variants={childone1}
          initial='hidden'
          animate='visible'
          >
            <h1 className='text-black text-3xl font-sans text-center'>Want to make another pizza?</h1>
            <Link to='/home' className='text-black border-[2px] cursor-pointe py-3 px-7 rounded-xl' >Start again</Link>
          </motion.div>
      </div>
      }
    </AnimatePresence>
  )
}
