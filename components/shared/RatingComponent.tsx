import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example icon library, use your preferred icon library

const StarRating = ({rating}: any) => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5; // Total number of stars

    for (let i = 1; i <= totalStars; i++) {
      const starIconName = i <= rating ? 'star' : 'star-outline'; // Determine whether to render a filled or empty star based on the rating
      stars.push(<Icon key={i} name={starIconName} size={16} color="gold" />);
    }

    return stars;
  };

  return <View style={{flexDirection: 'row'}}>{renderStars()}</View>;
};

export default StarRating;
