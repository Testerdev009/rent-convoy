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
      bounds: new LatLngBounds(new LatLng(40.753250, -74.003807), new LatLng(39.92248, -73.78287)),
    },
  },
  {
    id: 'default-brooklyn',
    predictionPlace: {
      address: 'Brooklyn, New York, NY',
      bounds: new LatLngBounds(new LatLng(40.678177, -73.944160), new LatLng(39.92248, -73.78287)),
    },
  },
  {
    id: 'default-southampton',
    predictionPlace: {
      address: 'Southampton, NY',
      bounds: new LatLngBounds(new LatLng(50.904968, -1.403230), new LatLng(49.904968, -0.403230)),
    },
  },
  {
    id: 'default-amagansett',
    predictionPlace: {
      address: 'Amagansett, NY',
      bounds: new LatLngBounds(new LatLng(40.974049, -72.134361), new LatLng(39.974049, -71.134361)),
    },
  },
  {
    id: 'default-whiteplains',
    predictionPlace: {
      address: 'White Plains, NY',
      bounds: new LatLngBounds(new LatLng(41.037529911026596, -73.76275444003011), new LatLng(40.037529911026596, -72.76275444003011)),
    },
  },
];
export default defaultLocations;
