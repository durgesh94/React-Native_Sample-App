import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, View, Text } from 'react-native';
import useInterval from './useInterval';
import { styles } from "./carousel.style";

type CarouselProps = {
    images: string[];
};

const MAX_WIDTH = Dimensions.get('screen').width;

export const Carousel: React.FC<CarouselProps> = ({ images }) => {

    const animation = useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0);

    useInterval(() => handleAnimation(), 5000);

    const handleAnimation = () => {
        let newCurrentImage = currentImage + 1;

        if (newCurrentImage >= images.length) {
            newCurrentImage = 0;
        }

        Animated.spring(animation.current, {
            toValue: -(MAX_WIDTH * newCurrentImage),
            useNativeDriver: true,
        }).start();

        setCurrentImage(newCurrentImage);
    };

    return (
        <React.Fragment>
            <View>
                <Animated.View
                    style={[
                        styles.container,
                        {
                            transform: [{ translateX: animation.current }],
                        },
                    ]}>
                    {images.map((image, idx) => (
                        <View>
                            <Image key={image} source={{ uri: image }} style={styles.image} />
                            <Text style={styles.textStyle}>{idx}</Text>
                        </View>
                    ))}
                </Animated.View>
                <View style={styles.indicatorContainer}>
                    {images.map((image, index) => (
                        <View
                            key={`${image}_${index}`}
                            style={[
                                styles.indicator,
                                index === currentImage ? styles.activeIndicator : undefined,
                            ]}
                        />
                    ))}
                </View>
            </View>
        </React.Fragment>
    );
};