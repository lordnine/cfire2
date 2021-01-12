
const bigCardStyles = {
    card: {
      backgroundColor: 'white',
      marginVertical: 12,
      borderWidth: 0,
      minHeight: 114,
      borderRadius: 10,
      flex: 1,
      width: '98%',
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.22,
        elevation: 3,
    },

    imgContainer: {
        borderRadius: 10,
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
        fontSize: 30, 
        fontWeight: '800', 
        color: 'black'
    },

    bigCardContainer: {
        width: '96%', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        paddingHorizontal: '2%'
    },

    description: {
        fontWeight: '400',
        fontSize: 16
    },

    subTitle: {
        fontWeight: '600',
        fontSize: 18,
      },

    imageContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: '30%',
        borderBottomEndRadius:0,
        borderBottomStartRadius: 0,
      },

};

export default bigCardStyles;