import BrowserWindow from '@site/src/components/BrowserWindow';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import React, { useEffect, useRef } from 'react';

const LANGUAGE_TO_LABEL = {
  html: 'HTML',
  js: 'JavaScript',
  xamarin: 'Xamarin',
};

const ORDER = ['viewer', 'js', 'html', 'xamarin'];

export function CodeExamples({ selected = 'js', groupId, children }) {
  // Children are an MDX element that wrap an Example or Viewer element
  const childrenArray = React.Children.toArray(children);

  // Map the passed children to an intermediate definition that'll be used
  // later for creating child TabItem elements and values to be passed to
  // the Tabs component.
  const defs = childrenArray.map((c) => {
    if (c.props.originalType === Example) {
      return {
        label: LANGUAGE_TO_LABEL[c.props.lang] || c.props.lang,
        value: c.props.lang,
        children: (
          <Example
            lang={c.props.lang}
            code={c.props.code}
            children={c.props.children}
          />
        ),
      };
    } else if (c.props.originalType === Viewer) {
      return {
        label: 'Viewer',
        value: 'viewer',
        children: <Viewer src={c.props.src} />,
      };
    } else {
      throw new Error(`Unhandled element type ${c.props.mdxType}`);
    }
  });

  // Sort the definitions so tabs appear in a consistent order.
  const sortedDefs = defs.sort((a, b) => {
    const indexA = ORDER.indexOf(a.value);
    const indexB = ORDER.indexOf(b.value);

    return indexA - indexB;
  });

  const values = sortedDefs.map((def) => ({
    label: def.label,
    value: def.value,
  }));

  // Wrap each element in a TabItem
  const tabs = sortedDefs.map((def) => {
    return (
      <TabItem key={def.value} value={def.value}>
        {def.children}
      </TabItem>
    );
  });

  const defaultValue =
    defs.length === 0 && defs.some((def) => def.value === selected)
      ? selected
      : defs[0].value;

  return (
    <Tabs defaultValue={defaultValue} groupId={groupId} values={values}>
      {tabs}
    </Tabs>
  );
}

export function Example({ lang, code, children }) {
  return code ? (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={code.default}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
    <>{children}</>
  );
}

export function Viewer({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    function preventScroll(event) {
      event.preventDefault();
    }

    if (ref.current != null) {
      ref.current.contentWindow.addEventListener('wheel', preventScroll, {
        passive: false,
      });
    }
    return () => {
      if (ref.current != null) {
        ref.current.contentWindow.removeEventListener('wheel', preventScroll);
      }
    };
  });

  return (
    <BrowserWindow url="developer.vertexvis.com">
      <iframe
        ref={ref}
        width="100%"
        height="400"
        src={src}
        frameBorder="0"
        style={{ display: 'block' }}
      ></iframe>
    </BrowserWindow>
  );
}
