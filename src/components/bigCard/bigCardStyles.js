
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
        color: 'black',
    },

    bigCardContainer: {
        width: '89%', 
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
        marginTop: '10%',
        width: '90%',
        height: '30%',
    },

};

export default bigCardStyles;