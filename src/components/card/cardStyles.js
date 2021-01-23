

const cardStyles = {

    card: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 8,
        borderWidth: 0,
        minHeight: 114,
        borderRadius: 10,
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

    imageContainer: {
        borderRadius: 10,
        elevation: 1,
        overflow: 'hidden',
        height: 130,
        paddingBottom: '2%',
    },

    horizontalStyles: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height: 200,
        justifyContent: 'space-between',
    },

    verticalStyles: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        height: 110,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(66,202,253,.3)',
    },

    foodStuff: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '2%',
    },

    regStuff: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: '2%',
        paddingBottom: '2%',
    },

    foodBackground:{
        backgroundColor: '#9E1030FF',
    },

    regBackground:{
        backgroundColor: '#F49F1C',
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


};


export default cardStyles;