
import { CAMPFIRE_SECONDARY } from '../../styles/colors';


const welcomeScreenStyles = {
  
    campfireTitle: {
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
    },

    carouselContainer: {
        height: '44%',
        backgroundColor: CAMPFIRE_SECONDARY, //////'#25284f', 
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    carouselStyle: {
        backgroundColor: CAMPFIRE_SECONDARY, //// '#25284f', 
        width: '100%', 
        borderRadius: 18,
    },

    buttonContainer: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end',
        width: '100%',
    },

    buttonWidth: {
        width: '49%'
    }


};


export default welcomeScreenStyles;