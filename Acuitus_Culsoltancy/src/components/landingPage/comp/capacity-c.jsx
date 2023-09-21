import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import farming from "../../../assets/images/landingPage/framtraining.jpg"
import healthp from  "../../../assets/images/landingPage/healthp.jpeg"
import chamaaT from "../../../assets/images/landingPage/chamaaT.jpeg"
import farming2 from "../../../assets/images/landingPage/trainee.jpeg"
import beeekeeping from "../../../assets/images/landingPage/beehive.jpeg"
import { Link } from 'react-router-dom';
import bee from "../../../assets/images/landingPage/beehive.jpeg"


const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: 'rgb(0, 208, 132)',
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: 'rgb(0, 208, 132)',
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link to='/contactUs'>
      <Button variant="white" color="dark">
        Talk to us
      </Button>
      </Link>
    </Paper>
  );
}

const data = [
  {
    image: farming,
    title: 'Agribusiness Farming Training',
    category: 'Capacity Building',
  },
  {
    image: healthp,
    title: 'Training of health community health promoters',
    category: 'Branding',
  },
  {
    image: chamaaT,
    title: 'Training Village Savings and Loan Associations, Farmer Service',
    category: 'Branding',
  },
  {
    image: farming2,
    title: 'Our Training',
    category: 'Training',
  },
  {
    image: beeekeeping,
    title: 'Our bee keeping training at kinda kwer in west Alego ward, Siaya county'
  }
];

export default function Carouselc() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}