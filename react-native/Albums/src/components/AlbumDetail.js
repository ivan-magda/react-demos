import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { headerContent, thumbnailImage } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailImage}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailImage: {
    width: 50,
    height: 50
  }
};

export default AlbumDetail;
