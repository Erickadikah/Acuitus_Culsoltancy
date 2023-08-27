import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import masaaiImage from '../../assets/images/landingPage/masaai.jpg'; // Import the image using ES modules

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `url(${masaaiImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: rem(900),
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
    backgroundColor: 'red', // Change this to your desired background color
    color: 'white', // Change this to the desired text color
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

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Welcome to Acuitus Duo Consultancy Firm.</Title>
        <Text className={classes.description} size="xl" mt="xl">
          We Provide the best consultancy services in the Country
          Acuitus Duo Co. Ltd is a global institutional capacity building, technical, and management consultancy firm. We
          offer an array of services to government institutions, private sector, and non-governmental organizations  
        </Text>

        <Button size="lg"  className={classes.customButton} style={{ backgroundColor: 'rgb(0,208,132)', color: 'white' }}>
          Read More
        </Button>
      </Container>
    </div>
  );
}

