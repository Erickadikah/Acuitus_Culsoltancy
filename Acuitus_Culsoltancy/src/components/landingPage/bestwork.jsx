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
import { IconSearch, IconUser, IconUserCheck, IconExternalLink, IconBell, IconPencil} from '@tabler/icons-react';
import React, { useState } from 'react';

const mockdata = [
  {
    title: 'Product Research',
    description:
      'We gather, analyzing, and interpreting information about market and product or service to be offered for sale in that market, and about the past, present, and potential customers for the product or service',
    keyPoints: ['Market Segamentation', 'Brand and Advertisement research', 'New Prouct Testing'],
    icon: IconSearch,
  },
  {
    title: 'Public policy research services',
    description:
      'Our public policy research services are designed to help you understand the political and regulatory environment in which you operate. We provide you with the information you need to make informed decisions and develop effective strategies.',
    keyPoints: ['Qualitative Studies', 'Quantitative data Collection', 'Regestry data request and analysis'],
    icon: IconBell,
  },
  {
    title: 'Attitude Research services',
    description:
      'We provide you with the information you need to make informed decisions and develop effective strategies.',
    keyPoints: ['Brand awareness and image Studies', 'segmentation', 'Quantity Survays'],
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

export default function Bestwork() {
  const { classes, theme } = useStyles();
  const [hoveredCard, setHoveredCard] = useState(null);
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow={hoveredCard === feature.title ? 'md' : 'none'}
      radius="md"
      className={classes.card}
      padding="xl"
      onMouseEnter={() => setHoveredCard(feature.title)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        borderColor: hoveredCard === feature.title ? 'rgb(0, 208, 132)' : 'rgb(141,42,28)',
        transform: hoveredCard === feature.title ? 'translateY(-5px)' : 'rgb(141,42,28)',
        boxShadow: hoveredCard === feature.title ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '',
      }}>
      <feature.icon size={rem(50)} stroke={2} color="rgb(0, 208, 132)" />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      <ul style={{ marginTop: '10px', color: 'rgb(0, 208, 132)' }}>
        {feature.keyPoints.map((point, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
            <IconExternalLink size="1rem" style={{ marginRight: '0.5rem', color: 'inherit' }} />
            {point}
          </li>
        ))}
      </ul>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        {/*<Badge variant="filled" size="lg">
          Best company ever
        </Badge>*/}
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Best known for!
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        We are a team of highly skilled professionals with a passion for creating
        innovative training and solutions for you  and your business.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

// Bestwork