
import { CAMPFIRE_PRIMARY } from './colors';

const buttons = {
  
    mainButton: {
        height: 50,
        minHeight: 50,
        borderWidth: 2,
        borderRadius: 28,
    },

    minimalistButton: {
        borderColor: 'white',
        backgroundColor: 'transparent',
    },

    inverseMinimalistButton: {
        borderColor: 'white',
        backgroundColor: 'white',
    },

    learnMoreMinimalistButton: {
        borderColor: CAMPFIRE_PRIMARY,
        backgroundColor: 'transparent',
    },

    learnMoreMinimalistInverseButton: {
        borderColor: CAMPFIRE_PRIMARY,
        backgroundColor: CAMPFIRE_PRIMARY,
    }

};

export default buttons;