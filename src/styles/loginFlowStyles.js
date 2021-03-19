
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

    disabledButton: {
        opacity: .55
    },

    headingDivider: {
        height: '7%',
        backgroundColor: 'transparent'
    },

    mainContentDivider: {
        height: '6%',
        backgroundColor: 'transparent'
    },

    inputTitleDivider: {
        height: '1.5%',
        backgroundColor: 'transparent'
    },

    inputDivider: {
        height: '4%',
        backgroundColor: 'transparent'
    },

    buttonDivider: {
        height: '6.5%',
        backgroundColor: 'transparent'
    },

    alertDivider: {
        height: '3.5%',
        backgroundColor: 'transparent'
    }

};


export default loginFlowStyles;