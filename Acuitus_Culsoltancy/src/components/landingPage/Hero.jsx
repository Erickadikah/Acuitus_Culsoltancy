import React, { useState, useEffect } from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import masaaiImage from '../../assets/images/landingPage/masaai.jpg'; // Import the image using ES modules
import secondImage from '../../assets/images/landingPage/marketr.jpg';
import thirdImage from '../../assets/images/landingPage/chamaactv.jpeg'; // Import the third image
import fourthImage from '../../assets/images/landingPage/schoolact.jpg'
import fifthImage from '../../assets/images/landingPage/ftraning.jpg'
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const imagesData = [
  {
    image: masaaiImage,
    title: 'Welcome to Acuitus Duo - your trusted partner in transformation and growth',
    description: 'At Acuitus, we believe in the power of transformation. We stands as a beacon of innovation, inspiration, and progress.',
    buttonLabel: 'Learn More',
    linkTo: '/about',
  },
  {
    image: fourthImage,
    title: 'Activation',
    description: 'From immersive events to captivating product launches, our Activation service transforms concepts into tangible moments that engage, inspire, and leave a lasting impact',
    buttonLabel: 'Our Services',
    linkTo: '/services',
  },
  {
    image: fifthImage,
    title: 'Trainings',
    description: 'We are committed to offering innovative solutions that address a wide range of business challenges. As part of our dedication to sustainability and diversified expertise, we are proud to introduce our specialized farming training program',
    buttonLabel: 'Our Services',
    linkTo: '/services',
  },
  {
    image: secondImage,
    title: 'Research',
    description: 'We  provide insights that help you make informed decisions.\
    Get deeper understanding of your industry, enabling you to stay ahead of the curve and respond effectively to changing landscapes',
    buttonLabel: 'Our Services',
    linkTo: '/services',
  }
];

// ... existing imports ...

const useStyles = createStyles((theme) => ({
  masaaiImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: rem(920),
    transition: 'background-image 0.5s ease-in-out',

    [theme.fn.smallerThan('sm')]: {
      width: '100vw',
      height: '100vh',
      minHeight: rem(400),
    },
  },

  container: {
    height: rem(800),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 'auto', // Auto height for smaller screens
      paddingBottom: theme.spacing.xl,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(26),
    },
  },

  description: {
    color: theme.white,
    maxWidth: '100%', // Adjust the maximum width for smaller screens

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.sm,
    },
  },

  customButton: {
    backgroundColor: 'rgb(0, 208, 132)',
    color: 'white',
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(15),
    fontWeight: 600,
    width: '100%', // Make the button full-width
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    width: '100%',
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesData.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const currentImageData = imagesData[currentIndex];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % imagesData.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + imagesData.length) % imagesData.length);
  };

  return (
    <div className={classes.masaaiImage} style={{ backgroundImage: `url(${currentImageData.image})` }}>
      <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)" opacity={1} zIndex={0} />
      <Container className={classes.container}>
        <Title className={classes.title}>{currentImageData.title}</Title>
        <Text className={classes.description} size="xl" mt="xl" color="rgb(0, 208, 132)">
          {currentImageData.description}
        </Text>
        <Link to={currentImageData.linkTo}>
          <Button size="lg" className={classes.customButton}>
            {currentImageData.buttonLabel}
          </Button>
        </Link>
        <div className={classes.control}>
          <span onClick={prevImage} style={{ cursor: 'pointer', marginRight: '10px' }}><FcPrevious size={32} /></span>
          <span onClick={nextImage} style={{ cursor: 'pointer' }}><FcNext size={32} /></span>
        </div>
      </Container>
    </div>
  );
}
