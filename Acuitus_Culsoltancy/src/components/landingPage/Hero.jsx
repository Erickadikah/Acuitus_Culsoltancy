import React, { useState, useEffect } from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import masaaiImage from '../../assets/images/landingPage/masaai.jpg'; // Import the image using ES modules
import secondImage from '../../assets/images/landingPage/image1.jpg'; // Import the second image
import thirdImage from '../../assets/images/landingPage/digital.jpg'; // Import the third image


const imagesData = [
  {
    image: masaaiImage,
    title: 'Welcome to Acuitus Duo Consultancy Firm.',
    description: 'We Provide the best consultancy services in the Country Acuitus Duo Co. Ltd is a global institutional capacity building, technical, and management consultancy firm. We offer an array of services to government institutions, private sector, and non-governmental organizations',
    buttonLabel: 'Read More',
  },
  {
    image: secondImage,
    title: 'Training',
    description: 'Acuitus team is made up of professionals in Data management and Analytics, customer care relationship, sales and marketing,\
     capacity building projects among other facilitations\
      We have a team of experts in the field of data management and analytics, customer care relationship, sales and marketing, capacity building projects among other facilitations.\
     ',
    buttonLabel: 'Learn More',
  },
  {
    image: thirdImage,
    title: 'Chama(Group) Activation',
    description: ' We promote Colgate as a brand hence enhancing  market expansion\
    Boost Product sales Gather Market insights\
    Promoting Oral Health care Product sample research',
    buttonLabel: 'Explore',
  },
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
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  customButton: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: rem(14),
    fontWeight: 500,
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    // width: 200,

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
    }, 10000); // Change image every 15 seconds

    return () => {
      clearInterval(interval); // Clear the interval when component unmounts
    };
  }, [currentIndex]);

  const currentImageData = imagesData[currentIndex];

  return (
    <div className={classes.masaaiImage} style={{ backgroundImage: `url(${currentImageData.image})` }}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>{currentImageData.title}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {currentImageData.description}
        </Text>

        <Button size="lg" className={classes.customButton} style={{ backgroundColor: 'rgb(0,208,132)', color: 'white' }}>
          {currentImageData.buttonLabel}
        </Button>
      </Container>
    </div>
  );
}