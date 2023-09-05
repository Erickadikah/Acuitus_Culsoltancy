import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Contactform() {
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
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
  <form onSubmit={form.onSubmit(() => {})}>
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