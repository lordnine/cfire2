
import text from './text';
import containers from './containers';
import { CAMPFIRE_SECONDARY } from './colors';

const loginFlowStyles = {


    genericWhiteContainer: containers.genericWhiteContainer,

    mainTitle: text.loginFLowTitle,

    twoButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },

    twoButtonWidth: {
        width: '49%'
    },

    inputContainer: {
        height: '78%',
    },

    inputTitle: text.loginFlowInputTitle,

    inputStyle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
        backgroundColor: CAMPFIRE_SECONDARY, 
        height: 40, 
        fontSize: 14, 
        borderRadius: 4, 
        paddingLeft: 10
    },

    primaryContainer: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '7%',
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },

    button: {
        minHeight: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12
    }

};


export default loginFlowStyles;