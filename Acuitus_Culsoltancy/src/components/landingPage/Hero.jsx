import React, { useState, useEffect } from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import masaaiImage from '../../assets/images/landingPage/masaai.jpg'; // Import the image using ES modules
import secondImage from '../../assets/images/landingPage/healthp.jpeg'; // Import the second image
import thirdImage from '../../assets/images/landingPage/chamaactv.jpeg'; // Import the third image
import fourthImage from '../../assets/images/landingPage/schoolact.jpg'
import fifthImage from '../../assets/images/landingPage/ftraning.jpg'
import { FcNext, FcPrevious } from 'react-icons/fc';

const imagesData = [
  {
    image: masaaiImage,
    title: 'Welcome to Acuitus Duo - your trusted partner in transformation and growth',
    description: 'At Acuitus, we believe in the power of transformation. We stands as a beacon of innovation, inspiration, and progress.',
    buttonLabel: 'Learn More',
  },
  {
    image: secondImage,
    title: 'Training',
    description: 'Acuitus team is made up of professionals in data management and analytics, customer care relationship, sales and marketing,\
     capacity building projects among other facilitations\
      We have a team of experts in the field of data management and analytics, customer care relationship, sales and marketing, capacity building projects among other facilitations.\
     ',
    buttonLabel: 'Our Sevices',
  },
  {
    image: fourthImage,
    title: 'Activation',
    description: 'From immersive events to captivating product launches, our Activation service transforms concepts into tangible moments that engage, inspire, and leave a lasting impact',
    buttonLabel: 'Our Services',
  },
  {
    image: fifthImage,
    title: 'Trainings',
    description: 'We are committed to offering innovative solutions that address a wide range of business challenges. As part of our dedication to sustainability and diversified expertise, we are proud to introduce our specialized farming training program',
    buttonLabel: 'Our Services',
  }
];


const useStyles = createStyles((theme) => ({
  masaaiImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: rem(840), // Set an initial height

    [theme.fn.smallerThan('sm')]: {
      width: '100vw', // Full width of the viewport
      height: '100vh', // Full height of the viewport
      backgroundSize: 'cover',
      minHeight: rem(500), // Set a minimum height for small screens
    },
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: theme.spacing.xl, // Adjust spacing for small screens
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

     [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28), // Adjust font size for smaller screens
    },
  },


  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm, // Adjust font size for smaller screens
    },
  },

  customButton: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(15),
    fontWeight: 600,
    width: 150,
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    width: '100%',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesData.length); // Cycle through images
    }, 15000); // Change image every 15 seconds

    return () => {
      clearInterval(interval); // Clear the interval when component unmounts
    };
  }, [currentIndex]);

  const currentImageData = imagesData[currentIndex];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imagesData.length);
  };

   // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + imagesData.length) % imagesData.length);
  };

  return (
    <div className={classes.masaaiImage} style={{ backgroundImage: `url(${currentImageData.image})` }}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
  />
      <Container className={classes.container}>
        <Title className={classes.title}>{currentImageData.title}</Title>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
          color="rgb(0, 208, 132)" //text color here
        >
          {currentImageData.description}
        </Text>

        <Button
          size="lg"
          className={classes.customButton}
          style={{ backgroundColor: 'rgb(0, 208, 132)', color: 'white' }}
        >
          {currentImageData.buttonLabel}
        </Button>
        {/* Navigation icons with click handlers */}
        <div className={classes.control}>
          <span onClick={prevImage} style={{ cursor: 'pointer', marginRight: '10px' }}><FcPrevious size={32} /></span>
          <span onClick={nextImage} style={{ cursor: 'pointer' }}><FcNext size={32} /></span>
        </div>
      </Container>
    </div>
  );
}