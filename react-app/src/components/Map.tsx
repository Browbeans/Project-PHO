interface Props {
  bar: {
    title: string;
    image: string;
    info: string;
    lat: number;
    lng: number;
  };
}

function Map(props: Props) {
  const width = 200;
  const height = 150;
  const zoom = 16;
  return (
    <img
      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${props.bar.lng},${props.bar.lat},${zoom}/${width}x${height}@2x?access_token=pk.eyJ1IjoiYnJvd2JlYW5zIiwiYSI6ImNrbDIybGQ2ZzBtZ2UyeW80cjhpcjcycTgifQ.Q6gkFkBhlqFEKapZic4Fjw`}
      alt="This is an image of a map on the current bar"
    />
  );
}

export default Map;
