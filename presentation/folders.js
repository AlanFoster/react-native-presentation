import React from 'react';
import {
  Text
} from "spectacle";

const Comment = function ({ comment }) {
  if (!comment) return <span />

  return (
    <span style={{ color: 'black' }}>
      - {comment}
    </span>
  );
};

const WithComments = function (Component) {
  return function (props) {
    return (
      <Component
        comment={<Comment comment={props.comment} />}
        {...props}
      />
    );
  }
}

const FolderStructure = function (props) {
  const style = {
    textAlign: 'left',
    margin: '0 auto'
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

const Children = function (props) {
  const style = {
    marginLeft: '50px'
  };

  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return (
          <div key={child.name} style={style}>
            {child}
          </div>
        );
      })}
    </div>
  )
}

const Folder = function (props) {
  return (
    <div>
      <Text textColor="black" {...props}>
        {props.name}/ {props.comment}
      </Text>
      <Children children={props.children} />
    </div>
  );
}

const File = WithComments(function (props) {
  return (
    <Text textColor="black" {...props}>
      - {props.children} {props.comment}
    </Text>
  );
});

export {
  FolderStructure,
  Folder,
  File
}