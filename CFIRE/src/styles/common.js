import { CAMPFIRE_RED } from './colors';

const common = {
  redContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: CAMPFIRE_RED,
  },
  text: {
    fontSize: 15,
    fontWeight: '100',
    color: 'white',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  megaText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  textLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  minimalistInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    color: 'white',
    padding: 7,
  },
  minimalistButton: {
    height: 50,
    width: 280,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  inverseMinimalistButton: {
    height: 50,
    width: 280,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
};

export default common;
