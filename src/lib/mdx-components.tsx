import * as UI from '@/components/ui';

/**
 * This file defines all components available in MDX files.
 * We can use these components directly in our MDX content without importing them.
 *
 * Example usage in MDX:
 * ```mdx
 * <Button href="/contact">Get in touch</Button>
 * <Stack spacing="lg">
 *   <Text>Some content</Text>
 * </Stack>
 * ```
 */
export function getMDXComponents(): Record<string, unknown> {
  return {
    Container: UI.Container,
    Stack: UI.Stack,
    Section: UI.Section,
    PageMain: UI.PageMain,
    ContentWrapper: UI.ContentWrapper,

    Text: UI.Text,
    Heading: UI.Heading,
    GradientHeading: UI.GradientHeading,
    Prose: UI.Prose,

    Button: UI.Button,
    NavigationLink: UI.NavigationLink,

    LocaleDate: UI.LocaleDate,

    BlogPostCard: UI.BlogPostCard,
    BlogMeta: UI.BlogMeta,
    PostMeta: UI.PostMeta,
    Tag: UI.Tag,

    HeroSection: UI.HeroSection,
    HeroTitle: UI.HeroTitle,
    HeroDescription: UI.HeroDescription,
    HeroTagline: UI.HeroTagline,
    HeroActions: UI.HeroActions,

    Logo: UI.Logo,
  };
}
