import React from "react";
import ReactDOM from "react-dom";
import BlockContent from "@sanity/block-content-to-react";

import PropTypes from "prop-types";
const client = require("@sanity/client")({
  projectId: "94p8b3ja",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

client.fetch('*[_type == "post"][0]').then((article) => {
  ReactDOM.render(
    <BlockContent blocks={article.body} serializers={serializers} />,
    document.getElementById("root")
  );
});

export default {
  name: "code",
  type: "object",
  title: "code",
  fields: [
    {
      name: "url",
      type: "url",
      title: "code block",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    // component: CodeBlock,
  },
};
