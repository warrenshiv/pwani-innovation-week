import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeline() {
  return (
    <div style={styles.container}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="pwaniinnovation"
        options={{
          height: '400px',
          width: '50%',
          theme: 'light',
        }}
      />
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,
    },
};

export default TwitterTimeline;
