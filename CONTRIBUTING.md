# Contributing to Tech For Nepal Blog

Welcome to Tech For Nepal! We're excited to have you contribute to our community blog. This guide will help you understand how to write and submit blog posts that align with our mission of empowering Nepal through technology.

## Writing Blog Posts

### Blog Post Format

All blog posts are written in MDX format (Markdown with JSX components) and stored in the `content/blog/` directory.

### Required Frontmatter

Each blog post must include the following frontmatter at the top of the file:

```yaml
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "A brief description of your post (1-2 sentences)"
publishDate: 2025-09-10
author:
  name: "Your Name"
  avatar: "/images/authors/your-image.png"
tags: ["tag1", "tag2", "tag3"]
---
```

#### Frontmatter Fields Explained

- **title**: The main title of your blog post (required)
- **slug**: URL-friendly version of your title (required)
  - Use lowercase letters, numbers, and hyphens only
  - Example: "My Great Post" → "my-great-post"
- **excerpt**: A compelling summary that appears in blog listings (required)
- **publishDate**: Publication date in YYYY-MM-DD format (required)
- **author**: Your author information (required)
  - **name**: Your full name or preferred display name
  - **avatar**: Path to your author image (see Author Images section)
- **tags**: Array of relevant tags (required, 2-3 tags recommended) (we may decide to update your tags to make them more synonymous with our blog's tags)

### File Naming Convention

- File name should match your slug with `.mdx` extension
- Example: `my-great-post.mdx` for slug "my-great-post"
- Place files in the `content/blog/` directory

## Author Images

### Adding Your Author Image

1. **Upload your image** to the `public/images/authors/` directory
2. **Image requirements**:
   - Format: PNG, JPG, or JPEG
   - Size: Square aspect ratio (recommended: 400x400px or larger)
   - File size: Under 500KB for optimal performance
   - Professional or friendly headshot preferred
3. **Naming convention**: Use your name or username (e.g., `balendra-shah.png`, `sushila-karki.jpg`)
4. **Reference in frontmatter's avatar**: Use the path `/images/authors/your-image.png`

### Example Author Section

```yaml
author:
  name: "Balendra Shah"
  avatar: "/images/authors/balendra-shah.png"
```

## Content Guidelines

### Topics We Welcome

- **Technology in Nepal**: Local tech scene, startups, innovations
- **Open Source**: Contributing to OSS, project highlights, community stories
- **Community Building**: Tech events, meetups, collaboration stories
- **Digital Transformation**: How technology is changing Nepal
- **Youth & Innovation**: Stories of young innovators and entrepreneurs
- **Politics & Governance**: Stories of how the way we care for and govern our country is changing
- **Social Issues**: Stories of how the way we live and deal with our society and its problems is changing, and how technology is helping us (or could help us) solve them
- **Culture & Heritage**: Stories of how the way we preserve our culture and heritage is changing
- **Science & Technology**: Stories of how the way we do science and technology is changing
- **Environment & Sustainability**: Stories of how the way we protect our environment and sustain our lives is changing, and what roles technology can play in it
- **Health & Wellness**: Stories of how we are changing the way we take care of our health and wellness
- **Education & Learning**: Stories of how the way we learn and educate ourselves is changing due to the introduction of new technological tools & advancements

All-in-all, we want to cover a wide range of topics that are relevant to our country and its people. As long as it is a story that is interesting and relevant to our country and its people, we would love to hear about it. Even if you think it may not necessarily be about technology or fall under one of the above categories, if you think what you are writing about is important and relevant to our country and its people, please submit a pull request & we'll see what we can do.

### Writing Style

- **Clear and accessible**: Write for a broad audience, explain technical terms if there are any
- **Engaging**: You can use storytelling, examples, and personal experiences to make your post more engaging
- **Constructive**: Focus on solutions and positive impact, or at least provide a realistic view of the problem and its solutions
- **Inclusive**: Use inclusive language and consider diverse perspectives. While we may write about specific topics, we want to make sure we are not alienating any group of people.
- **Informative**: We want to write about topics that are informative and educational, and not just promotional.

## Tagging Guidelines

Use relevant, specific tags to help readers find your content:

### Suggested Tags
- **Technology**: `tech`, `innovation`, `digital-transformation`
- **Development**: `development`, `programming`, `open-source`, `web-dev`, `mobile-dev`
- **Community**: `community`, `collaboration`, `networking`, `events`
- **Location**: `nepal`, `kathmandu`, `tech-scene`
- **Career**: `career`, `learning`, `skills`, `education`
- **Specific topics**: `ai`, `blockchain`, `startup`, `fintech`, etc.

## Submission Process

### Step 1: Prepare Your Post
1. Write your blog post following the format above
2. Add your author image to `public/images/authors/`
3. Test your frontmatter formatting
4. Review content for clarity and errors

### Step 2: Submit Your Contribution

Steps to follow:

1. **Fork** the repository:

```bash
git clone https://github.com/techfornepal/website.git
cd website
```

2. **Create a new branch** for your post:

```bash
git checkout -b blog/{your-post-title}
```

3. **Add your files**:

```bash
git add content/blog/{your-post-title}.mdx
git add public/images/authors/{your-author-image}.png
```

4. **Commit your changes**: 

```bash
git commit -m "Add blog post: {your-post-title}"
```

5. **Push to your fork**: 

```bash
git push origin blog/{your-post-title}
```

6. **Create a Pull Request** with:

   - Clear title: "Blog Post: Your Post Title"
   - Description explaining your post's topic and value
   - Any relevant context or notes for reviewers

### Step 3: Review Process

- Our team will review your submission
- We may suggest edits or improvements
- Once approved, your post will be merged and published
- You'll be notified when your post goes live!

## Pre-Submission Checklist

Before submitting your blog post, ensure:

- [ ] Frontmatter is complete and properly formatted
- [ ] Slug matches filename (without .mdx extension)
- [ ] Author image is uploaded and referenced correctly
- [ ] Tags are relevant and properly formatted
- [ ] Content is original and adds value to our community
- [ ] Post is well-structured with clear headings
- [ ] Grammar and spelling are checked
- [ ] Links are working and relevant
- [ ] Code examples (if any) are tested and formatted

## Community Standards

### What We Encourage
- Authentic personal experiences and insights
- Constructive criticism and solution-oriented thinking
- Collaboration and knowledge sharing
- Diverse perspectives and inclusive content
- Supporting fellow community members

### What We Don't Accept
- Plagiarized or copied content
- Promotional content without educational value
- Discriminatory or offensive language
- Spam or irrelevant content
- Personal attacks or inflammatory content

## Need Help?

If you have questions about contributing:

1. **Check existing blog posts** for examples and inspiration
3. **Open an issue** on GitHub for technical questions
4. **Reach out** to our community maintainers


Thank you for contributing to Tech For Nepal! Our revolution starts with us! 🇳🇵

---

*This guide is a living document. If you have suggestions for improvements, please let us know!*
