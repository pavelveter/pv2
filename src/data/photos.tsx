import type { Photo } from 'react-photo-album'

export interface aPhoto {
  src: string
  width: number
  height: number
}

export interface PhotoAlbum {
  [key: string]: aPhoto[]
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// const originalPhotos: PhotoAlbum = {
//   Еду: [
//     {
//       src: '/food/032.jpg',
//       width: 594,
//       height: 893,
//       srcSet: [
//         { src: '/food/032_127x192.jpg', width: 127, height: 192 },
//         { src: '/food/032_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/food/041.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/food/041_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/041_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/106.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/106_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/106_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/151.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/151_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/151_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/176.jpg',
//       width: 1417,
//       height: 948,
//       srcSet: [
//         { src: '/food/176_256x171.jpg', width: 256, height: 171 },
//         { src: '/food/176_400x267.jpg', width: 400, height: 267 },
//       ],
//     },
//     {
//       src: '/food/181.jpg',
//       width: 676,
//       height: 1016,
//       srcSet: [
//         { src: '/food/181_127x192.jpg', width: 127, height: 192 },
//         { src: '/food/181_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/food/214.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/214_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/214_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/267.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/267_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/267_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/276.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/276_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/276_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/357.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/357_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/357_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/380.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/380_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/380_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/387.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/387_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/387_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/416.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/416_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/416_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/444.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/444_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/444_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/449.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/food/449_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/449_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/458.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/food/458_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/458_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/466.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/food/466_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/466_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/486.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/486_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/486_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/519.jpg',
//       width: 1421,
//       height: 941,
//       srcSet: [
//         { src: '/food/519_256x169.jpg', width: 256, height: 169 },
//         { src: '/food/519_400x264.jpg', width: 400, height: 264 },
//       ],
//     },
//     {
//       src: '/food/526.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/526_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/526_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/539.jpg',
//       width: 1319,
//       height: 877,
//       srcSet: [
//         { src: '/food/539_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/539_400x265.jpg', width: 400, height: 265 },
//       ],
//     },
//     {
//       src: '/food/540.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/540_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/540_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/557.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/557_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/557_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/568.jpg',
//       width: 1271,
//       height: 847,
//       srcSet: [
//         { src: '/food/568_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/568_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/655.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/655_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/655_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/685.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/685_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/685_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/725.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/725_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/725_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/727.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/727_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/727_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/731.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/food/731_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/731_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/738.jpg',
//       width: 1280,
//       height: 1920,
//       srcSet: [
//         { src: '/food/738_128x192.jpg', width: 128, height: 192 },
//         { src: '/food/738_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/food/803.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/803_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/803_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/824.jpg',
//       width: 1280,
//       height: 1920,
//       srcSet: [
//         { src: '/food/824_128x192.jpg', width: 128, height: 192 },
//         { src: '/food/824_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/food/826.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/food/826_127x192.jpg', width: 127, height: 192 },
//         { src: '/food/826_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/food/862.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/food/862_127x192.jpg', width: 127, height: 192 },
//         { src: '/food/862_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/food/903.jpg',
//       width: 1308,
//       height: 1920,
//       srcSet: [
//         { src: '/food/903_130x192.jpg', width: 130, height: 192 },
//         { src: '/food/903_204x300.jpg', width: 204, height: 300 },
//       ],
//     },
//     {
//       src: '/food/922.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/food/922_256x170.jpg', width: 256, height: 170 },
//         { src: '/food/922_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/food/927.jpg',
//       width: 1536,
//       height: 1920,
//       srcSet: [
//         { src: '/food/927_153x192.jpg', width: 153, height: 192 },
//         { src: '/food/927_240x300.jpg', width: 240, height: 300 },
//       ],
//     },
//     {
//       src: '/food/939.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/food/939_127x192.jpg', width: 127, height: 192 },
//         { src: '/food/939_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//   ],
//   Мероприятия: [
//     {
//       src: '/corp/027.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/027_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/027_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/029.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/029_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/029_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/043.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/043_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/043_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/145.jpg',
//       width: 1280,
//       height: 1920,
//       srcSet: [
//         { src: '/corp/145_128x192.jpg', width: 128, height: 192 },
//         { src: '/corp/145_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/corp/192.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/192_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/192_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/226.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/226_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/226_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/246.jpg',
//       width: 822,
//       height: 1229,
//       srcSet: [
//         { src: '/corp/246_128x192.jpg', width: 128, height: 192 },
//         { src: '/corp/246_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/corp/283.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/283_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/283_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/310.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/310_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/310_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/354.jpg',
//       width: 1460,
//       height: 968,
//       srcSet: [
//         { src: '/corp/354_256x169.jpg', width: 256, height: 169 },
//         { src: '/corp/354_400x265.jpg', width: 400, height: 265 },
//       ],
//     },
//     {
//       src: '/corp/368.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/368_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/368_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/379.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/corp/379_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/379_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/418.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/418_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/418_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/545.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/corp/545_127x192.jpg', width: 127, height: 192 },
//         { src: '/corp/545_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/corp/585.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/585_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/585_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/716.jpg',
//       width: 1280,
//       height: 1920,
//       srcSet: [
//         { src: '/corp/716_128x192.jpg', width: 128, height: 192 },
//         { src: '/corp/716_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/corp/741.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/741_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/741_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/756.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/756_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/756_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/803.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/corp/803_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/803_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/808.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/808_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/808_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/816.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/816_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/816_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/846.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/corp/846_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/846_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/923.jpg',
//       width: 1500,
//       height: 1000,
//       srcSet: [
//         { src: '/corp/923_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/923_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/corp/951.jpg',
//       width: 1000,
//       height: 1500,
//       srcSet: [
//         { src: '/corp/951_128x192.jpg', width: 128, height: 192 },
//         { src: '/corp/951_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/corp/962.jpg',
//       width: 1799,
//       height: 1200,
//       srcSet: [
//         { src: '/corp/962_256x170.jpg', width: 256, height: 170 },
//         { src: '/corp/962_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//   ],
//   Производства: [
//     {
//       src: '/indu/007.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/007_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/007_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/035.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/035_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/035_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/055.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/055_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/055_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/067.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/067_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/067_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/089.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/089_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/089_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/138.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/138_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/138_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/175.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/175_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/175_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/177.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/177_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/177_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/244.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/244_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/244_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/248.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/248_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/248_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/266.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/266_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/266_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/272.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/272_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/272_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/293.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/293_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/293_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/340.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/340_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/340_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/348.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/348_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/348_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/355.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/355_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/355_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/361.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/361_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/361_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/369.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/369_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/369_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/466.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/466_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/466_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/474.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/474_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/474_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/496.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/496_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/496_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/510.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/510_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/510_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/554.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/554_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/554_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/561.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/561_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/561_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/566.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/566_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/566_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/571.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/571_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/571_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/587.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/587_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/587_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/618.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/618_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/618_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/652.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/652_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/652_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/702.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/702_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/702_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/706.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/706_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/706_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/730.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/730_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/730_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/737.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/737_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/737_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/808.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/808_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/808_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/828.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/828_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/828_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/837.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/indu/837_127x192.jpg', width: 127, height: 192 },
//         { src: '/indu/837_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/indu/962.jpg',
//       width: 2000,
//       height: 1334,
//       srcSet: [
//         { src: '/indu/962_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/962_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/990.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/990_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/990_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/indu/993.jpg',
//       width: 2000,
//       height: 1333,
//       srcSet: [
//         { src: '/indu/993_256x170.jpg', width: 256, height: 170 },
//         { src: '/indu/993_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//   ],
//   Свадьбы: [
//     {
//       src: '/wdng/100.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/100_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/100_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/108.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/108_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/108_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/136.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/136_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/136_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/145.jpg',
//       width: 2000,
//       height: 1334,
//       srcSet: [
//         { src: '/wdng/145_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/145_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/155.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/155_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/155_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/169.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/wdng/169_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/169_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/192.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/wdng/192_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/192_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/193.jpg',
//       width: 1280,
//       height: 853,
//       srcSet: [
//         { src: '/wdng/193_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/193_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/202.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/202_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/202_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/206.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/206_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/206_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/208.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/208_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/208_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/222.jpg',
//       width: 1200,
//       height: 799,
//       srcSet: [
//         { src: '/wdng/222_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/222_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/293.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/293_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/293_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/296.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/296_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/296_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/333.jpg',
//       width: 1675,
//       height: 1675,
//       srcSet: [
//         { src: '/wdng/333_192x192.jpg', width: 192, height: 192 },
//         { src: '/wdng/333_300x300.jpg', width: 300, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/363.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/363_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/363_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/397.jpg',
//       width: 1200,
//       height: 799,
//       srcSet: [
//         { src: '/wdng/397_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/397_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/421.jpg',
//       width: 1167,
//       height: 853,
//       srcSet: [
//         { src: '/wdng/421_256x187.jpg', width: 256, height: 187 },
//         { src: '/wdng/421_400x292.jpg', width: 400, height: 292 },
//       ],
//     },
//     {
//       src: '/wdng/441.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/441_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/441_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/528.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/528_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/528_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/529.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/529_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/529_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/559.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/559_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/559_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/565.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/565_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/565_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/592.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/592_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/592_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/614.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/614_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/614_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/627.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/627_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/627_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/642.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/wdng/642_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/642_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/648.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/648_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/648_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/658.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/658_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/658_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/663.jpg',
//       width: 1334,
//       height: 2000,
//       srcSet: [
//         { src: '/wdng/663_128x192.jpg', width: 128, height: 192 },
//         { src: '/wdng/663_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/692.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/692_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/692_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/695.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/wdng/695_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/695_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/698.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/698_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/698_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/703.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/703_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/703_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/718.jpg',
//       width: 1333,
//       height: 2000,
//       srcSet: [
//         { src: '/wdng/718_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/718_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/737.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/737_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/737_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/738.jpg',
//       width: 682,
//       height: 1024,
//       srcSet: [
//         { src: '/wdng/738_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/738_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/759.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/759_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/759_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/766.jpg',
//       width: 1200,
//       height: 798,
//       srcSet: [
//         { src: '/wdng/766_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/766_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/808.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/wdng/808_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/808_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/821.jpg',
//       width: 1200,
//       height: 799,
//       srcSet: [
//         { src: '/wdng/821_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/821_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/822.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/822_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/822_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/833.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/833_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/833_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/834.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/834_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/834_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/896.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/896_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/896_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/900.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/900_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/900_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/914.jpg',
//       width: 1192,
//       height: 794,
//       srcSet: [
//         { src: '/wdng/914_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/914_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/915.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/915_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/915_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/920.jpg',
//       width: 533,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/920_127x192.jpg', width: 127, height: 192 },
//         { src: '/wdng/920_199x300.jpg', width: 199, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/931.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/wdng/931_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/931_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/950.jpg',
//       width: 1200,
//       height: 795,
//       srcSet: [
//         { src: '/wdng/950_256x169.jpg', width: 256, height: 169 },
//         { src: '/wdng/950_400x265.jpg', width: 400, height: 265 },
//       ],
//     },
//     {
//       src: '/wdng/952.jpg',
//       width: 1280,
//       height: 1920,
//       srcSet: [
//         { src: '/wdng/952_128x192.jpg', width: 128, height: 192 },
//         { src: '/wdng/952_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/wdng/965.jpg',
//       width: 1199,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/965_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/965_399x266.jpg', width: 399, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/966.jpg',
//       width: 1200,
//       height: 800,
//       srcSet: [
//         { src: '/wdng/966_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/966_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/wdng/976.jpg',
//       width: 1200,
//       height: 799,
//       srcSet: [
//         { src: '/wdng/976_256x170.jpg', width: 256, height: 170 },
//         { src: '/wdng/976_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//   ],
//   Клубы: [
//     {
//       src: '/club/017.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/017_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/017_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/040.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/040_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/040_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/061.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/061_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/061_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/079.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/079_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/079_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/085.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/085_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/085_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/111.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/111_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/111_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/127.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/127_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/127_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/138.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/138_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/138_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/156.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/156_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/156_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/158.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/158_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/158_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/168.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/168_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/168_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/178.jpg',
//       width: 1068,
//       height: 1600,
//       srcSet: [
//         { src: '/club/178_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/178_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/188.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/188_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/188_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/204.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/204_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/204_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/206.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/206_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/206_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/222.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/222_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/222_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/229.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/229_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/229_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/244.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/244_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/244_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/245.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/245_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/245_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/253.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/253_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/253_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/263.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/263_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/263_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/264.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/264_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/264_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/266.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/266_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/266_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/269.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/269_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/269_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/272.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/272_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/272_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/279.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/279_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/279_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/302.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/302_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/302_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/322.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/322_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/322_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/347.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/347_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/347_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/372.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/372_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/372_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/378.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/378_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/378_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/383.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/383_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/383_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/392.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/392_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/392_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/420.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/420_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/420_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/438.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/438_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/438_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/455.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/455_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/455_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/474.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/474_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/474_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/478.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/478_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/478_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/490.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/490_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/490_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/519.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/519_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/519_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/543.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/543_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/543_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/580.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/580_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/580_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/592.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/592_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/592_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/601.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/601_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/601_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/606.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/606_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/606_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/609.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/609_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/609_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/635.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/635_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/635_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/647.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/647_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/647_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/694.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/694_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/694_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/696.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/696_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/696_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/697.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/697_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/697_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/707.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/707_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/707_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/708.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/708_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/708_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/713.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/713_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/713_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/720.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/720_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/720_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/768.jpg',
//       width: 1600,
//       height: 1600,
//       srcSet: [
//         { src: '/club/768_192x192.jpg', width: 192, height: 192 },
//         { src: '/club/768_300x300.jpg', width: 300, height: 300 },
//       ],
//     },
//     {
//       src: '/club/780.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/780_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/780_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/814.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/814_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/814_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/838.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/838_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/838_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/855.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/855_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/855_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/866.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/866_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/866_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/871.jpg',
//       width: 1067,
//       height: 1600,
//       srcSet: [
//         { src: '/club/871_128x192.jpg', width: 128, height: 192 },
//         { src: '/club/871_200x300.jpg', width: 200, height: 300 },
//       ],
//     },
//     {
//       src: '/club/877.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/877_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/877_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/889.jpg',
//       width: 1920,
//       height: 1280,
//       srcSet: [
//         { src: '/club/889_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/889_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/914.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/914_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/914_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/930.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/930_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/930_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/976.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/976_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/976_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//     {
//       src: '/club/993.jpg',
//       width: 1920,
//       height: 1281,
//       srcSet: [
//         { src: '/club/993_256x170.jpg', width: 256, height: 170 },
//         { src: '/club/993_400x266.jpg', width: 400, height: 266 },
//       ],
//     },
//   ],
// }

// для динамических превьюх
const originalPhotos: PhotoAlbum = {
  Еду: [
    { src: '/food/032.jpg', width: 594, height: 893 },
    { src: '/food/041.jpg', width: 1500, height: 1000 },
    { src: '/food/106.jpg', width: 2000, height: 1333 },
    { src: '/food/151.jpg', width: 2000, height: 1333 },
    { src: '/food/176.jpg', width: 1417, height: 948 },
    { src: '/food/181.jpg', width: 676, height: 1016 },
    { src: '/food/214.jpg', width: 2000, height: 1333 },
    { src: '/food/267.jpg', width: 2000, height: 1333 },
    { src: '/food/276.jpg', width: 2000, height: 1333 },
    { src: '/food/357.jpg', width: 2000, height: 1333 },
    { src: '/food/387.jpg', width: 1920, height: 1280 },
    { src: '/food/416.jpg', width: 1920, height: 1280 },
    { src: '/food/444.jpg', width: 1920, height: 1280 },
    { src: '/food/449.jpg', width: 1500, height: 1000 },
    { src: '/food/458.jpg', width: 1500, height: 1000 },
    { src: '/food/466.jpg', width: 1500, height: 1000 },
    { src: '/food/519.jpg', width: 1421, height: 941 },
    { src: '/food/526.jpg', width: 1920, height: 1280 },
    { src: '/food/539.jpg', width: 1319, height: 877 },
    { src: '/food/540.jpg', width: 1920, height: 1280 },
    { src: '/food/557.jpg', width: 1920, height: 1280 },
    { src: '/food/568.jpg', width: 1271, height: 847 },
    { src: '/food/655.jpg', width: 1920, height: 1280 },
    { src: '/food/685.jpg', width: 2000, height: 1333 },
    { src: '/food/725.jpg', width: 1920, height: 1280 },
    { src: '/food/727.jpg', width: 2000, height: 1333 },
    { src: '/food/731.jpg', width: 1920, height: 1280 },
    { src: '/food/738.jpg', width: 1280, height: 1920 },
    { src: '/food/803.jpg', width: 2000, height: 1333 },
    { src: '/food/824.jpg', width: 1280, height: 1920 },
    { src: '/food/826.jpg', width: 1333, height: 2000 },
    { src: '/food/862.jpg', width: 1333, height: 2000 },
    { src: '/food/922.jpg', width: 2000, height: 1333 },
    { src: '/food/927.jpg', width: 1536, height: 1920 },
    { src: '/food/939.jpg', width: 1333, height: 2000 },
    { src: '/food/380.jpg', width: 1920, height: 1280 },
    { src: '/food/903.jpg', width: 1308, height: 1920 },
    { src: '/food/486.jpg', width: 1920, height: 1280 },
  ],
  Мероприятия: [
    { src: '/corp/027.jpg', width: 1920, height: 1280 },
    { src: '/corp/029.jpg', width: 2000, height: 1333 },
    { src: '/corp/043.jpg', width: 1920, height: 1280 },
    { src: '/corp/145.jpg', width: 1280, height: 1920 },
    { src: '/corp/192.jpg', width: 2000, height: 1333 },
    { src: '/corp/226.jpg', width: 2000, height: 1333 },
    { src: '/corp/246.jpg', width: 822, height: 1229 },
    { src: '/corp/283.jpg', width: 1920, height: 1280 },
    { src: '/corp/310.jpg', width: 2000, height: 1333 },
    { src: '/corp/354.jpg', width: 1460, height: 968 },
    { src: '/corp/368.jpg', width: 2000, height: 1333 },
    { src: '/corp/379.jpg', width: 1500, height: 1000 },
    { src: '/corp/418.jpg', width: 1920, height: 1280 },
    { src: '/corp/545.jpg', width: 1333, height: 2000 },
    { src: '/corp/585.jpg', width: 2000, height: 1333 },
    { src: '/corp/716.jpg', width: 1280, height: 1920 },
    { src: '/corp/741.jpg', width: 1920, height: 1280 },
    { src: '/corp/756.jpg', width: 1920, height: 1280 },
    { src: '/corp/803.jpg', width: 1920, height: 1280 },
    { src: '/corp/808.jpg', width: 2000, height: 1333 },
    { src: '/corp/816.jpg', width: 2000, height: 1333 },
    { src: '/corp/846.jpg', width: 2000, height: 1333 },
    { src: '/corp/923.jpg', width: 1500, height: 1000 },
    { src: '/corp/951.jpg', width: 1000, height: 1500 },
    { src: '/corp/962.jpg', width: 1799, height: 1200 },
  ],
  Производства: [
    { src: '/indu/007.jpg', width: 2000, height: 1333 },
    { src: '/indu/035.jpg', width: 1333, height: 2000 },
    { src: '/indu/055.jpg', width: 2000, height: 1333 },
    { src: '/indu/067.jpg', width: 2000, height: 1333 },
    { src: '/indu/089.jpg', width: 1333, height: 2000 },
    { src: '/indu/138.jpg', width: 2000, height: 1333 },
    { src: '/indu/175.jpg', width: 2000, height: 1333 },
    { src: '/indu/177.jpg', width: 2000, height: 1333 },
    { src: '/indu/244.jpg', width: 2000, height: 1333 },
    { src: '/indu/248.jpg', width: 2000, height: 1333 },
    { src: '/indu/266.jpg', width: 2000, height: 1333 },
    { src: '/indu/272.jpg', width: 2000, height: 1333 },
    { src: '/indu/293.jpg', width: 2000, height: 1333 },
    { src: '/indu/340.jpg', width: 2000, height: 1333 },
    { src: '/indu/348.jpg', width: 2000, height: 1333 },
    { src: '/indu/355.jpg', width: 2000, height: 1333 },
    { src: '/indu/361.jpg', width: 1333, height: 2000 },
    { src: '/indu/369.jpg', width: 1333, height: 2000 },
    { src: '/indu/466.jpg', width: 2000, height: 1333 },
    { src: '/indu/474.jpg', width: 1333, height: 2000 },
    { src: '/indu/496.jpg', width: 2000, height: 1333 },
    { src: '/indu/510.jpg', width: 1333, height: 2000 },
    { src: '/indu/554.jpg', width: 1333, height: 2000 },
    { src: '/indu/561.jpg', width: 1333, height: 2000 },
    { src: '/indu/566.jpg', width: 2000, height: 1333 },
    { src: '/indu/571.jpg', width: 2000, height: 1333 },
    { src: '/indu/587.jpg', width: 2000, height: 1333 },
    { src: '/indu/618.jpg', width: 2000, height: 1333 },
    { src: '/indu/652.jpg', width: 2000, height: 1333 },
    { src: '/indu/702.jpg', width: 2000, height: 1333 },
    { src: '/indu/706.jpg', width: 2000, height: 1333 },
    { src: '/indu/730.jpg', width: 2000, height: 1333 },
    { src: '/indu/737.jpg', width: 2000, height: 1333 },
    { src: '/indu/808.jpg', width: 2000, height: 1333 },
    { src: '/indu/828.jpg', width: 1333, height: 2000 },
    { src: '/indu/837.jpg', width: 1333, height: 2000 },
    { src: '/indu/962.jpg', width: 2000, height: 1334 },
    { src: '/indu/990.jpg', width: 2000, height: 1333 },
    { src: '/indu/993.jpg', width: 2000, height: 1333 },
  ],
  Свадьбы: [
    { src: '/wdng/100.jpg', width: 1200, height: 800 },
    { src: '/wdng/108.jpg', width: 1200, height: 800 },
    { src: '/wdng/136.jpg', width: 533, height: 800 },
    { src: '/wdng/145.jpg', width: 2000, height: 1334 },
    { src: '/wdng/155.jpg', width: 1200, height: 800 },
    { src: '/wdng/169.jpg', width: 1920, height: 1280 },
    { src: '/wdng/192.jpg', width: 1920, height: 1280 },
    { src: '/wdng/193.jpg', width: 1280, height: 853 },
    { src: '/wdng/202.jpg', width: 1200, height: 800 },
    { src: '/wdng/206.jpg', width: 1200, height: 800 },
    { src: '/wdng/208.jpg', width: 1200, height: 800 },
    { src: '/wdng/222.jpg', width: 1200, height: 799 },
    { src: '/wdng/293.jpg', width: 1200, height: 800 },
    { src: '/wdng/296.jpg', width: 1200, height: 800 },
    { src: '/wdng/333.jpg', width: 1675, height: 1675 },
    { src: '/wdng/363.jpg', width: 1200, height: 800 },
    { src: '/wdng/397.jpg', width: 1200, height: 799 },
    { src: '/wdng/421.jpg', width: 1167, height: 853 },
    { src: '/wdng/441.jpg', width: 1200, height: 800 },
    { src: '/wdng/528.jpg', width: 533, height: 800 },
    { src: '/wdng/529.jpg', width: 1200, height: 800 },
    { src: '/wdng/559.jpg', width: 1200, height: 800 },
    { src: '/wdng/565.jpg', width: 1200, height: 800 },
    { src: '/wdng/592.jpg', width: 1199, height: 800 },
    { src: '/wdng/614.jpg', width: 1199, height: 800 },
    { src: '/wdng/627.jpg', width: 1200, height: 800 },
    { src: '/wdng/642.jpg', width: 1333, height: 2000 },
    { src: '/wdng/648.jpg', width: 1199, height: 800 },
    { src: '/wdng/658.jpg', width: 1200, height: 800 },
    { src: '/wdng/663.jpg', width: 1334, height: 2000 },
    { src: '/wdng/692.jpg', width: 1200, height: 800 },
    { src: '/wdng/695.jpg', width: 1333, height: 2000 },
    { src: '/wdng/698.jpg', width: 533, height: 800 },
    { src: '/wdng/703.jpg', width: 1199, height: 800 },
    { src: '/wdng/718.jpg', width: 1333, height: 2000 },
    { src: '/wdng/737.jpg', width: 1200, height: 800 },
    { src: '/wdng/738.jpg', width: 682, height: 1024 },
    { src: '/wdng/759.jpg', width: 1200, height: 800 },
    { src: '/wdng/766.jpg', width: 1200, height: 798 },
    { src: '/wdng/808.jpg', width: 1920, height: 1280 },
    { src: '/wdng/821.jpg', width: 1200, height: 799 },
    { src: '/wdng/822.jpg', width: 1200, height: 800 },
    { src: '/wdng/833.jpg', width: 533, height: 800 },
    { src: '/wdng/834.jpg', width: 1200, height: 800 },
    { src: '/wdng/896.jpg', width: 1199, height: 800 },
    { src: '/wdng/900.jpg', width: 533, height: 800 },
    { src: '/wdng/914.jpg', width: 1192, height: 794 },
    { src: '/wdng/915.jpg', width: 1200, height: 800 },
    { src: '/wdng/920.jpg', width: 533, height: 800 },
    { src: '/wdng/931.jpg', width: 1920, height: 1280 },
    { src: '/wdng/950.jpg', width: 1200, height: 795 },
    { src: '/wdng/952.jpg', width: 1280, height: 1920 },
    { src: '/wdng/965.jpg', width: 1199, height: 800 },
    { src: '/wdng/966.jpg', width: 1200, height: 800 },
    { src: '/wdng/976.jpg', width: 1200, height: 799 },
  ],
  Клубы: [
    { src: '/club/017.jpg', width: 1067, height: 1600 },
    { src: '/club/061.jpg', width: 1067, height: 1600 },
    { src: '/club/079.jpg', width: 1920, height: 1281 },
    { src: '/club/085.jpg', width: 1920, height: 1281 },
    { src: '/club/040.jpg', width: 1920, height: 1281 },
    { src: '/club/111.jpg', width: 1067, height: 1600 },
    { src: '/club/127.jpg', width: 1920, height: 1281 },
    { src: '/club/138.jpg', width: 1920, height: 1281 },
    { src: '/club/156.jpg', width: 1920, height: 1281 },
    { src: '/club/158.jpg', width: 1067, height: 1600 },
    { src: '/club/168.jpg', width: 1920, height: 1281 },
    { src: '/club/178.jpg', width: 1068, height: 1600 },
    { src: '/club/188.jpg', width: 1920, height: 1281 },
    { src: '/club/204.jpg', width: 1920, height: 1281 },
    { src: '/club/206.jpg', width: 1920, height: 1281 },
    { src: '/club/222.jpg', width: 1920, height: 1281 },
    { src: '/club/229.jpg', width: 1920, height: 1281 },
    { src: '/club/244.jpg', width: 1920, height: 1281 },
    { src: '/club/245.jpg', width: 1920, height: 1281 },
    { src: '/club/253.jpg', width: 1920, height: 1281 },
    { src: '/club/263.jpg', width: 1920, height: 1281 },
    { src: '/club/264.jpg', width: 1067, height: 1600 },
    { src: '/club/266.jpg', width: 1920, height: 1281 },
    { src: '/club/269.jpg', width: 1920, height: 1281 },
    { src: '/club/272.jpg', width: 1920, height: 1281 },
    { src: '/club/279.jpg', width: 1920, height: 1281 },
    { src: '/club/302.jpg', width: 1920, height: 1281 },
    { src: '/club/322.jpg', width: 1920, height: 1281 },
    { src: '/club/347.jpg', width: 1067, height: 1600 },
    { src: '/club/372.jpg', width: 1920, height: 1281 },
    { src: '/club/378.jpg', width: 1067, height: 1600 },
    { src: '/club/383.jpg', width: 1920, height: 1281 },
    { src: '/club/392.jpg', width: 1920, height: 1281 },
    { src: '/club/420.jpg', width: 1920, height: 1280 },
    { src: '/club/438.jpg', width: 1920, height: 1281 },
    { src: '/club/455.jpg', width: 1920, height: 1281 },
    { src: '/club/474.jpg', width: 1920, height: 1280 },
    { src: '/club/478.jpg', width: 1920, height: 1281 },
    { src: '/club/490.jpg', width: 1920, height: 1281 },
    { src: '/club/519.jpg', width: 1920, height: 1280 },
    { src: '/club/543.jpg', width: 1067, height: 1600 },
    { src: '/club/580.jpg', width: 1920, height: 1281 },
    { src: '/club/592.jpg', width: 1920, height: 1281 },
    { src: '/club/601.jpg', width: 1920, height: 1281 },
    { src: '/club/606.jpg', width: 1920, height: 1281 },
    { src: '/club/609.jpg', width: 1920, height: 1281 },
    { src: '/club/635.jpg', width: 1920, height: 1280 },
    { src: '/club/647.jpg', width: 1920, height: 1281 },
    { src: '/club/694.jpg', width: 1920, height: 1281 },
    { src: '/club/696.jpg', width: 1920, height: 1281 },
    { src: '/club/697.jpg', width: 1920, height: 1281 },
    { src: '/club/707.jpg', width: 1920, height: 1281 },
    { src: '/club/708.jpg', width: 1920, height: 1281 },
    { src: '/club/713.jpg', width: 1067, height: 1600 },
    { src: '/club/720.jpg', width: 1920, height: 1281 },
    { src: '/club/768.jpg', width: 1600, height: 1600 },
    { src: '/club/780.jpg', width: 1920, height: 1280 },
    { src: '/club/814.jpg', width: 1920, height: 1281 },
    { src: '/club/838.jpg', width: 1920, height: 1281 },
    { src: '/club/855.jpg', width: 1920, height: 1281 },
    { src: '/club/866.jpg', width: 1920, height: 1281 },
    { src: '/club/871.jpg', width: 1067, height: 1600 },
    { src: '/club/877.jpg', width: 1920, height: 1281 },
    { src: '/club/889.jpg', width: 1920, height: 1280 },
    { src: '/club/914.jpg', width: 1920, height: 1281 },
    { src: '/club/930.jpg', width: 1920, height: 1281 },
    { src: '/club/976.jpg', width: 1920, height: 1281 },
    { src: '/club/993.jpg', width: 1920, height: 1281 },
  ],
}

export const albums = {
  food: 'Еду',
  corporative: 'Мероприятия',
  industrial: 'Производства',
  weddings: 'Свадьбы',
  clubs: 'Клубы',
}

export const shuffledPhotos: PhotoAlbum = Object.fromEntries(
  Object.entries(originalPhotos).map(([key, value]) => [
    key,
    shuffleArray(value),
  ])
)
