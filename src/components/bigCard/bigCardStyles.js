
const bigCardStyles = {

    card: {
      backgroundColor: 'white',
      borderWidth: 0,
      minHeight: 114,
      borderRadius: 8,
      flex: 1,
      width: '100%',
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.22,
        elevation: 3,
    },

    wrappedContainer: {
        borderRadius: 6,
        elevation: 1,
        overflow: 'hidden',
        height: 130,
    },

    cardStyles: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center'
        
    },

    imageResizeContainer: {
        height: '100%',
        width: '100%',
    },

    companyTitle: {
        fontSize: 20, 
        fontWeight: '800', 
        color: '#242526',
    },

    bigCardContainer: {
        width: '93%', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 

    },

    description: {
        fontWeight: '400',
        fontSize: 15,
        color: 'gray'
    },

    subTitle: {
        fontWeight: '700',
        fontSize: 15,
        color: 'gray'
    },

    locationTitle: {
        fontWeight: '700',
        fontSize: 15,
        color: 'cornflowerblue'
    },

    imageContainer: {
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: '4%',
        width: '94%',
        height: '30%',
    },

    titleContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
    },

    categoryLogo: {
        tintColor: 'black',
        width: 15, 
        height: 15,
    },

    locationContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
    },

    locationLogo: {
        tintColor: 'cornflowerblue', 
        height: 11, 
        width: 11,
    }
};

export default bigCardStyles;