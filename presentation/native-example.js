import React from 'react'
import WebPlayer from 'react-native-web-player';

const NativeExample = ({ code }) => (
  <div>
    <WebPlayer
      style={{
        marginTop: 4,
        border: 0,
        height: 420
      }}
      code={code}
    />
  </div>
);

export default NativeExample;