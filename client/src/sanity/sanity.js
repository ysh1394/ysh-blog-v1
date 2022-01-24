import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createPreviewSubscriptionHook,
  createClient,
  createPortableTextComponent,
} from 'next-sanity';
// import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-01-24',
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  withCredentials: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const userCurrentUser = createCurrentUserHook(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      // h1: (props) => <h1 className="text-2xl font-bold my-5" {...props} />,
      h2: (props) => <h2 className="text-xl font-bold my-5" {...props} />,
      li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
      link: ({ href, children }) => (
        <a className="text-blue-500 hover:underline" href={href}>
          {children}
        </a>
      ),
      code: ({ node = {} }) => {
        console.log('node .>', node);
        const { code, language } = node;
        if (!code) {
          return null;
        }
        return (
          <SyntaxHighlighter language={language || 'text'}>
            {code}
          </SyntaxHighlighter>
        );
      },
    },
  },
});
