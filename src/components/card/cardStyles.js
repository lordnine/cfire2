

const cardStyles = {

    card: {
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 2,
        borderWidth: 0,
        minHeight: 162,
        borderRadius: 4,
        flex: 1,
        height:'40%',
        width: '100%'
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        elevation: 100,
    },

    imageContainer: {
        borderRadius: 4,
        elevation: 1,
        overflow: 'hidden',
        height: 130,
        flex: 1,
    },

    horizontalStyles: {
        height: 200,
    },

    verticalStyles: {
        height: 110,
        flex: 1,
        backgroundColor: 'grey',
    },

    foodStuff: {
        fontSize: 20,
        fontWeight: '800',
        color: '#5d3c85',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '2%',
        textAlign: 'center',
    },

    regStuff: {
        fontSize: 20,
        fontWeight: '800',
        color: '#5d3c85',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: '2%',
        paddingBottom: '2%',
        textAlign: 'center',
    },

    foodBackground:{
        backgroundColor: 'white',
    },

    regBackground:{
        backgroundColor: 'white',
    },

    cardDescription: {
        padding: 6,
        height: 90,
        flex: 1,
        flexWrap: 'nowrap',
    },

    cardTitle: {
        flex: 1,
        flexWrap: 'nowrap',
        paddingBottom: 8
    },

    cardCTA: {
        color: 'cornflowerblue'
    },

    touchableContainer: {
        height: '100%',
    },
    
    companyNameContainer: {
        width: '100%', 
        height:'94%', 
        alignItems:'center', 
        justifyContent: 'center', 
        position: 'absolute',
    },

    dealContainer: {
        width: '100%', 
        height:'100%', 
        alignItems:'flex-start', 
        justifyContent: 'flex-end', 
        position: 'absolute',
    },

    dealText: {
        color: '#242526', 
        marginLeft: '4.5%', 
        fontSize: 16, 
        fontWeight: '600', 
        marginBottom: '4%'
    },
    
    dateContainer: {
        width: '100%', 
        height:'100%', 
        alignItems:'flex-end', 
        justifyContent: 'flex-start', 
        position: 'absolute',
    },

    dateText: {
        color: 'darkgrey', 
        marginRight: '4.5%', 
        fontSize: 12, 
        fontWeight: '600', 
        marginTop: '4%',
    },

    categoryContainer: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-start', 
        alignItems: 'center' , 
        position: 'absolute',
    },

    categoryImage: {
        height: '9%', 
        flexWrap: 'nowrap', 
        marginTop: '4%', 
        marginRight: '86%',
        tintColor: 'darkgrey'
    },

    qrContainer: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'flex-end', 
        alignItems: 'center' , 
        position: 'absolute',
    },

    qrImage: {
        height: '12%', 
        flexWrap: 'nowrap', 
        marginBottom: '4.5%', 
        marginLeft: '84%',
        tintColor: 'cornflowerblue'
    },

};


export default cardStyles;