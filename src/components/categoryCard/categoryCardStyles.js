

const categoryCardStyles = {

    card: {
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 0,
        minHeight: 130,
        borderRadius: 12,
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
        alignItems:'flex-start', 
        justifyContent: 'flex-end', 
        position: 'absolute',
    },

    horizontalStyles: {
        height: 100,
    },

    imageContainer: {
        borderRadius: 12,
        elevation: 1,
        overflow: 'hidden',
        height: 130,
        flex: 1,
    },

    foodStuff: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '2%',
        textAlign: 'center',
        marginLeft: '3%',
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
        backgroundColor: '#009688',  /*5d3c85*/
    },
};


export default categoryCardStyles;