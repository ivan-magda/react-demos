import React from 'react';
import { Component } from 'react';

import Posts from './posts_list';
import SelectedPostsList from './selected_posts_list';

export default () => {
  return (
    <div>
      <h4>Selected Posts</h4>
      <SelectedPostsList />
      <hr />
      <h4>All Posts</h4>
      <Posts />
    </div>
  );
}
