

const categoryCardStyles = {

    card: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 8,
        borderWidth: 0,
        minHeight: 130,
        borderRadius: 4,
        flex: 1,
        height:'40%',
        width: '100%'
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.15,
        elevation: 3,
    },

    touchableContainer: {
        height: '100%',
    },
    
    categoryNameContainer: {
        width: '100%', 
        height:'94%', 
        alignItems:'center', 
        justifyContent: 'center', 
        position: 'absolute',
    },

    horizontalStyles: {
        height: 200,
    },

    imageContainer: {
        borderRadius: 4,
        elevation: 1,
        overflow: 'hidden',
        height: 130,
        flex: 1,
    },

    foodStuff: {
        fontSize: 18,
        fontWeight: '800',
        color: 'white',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '2%',
        textAlign: 'center',
    },

    regStuff: {
        fontSize: 18,
        fontWeight: '800',
        color: 'white',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: '2%',
        paddingBottom: '2%',
        textAlign: 'center',
    },

    foodBackground:{
        backgroundColor: '#5d3c85',
    },
};


export default categoryCardStyles;