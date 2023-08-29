import React, { useState } from 'react';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import image from '../../assets/images/landingPage/image1.jpg'
import image2 from '../../assets/images/landingPage/ex1.jpg'
import image3 from '../../assets/images/landingPage/farming.jpg'
import image4 from '../../assets/images/landingPage/school2.jpg'
import image5 from '../../assets/images/landingPage/vsla.jpg'
import Navbar from "./nav";
// import "../../assets/styles/landingPage/services.scss";

const mockdata = [
  {
    title: 'Training',
    image: image,
    content: ['We conduct our trainings in hospitals, conferences, groups, farms etc. on different training needs specified by clients', 'Acuitus partnered with Arifu and Colgate to conduct training to farmers and groups respectively', 'Also partnered with Siaya Community Based Trainers Organization (SCOBATO) to empower famers, Self help groups, traders, and many more groups '
  ],
  explanation: `Acuitus team is made up of professionals in Data management and Analytics, customer care relationship, sales and marketing, capacity building projects among other facilitati`,
  },
  {
    title: 'Chama(Group) Activation',
    image: image2,
    content: ['Promote Colgate as a brand hence enhancing  market expansion', 'Boost Product sales', 'Gather Market insights', 'Promoting Oral Health care', 'Product sample research'],
    explanation: `Some samples of activations we conduct in welfare groups, CBOs, Family Groups, and Business registered Groups through which our teams enhance capacity building through education.
Children are also included in our programs`,

  },
   {
    title: 'In-School Activation',
    image: image4,
    content: [
      'Oral health care education',
      'Product sample research',
      'Create continuous habit in oral health care',
      'Gather market insights',
      'Promote Colgate as a brand',
    ],
    explanation: `In the "In-School Activation" service, we provide the following services:\n\n- Oral health care education: We educate students about the importance of oral health care and proper dental hygiene practices.\n- Product sample research: We conduct research using product samples to gather insights about student preferences and usage.\n- Create continuous habit in oral health care: We work to instill a regular habit of oral health care among students, promoting a lifetime of healthy habits.\n- Gather market insights: Our activities in schools help us gather valuable insights about the preferences and behaviors of students, contributing to our market research efforts.\n- Promote Colgate as a brand: Through our engagement in schools, we actively promote the Colgate brand, enhancing its visibility among students and educators.`,
  },
  {
    title: 'Village Savings & Loans Associations (VSLA) Trainings',
    image: image5,
    content: ['Scala Woman group during end cycle sharing out ceremony in Ugenya Sub-county (Siaya County)', 'Ti Matek Self Help group during  VSLA transaction meeting- Siaya county', 'VSLA cluster meeting', 'Ngima Manyien Women group  during transaction Meeting.'],
    explanation: `In the "In-School Activation" service, we provide the following services:\n\n- Oral health care education: We educate students about the importance of oral health care and proper dental hygiene practices.\n- Product sample research: We conduct research using product samples to gather insights about student preferences and usage.\n- Create continuous habit in oral health care: We work to instill a regular habit of oral health care among students, promoting a lifetime of healthy habits.\n- Gather market insights: Our activities in schools help us gather valuable insights about the preferences and behaviors of students, contributing to our market research efforts.\n- Promote Colgate as a brand: Through our engagement in schools, we actively promote the Colgate brand, enhancing its visibility among students and educators.`,

  },
  {
    title: 'Farming Trainings',
    image: image3,
    content: ['Livestock farming training in Nyeri County', 'Apiculture farmers training in Machakos County', 'VSLA cluster meeting', 'Together as One group during farming training in Homabay', 'Poultry farming training in Uasin Gishu County'],
    explanation: `In the "In-School Activation" service, we provide the following services:\n\n- Oral health care education: We educate students about the importance of oral health care and proper dental hygiene practices.\n- Product sample research: We conduct research using product samples to gather insights about student preferences and usage.\n- Create continuous habit in oral health care: We work to instill a regular habit of oral health care among students, promoting a lifetime of healthy habits.\n- Gather market insights: Our activities in schools help us gather valuable insights about the preferences and behaviors of students, contributing to our market research efforts.\n- Promote Colgate as a brand: Through our engagement in schools, we actively promote the Colgate brand, enhancing its visibility among students and educators.`,

  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export default function Services() {
  const { classes } = useStyles();
  const [openService, setOpenService] = useState(null);

  const cards = mockdata.map((article) => (
  <div key={article.title} className="card-container">
    <Navbar />
    <Card
      p="md"
      radius="md"
      component="div"
      className={`${classes.card} card-content`}
      onClick={() => setOpenService(article.title === openService ? null : article.title)}
      mt={50}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio>
      <Text className={classes.title} mt={10}>
        {article.title}
      </Text>
      {/* Display the explanation */}
      {openService === article.title && (
        <Text mt="md">{article.explanation}</Text>
      )}
      {/* Display key points for the content */}
      {article.content.map((point, index) => (
        <Text key={index} mt="md">
          ▶️ {point} {/* Add an arrow icon to each key point */}
        </Text>
      ))}
    </Card>
  </div>
));
  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

// Services