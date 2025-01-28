import waffleThumbnail from 'images/image-waffle-thumbnail.jpg'
import waffleMobile from '/images/image-waffle-mobile.jpg'
import waffleTablet from '/images/image-waffle-tablet.jpg'
import waffleDesktop from '/images/image-waffle-desktop.jpg'

import cremeBruleeThumbnail from '/images/image-creme-brulee-thumbnail.jpg'
import cremeBruleeMobile from '/images/image-creme-brulee-mobile.jpg'
import cremeBruleeTablet from '/images/image-creme-brulee-tablet.jpg'
import cremeBruleeDesktop from '/images/image-creme-brulee-desktop.jpg'

import macaronThumbnail from '/images/image-macaron-thumbnail.jpg'
import macaronMobile from '/images/image-macaron-mobile.jpg'
import macaronTablet from '/images/image-macaron-tablet.jpg'
import macaronDesktop from '/images/image-macaron-desktop.jpg'

import tiramisuThumbnail from '/images/image-tiramisu-thumbnail.jpg'
import tiramisuMobile from '/images/image-tiramisu-mobile.jpg'
import tiramisuTablet from '/images/image-tiramisu-tablet.jpg'
import tiramisuDesktop from '/images/image-tiramisu-desktop.jpg'

import baklavaThumbnail from '/images/image-baklava-thumbnail.jpg'
import baklavaMobile from '/images/image-baklava-mobile.jpg'
import baklavaTablet from '/images/image-baklava-tablet.jpg'
import baklavaDesktop from '/images/image-baklava-desktop.jpg'

import meringueThumbnail from '/images/image-meringue-thumbnail.jpg'
import meringueMobile from '/images/image-meringue-mobile.jpg'
import meringueTablet from '/images/image-meringue-tablet.jpg'
import meringueDesktop from '/images/image-meringue-desktop.jpg'

import cakeThumbnail from '/images/image-cake-thumbnail.jpg'
import cakeMobile from '/images/image-cake-mobile.jpg'
import cakeTablet from '/images/image-cake-tablet.jpg'
import cakeDesktop from '/images/image-cake-desktop.jpg'

import brownieThumbnail from '/images/image-brownie-thumbnail.jpg'
import brownieMobile from '/images/image-brownie-mobile.jpg'
import brownieTablet from '/images/image-brownie-tablet.jpg'
import brownieDesktop from '/images/image-brownie-desktop.jpg'

import pannaCottaThumbnail from '/images/image-panna-cotta-thumbnail.jpg'
import pannaCottaMobile from '/images/image-panna-cotta-mobile.jpg'
import pannaCottaTablet from '/images/image-panna-cotta-tablet.jpg'
import pannaCottaDesktop from '/images/image-panna-cotta-desktop.jpg'

export default [
  {
    image: {
      thumbnail: waffleThumbnail,
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5
  },
  {
    image: {
      thumbnail: cremeBruleeThumbnail,
      mobile: cremeBruleeMobile,
      tablet: cremeBruleeTablet,
      desktop: cremeBruleeDesktop
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0
  },
  {
    image: {
      thumbnail: macaronThumbnail,
      mobile: macaronMobile,
      tablet: macaronTablet,
      desktop: macaronDesktop
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0
  },
  {
    image: {
      thumbnail: tiramisuThumbnail,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      desktop: tiramisuDesktop
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5
  },
  {
    image: {
      thumbnail: baklavaThumbnail,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      desktop: baklavaDesktop
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0
  },
  {
    image: {
      thumbnail: meringueThumbnail,
      mobile: meringueMobile,
      tablet: meringueTablet,
      desktop: meringueDesktop
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0
  },
  {
    image: {
      thumbnail: cakeThumbnail,
      mobile: cakeMobile,
      tablet: cakeTablet,
      desktop: cakeDesktop
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5
  },
  {
    image: {
      thumbnail: brownieThumbnail,
      mobile: brownieMobile,
      tablet: brownieTablet,
      desktop: brownieDesktop
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5
  },
  {
    image: {
      thumbnail: pannaCottaThumbnail,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
      desktop: pannaCottaDesktop
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5
  }
]
export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }