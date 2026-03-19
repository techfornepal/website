import * as UI from '@/components/ui';

/**
 * This file defines all components available in MDX files.
 * We can use these components directly in our MDX content without importing them.
 */
export function getMDXComponents(): Record<string, unknown> {
  return {
    a: UI.Link,
    Container: UI.Container,
    Stack: UI.Stack,

    Text: UI.Text,
    Heading: UI.Heading,
    Prose: UI.Prose,

    Button: UI.Button,
    NavigationLink: UI.NavigationLink,

    LocaleDate: UI.LocaleDate,

    BlogMeta: UI.BlogMeta,
    Tag: UI.Tag,

    Logo: UI.Logo,
  };
}
