import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title } = album;
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
