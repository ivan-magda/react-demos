import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContent,
    thumbnailImage,
    thumbnailImageContainer,
    headerText,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailImageContainer}>
          <Image
            style={thumbnailImage}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnailImage: {
    width: 50,
    height: 50
  },
  thumbnailImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
