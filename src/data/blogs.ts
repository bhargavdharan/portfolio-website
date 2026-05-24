export interface Blog {
  title: string;
  link: string;
  pubDate: string;
  category: string;
  image?: string;
}

export const blogs: Blog[] = [
  {
    title: "Why Most IAM Failures Are Lifecycle Failures — Not Authentication Issues",
    link: "https://medium.com/@bhargavdharan20/why-most-iam-failures-are-lifecycle-failures-not-authentication-issues-13d43d564dbd",
    pubDate: "Jan 7, 2026",
    category: "IAM & Security",
    image: "https://cdn-images-1.medium.com/max/800/1*riQW8AQLv6GISLzLI9pIMA.png",
  },
  {
    title: "Identity and Access Management: A Foundational Layer of Modern Security Systems",
    link: "https://medium.com/@bhargavdharan20/identity-and-access-management-a-foundational-layer-of-modern-security-systems-45323ad2c021",
    pubDate: "Dec 5, 2025",
    category: "IAM & Security",
    image: "https://cdn-images-1.medium.com/max/800/1*RMmMq16Q1-ACpg_XZXVgFA.png",
  },
  {
    title: "Unlocking the Digital Gateway: An Exploration into IAM",
    link: "https://medium.com/@bhargavdharan20/unlocking-the-digital-gateway-an-exploration-into-iam-f2612a5e3df5",
    pubDate: "Nov 27, 2023",
    category: "IAM & Security",
    image: "https://cdn-images-1.medium.com/max/800/1*RMmMq16Q1-ACpg_XZXVgFA.png",
  },
  {
    title: "Exploring the Power of Python Functions: Part 1",
    link: "https://medium.com/@bhargavdharan20/exploring-the-power-of-python-functions-part-1-21355597274a",
    pubDate: "Jul 9, 2023",
    category: "Programming",
    image: "https://cdn-images-1.medium.com/max/800/1*wXAxTA_Dr4a6NKY9axCkdw.png",
  },
];
