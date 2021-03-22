
import { CAMPFIRE_PRIMARY } from './colors';

const buttons = {
  
    mainButton: {
        minHeight: 50,
        minWidth: '49%',
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