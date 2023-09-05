import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import school from "../../../assets/images/landingPage/billboard.png"
import chamaa from  "../../../assets/images/landingPage/flers&b.jpeg"
import chamaaT from "../../../assets/images/landingPage/burnersg.jpeg"
import streetp from "../../../assets/images/landingPage/streepoles.png"
import flyer from "../../../assets/images/landingPage/flyers.png"

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
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
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
      <Button variant="white" color="dark">
        Talk to us
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: school,
    title: 'Billboard Adverts',
    category: 'Branding',
  },
  {
    image: chamaa,
    title: 'Flyers and Posters',
    category: 'Branding',
  },
  {
    image: chamaaT,
    title: 'Burners at Two Rivers',
    category: 'Branding',
  },
  {
    image: streetp,
    title: 'Street Poles Adverts',
    category: 'Branding',
  },
  {
    image: flyer,
    title: 'Flyers',
    category: 'Branding',
  }
];

export default function Carouselb() {
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