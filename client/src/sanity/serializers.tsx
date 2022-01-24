import SyntaxHighlighter from 'react-syntax-highlighter';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const serializers = {
  h1: (props: any) => <h1 className="text-2xl font-bold my-5" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold my-5" {...props} />,
  li: ({ children }: any) => <li className="ml-4 list-disc">{children}</li>,
  link: (props: any) => {
    const { href, children } = props;

    return (
      <a className="text-blue-500 hover:underline" href={href}>
        {children}
      </a>
    );
  },

  youtube: (node: any) => {
    const { url } = node;
    const id = getYouTubeId(url);
    return <YouTube videoId={id || ''} />;
  },

  code: (node: any) => {
    const { code, language } = node;
    console.log('code props >>>', node);

    if (!code) {
      return null;
    }
    return (
      <SyntaxHighlighter language={language || 'text'}>
        {code}
      </SyntaxHighlighter>
    );
  },
  // someCustomType: Post,
};

export default serializers;
