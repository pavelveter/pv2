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
