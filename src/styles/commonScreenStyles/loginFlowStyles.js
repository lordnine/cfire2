
import text from '../text';
import containers from '../containers';
import { CAMPFIRE_SECONDARY } from '../colors';

const loginFlowStyles = {


    genericWhiteContainer: containers.genericWhiteContainer,

    mainTitle: text.loginFLowTitle,

    buttonContainer: {
        justifyContent: 'center',
        minWidth: '100%'
    },
    
    buttonWidth: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

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
        minWidth: '100%'
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
        minWidth: '100%',
        justifyContent: 'center',
        paddingHorizontal: '8%',
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },

    disabledButton: {
        opacity: .55
    },

    alertContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    errorText: {
        color: 'red', 
        fontWeight: '700'
    },

    successText: {
        color: 'darkcyan', 
        fontWeight: '700'
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