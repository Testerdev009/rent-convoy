import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-manhattan',
    predictionPlace: {
      address: 'Manhattan, New York, NY',
      bounds: new LatLngBounds(new LatLng(40.882074965, -73.907), new LatLng(40.679573, -74.047313153)),
    },
  },
  {
    id: 'default-brooklyn',
    predictionPlace: {
      address: 'Brooklyn, New York, NY',
      bounds: new LatLngBounds(new LatLng(40.640165949, -73.933611006), new LatLng(40.611036046, -73.958400982)),
    },
  },
  {
    id: 'default-southampton',
    predictionPlace: {
      address: 'Southampton, NY',
      bounds: new LatLngBounds(new LatLng(40.993494354, -72.330519922), new LatLng(40.818187107, -72.500029)),
    },
  },
  {
    id: 'default-amagansett',
    predictionPlace: {
      address: 'Amagansett, NY',
      bounds: new LatLngBounds(new LatLng(41.043722605, -72.017324), new LatLng(40.949337839, -72.162746)),
    },
  },
  {
    id: 'default-whiteplains',
    predictionPlace: {
      address: 'White Plains, NY',
      bounds: new LatLngBounds(new LatLng(41.07383, -73.719524), new LatLng(40.98259, -73.843608)),
    },
  },
];
export default defaultLocations;
