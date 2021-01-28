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
      deal: '10% off',
      date: '12',
      img: ajHastings,
      horizontal: true,
      full: false,
      food: false,
      cta: 'view shiz',
      category: 2,
    },
    {
      key: 1,
      companyName: "Johnny's Tavern",
      deal: 'free app',
      date: '7',
      img: johnnys,
      title: 'Free Appetizer with Purchase of Two Entrees',
      food: true,
      cta: 'view stuff',
      category: 0,
    },
    {
      key: 2,
      companyName: 'Chipotle',
      title: 'Free side of guac with purchase of entree and drink',
      deal: 'bogo',
      date: '4',
      img: chipotle,
      cta: 'View Code',
      food: true,
      category: 0,
    },
    {
      key: 3,
      companyName: 'LL Bean',
      title: 'Holiday sweater sale',
      deal: 'sweater sale',
      date: '18',
      img: ll_bean,
      horizontal: true,
      cta: 'View Deal',
      food: false,
      category: 1,
    },
    {
      key: 4,
      companyName: "Donnie's Steak House",
      title: 'Burger and fries',
      date: '3',
      deal: 'free side',
      img: donnies,
      cta: 'View article', 
      horizontal: true,
      food: true,
      category: 0,
    }, 
    {
      key: 5,
      companyName: 'Hair East',
      title: '$20 Terrible Haircut on Mondays',
      deal: '$20 haircut',
      date: '7',
      img: hair_east,
      cta: 'View Deal',
      food: false,
      category: 3,
    }
  ];