import {
  Container,
  PageMain,
  GradientHeading,
  Text,
  Stack,
  Heading,
  LocaleDate,
} from '@/components/ui';
import Link from 'next/link';

export default function Contact() {
  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <GradientHeading as="h1" size="2xl">
            Contact Us
          </GradientHeading>
          <Stack spacing="lg">
            <LocaleDate date="2025-10-18" prefix="Last updated:" size="sm" color="muted" />
            <LocaleDate prefix="Today's date:" size="sm" />
            <Text size="base">
              We are completely open source, and all we want to do is contribute to our country in
              the ways that we believe we can the best: through our skills and knowledge in the tech
              and research fields. If you, just like us, share common sentiments and have a deep
              love for our country, we&apos;d love to hear from you, whether you&apos;re interested
              in contributing, have questions, or want to get involved in our community.
            </Text>
            <Text size="base">
              We don&apos;t yet have social media outside of GitHub, so for any inquiries,
              suggestions, or general feedback, please reach out to us via email at{' '}
              <a
                href="mailto:namaste@techfornepal.com"
                className="hover:text-[color:var:primary)] font-bold hover:underline"
              >
                namaste@techfornepal.com
              </a>
              .
            </Text>
            <Heading as="h3" size="lg" weight="medium">
              Contributing via Writing
            </Heading>
            <Text size="base">
              If you want to send us your writing for the blog, you can do one of the following:
              <ul className="list-inside list-disc">
                <li>
                  read our{' '}
                  <a
                    href="https://github.com/techfornepal/website/blob/main/CONTRIBUTING.md"
                    className="hover:text-[color:var:primary)] font-bold hover:underline"
                  >
                    CONTRIBUTING.md
                  </a>{' '}
                  file on our GitHub repository and follow the instructions.
                </li>
                <li>
                  send us your writing via email (alongside with your name, email, and your photo if
                  you&apos;re comfortable with that). We can do the uploading for you. The blog
                  posts will look something like{' '}
                  <Link
                    href="/blog/gen-z"
                    className="text-[color:var:primary)] font-bold hover:underline"
                  >
                    this
                  </Link>
                  .
                </li>
              </ul>
            </Text>
            <Heading as="h3" size="lg" weight="medium">
              Contributing via Tech & Research
            </Heading>
            <Text size="base">
              At the moment, it&apos;s just me doing this alone, but I believe we have some
              exceedingly difficult but (what we consider) important projects that we need to work
              on. I&apos;m someone who&apos;s quite focused on AI Research and Development, and
              therefore, this is me showing my dedication to our country in ways that I think I can
              be most useful in.
            </Text>
            <Text size="base">
              Here are a couple of projects that I am planning to work on, with the help of a few
              more skilled helping hands:
              <ul className="list-inside list-disc">
                <li>
                  Development of an open-source translation model for English to Nepali. I have been
                  doing my own research on if we have any existing models, and it seems like the
                  ones we have are not good enough. OpenAI&apos;s newest GPT-5 is pretty okay at it,
                  but I see some potential in using some open-source models to make them better,
                  perhaps. But there&apos;s a whole issue with the amount of data we have to train
                  on, how we&apos;re going to generate that data (since we must not use synthetic
                  data due to the fear of cultural context getting lost), whether using an
                  open-source model is even worth it given that Nepali is a low-resource language,
                  and so on. So many exciting things to research and work on.
                </li>
                <li>
                  Creation of datasets of different types of local languages for their preservation,
                  and so on. This is something even more challenging since the data for these
                  languages are even more scarce. But it&apos;s something that we must do. Languages
                  in our country are dying. It makes me extremely sad.
                </li>
                <li>
                  Reading lots of papers on Machine Learning and its applications in our country,
                  and then writing about them in a way that is easy to understand for the general
                  public.
                </li>
                <li>And all kinds of projects that we can think of that can help our country.</li>
              </ul>
            </Text>
            <Text size="base">
              We might also need some core members who are good at development, design, and so on.
              If you think you have something to contribute on the tech side, please open a
              discussion on our{' '}
              <a
                href="https://github.com/techfornepal/techfornepal/discussions"
                className="hover:text-[color:var:primary)] font-bold hover:underline"
              >
                GitHub
              </a>
              .
            </Text>
            <Text size="base">
              If you want to get in touch with me personally, you can do so via email at{' '}
              <a
                href="mailto:sumit@sumit.ml"
                className="hover:text-[color:var:primary)] font-bold hover:underline"
              >
                sumit@sumit.ml
              </a>
              .
            </Text>
          </Stack>
        </Stack>
      </Container>
    </PageMain>
  );
}
