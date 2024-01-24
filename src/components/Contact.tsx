import { Image } from '@chakra-ui/react'
import { motion, Variant } from 'framer-motion'
import LinkedIn from '../assets/LinkedIN_black.png'
import Github from '../assets/Github_black.png'
import Mail from '../assets/Mail_black.png'

function Contact() {
  const cardVariants: Variant | any = {
    offscreen: {
      y: -300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
      },
    },
  }
  const cardVariants1: Variant | any = {
    offscreen: {
      y: -300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
        delay: 0.1,
      },
    },
  }

  const cardVariants2: Variant | any = {
    offscreen: {
      y: -300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto font-sans text-center ">
      <div className="flex justify-center text-5xl mb-5 font-bold">
        <p>Get In Touch</p>
      </div>
      <div className="flex justify-center font-light">
        <p>
          Although I'm currentlu looking for any new opportunities, my inbox is
          always open. Whether you have a quetion or jest want to way hi, I'll
          try my best to get back to you!
        </p>
      </div>
      <motion.div
        className="flex flex-row mt-24 justify-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <a href="https://linkedin.com/in/soyeon-lee-b74353239">
            <Image src={LinkedIn} alt="LinkedIn" className="h-8 w-8 mx-10" />
          </a>
        </motion.div>
        <motion.div variants={cardVariants1}>
          <a href="https://github.com/call203">
            <Image src={Github} alt="Github" className="h-8 w-8 mx-10" />
          </a>
        </motion.div>
        <motion.div variants={cardVariants2}>
          <a href="mailto:freeyeon96@gmail.com">
            <Image src={Mail} alt="Mail" className="h-8 w-8 mx-10" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
