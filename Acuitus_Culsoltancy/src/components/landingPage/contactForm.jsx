import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';
import "../../assets/styles/landingPage/contactForm.scss";

export default function Contactform() {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <div className='contact-f'>
  <form
  onSubmit={async (e) => {
    e.preventDefault();

let apiUrl = 'http://localhost:3000/message';

// Checking if the localhost server is available, and if not, use the remote URL.
if (!window.location.hostname || window.location.hostname === 'localhost') {
  apiUrl = 'https://acuitus-api.onrender.com/message';
}

console.log('Selected apiUrl:', apiUrl);

try {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.values),
  });

  if (response.ok) {
    setSubmissionStatus('success');
    form.reset();
  } else {
    setSubmissionStatus('error');
  }
} catch (error) {
  setSubmissionStatus('error');
}
  }}>

{submissionStatus === 'success' ? (
    <div style={{ color: 'green' }}>Message sent successfully!</div>
  ) : submissionStatus === 'error' ? (
    <div style={{ color: 'red' }}>Message could not be sent. Please try again later.</div>
  ) : null}
    <Title
      order={2}
      size="h1"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="center"
      color='white'
      >
      Send us a <span style={{ color: 'rgb(0,208,132)' }}>message</span>
    </Title>
    <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <TextInput
        label="Name"
        placeholder="Your name"
        name="name"
        variant="filled"
        {...form.getInputProps('name')}
        labelProps={{ style: { color: 'white' } }}
      />
      <TextInput
        label="Email"
        placeholder="Your email"
        name="email"
        variant="filled"
        {...form.getInputProps('email')}
        labelProps={{ style: { color: 'white' } }}
      />
    </SimpleGrid>

    <TextInput
      label="Subject"
      placeholder="Subject"
      mt="md"
      name="subject"
      variant="filled"
      {...form.getInputProps('subject')}
      labelProps={{ style: { color: 'white' } }}
    />
    <Textarea
      mt="md"
      label="Message"
      placeholder="Your message"
      maxRows={10}
      minRows={5}
      autosize
      name="message"
      variant="filled"
      {...form.getInputProps('message')}
      labelProps={{ style: { color: 'white' } }}
    />

    <Group position="center" mt="xl">
      <Button type="submit" size="md" style={{ backgroundColor: 'rgb(0, 208, 132)', borderRadius: '30px' }}>
        Send message
      </Button>
    </Group>
  </form>
</div>
  );
}