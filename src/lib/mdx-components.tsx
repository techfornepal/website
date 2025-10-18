import { type MDXComponents } from 'mdx/types';
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
export function getMDXComponents(): MDXComponents {
  return {
    // Layout components
    Container: UI.Container,
    Stack: UI.Stack,
    Section: UI.Section,
    PageMain: UI.PageMain,
    ContentWrapper: UI.ContentWrapper,

    // Typography components
    Text: UI.Text,
    Heading: UI.Heading,
    GradientHeading: UI.GradientHeading,
    Prose: UI.Prose,

    // Button components
    Button: UI.Button,
    NavigationLink: UI.NavigationLink,

    // Display components
    LocaleDate: UI.LocaleDate,

    // Blog components
    BlogPostCard: UI.BlogPostCard,
    BlogMeta: UI.BlogMeta,
    PostMeta: UI.PostMeta,
    Tag: UI.Tag,

    // Hero components
    HeroSection: UI.HeroSection,
    HeroTitle: UI.HeroTitle,
    HeroDescription: UI.HeroDescription,
    HeroTagline: UI.HeroTagline,
    HeroActions: UI.HeroActions,

    // Branding components
    Logo: UI.Logo,

    // We can also override default HTML elements
    // For example, we can make all links open in the same tab by default:
    // a: (props) => <a {...props} />,
  };
}
