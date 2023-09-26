import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function TwitterTimeline() {
  return (
    <div style={styles.container}>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='swahilipothub'
        options={{
          height: '600px',
          width: 1000,
          theme: 'dark',
        }}
      />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
}

export default TwitterTimeline
