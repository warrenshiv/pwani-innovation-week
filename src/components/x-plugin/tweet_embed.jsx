import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeline() {
  {/*useEffect(() => {
    // You can customize the widget options here
  }, []);*/}

  return (
    <div style={styles.container}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="pwaniinnovation"
        options={{
          height: 400,
          width: 500,
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
    },
};

export default TwitterTimeline;
