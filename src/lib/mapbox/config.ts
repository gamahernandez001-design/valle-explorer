export const mapboxConfig = {
  token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '',
  center: {
    lat: 32.0853,
    lng: -116.6013,
  },
  zoom: 11,
};
