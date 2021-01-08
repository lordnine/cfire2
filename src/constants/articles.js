import ajHastings from '../assets/images/aj-hastings.jpg';
import johnnys from '../assets/images/johnnys.jpg';
import chipotle from '../assets/images/chipotle.jpg';
import hair_east from '../assets/images/haireast.jpg';
import ll_bean from '../assets/images/llbean.jpg';
import donnies from '../assets/images/donnies.jpg';

export default [
    {
      key: 0,
      companyName: 'AJ Hastings',
      title: 'Enjoy 10% off with QR Code',
      img: ajHastings,
      horizontal: true,
      full: false,
      food: false,
      cta: 'view shiz',
    },
    {
      key: 1,
      companyName: "Johnny's Tavern",
      img: johnnys,
      title: 'Free Appetizer with Purchase of Two Entrees',
      food: true,
      cta: 'view stuff',
    },
    {
      key: 2,
      companyName: 'Chipotle',
      title: 'Free side of guac with purchase of entree and drink',
      img: chipotle,
      cta: 'View Code',
      food: true,
    },
    {
      key: 3,
      companyName: 'LL Bean',
      title: 'Holiday sweater sale',
      img: ll_bean,
      horizontal: true,
      cta: 'View Deal',
      food: false,
    },
    {
      key: 4,
      companyName: "Donnie's Steak House",
      title: 'Burger and fries',
      img: donnies,
      cta: 'View article', 
      horizontal: true,
      food: true,
    }, 
    {
      key: 5,
      companyName: 'Hair East',
      title: '$20 Terrible Haircut on Mondays',
      img: hair_east,
      cta: 'View Deal',
      food: false,
    }
  ];