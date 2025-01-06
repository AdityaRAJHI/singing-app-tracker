import React, { useState } from 'react';

    function Community() {
      const [postText, setPostText] = useState('');

      return (
        <div className="feature-container">
          <h2>Community Engagement</h2>
          <p>Share your recordings and connect with other singers:</p>
          <textarea placeholder="Write a post..." value={postText} onChange={(e) => setPostText(e.target.value)} />
          <button>Post</button>
        </div>
      );
    }

    export default Community;
