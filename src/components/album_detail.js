
import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from '../components/card';
import CardSection from '../components/card_section';

const AlbumDetail = ({ album }) => {
    const {
        artist,
        image,
        title,
        thumbnail_image
    } = album;

    const {
        headerContentStyle,
        headerTextStyle,
        imageStyle,
        thumbnailContainerStyle,
        thumbnailStyle
    } = styles;
    
    const thumbnail = { uri: thumbnail_image };
    const albumImage = { uri: image };

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={thumbnail}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={albumImage}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
