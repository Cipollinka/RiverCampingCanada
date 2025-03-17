import {ILocation} from '@/navigation/types';

export const LOCATIONS: Record<string, ILocation> = {
  bColumbia: {
    id: 1,
    image: require('@/assets/images/location/b-columbia.png'),
    title: 'British Columbia',
    items: [
      {
        id: 1,
        title: 'Stamp River Provincial Park',
        image: require('@/assets/images/location/details/1.png'),
        description:
          'Located on Vancouver Island, this park features 23 camping sites along the Stamp River, renowned for its salmon runs and scenic waterfalls.',
        coordinates: {
          latitude: 49.25,
          longitude: -124.8,
        },
      },
      {
        id: 2,
        title: 'Driftwood Provincial Park',
        image: require('@/assets/images/location/details/2.png'),
        description:
          'Situated on the south shore of the Ottawa River, this park offers 80 campsites, two sandy beaches, and opportunities for boating and fishing.',
        coordinates: {
          latitude: 45.9,
          longitude: -77.5,
        },
      },
      {
        id: 3,
        title: 'Elora Gorge Conservation Area',
        image: require('@/assets/images/location/details/3.png'),
        description:
          'Located at the western edge of Elora, Ontario, this area features a 2 km-long gorge with 22-meter-high limestone cliffs, offering camping, hiking, and water activities.',
        coordinates: {
          latitude: 43.6833,
          longitude: -80.4333,
        },
      },
    ],
  },
  alberta: {
    id: 2,
    image: require('@/assets/images/location/alberta.png'),
    title: 'Alberta',
    items: [
      {
        id: 4,
        title: 'La Biche River Wildland Provincial Park',
        image: require('@/assets/images/location/details/4.png'),
        description:
          'Located in northern Alberta, this park offers backcountry camping along the La Biche River, ideal for canoeing and observing diverse wildlife.',
        coordinates: {
          latitude: 54.0,
          longitude: -113.5,
        },
      },
      {
        id: 5,
        title: 'Peter Lougheed Provincial Park',
        image: require('@/assets/images/location/details/5.png'),
        description:
          'Situated in Kananaskis Country, this park offers campgrounds near the Upper and Lower Kananaskis Lakes, providing fishing and boating opportunities.',
        coordinates: {
          latitude: 50.9833,
          longitude: -115.1667,
        },
      },
      {
        id: 6,
        title: 'Aspen Crossing',
        image: require('@/assets/images/location/details/6.png'),
        description:
          'Located near Mossleigh, Aspen Crossing offers unique camping experiences in converted railway cabooses, combining comfort with a touch of history.',
        coordinates: {
          latitude: 50.0,
          longitude: -113.0,
        },
      },
    ],
  },
  quebec: {
    id: 3,
    image: require('@/assets/images/location/quebec.png'),
    title: 'Quebec',
    items: [
      {
        id: 7,
        title: 'La Mauricie National Park',
        image: require('@/assets/images/location/details/7.png'),
        description:
          'Located between Montreal and Quebec City, this park offers campgrounds near several lakes and rivers, ideal for canoeing, kayaking, and fishing.',
        coordinates: {
          latitude: 46.5667,
          longitude: -72.9667,
        },
      },
      {
        id: 8,
        title: 'Parc National de la Jacques-Cartier',
        image: require('@/assets/images/location/details/8.png'),
        description:
          'Situated near Quebec City, this park features campgrounds along the Jacques-Cartier River, known for its deep valleys and opportunities for rafting and fishing.',
        coordinates: {
          latitude: 47.0833,
          longitude: -71.2333,
        },
      },
      {
        id: 9,
        title: 'Driftwood Provincial Park',
        image: require('@/assets/images/location/details/9.png'),
        description:
          'Located on the south shore of the Ottawa River, this park offers 80 campsites, two sandy beaches, and opportunities for boating and fishing.',
        coordinates: {
          latitude: 45.9,
          longitude: -77.5,
        },
      },
    ],
  },
  ontario: {
    id: 4,
    image: require('@/assets/images/location/ontario.png'),
    title: 'Ontario',
    items: [
      {
        id: 10,
        title: 'Rushing River Provincial Park',
        image: require('@/assets/images/location/details/10.png'),
        description:
          'Situated 20 km southeast of Kenora, this park offers camping at the mouth of the Rushing River, with opportunities for swimming, boating, and fishing.',
        coordinates: {
          latitude: 49.7167,
          longitude: -94.4167,
        },
      },
      {
        id: 11,
        title: 'Elora Gorge Conservation Area',
        image: require('@/assets/images/location/details/11.png'),
        description:
          'Located at the western edge of Elora, this area features a 2 km-long gorge with 22-meter-high limestone cliffs, offering camping, hiking, and water activities.',
        coordinates: {
          latitude: 43.6833,
          longitude: -80.4333,
        },
      },
      {
        id: 12,
        title: 'Driftwood Provincial Park',
        image: require('@/assets/images/location/details/12.png'),
        description:
          'Situated on the south shore of the Ottawa River, this park offers 80 campsites, two sandy beaches, and opportunities for boating and fishing.',
        coordinates: {
          latitude: 45.9,
          longitude: -77.5,
        },
      },
    ],
  },
};
