import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconSearch,IconUserCheck, IconExternalLink, IconBell} from '@tabler/icons-react';
import React, { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';

const mockdata = [
  {
    title: 'Project Management',
    description:
      'We offer exceptional project management services. Our commitment is to transform your projects into success stories by providing expert project management tailored to your unique needs and objectives',
    keyPoints: ['Proven Expertise', 'Customized Solutions', 'Strategic Vision', 'Modern & Real-time M & E tools'],
    icon: IconSearch,
  },
  {
    title: 'Resource Mobilization',
    description:
      'In the pursuit of growth, securing the necessary resources is a pivotal step. At Acuitus Duo Company, we excel in crafting resource mobilization strategies that not only facilitate access to vital resources but also lay the groundwork for sustainable development. Our approach to resource mobilization is a carefully orchestrated process that harnesses expertise, connections, and innovation.',
    keyPoints: ['Data Excellence', 'Tailored Solutions', 'Tailored Solutions', 'Cutting-Edge Technology'],
    icon: IconBell,
  },
  {
    title: 'Research',
    description:
      'We  provide insights that help you make informed decisions. Our comprehensive research services encompass Product research, Market research, and Needs assessment',
    keyPoints: ['Market Research', 'Product Research and Development', 'Customer Satisfaction and Feedback', 'Social and Public Policy Research'],
    icon: IconSearch,
  },
  {
    title: 'Marketing',
    description:
      'In a rapidly evolving business landscape, effective marketing is the cornerstone of success. At Acuitus consultancy, we specialize in crafting holistic marketing strategies that not only cater to your unique needs but also create a lasting impact. Our approach is centered on a deep understanding of your brand, audience, and objectives, allowing us to develop strategies that resonate and drive results',
    keyPoints: [],
    icon: IconUserCheck,
  },
  {
    title: 'Activations',
    description:
      'In the world of business and innovation, the Activation service we provide goes beyond mere execution – its about creating experiences that resonate. We understand that bringing an idea to life requires careful orchestration, and thats where our expertise shines. From immersive events to captivating product launches, our Activation service transforms concepts into tangible moments that engage, inspire, and leave a lasting impact',
    keyPoints: [],
    icon: IconUserCheck,
  },
  {
    title: 'Capacity Building',
    description:
      'Our expertise extends to a wide spectrum of training and mentorship programs that cover critical areas such as Agribusiness, Value Addition,  Financial Literacy, Business Development,  Technology integration, Market Analysis, Financial Literacy,Linkages, Climate change and Disaster management,  Leadership and Healthcare Education. We also provide financial and market linkages, facilitating connections between groups and financial institutions as well as markets for their products',
    keyPoints: [],
    icon: IconUserCheck,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function ServCards() {
  const { classes, theme } = useStyles();
  const [hoveredCard, setHoveredCard] = useState(null);
  const backgroundColors = ['rgb(248,247,253)']; 

  const features = mockdata.map((feature, index) => (
     <Card
    key={feature.title}
    shadow={hoveredCard === feature.title ? 'md' : 'none'}
    radius="md"
    className={classes.card}
    padding="xl"
    onMouseEnter={() => setHoveredCard(feature.title)}
    onMouseLeave={() => setHoveredCard(null)}
    style={{
    //   borderColor: hoveredCard === feature.title ? 'rgb(0, 208, 132)' : 'rgb(141,42,28)',
    //   transform: hoveredCard === feature.title ? 'translateY(-5px)' : 'rgb(141,42,28)',
      boxShadow: hoveredCard === feature.title ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '',
      backgroundColor: backgroundColors[index % backgroundColors.length], // Use a cyclic index to select a background color
    }}>
      <feature.icon size={rem(50)} stroke={2} color="black" />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="black" mt="sm">
        {feature.description}
      </Text>
      <ul style={{ marginTop: '10px', color: 'black' }}>
        {feature.keyPoints.map((point, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
            <IconExternalLink size="1rem" style={{ marginRight: '0.5rem', color: 'inherit' }} />
            {point}
          </li>
        ))}
      </ul>
    <a href="/discover-more" c="white" mt="md" ta="right" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    Discover More
    <TbArrowNarrowRight size="1rem" style={{ marginLeft: '0.2rem', color: 'inherit' }} />
  </a>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        For your future prosperity, we provide world-class services
      </Title>

      <Text c="black" className={classes.description} ta="center" mt="md">
        We are a team of highly skilled professionals with a passion for creating
        innovative training and solutions for you  and your business.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}