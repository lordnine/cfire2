
import { CAMPFIRE_PRIMARY } from '../../styles/colors';
const cardStyles = {

    card: {
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 0,
        minHeight: 220,
        borderRadius: 10,
        flex: 1,
        height:'40%',
        width: '100%',
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        elevation: 100,
        elevation: 1,
    },

    wrappingContainer: {
        height: '100%', 
        backgroundColor: 'white', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '100%', 
        borderRadius: 10, 
    },

    barContainer: {
        width: '93%', 
        height: '15%', 
        alignItems: 'flex-start', 
        flexWrap: 'wrap', 
        marginVertical: '4%'
    },

    leftTopIconContainer: {
        width: '50%', 
        justifyContent: 'flex-start',
    },

    leftBottomIconContainer: {
        width: '50%', 
        height: '100%', 
        justifyContent: 'flex-end'
    },

    rightTopIconContainer: {
        height: '100%', 
        width: '50%', 
        alignItems: 'flex-end'
    },
    
    rightBottomIconContainer: {
        width: '50%', 
        height: '100%', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end'
    },
    
    qrTouchable: {
        height: '100%', 
        width: '20%', 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end'
    },

    cardIcon: {
        width: 18, 
        height: 18, 
        tintColor: 'darkgrey'
    },

    companyNameText: {
        fontSize: 20,
        fontWeight: '800',
        color: CAMPFIRE_PRIMARY,
        textAlign: 'center',
    },
    
    companyNameContainer: {
        width: '100%', 
        alignItems:'center', 
        justifyContent: 'center', 
    },

    dealContainer: {
        width: '100%', 
    },

    dealText: {
        color: 'grey', 
        fontSize: 16, 
        fontWeight: '500', 
    },

    dateText: {
        color: 'darkgrey', 
        fontSize: 13, 
        fontWeight: '600', 
    },

};


export default cardStyles;